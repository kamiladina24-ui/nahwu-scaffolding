# Nahwu Scaffolding

Website pembelajaran i‘rab dan ta’līl berbasis scaffolding untuk santri. Situs statis (HTML, CSS, JS), tanpa instalasi, jalan di HP maupun laptop.

## Lima tahap

| Tahap | Fitur | Lokasi kode |
|---|---|---|
| 1 Showcase & Modeling | Teks Arab interaktif + tooltip pembedahan i‘rab, modul materi marfū‘āt/manshūbāt/makhfūdhāt | `initShowcase()` |
| 2 Tiered hints | Salah 1: pertanyaan pemantik. Salah 2: kaidah spesifik. Salah 3: pemodelan + penjelasan | `check()`, `hintText()` |
| 3 Latihan bertingkat & fading | Mode bantuan (dropdown → ketik sendiri) dikalibrasi dari log aktivitas | `DB`, `accuracy()`, `mode()` |
| 4 Umpan balik formatif | Warna per kolom + ta’līl + diagnosis miskonsepsi | `feedback()`, `DIAG` |
| 5 Asesmen mandiri | Semua perancah mati, santri menulis i‘rab dan ta’līl | `startAssess()`, `submitAssess()` |

Dasbor rekam jejak: `renderDash()`.

## Menjalankan

Buka `index.html` di browser, atau:

```bash
python3 -m http.server 8000
```

## Deploy ke GitHub Pages

1. Buat repo, lalu `git init && git add . && git commit -m "Nahwu Scaffolding" && git push`.
2. Settings → Pages → Branch `main`, folder `/ (root)`.

## Mengisi materi dan soal

Semua konten ada di `js/data.js`: `MATERI` (isi dari materi marfū‘ātil asmā’ Anda), `ITEMS` (bank soal, level 1-3), `RULE` (kaidah), `DIAG` (miskonsepsi).

## Catatan

- Log aktivitas disimpan di `localStorage` perangkat santri. Untuk database sungguhan (Supabase/Firebase), ganti objek `DB` di `js/app.js`.
- Pencocokan jawaban asesmen memakai kata kunci, jadi hasilnya perlu dicek guru untuk jawaban yang tidak umum.
