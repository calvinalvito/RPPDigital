import { Link } from "react-router-dom";
import Iconman from "../assets/man 2.png"
import Iconwoman from "../assets/woman 2.png"

export default function StatistikSection() {
  const pemiluMenu = [
    { title: "Presiden & Wakil Presiden (Pilpres) 2024", path: "/statistik/pilpres-2024" },
    { title: "DPR RI 2024", path: "/statistik/dprd-ri-2024" },
    { title: "DPD RI 2024", path: "/statistik/dpdri-prov-jateng-2024" },
    { title: "DPRD Provinsi 2024", path: "/statistik/dprd-prov-jateng-2024" },
    { title: "DPRD Kab/Kota 2024", path: "/statistik/dprdkab-2024" },
  ];

  const pilkadaMenu = [
    { title: "Pemilihan Bupati 2024", path: "/statistik/pilbup-2024" },
    { title: "Pemilihan Gubernur & Wakil Gubernur 2024", path: "/statistik/pilgub-2024" },
  ];

  const data = [
    {
      label: "Gen Z",
      age: "15-27 Tahun",
      color: "from-[#079de0] to-white",
      male: ["25.931.034", "51,20%"],
      female: ["24.714.635", "48,80%"],
      total: ["50.645.669", "24,94%"],
    },
    {
      label: "Gen Y (Milenial)",
      age: "28-43 Tahun",
      color: "from-[#3fdc7e] to-white",
      male: ["34.184.016", "50,34%"],
      female: ["33.725.804", "49,66%"],
      total: ["67.909.820", "33,44%"],
    },
    {
      label: "Gen X",
      age: "44-59 Tahun",
      color: "from-[#ffc133] to-white",
      male: ["27.206.650", "49,54%"],
      female: ["27.710.735", "50,46%"],
      total: ["54.917.385", "27,05%"],
    },
    {
      label: "Baby Boomer",
      age: "60-78 Tahun",
      color: "from-[#c483ad] to-white",
      male: ["12.889.158", "48,53%"],
      female: ["13.668.012", "51,47%"],
      total: ["26.557.170", "13,08%"],
    },
    {
      label: "Pre-Boomer",
      age: "79+ Tahun",
      color: "from-[#e0440e] to-white",
      male: ["1.256.385", "41,51%"],
      female: ["1.770.319", "58,49%"],
      total: ["3.026.704", "1,49%"],
    },
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
          <img src={Iconman} className="w-16 h-16 object-contain" />
          <div>
            <p className="text-xl font-bold">101.467.243</p>
            <p className="text-sm text-gray-600">49,97%</p>
          </div>
        </div>

        {/* LUAR NEGERI */}
        <div className="flex items-center gap-4 p-4 bg-white shadow ">
          <img src={Iconman} className="w-16 h-16 object-contain" />
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
          <img src={Iconwoman} className="w-16 h-16 object-contain" />
          <div>
            <p className="text-xl font-bold">101.589.505</p>
            <p className="text-sm text-gray-600">50,03%</p>
          </div>
        </div>

        {/* LUAR NEGERI */}
        <div className="flex items-center gap-4 p-4 bg-white shadow ">
          <img src={Iconwoman} className="w-16 h-16 object-contain" />
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


      <div>
        {/* HEADER */}
      <div className="grid grid-cols-6 text-white text-center font-bold">
        <div className="bg-[#c02f31] py-4">Usia</div>
        {data.map((item, i) => (
          <div key={i} className="bg-[#c02f31] py-4">
            <p>{item.label}</p>
            <p className="text-sm">{item.age}</p>
          </div>
        ))}
      </div>

      {/* LAKI-LAKI */}
      <div className="grid grid-cols-6 gap-3 items-center">
        <div className="font-bold text-lg">Laki-laki</div>

        {data.map((item, i) => (
          <div key={i} className={`p-4 bg-linear-to-r ${item.color}`}>
            <p className="font-bold">{item.male[0]}</p>
            <p className="text-sm">{item.male[1]}</p>
          </div>
        ))}
      </div>

      {/* PEREMPUAN */}
      <div className="grid grid-cols-6 gap-3 items-center">
        <div className="font-bold text-lg">Perempuan</div>

        {data.map((item, i) => (
          <div key={i} className={`p-4 bg-linear-to-r ${item.color}`}>
            <p className="font-bold">{item.female[0]}</p>
            <p className="text-sm">{item.female[1]}</p>
          </div>
        ))}
      </div>

      {/* TOTAL */}
      <div className="grid grid-cols-6 gap-3 items-center">
        <div className="font-bold text-lg">Jumlah</div>

        {data.map((item, i) => (
          <div key={i} className={`p-4 bg-linear-to-r ${item.color}`}>
            <p className="font-bold">{item.total[0]}</p>
            <p className="text-sm">{item.total[1]}</p>
          </div>
        ))}
      </div>
      </div>

    </section>
  );
}