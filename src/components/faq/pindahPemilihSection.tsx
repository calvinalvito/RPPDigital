import { useState } from "react";

export default function PindahDomisili() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const data = [
    {
      title: "Apakah KPU memfasilitasi bagi pemilih yang akan menggunakan hak suaranya di TPS yang di luar domisilinya?",
      content: [
        "Pemilih yang sudah terdaftar dalam Daftar Pemilih Tetap (DPT) dapat mengajukan pindah memilih atau pindah TPS pada pemilu 2024, bila berada di tempat yang tak sesuai dengan alamat KTP-el nya, dan KPU sudah mengaturnya pada Peraturan KPU Nomor 7 Tahun 2022 tentang Penyusunan Daftar Pemilih Dalam Penyelenggaraan Pemilihan Umum dan Sistem Informasi Data Pemilih.",
      ],
    },
    {
      title: "Bagaimana jika pemilih belum terdaftar dalam DPT?",
      content: [
        "Jika belum terdaftar dalam DPT, tidak dapat pindah memilih, namun pemilih tetap dapat memilih di TPS yang berada di wilayah domisili sesuai alamat KTP el nya untuk dimasukkan dalam Daftar Pemilih Khusus (DPK)."
      ],
    },
    {
      title: "Bagaimana tata cara dan prosedur untuk mengajukan pindah memilih?",
      content: [
        "Datang langsung ke Panitia Pemungutan Suara (PPS), Panitia Pemilihan Kecamatan (PPK) atau KPU Kabupaten/Kota",
        "Bawa bukti dukung alasan pindah memilih (Misalkan karena tugas, bawa surat tugas)",
        "KPU akan memetakan TPS mana di sekitar tempat tujuan (masuk di Daftar Pemilih Tambahan atau DPTb)",
        "Pemilih diberikan bukti dari KPU berupa formulir A-Surat Pindah Memilih"

      ],
    },
    {
      title: "Apa saja syarat kondisi tertentu untuk dapat pindah memilih?",
      content: [
        "menjalankan tugas di tempat lain pada saat hari pemungutan suara;",
        "menjalani rawat inap di fasilitas pelayanan kesehatan dan keluarga yang mendampingi;",
        "penyandang disabilitas yang menjalani perawatan di panti sosial atau panti rehabilitasi;",
        "menjalani rehabilitasi narkoba;",
        "menjadi tahanan di rumah tahanan atau lembaga pemasyarakatan, atau terpidana yang sedang menjalani hukuman penjara atau kurungan;",
        "tugas belajar/menempuh pendidikan menengah atau tinggi;",
        "pindah domisili;",
        "tertimpa bencana alam;",
        "bekerja di luar domisilinya; dan/atau",
        "keadaan tertentu di luar dari ketentuan di atas sesuai dengan peraturan perundang-undangan"
        ],
    },
    {
      title: "Pemilih yang pindah memilih dapat menggunakan hak suaranya untuk memilih jenis pemilihan apa saja?",
      content: [
        "Calon anggota DPR jika pindah memilih ke kabupaten/kota lain di dalam 1 (satu) provinsi dan daerah pemilihan DPR;",
        "Calon anggota DPD jika pindah memilih ke kabupaten/kota lain di dalam 1 (satu) provinsi;",
        "Pasangan calon Presiden dan Wakil Presiden jika pindah memilih ke provinsi lain atau pindah memilih ke suatu negara;",
        "Calon anggota DPRD Provinsi jika pindah memilih ke kecamatan atau kabupaten/kota lain di dalam 1 (satu) provinsi dan daerah pemilihan DPRD Provinsi; dan/atau",
        "Calon anggota DPRD Kabupaten/Kota jika pindah memilih ke desa/kelurahan atau kecamatan lain di dalam 1 (satu) kabupaten/kota dan daerah pemilihan DPRD Kabupaten/Kota."
      ],
    },
    {
      title: "Kapan pemilih bisa melaporkan diri untuk pindah memilih?",
      content: [
        "Untuk menggunakan hak pilihnya di TPS tujuan, Pemilih yang terdaftar dalam DPTb dapat melaporkan kepada PPS, PPK, atau KPU Kabupaten/Kota tempat asal atau tempat tujuan paling lambat 7 (tujuh) Hari sebelum hari pemungutan suara.",
      ],
    },
    {
      title: "Apa saja yang harus dibawa atau ditunjukkan saat melaporkan diri untuk pindah memilih?",
      content: [
        "menunjukkan KTP-el atau KK;",
        "melampirkan salinan formulir Model A-Tanda Bukti Terdaftar sebagai Pemilih dalam DPT di TPS asal."
      ],
    }
    
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