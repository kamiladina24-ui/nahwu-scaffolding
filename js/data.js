// ===== KITAB UTAMA TERVALIDASI (Closed-Corpus: Alfiyyah Ibnu Malik, Syarh Ibnu 'Aqil, & Nazhm al-'Imrithi) =====
const KITAB_LIBRARY = [
  {
    id: "imrithi-marfuat",
    judulAr: "نَظْمُ الْعِمْرِيطِي — بَابُ مَرْفُوعَاتِ الْأَسْمَاءِ",
    judul: "Nazhm al-‘Imrīthī (Bāb Marfū‘āt al-Asmā’)",
    pengarang: "Syaikh Syarafuddīn Yaḥyā al-‘Imrīthī · Takhrij: Alfiyyah Ibnu Mālik & Syarḥ Ya‘nī",
    pasal: [
      {
        nama: "Bāb al-Fā‘il (Bait 106–108)",
        tokens: [
          {
            w: "فَالْفَاعِلُ",
            qism: "Isim (Isim Fā‘il)",
            hukum: "Marfū‘",
            jabatan: "Mubtada’",
            alamat: "Dhammah zhāhirah",
            talil: "Huruf fā’ adalah fā’ fashīhah; lafaz الْفَاعِلُ adalah isim mufrad yang berada di awal jumlah ismiyyah dan sunyi dari ‘āmil lafzhī, sehingga di-rafa‘-kan dengan dhammah zhāhirah.",
            ref: "Nazhm al-‘Imrīthī Bait 106 & 121; Alfiyyah Ibnu Mālik Bait 114 (المبتدأ اسم رفعه مؤبد)."
          },
          {
            w: "اسْمٌ",
            qism: "Isim (Jāmid)",
            hukum: "Marfū‘",
            jabatan: "Khabar Mubtada’",
            alamat: "Dhammah zhāhirah",
            talil: "Isim mufrad yang disandarkan kepada mubtada’ (الْفَاعِلُ) untuk menyempurnakan maknanya, maka hukumnya marfū‘ dengan alamat ashliyyah dhammah.",
            ref: "Nazhm al-‘Imrīthī Bait 106 & 122; Syarḥ Ya‘nī Bāb al-Mubtada’ wa al-Khabar."
          },
          {
            w: "مُطْلَقًا",
            qism: "Isim (Isim Maf‘ūl)",
            hukum: "Manshūb",
            jabatan: "Hāl",
            alamat: "Fathah zhāhirah",
            talil: "Isim mufrad nakirah yang menjelaskan keadaan hukum rafa‘-nya fā‘il secara mutlak (baik berupa isim sharīh maupun isim muawwal bil mashdar), di-nashab-kan dengan fathah.",
            ref: "Syarḥ Ya‘nī Bait 106 (سواء كان صريحًا أو مؤولًا بالمصدر); Alfiyyah Ibnu Mālik Bait 231."
          },
          {
            w: "قَدِ",
            qism: "Harf (Harf Tahqīq)",
            hukum: "Mabnī",
            jabatan: "Harf Tahqīq",
            alamat: "Mabnī ‘alā as-sukūn (dikasrahkan karena bertemu dua sukun)",
            talil: "Huruf tahqīq yang masuk pada fi‘il mādhi, mabnī dan tidak memiliki kedudukan dalam i‘rab (lā mahalla lahā min al-i‘rāb).",
            ref: "Alfiyyah Ibnu Mālik Bait 15–16 (وكل حرف مستحق للبنا)."
          },
          {
            w: "ارْتَفَعْ",
            qism: "Fi‘il (Fi‘il Mādhi)",
            hukum: "Mabnī (Jumlah Fī Mahalli Raf‘in)",
            jabatan: "Fi‘il Mādhi (Jumlah Na‘at bagi Ismun)",
            alamat: "Mabnī ‘alā al-fatḥ al-muqaddar (disukunkan karena waqaf/qāfiyah syi‘ir)",
            talil: "Fi‘il mādhi mabnī ‘alā al-fatḥ, fā‘il-nya dhamīr mustatir (huwa) kembali ke اسْمٌ; jumlah fi‘liyyah menempati posisi rafa‘ sebagai na‘at bagi isim nakirah (اسْمٌ).",
            ref: "Nazhm al-‘Imrīthī Bait 106 & 149; Syarḥ Ibnu ‘Aqīl Bāb an-Na‘t."
          },
          {
            w: "أَتَى",
            qism: "Fi‘il (Fi‘il Mādhi)",
            hukum: "Mabnī",
            jabatan: "Fi‘il Mādhi Ma‘lūm",
            alamat: "Mabnī ‘alā al-fatḥ al-muqaddar ‘alā al-alif (li at-ta‘adzdzur)",
            talil: "Fi‘il mādhi wajib dikosongkan dari tanda tatsniyah dan jamak ketika disandarkan kepada fā‘il mutsannā maupun jamak menurut lughah Arab yang paling fasih.",
            ref: "Nazhm al-‘Imrīthī Bait 107–108; Alfiyyah Ibnu Mālik Bait 235 (وجرد الفعل إذا ما أسندا لاثنين أو جمع)."
          },
          {
            w: "الزَّيْدَانِ",
            qism: "Isim (Isim Mutsannā)",
            hukum: "Marfū‘",
            jabatan: "Fā‘il",
            alamat: "Alif (ا)",
            talil: "Berkedudukan sebagai fā‘il dari fi‘il أَتَى; karena berbentuk isim mutsannā maka alamat rafa‘-nya berupa huruf alif (alamat far‘iyyah), dan nūn pengganti tanwīn pada isim mufrad.",
            ref: "Nazhm al-‘Imrīthī Bait 108 & Syarḥ Ya‘nī; Alfiyyah Ibnu Mālik Bait 36 (بالألف ارفع المثنى)."
          },
          {
            w: "وَالزَّيْدُونَا",
            qism: "Isim (Jamak Mudzakkar Sālim)",
            hukum: "Marfū‘",
            jabatan: "Ma‘thūf ‘alā az-Zaidāni",
            alamat: "Wāw (و)",
            talil: "Huruf wāwu adalah huruf ‘athaf (muthlaq al-jam‘i); الزَّيْدُونَ di-‘athaf-kan kepada الزَّيْدَانِ yang marfū‘, maka hukumnya marfū‘ dengan alamat wāw karena jamak mudzakkar sālim (alif di akhir adalah alif ithlāq syi‘ir).",
            ref: "Nazhm al-‘Imrīthī Bait 108 & 157; Alfiyyah Ibnu Mālik Bait 39 (وارفع بواو... سالم جمع عامر ومذنب)."
          }
        ]
      },
      {
        nama: "Bāb Nā’ib al-Fā‘il (Bait 114 & 119)",
        tokens: [
          {
            w: "قُرِئَ",
            qism: "Fi‘il (Fi‘il Mādhi Majhūl)",
            hukum: "Mabnī",
            jabatan: "Fi‘il Mādhi Mabnī lil-Majhūl",
            alamat: "Mabnī ‘alā al-fatḥ azh-zhāhir",
            talil: "Fi‘il mādhi yang dibentuk menjadi majhūl (pasif) karena fā‘il-nya dibuang: huruf awalnya (qāf) di-dhammah-kan dan huruf sebelum akhirnya (rā’) wajib di-kasrah-kan.",
            ref: "Nazhm al-‘Imrīthī Bait 116–117; Alfiyyah Ibnu Mālik Bait 254 (فاكسر أو اشمم فا ثلاثي أعل)."
          },
          {
            w: "الْقُرْآنُ",
            qism: "Isim (Mufrad)",
            hukum: "Marfū‘",
            jabatan: "Nā’ib al-Fā‘il",
            alamat: "Dhammah zhāhirah",
            talil: "Asalnya berkedudukan sebagai maf‘ūl bih, lalu menggantikan posisi fā‘il yang dibuang sehingga mengambil seluruh hukum fā‘il (marfū‘); alamat rafa‘-nya dhammah karena isim mufrad.",
            ref: "Nazhm al-‘Imrīthī Bait 114 & Syarḥ Ya‘nī; Alfiyyah Ibnu Mālik Bait 251 (ينوب مفعول به عن فاعل)."
          },
          {
            w: "يُكْرَمُ",
            qism: "Fi‘il (Fi‘il Mudhāri‘ Majhūl)",
            hukum: "Marfū‘",
            jabatan: "Fi‘il Mudhāri‘ Mabnī lil-Majhūl",
            alamat: "Dhammah zhāhirah",
            talil: "Fi‘il mudhāri‘ majhūl: huruf awalnya di-dhammah-kan dan huruf sebelum akhirnya (rā’) di-fathah-kan; di-rafa‘-kan dengan dhammah karena sunyi dari ‘āmil nāshib dan jāzim.",
            ref: "Nazhm al-‘Imrīthī Bait 117 & 119; Syarḥ Ya‘nī Bāb Nā’ib al-Fā‘il."
          },
          {
            w: "الْمُبَشِّرُ",
            qism: "Isim (Isim Fā‘il Mufrad)",
            hukum: "Marfū‘",
            jabatan: "Nā’ib al-Fā‘il (Zhāhir)",
            alamat: "Dhammah zhāhirah",
            talil: "Nā’ib al-fā‘il jenis isim zhāhir yang menggantikan fā‘il dari fi‘il majhūl يُكْرَمُ; di-rafa‘-kan dengan alamat ashliyyah dhammah karena isim mufrad.",
            ref: "Nazhm al-‘Imrīthī Bait 119 (ثانيهما كيكرم المبشر) & Syarḥ Ya‘nī."
          }
        ]
      },
      {
        nama: "Bāb Kāna & Inna (Bait 133 & 139)",
        tokens: [
          {
            w: "كَانَ",
            qism: "Fi‘il (Fi‘il Mādhi Nāqish)",
            hukum: "Mabnī",
            jabatan: "Fi‘il Mādhi Nāqish Nāsikh",
            alamat: "Mabnī ‘alā al-fatḥ azh-zhāhir",
            talil: "Termasuk ‘āmil nawāsikh yang beramal tanpa syarat (bilā qaid): me-rafa‘-kan mubtada’ sebagai isim-nya dan me-nashab-kan khabar sebagai khabar-nya.",
            ref: "Nazhm al-‘Imrīthī Bait 133; Alfiyyah Ibnu Mālik Bait 145 (ترفع كان المبتدأ اسما والخبر تنصبه)."
          },
          {
            w: "زَيْدٌ",
            qism: "Isim (‘Alam Mufrad)",
            hukum: "Marfū‘",
            jabatan: "Isim Kāna",
            alamat: "Dhammah zhāhirah",
            talil: "Asalnya mubtada’, lalu dimasuki kāna sehingga menjadi isim kāna yang hukumnya marfū‘; alamat rafa‘-nya dhammah zhāhirah karena isim mufrad.",
            ref: "Nazhm al-‘Imrīthī Bait 133 & Syarḥ Ya‘nī."
          },
          {
            w: "ذَا",
            qism: "Isim (Al-Asmā’ al-Khamsah)",
            hukum: "Manshūb",
            jabatan: "Khabar Kāna",
            alamat: "Alif (ا)",
            talil: "Berkedudukan sebagai khabar kāna yang hukumnya manshūb; karena termasuk al-asmā’ al-khamsah (bermakna pemilik) dan di-idhāfah-kan kepada isim zhāhir, alamat nashab-nya berupa alif.",
            ref: "Nazhm al-‘Imrīthī Bait 133; Alfiyyah Ibnu Mālik Bait 28–30 (وارفع بواو وانصبن بالألف)."
          },
          {
            w: "بَصَرٍ",
            qism: "Isim (Masdar/Mufrad)",
            hukum: "Majrūr / Makhfūdh",
            jabatan: "Mudhāf Ilaih",
            alamat: "Kasrah zhāhirah",
            talil: "Isim yang disandarkan kepada lafaz ذَا (idhāfah), maka wajib di-jarr-kan dengan alamat ashliyyah kasrah zhāhirah karena isim mufrad.",
            ref: "Alfiyyah Ibnu Mālik Bait 383 (الثاني اجرر)."
          },
          {
            w: "إِنَّ",
            qism: "Harf (Harf Taukīd wa Nashb)",
            hukum: "Mabnī",
            jabatan: "Harf Nāsikh",
            alamat: "Mabnī ‘alā al-fatḥ",
            talil: "Huruf taukīd (penegas pernyataan) yang beramal kebalikan dari kāna: me-nashab-kan mubtada’ sebagai isim-nya dan me-rafa‘-kan khabar sebagai khabar-nya.",
            ref: "Nazhm al-‘Imrīthī Bait 139 & 141; Alfiyyah Ibnu Mālik Bait 172."
          },
          {
            w: "زَيْدًا",
            qism: "Isim (‘Alam Mufrad)",
            hukum: "Manshūb",
            jabatan: "Isim Inna",
            alamat: "Fathah zhāhirah",
            talil: "Di-nashab-kan oleh huruf إِنَّ karena berkedudukan sebagai isim inna; alamat nashab-nya fathah zhāhirah karena isim mufrad.",
            ref: "Nazhm al-‘Imrīthī Bait 139 & Syarḥ Ya‘nī."
          },
          {
            w: "ذُو",
            qism: "Isim (Al-Asmā’ al-Khamsah)",
            hukum: "Marfū‘",
            jabatan: "Khabar Inna",
            alamat: "Wāw (و)",
            talil: "Di-rafa‘-kan sebagai khabar inna; karena termasuk al-asmā’ al-khamsah dan di-idhāfah-kan kepada isim zhāhir, maka alamat rafa‘-nya berupa huruf wāw.",
            ref: "Nazhm al-‘Imrīthī Bait 139; Alfiyyah Ibnu Mālik Bait 28–30."
          },
          {
            w: "نَظَرٍ",
            qism: "Isim (Mufrad)",
            hukum: "Majrūr / Makhfūdh",
            jabatan: "Mudhāf Ilaih",
            alamat: "Kasrah zhāhirah",
            talil: "Menjadi mudhāf ilaih setelah lafaz ذُو, di-jarr-kan dengan kasrah zhāhirah karena isim mufrad.",
            ref: "Alfiyyah Ibnu Mālik Bait 383."
          }
        ]
      },
      {
        nama: "Bāb at-Tawābi‘: Na‘at, ‘Athaf, Taukīd, Badal (Bait 148–175)",
        tokens: [
          {
            w: "جَاءَ",
            qism: "Fi‘il (Fi‘il Mādhi)",
            hukum: "Mabnī",
            jabatan: "Fi‘il Mādhi Ma‘lūm",
            alamat: "Mabnī ‘alā al-fatḥ azh-zhāhir",
            talil: "Fi‘il mādhi yang menyandarkan perbuatan datang kepada fā‘il setelahnya (الْغُلَامُ).",
            ref: "Nazhm al-‘Imrīthī Bait 106."
          },
          {
            w: "الْغُلَامُ",
            qism: "Isim (Mufrad)",
            hukum: "Marfū‘",
            jabatan: "Fā‘il (Man‘ūt)",
            alamat: "Dhammah zhāhirah",
            talil: "Pelaku (fā‘il) yang di-rafa‘-kan dengan dhammah zhāhirah; sekaligus berkedudukan sebagai man‘ūt (yang disifati).",
            ref: "Nazhm al-‘Imrīthī Bait 106 & 152."
          },
          {
            w: "الْفَاضِلُ",
            qism: "Isim (Isim Fā‘il)",
            hukum: "Marfū‘",
            jabatan: "Na‘at Haqīqī",
            alamat: "Dhammah zhāhirah",
            talil: "Na‘at haqīqī yang me-rafa‘-kan dhamīr mustatir kembali ke man‘ūt-nya; wajib mengikuti man‘ūt dalam 4 dari 10 perkara: rafa‘, makrifat, mufrad, dan mudzakkar.",
            ref: "Nazhm al-‘Imrīthī Bait 148–152; Syarḥ Ibnu ‘Aqīl Bāb an-Na‘t."
          },
          {
            w: "نَفْسُهُ",
            qism: "Isim (Lafaz Taukīd) + Dhamīr",
            hukum: "Marfū‘",
            jabatan: "Taukīd Ma‘nawī + Mudhāf Ilaih",
            alamat: "Dhammah zhāhirah (dan dhamīr هُ mabnī fī mahalli jarr)",
            talil: "Lafaz نَفْسُ adalah taukīd ma‘nawī yang mengikuti mu’akkad makrifat dalam hukum rafa‘ untuk menetapkan makna lahiriahnya, dan wajib bersambung dengan dhamīr yang sesuai dengan mu’akkad.",
            ref: "Nazhm al-‘Imrīthī Bait 162–166 (وجاء زيد نفسه); Alfiyyah Ibnu Mālik Bait 511."
          },
          {
            w: "أَخُوكَ",
            qism: "Isim (Al-Asmā’ al-Khamsah) + Dhamīr",
            hukum: "Marfū‘",
            jabatan: "Badal al-Kull min al-Kull (al-Muthābiq)",
            alamat: "Wāw (و) (dan dhamīr كَ mabnī fī mahalli jarr)",
            talil: "Tābi‘ tanpa perantara huruf ‘athaf yang maknanya identik dengan mubdal minhu (زَيْدٌ); mengikuti mubdal minhu dalam hukum rafa‘ dengan alamat wāw karena termasuk al-asmā’ al-khamsah.",
            ref: "Nazhm al-‘Imrīthī Bait 169–172 (كجاءني زيد أخوك); Alfiyyah Ibnu Mālik Bait 570."
          }
        ]
      }
    ]
  }
];

// ===== DATA MATERI LENGKAP: Marfū‘āt al-Asmā’ (Nazhm al-‘Imrīthī Bait 105–175 & Syarah Ya‘nī) =====
const MATERI = {
  marfu: {
    judul: "Marfū‘ātul Asmā’",
    ket: "Bab Isim-Isim yang Di-rafa‘-kan (Bāb Marfū‘āt al-Asmā’) — Nazhm al-‘Imrīthī Bait 105–175 beserta Syarah (Ya‘nī) lengkap.",
    bab: [
      {
        judul: "Pengantar: Tujuh Kelompok Marfū‘āt al-Asmā’ (Bait 105)",
        nazhm: "مَرْفُوعُ الْأَسْمَا سَبْعَةٌ نَأْتِي بِهَا ۝ مَعْلُومَةَ الْأَسْمَاءِ مِنْ تَبْوِيبِهَا",
        terjemah: "Isim-isim yang di-rafa‘-kan ada tujuh yang akan kami datangkan (sebutkan), yang nama-namanya telah diketahui dari pembagian bab-babnya.",
        syarah: `<p><strong>Penjelasan (Ya‘ni):</strong> Isim-isim yang di-rafa‘-kan ada tujuh, yaitu:</p>
        <ol>
          <li><strong>Fā‘il</strong> (subjek/pelaku).</li>
          <li><strong>Nā’ib al-Fā‘il</strong> (pengganti fā‘il pada kalimat pasif).</li>
          <li><strong>Mubtada’</strong> (subjek pada kalimat nominal).</li>
          <li><strong>Khabar</strong> (predikat bagi mubtada’).</li>
          <li><strong>Isim dari kāna</strong> dan saudara-saudaranya.</li>
          <li><strong>Khabar dari inna</strong> dan saudara-saudaranya.</li>
          <li><strong>Tābi‘ (pengikut)</strong> bagi isim yang di-rafa‘-kan, dan ia ada empat macam: <em>na‘at</em> (sifat), <em>‘athaf</em> (kata sambung), <em>taukīd</em> (penegas), dan <em>badal</em> (pengganti).</li>
        </ol>`
      },
      {
        judul: "Bab Fā‘il — Definisi & Syarat (Bait 106)",
        nazhm: "فَالْفَاعِلُ اسْمٌ مُطْلَقًا قَدِ ارْتَفَعْ ۝ بِفِعْلِهِ وَالْفِعْلُ قَبْلَهُ وَقَعْ",
        terjemah: "Maka fā‘il adalah isim yang di-rafa‘-kan secara mutlak oleh fi‘il-nya, sedangkan fi‘il tersebut terletak sebelumnya.",
        syarah: `<p><strong>Penjelasan (Ya‘ni):</strong> Fā‘il adalah isim yang di-rafa‘-kan oleh fi‘il-nya yang disebutkan sebelumnya secara mutlak, baik berupa <strong>isim sharīh</strong> (jelas/eksplisit) maupun <strong>isim muawwal</strong> (yang ditakwilkan ke bentuk masdar).</p>`
      },
      {
        judul: "Bab Fā‘il — Hukum Fi‘il pada Fā‘il Mutsanna & Jamak (Bait 107–108)",
        nazhm: "وَوَاجِبٌ فِي الْفِعْلِ أَنْ يُجَرَّدَا ۝ إِذَا لِجَمْعٍ أَوْ مُثَنًّى أُسْنِدَا\nفَقُلْ أَتَى الزَّيْدَانِ وَالزَّيْدُونَا ۝ كَجَاءَ زَيْدٌ وَيَجِي أَخُونَا",
        terjemah: "Dan wajib pada fi‘il untuk dikosongkan (dari tanda dua dan jamak) apabila ia disandarkan kepada jamak atau mutsanna (dua). Maka katakanlah: أَتَى الزَّيْدَانِ وَالزَّيْدُونَا ('Dua Zaid itu telah datang, dan para Zaid itu telah datang'), seperti halnya جَاءَ زَيْدٌ وَيَجِي أَخُونَا ('Zaid telah datang, dan saudara kita akan datang').",
        syarah: `<p><strong>Penjelasan (Ya‘ni):</strong> Fi‘il wajib dikosongkan dari tanda tatsniyah (dua) dan tanda jamak apabila ia disandarkan kepada fā‘il yang berbentuk mutsanna (dua) maupun jamak, sebagaimana ketika ia disandarkan kepada fā‘il yang berbentuk mufrad (tunggal), contohnya: <span class="ar-inline" lang="ar" dir="rtl">أَتَى الزَّيْدَانِ</span> (<em>Atā az-Zaidāni</em> — "Dua Zaid itu telah datang") dan <span class="ar-inline" lang="ar" dir="rtl">أَتَى الزَّيْدُونَ</span> (<em>Atā az-Zaidūna</em> — "Para Zaid itu telah datang"). Ini menurut bahasa Arab yang paling fasih.</p>
        <p>Namun ada pula dialek bahasa Arab yang jarang dipakai yang menyambungkan tanda tatsniyah dan jamak pada fi‘il tersebut, yang diistilahkan oleh ahli nahwu dengan dialek <span class="ar-inline" lang="ar" dir="rtl">أَكَلُونِي الْبَرَاغِيثُ</span> (<em>Akalūnī al-barāghītsu</em> — "Kutu-kutu itu telah menggigitku").</p>`
      },
      {
        judul: "Bab Fā‘il — Pembagian Zhāhir dan Mudhmar (Bait 109–113)",
        nazhm: "وَقَسَّمُوهُ ظَاهِرًا وَمُضْمَرَا ۝ فَالظَّاهِرُ اللَّفْظُ الَّذِي قَدْ ذُكِرَا\nوَالْمُضْمَرُ اثْنَا عَشَرَ نَوْعًا قُسِمَا ۝ كَقُمْتُ قُمْنَا قُمْتَ قُمْتِ قُمْتُمَا\nقُمْتُنَّ قُمْتُمْ قَامَ قَامَتْ قَامَا ۝ قَامُوا وَقُمْنَ نَحْوُ صُمْتُمْ عَامَا\nوَهٰذِهِ ضَمَائِرٌ مُتَّصِلَةْ ۝ وَمِثْلُهَا الضَّمَائِرُ الْمُنْفَصِلَةْ\nكَلَمْ يَقُمْ إِلَّا أَنَا أَوْ أَنْتُمُ ۝ وَغَيْرُ ذَيْنِ بِالْقِيَاسِ يُعْلَمُ",
        terjemah: "Dan para ulama membagi fā‘il menjadi zhāhir (tampak) dan mudhmar (kata ganti). Maka fā‘il zhāhir adalah lafaz yang telah disebutkan (sebelumnya). Sedangkan fā‘il mudhmar terbagi menjadi dua belas macam, seperti: قُمْتُ (aku berdiri), قُمْنَا (kami berdiri), قُمْتَ (kamu lk berdiri), قُمْتِ (kamu pr berdiri), قُمْتُمَا (kalian berdua berdiri), قُمْتُنَّ (kalian pr berdiri), قُمْتُمْ (kalian lk berdiri), قَامَ (dia lk berdiri), قَامَتْ (dia pr berdiri), قَامَا (mereka berdua berdiri), قَامُوا (mereka lk berdiri), dan قُمْنَ (mereka pr berdiri), seperti contoh: صُمْتُمْ عَامَا ('Kalian telah berpuasa setahun'). Semua ini adalah dhamīr muttashil (kata ganti bersambung), dan yang semisal dengannya adalah dhamīr munfashil (kata ganti terpisah), seperti: لَمْ يَقُمْ إِلَّا أَنَا أَوْ أَنْتُمُ ('Tidak ada yang berdiri kecuali aku atau kalian'), dan selain kedua contoh ini dapat diketahui dengan qiyas (analogi).",
        syarah: `<p><strong>Penjelasan (Ya‘ni):</strong> Fā‘il terbagi menjadi dua macam: zhāhir dan mudhmar.</p>
        <ul>
          <li><strong>Fā‘il Zhāhir</strong> adalah kata yang menunjukkan arti yang dimaksud tanpa batasan/perantara (yakni langsung menyebut pelakunya), contohnya: <span class="ar-inline" lang="ar" dir="rtl">قَامَ زَيْدٌ</span> (<em>Qāma Zaidun</em> — "Zaid telah berdiri") dan <span class="ar-inline" lang="ar" dir="rtl">لَمْ يَقُمْ عَمْرٌو</span> (<em>Lam yaqum ‘Amrun</em> — "Amr tidak berdiri").</li>
          <li><strong>Fā‘il Mudhmar</strong> adalah kata ganti yang diletakkan untuk menunjukkan pembicara (<em>mutakallim</em>), lawan bicara (<em>mukhāthab</em>), atau pihak ketiga (<em>ghā’ib</em>), baik berupa <strong>dhamīr muttashil</strong> (bersambung dengan fi‘il), contohnya: <span class="ar-inline" lang="ar" dir="rtl">قُمْتُ، قُمْنَا، قُمْتَ، قُمْتِ، قُمْتُمَا، قُمْتُمْ، قُمْتُنَّ، قَامَ، قَامَتْ، قَامَا، وَقَامَتَا، وَقَامُوا، وَقُمْنَ</span>, atau berupa <strong>dhamīr munfashil</strong> (kata ganti terpisah), contohnya: <span class="ar-inline" lang="ar" dir="rtl">لَمْ يَقُمْ إِلَّا أَنَا</span> (<em>Lam yaqum illā anā</em> — "Tidak ada yang berdiri kecuali aku"), dan <span class="ar-inline" lang="ar" dir="rtl">وَلَمْ يَقُمْ إِلَّا أَنْتُمْ</span> (<em>Wa lam yaqum illā antum</em> — "Dan tidak ada yang berdiri kecuali kalian").</li>
        </ul>`
      },
      {
        judul: "Bab Nā’ib al-Fā‘il — Pengganti Fā‘il (Bait 114–115)",
        nazhm: "أَقِمْ مَقَامَ الْفَاعِلِ الَّذِي حُذِفْ ۝ مَفْعُولَهُ فِي كُلِّ مَا لَهُ عُرِفْ\nأَوْ مَصْدَرًا أَوْ ظَرْفًا أَوْ مَجْرُورَا ۝ إِنْ لَمْ تَجِدْ مَفْعُولَهُ الْمَذْكُورَا",
        terjemah: "Tempatkanlah pada kedudukan fā‘il yang dihapus (dibuang) akan maf‘ūl bih-nya dalam segala hukum yang dikenal bagi fā‘il; atau (tempatkanlah) masdar, zharaf, atau jar-majrūr, apabila engkau tidak mendapati maf‘ūl bih-nya yang disebutkan.",
        syarah: `<p><strong>Penjelasan (Ya‘ni):</strong> Yang dapat menggantikan kedudukan fā‘il yang dibuang (menjadi <em>nā’ib al-fā‘il</em>) ada empat perkara:</p>
        <ol>
          <li><strong>Maf‘ūl bih</strong> (objek penderita), contohnya: <span class="ar-inline" lang="ar" dir="rtl">قُرِئَ الْقُرْآنُ</span> (<em>Quri’a al-Qur’ānu</em> — "Al-Qur'an telah dibaca").</li>
          <li><strong>Masdar</strong> (kata benda abstrak/bentuk dasar kata kerja), contohnya firman Allah Ta‘ālā: <span class="ar-inline" lang="ar" dir="rtl">فَإِذَا نُفِخَ فِي الصُّورِ نَفْخَةٌ وَاحِدَةٌ</span> (<em>Fa idzā nufikha fī ash-shūri nafkhatun wāhidatun</em> — "Maka apabila sangkakala ditiup dengan sekali tiupan", QS. Al-Haqqah: 13).</li>
          <li><strong>Zharaf</strong> (kata keterangan waktu atau tempat), contohnya firman Allah Ta‘ālā: <span class="ar-inline" lang="ar" dir="rtl">وَحِيلَ بَيْنَهُمْ وَبَيْنَ مَا يَشْتَهُونَ</span> (<em>Wa hīla bainahum wa baina mā yasytahūna</em> — "Dan diberi penghalang antara mereka dengan apa yang mereka inginkan", QS. Saba’: 54).</li>
          <li><strong>Jar-majrūr</strong> (huruf jar beserta isim yang di-jar-kannya), contohnya: <span class="ar-inline" lang="ar" dir="rtl">اعْتُكِفَ فِي الْمَسْجِدِ</span> (<em>I‘tukifa fī al-masjidi</em> — "Telah dilakukan i‘tikaf di dalam masjid").</li>
        </ol>
        <p>Dan menurut pendapat yang shahih, selain <em>maf‘ūl bih</em> tidak boleh menggantikan kedudukan fā‘il apabila maf‘ūl bih tersebut ada (disebutkan dalam kalimat).</p>`
      },
      {
        judul: "Bab Nā’ib al-Fā‘il — Perubahan Fi‘il Majhūl & Mu‘tal ‘Ain (Bait 116–120)",
        nazhm: "وَأَوَّلُ الْفِعْلِ الَّذِي هُنَا يُضَمْ ۝ وَكَسْرُ مَا قَبْلَ الْأَخِيرِ مُلْتَزَمْ\nفِي كُلِّ مَاضٍ وَهْوَ فِي الْمُضَارِعِ ۝ مُنْفَتِحٌ كَيُدَّعَى وَكَادُّعِي\nوَأَوَّلُ الْفِعْلِ الَّذِي كَبَاعَا ۝ مُنْكَسِرٌ وَهْوَ الَّذِي قَدْ شَاعَا\nوَذَاكَ إِمَّا مُضْمَرٌ أَوْ مُظْهَرُ ۝ ثَانِيهِمَا كَيُكْرَمُ الْمُبَشِّرُ\nأَمَّا الضَّمِيرُ فَهْوَ نَحْوُ قَوْلِنَا ۝ دُعِيتُ أُدْعَى مَا دُعِيَ إِلَّا أَنَا",
        terjemah: "Dan huruf awal fi‘il pada bab ini di-dhammah-kan, serta meng-kasrah-kan huruf sebelum akhir adalah suatu keharusan pada setiap fi‘il mādhi; sedangkan pada fi‘il mudhāri‘, huruf sebelum akhirnya di-fathah-kan, seperti lafaz يُدَّعَى dan ادُّعِيَ. Dan huruf awal fi‘il (mādhi mu‘tal ‘ain) yang seperti lafaz بَاعَ adalah di-kasrah-kan, dan itulah bacaan yang masyhur. Dan nā’ib al-fā‘il itu adakalanya berupa dhamīr atau zhāhir; bagian yang kedua (zhāhir) seperti contoh: يُكْرَمُ الْمُبَشِّرُ. Adapun yang berupa dhamīr, maka ia seperti ucapan kita: دُعِيتُ, أُدْعَى, dan مَا دُعِيَ إِلَّا أَنَا.",
        syarah: `<p><strong>1. Cara Mengubah Bentuk Fi‘il Menjadi Majhūl (Pasif):</strong></p>
        <ul>
          <li>Pada <strong>fi‘il mādhi</strong>, huruf pertamanya di-dhammah-kan dan huruf sebelum akhirnya di-kasrah-kan, contohnya: <span class="ar-inline" lang="ar" dir="rtl">قُرِئَ</span> (<em>quri’a</em> — "telah dibaca") dan <span class="ar-inline" lang="ar" dir="rtl">ادُّعِيَ</span> (<em>uddu‘iya</em> — "telah didakwa").</li>
          <li>Pada <strong>fi‘il mudhāri‘</strong>, huruf pertamanya di-dhammah-kan dan huruf sebelum akhirnya di-fathah-kan, contohnya: <span class="ar-inline" lang="ar" dir="rtl">يُقْرَأُ</span> (<em>yuqra’u</em> — "sedang/akan dibaca") dan <span class="ar-inline" lang="ar" dir="rtl">يُدَّعَى</span> (<em>yudda‘ā</em> — "sedang/akan didakwa").</li>
        </ul>
        <p><strong>2. Hukum Fi‘il Mādhi Mu‘tal ‘Ain Ketika Dijadikan Majhūl:</strong> Diperbolehkan padanya tiga cara baca:</p>
        <ul>
          <li>Memurnikan kasrah (<em>ikhlāsh al-kasr</em>) — cara baca paling masyhur — contohnya: <span class="ar-inline" lang="ar" dir="rtl">بِيعَ</span> (<em>bī‘a</em> — "telah dijual").</li>
          <li>Memurnikan dhammah (<em>ikhlāsh adh-dhamm</em>), contohnya: <span class="ar-inline" lang="ar" dir="rtl">بُوعَ</span> (<em>bū‘a</em>).</li>
          <li><em>Isymām</em>, yaitu melafalkan huruf fā’ fi‘il (huruf pertama) dengan harakat perpaduan antara dhammah dan kasrah (memonyongkan bibir tanpa suara dhammah di awal pengucapan kasrah), contohnya: <span class="ar-inline" lang="ar" dir="rtl">بُيِعَ</span> (<em>buyi‘a</em> — dibaca dengan isymām).</li>
        </ul>
        <p><strong>3. Pembagian Nā’ib al-Fā‘il:</strong></p>
        <ul>
          <li><strong>Zhāhir (tampak/eksplisit):</strong> <span class="ar-inline" lang="ar" dir="rtl">ضُرِبَ زَيْدٌ</span> ("Zaid telah dipukul") dan <span class="ar-inline" lang="ar" dir="rtl">يُكْرَمُ الْمُبَشِّرُ</span> ("Pembawa kabar gembira itu dimuliakan").</li>
          <li><strong>Mudhmar (kata ganti):</strong> baik berupa <em>dhamīr muttashil</em>, contohnya: <span class="ar-inline" lang="ar" dir="rtl">دُعِيتُ</span> ("Aku telah dipanggil") dan <span class="ar-inline" lang="ar" dir="rtl">أُدْعَى</span> ("Aku sedang/akan dipanggil"), maupun <em>dhamīr munfashil</em>, contohnya: <span class="ar-inline" lang="ar" dir="rtl">مَا دُعِيَ إِلَّا أَنَا</span> ("Tidak ada yang dipanggil kecuali aku").</li>
        </ul>`
      },
      {
        judul: "Bab Mubtada’ dan Khabar — Definisi & Kesesuaian (Bait 121–128)",
        nazhm: "الْمُبْتَدَا اسْمٌ رَفْعُهُ مُؤَبَّدُ ۝ عَنْ كُلِّ لَفْظٍ عَامِلٍ مُجَرَّدُ\nوَالْخَبَرُ اسْمٌ ذُو ارْتِفَاعٍ أُسْنِدَا ۝ مُطَابِقًا فِي لَفْظِهِ لِلْمُبْتَدَا\nكَقَوْلِنَا زَيْدٌ عَظِيمُ الشَّانِ ۝ وَقَوْلِنَا الزَّيْدَانِ قَائِمَانِ\nوَمِثْلُهُ الزَّيْدُونَ قَائِمُونَا ۝ وَمِنْهُ أَيْضًا قَائِمٌ أَخُونَا\nوَالْمُبْتَدَا اسْمٌ ظَاهِرٌ كَمَا مَضَى ۝ أَوْ مُضْمَرٌ كَأَنْتَ أَهْلٌ لِلْقَضَا\nوَلَا يَجُوزُ الِابْتِدَا بِمَا اتَّصَلْ ۝ مِنَ الضَّمِيرِ بَلْ بِكُلِّ مَا انْفَصَلْ\nأَنَا وَنَحْنُ أَنْتَ أَنْتِ أَنْتُمَا ۝ أَنْتُنَّ أَنْتُمْ وَهْوَ وَهْيَ هُمْ هُمَا\nوَهُنَّ أَيْضًا فَالْجَمِيعُ اثْنَا عَشَرْ ۝ وَقَدْ مَضَى مِنْهَا مِثَالٌ مُعْتَبَرْ",
        terjemah: "Mubtada’ adalah isim yang hukum rafa‘-nya tetap serta sunyi dari setiap ‘āmil lafzhī. Sedangkan khabar adalah isim yang memiliki hukum rafa‘ yang disandarkan kepada mubtada‘ dalam keadaan sesuai lafaznya dengan mubtada‘. Dan mubtada‘ itu adakalanya berupa isim zhāhir atau isim mudhmar. Tidak diperbolehkan memulai kalimat dengan dhamīr muttashil, melainkan dengan dua belas dhamīr munfashil.",
        syarah: `<p><strong>Penjelasan (Ya‘ni):</strong></p>
        <ul>
          <li><strong>Mubtada’</strong> adalah isim yang di-rafa‘-kan yang sunyi (kosong) dari <em>‘āmil-‘āmil lafzhī</em> (faktor pengubah yang tampak secara lafal).</li>
          <li><strong>Khabar</strong> adalah isim yang di-rafa‘-kan yang disandarkan kepada mubtada’ serta sesuai dengannya dalam jenis dan bilangannya, contohnya: <span class="ar-inline" lang="ar" dir="rtl">أَخُونَا قَائِمٌ</span>, <span class="ar-inline" lang="ar" dir="rtl">زَيْدٌ عَظِيمُ الشَّأْنِ</span>, <span class="ar-inline" lang="ar" dir="rtl">الزَّيْدَانِ قَائِمَانِ</span>, dan <span class="ar-inline" lang="ar" dir="rtl">وَالزَّيْدُونَ قَائِمُونَ</span>.</li>
          <li><strong>Pembagian Mubtada’:</strong> Berupa <em>isim zhāhir</em> (<span class="ar-inline" lang="ar" dir="rtl">زَيْدٌ قَائِمٌ</span>) dan <em>dhamīr</em> (<span class="ar-inline" lang="ar" dir="rtl">أَنْتَ أَهْلٌ لِلْقَضَاءِ</span> — "Engkau layak menjadi hakim").</li>
          <li><strong>Syarat Mubtada’ Dhamīr:</strong> Tidak boleh memulai kalimat dengan <em>dhamīr muttashil</em>, melainkan harus dengan 12 <em>dhamīr munfashil</em> (<span class="ar-inline" lang="ar" dir="rtl">أَنَا، نَحْنُ، أَنْتَ، أَنْتِ، أَنْتُمَا، أَنْتُنَّ، أَنْتُمْ، هُوَ، هِيَ، هُمْ، هُمَا، هُنَّ</span>).</li>
        </ul>`
      },
      {
        judul: "Bab Mubtada’ dan Khabar — Mufrad & Ghair Mufrad (Bait 129–132)",
        nazhm: "وَمُفْرَدًا وَغَيْرَهُ يَأْتِي الْخَبَرْ ۝ فَالْأَوَّلُ اللَّفْظُ الَّذِي فِي النَّظْمِ مَرْ\nوَغَيْرُهُ فِي أَرْبَعٍ مَحْصُورُ ۝ لَا غَيْرُ وَهْيَ الظَّرْفُ وَالْمَجْرُورُ\nوَفَاعِلٌ مَعْ فِعْلِهِ الَّذِي صَدَرْ ۝ وَالْمُبْتَدَا مَعْ مَا لَهُ مِنَ الْخَبَرْ\nكَأَنْتَ عِنْدِي وَالْفَتَى بِدَارِي ۝ وَابْنِي قَرَا وَذَا أَبُوهُ قَارِي",
        terjemah: "Dan khabar itu datang dalam bentuk mufrad (tunggal/bukan kalimat) dan ghair mufrad (selain mufrad). Sedangkan ghair mufrad terbatas pada empat macam saja: zharaf, jar-majrūr, jumlah fi‘liyyah, dan jumlah ismiyyah.",
        syarah: `<p><strong>Penjelasan (Ya‘ni):</strong> Khabar terbagi menjadi dua bagian:</p>
        <ol>
          <li><strong>Khabar Mufrad:</strong> khabar yang bukan berupa <em>jumlah</em> (kalimat) dan bukan pula <em>syibhul jumlah</em> (serupa kalimat), contohnya: <span class="ar-inline" lang="ar" dir="rtl">بَكْرٌ عَالِمٌ</span> ("Bakr adalah orang yang berilmu") dan <span class="ar-inline" lang="ar" dir="rtl">زَيْدٌ عَظِيمُ الشَّأْنِ</span> ("Zaid agung kedudukannya").</li>
          <li><strong>Khabar Ghair Mufrad:</strong> terbatas pada empat macam:
            <ul>
              <li><strong>Jumlah Fi‘liyyah</strong> (kalimat diawali kata kerja): <span class="ar-inline" lang="ar" dir="rtl">ابْنِي قَرَأَ</span> ("Anakku telah membaca").</li>
              <li><strong>Jumlah Ismiyyah</strong> (kalimat diawali kata benda): <span class="ar-inline" lang="ar" dir="rtl">ذَا أَبُوهُ قَارِئٌ</span> ("Orang ini ayahnya adalah seorang pembaca").</li>
              <li><strong>Jar dan Majrūr</strong>: <span class="ar-inline" lang="ar" dir="rtl">الْفَتَى بِدَارِي</span> ("Pemuda itu berada di rumahku").</li>
              <li><strong>Zharaf</strong> (keterangan waktu/tempat): <span class="ar-inline" lang="ar" dir="rtl">أَنْتَ عِنْدِي</span> ("Engkau berada di sisiku").</li>
            </ul>
          </li>
        </ol>`
      },
      {
        judul: "Bab Kāna dan Saudara-Saudaranya (Bait 133–138)",
        nazhm: "ارْفَعْ بِكَانَ الْمُبْتَدَا اسْمًا وَالْخَبَرْ ۝ بِهَا انْصِبَنْ كَكَانَ زَيْدٌ ذَا بَصَرْ\nكَذَاكَ أَضْحَى ظَلَّ بَاتَ أَمْسَى ۝ وَهٰكَذَا أَصْبَحَ صَارَ لَيْسَا\nفَتِئَ وَانْفَكَّ وَزَالَ مَعْ بَرِحْ ۝ أَرْبَعُهَا مِنْ بَعْدِ نَفْيٍ تَتَّضِحْ\nكَذَاكَ دَامَ بَعْدَ مَا الظَّرْفِيَّةْ ۝ وَهْيَ الَّتِي تَكُونُ مَصْدَرِيَّةْ\nوَكُلُّ مَا صَرَّفْتَهُ مِمَّا سَبَقْ ۝ مِنْ مَصْدَرٍ وَغَيْرِهِ بِهِ الْتَحَقْ\nكَكُنْ صَدِيقًا لَا تَكُنْ مُجَافِيَا ۝ وَانْظُرْ لِكَوْنِي مُصْبِحًا مُوَافِيَا",
        terjemah: "Rafa‘-kanlah dengan kāna terhadap mubtada‘ sebagai isim-nya, dan nashab-kanlah khabar dengannya. Demikian pula أَضْحَى, ظَلَّ, بَاتَ, أَمْسَى, أَصْبَحَ, صَارَ, لَيْسَ; serta فَتِئَ, انْفَكَّ, زَالَ, بَرِحَ setelah nafi; dan دَامَ setelah mā mashdariyyah zharfiyyah, beserta seluruh bentuk tashrīf-nya.",
        syarah: `<p><strong>Penjelasan (Ya‘ni):</strong> <em>Kāna</em> dan saudara-saudaranya me-rafa‘-kan mubtada’ sebagai isim-nya dan me-nashab-kan khabar sebagai khabar-nya (<span class="ar-inline" lang="ar" dir="rtl">كَانَ زَيْدٌ ذَا بَصَرٍ</span>). Berdasarkan syarat pengamalannya, mereka terbagi menjadi:</p>
        <ul>
          <li><strong>Beramal tanpa syarat (bilā qaid):</strong> <span class="ar-inline" lang="ar" dir="rtl">كَانَ</span>, <span class="ar-inline" lang="ar" dir="rtl">أَضْحَى</span> (<span class="ar-inline" lang="ar" dir="rtl">أَضْحَى الْفَقِيهُ وَرِعًا</span>), <span class="ar-inline" lang="ar" dir="rtl">ظَلَّ</span> (<span class="ar-inline" lang="ar" dir="rtl">ظَلَّ زَيْدٌ صَائِمًا</span>), <span class="ar-inline" lang="ar" dir="rtl">بَاتَ</span> (<span class="ar-inline" lang="ar" dir="rtl">بَاتَ زَيْدٌ قَائِمًا</span>), <span class="ar-inline" lang="ar" dir="rtl">أَمْسَى</span> (<span class="ar-inline" lang="ar" dir="rtl">أَمْسَى زَيْدٌ غَنِيًّا</span>), <span class="ar-inline" lang="ar" dir="rtl">أَصْبَحَ</span> (<span class="ar-inline" lang="ar" dir="rtl">أَصْبَحَ الْبَرْدُ شَدِيدًا</span>), <span class="ar-inline" lang="ar" dir="rtl">صَارَ</span> (<span class="ar-inline" lang="ar" dir="rtl">صَارَ زَيْدٌ غَنِيًّا</span>), dan <span class="ar-inline" lang="ar" dir="rtl">لَيْسَ</span> (<span class="ar-inline" lang="ar" dir="rtl">لَيْسَ زَيْدٌ قَائِمًا</span>).</li>
          <li><strong>Syarat didahului nafi atau syibhu an-nafi (nahyi/doa):</strong> <span class="ar-inline" lang="ar" dir="rtl">فَتِئَ</span> (<span class="ar-inline" lang="ar" dir="rtl">مَا فَتِئَ زَيْدٌ عَالِمًا</span>), <span class="ar-inline" lang="ar" dir="rtl">انْفَكَّ</span> (<span class="ar-inline" lang="ar" dir="rtl">مَا انْفَكَّ عَمْرٌو مُسْتَقِيمًا</span>), <span class="ar-inline" lang="ar" dir="rtl">زَالَ</span> (<span class="ar-inline" lang="ar" dir="rtl">مَا زَالَ بَكْرٌ صَالِحًا</span>), dan <span class="ar-inline" lang="ar" dir="rtl">بَرِحَ</span> (<span class="ar-inline" lang="ar" dir="rtl">مَا بَرِحَ خَالِدٌ مُطِيعًا</span>).</li>
          <li><strong>Syarat didahului مَا الْمَصْدَرِيَّةُ الظَّرْفِيَّةُ:</strong> <span class="ar-inline" lang="ar" dir="rtl">دَامَ</span>, contohnya: <span class="ar-inline" lang="ar" dir="rtl">مَا دَامَ زَيْدٌ طَالِبًا</span> ("Selama Zaid masih menjadi seorang pelajar").</li>
        </ul>
        <p><strong>Pembagian Tashrīf (Perubahan Kata):</strong> Bentuk tashrīf (mudhāri‘, amr, masdar, isim fā‘il) beramal sama seperti mādhi-nya (<span class="ar-inline" lang="ar" dir="rtl">كُنْ صَدِيقًا</span>, <span class="ar-inline" lang="ar" dir="rtl">لَا تَكُنْ مُجَافِيًا</span>, <span class="ar-inline" lang="ar" dir="rtl">انْظُرْ لِكَوْنِي مُصْبِحًا مُوَافِيَا</span>), dan terbagi menjadi 3 kelompok: (1) <em>Jāmid</em>: <span class="ar-inline" lang="ar" dir="rtl">لَيْسَ</span> dan <span class="ar-inline" lang="ar" dir="rtl">دَامَ</span>; (2) <em>Tasharruf Nāqish</em> (hanya mādhi, mudhāri‘, isim fā‘il): kelompok <em>zāla, fati’a, infakka, bariha</em>; (3) <em>Tasharruf Tāmm</em>: sisanya.</p>`
      },
      {
        judul: "Bab Inna dan Saudara-Saudaranya (Bait 139–143)",
        nazhm: "تَنْصِبُ إِنَّ الْمُبْتَدَا اسْمًا وَالْخَبَرْ ۝ تَرْفَعُهُ كَإِنَّ زَيْدًا ذُو نَظَرْ\nوَمِثْلُ إِنَّ أَنَّ لَيْتَ فِي الْعَمَلْ ۝ وَهٰكَذَا كَأَنَّ لٰكِنَّ لَعَلَّ\nوَأَكَّدُوا الْمَعْنَى بِإِنَّ أَنَّا ۝ وَلَيْتَ مِنْ أَلْفَاظِ مَنْ تَمَنَّى\nكَأَنَّ لِلتَّشْبِيهِ فِي الْمُحَاكِي ۝ وَاسْتَعْمَلُوا لٰكِنَّ فِي اسْتِدْرَاكِ\nوَلِتَرَجٍّ وَتَوَقُّعٍ لَعَلَّ ۝ كَقَوْلِهِمْ لَعَلَّ مَحْبُوبِي وَصَلْ",
        terjemah: "Huruf إِنَّ menashab-kan mubtada‘ sebagai isim-nya, dan merafa‘-kan khabar. Demikian pula أَنَّ, لَيْتَ, كَأَنَّ, لٰكِنَّ, dan لَعَلَّ untuk makna taukīd, tamannī, tasybīh, istidrāk, serta tarajjī dan tawaqqu‘.",
        syarah: `<p><strong>Penjelasan (Ya‘ni):</strong> <em>Inna</em> dan saudara-saudaranya me-nashab-kan mubtada’ sebagai isim-nya dan me-rafa‘-kan khabar sebagai khabar-nya, terdiri atas enam huruf beserta fungsinya:</p>
        <ul>
          <li><strong>إِنَّ (inna) dan أَنَّ (anna) — Taukīd (penegasan):</strong> menguatkan pernyataan positif (<em>ījāb</em>), seperti <span class="ar-inline" lang="ar" dir="rtl">إِنَّ زَيْدًا قَائِمٌ</span> dan <span class="ar-inline" lang="ar" dir="rtl">بَلَغَنِي أَنَّ زَيْدًا قَائِمٌ</span>, maupun negatif (<em>salban</em>), seperti <span class="ar-inline" lang="ar" dir="rtl">إِنَّ زَيْدًا لَيْسَ بِقَائِمٍ</span> dan <span class="ar-inline" lang="ar" dir="rtl">بَلَغَنِي أَنَّ زَيْدًا لَيْسَ بِقَائِمٍ</span>.</li>
          <li><strong>لَيْتَ (laita) — Tamannī (berandai-andai):</strong> mengharapkan sesuatu yang mustahil atau sangat sulit terwujud, contohnya syair: <span class="ar-inline" lang="ar" dir="rtl">أَلَا لَيْتَ الشَّبَابَ يَعُودُ يَوْمًا ۝ فَأُخْبِرَهُ بِمَا فَعَلَ الْمَشِيبُ</span> dan <span class="ar-inline" lang="ar" dir="rtl">لَيْتَ لِي قِنْطَارًا مِنَ الذَّهَبِ</span>.</li>
          <li><strong>كَأَنَّ (ka’anna) — Tasybīh (penyerupaan):</strong> menyamakan sesuatu, baik dalam kemuliaan (<span class="ar-inline" lang="ar" dir="rtl">كَأَنَّ زَيْدًا أَسَدٌ</span>) maupun kerendahan (<span class="ar-inline" lang="ar" dir="rtl">كَأَنَّ زَيْدًا حِمَارٌ</span>).</li>
          <li><strong>لٰكِنَّ (lākinna) — Istidrāk:</strong> menyusuli pembicaraan untuk meluruskan dugaan keliru, contohnya: <span class="ar-inline" lang="ar" dir="rtl">زَيْدٌ شُجَاعٌ لٰكِنَّهُ لَيْسَ بِكَرِيمٍ</span> dan <span class="ar-inline" lang="ar" dir="rtl">زَيْدٌ جَبَانٌ لٰكِنَّهُ كَرِيمٌ</span>.</li>
          <li><strong>لَعَلَّ (la‘alla) — Tarajjī &amp; Tawaqqu‘:</strong> harapan atas hal yang disukai dan mungkin terjadi (<span class="ar-inline" lang="ar" dir="rtl">لَعَلَّ الْحَبِيبَ قَادِمٌ</span>) atau kekhawatiran atas hal yang tidak disukai (<span class="ar-inline" lang="ar" dir="rtl">لَعَلَّ زَيْدًا هَالِكٌ</span>).</li>
        </ul>`
      },
      {
        judul: "Bab Zhanna dan Saudara-Saudaranya (Bait 144–147)",
        nazhm: "انْصِبْ بِظَنَّ الْمُبْتَدَا مَعَ الْخَبَرْ ۝ وَكُلَّ فِعْلٍ بَعْدَهَا عَلَى الْأَثَرْ\nكَخِلْتُهُ حَسِبْتُهُ زَعَمْتُهُ ۝ رَأَيْتُهُ وَجَدْتُهُ عَلِمْتُهُ\nجَعَلْتُهُ اتَّخَذْتُهُ وَكُلِّ مَا ۝ مِنْ هٰذِهِ صَرَّفْتَهُ فَلْيُعْلَمَا\nكَقَوْلِهِمْ ظَنَنْتُ زَيْدًا مُنْجِدَا ۝ وَاجْعَلْ لَنَا هٰذَا الْمَكَانَ مَسْجِدَا",
        terjemah: "Nashab-kanlah dengan ظَنَّ terhadap mubtada‘ beserta khabar-nya, serta dengan خَالَ, حَسِبَ, زَعَمَ, رَأَى, وَجَدَ, عَلِمَ, جَعَلَ, اتَّخَذَ, dan seluruh hasil tashrīf-nya.",
        syarah: `<p><strong>Penjelasan (Ya‘ni):</strong> <em>Zhanna</em> dan saudara-saudaranya me-nashab-kan mubtada’ dan khabar sebagai dua maf‘ūl bih. Berdasarkan maknanya, fi‘il-fi‘il tersebut terbagi menjadi:</p>
        <ol>
          <li><strong>Af‘āl al-Yaqīn (memastikan/meyakini):</strong> <span class="ar-inline" lang="ar" dir="rtl">رَأَى</span> (<span class="ar-inline" lang="ar" dir="rtl">رَأَيْتُ اللهَ أَكْبَرَ كُلِّ شَيْءٍ</span>), <span class="ar-inline" lang="ar" dir="rtl">عَلِمَ</span> (<span class="ar-inline" lang="ar" dir="rtl">عَلِمْتُكَ الْبَاذِلَ الْمَعْرُوفَ</span>), dan <span class="ar-inline" lang="ar" dir="rtl">وَجَدَ</span> (<span class="ar-inline" lang="ar" dir="rtl">إِنَّا وَجَدْنَاهُ صَابِرًا</span> — QS. Shād: 44).</li>
          <li><strong>Af‘āl ar-Rujhān (mengunggulkan dugaan kuat):</strong> <span class="ar-inline" lang="ar" dir="rtl">ظَنَّ</span> (<span class="ar-inline" lang="ar" dir="rtl">ظَنَنْتُ زَيْدًا قَائِمًا</span>), <span class="ar-inline" lang="ar" dir="rtl">حَسِبَ</span> (<span class="ar-inline" lang="ar" dir="rtl">حَسِبْتُ التُّقَى وَالْجُودَ خَيْرَ تِجَارَةٍ</span>), <span class="ar-inline" lang="ar" dir="rtl">خَالَ</span> (<span class="ar-inline" lang="ar" dir="rtl">خِلْتُ عَمْرًا قَائِمًا</span>), dan <span class="ar-inline" lang="ar" dir="rtl">زَعَمَ</span> (<span class="ar-inline" lang="ar" dir="rtl">زَعَمْتُ زَيْدًا شَيْخًا</span>).</li>
          <li><strong>Af‘āl at-Tashyīr wa al-Intiqāl (mengubah keadaan):</strong> <span class="ar-inline" lang="ar" dir="rtl">جَعَلَ</span> (<span class="ar-inline" lang="ar" dir="rtl">جَعَلْتُ الطِّينَ إِبْرِيقًا</span>) dan <span class="ar-inline" lang="ar" dir="rtl">اتَّخَذَ</span> (<span class="ar-inline" lang="ar" dir="rtl">وَاتَّخَذْتُ زَيْدًا صَدِيقًا</span>).</li>
          <li><strong>Penyandaran pada pendengaran:</strong> <span class="ar-inline" lang="ar" dir="rtl">سَمِعَ</span>, contohnya: <span class="ar-inline" lang="ar" dir="rtl">سَمِعْتُ النَّبِيَّ ﷺ يَقُولُ</span> (lafaz <span class="ar-inline" lang="ar" dir="rtl">النَّبِيَّ</span> sebagai maf‘ūl pertama dan jumlah <span class="ar-inline" lang="ar" dir="rtl">يَقُولُ</span> sebagai maf‘ūl kedua menurut pengarang/Al-Akhfasy, atau sebagai <em>hāl</em> menurut ulama nahwu selainnya).</li>
        </ol>`
      },
      {
        judul: "Bab Na‘at — Na‘at Haqīqī dan Sababī (Bait 148–156)",
        nazhm: "النَّعْتُ إِمَّا رَافِعٌ لِمُضْمَرِ ۝ يَعُودُ لِلْمَنْعُوتِ أَوْ لِمُظْهَرِ\nفَأَوَّلُ الْقِسْمَيْنِ مِنْهُ أَتْبِعِ ۝ مَنْعُوتَهُ مِنْ عَشَرَةٍ لِأَرْبَعِ\nفِي وَاحِدٍ مِنْ أَوْجُهِ الْإِعْرَابِ ۝ مِنْ رَفْعٍ أَوْ خَفْضٍ أَوِ انْتِصَابِ\nكَذَا مِنَ الْإِفْرَادِ وَالتَّذْكِيرِ ۝ وَالضِّدِّ وَالتَّعْرِيفِ وَالتَّنْكِيرِ\nكَقَوْلِنَا جَاءَ الْغُلَامُ الْفَاضِلُ ۝ وَجَاءَ مَعْهُ نِسْوَةٌ حَوَامِلُ\nوَثَانِيَ الْقِسْمَيْنِ مِنْهُ أَفْرِدِ ۝ وَإِنْ جَرَى الْمَنْعُوتُ غَيْرَ مُفْرَدِ\nوَاجْعَلْهُ فِي التَّأْنِيثِ وَالتَّذْكِيرِ ۝ مُطَابِقًا لِلْمُظْهَرِ الْمَذْكُورِ\nمِثَالُهُ قَدْ جَاءَ حُرَّتَانِ ۝ مُنْطَلِقٌ زَوْجَاهُمَا الْعَبْدَانِ\nوَمِثْلُهُ أَتَى غُلَامٌ سَائِلَهْ ۝ زَوْجَتُهُ عَنْ دَيْنِهَا الْمُحْتَاجَ لَهْ",
        terjemah: "Na‘at adakalanya merafa‘-kan dhamīr (Na‘at Haqīqī) yang mengikuti man‘ūt dalam 4 dari 10 perkara, atau merafa‘-kan isim zhāhir (Na‘at Sababī) yang selalu mufrad dan mengikuti isim zhāhir setelahnya dalam mudzakkar/mu’annats.",
        syarah: `<p><strong>Penjelasan (Ya‘ni):</strong> Na‘at adalah <em>tābi‘</em> (pengikut) yang menyempurnakan <em>man‘ūt</em>-nya, dan terbagi menjadi dua:</p>
        <ul>
          <li><strong>Na‘at Haqīqī:</strong> me-rafa‘-kan dhamīr man‘ūt-nya dan wajib mengikuti man‘ūt pada <strong>4 dari 10 perkara</strong>: (1) satu dari i‘rab (rafa‘, nashab, jarr); (2) makrifat/nakirah; (3) mufrad/mutsanna/jamak; (4) mudzakkar/mu’annats. Contoh: <span class="ar-inline" lang="ar" dir="rtl">جَاءَ الْغُلَامُ الْفَاضِلُ</span> dan <span class="ar-inline" lang="ar" dir="rtl">جَاءَ مَعَهُ نِسْوَةٌ حَوَامِلُ</span>.</li>
          <li><strong>Na‘at Sababī:</strong> me-rafa‘-kan isim zhāhir yang bersambung dengan dhamīr man‘ūt-nya. Ia selalu berbentuk <strong>mufrad</strong>, mengikuti man‘ūt pada <strong>2 dari 5 perkara</strong> (i‘rab serta makrifat/nakirah), dan menyesuaikan <strong>mudzakkar/mu’annats</strong> dengan isim zhāhir setelahnya. Contoh: <span class="ar-inline" lang="ar" dir="rtl">قَدْ جَاءَتْ حُرَّتَانِ مُنْطَلِقٌ زَوْجَاهُمَا الْعَبْدَانِ</span> dan <span class="ar-inline" lang="ar" dir="rtl">أَتَى غُلَامٌ سَائِلَةٌ زَوْجَتُهُ عَنْ دَيْنِهَا الْمُحْتَاجَ لَهُ</span>.</li>
        </ul>`
      },
      {
        judul: "Bab ‘Athaf — Sepuluh Huruf ‘Athaf Nasaq (Bait 157–161)",
        nazhm: "وَأَتْبَعُوا الْمَعْطُوفَ بِالْمَعْطُوفِ ۝ عَلَيْهِ فِي إِعْرَابِهِ الْمَعْرُوفِ\nوَتَسْتَوِي الْأَسْمَاءُ وَالْأَفْعَالُ فِي ۝ إِتْبَاعِ كُلٍّ مِثْلَهُ إِنْ يُعْطَفِ\nبِالْوَاوِ وَالْفَا أَوْ وَأَمْ وَثُمَّا ۝ حَتَّى وَبَلْ وَلَا وَلٰكِنْ إِمَّا\nكَجَاءَ زَيْدٌ ثُمَّ عَمْرٌو أَكْرِمِ ۝ زَيْدًا وَعَمْرًا بِاللِّقَا وَالْمَطْعَمِ\nوَفِئَةٌ لَمْ يَأْكُلُوا أَوْ يَحْضُرُوا ۝ حَتَّى يَفُوتَ أَوْ يَزُولَ الْمُنْكَرُ",
        terjemah: "Dan para ahli bahasa mengikutkan ma‘thūf kepada ma‘thūf ‘alaih dalam hukum i‘rab-nya (baik isim maupun fi‘il) melalui sepuluh huruf: و، ف، أَوْ، أَمْ، ثُمَّ، حَتَّى، بَلْ، لَا، لٰكِنْ، dan إِمَّا.",
        syarah: `<p><strong>Penjelasan (Ya‘ni):</strong> <em>‘Athaf nasaq</em> adalah tābi‘ yang diperantarai salah satu dari sepuluh huruf berikut:</p>
        <ol>
          <li><strong>الْوَاوُ (al-wāwu):</strong> <em>muthlaq al-jam‘i</em> (sekadar menggabungkan tanpa urutan waktu) — <span class="ar-inline" lang="ar" dir="rtl">جَاءَ زَيْدٌ وَعَمْرٌو</span>.</li>
          <li><strong>الْفَاءُ (al-fā’u):</strong> <em>at-tartīb ma‘a at-ta‘qīb</em> (berurutan langsung tanpa jeda lama) — <span class="ar-inline" lang="ar" dir="rtl">جَاءَ زَيْدٌ فَعَمْرٌو</span>.</li>
          <li><strong>ثُمَّ (tsumma):</strong> <em>at-tartīb wa at-tarākhī</em> (berurutan dengan jeda waktu) — <span class="ar-inline" lang="ar" dir="rtl">جَاءَ زَيْدٌ ثُمَّ عَمْرٌو</span>.</li>
          <li><strong>أَوْ (aw):</strong> Setelah <em>thalab</em> bermakna <em>at-takhyīr</em> (pilihan tak boleh digabung: <span class="ar-inline" lang="ar" dir="rtl">تَزَوَّجْ هِنْدًا أَوْ أُخْتَهَا</span>) atau <em>al-ibāhah</em> (boleh digabung: <span class="ar-inline" lang="ar" dir="rtl">جَالِسِ الْعُبَّادَ أَوِ الزُّهَّادَ</span>). Setelah <em>khabar</em> bermakna <em>asy-syakk</em> (keraguan: <span class="ar-inline" lang="ar" dir="rtl">لَبِثْتُ يَوْمًا أَوْ بَعْضَ يَوْمٍ</span>) atau <em>al-ibhām</em> (penyamaran: <span class="ar-inline" lang="ar" dir="rtl">وَإِنَّا أَوْ إِيَّاكُمْ لَعَلَى هُدًى أَوْ فِي ضَلَالٍ مُّبِينٍ</span>), serta <em>at-taqsīm</em> (pembagian: <span class="ar-inline" lang="ar" dir="rtl">الْكَلِمَةُ إِمَّا اسْمٌ أَوْ فِعْلٌ أَوْ حَرْفٌ</span>).</li>
          <li><strong>أَمْ (am):</strong> <em>al-mu‘ādilah lil-hamzah</em> (menyamai hamzah istifham) — <span class="ar-inline" lang="ar" dir="rtl">سَوَاءٌ عَلَيْهِمْ أَأَنذَرْتَهُمْ أَمْ لَمْ تُنذِرْهُمْ</span> (QS. Al-Baqarah: 6).</li>
          <li><strong>إِمَّا (immā):</strong> Menurut pendapat shahih, huruf ‘athaf-nya adalah <em>wāwu</em> yang menyertainya (<span class="ar-inline" lang="ar" dir="rtl">فَإِمَّا مَنًّا بَعْدُ وَإِمَّا فِدَاءً</span> — QS. Muhammad: 4, dengan perkiraan fi‘il yang dibuang: <span class="ar-inline" lang="ar" dir="rtl">فَإِمَّا تَمُنُّونَ مَنًّا وَإِمَّا تَفْدُونَ فِدَاءً</span>).</li>
          <li><strong>بَلْ (bal):</strong> <em>al-idhrāb</em> (mencabut hukum sebelumnya dan menetapkan setelahnya) — <span class="ar-inline" lang="ar" dir="rtl">لَا تَضْرِبْ زَيْدًا بَلْ عَمْرًا</span>.</li>
          <li><strong>لَا (lā):</strong> Syarat didahului kalimat positif (<em>itsbāt</em>) — <span class="ar-inline" lang="ar" dir="rtl">جَاءَ زَيْدٌ لَا عَمْرٌو</span>.</li>
          <li><strong>لٰكِنْ (lākin):</strong> Syarat terletak setelah <em>nafi</em> atau <em>nahyi</em> — <span class="ar-inline" lang="ar" dir="rtl">مَا جَاءَ زَيْدٌ لٰكِنْ عَمْرٌو</span>.</li>
          <li><strong>حَتَّى (hattā):</strong> <em>at-tadrīj</em> (bertahap hingga batas akhir) pada sebagian tempat — <span class="ar-inline" lang="ar" dir="rtl">مَاتَ النَّاسُ حَتَّى الْأَنْبِيَاءُ</span>. Di tempat lain ia berfungsi sebagai huruf jarr (<span class="ar-inline" lang="ar" dir="rtl">أَكَلْتُ السَّمَكَةَ حَتَّى رَأْسِهَا</span>).</li>
        </ol>`
      },
      {
        judul: "Bab Taukīd — Ma‘nawī dan Lafzhī (Bait 162–168)",
        nazhm: "وَجَائِزٌ فِي الِاسْمِ أَنْ يُؤَكَّدَا ۝ فَيَتْبَعُ الْمُؤَكِّدُ الْمُؤَكَّدَا\nفِي أَوْجُهِ الْإِعْرَابِ وَالتَّعْرِيفِ لَا ۝ مُنَكَّرًا فَعَنْ مُؤَكِّدٍ خَلَا\nوَلَفْظُهُ الْمَشْهُورُ فِيهِ أَرْبَعُ ۝ نَفْسٌ وَعَيْنٌ ثُمَّ كُلُّ أَجْمَعُ\nوَغَيْرُهَا تَوَابِعٌ لِأَجْمَعَا ۝ مِنْ أَكْتَعٍ وَأَبْتَعٍ وَأَبْصَعَا\nكَجَاءَ زَيْدٌ نَفْسُهُ وَقُلْ أَرَى ۝ جَيْشَ الْأَمِيرِ كُلَّهُ تَأَخَّرَا\nوَطُفْتُ حَوْلَ الْقَوْمِ أَجْمَعِينَا ۝ مَتْبُوعَةً بِنَحْوِ أَكْتَعِينَا\nوَإِنْ تُؤَكِّدْ كِلْمَةً أَعَدْتَهَا ۝ بِلَفْظِهَا كَقَوْلِكَ انْتَهَى انْتَهَى",
        terjemah: "Diperbolehkan memberi taukīd pada isim makrifat (bukan nakirah). Lafaz taukīd ma‘nawī yang masyhur ada empat: نَفْسٌ، عَيْنٌ، كُلٌّ، أَجْمَعُ beserta pengikutnya (أَكْتَعُ، أَبْتَعُ، أَبْصَعُ). Sedangkan taukīd lafzhī ialah mengulangi lafaz itu sendiri.",
        syarah: `<p><strong>Penjelasan (Ya‘ni):</strong> Taukīd terbagi menjadi dua macam:</p>
        <ul>
          <li><strong>Taukīd Ma‘nawī:</strong> menetapkan makna lahiriah <em>mu’akkad</em> yang makrifat (tidak berlaku pada nakirah kecuali jika terbatas dan diketahui batasnya, serta khusus pada isim). Lafaznya yang masyhur ada empat: <span class="ar-inline" lang="ar" dir="rtl">نَفْسٌ، عَيْنٌ، كُلٌّ، أَجْمَعُ</span> beserta pengikutnya <span class="ar-inline" lang="ar" dir="rtl">أَكْتَعُ، أَبْتَعُ، أَبْصَعُ</span>. Contoh: <span class="ar-inline" lang="ar" dir="rtl">جَاءَ زَيْدٌ نَفْسُهُ</span>, <span class="ar-inline" lang="ar" dir="rtl">أَرَى جَيْشَ الْأَمِيرِ كُلَّهُمْ مُتَأَخِّرِينَ</span>, dan <span class="ar-inline" lang="ar" dir="rtl">طُفْتُ حَوْلَ الْقَوْمِ أَجْمَعِينَ أَكْتَعِينَ</span>.</li>
          <li><strong>Taukīd Lafzhī:</strong> mengulangi lafaz pertama dengan lafaz itu sendiri atau sinonimnya:
            <ul>
              <li><em>Isim:</em> <span class="ar-inline" lang="ar" dir="rtl">أَخَاكَ أَخَاكَ إِنَّ مَنْ لَا أَخَ لَهُ ۝ كَسَاعٍ إِلَى الْهَيْجَا بِغَيْرِ سِلَاحِ</span></li>
              <li><em>Fi‘il:</em> <span class="ar-inline" lang="ar" dir="rtl">انْتَهَى انْتَهَى</span> dan <span class="ar-inline" lang="ar" dir="rtl">فَأَيْنَ إِلَى أَيْنَ النَّجَاةُ بِبَغْلَتِي ۝ أَتَاكَ أَتَاكَ اللَّاحِقُونَ احْبِسِ احْبِسِ</span></li>
              <li><em>Huruf:</em> <span class="ar-inline" lang="ar" dir="rtl">لَا لَا أَبُوحُ بِحُبِّ بَثْنَةَ إِنَّهَا ۝ أَخَذَتْ عَلَيَّ مَوَاثِقًا وَعُهُودَا</span></li>
            </ul>
          </li>
        </ul>
        <blockquote><strong>Catatan Kaki (Hāsyiyah):</strong> Seluruh lafaz taukīd ma‘nawī adalah isim-isim makrifat sehingga tidak dapat mengikuti isim nakirah.</blockquote>`
      },
      {
        judul: "Bab Badal — Definisi dan Lima Pembagian Badal (Bait 169–175)",
        nazhm: "إِذَا اسْمٌ أَوْ فِعْلٌ لِمِثْلِهِ تَلَا ۝ وَالْحُكْمُ لِلثَّانِي وَعَنْ عَطْفٍ خَلَا\nفَاجْعَلْهُ فِي إِعْرَابِهِ كَالْأَوَّلِ ۝ مُلَقِّبًا لَهُ بِلَفْظِ الْبَدَلِ\nكُلٌّ وَبَعْضٌ وَاشْتِمَالٌ وَغَلَطْ ۝ كَذَاكَ إِضْرَابٌ فَبِالْخَمْسِ انْضَبَطْ\nكَجَاءَنِي زَيْدٌ أَخُوكَ وَأَكَلْ ۝ عِنْدِي رَغِيفًا نِصْفَهُ وَقَدْ وَصَلْ\nإِلَيَّ زَيْدٌ عِلْمُهُ الَّذِي دَرَسْ ۝ وَقَدْ رَكِبْتُ الْيَوْمَ بَكْرًا الْفَرَسْ\nإِنْ قُلْتَ بَكْرًا دُونَ قَصْدٍ فَغَلَطْ ۝ أَوْ قُلْتَهُ قَصْدًا فَإِضْرَابٌ فَقَطْ\nوَالْفِعْلُ مِنْ فِعْلٍ كَمَنْ يُؤْمِنْ يُثَبْ ۝ يَدْخُلْ جِنَانًا لَمْ يَنَلْ فِيهَا تَعَبْ",
        terjemah: "Apabila isim mengikuti isim atau fi‘il mengikuti fi‘il tanpa huruf ‘athaf dan hukum ditujukan kepada kata kedua, maka i‘rab-nya mengikuti kata pertama dan dinamai badal. Badal terbagi lima: kull, ba‘dh, isytimāl, ghalath, dan idhrāb.",
        syarah: `<p><strong>Penjelasan (Ya‘ni):</strong> Badal adalah <em>tābi‘</em> sejenis (isim dengan isim, atau fi‘il dengan fi‘il) yang menjadi tujuan utama hukum kalimat tanpa perantara huruf ‘athaf. Contoh badal fi‘il dari fi‘il: <span class="ar-inline" lang="ar" dir="rtl">مَنْ يُؤْمِنْ يُثَبْ يَدْخُلْ جِنَانًا لَمْ يَنَلْ فِيهَا تَعَبْ</span>.</p>
        <p><strong>Lima Macam Badal:</strong></p>
        <ol>
          <li><strong>Badal al-Kull min al-Kull (al-Muthābiq):</strong> kata kedua memiliki makna yang identik/sama persis dengan kata pertama (<em>mubdal minhu</em>), contohnya: <span class="ar-inline" lang="ar" dir="rtl">جَاءَ زَيْدٌ أَخُوكَ</span> ("Zaid, yaitu saudaramu, telah datang").</li>
          <li><strong>Badal al-Ba‘dh min al-Kull:</strong> kata kedua merupakan bagian dari kata pertama, contohnya: <span class="ar-inline" lang="ar" dir="rtl">أَكَلْتُ رَغِيفًا نِصْفَهُ</span> ("Aku telah memakan sepotong roti, yakni separuhnya").</li>
          <li><strong>Badal al-Isytimāl:</strong> <em>mubdal minhu</em> mencakup/mengandung unsur sifat atau hal yang berkaitan dengan badal, contohnya: <span class="ar-inline" lang="ar" dir="rtl">قَدْ وَصَلَ إِلَيَّ زَيْدٌ عِلْمُهُ الَّذِي دَرَسَ</span> ("Sungguh telah sampai kepadaku Zaid, yakni ilmunya yang telah ia pelajari").</li>
          <li><strong>Badal al-Ghalath (kesalahan ucap):</strong> kata pertama terucap tanpa sengaja (keseleo lidah), lalu diralat dengan kata kedua yang dimaksud, contohnya: <span class="ar-inline" lang="ar" dir="rtl">تَصَدَّقْتُ بِدِينَارٍ دِرْهَمٍ</span> ("Aku telah bersedekah dengan satu dinar, [maksudku] satu dirham").</li>
          <li><strong>Badal al-Idhrāb (ralat yang disengaja):</strong> pembicara sengaja menyebut kata pertama, lalu beralih (meralat) menuju maksud pada kata kedua, contohnya: <span class="ar-inline" lang="ar" dir="rtl">رَأَيْتُ زَيْدًا الْفَرَسَ</span> ("Aku telah melihat Zaid, [maksudku] kuda itu").</li>
        </ol>`
      }
    ]
  },
  manshub: {
    judul: "Manshūbātul Asmā’",
    ket: "Isim-isim yang dibaca nashab.",
    jenis: [
      ["Maf‘ūl Bih", "Isim yang dikenai pekerjaan pelaku (fā‘il).", "كَتَبَ الطَّالِبُ الرِّسَالَةَ"],
      ["Maf‘ūl Muthlaq", "Masdar yang menguatkan fi‘il atau menjelaskan jenis/bilangannya.", "ضَرَبْتُ ضَرْبًا"],
      ["Zharf (Maf‘ūl Fīh)", "Keterangan waktu (zharf zamān) atau tempat (zharf makān).", "جَلَسْتُ أَمَامَكَ"],
      ["Hāl", "Penjelas keadaan shāhibul hāl ketika peristiwa terjadi.", "جَاءَ زَيْدٌ رَاكِبًا"],
      ["Tamyīz", "Isim nakirah penjelas kesamaran zat atau nisbah.", "طَابَ زَيْدٌ نَفْسًا"],
      ["Ismu Inna", "Mubtada’ yang dimasuki inna dan saudara-saudaranya.", "إِنَّ الْعِلْمَ نَافِعٌ"],
      ["Khabar Kāna", "Khabar yang dimasuki kāna dan saudara-saudaranya.", "كَانَ الْجَوُّ جَمِيلًا"]
    ]
  },
  makhfudh: {
    judul: "Makhfūdhātul Asmā’",
    ket: "Isim-isim yang dibaca khafdh (jarr).",
    jenis: [
      ["Majrūr bi Harf Jarr", "Isim yang didahului salah satu huruf jarr (مِنْ، إِلَى، عَنْ، عَلَى، فِي، ب، ك، ل).", "مَرَرْتُ بِزَيْدٍ"],
      ["Mudhāf Ilaih (Majrūr bil Idhāfah)", "Isim kedua pada struktur penyandaran (idhāfah).", "كِتَابُ الطَّالِبِ"],
      ["Tābi‘ lil Makhfūdh", "Na‘at, ‘athaf, taukīd, atau badal yang mengikuti isim majrūr.", "مَرَرْتُ بِزَيْدٍ الْكَرِيمِ"]
    ]
  }
};

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
  "Fa'il": "Fā‘il selalu marfū‘: dhammah pada mufrad, wāw pada jamak mudzakkar salim (Nazhm al-‘Imrīthī Bait 106–108).",
  "Mubtada'": "Mubtada’ marfū‘ karena ia awal jumlah ismiyyah yang sunyi dari ‘āmil lafzhī (Nazhm al-‘Imrīthī Bait 121).",
  "Khabar": "Khabar marfū‘ karena disandarkan kepada mubtada’ sebagai penyempurna makna (Nazhm al-‘Imrīthī Bait 122).",
  "Isim kana": "Isim kāna tetap marfū‘; kāna merafa‘kan isimnya dan menashabkan khabarnya (Nazhm al-‘Imrīthī Bait 133).",
  "Khabar kana": "Khabar kāna manshūb: fathah pada isim mufrad (Nazhm al-‘Imrīthī Bait 133).",
  "Isim inna": "Inna menashabkan isimnya dan merafa‘kan khabarnya; isim mufrad dinashabkan dengan fathah (Nazhm al-‘Imrīthī Bait 139).",
  "Majrur bi harf jarr": "Isim setelah huruf jarr majrūr: kasrah pada mufrad, yā’ pada jamak mudzakkar salim."
};

// Bank soal bertingkat (lv 1-3)
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
