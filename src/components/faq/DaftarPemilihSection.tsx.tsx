import { useState } from "react";

export default function DaftarPemilih() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const data = [
    {
      title: "Bagaimana tahapan penyusunan daftar pemilih dalam negeri?",
      content: [
        "Penyerahan Data Penduduk Potensial Pemilih Pemilu (DP4) oleh Menteri Dalam Negeri dan oleh Menteri Luar Negeri kepada KPU",
        "Penyandingan Daftar Pemilih Tetap (DPT)Pemilu/Pemilihan terakhir yang telah dimutakhirkan secara berkelanjutan dengan DP4 hasil sinkronisasi oleh KPU.",
        "Penyerahan Data Pemilih dari KPU ke KPU Provinsi/KIP Aceh dan KPU/KIP Kabupaten/Kota.",
        "Penyusunan bahan Pencocokan dan Penelitian diantaranya (a) KPU Kabupaten/Kota dibantu PPK, (b) PPK dibantu oleh PPS, (c) PPS dibantu oleh Pantarlih.",
        "Coklit oleh Pantarlih",
      ],
    },
    {
      title: "Bagaimana tahapan penyusunan daftar pemilih tambahan luar negeri?",
      content: [
        "Penyusunan Daftar Pemilih Tambahan oleh PPLN",
        "Rekapitulasi Daftar Pemilih Tambahan oleh PPLN"
      ],
    },
    {
      title: "Bagaimana tahapan penyusunan daftar pemilih sementara (DPS)?",
      content: [
        "Penyusunan Daftar Pemilih Hasil Pemutakhiran oleh PPS dibantu oleh Pantarlih",
        "Rekapitulasi Daftar Pemilih Hasil Pemutakhiran tingkat kelurahan/desa oleh PPS",
        "Rekapitulasi Daftar Pemilih Hasil Pemutakhiran tingkat kecamatan oleh PPK",
        "Menyusun DPS oleh KPU Kabupaten/Kota",
        "Rekapitulasi dan menetapkan DPS oleh KPU Kabupaten/Kota",
        "Pencetakan dan pendistribusian DPS oleh KPU Kabupaten/Kota kepada PPS melalui PPK",
        "Penyampaian salinan DPS oleh KPU Kabupaten/Kota kepada stakeholders",
        "Analisa Kegandaan",
        "Rekapitulasi DPS oleh KPU Provinsi",
        "Penyampaian hasil rekapitulasi DPS di KPU Provinsi kepada KPU",
        "Penetapan hasil rekapitulasi DPS di KPU",
        "Pengumuman DPS oleh PPS",
        "Penyampaian salinan DPS kepada Peserta Pemilu tingkat kecamatan oleh PPS melalui PPK",
        "Masukan dan tanggapan terhadap DPS",
        "Perbaikan DPS dan Penyusunan Daftar Pemilih Sementara Hasil Perbaikan (DPSHP) oleh PPS",
        "Rekapitulasi DPSHP tingkat kelurahan/desa oleh PPS",
        "Rekapitulasi DPSHP tingkat kecamatan oleh PPK",
        "Rekapitulasi dan Penetapan DPSHP oleh KPU Kabupaten/Kota",
        "Pencetakan dan pendistribusian DPSHP oleh KPU Kabupaten/Kota",
        "Penyampaian salinan DPSHP oleh KPU Kabupaten/Kota kepada Stakeholders",
        "Pengumuman, masukan dan tanggapan atas penetapan DPSHP",
      ],
    },
    {
      title: "Bagaimana tahapan penyusunan daftar pemilih tetap (DPT)?",
      content: [
        "Perbaikan DPSHP dan penyusunan DPSHP Akhir oleh PPS",
        "Rekapitulasi DPSHP Akhir tingkat kelurahan/desa oleh PPS",
        "Rekapitulasi DPSHP Akhir tingkat kecamatan oleh PPK",
        "Penyusunan DPSHP Akhir oleh KPU Kabupaten/Kota untuk bahan penetapan DPT",
        "Analisa Kegandaan",
        "Rekapitulasi dan Penetapan DPT oleh KPU Kabupaten/Kota",
        "Pencetakan dan pendistribusian DPT oleh KPU Kabupaten/Kota kepada PPS melalui PPK",
        "Penyampaian salinan DPT oleh KPU Kabupaten/Kota kepada Stakeholders",
        "Pengumuman DPT",
        "Penyampaian hasil penetapan dan rekapitulasi serta salinan DPT oleh KPU Kabupaten/Kota",
        "Rekapitulasi DPT di KPU Provinsi",
        "Penyampaian hasil rekapitulasi DPT di KPU Provinsi kepada KPU",
        "Penetapan hasil rekapitulasi DPT nasional di tingkat KPU",
      ],
    },
    {
      title: "Bagaimana tahapan penyusunan daftar pemilih tambahan (DPTb)?",
      content: [
        "Penyusunan Daftar Pemilih Tambahan oleh PPS, PPK, dan KPU Kabupaten/Kota",
        "Rekapitulasi Daftar Pemilih Tambahan oleh KPU Kabupaten/Kota"
      ],
    },
    {
      title: "Bagaimana tahapan penyusunan daftar pemilih luar negeri?",
      content: [
        "Menteri Luar Negeri Menyerahkan Data Penduduk Potensial Pemilih Pemilu Luar Negeri (DP4LN) kepada KPU",
        "Penyandingan Daftar Pemilih Tetap Luar Negeri (DPTLN) Pemilu terakhir dengan DP4LN hasil sinkronisasi oleh KPU",
        "Penyerahan Data Pemilih dari KPU kepada Kemenlu/PPLN",
        "Penyusunan bahan Pencocokan dan Penelitian Bahan Coklit oleh PPLN",
        "Coklit dilakukan Pantarlih Luar Negeri"
      ],
    },
    {
      title: "Bagaimana tahapan penyusunan daftar pemilih sementara (DPS) luar negeri?",
      content: [
        "Penyusunan Daftar Pemilih Hasil Pemutakhiran oleh PPLN dibantu oleh Pantarlih LN",
        "Menyusun Daftar Pemilih Sementara Luar Negeri (DPSLN) oleh PPLN",
        "Rekapitulasi dan menetapkan DPSLN oleh PPLN",
        "Penyampaian hasil penetapan dan rekapitulasi DPSLN di PPLN kepada Kemenlu melalui Kepala Perwakilan Republik Indonesia dengan tembusan kepada KPU",
        "Analisa Kegandaan",
        "Rekapitulasi DPSLN seluruh PPLN oleh Kemenlu",
        "Penetapan hasil rekapitulasi DPS dan DPSLN di KPU",
        "Pengumuman DPSLN oleh PPLN",
        "Masukan dan tanggapan terhadap DPSLN",
        "Perbaikan DPSLN dan Penyusunan DPSHP LN oleh PPLN",
        "Rekapitulasi dan Penetapan DPSHP LN oleh PPLN",
        "Penyampaian hasil penetapan dan rekapitulasi DPSLN di PPLN kepada KPU dengan tembusan kepada Kepala Perwakilan Republik Indonesia",
        "Pengumuman, masukan dan tanggapan atas penetapan DPSHPLN"
      ],
    },
    {
      title: "Bagaimana tahapan penyusunan daftar pemilih tetap luar negeri?",
      content: [
        "Perbaikan DPSHP LN dan penyusunan DPT LN oleh PPLN",
        "Analisa Kegandaan",
        "Rekapitulasi dan Penetapan DPTLN oleh PPLN",
        "Pengumuman DPT Luar Negeri ",
        "Penyampaian hasil penetapan dan rekapitulasi serta salinan DPTLN oleh PPLN kepada Kemenlu melalui Kepala Perwakilan Republik Indonesia dengan tembusan kepada KPU",
        "Penetapan hasil rekapitulasi DPT dan DPTLN di KPU",
      ],
    },
  ];

  const toggle = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="max-w-7xl mx-auto">

      {/* GRID 2 KOLOM */}
      <div className="grid md:grid-cols-2 gap-6 items-start">

        {/* KOLOM KIRI */}
        <div className="space-y-6">
          {data
            .filter((_, i) => i % 2 === 0)
            .map((item, idx) => {
              const index = idx * 2;
              const isOpen = openItems.includes(index);

              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5"
                >
                  {/* HEADER */}
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <p className="text-base md:text-lg font-semibold">
                      {item.title}
                    </p>

                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#c02f31] text-white text-xl">
                      {isOpen ? "-" : "+"}
                    </div>
                  </button>

                  {/* CONTENT */}
                  {isOpen && (
                    <ol className="mt-4 list-decimal pl-5 space-y-2 text-sm text-gray-700">
                      {item.content.map((text, i) => (
                        <li key={i}>{text}</li>
                      ))}
                    </ol>
                  )}
                </div>
              );
            })}
        </div>

        {/* KOLOM KANAN */}
        <div className="space-y-6">
          {data
            .filter((_, i) => i % 2 === 1)
            .map((item, idx) => {
              const index = idx * 2 + 1;
              const isOpen = openItems.includes(index);

              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5"
                >
                  {/* HEADER */}
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <p className="text-base md:text-lg font-semibold">
                      {item.title}
                    </p>

                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#c02f31] text-white text-xl">
                      {isOpen ? "-" : "+"}
                    </div>
                  </button>

                  {/* CONTENT */}
                  {isOpen && (
                    <ol className="mt-4 list-decimal pl-5 space-y-2 text-sm text-gray-700">
                      {item.content.map((text, i) => (
                        <li key={i}>{text}</li>
                      ))}
                    </ol>
                  )}
                </div>
              );
            })}
        </div>

      </div>

    </section>
  );
}