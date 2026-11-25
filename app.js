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
function renderMode() {
  const m = mode();
  $("#mode").textContent = MODE_TXT[m] + ` · akurasi ${Math.round(accuracy() * 100)}%`;
  $("#mode").dataset.m = m;
  $("#btn-hint").hidden = m !== "full";
}

/* ===== TAHAP 1: showcase & modeling ===== */
function initShowcase() {
  $("#hero-sentence").innerHTML = MODEL.map((m, i) => `<button class="w" data-i="${i}">${m.w}</button>`).join(" ");
  document.querySelectorAll(".w").forEach(b => b.onclick = () => {
    document.querySelectorAll(".w").forEach(x => x.classList.remove("on"));
    b.classList.add("on");
    const m = MODEL[b.dataset.i];
    $("#tip").innerHTML = `<h3 lang="ar" dir="rtl">${m.w}</h3><ol>${m.s.map((v, j) =>
      `<li style="animation-delay:${j * 0.25}s"><small>${MODEL_LABELS[j]}</small>${v}</li>`).join("")}</ol>`;
  });
  $("#materi-tabs").innerHTML = Object.entries(MATERI).map(([k, v], i) =>
    `<button data-k="${k}" class="${i ? "" : "on"}">${v.judul}</button>`).join("");
  const show = k => {
    const m = MATERI[k];
    $("#materi-body").innerHTML = `<p>${m.ket}</p>` + m.jenis.map(j =>
      `<details><summary>${j[0]}</summary><p>${j[1]}</p><p class="ar" lang="ar" dir="rtl">${j[2]}</p></details>`).join("");
  };
  document.querySelectorAll("#materi-tabs button").forEach(b => b.onclick = () => {
    document.querySelectorAll("#materi-tabs button").forEach(x => x.classList.remove("on"));
    b.classList.add("on"); show(b.dataset.k);
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
  $("#fb").innerHTML = `<h3>Umpan balik</h3><div class="chips">${STEPS.map(s =>
    `<span class="chip ${st.first[s.k] ? "ok" : "bad"}">${s.n}: ${it.a[s.k]}</span>`).join("")}</div>
    <p class="talil" lang="ar"><b>Ta’līl:</b> ${tailText(it)}</p>` +
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
    <h4>Asesmen mandiri</h4>${as.length ? as.slice(-4).map((e, i) => bar("Percobaan " + (as.length - Math.min(4, as.length) + i + 1), e.score)).join("") : "<p>Belum ada asesmen.</p>"}</div>
    <div><h4>Ringkasan</h4><p>${s.length} langkah dijawab · ${l.filter(e => e.type === "hint").length} petunjuk dipakai</p><p>Mode perancah: <b>${MODE_TXT[mode()]}</b></p></div>`
    : `<p>Belum ada rekam jejak. Mulai dari Ruang Latihan, lalu kembali ke sini.</p>`;
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
initShowcase(); loadItem(); startAssess(); renderDash();
