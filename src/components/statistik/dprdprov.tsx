import TableAdvanced from "../tableAdvance";

export default function DPRDPROVSection() {
   const headersKomposisi = [
  [
    { content: "Partai Politik", className: "bg-[#c02f31] text-white" },
    {
      content: "Jumlah Kursi dalam Periode",
      colSpan: 4,
      className: "bg-[#c02f31] text-white",
    },
  ],
  [
    { content: "", className: "bg-[#c02f31]" },
    { content: "2009–2014", className: "bg-[#c02f31] text-white" },
    { content: "2014–2019", className: "bg-[#c02f31] text-white" },
    { content: "2019–2024", className: "bg-[#c02f31] text-white" },
    { content: "2024–2029", className: "bg-[#c02f31] text-white" },
  ],
];
    const headersDaerahPemilih = [
    [
        { content: "Nama Dapil", className: "bg-[#c02f31] text-white" },
        { content: "Wilayah Dapil", className: "bg-[#c02f31] text-white" },
        { content: "Jumlah Kursi", className: "bg-[#c02f31] text-white" },
    ],
    ];

    const headersDaftarAnggota = [
  [
    { content: "Nama Anggota", className: "bg-[#c02f31] text-white" },
    { content: "Partai Politik", className: "bg-[#c02f31] text-white" },
    { content: "Daerah Pemilihan", className: "bg-[#c02f31] text-white" },
    { content: "Surat Sah", className: "bg-[#c02f31] text-white" },
    { content: "Keterangan", className: "bg-[#c02f31] text-white" },
  ],
];

    const dataDaftarAnggota = [
    [
        { content: "Niken Miyasari", className: "text-left font-semibold" },
        { content: "PKB" },
        { content: "Jateng 5" },
        { content: "71.237" },
        { content: "" },
    ],
    [
        { content: "Abdulah Aminudin", className: "text-left font-semibold" },
        { content: "PKB" },
        { content: "Jateng 5" },
        { content: "44.440" },
        { content: "" },
    ],
    [
        { content: "Rohmat Marzuki, S.Hut.", className: "text-left font-semibold" },
        { content: "Gerindra" },
        { content: "Jateng 5" },
        { content: "59.451" },
        { content: "" },
    ],
    [
        { content: "A. Baginda Mohammad Mahfuz H", className: "text-left font-semibold" },
        { content: "PDI-P" },
        { content: "Jateng 5" },
        { content: "84.387" },
        { content: "" },
    ],
    [
        { content: "Yohanes Winarto, S.H., M.H.", className: "text-left font-semibold" },
        { content: "PDI-P" },
        { content: "Jateng 5" },
        { content: "43.287" },
        { content: "" },
    ],
    [
        { content: "Padmasari Mestikajati, S.IP., M.Si.", className: "text-left font-semibold" },
        { content: "Golkar" },
        { content: "Jateng 5" },
        { content: "28.907" },
        { content: "" },
    ],
    [
        { content: "Hafidz Alhaq Fatih, S.T.", className: "text-left font-semibold" },
        { content: "PKS" },
        { content: "Jateng 5" },
        { content: "29.585" },
        { content: "" },
    ],
    [
        { content: "Tri Wanto", className: "text-left font-semibold" },
        { content: "Demokrat" },
        { content: "Jateng 5" },
        { content: "56.019" },
        { content: "" },
    ],
    ];



    const dataKomposisi = [
    [
        { content: "PDI-P", className: "bg-gray-100 text-left font-semibold" },
        { content: "23" },
        { content: <span className="text-green-500">▲ 27</span> },
        { content: <span className="text-green-500">▲ 42</span> },
        { content: <span className="text-red-500">▼ 33</span> },
    ],
    [
        { content: "PKB", className: "bg-gray-100 text-left font-semibold" },
        { content: <span className="text-green-500">9</span> },
        { content: <span className="text-green-500">▲ 13</span> },
        { content: <span className="text-green-500">▲ 20</span> },
        { content: "20" },
    ],
    [
        { content: "Gerindra", className: "bg-gray-100 text-left font-semibold" },
        { content: <span className="text-green-500">(Baru) 9</span> },
        { content: <span className="text-green-500">▲ 11</span> },
        { content: <span className="text-green-500">▲ 13</span> },
        { content: <span className="text-green-500">▲ 17</span> },
    ],
    [
        { content: "Golkar", className: "bg-gray-100 text-left font-semibold" },
        { content: "11" },
        { content: <span className="text-red-500">▼ 10</span> },
        { content: <span className="text-red-500">▼ 12</span> },
        { content: <span className="text-green-500">▲ 17</span> },
    ],
    [
        { content: "PKS", className: "bg-gray-100 text-left font-semibold" },
        { content: "10" },
        { content: "10" },
        { content: "10" },
        { content: <span className="text-green-500">▲ 11</span> },
    ],
    [
        { content: "Demokrat", className: "bg-gray-100 text-left font-semibold" },
        { content: "16" },
        { content: <span className="text-red-500">▼ 9</span> },
        { content: <span className="text-red-500">▼ 5</span> },
        { content: <span className="text-green-500">▲ 7</span> },
    ],
    [
        { content: "PPP", className: "bg-gray-100 text-left font-semibold" },
        { content: <span className="text-green-500">7</span> },
        { content: <span className="text-green-500">▲ 8</span> },
        { content: <span className="text-green-500">▲ 9</span> },
        { content: <span className="text-red-500">▼ 6</span> },
    ],
    [
        { content: "PAN", className: "bg-gray-100 text-left font-semibold" },
        { content: "10" },
        { content: <span className="text-red-500">▼ 8</span> },
        { content: <span className="text-red-500">▼ 6</span> },
        { content: <span className="text-red-500">▼ 4</span> },
    ],
    [
        { content: "Nasdem", className: "bg-gray-100 text-left font-semibold" },
        { content: "-" },
        { content: <span className="text-green-500">(Baru) 4</span> },
        { content: <span className="text-red-500">▼ 3</span> },
        { content: "3" },
    ],
    [
        { content: "PSI", className: "bg-gray-100 text-left font-semibold" },
        { content: "-" },
        { content: "-" },
        { content: <span className="text-green-500">(Baru) 0</span> },
        { content: <span className="text-green-500">▲ 2</span> },
    ],
    [
        { content: "Hanura", className: "bg-gray-100 text-left font-semibold" },
        { content: <span className="text-green-500">(Baru) 4</span> },
        { content: <span className="text-red-500">▼ 0</span> },
        { content: "0" },
        { content: "0" },
    ],
    [
        { content: "PKNU", className: "bg-gray-100 text-left font-semibold" },
        { content: <span className="text-green-500">(Baru) 1</span> },
        { content: "-" },
        { content: "-" },
        { content: "-" },
    ],

    // ===== TOTAL =====
    [
        { content: "Jumlah Anggota", className: "bg-gray-200 font-bold text-left" },
        { content: "100" },
        { content: "100" },
        { content: <span className="text-green-500">▲ 120</span> },
        { content: "120" },
    ],
    [
        { content: "Jumlah Partai", className: "bg-gray-200 font-bold text-left" },
        { content: "10" },
        { content: <span className="text-red-500">▼ 9</span> },
        { content: "9" },
        { content: <span className="text-green-500">▲ 10</span> },
    ],
    ];
    const dataDaerahPemilih = [
    [
        { content: "JAWA TENGAH 1", className: "font-semibold" },
        { content: "Kota Semarang", className: "text-left" },
        { content: "6" },
    ],
    [
        { content: "JAWA TENGAH 2", className: "font-semibold" },
        { content: "Kabupaten Semarang, Kabupaten Kendal, Kota Salatiga", className: "text-left" },
        { content: "7" },
    ],
    [
        { content: "JAWA TENGAH 3", className: "font-semibold" },
        { content: "Kabupaten Kudus, Kabupaten Jepara, Kabupaten Demak", className: "text-left" },
        { content: "10" },
    ],
    [
        { content: "JAWA TENGAH 4", className: "font-semibold" },
        { content: "Kabupaten Rembang, Kabupaten Pati", className: "text-left" },
        { content: "6" },
    ],
    [
        { content: "JAWA TENGAH 5", className: "font-semibold" },
        { content: "Kabupaten Grobogan, Kabupaten Blora", className: "text-left" },
        { content: "8" },
    ],
    [
        { content: "JAWA TENGAH 6", className: "font-semibold" },
        { content: "Kabupaten Wonogiri, Kabupaten Karanganyar, Kabupaten Sragen", className: "text-left" },
        { content: "10" },
    ],
    [
        { content: "JAWA TENGAH 7", className: "font-semibold" },
        { content: "Kabupaten Klaten, Kabupaten Sukoharjo, Kota Surakarta", className: "text-left" },
        { content: "10" },
    ],
    [
        { content: "JAWA TENGAH 8", className: "font-semibold" },
        { content: "Kabupaten Magelang, Kabupaten Boyolali, Kota Magelang", className: "text-left" },
        { content: "8" },
    ],
    [
        { content: "JAWA TENGAH 9", className: "font-semibold" },
        { content: "Kabupaten Purworejo, Kabupaten Wonosobo, Kabupaten Temanggung", className: "text-left" },
        { content: "8" },
    ],
    [
        { content: "JAWA TENGAH 10", className: "font-semibold" },
        { content: "Kabupaten Purbalingga, Kabupaten Banjarnegara, Kabupaten Kebumen", className: "text-left" },
        { content: "11" },
    ],
    [
        { content: "JAWA TENGAH 11", className: "font-semibold" },
        { content: "Kabupaten Cilacap, Kabupaten Banyumas", className: "text-left" },
        { content: "12" },
    ],
    [
        { content: "JAWA TENGAH 12", className: "font-semibold" },
        { content: "Kabupaten Tegal, Kabupaten Brebes, Kota Tegal", className: "text-left" },
        { content: "12" },
    ],
    [
        { content: "JAWA TENGAH 13", className: "font-semibold" },
        { content: "Kabupaten Batang, Kabupaten Pekalongan, Kabupaten Pemalang, Kota Pekalongan", className: "text-left" },
        { content: "12" },
    ],

    // ===== TOTAL =====
    [
        { content: "Total", colSpan: 2, className: "bg-gray-200 font-bold text-center" },
        { content: "120", className: "bg-gray-200 font-bold" },
    ],
    ];
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-20 py-10 space-y-4">

      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#c02f31] leading-tight">
        Pemilihan DPRD Provinsi Jawa Tengah
      </h2>

      {/* CONTENT */}
      <p className="text-sm md:text-base text-gray-800 leading-relaxed text-justify">
        Dewan Perwakilan Rakyat Daerah Provinsi Jawa Tengah), disingkat DPRD Jawa Tengah atau DPRD Jateng, adalah lembaga perwakilan rakyat daerah yang berkedudukan sebagai unsur penyelenggara Pemerintahan Daerah di Provinsi Jawa Tengah, Indonesia. DPRD Jawa Tengah beranggotakan 120 orang yang dipilih melalui pemilihan umum setiap lima tahun sekali. Pimpinan DPRD Jawa Tengah terdiri dari 1 Ketua dan 4 Wakil Ketua yang berasal dari partai politik pemilik jumlah kursi dan suara terbanyak.
    </p>


        <h2 className="text-2xl md:text-3xl font-bold text-[#c02f31] leading-tight">
            Komposisi anggota
        </h2>

        {/* CONTENT */}
        <p className="text-sm md:text-base text-gray-800 leading-relaxed text-justify">
            Berikut ini adalah komposisi anggota DPRD Provinsi Jawa Tengah dalam empat periode terakhir.
        </p>
        <TableAdvanced headers={headersKomposisi} data={dataKomposisi} />


        <h2 className="text-2xl md:text-3xl font-bold text-[#c02f31] leading-tight">
            Daerah Pemilihan
        </h2>

        {/* CONTENT */}
        <p className="text-sm md:text-base text-gray-800 leading-relaxed text-justify">
            Pada Pileg 2019 dan Pileg 2024, pemilihan DPRD Provinsi Jawa Tengah dibagi kedalam 13 daerah pemilihan (dapil) sebagai berikut:
        </p>
        <TableAdvanced headers={headersDaerahPemilih} data={dataDaerahPemilih} />

        <h2 className="text-2xl md:text-3xl font-bold text-[#c02f31] leading-tight">
            Daftar Anggota DPRD Provinsi Jawa Tengah Daerah Pemilihan Jateng 5 Periode 2024-2029
        </h2>

        {/* CONTENT */}
        <p className="text-sm md:text-base text-gray-800 leading-relaxed text-justify">
            Berikut ini adalah daftar anggota DPRD Jawa Tengah Daerah Pemilihan Jawa Tengah 5 periode 2024–2029
        </p>
        <TableAdvanced headers={headersDaftarAnggota} data={dataDaftarAnggota} />
    
    

    </section>
  );
}