import { useState } from "react";

export default function caraMenjadiPemilih() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const data = [
    {
      title: "Apa persyaratan terdaftar sebagai pemilih?",
      content: [
        "genap berumur 17 (tujuh belas) tahun atau lebih pada hari pemungutan suara, sudah kawin, atau sudah pernah kawin;",
        "tidak sedang dicabut hak pilihnya berdasarkan putusan pengadilan yang telah mempunyai kekuatan hukum tetap;",
        "berdomisili di wilayah Negara Kesatuan Republik Indonesia dibuktikan dengan KTP-el;",
        "berdomisili di luar negeri yang dibuktikan dengan KTP-el, Paspor dan/atau Surat Perjalanan Laksana Paspor;",
        "dalam hal Pemilih belum mempunyai KTP-el sebagaimana dimaksud dalam huruf c dan huruf d, dapat menggunakan Kartu Keluarga; dan",
        "tidak sedang menjadi prajurit Tentara Nasional Indonesia atau anggota Kepolisian Negara Republik Indonesia."
      ],
    },
    {
      title: "Bagaimana mengecek apakah telah terdaftar sebagai pemilih?",
      content: [
        "Jika kamu sudah memenuhi syarat, cek apakah kamu sudah terdaftar melalui cekdptonline.kpu.go.id bila nama kamu belum terdaftar, kamu bisa langsung datang ke KPU Kabupaten/Kota di domisili kamu."
      ],
    },
    {
      title: "Apa persyaratan untuk mendapatkan Kartu Pemilih yang telah terdaftar?",
      content: [
        "Di Indonesia tidak ada lagi Kartu Pemilih, yang ada adalah Surat Pemberitahuan kepada Pemilih yang sudah terdaftar dalam DPT yang diberikan oleh KPPS setempat untuk dibawa ke TPS.",

      ],
    },
    {
      title: "Bagaimana tata cara pendaftaran pemilih melalui online?",
      content: [
        "KPU melakukan proses penyusunan dan pemutakhiran daftar pemilih melalui data kependudukan dari Kemendari dan pelaksanaan Coklit atau Pencocokan dan Penelitian yang dilakukan secara langsung dari rumah ke rumah pemilih oleh Petugas Pemutakhiran Data Pemilih (Pantarlih). Proses pendaftaran tidak dilakukan secara online, mengingat perlunya faktual keberadaan pemilih untuk menentukan di TPS mana dia akan memilih dan menghitung alokasi surat suara yang dibutuhkan di setiap TPS sesuai dengan jumlah pemilih yang terdaftar di wilayah tersebut."
      ],
    },
    {
      title: "Sampai kapan proses pendaftaran pemilih?",
      content: [
        "Saat ini sudah ditetapkan Daftar Pemilih Tetap (DPT) untuk Pemilu 2024. Bagi Masyarakat yang memenuhi syarat sebagai pemilih namun belum terdaftar dalam DPT, tetap dapat memilih dengan menunjukkan KTP elektroniknya di TPS sesuai alamat yang tertera di KTP elektroniknya  dan dapat emmilih pada jam 12.00 – 13.00 waktu setempat."
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
                    <p className="flex-1 text-base md:text-lg font-semibold mr-4">
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
                    <p className="text-base md:text-lg font-semibold mr-4">
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