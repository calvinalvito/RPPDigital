import DonutChart from "../donutChart";
import Table from "../tableComponent";
import DataPresidenProvinsi from "../../assets/Presiden-PerProvinsi.png"
import DataPresidenKabupaten from "../../assets/Presiden-PerKabupaten.png"
import DataPresidenLuarNegeri from "../../assets/Presiden-Luar-Negeri.png"
import Capres1 from "../../assets/FotoCalon/Capres1 1.png"
import Capres2 from "../../assets/FotoCalon/Capres2 1.png"
import Capres3 from "../../assets/FotoCalon/Capres3 1.png"

export default function PilpresSection() {
    type DataType = {
    img: string;
    nasional: string;
    nasionalLabel: number;
    blora: string;
    bloraLabel:number;
    nasionalTotal: string;
    bloraTotal: string;
    color:string;
    };

    const data:DataType[] = [
    {
      img: Capres1,
      nasional: "24,95%",
      nasionalLabel:24.95,
      nasionalTotal: "40.971.906",
      blora: "6,92%",
      bloraLabel:6.92,
      bloraTotal: "39.519",
      color:"#3FDC7E"
    },
    {
      img: Capres2,
      nasional: "58,59%",
      nasionalLabel:58.59,
      nasionalTotal: "96.214.691",
      blora: "65,53%",
      bloraLabel: 65.53,
      bloraTotal: "373.889",
      color:"#2B72FB"
    },
    {
      img: Capres3,
      nasional: "16,47%",
      nasionalLabel:16.47,
      nasionalTotal: "27.040.878",
      blora: "27,54%",
      bloraLabel:27.54,
      bloraTotal: "157.176",
      color:"#FA4B42"
    },
  ];
  const nasional = [
    ["Total Suara", "164.227.475", "100%"],
    ["Suara Sah", "164.227.475", "97,51%"],
    ["Suara Tidak Sah", "4.194.536", "2,49%"],
    ["Pemilih yang menggunakan hak pilih", "168.422.011", "81,49%"],
    ["Pemilih terdaftar (DPT dan DPK)", "206.675.366", "100%"],
    ["Jumlah penduduk (perkiraan 2023)", "279.118.866", ""],
  ];
  const blora = [
    ["Total Suara", "570.584", "100%"],
    ["Suara Sah", "570.584", "96,6 %"],
    ["Suara Tidak Sah", "19.782", "3,4 %"],
    ["Pemilih yang menggunakan hak pilih", "590.366", "84,3 %"],
    ["Pemilih terdaftar (DPT dan DPK)", "700.613", "100%"],
    ["Jumlah penduduk (perkiraan 2023)", "887.595", ""],
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-20 py-10 space-y-4">

      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#c02f31] leading-tight">
        Pemilihan Umum Presiden Indonesia 2024
      </h2>

      {/* CONTENT */}
      <p className="text-sm md:text-base text-gray-800 leading-relaxed text-justify">
        Pemilihan Umum Presiden Indonesia 2024, disebut juga Pilpres 2024, adalah pemilihan umum kelima
        di Indonesia yang bertujuan untuk memilih Presiden dan Wakil Presiden Republik Indonesia.
        Pemilihan dilakukan untuk menentukan pemangku jabatan presiden dan wakil presiden untuk masa
        bakti 2024–2029. Pemilihan ini berlangsung serentak di seluruh wilayah Indonesia pada Rabu,
        14 Februari 2024. Pemilihan ini menjadi kontestasi politik untuk memilih presiden baru
        menggantikan Joko Widodo yang purna tugas dari jabatannya setelah menjabat dua periode sebagai
        presiden dan tidak dapat mencalonkan diri lagi berdasarkan konstitusi.
      </p>

      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#c02f31]">
        Penghitungan dan Hasil
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">

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
                <DonutChart value={item.nasionalLabel} color={item.color} />

                <p className="mt-2 font-bold">{item.nasional}</p>
                <p className="text-sm text-gray-500">
                  ({item.nasionalTotal})
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
            data={nasional}
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
            data={blora}
            />
        </div>

        </div>
        {/* TITLE */}
        <p className="text-2xl md:text-3xl font-bold text-[#c02f31] text-left">
            Peta persebaran suara
        </p>

        {/* GRID 2 GAMBAR (PROVINSI & KAB/KOTA) */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

            <img
            src={DataPresidenProvinsi}
            className="w-full h-auto object-contain rounded-lg"
            alt="Peta provinsi"
            />

            <img
            src={DataPresidenKabupaten}
            className="w-full h-auto object-contain rounded-lg"
            alt="Peta kabupaten/kota"
            />

        </div>

        {/* IMAGE LUAR NEGERI */}
        <div className="mt-6 md:mt-8 w-full">
            <img
            src={DataPresidenLuarNegeri}
            className="w-full h-auto object-contain"
            alt="Peta luar negeri"
            />
        </div>

    </section>
  );
}