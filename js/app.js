const $ = s => document.querySelector(s);
const norm = s => s.toLowerCase().replace(/[^a-z\u0600-\u06ff]/g, "");

/* ===== Log activity database (localStorage; ganti adapter ini dengan Supabase/Firebase bila perlu) ===== */
const DB = {
  key: "nahwu-scaffold-log-v1",
  all() { try { return JSON.parse(localStorage.getItem(this.key) || "[]"); } catch { return []; } },
  add(e) { const l = this.all(); l.push({ t: Date.now(), ...e }); localStorage.setItem(this.key, JSON.stringify(l.slice(-500))); renderDash(); renderMode(); },
  reset() { localStorage.removeItem(this.key); renderDash(); renderMode(); loadItem(); }
};

/* ===== TAHAP 3: automatic fading — mode dikalibrasi dari akurasi 25 langkah terakhir ===== */
function accuracy() {
  const s = DB.all().filter(e => e.type === "step").slice(-25);
  return s.length < 5 ? 0 : s.filter(e => e.ok).length / s.length;
}
const mode = () => { const a = accuracy(); return a >= 0.85 ? "minimal" : a >= 0.6 ? "partial" : "full"; };
const MODE_TXT = {
  full: "Bantuan penuh: pilihan jawaban + tombol petunjuk",
  partial: "Bantuan sebagian: pilihan jawaban, petunjuk hanya setelah salah",
  minimal: "Bantuan minimal: ketik jawaban sendiri (fill-in-the-blank)"
};
const MODE_SHORT = {
  full: "Bantuan Penuh (Full)",
  partial: "Bantuan Sebagian (Partial)",
  minimal: "Bantuan Minimal (Fading)"
};

function renderMode() {
  const m = mode();
  const pct = Math.round(accuracy() * 100);
  $("#mode").textContent = MODE_TXT[m] + ` · akurasi ${pct}%`;
  $("#mode").dataset.m = m;
  $("#btn-hint").hidden = m !== "full";

  if ($("#side-mode-badge")) {
    $("#side-mode-badge").textContent = MODE_SHORT[m];
    $("#side-acc-bar").style.width = `${pct}%`;
    $("#side-acc-txt").textContent = `Akurasi: ${pct}% (25 langkah terakhir)`;
  }
}

/* ===== SIDEBAR NAVIGATION & MOBILE DRAWER ===== */
function initSidebar() {
  const sidebar = $("#sidebar");
  const backdrop = $("#backdrop");
  const navItems = document.querySelectorAll(".nav-item");

  const closeMenu = () => {
    sidebar.classList.remove("open");
    backdrop.hidden = true;
  };

  if ($("#btn-menu")) {
    $("#btn-menu").onclick = () => {
      sidebar.classList.add("open");
      backdrop.hidden = false;
    };
  }
  backdrop.onclick = closeMenu;

  navItems.forEach(item => {
    item.onclick = () => {
      navItems.forEach(n => n.classList.remove("active"));
      item.classList.add("active");
      closeMenu();
    };
  });

  const sections = ["showcase", "modul-materi", "latihan", "asesmen", "dasbor"]
    .map(id => document.getElementById(id))
    .filter(Boolean);

  window.addEventListener("scroll", () => {
    const pos = window.scrollY + 180;
    let current = "showcase";
    for (const sec of sections) {
      if (pos >= sec.offsetTop) current = sec.id;
    }
    navItems.forEach(n => {
      n.classList.toggle("active", n.dataset.target === current);
    });
  }, { passive: true });
}

/* ===== TAHAP 1: Kitab Tervalidasi & Pemodelan Analisis Kata ===== */
let activeKitabIdx = 0;
let activePasalIdx = 0;

function renderKitabReader() {
  const kitab = KITAB_LIBRARY[activeKitabIdx];
  const pasal = kitab.pasal[activePasalIdx] || kitab.pasal[0];

  $("#reader-book-meta").textContent = `${kitab.pengarang} · ${pasal.nama}`;
  $("#reader-book-title").textContent = kitab.judul;

  $("#reader-chapter-tabs").innerHTML = kitab.pasal.map((p, idx) =>
    `<button type="button" class="${idx === activePasalIdx ? "on" : ""}" data-p="${idx}">${p.nama}</button>`
  ).join("");

  document.querySelectorAll("#reader-chapter-tabs button").forEach(btn => {
    btn.onclick = () => {
      activePasalIdx = Number(btn.dataset.p);
      renderKitabReader();
    };
  });

  $("#hero-sentence").innerHTML = pasal.tokens.map((t, i) =>
    `<button type="button" class="w" data-i="${i}">${t.w}</button>`
  ).join(" ");

  $("#tip").innerHTML = `<p class="tip-placeholder">Klik salah satu lafaz Arab pada <strong>${pasal.nama}</strong> di atas untuk melihat rincian analisis dan rujukan kitabnya.</p>`;

  document.querySelectorAll("#hero-sentence .w").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll("#hero-sentence .w").forEach(x => x.classList.remove("on"));
      btn.classList.add("on");

      const tok = pasal.tokens[Number(btn.dataset.i)];
      $("#tip").innerHTML = `
        <div class="tip-header">
          <span class="tip-badge">Termasuk Kata: ${tok.qism}</span>
          <h3 lang="ar" dir="rtl">${tok.w}</h3>
        </div>
        <div class="tip-grid">
          <div class="tip-cell">
            <small>1. Aqsām al-Kalimah</small>
            <strong>${tok.qism}</strong>
          </div>
          <div class="tip-cell">
            <small>2. Hukum I‘rab</small>
            <strong>${tok.hukum}</strong>
          </div>
          <div class="tip-cell">
            <small>3. Jabatan (Mawqi‘)</small>
            <strong>${tok.jabatan}</strong>
          </div>
          <div class="tip-cell">
            <small>4. Alamat I‘rab</small>
            <strong>${tok.alamat}</strong>
          </div>
          <div class="tip-cell full-span">
            <small>5. Ta’līl (Argumentasi Gramatikal)</small>
            <span>${tok.talil}</span>
          </div>
          <div class="tip-cell full-span ref-cell">
            <small>6. Rujukan Kaidah (Takhrij Kitab)</small>
            <strong>${tok.ref}</strong>
          </div>
        </div>
      `;
    };
  });
}

function initShowcase() {
  renderKitabReader();

  $("#materi-tabs").innerHTML = Object.entries(MATERI).map(([k, v], i) =>
    `<button data-k="${k}" class="${i ? "" : "on"}">${v.judul}</button>`).join("");

  const show = k => {
    const m = MATERI[k];
    let html = `<div class="materi-header-box"><p>${m.ket}</p></div>`;

    if (m.bab) {
      html += m.bab.map((b, idx) => `
        <details class="bab-item" ${idx === 0 ? "open" : ""}>
          <summary>${b.judul}</summary>
          <div class="bab-body">
            <div class="nazhm-box">
              <span class="nazhm-tag">Matan Nazhm al-‘Imrīthī</span>
              <div class="nazhm-ar" lang="ar" dir="rtl">${b.nazhm}</div>
              <p class="nazhm-tr">“${b.terjemah}”</p>
            </div>
            <div class="syarah-text">${b.syarah}</div>
          </div>
        </details>
      `).join("");
    } else if (m.jenis) {
      html += m.jenis.map(j => `
        <details class="bab-item">
          <summary>${j[0]}</summary>
          <div class="bab-body">
            <p>${j[1]}</p>
            <div class="nazhm-box">
              <span class="nazhm-tag">Contoh Penerapan</span>
              <div class="nazhm-ar" lang="ar" dir="rtl">${j[2]}</div>
            </div>
          </div>
        </details>
      `).join("");
    }

    $("#materi-body").innerHTML = html;
  };

  document.querySelectorAll("#materi-tabs button").forEach(b => b.onclick = () => {
    document.querySelectorAll("#materi-tabs button").forEach(x => x.classList.remove("on"));
    b.classList.add("on");
    show(b.dataset.k);
  });

  show("marfu");
}

/* ===== TAHAP 2-4: ruang latihan, tiered hints, feedback ===== */
let cur = 0, st = null;
const match = (v, ans) => { const a = norm(ans), b = norm(v); return a === b || (b.length >= 4 && a.startsWith(b)); };
const tailText = it => `${it.w[it.t]} berkedudukan sebagai ${it.a.jab}, maka ${it.a.hukum} dengan alamat ${it.a.alamat}, karena ia ${it.a.tail.toLowerCase()}.`;
function hintText(it, s, tier) {
  if (tier === 1) return `<b>Pertanyaan pemantik:</b> ${s.q}`;
  if (tier === 2) return `<b>Kaidah:</b> ${RULE[it.a.jab]}`;
  return `<b>Pemodelan:</b> ${s.n} = <b>${it.a[s.k]}</b>. ${tailText(it)}`;
}
function loadItem() {
  const it = ITEMS[cur % ITEMS.length];
  st = { wrong: {}, lock: {}, first: {} };
  $("#ws-sentence").innerHTML = it.w.map((w, i) => `<span class="${i === it.t ? "tgt" : ""}">${w}</span>`).join(" ");
  $("#lvl").textContent = `Level ${it.lv} dari 3`;
  $("#hints").innerHTML = "";
  $("#fb").hidden = true; $("#btn-next").hidden = true; $("#btn-check").hidden = false;
  const txt = mode() === "minimal";
  $("#cols").innerHTML = STEPS.map((s, i) => `<div class="col" data-k="${s.k}"><label>${i + 1}. ${s.n}` +
    (txt ? `<input autocomplete="off" placeholder="Ketik jawaban">` :
      `<select><option value="">Pilih…</option>${s.o.map(o => `<option>${o}</option>`).join("")}</select>`) + `</label></div>`).join("");
  renderMode();
}
function check() {
  const it = ITEMS[cur % ITEMS.length];
  STEPS.forEach(s => {
    if (st.lock[s.k]) return;
    const col = document.querySelector(`.col[data-k=${s.k}]`), el = col.querySelector("select,input");
    if (!el.value) return;
    const ok = match(el.value, it.a[s.k]);
    if (st.first[s.k] === undefined) { st.first[s.k] = ok; DB.add({ type: "step", item: cur % ITEMS.length, lv: it.lv, step: s.k, ok }); }
    if (ok) { col.className = "col ok"; el.disabled = true; st.lock[s.k] = 1; return; }
    const tier = Math.min(3, (st.wrong[s.k] = (st.wrong[s.k] || 0) + 1));
    col.className = "col bad"; DB.add({ type: "hint", step: s.k, tier });
    $("#hints").insertAdjacentHTML("afterbegin", `<p class="t${tier}"><small>Langkah ${s.n} · salah ke-${tier}</small>${hintText(it, s, tier)}</p>`);
    if (tier === 3) { el.value = it.a[s.k]; el.disabled = true; st.lock[s.k] = 1; col.className = "col helped"; }
  });
  if (STEPS.every(s => st.lock[s.k])) feedback(it);
}
function feedback(it) {
  const miss = STEPS.filter(s => !st.first[s.k]);
  $("#fb").hidden = false; $("#btn-check").hidden = true; $("#btn-next").hidden = false;
  $("#fb").innerHTML = `<h3>Umpan Balik Formatif</h3><div class="chips">${STEPS.map(s =>
    `<span class="chip ${st.first[s.k] ? "ok" : "bad"}">${s.n}: ${it.a[s.k]}</span>`).join("")}</div>
    <p class="talil"><b>Ta’līl:</b> ${tailText(it)}</p>` +
    (miss.length ? `<h4>Miskonsepsi yang perlu diluruskan</h4><ul>${miss.map(s => `<li><b>${s.n}.</b> ${DIAG[s.k]}</li>`).join("")}</ul>`
      : `<p>Semua langkah benar pada percobaan pertama.</p>`);
}

/* ===== TAHAP 5: asesmen mandiri (semua perancah mati) ===== */
let asm = [];
function startAssess() {
  asm = [...ITEMS].sort(() => Math.random() - 0.5).slice(0, 3);
  $("#asm-body").innerHTML = asm.map((it, i) => `<div class="asm"><p class="ar" lang="ar" dir="rtl">${it.w.map((w, j) =>
    j === it.t ? `<span class="tgt">${w}</span>` : w).join(" ")}</p>
    <textarea data-i="${i}" rows="3" placeholder="Tulis i‘rab dan ta’līl kata yang disorot…"></textarea><div class="res"></div></div>`).join("");
  $("#btn-asm").hidden = false;
}
function submitAssess() {
  let total = 0;
  document.querySelectorAll(".asm").forEach((d, i) => {
    const it = asm[i], t = norm(d.querySelector("textarea").value);
    const hit = it.kw.map(k => k.split("|").some(a => t.includes(a)));
    const sc = hit.filter(Boolean).length / hit.length; total += sc;
    d.querySelector(".res").innerHTML = `<div class="chips">${["Jabatan", "Hukum", "Alamat", "Ta’līl"].map((n, j) =>
      `<span class="chip ${hit[j] ? "ok" : "bad"}">${n}</span>`).join("")}</div><p>Kunci: ${it.a.jab}, ${it.a.hukum}, ${it.a.alamat}, ${it.a.tail}.</p>`;
  });
  DB.add({ type: "assess", score: total / asm.length });
  $("#btn-asm").hidden = true;
}

/* ===== Dasbor rekam jejak ===== */
function bar(label, p) { return `<div class="bar"><span>${label}</span><i style="--p:${Math.round(p * 100)}%"></i><b>${Math.round(p * 100)}%</b></div>`; }
function renderDash() {
  const l = DB.all(), s = l.filter(e => e.type === "step"), as = l.filter(e => e.type === "assess");
  const rate = a => a.length ? a.filter(e => e.ok).length / a.length : 0;
  $("#dash").innerHTML = s.length || as.length ? `
    <div><h4>Akurasi per langkah</h4>${STEPS.map(x => bar(x.n, rate(s.filter(e => e.step === x.k)))).join("")}</div>
    <div><h4>Akurasi per level</h4>${[1, 2, 3].map(v => bar("Level " + v, rate(s.filter(e => e.lv === v)))).join("")}
    <h4>Asesmen mandiri</h4>${as.length ? as.slice(-4).map((e, i) => bar("Percobaan " + (as.length - Math.min(4, as.length) + i + 1), e.score)).join("") : "<p class='muted'>Belum ada asesmen.</p>"}</div>
    <div><h4>Ringkasan Aktivitas</h4><p>${s.length} langkah dijawab · ${l.filter(e => e.type === "hint").length} petunjuk dipakai</p><p>Mode perancah: <b>${MODE_TXT[mode()]}</b></p></div>`
    : `<div style="grid-column:1/-1"><p class="muted">Belum ada rekam jejak. Mulai dari Ruang Latihan Terbimbing, lalu kembali ke sini untuk melihat grafik akurasi.</p></div>`;
}

$("#btn-check").onclick = check;
$("#btn-next").onclick = () => { cur++; loadItem(); };
$("#btn-hint").onclick = () => {
  const it = ITEMS[cur % ITEMS.length], s = STEPS.find(x => !st.lock[x.k]);
  if (s) { $("#hints").insertAdjacentHTML("afterbegin", `<p class="t1"><small>Langkah ${s.n}</small>${hintText(it, s, 1)}</p>`); DB.add({ type: "hint", step: s.k, tier: 1 }); }
};
$("#btn-asm").onclick = submitAssess;
$("#btn-asm-new").onclick = startAssess;
$("#btn-reset").onclick = () => confirm("Hapus semua rekam jejak?") && DB.reset();

initSidebar();
initShowcase();
loadItem();
startAssess();
renderDash();
