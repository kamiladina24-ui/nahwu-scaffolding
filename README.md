# Nahwu Scaffolding

Website pembelajaran i‘rab dan ta’līl berbasis scaffolding untuk santri Ponpes Al-Fattah Kartasura. Seluruh analisis gramatikal dikurasi menggunakan rujukan mu‘tabar (*Alfiyyah Ibnu Mālik*, *Syarḥ Ibnu ‘Aqīl*, dan *Nazhm al-‘Imrīthī* beserta *Syarḥ Ya‘nī*).

## Lima Tahap Scaffolding

| Tahap | Fitur | Lokasi Kode |
|---|---|---|
| 1 Bedah Nash & Kitab | Teks Arab interaktif + kartu analisis 5 langkah + takhrij rujukan kitab | `renderKitabReader()` |
| 2 Modul Materi & Tiered Hints | Modul lengkap Marfū‘āt al-Asmā’ (Bait 105–175) + petunjuk bertingkat 3 level | `initShowcase()`, `hintText()` |
| 3 Latihan Bertingkat & Fading | Mode bantuan (Full → Partial → Minimal) dikalibrasi otomatis dari log akurasi | `DB`, `accuracy()`, `mode()` |
| 4 Umpan Balik Formatif | Koreksi warna per kolom + ta’līl + diagnosis miskonsepsi | `feedback()`, `DIAG` |
| 5 Asesmen Mandiri | Seluruh perancah nonaktif, santri merumuskan i‘rab dan ta’līl secara mandiri | `startAssess()`, `submitAssess()` |
