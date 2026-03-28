import Table from "../tableComponent";
import TableAdvanced from "../tableAdvance";

export default function DPRDKABSection() {
    const PimpinanDewan = [
    ["Ketua", "H. M. Dasum, S.E., M.M.A.", "Partai Demokrasi Indonesia Perjuangan"],
    ["Wakil Ketua I", "H. Mustopa, S.Pd.I.", "Partai Kebangkitan Bangsa"],
    ["Wakil Ketua II", "Sakijan", "Partai NasDem"],
    ["Wakil Ketua III", "Siswanto, S.Pd., M.H.", "Partai Golongan Karya"],
    
  ];
  const headers = [
  [
    {
      content: "Suara menurut wilayah",
      className: "bg-[#c02f31] text-white",
    },
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
    const data = [
  [
    { content: "PKB", className: "bg-gray-100 text-left font-semibold" },
    { content: "5" },
    { content: "5" },
    { content: <span className="text-green-500 font-semibold">▲ 8</span> },
    { content: <span className="text-green-500 font-semibold">▲ 11</span> },
  ],
  [
    { content: "Gerindra", className: "bg-gray-100 text-left font-semibold" },
    { content: <span className="text-green-500">(Baru) 1</span> },
    { content: <span className="text-green-500">▲ 4</span> },
    { content: <span className="text-red-500">▼ 2</span> },
    { content: <span className="text-green-500">▲ 5</span> },
  ],
  [
    { content: "PDI-P", className: "bg-gray-100 text-left font-semibold" },
    { content: "8" },
    { content: <span className="text-red-500">▼ 6</span> },
    { content: <span className="text-green-500">▲ 9</span> },
    { content: <span className="text-red-500">▼ 8</span> },
  ],
  [
    { content: "Golkar", className: "bg-gray-100 text-left font-semibold" },
    { content: "9" },
    { content: <span className="text-red-500">▼ 8</span> },
    { content: <span className="text-red-500">▼ 5</span> },
    { content: "5" },
  ],
  [
    { content: "NasDem", className: "bg-gray-100 text-left font-semibold" },
    { content: "-" },
    { content: <span className="text-green-500">(Baru) 3</span> },
    { content: <span className="text-green-500">▲ 7</span> },
    { content: <span className="text-red-500">▼ 5</span> },
  ],
  [
    { content: "PKS", className: "bg-gray-100 text-left font-semibold" },
    { content: "3" },
    { content: <span className="text-green-500">▲ 5</span> },
    { content: <span className="text-red-500">▼ 3</span> },
    { content: "3" },
  ],
  [
    { content: "Hanura", className: "bg-gray-100 text-left font-semibold" },
    { content: <span className="text-green-500">(Baru) 3</span> },
    { content: <span className="text-red-500">▼ 1</span> },
    { content: <span className="text-green-500">▲ 2</span> },
    { content: <span className="text-red-500">▼ 1</span> },
  ],
  [
    { content: "PAN", className: "bg-gray-100 text-left font-semibold" },
    { content: "1" },
    { content: <span className="text-red-500">▼ 0</span> },
    { content: "0" },
    { content: "0" },
  ],
  [
    { content: "Demokrat", className: "bg-gray-100 text-left font-semibold" },
    { content: "6" },
    { content: <span className="text-green-500">▲ 8</span> },
    { content: <span className="text-red-500">▼ 3</span> },
    { content: "3" },
  ],
  [
    { content: "Perindo", className: "bg-gray-100 text-left font-semibold" },
    { content: "-" },
    { content: "-" },
    { content: <span className="text-green-500">(Baru) 1</span> },
    { content: "1" },
  ],
  [
    { content: "PPP", className: "bg-gray-100 text-left font-semibold" },
    { content: "4" },
    { content: <span className="text-green-500">▲ 5</span> },
    { content: "5" },
    { content: <span className="text-red-500">▼ 3</span> },
  ],
  [
    { content: "PKPI", className: "bg-gray-100 text-left font-semibold" },
    { content: "1" },
    { content: <span className="text-red-500">▼ 0</span> },
    { content: "0" },
    { content: "-" },
  ],
  [
    { content: "PPDI", className: "bg-gray-100 text-left font-semibold" },
    { content: "1" },
    { content: "-" },
    { content: "-" },
    { content: "-" },
  ],
  [
    { content: "PPIB", className: "bg-gray-100 text-left font-semibold" },
    { content: "2" },
    { content: "-" },
    { content: "-" },
    { content: "-" },
  ],
  [
    { content: "PDP", className: "bg-gray-100 text-left font-semibold" },
    { content: <span className="text-green-500">(Baru) 1</span> },
    { content: "-" },
    { content: "-" },
    { content: "-" },
  ],
  [
    { content: "Jumlah Anggota", className: "bg-gray-200 font-bold text-left" },
    { content: "45" },
    { content: "45" },
    { content: "45" },
    { content: "45" },
  ],
  [
    { content: "Jumlah Partai", className: "bg-gray-200 font-bold text-left" },
    { content: "13" },
    { content: <span className="text-red-500">▼ 9</span> },
    { content: <span className="text-green-500">▲ 10</span> },
    { content: "10" },
  ],
];

    const headersDaftarAnggota = [
    [
        {
        content: "Suara menurut wilayah",
        className: "bg-[#c02f31] text-white",
        },
        {
        content: "Jumlah Kursi dalam Periode",
        colSpan: 4,
        className: "bg-[#c02f31] text-white",
        },
    ],
    [
        { content: "", className: "bg-[#c02f31]" },
        { content: "Partai Politik", className: "bg-[#c02f31] text-white" },
        { content: "Daerah Pemilihan", className: "bg-[#c02f31] text-white" },
        { content: "Surat Sah", className: "bg-[#c02f31] text-white" },
        { content: "Keterangan", className: "bg-[#c02f31] text-white" },
    ],
    ];
    const dataDaftarAnggota = [
    [
        { content: "Mohammad Khilmi Yuliyanjaya, S.T.", className: "bg-gray-100 text-left font-semibold" },
        { content: "PKB", className: "bg-green-400 font-bold" },
        { content: "Blora 1" },
        { content: "10.759" },
        { content: "" },
    ],
    [
        { content: "H. Mochamad Muchklisin, S.Sos.", className: "bg-gray-100 text-left font-semibold" },
        { content: "PKB", className: "bg-green-400 font-bold" },
        { content: "Blora 1" },
        { content: "9.016" },
        { content: "" },
    ],
    [
        { content: "Ahmad Labib Hilmy", className: "bg-gray-100 text-left font-semibold" },
        { content: "PKB", className: "bg-green-400 font-bold" },
        { content: "Blora 1" },
        { content: "8.314" },
        { content: "" },
    ],
    [
        { content: "H. Ketut Kunarwo", className: "bg-gray-100 text-left font-semibold" },
        { content: "PKB", className: "bg-green-400 font-bold" },
        { content: "Blora 2" },
        { content: "6.726" },
        { content: "" },
    ],
    [
        { content: "Muhammad Husaini, S.H.I., M.E.I.", className: "bg-gray-100 text-left font-semibold" },
        { content: "PKB", className: "bg-green-400 font-bold" },
        { content: "Blora 2" },
        { content: "6.480" },
        { content: "" },
    ],
    [
        { content: "Ratna Pancarini", className: "bg-gray-100 text-left font-semibold" },
        { content: "PKB", className: "bg-green-400 font-bold" },
        { content: "Blora 3" },
        { content: "5.415" },
        { content: "" },
    ],
    [
        { content: "Mustopa, S.Pd.I.", className: "bg-gray-100 text-left font-semibold" },
        { content: "PKB", className: "bg-green-400 font-bold" },
        { content: "Blora 4" },
        { content: "11.909" },
        { content: "" },
    ],
    [
        { content: "Munawar, S.H.", className: "bg-gray-100 text-left font-semibold" },
        { content: "PKB", className: "bg-green-400 font-bold" },
        { content: "Blora 4" },
        { content: "8.055" },
        { content: "" },
    ],
    [
        { content: "Jamhuri", className: "bg-gray-100 text-left font-semibold" },
        { content: "PKB", className: "bg-green-400 font-bold" },
        { content: "Blora 4" },
        { content: "4.271" },
        { content: "" },
    ],
    [
        { content: "Ahmad Fahim Mulabby", className: "bg-gray-100 text-left font-semibold" },
        { content: "PKB", className: "bg-green-400 font-bold" },
        { content: "Blora 5" },
        { content: "8.116" },
        { content: "" },
    ],
    [
        { content: "M. Mukhlisin, S.E.", className: "bg-gray-100 text-left font-semibold" },
        { content: "PKB", className: "bg-green-400 font-bold" },
        { content: "Blora 5" },
        { content: "6.645" },
        { content: "" },
    ],

    // ===== GERINDRA =====
    [
        { content: "Adiria", className: "bg-gray-100 text-left font-semibold" },
        { content: "Gerindra", className: "bg-yellow-300 font-bold" },
        { content: "Blora 1" },
        { content: "8.222" },
        { content: "" },
    ],
    [
        { content: "Jayadi, S.H.", className: "bg-gray-100 text-left font-semibold" },
        { content: "Gerindra", className: "bg-yellow-300 font-bold" },
        { content: "Blora 1" },
        { content: "7.437" },
        { content: "" },
    ],
    [
        { content: "Galuh Saraswati", className: "bg-gray-100 text-left font-semibold" },
        { content: "Gerindra", className: "bg-yellow-300 font-bold" },
        { content: "Blora 2" },
        { content: "2.241" },
        { content: "" },
    ],
    [
        { content: "Ika Dewi Susanti", className: "bg-gray-100 text-left font-semibold" },
        { content: "Gerindra", className: "bg-yellow-300 font-bold" },
        { content: "Blora 3" },
        { content: "5.419" },
        { content: "" },
    ],
    [
        { content: "Lanova Chandra Tirtaka", className: "bg-gray-100 text-left font-semibold" },
        { content: "Gerindra", className: "bg-yellow-300 font-bold" },
        { content: "Blora 5" },
        { content: "6.476" },
        { content: "" },
    ],

    // ===== PDI-P =====
    [
        { content: "Anif Mahmudi, S.Kep., M.Si.", className: "bg-gray-100 text-left font-semibold" },
        { content: "PDI-P", className: "bg-red-400 text-white font-bold" },
        { content: "Blora 1" },
        { content: "5.902" },
        { content: "" },
    ],
    [
        { content: "Andita Nugrahanto", className: "bg-gray-100 text-left font-semibold" },
        { content: "PDI-P", className: "bg-red-400 text-white font-bold" },
        { content: "Blora 1" },
        { content: "4.801" },
        { content: "" },
    ],
    [
        { content: "H. M. Dasum, S.E., M.M.A.", className: "bg-gray-100 text-left font-semibold" },
        { content: "PDI-P", className: "bg-red-400 text-white font-bold" },
        { content: "Blora 2" },
        { content: "5.262" },
        { content: "" },
    ],
    [
        { content: "Mujoko", className: "bg-gray-100 text-left font-semibold" },
        { content: "PDI-P", className: "bg-red-400 text-white font-bold" },
        { content: "Blora 3" },
        { content: "5.422" },
        { content: "" },
    ],
    [
        { content: "Bibi Hastuti, S.E.", className: "bg-gray-100 text-left font-semibold" },
        { content: "PDI-P", className: "bg-red-400 text-white font-bold" },
        { content: "Blora 3" },
        { content: "4.196" },
        { content: "" },
    ],
    [
        { content: "Drs. Subroto", className: "bg-gray-100 text-left font-semibold" },
        { content: "PDI-P", className: "bg-red-400 text-white font-bold" },
        { content: "Blora 4" },
        { content: "6.924" },
        { content: "" },
    ],
    [
    { content: "Eko Adi Nugroho", className: "bg-gray-100 text-left font-semibold" },
    { content: "PDI-P", className: "bg-red-400 text-white font-bold" },
    { content: "Blora 4" },
    { content: "5.693" },
    { content: "" },
    ],
    [
        { content: "Lina Hartini, S.Sos.", className: "bg-gray-100 text-left font-semibold" },
        { content: "PDI-P", className: "bg-red-400 text-white font-bold" },
        { content: "Blora 5" },
        { content: "2.861" },
        { content: "" },
    ],

    // ===== GOLKAR =====
    [
        { content: "H. Supardi", className: "bg-gray-100 text-left font-semibold" },
        { content: "Golkar", className: "bg-yellow-300 font-bold" },
        { content: "Blora 1" },
        { content: "7.213" },
        { content: "" },
    ],
    [
        { content: "Ir. Siswanto", className: "bg-gray-100 text-left font-semibold" },
        { content: "Golkar", className: "bg-yellow-300 font-bold" },
        { content: "Blora 2" },
        { content: "4.414" },
        { content: "" },
    ],
    [
        { content: "Dian Bagus Styawan", className: "bg-gray-100 text-left font-semibold" },
        { content: "Golkar", className: "bg-yellow-300 font-bold" },
        { content: "Blora 3" },
        { content: "2.012" },
        { content: "" },
    ],
    [
        { content: "Galuh Widiasih Mustikasari, S.P.", className: "bg-gray-100 text-left font-semibold" },
        { content: "Golkar", className: "bg-yellow-300 font-bold" },
        { content: "Blora 4" },
        { content: "4.576" },
        { content: "" },
    ],
    [
        { content: "Siswanto, S.Pd., M.H.", className: "bg-gray-100 text-left font-semibold" },
        { content: "Golkar", className: "bg-yellow-300 font-bold" },
        { content: "Blora 5" },
        { content: "6.046" },
        { content: "" },
    ],

    // ===== NASDEM =====
    [
        { content: "Ir. Sugeng Hariyanto", className: "bg-gray-100 text-left font-semibold" },
        { content: "Nasdem", className: "bg-blue-500 text-white font-bold" },
        { content: "Blora 1" },
        { content: "5.280" },
        { content: "" },
    ],
    [
        { content: "Irma Isdiana, S.E.", className: "bg-gray-100 text-left font-semibold" },
        { content: "Nasdem", className: "bg-blue-500 text-white font-bold" },
        { content: "Blora 2" },
        { content: "4.007" },
        { content: "" },
    ],
    [
        { content: "Yuyus Waluyo", className: "bg-gray-100 text-left font-semibold" },
        { content: "Nasdem", className: "bg-blue-500 text-white font-bold" },
        { content: "Blora 3" },
        { content: "8.890" },
        { content: "" },
    ],
    [
        { content: "Sakijan, S.H.", className: "bg-gray-100 text-left font-semibold" },
        { content: "Nasdem", className: "bg-blue-500 text-white font-bold" },
        { content: "Blora 4" },
        { content: "8.326" },
        { content: "" },
    ],
    [
        { content: "Aditya Candra Yogaswara", className: "bg-gray-100 text-left font-semibold" },
        { content: "Nasdem", className: "bg-blue-500 text-white font-bold" },
        { content: "Blora 5" },
        { content: "6.676" },
        { content: "" },
    ],

    // ===== PKS =====
    [
        { content: "Santoso Budi Susetyo, S.Sos.", className: "bg-gray-100 text-left font-semibold" },
        { content: "PKS", className: "bg-orange-500 text-white font-bold" },
        { content: "Blora 1" },
        { content: "5.084" },
        { content: "" },
    ],
    [
        { content: "Arifin Muhdiarto, S.T.", className: "bg-gray-100 text-left font-semibold" },
        { content: "PKS", className: "bg-orange-500 text-white font-bold" },
        { content: "Blora 2" },
        { content: "5.703" },
        { content: "" },
    ],
    [
        { content: "Munatin", className: "bg-gray-100 text-left font-semibold" },
        { content: "PKS", className: "bg-orange-500 text-white font-bold" },
        { content: "Blora 4" },
        { content: "2.665" },
        { content: "" },
    ],

    // ===== HANURA =====
    [
        { content: "H. M. Warsi, S.Pd., S.H., M.M.", className: "bg-gray-100 text-left font-semibold" },
        { content: "Hanura", className: "bg-yellow-400 font-bold" },
        { content: "Blora 3" },
        { content: "5.196" },
        { content: "" },
    ],

    // ===== DEMOKRAT =====
    [
        { content: "Vella Mushadrika Dwi Savera", className: "bg-gray-100 text-left font-semibold" },
        { content: "Demokrat", className: "bg-blue-800 text-white font-bold" },
        { content: "Blora 1" },
        { content: "4.052" },
        { content: "" },
    ],
    [
        { content: "Irwan Kriswiyantoro, A.Md., S.T.", className: "bg-gray-100 text-left font-semibold" },
        { content: "Demokrat", className: "bg-blue-800 text-white font-bold" },
        { content: "Blora 3" },
        { content: "9.951" },
        { content: "" },
    ],
    [
        { content: "Supriedi, S.Pd.I.", className: "bg-gray-100 text-left font-semibold" },
        { content: "Demokrat", className: "bg-blue-800 text-white font-bold" },
        { content: "Blora 5" },
        { content: "7.535" },
        { content: "" },
    ],

    // ===== PERINDO =====
    [
        { content: "H. Suyono", className: "bg-gray-100 text-left font-semibold" },
        { content: "Perindo", className: "bg-gray-500 text-white font-bold" },
        { content: "Blora 5" },
        { content: "6.817" },
        { content: "" },
    ],

    // ===== PPP =====
    [
        { content: "Achli Nugroho Widi Utomo", className: "bg-gray-100 text-left font-semibold" },
        { content: "PPP", className: "bg-green-500 text-white font-bold" },
        { content: "Blora 2" },
        { content: "6.098" },
        { content: "" },
    ],
    [
        { content: "Saeful Arifin", className: "bg-gray-100 text-left font-semibold" },
        { content: "PPP", className: "bg-green-500 text-white font-bold" },
        { content: "Blora 3" },
        { content: "3.783" },
        { content: "" },
    ],
    [
        { content: "Jariman, S.H.", className: "bg-gray-100 text-left font-semibold" },
        { content: "PPP", className: "bg-green-500 text-white font-bold" },
        { content: "Blora 5" },
        { content: "5.352" },
        { content: "" },
    ],
    ];
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-20 py-10 space-y-4">

      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#c02f31] leading-tight">
        Pemilihan DPRD Kabupaten Blora
      </h2>

      {/* CONTENT */}
      <p className="text-sm md:text-base text-gray-800 leading-relaxed text-justify">
        Dewan Perwakilan Rakyat Daerah Kabupaten Blora (disingkat DPRD Kabupaten Blora) merupakan mitra kerja pemerintah daerah Kabupaten Blora, Jawa Tengah. DPRD Kabupaten Blora memiliki 45 orang anggota yang tersebar di 10 partai politik, dengan perolehan suara mayoritas diraih oleh Partai Demokrasi Indonesia Perjuangan. DPRD Kabupaten Blora merupakan lembaga perwakilan rakyat yang dipilih langsung oleh rakyat Kabupaten Blora pada pemilihan umum legislatif setiap lima tahun sekali.
        </p>
      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#c02f31]">
        Hasil Pemilihan Umum
      </h2>
      <p className="text-sm md:text-base text-gray-800 leading-relaxed text-justify">
        Perolehan suara sah partai politik peserta Pemilu 2024 dari setiap daerah pemilihan anggota Dewan Perwakilan Rakyat Daerah Kabupaten Blora adalah sebagai berikut.
      </p>
      <h2 className="text-2xl md:text-3xl font-bold text-[#c02f31]">
        Pimpinan Dewan
      </h2>
      <p className="text-sm md:text-base text-gray-800 leading-relaxed text-justify">
        Pimpinan DPRD Kabupaten Blora terdiri atas satu orang ketua dan tiga orang wakil ketua yang berasal dari partai politik yang memiliki suara terbanyak di dewan.
      </p>
      <Table
        headers={["Jabatan","Nama","Partai Politik"]}
        data={PimpinanDewan}
        />
      <h2 className="text-2xl md:text-3xl font-bold text-[#c02f31]">
        Komposisi Anggota
      </h2>
      <p className="text-sm md:text-base text-gray-800 leading-relaxed text-justify">
        Berikut ini adalah komposisi anggota DPRD Kabupaten Blora dalam empat periode terakhir.
      </p>
      <TableAdvanced headers={headers} data={data} />
      <h2 className="text-2xl md:text-3xl font-bold text-[#c02f31]">
        Daftar Anggota DPRD Kabupaten Blora periode 2024–2029
      </h2>
      <p className="text-sm md:text-base text-gray-800 leading-relaxed text-justify">
        Berikut adalah daftar anggota DPRD Kabupaten Blora periode 2024–2029.
      </p>
      <TableAdvanced headers={headersDaftarAnggota} data={dataDaftarAnggota} />

      
        

    </section>
  );
}