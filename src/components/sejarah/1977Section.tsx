import TableAdvanced from "../tableAdvance";
export default function SejarahSection3() {
    const headers1977 = [
    [
        { content: "No.", className: "bg-[#c02f31] text-white text-center" },
        { content: "Partai", className: "bg-[#c02f31] text-white text-center" },
        { content: "Suara", className: "bg-[#c02f31] text-white text-center" },
        { content: "%", className: "bg-[#c02f31] text-white text-center" },
        { content: "Kursi", className: "bg-[#c02f31] text-white text-center" },
        { content: "% (1971)", className: "bg-[#c02f31] text-white text-center" },
        { content: "Keterangan", className: "bg-[#c02f31] text-white text-center" },
    ],
    ];
    const headers1982 = [
    [
        { content: "No.", className: "bg-[#c02f31] text-white text-center" },
        { content: "Partai", className: "bg-[#c02f31] text-white text-center" },
        { content: "Suara DPR", className: "bg-[#c02f31] text-white text-center" },
        { content: "%", className: "bg-[#c02f31] text-white text-center" },
        { content: "Kursi", className: "bg-[#c02f31] text-white text-center" },
        { content: "% (1977)", className: "bg-[#c02f31] text-white text-center" },
        { content: "Keterangan", className: "bg-[#c02f31] text-white text-center" },
    ],
    ];
    const headers1987 = [
    [
        { content: "No.", className: "bg-[#c02f31] text-white text-center" },
        { content: "Partai", className: "bg-[#c02f31] text-white text-center" },
        { content: "Suara", className: "bg-[#c02f31] text-white text-center" },
        { content: "%", className: "bg-[#c02f31] text-white text-center" },
        { content: "Kursi", className: "bg-[#c02f31] text-white text-center" },
        { content: "% (1982)", className: "bg-[#c02f31] text-white text-center" },
        { content: "Keterangan", className: "bg-[#c02f31] text-white text-center" },
    ],
    ];
    const headers1992 = [
    [
        { content: "No.", className: "bg-[#c02f31] text-white text-center" },
        { content: "Partai", className: "bg-[#c02f31] text-white text-center" },
        { content: "Suara", className: "bg-[#c02f31] text-white text-center" },
        { content: "%", className: "bg-[#c02f31] text-white text-center" },
        { content: "Kursi", className: "bg-[#c02f31] text-white text-center" },
        { content: "% (1987)", className: "bg-[#c02f31] text-white text-center" },
        { content: "Keterangan", className: "bg-[#c02f31] text-white text-center" },
    ],
    ];
    const headers1997 = [
    [
        { content: "No.", className: "bg-[#c02f31] text-white text-center" },
        { content: "Partai", className: "bg-[#c02f31] text-white text-center" },
        { content: "Suara", className: "bg-[#c02f31] text-white text-center" },
        { content: "%", className: "bg-[#c02f31] text-white text-center" },
        { content: "Kursi", className: "bg-[#c02f31] text-white text-center" },
        { content: "% (1992)", className: "bg-[#c02f31] text-white text-center" },
        { content: "Keterangan", className: "bg-[#c02f31] text-white text-center" },
    ],
    ];

    const data1977 = [
    [
        { content: "1." }, { content: "Golkar" }, { content: "39.750.096" },
        { content: "62,11" }, { content: "232" }, { content: "62,80" },
        { content: "-0,69" },
    ],
    [
        { content: "2." }, { content: "PPP" }, { content: "18.743.491" },
        { content: "29,29" }, { content: "99" }, { content: "27,12" },
        { content: "+2,17" },
    ],
    [
        { content: "3." }, { content: "PDI" }, { content: "5.504.757" },
        { content: "8,60" }, { content: "29" }, { content: "10,08" },
        { content: "-1,48" },
    ],
    [
        { content: "Jumlah", colSpan: 2, className: "font-bold bg-gray-200 text-left" },
        { content: "63.998.344", className: "font-bold" },
        { content: "100,00", className: "font-bold" },
        { content: "360", className: "font-bold" },
        { content: "100,00", className: "font-bold" },
        { content: "" },
    ],
    ];

    const data1982 = [
    [
        { content: "1." }, { content: "Golkar" }, { content: "48.334.724" },
        { content: "64,34" }, { content: "242" }, { content: "62,11" },
        { content: "+2,23" },
    ],
    [
        { content: "2." }, { content: "PPP" }, { content: "20.871.880" },
        { content: "27,78" }, { content: "94" }, { content: "29,29" },
        { content: "-1,51" },
    ],
    [
        { content: "3." }, { content: "PDI" }, { content: "5.919.702" },
        { content: "7,88" }, { content: "24" }, { content: "8,60" },
        { content: "-0,72" },
    ],
    [
        { content: "Jumlah", colSpan: 2, className: "font-bold bg-gray-200 text-left" },
        { content: "75.126.306", className: "font-bold" },
        { content: "100,00", className: "font-bold" },
        { content: "364", className: "font-bold" },
        { content: "100,00", className: "font-bold" },
        { content: "" },
    ],
    ];

    const data1987 = [
    [
        { content: "1." }, { content: "Golkar" }, { content: "62.783.680" },
        { content: "73,16" }, { content: "299" }, { content: "68,34" },
        { content: "+2,23" },
    ],
    [
        { content: "2." }, { content: "PPP" }, { content: "13.701.428" },
        { content: "15,97" }, { content: "61" }, { content: "27,78" },
        { content: "-1,51" },
    ],
    [
        { content: "3." }, { content: "PDI" }, { content: "9.384.708" },
        { content: "10,87" }, { content: "40" }, { content: "7,88" },
        { content: "-0,72" },
    ],
    [
        { content: "Jumlah", colSpan: 2, className: "font-bold bg-gray-200 text-left" },
        { content: "85.869.816", className: "font-bold" },
        { content: "100,00", className: "font-bold" },
        { content: "400", className: "font-bold" },
        { content: "" },
        { content: "" },
    ],
    ];

    const data1992 = [
    [
        { content: "1." }, { content: "Golkar" }, { content: "66.599.331" },
        { content: "68,10" }, { content: "282" }, { content: "73,16" },
        { content: "+2,23" },
    ],
    [
        { content: "2." }, { content: "PPP" }, { content: "16.624.647" },
        { content: "17,01" }, { content: "62" }, { content: "15,97" },
        { content: "-1,51" },
    ],
    [
        { content: "3." }, { content: "PDI" }, { content: "14.565.556" },
        { content: "14,89" }, { content: "56" }, { content: "10,87" },
        { content: "-0,72" },
    ],
    [
        { content: "Jumlah", colSpan: 2, className: "font-bold bg-gray-200 text-left" },
        { content: "97.789.534", className: "font-bold" },
        { content: "100,00", className: "font-bold" },
        { content: "400", className: "font-bold" },
        { content: "100,00", className: "font-bold" },
        { content: "" },
    ],
    ];

    const data1997 = [
    [
        { content: "1." }, { content: "Golkar" }, { content: "84.187.907" },
        { content: "74,51" }, { content: "325" }, { content: "68,10" },
        { content: "+2,23" },
    ],
    [
        { content: "2." }, { content: "PPP" }, { content: "25.340.028" },
        { content: "22,43" }, { content: "89" }, { content: "17,00" },
        { content: "-1,51" },
    ],
    [
        { content: "3." }, { content: "PDI" }, { content: "3.463.225" },
        { content: "3,06" }, { content: "11" }, { content: "14,90" },
        { content: "-0,72" },
    ],
    [
        { content: "Jumlah", colSpan: 2, className: "font-bold bg-gray-200 text-left" },
        { content: "112.991.150", className: "font-bold" },
        { content: "100,00", className: "font-bold" },
        { content: "425", className: "font-bold" },
        { content: "100,00", className: "font-bold" },
        { content: "" },
    ],
    ];

    

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-20 py-10 space-y-4">
        {/* HEADER */}
        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Dasar Hukum Pemilu Tahun 1977
            </p>
        </div>

        {/* LIST */}
        <ol className="list-decimal pl-5 md:pl-6 space-y-2 text-base md:text-lg text-justify text-black">
            <li>
            Ketetapan MPR Nomor IV/MPR/1973 tentang Garis-garis Besar Haluan Negara bidang politik, Aparatur Pemerintah, Hukum dan Hubungan Luar Negeri.
            </li>
            <li>
            Ketetapan MPR Nomor VIII/MPR/1973 tentang Pemilihan Umum.
            </li>
            <li>Undang-undang nomor 3 Tahun 1975 Tentang Partai Politik dan Golongan Karya.</li>
            <li>Undang-undang Nomor 5 tahun 1974 tentang Pokok-pokok Pemerintahan di daerah.</li>
            <li>Undang-undang Nomor 8 tahun 1974 tentang Pokok-pokok Kepegawaian.</li>
            <li>Undang-undang Nomor 5 tahun 1979 tentang Pemerintahan Desa.</li>
        </ol>

        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Dasar Hukum Pemilu Tahun 1982
            </p>
        </div>

        {/* LIST */}
        <ol className="list-decimal pl-5 md:pl-6 space-y-2 text-base md:text-lg text-justify text-black">
            <li>
            Ketetapan MPR Nomor IV/MPR/1978 tentang Garis-garis Besar Haluan Negara dan  Ketatapan MPR Nomor VII/MPR/1978 Tentang Pemilu.
            </li>
            <li>
            Undang-undang Nomor 2  Tahun 1980 tentang Pemilihan Umum.
            </li>
            <li>Peraturan Pemerintah  Nomor 41 Tahun 1980 sebagai pengganti Peraturan Pemerintah Nomor 1 Tahun 1976.</li>
        </ol>

        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Dasar Hukum Pemilu Tahun 1987
            </p>
        </div>

        {/* LIST */}
        <ol className="list-decimal pl-5 md:pl-6 space-y-2 text-base md:text-lg text-justify text-black">
            <li>
            Ketetapan MPR Nomor II/MPR/1983 tentang GBHN dan Ketapan MPR Nomor III/MPR/1983 Tentang Pemilu.
            </li>
            <li>
            Undang-undang Nomor 2  Tahun 1980 tentang Pemilihan Umum.
            </li>
            <li>Peraturan Pemerintah  Nomor 41 Tahun 1980 sebagai pengganti Peraturan Pemerintah Nomor 1 Tahun 1976.</li>
        </ol>

        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Dasar Hukum Pemilu Tahun 1992
            </p>
        </div>

        {/* LIST */}
        <ol className="list-decimal pl-5 md:pl-6 space-y-2 text-base md:text-lg text-justify text-black">
            <li>
            Ketetapan MPR Nomor II/MPR/1988 tentang GBHN dan Ketapan MPR Nomor III/MPR/1988 Tentang Pemilu.
            </li>
            <li>
            Undang-undang Nomor 2  Tahun 1980 tentang Pemilihan Umum.
            </li>
            <li>Peraturan Pemerintah  Nomor 35 Tahun 1985 sebagaimana telah diubah dengan Peraturan Pemerintah Nomor 43.</li>
            <li>Peraturan Pemerintah Nomor 37 Tahun 1990.</li>
        </ol>

        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Dasar Hukum Pemilu Tahun 1997
            </p>
        </div>

        {/* LIST */}
        <ol className="list-decimal pl-5 md:pl-6 space-y-2 text-base md:text-lg text-justify text-black">
            <li>
            Ketetapan MPR Nomor II/MPR/1993 tentang GBHN dan Ketapan MPR Nomor III/MPR/1993 Tentang Pemilu.
            </li>
            <li>
            Undang-undang Nomor 5 Tahun 1996 tentang Pemilihan Umum.
            </li>
            <li>Peraturan Pemerintah Nomor 36 Tahun 1985.</li>
            <li>Peraturan Pemerintah Nomor 37 Tahun 1996.</li>
        </ol>

        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Sistem Pemilu
            </p>
        </div>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Sistim Pemilu tahun 1977 hingga 1997 memilih DPR dan DPRD menganut sistim proporsional dengan Stelsel Daftar yang diikuti hanya 3 partai politik, yaitu Partai Persatuan Pembangunan, Golongan Karya dan Partai Demokrasi Indonesia.
        </p>

        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Badan Penyelenggara Pemilu
            </p>
        </div>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Lembaga Penyelenggara Pemilu (LPU) dibentuk dengan Keputusan Presiden Nomor 3 Tahun 1970 diketuai oleh Menteri Dalam Negeri. LPU keanggotaannya terdiri dari Dewan Pimpinan, Dewan Pertimbangan dan Sekretariat Umum. LPU ini dibawah Departemen Dalam Negeri.
        </p>
        <div className="flex flex-wrap justify-center gap-4">

        <div className="px-6 md:px-10 py-4 md:py-5 rounded-xl bg-linear-to-b from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-semibold text-white text-center">
            Dewan Pimpinan
            </p>
        </div>

        <div className="px-6 md:px-10 py-4 md:py-5 rounded-xl bg-linear-to-b from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-semibold text-white text-center">
            Dewan Pertimbangan
            </p>
        </div>

        <div className="px-6 md:px-10 py-4 md:py-5 rounded-xl bg-linear-to-b from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-semibold text-white text-center">
            Sekretariat Umum
            </p>
        </div>

        </div>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Struktur organisasi penyelenggara di Pusat  Panitia Pemilihan Indonesia (PPI), di Provinsi Panitia Pemilihan Daerah Tingklat I (PPD I), di Kabupaten/Kotamadya Panitia Pemilihan Daerah Tingkat II dan di Kecamatan Panitia Pemungutan Suara (PPS) dan di Desa/Kelurahan disebut Panitia Pendaftaran Pemilih (Pantarlih). Untuk melaksanakan pemungutan dan penghitungan suara dibentuk Kelompok Penyelenggara Pemungutan Suara (KPPS), bagi warga negara RI di luar negeri dibentuk Panitia Pemilihan Luar Negeri (PPLN) dan Kelompok Penyelenggara Pemungutan Suara Luar Negeri (KPPSLN) dan mulai Pemilu 1982 dibentuk juga Panitia Pengawas Pelaksana Pemilu (Panwaslak Pemilu).
        </p>

        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Pelaksanaan Pemilihan Umum 1971
            </p>
        </div>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Setelah 1971, pelaksanaan Pemilu yang periodik dan teratur mulai terlaksana. Pemilu ketiga diselenggarakan 6 tahun lebih setelah Pemilu 1971, yakni tahun 1977, setelah itu selalu terjadwal sekali dalam 5 tahun. Dari segi jadwal sejak itulah pemilu teratur dilaksanakan.
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Satu hal yang nyata perbedaannya dengan Pemilu-pemilu sebelumnya adalah bahwa sejak Pemilu 1977 pesertanya jauh lebih sedikit, dua parpol dan satu Golkar. Ini terjadi setelah sebelumnya pemerintah bersama-sama dengan DPR berusaha menyederhanakan jumlah partai dengan membuat UU No. 3 Tahun 1975 tentang Partai Politik dan Golkar. Kedua partai itu adalah Partai Persatuan Pembangunan atau PPP dan Partai Demokrasi Indonesia atau PDI) dan satu Golongan Karya atau Golkar. Jadi dalam 5 kali Pemilu, yaitu Pemilu 1977, 1982, 1987, 1992, dan 1997 pesertanya hanya tiga tadi.
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Hasilnya pun sama, Golkar selalu menjadi pemenang, sedangkan PPP dan PDI menjadi pelengkap atau sekedar ornamen. Golkar bahkan sudah menjadi pemenang sejak Pemilu 1971. Keadaan ini secara lang-sung dan tidak langsung membuat kekuasaan eksekutif dan legislatif berada di bawah kontrol Golkar. Pendukung utama Golkar adalah birokrasi sipil dan militer. Berikut ini dipaparkan hasil dari 5 kali Pemilu tersebut secara berturut-turut.
        </p>

        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Hasil Pemilu 1977
            </p>
        </div>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Pemungutan suara Pemilu 1977 dilakukan 2 Mei 1977. Cara pembagian kursi masih dilakukan seperti dalam Pemilu 1971, yakni mengikuti sistem proporsional di daerah pemilihan. Dari 70.378.750 pemilih, suara yang sah mencapai 63.998.344 suara atau 90,93 persen. Dari suara yang sah itu Golkar meraih 39.750.096 suara atau 62,11 persen. Namun perolehan kursinya menurun menjadi 232 kursi atau kehilangan 4 kursi dibandingkan Pemilu 1971.
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Pada Pemilu 1977 suara PPP naik di berbagai daerah, bahkan di DKI Jakarta dan DI Aceh mengalahkan Golkar. Secara nasional PPP berhasil meraih 18.743.491 suara, 99 kursi atau naik 2,17 persen, atau bertambah 5 kursi dibanding gabungan kursi 4 partai Islam dalam Pemilu 1971. Kenaikan suara PPP terjadi di banyak basis-basis eks Masjumi. Ini seiring dengan tampilnya tokoh utama Masjumi mendukung PPP. Tetapi kenaikan suara PPP di basis-basis Masjumi diikuti pula oleh penurunan suara dan kursi di basis-basis NU, sehingga kenaikan suara secara nasional tidak begitu besar.
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        PPP berhasil menaikkan 17 kursi dari Sumatera, Jakarta, Jawa Barat dan Kalimantan, tetapi kehilangan 12 kursi di Jawa Tengah, Yogyakarta, Jawa Timur dan Sulawesi Selatan. Secara nasional tambahan kursi hanya 5.
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        PDI juga merosot perolehan kursinya dibanding gabungan kursi partai-partai yang berfusi sebelumnya, yakni hanya memperoleh 29 kursi atau berkurang 1 kursi di banding gabungan suara PNI, Parkindo dan Partai Katolik. Selengkapnya perolehan kursi dan suara tersebut bisa dilihat pada tabel di bawah ini.
        </p>
        <TableAdvanced headers={headers1977} data={data1977} />
        
        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Hasil Pemilu 1982
            </p>
        </div>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Pemungutan suara Pemilu 1982 dilangsungkan secara serentak pada tanggal 4 Mei 1982. Pada Pemilu ini perolehan suara dan kursi secara nasional Golkar meningkat, tetapi gagal merebut kemenangan di Aceh. Hanya Jakarta dan Kalimantan Selatan yang berhasil diambil Golkar dari PPP. Secara nasional Golkar berhasil merebut tambahan 10 kursi dan itu berarti kehilangan masing-masing 5 kursi bagi PPP dan PDI Golkar meraih 48.334.724 suara atau 242 kursi. Adapun cara pembagian kursi pada Pemilu ini tetap mengacu pada ketentuan Pemilu 1971.
        </p>
        <TableAdvanced headers={headers1982} data={data1982} />

        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Hasil Pemilu 1987
            </p>
        </div>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Pemungutan suara Pemilu 1987 diselenggarakan tanggal 23 April 1987 secara serentak di seluruh tanah air. Dari 93.737.633 pemilih, suara yang sah mencapai 85.869.816 atau 91,32 persen. Cara pembagian kursi juga tidak berubah, yaitu tetap mengacu pada Pemilu sebelumnya.
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Hasil Pemilu kali ini ditandai dengan kemerosotan terbesar PPP, yakni hilangnya 33 kursi dibandingkan Pemilu 1982, sehingga hanya mendapat 61 kursi. Penyebab merosotnya PPP antara lain karena tidak boleh lagi partai itu memakai asas Islam dan diubahnya lambang dari Ka'bah kepada Bintang dan terjadinya penggembosan oleh tokoh- tokoh unsur NU, terutama Jawa Timur dan Jawa Tengah.
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Sementara itu Golkar memperoleh tambahan 53 kursi sehingga menjadi 299 kursi. PDI, yang tahun 1986 dapat dikatakan mulai dekat dengan kekuasaan, sebagaimana diindikasikan dengan pembentukan DPP PDI hasil Kongres 1986 oleh Menteri Dalam Negeri Soepardjo Rustam, berhasil menambah perolehan kursi secara signifikan dari 30 kursi pada Pemilu 1982 menjadi 40 kursi pada Pemilu 1987 ini.
        </p>
        <TableAdvanced headers={headers1987} data={data1987} />
        
        
        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Hasil Pemilu 1992
            </p>
        </div>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Cara pembagian kursi untuk Pemilu 1992 juga masih sama dengan Pemilu sebelumnya. Hasil Pemilu yang pemungutan suaranya dilaksanakan tanggal 9 Juni 1992 ini pada waktu itu agak mengagetkan banyak orang. Sebab, perolehan suara Golkar kali ini merosot dibandingkan Pemilu 1987. Kalau pada Pemilu 1987 perolehan suaranya mencapai 73,16 persen, pada Pemilu 1992 turun menjadi 68,10 persen, atau merosot 5,06 persen. Penurunan yang tampak nyata bisa dilihat pada perolehan kursi, yakni menurun dari 299 menjadi 282, atau kehilangan 17 kursi dibanding pemilu sebelumnya.
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        PPP juga mengalami hal yang sama, meski masih bisa menaikkan 1 kursi dari 61 pada Pemilu 1987 menjadi 62 kursi pada Pemilu 1992 ini. Tetapi di luar Jawa suara dan kursi partai berlambang ka'bah itu merosot. Pada Pemilu 1992 partai ini kehilangan banyak kursi di luar Jawa, meski ada penambahan kursi dari Jawa Timur dan Jawa Tengah. Malah partai itu tidak memiliki wakil sama sekali di 9 provinsi, termasuk 3 provinsi di Sumatera. PPP memang berhasil menaikkan perolehan 7 kursi di Jawa, tetapi karena kehilangan 6 kursi di Sumatera, akibatnya partai itu hanya mampu menaikkan 1 kursi secara nasional.
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Yang berhasil menaikkan perolehan suara dan kursi di berbagai daerah adalah PDI. Pada Pemilu 1992 ini PDI berhasil meningkatkan perolehan kursinya 16 kursi dibandingkan Pemilu 1987, sehingga menjadi 56 kursi. Ini artinya dalam dua pemilu, yaitu 1987 dan 1992, PDI berhasil menambah 32 kursinya di DPR RI.
        </p>
        <TableAdvanced headers={headers1992} data={data1992} />
        
        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Hasil Pemilu 1997
            </p>
        </div>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Sampai Pemilu 1997 ini cara pembagian kursi yang digunakan tidak berubah, masih menggunakan cara yang sama dengan Pemilu 1971, 1977, 1982, 1987, dan 1992. Pemungutan suara diselenggarakan tanggal 29 Mei 1997. Hasilnya menunjukkan bahwa setelah pada Pemilu 1992 mengalami kemerosotan, kali ini Golkar kembali merebut suara pendukungnnya. Perolehan suaranya mencapai 74,51 persen, atau naik 6,41. Sedangkan perolehan kursinya meningkat menjadi 325 kursi, atau bertambah 43 kursi dari hasil pemilu sebelumnya.
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        PPP juga menikmati hal yang sama, yaitu meningkat 5,43 persen. Begitu pula untuk perolehan kursi. Pada Pemilu 1997 ini PPP meraih 89 kursi atau meningkat 27 kursi dibandingkan Pemilu 1992. Dukungan terhadap partai itu di Jawa sangat besar.
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Sedangkan PDI, yang mengalami konflik internal dan terpecah antara PDI Soerjadi dengan Megawati Soekarnoputri setahun menjelang pemilu, perolehan suaranya merosot 11,84 persen, dan hanya mendapat 11 kursi, yang berarti kehilangan 45 kursi di DPR dibandingkan Pemilu 1992.
        </p>
        <TableAdvanced headers={headers1997} data={data1997} />
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Pemilu kali ini diwarnai banyak protes. Protes terhadap kecurangan terjadi di banyak daerah. Bahkan di Kabupaten Sampang, Madura, puluhan kotak suara dibakar massa karena kecurangan penghitungan suara dianggap keterlaluan. Ketika di beberapa tempat di daerah itu pemilu diulang pun, tetapi pemilih, khususnya pendukung PPP, tidak mengambil bagian.
        </p>

    </section>
  );
}