import folder from "../assets/folder 1.png"
import bank from "../assets/bank 1.png"
import database from "../assets/database 1.png"
import marketing from "../assets/marketing 1.png"
import ktp from "../assets/ktp.png"
import kk from "../assets/kk.png"
import biodata from "../assets/biodata.png"
import hp from "../assets/hp.png"

export default function PDPBSection() {
    const data = [
    {
      title: "DPT Pemilu atau Pemilihan Terakhir",
      icon: folder,
    },
    {
      title: "Data yang bersumber dari instansi atau lembaga terkait",
      icon: bank,
    },
    {
      title:
        "Data Kependudukan yang dikonsolidasikan setiap 6 bulan sekali oleh kementrian yang menyelenggarakan urusan di bidang dalam negeri",
      icon: database,
    },
    {
      title: "Laporan dari masyarakat",
      icon: marketing,
    },
  ];
  return (
    <div className="w-full mx-auto px-6 md:px-20 py-10 space-y-16">

      {/* INTRO */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#c02f31]">
          Apa itu Pemutakhiran Data Pemilih Berkelanjutan (PDPB)?
        </h2>
        <p className="mt-4 text-gray-800 text-sm md:text-lg leading-relaxed">
          Pemutakhiran Data Pemilih Berkelanjutan (PDPB) adalah proses yang dilakukan secara berkala dan terus-menerus oleh KPU untuk memperbarui data pemilih. Tujuannya adalah memastikan data pemilih tetap akurat, mutakhir, dan komprehensif, meskipun di luar masa tahapan Pemilu atau Pemilihan.
        </p>
      </div>

      {/* 2 COL */}
      <div className="grid md:grid-cols-2 gap-8">

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#c02f31]">
            Tujuan PDPB
          </h3>

          <ul className="mt-4 space-y-2 list-decimal pl-5 text-gray-800">
            <li>Memelihara dan memperbarui DPT Pemilu dan/atau Pemilihan terakhir secara berkelanjutan untuk penyusunan DPT pada Pemilu dan/atau Pemilihan dan/atau Pemilihan berikutnya dengan tetap manjamin kerahasiaan data;</li>
            <li>Menyediakan data dan informasi pemilih berskala nasional mengenai Data Pemilih secara komprehensif, akurat, dan mutakhir</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#c02f31]">
            Siapa yang Bisa Berkontribusi?
          </h3>
          <p className="mt-4">Setiap warga negara, instansi, lembaga, organisasi masyarakat, hingga partai politik dapat melaporkan perubahan data pemilih seperti:</p>
          <ul className="mt-4 space-y-2 list-decimal pl-5 text-gray-800">
            <li>Penduduk baru berusia 17 tahun atau menikah</li>
            <li>Pindah domisili</li>
            <li>Pensiun TNI/Polri</li>
            <li>Meninggal dunia</li>
          </ul>
        </div>

      </div>

      {/* SUMBER DATA */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">

      {data.map((item, i) => (
        <div key={i} className="flex items-start gap-4">

          {/* ICON */}
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl bg-linear-to-b from-[#c02f31] to-[#5a1617] shrink-0">
            <img src={item.icon} className="w-8 h-8 md:w-10 md:h-10 object-contain" />
          </div>

          {/* TEXT */}
          <p className="text-sm md:text-lg font-medium text-gray-800 leading-relaxed">
            {item.title}
          </p>

        </div>
      ))}

    </div>

      {/* PELAKSANA */}
      {/* TITLE */}
      <h2 className="text-2xl md:text-4xl font-bold text-[#c02f31]">
        PDPB dilakukan oleh
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* KPU RI */}
        <div className="">
          <div className="bg-linear-to-r from-[#c02f31] to-[#5a1617] text-white font-bold px-4 py-2 inline-block text-lg md:text-xl w-62.5">
            KPU RI
          </div>

          <ul className="mt-4 space-y-2 text-sm md:text-base text-gray-800 list-disc pl-5 leading-relaxed">
            <li>Penyediaan Bahan Pemutakhiran</li>
            <li>Koordinasi</li>
            <li>Pencermatan</li>
            <li>PDPB Luar Negeri</li>
            <li>Rekapitulasi: 6 bulan sekali</li>
          </ul>
        </div>

        {/* KPU PROVINSI */}
        <div className="">
          <div className="bg-linear-to-r from-[#c02f31] to-[#5a1617] text-white font-bold px-4 py-2 inline-block text-lg md:text-xl w-62.5">
            KPU Provinsi
          </div>

          <ul className="mt-4 space-y-2 text-sm md:text-base text-gray-800 list-disc pl-5 leading-relaxed">
            <li>Koordinasi</li>
            <li>Pencermatan</li>
            <li>Rekapitulasi: 6 bulan sekali</li>
          </ul>
        </div>

        {/* KPU KAB/KOTA */}
        <div className="">
          <div className="bg-linear-to-r from-[#c02f31] to-[#5a1617] text-white font-bold px-4 py-2 inline-block text-lg md:text-xl w-62.5">
            KPU Kabupaten/Kota
          </div>

          <ul className="mt-4 space-y-2 text-sm md:text-base text-gray-800 list-disc pl-5 leading-relaxed">
            <li>Pengolahan data</li>
            <li>Koordinasi</li>
            <li>Pencermatan</li>
            <li>Rekapitulasi: 3 bulan sekali</li>
          </ul>
        </div>

      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-4xl font-bold text-[#c02f31]">
        Cek apakah Kamu sudah terdaftar sebagai pemilih?
      </h2>
      <p className="text-lg md:text-2xl text-gray-800 text-bold">
        Klik{" "}
        <a
            href="https://cekdptonline.kpu.go.id"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold italic text-[#e2aa29] hover:underline"
        >
            cekdptonline.kpu.go.id
        </a>
        </p>
        <p>Jika belum terdaftar, Kami bisa isi form tanggapan PDPB dan bawa ke KPU di wilayahmu dengan membawa:</p>

      <div className="bg-linear-to-r from-[#c02f31] to-[#5a1617] rounded-xl p-6 md:p-10">

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">


          {/* ITEM 1 */}
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 md:w-20 md:h-20 flex rounded-full bg-[#501213]">
              <img
                src={ktp}
                className="w-10 md:w-20 object-contain"
              />
            </div>
            <p className="text-base md:text-lg font-bold text-left">
              KTP-el
            </p>
          </div>

          {/* ITEM 2 */}
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-[#501213]">
              <img
                src={biodata}
                className="w-10 md:w-12 object-contain"
              />
            </div>
            <p className="text-base md:text-lg font-bold text-left">
              Biodata <br /> Penduduk
            </p>
          </div>

          {/* ITEM 3 */}
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-[#501213]">
              <img
                src={kk}
                className="w-10 md:w-12 object-contain"
              />
            </div>
            <p className="text-base md:text-lg font-bold text-left">
              Kartu <br /> Keluarga
            </p>
          </div>

          {/* ITEM 4 */}
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-[#501213]">
              <img
                src={hp}
                className="w-10 md:w-12 object-contain"
              />
            </div>
            <p className="text-sm md:text-lg font-bold text-left">
              Identitas <br /> Kependudukan <br /> Digital
            </p>
          </div>

        </div>

      </div>
      </div>

    </div>
  );
}