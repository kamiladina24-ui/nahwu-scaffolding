// ===== DATA: ganti/isi dengan materi Anda (mis. dari file marfu'atil asma') =====
const MATERI = {
  marfu: { judul: "Marfū‘ātul Asmā’", ket: "Isim-isim yang dibaca rafa‘.", jenis: [
    ["Fā‘il", "Pelaku setelah fi‘il ma‘lūm.", "كَتَبَ الطَّالِبُ"],
    ["Nā’ibul Fā‘il", "Pengganti fā‘il pada fi‘il majhūl.", "كُتِبَ الدَّرْسُ"],
    ["Mubtada’", "Isim di awal jumlah ismiyyah.", "الْعِلْمُ نُورٌ"],
    ["Khabar", "Penyempurna makna mubtada’.", "الْعِلْمُ نُورٌ"],
    ["Isim Kāna", "Isim yang dimasuki kāna dan saudaranya.", "كَانَ الْجَوُّ جَمِيلًا"],
    ["Khabar Inna", "Khabar yang dimasuki inna dan saudaranya.", "إِنَّ اللهَ غَفُورٌ"],
    ["Tawābi‘", "Na‘at, ‘athaf, taukīd, badal mengikuti i‘rab matbū‘.", "جَاءَ زَيْدٌ الْكَرِيمُ"]]},
  manshub: { judul: "Manshūbātul Asmā’", ket: "Isim-isim yang dibaca nashab.", jenis: [
    ["Maf‘ūl Bih", "Yang dikenai pekerjaan.", "كَتَبَ الرِّسَالَةَ"],
    ["Maf‘ūl Muthlaq", "Masdar penegas fi‘il.", "ضَرَبْتُ ضَرْبًا"],
    ["Zharf", "Keterangan waktu/tempat.", "جَلَسْتُ أَمَامَكَ"],
    ["Hāl", "Penjelas keadaan pelaku.", "جَاءَ زَيْدٌ رَاكِبًا"],
    ["Tamyīz", "Penjelas kesamaran.", "طَابَ زَيْدٌ نَفْسًا"],
    ["Ismu Inna", "Isim yang dimasuki inna.", "إِنَّ الْعِلْمَ نَافِعٌ"],
    ["Khabar Kāna", "Khabar yang dimasuki kāna.", "كَانَ الْجَوُّ جَمِيلًا"]]},
  makhfudh: { judul: "Makhfūdhātul Asmā’", ket: "Isim-isim yang dibaca khafdh (jarr).", jenis: [
    ["Majrūr bi Harf Jarr", "Isim setelah huruf jarr.", "مَرَرْتُ بِزَيْدٍ"],
    ["Mudhāf Ilaih", "Isim kedua pada idhāfah.", "كِتَابُ الطَّالِبِ"],
    ["Tābi‘ lil Makhfūdh", "Na‘at/‘athaf/dll. mengikuti majrūr.", "مَرَرْتُ بِزَيْدٍ الْكَرِيمِ"]]}
};

// Pemodelan Tahap 1: urutan analisis aqsām al-kalimah -> ta'lil
const MODEL = [
  { w: "كَتَبَ", s: ["Fi‘il", "Mabnī", "Fi‘il māḍī", "Fathah", "Fi‘il māḍī mabnī ‘alal fathah."] },
  { w: "الْمُسْلِمُونَ", s: ["Isim", "Marfū‘", "Fā‘il", "Wāw", "Jamak mudzakkar sālim: alamat rafa‘ berupa wāw (far‘iyyah), nūn pengganti tanwīn."] },
  { w: "الرِّسَالَةَ", s: ["Isim", "Manshūb", "Maf‘ūl bih", "Fathah", "Isim mufrad: alamat nashab berupa fathah (ashliyyah)."] }
];
const MODEL_LABELS = ["Aqsām al-kalimah", "Hukum i‘rab", "Jabatan", "Alamat i‘rab", "Ta’līl"];

// Langkah mikro (5 kolom) + pertanyaan pemantik (hint tingkat 1: prompting)
const STEPS = [
  { k: "qism", n: "Aqsām al-kalimah", o: ["Isim", "Fi'il", "Harf"], q: "Apakah kata ini bisa menerima al, tanwin, atau huruf jarr?" },
  { k: "hukum", n: "Hukum i‘rab", o: ["Marfu'", "Manshub", "Makhfudh", "Mabni"], q: "Apa ‘āmil (kata yang memengaruhi) di depan kata ini?" },
  { k: "jab", n: "Jabatan", o: ["Fa'il", "Mubtada'", "Khabar", "Isim kana", "Khabar kana", "Isim inna", "Majrur bi harf jarr"], q: "Apa peran kata ini terhadap fi‘il atau huruf sebelumnya?" },
  { k: "alamat", n: "Alamat i‘rab", o: ["Dhammah", "Fathah", "Kasrah", "Waw", "Alif", "Ya'"], q: "Isim ini mufrad, jamak salim, atau mutsanna?" },
  { k: "tail", n: "Ta’līl", o: ["Isim mufrad", "Jamak mudzakkar salim"], q: "Mengapa alamat itu yang dipakai: ashliyyah atau far‘iyyah?" }
];

// Hint tingkat 2: kaidah spesifik per jabatan
const RULE = {
  "Fa'il": "Fā‘il selalu marfū‘: dhammah pada mufrad, wāw pada jamak mudzakkar salim.",
  "Mubtada'": "Mubtada’ marfū‘ karena ia awal jumlah ismiyyah yang tidak dimasuki ‘āmil lafzhī.",
  "Isim kana": "Isim kāna tetap marfū‘; kāna hanya merafa‘kan isimnya dan menashabkan khabarnya.",
  "Khabar kana": "Khabar kāna manshūb: fathah pada isim mufrad.",
  "Isim inna": "Inna menashabkan isimnya dan merafa‘kan khabarnya; isim mufrad dinashabkan dengan fathah.",
  "Majrur bi harf jarr": "Isim setelah huruf jarr majrūr: kasrah pada mufrad, yā’ pada jamak mudzakkar salim."
};

// Bank soal bertingkat (lv 1-3). kw = kata kunci untuk Tahap 5 (alternatif dipisah |)
const ITEMS = [
  { lv: 1, w: ["ذَهَبَ", "الطَّالِبُ"], t: 1, a: { qism: "Isim", hukum: "Marfu'", jab: "Fa'il", alamat: "Dhammah", tail: "Isim mufrad" }, kw: ["fail", "marfu", "dhammah|dammah|dommah", "mufrad"] },
  { lv: 1, w: ["الْعِلْمُ", "نُورٌ"], t: 0, a: { qism: "Isim", hukum: "Marfu'", jab: "Mubtada'", alamat: "Dhammah", tail: "Isim mufrad" }, kw: ["mubtada", "marfu", "dhammah|dammah|dommah", "mufrad"] },
  { lv: 2, w: ["كَانَ", "الْجَوُّ", "جَمِيلًا"], t: 2, a: { qism: "Isim", hukum: "Manshub", jab: "Khabar kana", alamat: "Fathah", tail: "Isim mufrad" }, kw: ["khabarkana|khobarkana", "manshub|nashab", "fathah|fatha", "mufrad"] },
  { lv: 2, w: ["إِنَّ", "الْعِلْمَ", "نَافِعٌ"], t: 1, a: { qism: "Isim", hukum: "Manshub", jab: "Isim inna", alamat: "Fathah", tail: "Isim mufrad" }, kw: ["isiminna|isminna", "manshub|nashab", "fathah|fatha", "mufrad"] },
  { lv: 3, w: ["كَتَبَ", "الْمُسْلِمُونَ", "الرِّسَالَةَ"], t: 1, a: { qism: "Isim", hukum: "Marfu'", jab: "Fa'il", alamat: "Waw", tail: "Jamak mudzakkar salim" }, kw: ["fail", "marfu", "waw|wau", "jamak"] },
  { lv: 3, w: ["مَرَرْتُ", "بِالْمُسْلِمِينَ"], t: 1, a: { qism: "Isim", hukum: "Makhfudh", jab: "Majrur bi harf jarr", alamat: "Ya'", tail: "Jamak mudzakkar salim" }, kw: ["majrur", "makhfudh|jarr|khafdh", "ya|yaa", "jamak"] }
];

// Miskonsepsi untuk Tahap 4 (diagnosis)
const DIAG = {
  qism: "Cek ciri isim: al, tanwin, huruf jarr, atau musnad ilaih.",
  hukum: "Hukum i‘rab mengikuti jabatan dan ‘āmil, bukan posisi kata dalam kalimat.",
  jab: "Jabatan ditentukan lewat pertanyaan: siapa melakukan? apa yang dikenai? apa awal kalimat?",
  alamat: "Alamat i‘rab bergantung pada jenis isim: mufrad memakai alamat ashliyyah, jamak salim memakai far‘iyyah.",
  tail: "Ta’līl harus menyebut sebab alamat, bukan hanya mengulang jawabannya."
};
