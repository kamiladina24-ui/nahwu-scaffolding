// ===== KITAB UTAMA TERVALIDASI (Closed-Corpus: Hanya menggunakan rujukan Alfiyyah, Syarh Ibnu 'Aqil, & Nazhm al-'Imrithi) =====
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
