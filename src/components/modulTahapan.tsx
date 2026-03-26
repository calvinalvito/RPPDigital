export default function TahapanSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-20 py-10 space-y-10">

      {/* DESKRIPSI */}
      <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Tahapan penyelenggaraan pemilu merupakan rangkaian kegiatan yang disusun secara sistematis untuk menjamin setiap proses pemilu berjalan transparan, adil, dan demokratis. Mulai dari perencanaan, pendaftaran peserta, pemutakhiran data pemilih, hingga pemungutan dan penghitungan suara, setiap tahap menjadi bagian penting dalam memastikan suara rakyat terjaga dan hasil pemilu dapat dipercaya.
      </p>

      {/* GRID 2 KOLOM */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* DPR */}
        <div className="overflow-hidden">
          <div className="bg-linear-to-r from-[#2b72fb] to-[#1a4495] text-white font-semibold text-center py-4 text-lg md:text-xl">
            Pemilu Anggota DPR, DPD dan DPRD
          </div>

          <div className="bg-linear-to-r from-[#2b72fb] to-[#1a4495] p-6 md:p-8 text-white mt-1">
            <ul className="space-y-2 list-decimal pl-5 text-sm md:text-base">
              <li>Perencanaan Program dan Anggaran, serta Penyusunan Peraturan
         Pelaksanaan Penyelenggaraan Pemilu</li>
              <li>Pemutakhiran Data Pemilih dan Penyusunan Daftar Pemilih</li>
              <li>Pendaftaran dan Verifikasi Peserta Pemilu</li>
              <li>Penetapan Peserta Pemilu</li>
              <li>Penetapan Jumlah Kursi dan Penetapan Daerah Pemilihan</li>
              <li>Pencalonan Anggota DPR, DPD, DPRD Provinsi, dan DPRD
         Kabupaten/Kota</li>
              <li>Masa Kampanye Pemilu</li>
              <li>Masa Tenang</li>
              <li>Pemungutan dan Penghitungan Suara</li>
              <li>Penetapan Hasil Pemilu</li>
              <li>Pengucapan Sumpah/Janji Anggota DPR, DPD, DPRD Provinsi, dan 
         DPRD Kabupaten/Kota</li>
            </ul>
          </div>
        </div>

        {/* PRESIDEN */}
        <div className="overflow-hidden">
          <div className="bg-linear-to-r from-[#c02f31] to-[#5a1617] text-white font-semibold text-center py-4 text-lg md:text-xl">
            Pemilu Presiden dan Wakil Presiden
          </div>

          <div className="bg-linear-to-r from-[#c02f31] to-[#5a1617] p-6 md:p-8 text-white mt-1 h-full">
            <ul className="space-y-2 list-decimal pl-5 text-sm md:text-base">
              <li>Penyusunan Daftar Pemilih</li>
              <li>Pendaftaran Bakal Pasangan Calon</li>
              <li>Penetapan Pasangan Calon</li>
              <li>Masa Kampanye</li>
              <li>Masa Tenang</li>
              <li>Pemungutan dan Perhitungan Suara</li>
              <li>Penetapan Hasil Pemilu Presiden dan Wakil Presiden</li>
              <li>Pengucapan Sumpah/Janji Presiden dan Wakil Presiden</li>
            </ul>
          </div>
        </div>

      </div>

      {/* PILKADA */}
      <div className="overflow-hidden">

        <div className="bg-linear-to-r from-[#2fa45e] to-[#123e24] text-white font-semibold text-center py-4 text-lg md:text-xl">
          Pemilihan Gubernur, Bupati, dan Walikota
        </div>

        <div className="bg-linear-to-r from-[#2fa45e] to-[#123e24] p-6 md:p-10 text-white mt-1">

          <div className="grid md:grid-cols-2 gap-8">

            {/* KOLOM 1 */}
            <div>
              <h3 className="font-bold text-lg mb-3">Tahapan Persiapan</h3>
              <ul className="space-y-2 list-decimal pl-5 text-sm md:text-base">
                <li>Perencanaan Program dan Anggaran</li>
                <li>Penyusunan Peraturan Penyelenggaraan Pemilihan</li>
                <li>Perencanaan Penyelenggaraan yang meliputi Penetapan Tata Cara dan Jadwal Tahapan Pelaksanaan Pemilihan</li>
                <li>Pembentukan PPK, PPS, dan KPPS</li>
                <li>Pembentukan Panwas Kabupaten/Kota, Panwas Kecamatan, PPL, dan Pengawasan TPS</li>
                <li>Pemberitahuan dan Pendaftaran Pemantau Pemilihan</li>
                <li>Penyerahan Daftar Penduduk Potensial Pemilih</li>
                <li>Pemutakhiran dan Penyusunan Daftar Pemilih</li>
              </ul>
            </div>

            {/* KOLOM 2 */}
            <div>
              <h3 className="font-bold text-lg mb-3">Tahapan Pelaksanaan</h3>
              <ul className="space-y-2 list-decimal pl-5 text-sm md:text-base">
                <li>Pengumuman Pendaftaran Pasangan Calon Gubernur dan Calon Wakil Gubernur, Pasangan Calon Bupati dan Calon Wakil Bupati, serta Pasangan Calon Walikota dan Calon Wakil Walikota</li>
                <li>Pendaftaran Pasangan Calon Gubernur dan Calon Wakil Gubernur, Pasangan Calon Bupati dan Calon Wakil Bupati, serta Pasangan Calon Walikota dan Calon Wakil Walikota</li>
                <li>Penelitian Persyaratan Calon Gubernur dan Calon Wakil Gubernur, Calon Bupati dan Calon Wakil Bupati, serta Calon Walikota dan Calon Wakil Walikota</li>
                <li>Penetapan Pasangan Calon Gubernur dan Calon Wakil Gubernur, Pasangan Calon Bupati dan Calon Wakil Bupati, serta Pasangan Calon Walikota dan Calon Wakil Walikota</li>
                <li>Pelaksanaan Kampanye</li>
                <li>Pelaksanaan Pemungutan Suara</li>
                <li>Penghitungan Suara dan Rekapitulasi Hasil Penghitungan Suara</li>
                <li>Penetapan Calon Terpilih</li>
                <li>Penyelesaian Pelanggaran dan Sengketa Hasil Pemilihan</li>
                <li>Pengusulan Pengesahan Pengangkatan Calon Terpilih</li>
              </ul>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}