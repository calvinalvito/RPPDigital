import { Link } from "react-router-dom";

export default function StatistikSection() {
  const pemiluMenu = [
    { title: "Presiden & Wakil Presiden (Pilpres)", path: "/pilpres" },
    { title: "DPR RI", path: "/dpr" },
    { title: "DPD RI", path: "/dpd" },
    { title: "DPRD Provinsi", path: "/dprd-provinsi" },
    { title: "DPRD Kab/Kota", path: "/dprd-kabkota" },
  ];

  const pilkadaMenu = [
    { title: "Pemilihan Bupati", path: "/bupati" },
    { title: "Pemilihan Gubernur & Wakil Gubernur", path: "/gubernur" },
  ];
  

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-20 py-10 space-y-12">

      {/* ===== PEMILU ===== */}
      <div className="space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-[#c02f31]">
          Statistik Pemilu Umum 2024
        </h2>

        <div className="flex flex-wrap gap-4">
          {pemiluMenu.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="px-6 py-4 bg-[#c02f31] text-white font-bold text-sm md:text-base rounded-lg hover:opacity-90 transition cursor-pointer"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      {/* ===== PILKADA ===== */}
      <div className="space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-[#c02f31]">
          Statistik Pemilihan Kepala Daerah
        </h2>

        <div className="flex flex-wrap gap-4">
          {pilkadaMenu.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="px-6 py-4 bg-[#c02f31] text-white font-bold text-sm md:text-base rounded-lg hover:opacity-90 transition cursor-pointer"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      <div>
        {/* TITLE */}
      <h2 className="text-2xl md:text-4xl font-bold text-[#c02f31] mb-5">
        Statistik Pemilih Dalam DPT Pemilu 2024
      </h2>

      {/* HEADER */}
      <div className="grid grid-cols-3 text-white font-bold text-center">
        <div className="bg-linear-to-r from-[#c02f31] to-[#5a1617] py-4">
          Dalam Negeri
        </div>
        <div className="bg-linear-to-r from-[#c02f31] to-[#5a1617] py-4">
          Luar Negeri
        </div>
        <div className="bg-linear-to-r from-[#c02f31] to-[#5a1617] py-4">
          Jumlah
        </div>
      </div>

      {/* ROW LAKI-LAKI */}
      <div className="grid grid-cols-3">

        {/* DALAM NEGERI */}
        <div className="flex items-center gap-4 p-4 bg-white shadow ">
          <img src="" className="w-16 h-16 object-contain" />
          <div>
            <p className="text-xl font-bold">101.467.243</p>
            <p className="text-sm text-gray-600">49,97%</p>
          </div>
        </div>

        {/* LUAR NEGERI */}
        <div className="flex items-center gap-4 p-4 bg-white shadow ">
          <img src="" className="w-16 h-16 object-contain" />
          <div>
            <p className="text-xl font-bold">751.260</p>
            <p className="text-sm text-gray-600">42,92%</p>
          </div>
        </div>

        {/* TOTAL */}
        <div className="flex items-center justify-center p-4 bg-[#079de0] text-white ">
          <div className="text-center">
            <p className="text-xl font-bold">102.218.503</p>
            <p className="text-sm">49,91%</p>
          </div>
        </div>

      </div>

      {/* ROW PEREMPUAN */}
      <div className="grid grid-cols-3">

        {/* DALAM NEGERI */}
        <div className="flex items-center gap-4 p-4 bg-white shadow">
          <img src="" className="w-16 h-16 object-contain" />
          <div>
            <p className="text-xl font-bold">101.589.505</p>
            <p className="text-sm text-gray-600">50,03%</p>
          </div>
        </div>

        {/* LUAR NEGERI */}
        <div className="flex items-center gap-4 p-4 bg-white shadow ">
          <img src="" className="w-16 h-16 object-contain" />
          <div>
            <p className="text-xl font-bold">999.214</p>
            <p className="text-sm text-gray-600">57,08%</p>
          </div>
        </div>

        {/* TOTAL */}
        <div className="flex items-center justify-center p-4 bg-[#db186d] text-white ">
          <div className="text-center">
            <p className="text-xl font-bold">102.588.719</p>
            <p className="text-sm">50,09%</p>
          </div>
        </div>

      </div>

      {/* TOTAL BESAR */}
      <div className="grid grid-cols-3">

        <div className="col-span-2 bg-linear-to-r from-[#c02f31] to-[#660300] text-white p-4 font-bold ">
          Total
        </div>

        <div className="bg-linear-to-r from-[#c02f31] to-[#660300] text-white p-4  text-center">
          <p className="text-xl font-bold">204.807.222</p>
          <p className="text-sm">100%</p>
        </div>

      </div>
      </div>

    </section>
  );
}