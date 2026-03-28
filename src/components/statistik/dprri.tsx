import TableAdvanced from "../tableAdvance";

export default function DPRRI() {
    const headers = [
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

    const data = [
    [
        { content: "JAWA TENGAH 1", className: "font-semibold" },
        { content: "Kendal, Semarang, Kota Salatiga, Kota Semarang", className: "text-left" },
        { content: "8" },
    ],
    [
        { content: "JAWA TENGAH 2", className: "font-semibold" },
        { content: "Kudus, Demak, Jepara", className: "text-left" },
        { content: "7" },
    ],
    [
        { content: "JAWA TENGAH 3", className: "font-semibold" },
        { content: "Blora, Grobogan, Pati, Rembang", className: "text-left" },
        { content: "9" },
    ],
    [
        { content: "JAWA TENGAH 4", className: "font-semibold" },
        { content: "Karanganyar, Sragen, Wonogiri", className: "text-left" },
        { content: "7" },
    ],
    [
        { content: "JAWA TENGAH 5", className: "font-semibold" },
        { content: "Boyolali, Klaten, Sukoharjo, Kota Surakarta", className: "text-left" },
        { content: "8" },
    ],
    [
        { content: "JAWA TENGAH 6", className: "font-semibold" },
        { content: "Magelang, Purworejo, Temanggung, Wonosobo, Kota Magelang", className: "text-left" },
        { content: "8" },
    ],
    [
        { content: "JAWA TENGAH 7", className: "font-semibold" },
        { content: "Banjarnegara, Kebumen, Purbalingga", className: "text-left" },
        { content: "7" },
    ],
    [
        { content: "JAWA TENGAH 8", className: "font-semibold" },
        { content: "Banyumas, Cilacap", className: "text-left" },
        { content: "8" },
    ],
    [
        { content: "JAWA TENGAH 9", className: "font-semibold" },
        { content: "Brebes, Tegal, Kota Tegal", className: "text-left" },
        { content: "8" },
    ],
    [
        { content: "JAWA TENGAH 10", className: "font-semibold" },
        { content: "Batang, Pekalongan, Pemalang, Kota Pekalongan", className: "text-left" },
        { content: "7" },
    ],

    // ===== TOTAL =====
    [
        { content: "Total", colSpan: 2, className: "bg-gray-200 font-bold text-center" },
        { content: "77", className: "bg-gray-200 font-bold" },
    ],
    ];
    const dataDaftarAnggota = [
    [
        { content: "Edy Wuryanto", className: "text-left font-semibold" },
        { content: "PKB" },
        { content: "Jateng 5" },
        { content: "71.237" },
        { content: "" },
    ],
    [
        { content: "Evita Nursanty", className: "text-left font-semibold" },
        { content: "PKB" },
        { content: "Jateng 5" },
        { content: "44.440" },
        { content: "" },
    ],
    [
        { content: "Haryanto", className: "text-left font-semibold" },
        { content: "Gerindra" },
        { content: "Jateng 5" },
        { content: "59.451" },
        { content: "" },
    ],
    [
        { content: "Eva Monalisa", className: "text-left font-semibold" },
        { content: "PDI-P" },
        { content: "Jateng 5" },
        { content: "84.387" },
        { content: "" },
    ],
    [
        { content: "Marwan Jafar", className: "text-left font-semibold" },
        { content: "PDI-P" },
        { content: "Jateng 5" },
        { content: "43.287" },
        { content: "" },
    ],
    [
        { content: "Firman Soebagyo", className: "text-left font-semibold" },
        { content: "Golkar" },
        { content: "Jateng 5" },
        { content: "28.907" },
        { content: "" },
    ],
    [
        { content: "Harmusa Oktaviani", className: "text-left font-semibold" },
        { content: "PKS" },
        { content: "Jateng 5" },
        { content: "29.585" },
        { content: "" },
    ],
    [
        { content: "Sri Wulan", className: "text-left font-semibold" },
        { content: "Demokrat" },
        { content: "Jateng 5" },
        { content: "56.019" },
        { content: "" },
    ],

    // ===== SUDEWO (ROWSPAN 2) =====
    [
        {
        content: "Sudewo",
        className: "text-left font-semibold",
        rowSpan: 2,
        },
        {
        content: "Demokrat",
        rowSpan: 2,
        },
        {
        content: "Jateng 5",
        rowSpan: 2,
        },
        {
        content: "56.019",
        rowSpan: 2,
        },
        {
        content:
            "Mengundurkan diri sebelum dilantik, karena telah menjadi kandidat pada Pemilihan umum Bupati Pati 2024.",
        className: "text-left align-top",
        rowSpan: 2,
        },
    ],

    [
        // baris kosong karena sudah di-merge
    ],

    // ===== PENGGANTI =====
    [
        { content: "Danang Wicaksana Sulistya", className: "text-left font-semibold" },
        { content: "Demokrat" },
        { content: "Jateng 5" },
        { content: "56.019" },
        { content: "" },
    ],
    ];
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-20 py-10 space-y-4">

      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#c02f31] leading-tight">
        Pemilihan DPR RI
      </h2>

      {/* CONTENT */}
      <p className="text-sm md:text-base text-gray-800 leading-relaxed text-justify">
        Dewan Perwakilan Rakyat Republik Indonesia (DPR RI) merupakan lembaga perwakilan rakyat yang menjadi salah satu dari dua kamar dalam sistem legislatif Indonesia, bersama dengan Dewan Perwakilan Daerah (DPD RI). Anggota DPR RI yang berasal dari Provinsi Jawa Tengah terbagi dalam 10 daerah pemilihan (dapil) dengan total 77 orang anggota.
        </p>
      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#c02f31] leading-tight">
        Daerah Pemilihan
      </h2>

      {/* CONTENT */}
      <p className="text-sm md:text-base text-gray-800 leading-relaxed text-justify">
        Pada Pemilu 2024, pemilihan DPR RI asal Provinsi Jawa Tengah dibagi kedalam 10 daerah pemilihan (dapil) sebagai berikut:
        </p>
        <TableAdvanced headers={headers} data={data} />

        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#c02f31] leading-tight">
            Daftar Anggota DPR RI Daerah Pemilihan Jateng 3 Periode 2024-2029
        </h2>

        {/* CONTENT */}
        <p className="text-sm md:text-base text-gray-800 leading-relaxed text-justify">
            Berikut ini adalah daftar anggota DPRD Jawa Tengah Daerah Pemilihan Jawa Tengah 5 periode 2024–2029
            </p>
            <TableAdvanced headers={headersDaftarAnggota} data={dataDaftarAnggota} />
      
      
        

    </section>
  );
}