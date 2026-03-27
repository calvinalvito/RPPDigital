import DonutChart from "../donutChart";
import Table from "../tableComponent";
import DataPresidenLuarNegeri from "../../assets/Presiden-Luar-Negeri.png"
import Pilgup1 from "../../assets/FotoCalon/Pilgub1.png"
import Pilgup2 from "../../assets/FotoCalon/Pilgub2.png"
import ProvinsiPeta from "../../assets/PilgubPeta.png"

export default function PilgubSection() {
    type DataType = {
    img: string;
    provinsi: string;
    provinsiLabel: number;
    blora: string;
    bloraLabel:number;
    provinsiTotal: string;
    bloraTotal: string;
    color:string;
    };

    const data:DataType[] = [
    {
      img: Pilgup1,
      provinsi: "40.86%",
      provinsiLabel:40.86,
      provinsiTotal: "7.870.084",
      blora: "35,90%",
      bloraLabel:35.90,
      bloraTotal: "160.239",
      color:"#C02F31"
    },
    {
      img: Pilgup2,
      provinsi: "59.14%",
      provinsiLabel:59.14,
      provinsiTotal: "11.390.191",
      blora: "64,10%",
      bloraLabel: 64.10,
      bloraTotal: "286.057",
      color:"#2B72FB"
    },
  ];
  const tingkatProvinsi = [
    ["Total Suara", "19.260.275", "100%"],
    ["Suara Sah", "19.260.275", "92.65%"],
    ["Suara Tidak Sah", "1.528.502", "7.35%"],
    ["Jumlah Suara", "20.788.777", "100%"],
    ["Pemilih terdaftar/tingkat partisipasi", "28.460.303", "73.04%"],

  ];
  const tingkatblora = [
    ["Total Suara", "446.296", "100%"],
    ["Suara Sah", "446.296", "92.65%"],
    ["Suara Tidak Sah", "52.907", "7.35%"],
    ["Jumlah Suara", "499.203", "100%"],
    ["Pemilih terdaftar/tingkat partisipasi", "701.027", "71,21%"],
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-20 py-10 space-y-4">

      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#c02f31] leading-tight">
        Pemilihan umum Gubernur Jawa Tengah 2024
      </h2>

      {/* CONTENT */}
      <p className="text-sm md:text-base text-gray-800 leading-relaxed text-justify">
        Pemilihan Umum Gubernur Jawa Tengah 2024 (selanjutnya disebut Pilgub Jawa Tengah 2024) dilaksanakan pada 27 November 2024 untuk memilih Gubernur Jawa Tengah periode 2025–2030. Pemilihan Gubernur (Pilgub) Jawa Tengah tahun tersebut diselenggarakan setelah Pemilihan umum Presiden Indonesia 2024 (Pilpres) dan Pemilihan umum legislatif Indonesia 2024 (Pileg), bersamaan dengan seluruh Provinsi dan Kabupaten/Kota seluruh Indonesia.
      </p>

      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#c02f31]">
        Penghitungan dan Hasil
      </h2>

      {/* GRID */}
      <div className="flex flex-wrap justify-center gap-6">

        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            {/* FOTO */}
            <img
              src={item.img}
              className="w-full h-[250px] object-contain mt-8"
            />

            {/* CONTENT */}
            <div className="p-5 space-y-6 text-center justify-center flex gap-4">

              {/* NASIONAL */}
              <div>
                <p className="font-bold text-gray-700 mb-2">Tingkat Nasional</p>

                {/* chart placeholder */}
                <DonutChart value={item.provinsiLabel} color={item.color} />

                <p className="mt-2 font-bold">{item.provinsi}</p>
                <p className="text-sm text-gray-500">
                  ({item.provinsiTotal})
                </p>
              </div>

              {/* BLORA */}
              <div>
                <p className="font-bold text-gray-700 mb-2">Tingkat Kab. Blora</p>
                <DonutChart value={item.bloraLabel} color={item.color} />


                <p className="mt-2 font-bold">{item.blora}</p>
                <p className="text-sm text-gray-500">
                  ({item.bloraTotal})
                </p>
              </div>

            </div>
          </div>
        ))}

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
  
        {/* CARD 1 */}
        <div className="flex flex-col gap-2 w-full">
            <div className="mt-4 md:mt-6 bg-linear-to-r from-[#c02f31] to-[#5a1617] px-4 md:px-6 py-3 w-full md:max-w-[300px] mb-3">
            <p className="text-sm md:text-lg font-semibold text-white">
                Tingkat Nasional
            </p>
            </div>

            <Table
            showHeader={false}
            data={tingkatProvinsi}
            />
        </div>

        {/* CARD 2 */}
        <div className="flex flex-col gap-2 w-full">
            <div className="mt-4 md:mt-6 bg-linear-to-r from-[#c02f31] to-[#5a1617] px-4 md:px-6 py-3 w-full md:max-w-[300px] mb-3">
            <p className="text-sm md:text-lg font-semibold text-white">
                Tingkat Kabupaten Blora
            </p>
            </div>

            <Table
            showHeader={false}
            data={tingkatblora}
            />
        </div>

        </div>
        {/* TITLE */}
        <p className="text-2xl md:text-3xl font-bold text-[#c02f31] text-left">
            Peta persebaran suara
        </p>

        {/* GRID 2 GAMBAR (PROVINSI & KAB/KOTA) */}

        {/* Provinsi */}
        <div className="mt-6 md:mt-8 w-full">
            <img
            src={ProvinsiPeta}
            className="w-full h-auto object-contain"
            alt="Peta luar negeri"
            />
        </div>

    </section>
  );
}