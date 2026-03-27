import DonutChart from "../donutChart";
import Table from "../tableComponent";
import CalonPilbup1 from "../../assets/FotoCalon/CaBup1 1.png"
import CalonPilbup2 from "../../assets/FotoCalon/CaBup2 1.png"
import TableAdvanced from "../tableAdvance";

export default function PilbupSection() {
    type DataType = {
    img: string;
    blora: string;
    bloralLabel: number;
    bloraTotal:string;
    color:string;
    };

    const data:DataType[] = [
    {
      img: CalonPilbup1,
      blora: "83.75%",
      bloralLabel:83.75,
      bloraTotal: "395.827",
      color:"#3FDC7E"
    },
    {
      img: CalonPilbup2,
      blora: "16.25%",
      bloralLabel:16.25,
      bloraTotal: "76.795",
      color:"#2B72FB"
    },
  ];
  const kabupaten = [
    ["Total Suara", "472.622", "100%"],
    ["Suara Sah", "472.622", "96,6 %"],
    ["Suara Tidak Sah", "26.478", "3,4 %"],
    ["Jumlah Suara", "499.100", "100.00%"],
    ["Pemilih terdaftar/tingkat partisipasi", "700.613", "71.24%"],
    
  ];
  const headers = [
    [
      {
        content: "Suara menurut wilayah",
        className: "bg-[#c02f31] text-white",
      },
      {
        content: "Arief Rohman\nSri Setyorini",
        colSpan: 2,
        className: "bg-[#c02f31] text-white",
      },
      {
        content: "Abu Nafi\nAndika Andikrishna Gunarjo",
        colSpan: 2,
        className: "bg-[#c02f31] text-white",
      },
    ],
    [
      { content: "", className: "bg-gray-200" },
      { content: "Suara", className: "bg-gray-200" },
      { content: "%", className: "bg-gray-200" },
      { content: "Suara", className: "bg-gray-200" },
      { content: "%", className: "bg-gray-200" },
    ],
  ];
  const dataPilbup = [
    [
    { content: "Banjarejo", className: "bg-gray-100 text-left font-semibold" },
    { content: "29.520", className: "bg-green-300" },
    { content: "87,73%", className: "bg-green-300" },
    { content: "4.127" },
    { content: "12,27%" },
  ],
  [
    { content: "Blora", className: "bg-gray-100 text-left font-semibold" },
    { content: "37.177", className: "bg-green-300" },
    { content: "73,44%", className: "bg-green-300" },
    { content: "13.446" },
    { content: "26,56%" },
  ],
  [
    { content: "Bogorejo", className: "bg-gray-100 text-left font-semibold" },
    { content: "12.649", className: "bg-green-300" },
    { content: "86,25%", className: "bg-green-300" },
    { content: "2.016" },
    { content: "13,75%" },
  ],
  [
    { content: "Cepu", className: "bg-gray-100 text-left font-semibold" },
    { content: "30.813", className: "bg-green-300" },
    { content: "83,04%", className: "bg-green-300" },
    { content: "6.292" },
    { content: "16,96%" },
  ],
  [
    { content: "Japah", className: "bg-gray-100 text-left font-semibold" },
    { content: "14.940", className: "bg-green-300" },
    { content: "80,80%", className: "bg-green-300" },
    { content: "3.551" },
    { content: "19,20%" },
  ],
  [
    { content: "Jati", className: "bg-gray-100 text-left font-semibold" },
    { content: "23.696", className: "bg-green-300" },
    { content: "87,95%", className: "bg-green-300" },
    { content: "3.248" },
    { content: "12,05%" },
  ],
  [
    { content: "Jepon", className: "bg-gray-100 text-left font-semibold" },
    { content: "29.780", className: "bg-green-300" },
    { content: "84,44%", className: "bg-green-300" },
    { content: "5.487" },
    { content: "15,56%" },
  ],
  [
    { content: "Jiken", className: "bg-gray-100 text-left font-semibold" },
    { content: "17.137", className: "bg-green-300" },
    { content: "83,79%", className: "bg-green-300" },
    { content: "3.315" },
    { content: "16,21%" },
  ],
  [
    { content: "Kedungtuban", className: "bg-gray-100 text-left font-semibold" },
    { content: "25.142", className: "bg-green-300" },
    { content: "86,43%", className: "bg-green-300" },
    { content: "3.949" },
    { content: "13,57%" },
  ],
  [
    { content: "Kredenan", className: "bg-gray-100 text-left font-semibold" },
    { content: "19.984", className: "bg-green-300" },
    { content: "85,27%", className: "bg-green-300" },
    { content: "3.452" },
    { content: "14,73%" },
  ],
  [
    { content: "Kunduran", className: "bg-gray-100 text-left font-semibold" },
    { content: "29.967", className: "bg-green-300" },
    { content: "85,58%", className: "bg-green-300" },
    { content: "5.049" },
    { content: "14,42%" },
  ],
  [
    { content: "Ngawen", className: "bg-gray-100 text-left font-semibold" },
    { content: "26.221", className: "bg-green-300" },
    { content: "83,16%", className: "bg-green-300" },
    { content: "5.308" },
    { content: "16,84%" },
  ],
  [
    { content: "Randublatung", className: "bg-gray-100 text-left font-semibold" },
    { content: "35.642", className: "bg-green-300" },
    { content: "87,72%", className: "bg-green-300" },
    { content: "4.989" },
    { content: "12,28%" },
  ],
  [
    { content: "Sambong", className: "bg-gray-100 text-left font-semibold" },
    { content: "12.481", className: "bg-green-300" },
    { content: "82,91%", className: "bg-green-300" },
    { content: "2.573" },
    { content: "17,09%" },
  ],
  [
    { content: "Todanan", className: "bg-gray-100 text-left font-semibold" },
    { content: "29.968", className: "bg-green-300" },
    { content: "85,00%", className: "bg-green-300" },
    { content: "5.289" },
    { content: "15,00%" },
  ],
  [
    { content: "Tunjungan", className: "bg-gray-100 text-left font-semibold" },
    { content: "20.710", className: "bg-green-300" },
    { content: "81,49%", className: "bg-green-300" },
    { content: "4.704" },
    { content: "18,51%" },
  ],
  [
    { content: "Jumlah", className: "bg-gray-200 font-bold text-left" },
    { content: "395.827", className: "bg-green-400 font-bold" },
    { content: "83,75%", className: "bg-green-400 font-bold" },
    { content: "76.795", className: "font-bold" },
    { content: "16,25%", className: "font-bold" },
  ],
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-20 py-10 space-y-4">

      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#c02f31] leading-tight">
        Pemilihan Umum Bupati Blora 2024
      </h2>

      {/* CONTENT */}
      <p className="text-sm md:text-base text-gray-800 leading-relaxed text-justify">
        Pemilihan umum Bupati Blora 2024 dilaksanakan pada 27 November 2024 untuk memilih Bupati Blora periode 2025–2030.Pemilihan Bupati (Pilbup) Blora tahun tersebut akan diselenggarakan setelah Pemilihan umum Presiden Indonesia 2024 (Pilpres) dan Pemilihan umum legislatif Indonesia 2024 (Pileg), bersamaan dengan seluruh Provinsi dan Kabupaten/Kota seluruh Indonesia.Bupati petahanan Arief Rohman dapat mencalonkan diri kembali di Pilkada Blora 2024
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
            className="bg-white rounded-xl shadow-md overflow-hidden w-fit p-10"
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
                <DonutChart value={item.bloralLabel} color={item.color} />

                <p className="mt-2 font-bold">{item.blora}</p>
                <p className="text-sm text-gray-500">
                  ({item.bloraTotal})
                </p>
              </div>


            </div>
          </div>
        ))}

      </div>
      <div className="gap-6 md:gap-10">
  
        {/* CARD 1 */}
        <div className="flex flex-col gap-2 w-full">
            <div className="mt-4 md:mt-6 bg-linear-to-r from-[#c02f31] to-[#5a1617] px-4 md:px-6 py-3 w-full md:max-w-[300px] mb-3">
            <p className="text-sm md:text-lg font-semibold text-white">
                Statistik
            </p>
            </div>

            <Table
            showHeader={false}
            data={kabupaten}
            />
        </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
            <div className="mt-4 md:mt-6 bg-linear-to-r from-[#c02f31] to-[#5a1617] px-4 md:px-6 py-3 w-full md:max-w-[300px] mb-3">
            <p className="text-sm md:text-lg font-semibold text-white">
                Berdasarkan Kecamatan
            </p>
            </div>

            <TableAdvanced headers={headers} data={dataPilbup} />
        </div>
        

    </section>
  );
}