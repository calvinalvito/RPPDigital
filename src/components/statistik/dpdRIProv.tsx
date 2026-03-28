import TableAdvanced from "../tableAdvance";
import TajYasin from "../../assets/FotoDPDRIProv/KHTajYasin.png"
import Muhdi from "../../assets/FotoDPDRIProv/DrHMuhdiSHM.Hum..png"
import Casytha from "../../assets/FotoDPDRIProv/CasythaAKathmanduSEM.Fin.png"
import AbdulKholik from "../../assets/FotoDPDRIProv/DrHAbdulKholikSHMSi.png"
import DentyEka from "../../assets/FotoDPDRIProv/DentyEkaWidiPratiwiS.EMH.png"

export default function DPDRIPROVSection() {
    const headers = [
    [
        { content: "No Urut DCT", className: "bg-[#c02f31] text-white" },
        { content: "Nama Calon", className: "bg-[#c02f31] text-white" },
        { content: "Jumlah Perolehan Suara", className: "bg-[#c02f31] text-white" },
        { content: "Perolehan Suara di Kabupaten Blora", className: "bg-[#c02f31] text-white" },
        { content: "Keterangan", className: "bg-[#c02f31] text-white" },
    ],
    ];

    const headersPeringkat = [
    [
        { content: "Peringkat Suara Sah", className: "bg-[#c02f31] text-white" },
        { content: "Nama Calon", className: "bg-[#c02f31] text-white" },
        { content: "Nomor Urut DCT", className: "bg-[#c02f31] text-white" },
        { content: "Perolehan Suara", className: "bg-[#c02f31] text-white" },
    ],
    ];
    const headersDaftarTetap = [
    [
        { content: "Nomor Anggota", className: "bg-[#c02f31] text-white" },
        { content: "Potret", className: "bg-[#c02f31] text-white" },
        { content: "Nama", className: "bg-[#c02f31] text-white" },
        { content: "Perolehan Suara", className: "bg-[#c02f31] text-white" },
        { content: "Catatan", className: "bg-[#c02f31] text-white" },
    ],
];
    const data = [
  [
    { content: "1" },
    { content: "Dr. H. ABDUL KHOLIK, S.H., M.Si.", className: "text-left font-semibold" },
    { content: "2.160.469" },
    { content: "40.025" },
    { content: "Calon Terpilih Ke-3" },
  ],
  [
    { content: "2" },
    { content: "AGUS MUJAYANTO", className: "text-left font-semibold" },
    { content: "941.268" },
    { content: "30.259" },
    { content: "Calon Pengganti Antarwaktu ke-4" },
  ],
  [
    { content: "3" },
    { content: "AHMAD BALIGH MU'AIDI, S.Pd.I.", className: "text-left font-semibold" },
    { content: "784.666" },
    { content: "19.398" },
    { content: "" },
  ],
  [
    { content: "4" },
    { content: "Ir. H. BAMBANG SUSTRISNO, M.M", className: "text-left font-semibold" },
    { content: "1.520.105" },
    { content: "33.778" },
    { content: "Calon Pengganti Antarwaktu ke-2" },
  ],
  [
    { content: "5" },
    { content: "CASYTHA A. KATHMANDU, S.E.", className: "text-left font-semibold" },
    { content: "3.567.338" },
    { content: "95.604" },
    { content: "Calon Terpilih Ke-2" },
  ],
  [
    { content: "6" },
    { content: "DENTY EKA WIDI PRATIWI, S.E., M.H.", className: "text-left font-semibold" },
    { content: "1.929.267" },
    { content: "39.232" },
    { content: "Calon Terpilih Ke-4" },
  ],
  [
    { content: "7" },
    { content: "Ir. JOKO DALMADYO", className: "text-left font-semibold" },
    { content: "575.779" },
    { content: "12.475" },
    { content: "" },
  ],
  [
    { content: "8" },
    { content: "KODIRIN, S.H., M.M.", className: "text-left font-semibold" },
    { content: "447.780" },
    { content: "9.148" },
    { content: "" },
  ],
  [
    { content: "9" },
    { content: "KODIRIN, S.H., M.M.", className: "text-left font-semibold" },
    { content: "1.083.182" },
    { content: "16.020" },
    { content: "Calon Pengganti Antarwaktu ke-3" },
  ],
  [
    { content: "10" },
    { content: "Dr. H. MUHDI, S.H., M.Hum.", className: "text-left font-semibold" },
    { content: "1.083.182" },
    { content: "37.738" },
    { content: "Calon Pengganti Antarwaktu ke-1" },
  ],
  [
    { content: "11" },
    { content: "TAJ YASIN", className: "text-left font-semibold" },
    { content: "3.821.699" },
    { content: "102.887" },
    { content: "Calon Terpilih Ke-1" },
  ],

  // ===== FOOTER =====
  [
    { content: "Jumlah Suara Sah", colSpan: 2, className: "font-bold text-left bg-gray-200" },
    { content: "18.460.060", className: "font-bold" },
    { content: "436.564", className: "font-bold" },
    { content: "", className: "bg-gray-600" },
  ],
  [
    { content: "Jumlah Kursi Terbagi", colSpan: 4, className: "font-bold text-left bg-gray-200" },
    { content: "4", className: "font-bold" },
  ],
  [
    { content: "Jumlah Calon Pengganti Antar Waktu", colSpan: 4, className: "font-bold text-left bg-gray-200" },
    { content: "4", className: "font-bold" },
  ],
];
    const dataDaftarCalonTerpilih = [
    [
        { content: "I" },
        { content: "TAJ YASIN", className: "text-left font-semibold" },
        { content: "11." },
        { content: "3.821.699" },
    ],
    [
        { content: "II" },
        { content: "CASYTHA A. KATHMANDU, S.E.", className: "text-left font-semibold" },
        { content: "5." },
        { content: "3.567.338" },
    ],
    [
        { content: "III" },
        { content: "Dr. H. ABDUL KHOLIK, S.H., M.Si.", className: "text-left font-semibold" },
        { content: "1." },
        { content: "2.160.469" },
    ],
    [
        { content: "IV" },
        { content: "DENTY EKA WIDI PRATIWI, S.E., M.H", className: "text-left font-semibold" },
        { content: "6." },
        { content: "1.929.267" },
    ],
    ];
    const dataDaftarCalonPenggantiAntarwaktu = [
    [
        { content: "V" },
        { content: "Dr. H. MUHDI, S.H., M.Hum", className: "text-left font-semibold" },
        { content: "10." },
        { content: "1.628.507" },
    ],
    [
        { content: "VI" },
        { content: "Ir. H. BAMBANG SUSTRISNO, M.M.", className: "text-left font-semibold" },
        { content: "4." },
        { content: "1.520.105" },
    ],
    [
        { content: "VII" },
        { content: "LAMAATUS SHOBH DIMYATI ROIS", className: "text-left font-semibold" },
        { content: "9." },
        { content: "1.083.182" },
    ],
    [
        { content: "VIII" },
        { content: "AGUS MUJAYANTO", className: "text-left font-semibold" },
        { content: "2." },
        { content: "941.268" },
    ],
    ];
    const dataDaftarTetap = [
    [
        {
        content: "B–49",
        className: "font-semibold",
        },
        {
        content: (
            <img src={TajYasin} className="w-20 h-24 object-cover mx-auto rounded" />
        ),
        },
        {
        content: (
            <div className="text-center font-semibold">
            K.H.<br />Taj Yasin
            </div>
        ),
        },
        { content: "3.821.699" },
        {
        content:
            "Taj Yasin mengundurkan diri sebelum dilantik menjadi anggota DPD setelah menjadi kandidat pada Pemilihan umum Gubernur Jawa Tengah 2024.",
        className: "text-left",
        },
    ],

    [
        { content: "", colSpan: 1 },
        {
        content: (
            <img src={Muhdi} className="w-20 h-24 object-cover mx-auto rounded" />
        ),
        },
        {
        content: (
            <div className="text-center font-semibold">
            Dr. H. Muhdi<br />S.H., M.Hum.
            </div>
        ),
        },
        { content: "1.628.507" },
        {
        content:
            "Muhdi menggantikan Taj Yasin yang mengundurkan diri",
        className: "text-left",
        },
    ],

    [
        { content: "B–50", className: "font-semibold" },
        {
        content: (
            <img src={Casytha} className="w-20 h-24 object-cover mx-auto rounded" />
        ),
        },
        {
        content: (
            <div className="text-center font-semibold">
            Casytha A. Kathmandu<br />S.E., M.Fin.
            </div>
        ),
        },
        { content: "3.567.338" },
        { content: "" },
    ],

    [
        { content: "B–51", className: "font-semibold" },
        {
        content: (
            <img src={AbdulKholik} className="w-20 h-24 object-cover mx-auto rounded" />
        ),
        },
        {
        content: (
            <div className="text-center font-semibold">
            Dr. H. Abdul Kholik<br />S.H., M.Si.
            </div>
        ),
        },
        { content: "2.160.469" },
        { content: "" },
    ],

    [
        { content: "B–52", className: "font-semibold" },
        {
        content: (
            <img src={DentyEka} className="w-20 h-24 object-cover mx-auto rounded" />
        ),
        },
        {
        content: (
            <div className="text-center font-semibold">
            Denty Eka Widi Pratiwi<br />S.E., M.H.
            </div>
        ),
        },
        { content: "1.929.267" },
        { content: "" },
    ],
    ];
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-20 py-10 space-y-4">

      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#c02f31] leading-tight">
        Pemilihan DPD RI Provinsi Jawa Tengah
      </h2>

      {/* CONTENT */}
      <p className="text-sm md:text-base text-gray-800 leading-relaxed text-justify">
        Dewan Perwakilan Daerah Republik Indonesia (DPD RI) merupakan lembaga perwakilan yang berfungsi menyuarakan aspirasi masyarakat di tingkat provinsi. Dalam Pemilu serentak yang dilaksanakan pada 14 Februari 2024, setiap provinsi memiliki empat kursi DPD yang dipilih langsung oleh rakyat melalui surat suara berwarna abu-abu. Berbeda dengan anggota DPR yang berasal dari partai politik, calon anggota DPD bersifat perseorangan atau nonpartai. Setelah proses penghitungan suara selesai, empat calon dengan perolehan suara terbanyak di setiap provinsi ditetapkan oleh Komisi Pemilihan Umum (KPU) sebagai calon terpilih untuk menjadi anggota DPD RI.
        </p>
      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#c02f31]">
        Rekaptulasi Hasil Penghitungan Perolehan Suara Calon Anggota DPD RI
        Provinsi Jawa Tengah
      </h2>
      <TableAdvanced headers={headers} data={data} />
      <h2 className="text-2xl md:text-3xl font-bold text-[#c02f31]">
        Daftar Calon Terpilih Anggota DPD RI Provinsi Jawa Tengah
      </h2>
      <TableAdvanced headers={headersPeringkat} data={dataDaftarCalonTerpilih} />
      <h2 className="text-2xl md:text-3xl font-bold text-[#c02f31]">
        Daftar Calon Pengganti Antarwaktu Anggota DPD RI Provinsi Jawa Tengah
      </h2>
      <p className="text-sm md:text-base text-gray-800 leading-relaxed text-justify">
        Jika salah satu anggota DPD Jawa Tengah berhenti di tengah masa jabatan (meninggal dunia, mengundurkan diri, atau diberhentikan), maka calon dengan perolehan suara terbanyak berikutnya dalam hasil Pemilu 2024 akan ditetapkan sebagai calon PAW oleh KPU.
        </p>
      <TableAdvanced headers={headersPeringkat} data={dataDaftarCalonPenggantiAntarwaktu} />
      <h2 className="text-2xl md:text-3xl font-bold text-[#c02f31]">
        Daftar Tetap Keanggotaan DPD Jawa Tengah (Periode 2024–2029)
      </h2>
      <TableAdvanced headers={headersDaftarTetap} data={dataDaftarTetap} />
      
        

    </section>
  );
}