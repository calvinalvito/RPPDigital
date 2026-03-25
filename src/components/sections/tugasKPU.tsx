export default function TugasKPU() {
  return (
    <div className="w-full py-10 space-y-8">

      <section>
        {/* TITLE */}
        <h2 className="text-2xl md:text-4xl font-bold text-[#c02f31]">
          Tugas dan Kewenangan KPU
        </h2>

        {/* DESKRIPSI */}
        <p className="mt-4 text-justify text-sm md:text-lg leading-relaxed text-gray-800">
          Komisi Pemilihan Umum (KPU) merupakan lembaga mandiri yang memiliki tugas utama 
          menyelenggarakan pemilihan umum secara nasional. KPU berwenang menetapkan jadwal, 
          tata cara, serta mengatur setiap tahapan pemilu mulai dari pendaftaran peserta, 
          penetapan calon, pemungutan dan penghitungan suara, hingga menetapkan hasil pemilu.
        </p>

        {/* HEADER PASAL */}
        <div className="mt-6 bg-linear-to-r from-[#c02f31] to-[#5a1617] px-4 md:px-6 py-3">
          <p className="text-sm md:text-lg font-semibold text-white">
            Berdasarkan Pasal 12 Undang-Undang Nomor 7 Tahun 2017, KPU mempunyai tugas sebagai berikut:
          </p>
        </div>

        {/* LIST TUGAS */}
        <ul className="list-decimal mt-4 pl-5 md:pl-8 space-y-3 text-sm md:text-lg text-justify leading-relaxed text-gray-800 marker:text-[#c02f31]">

            <li>Merencanakan program dan anggaran serta menetapkan jadwal</li>
            <li>Menyusun tata kerja KPU, KPU Provinsi, KPU Kabupaten/Kota, PPK, PPS, KPPS, PPLN, dan KPPSLN</li>
            <li>Menyusun Peraturan KPU untuk setiap tahapan pemilu</li>
            <li>Mengoordinasikan, menyelenggarakan, mengendalikan dan memantau semua tahapan pemilu</li>
            <li>Menerima daftar pemilih dari KPU Provinsi</li>
            <li>Memutakhirkan data pemilih berdasarkan data pemilu terakhir dengan memperhatikan data kependudukan yang disiapkan dan diserahkan oleh pemerintah dan menetapkannya sebagai daftar pemilih</li>
            <li>Membuat berita acara dan sertifikat rekapitulasi hasil penghitungan suara serta wajib menyerahkannya kepada saksi peserta pemilu dan Bawaslu</li>
            <li>Mengumumkan calon anggota DPR, calon anggota DPD, dan Pasangan Calon terpilih serta membuat berita acaranya</li>
            <li>Menindaklanjuti dengan segera putusan Bawaslu atas temuan dan laporan adanya dugaan pelanggaran atau sengketa Pemilu</li>
            <li>Menyosialisasikan penyelenggaraan pemilu dan/atau yang berkaitan dengan tugas dan wewenang KPU kepada masyarakat</li>
            <li>Melakukan evaluasi dan membuat laporan setiap tahapan penyelenggaraan pemilu</li>
            <li>Melaksanakan tugas lain dalam penyelenggaraan pemilu sesuai dengan ketentuan peraturan perundang-undangan</li>

        </ul>
        <div className="mt-6 bg-linear-to-r from-[#c02f31] to-[#5a1617] px-4 md:px-6 py-3">
          <p className="text-sm md:text-lg font-semibold text-white">
            Pasal 13 Undang Undang 7 Tahun 2017 Tentang Pemilihan Umum, KPU mempunyai kewenangan sebagai berikut:
          </p>
        </div>
        <ul className="list-decimal mt-4 pl-5 md:pl-8 space-y-3 text-sm md:text-lg text-justify leading-relaxed text-gray-800 marker:text-[#c02f31]">

            <li>Menetapkan tata kerja KPU, KPU Provinsi, KPU Kabupaten/Kota, PPK, PPS, KPPS, PPLN, dan KPPSLN</li>
            <li>Menetapkan Peraturan KPU untuk setiap tahapan pemilu</li>
            <li>Menetapkan peserta pemilu</li>
            <li>Menetapkan dan mengumumkan hasil rekapitulasi penghitungan suara tingkat nasional berdasarkan hasil rekapitulasi penghitungan suara di KPU Provinsi untuk Pemilu Presiden dan Wakil Presiden serta untuk Pemilu anggota DPR, dan hasil rekapitulasi penghitungan suara di setiap KPU Provinsi untuk Pemilu anggota DPD dengan membuat berita acara penghitungan suara dan sertifikat hasil penghitungan suara</li>
            <li>Menerbitkan keputusan KPU untuk mengesahkan hasil Pemilu dan mengumumkannya</li>
            <li>Menetapkan dan mengumumkan perolehan jumlah kursi anggota DPR, anggota DPRD provinsi, dan anggota DPRD kabupaten/kota untuk setiap partai politik peserta pemilu</li>
            <li>Menetapkan standar serta kebutuhan pengadaan dan pendistribusian perlengkapan</li>
            <li>Membentuk KPU Provinsi, KPU Kabupaten/Kota, dan PPLN</li>
            <li>Mengangkat, membina, dan memberhentikan anggota KPU Provinsi, anggota KPU Kabupaten/Kota, dan anggota PPLN</li>
            <li>Menjatuhkan sanksi administratif dan/atau menonaktifkan sementara anggota KPU Provinsi, anggota KPU Kabupaten/Kota, anggota PPLN, anggota KPPSLN, dan Sekretaris Jenderal KPU yang terbukti melakukan tindakan yang mengakibatkan terganggunya tahapan penyelenggaraan pemilu yang sedang berlangsung berdasarkan putusan Bawaslu dan/atau ketentuan peraturan perundang-undangan</li>
            <li>Menetapkan kantor akuntan publik untuk mengaudit dana kampanye Pemilu dan mengumumkan laporan sumbangan dana kampanye Pemilu</li>
            <li>Melaksanakan wewenang lain dalam penyelenggaraan Pemilu sesuai dengan ketentuan peraturan perundang-undangan</li>
        </ul>

      </section>

    </div>
  );
}