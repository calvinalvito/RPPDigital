import sistemPemilu from "../assets/Sistem-Pemilu.png"

export default function SistemPemilu() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-20 py-10 space-y-12">

      {/* HEADER */}
        <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold text-[#c02f31]">
            Sistem Pemilu Umum di Dunia
            </h2>
            <p className="text-sm md:text-lg text-gray-800 text-justify leading-relaxed">
            Sistem Pemilu yang digunakan oleh negara-negara di dunia sangat variatif. Sebuah negara dengan karakter demografis dan geografis yang sama belum tentu menganut sistem Pemilu yang sama. Negara yang menganut bentuk dan sistem pemerintahan yang sama belum tentu juga mengadopsi sistem Pemilu yang sama, demikian pula sebaliknya.
            </p>
        </div>
        <div className="bg-linear-to-r from-[#c02f31] to-[#5a1617] text-white px-4 py-3 font-bold md:w-162 md:text-xl">
          Rumpun Sistem Pemilu
        </div>

        <div className="w-full flex justify-center">
            <img
                src={sistemPemilu}
                alt="Diagram Sistem Pemilu"
                className="w-full max-w-5xl object-contain"
            />
        </div>
      {/* SECTION 1 */}
      <div className="space-y-4">
        <div className="bg-linear-to-r from-[#c02f31] to-[#5a1617] text-white px-4 py-3 font-bold md:w-162 md:text-xl">
          Plurality/Majority System (Sistem Pluralitas/Mayoritas)
        </div>
        <p className="text-sm md:text-lg text-gray-800 text-justify leading-relaxed">
            Disebut juga sistem distrik. Dalam sistem ini wilayah negara dibagi ke dalam beberapa distrik pemilihan yang biasanya berdasar atas jumlah penduduk. Setiap distrik diwakili oleh satu orang wakil, kecuali pada varian Block Vote dan Party Block Vote. Kandidat yang memiliki suara terbanyak akan mengambil seluruh suara yang diperolehnya. Varian dari sistem ini adalah First Past the Post, Alternative Vote, Two Round System dan Block Vote.
        </p>

        <ul className="space-y-2 text-sm md:text-lg text-gray-800 list-decimal pl-5">
          <li>First Past the Post (FPTP)</li>
          <p className="text-sm md:text-lg text-gray-800 text-justify leading-relaxed">
            Kandidat yang memperoleh suara terbanyak langsung terpilih, meskipun tidak mencapai mayoritas mutlak.
          </p>
          <li>Alternative Vote (AV)</li>
          <p className="text-sm md:text-lg text-gray-800 text-justify leading-relaxed">
           Pemilih memberi peringkat pada kandidat. Jika tidak ada yang mendapat mayoritas, suara kandidat dengan perolehan terendah dialihkan ke pilihan berikutnya hingga ada yang meraih mayoritas.
          </p>
          <li>Two Round System (TRS)</li>
          <p className="text-sm md:text-lg text-gray-800 text-justify leading-relaxed">
            Jika pada putaran pertama tidak ada yang memperoleh mayoritas mutlak, dilakukan putaran kedua dengan hanya menyertakan dua kandidat teratas.
          </p>
          <li>Block Vote (BV)</li>
          <p className="text-sm md:text-lg text-gray-800 text-justify leading-relaxed">
             Digunakan di distrik multi-wakil. Pemilih bisa memilih lebih dari satu kandidat sesuai jumlah kursi, dan kandidat dengan suara terbanyak mengisi kursi yang tersedia.
          </p>
        </ul>
      </div>

      <div className="space-y-4">
        <div className="bg-linear-to-r from-[#c02f31] to-[#5a1617] text-white px-4 py-3 font-bold md:w-162 md:text-xl">
          Proportional System (Sistem Proporsional)
        </div>
        <p className="text-sm md:text-lg text-gray-800 text-justify leading-relaxed">
            Dalam sistem ini proporsi kursi yang dimenangkan oleh Partai Politik dalam sebuah daerah pemilihan berbanding seimbang dengan proporsi suara yang diperoleh partai tersebut. Varian dari sistem ini adalah Proporsional Representation dan Transferable Vote.
        </p>
        <ol className="space-y-6 text-sm md:text-lg text-gray-800 list-decimal pl-5">

            {/* ITEM 1 */}
            <li className="font-bold">
                Proportional Representation (PR)

                <ul className="mt-2 space-y-2 list-disc pl-5 font-normal">
                <li>Partai memperoleh kursi sesuai dengan persentase suara.</li>
                <li>
                    Bisa menggunakan daftar tertutup atau daftar terbuka.
                </li>
                <li>Contoh: Pemilu legislatif di Indonesia.</li>
                </ul>
            </li>

            {/* ITEM 2 */}
            <li className="font-bold">
                Single Transferable Vote (STV)

                <ul className="mt-2 space-y-2 list-disc pl-5 font-normal">
                <li>Pemilih memberi peringkat kandidat (1, 2, 3, dst).</li>
                <li>Kandidat harus mencapai kuota suara tertentu.</li>
                <li>
                    Jika ada suara berlebih atau kandidat dieliminasi, suara dialihkan ke pilihan berikutnya.
                </li>
                <li>
                    Lebih menekankan pada representasi individu sekaligus menjaga proporsionalitas.
                </li>
                <li>Contoh: Irlandia dan Malta.</li>
                </ul>
            </li>

            </ol>
      </div>


      {/* SECTION 3 */}
      <div className="space-y-4">
        <div className="bg-linear-to-r from-[#c02f31] to-[#5a1617] text-white px-4 py-3 font-bold md:w-162 md:text-xl">
          Sistem Campuran
        </div>

        <ol className="space-y-6 text-sm md:text-lg text-gray-800 list-decimal pl-5">

        {/* ITEM 1 */}
        <li className="font-bold">
            Parallel System

            <ul className="mt-2 space-y-2 list-disc pl-5 font-normal">
            <li>Pemilih memberikan suara untuk dua jenis pemilihan: satu untuk calon di distrik (mayoritas), dan satu untuk partai politik (proporsional).</li>
            <li>
                Hasil dari dua pemilihan ini tidak saling memengaruhi, sehingga kursi dari sistem distrik ditambahkan langsung ke kursi hasil proporsional.
            </li>
            <li>Contoh: Jepang</li>
            </ul>
        </li>

        {/* ITEM 2 */}
        <li className="font-bold">
            Mixed Member Proportional (MMP)

            <ul className="mt-2 space-y-2 list-disc pl-5 font-normal">
            <li>Sama seperti Parallel System, pemilih juga memberikan dua suara (untuk calon dan untuk partai).</li>
            <li>Bedanya, kursi dari sistem distrik akan memengaruhi perhitungan kursi proporsional, sehingga hasil akhir tetap menjaga keseimbangan proporsionalitas.</li>
            <li>
                Contoh: Jerman dan Selandia Baru.
            </li>
            </ul>
        </li>

        </ol>
      </div>

    </section>
  );
}