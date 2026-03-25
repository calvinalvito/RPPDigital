import kantorKPU from "../../assets/KantorKPU.png"

export default function TentangKPU() {
  return (
    <div className="py-10 space-y-16">

      {/* IMAGE */}
      <img
        src= {kantorKPU}
        className="w-full h-55 md:h-100 object-cover rounded-xl"
      />

      {/* SEJARAH */}
      <section>
        <h2 className="text-2xl md:text-4xl font-bold text-[#c02f31]">
          Sejarah KPU
        </h2>

        <div className="mt-4 space-y-4 text-justify text-sm md:text-lg leading-relaxed">
          <p>
            Tuntutan pembentukan penyelenggara Pemilu yang bersifat mandiri dan bebas dari kooptasi penguasa menguat pada era reformasi. Melalui amandemen terhadap UUD 1945 pasal 22 E ayat 5 maka secara eksplisit kemudian disebutkan bahwa: Pemilihan umum diselenggarakan oleh suatu komisi pemilihan umum yang bersifat nasional, tetap, dan mandiri. Sebagai tindak lanjut dari amanat UUD 1945 hasil amandemen tersebut maka pada tahun 1999 dibentuklah sebuah lembaga penyelenggara Pemilu yang bersifat independen dengan nama Komisi Pemilihan Umum atau yang biasa disingkat dengan KPU.
          </p>
          <p>
            KPU dibentuk untuk meminimalisir campur tangan penguasa dalam pelaksanaan Pemilu. Hal ini mengingat penyelenggara Pemilu sebelumnya, yakni Lembaga Pemilihan Umum (LPU), merupakan bagian dari Kementerian Dalam Negeri (sebelumnya bernama Departemen Dalam Negeri) yang nota bene adalah bagian dari mesin penguasa.
          </p>
          <p>
            Pada awal pembentukannya, anggota Komisi Pemilihan Umum (KPU) terdiri atas anggota partai politik dan elemen Pemerintah. Hal tersebut berubah di tahun 2000. Perubahan tersebut merupakan amanah Undang-Undang (UU) Nomor 4 Tahun 2000 tentang Pemilihan Umum. Undang-Undang ini mengatur bahwa Komisi Pemilihan Umum harus beranggotakan anggota-anggota yang non-partai politik.
          </p>
          <p>
            Melalui Keputusan Presiden Nomor 70 Tahun 2001tentang Pembentukan KPU, struktur KPU dipangkas. Sebelumnya, anggota KPU 53 orang berubah menjadi 11 orang. Kesebelas komisioner ini terdiri dari unsur lembaga swadayamasyarakat (LSM) dan akademisi. Menghadapi Pemilu tahun 2004, pada tahun 2002, diterbitkan Keputusan Presiden (Keppres) Nomor 67 Tahun 2002 tentang Pemilihan Umum (Pemilu). Keppres ini membentuk tim seleksi untuk mengangkat anggota KPU.
          </p>
        </div>
      </section>

      {/* TENTANG */}
      <section>
        <h2 className="text-2xl md:text-4xl font-bold text-[#c02f31]">
          Tentang KPU
        </h2>

        <div className="mt-4 space-y-4 text-justify text-sm md:text-lg leading-relaxed">
          <p>
            Komisi Pemilihan Umum (selanjutnya disebut KPU) adalah lembaga Penyelenggara Pemilu yang bersifat nasional, tetap, dan mandiri dalam melaksanakan pemilu. Wilayah kerja KPU meliputi seluruh wilayah Negara Kesatuan Republik Indonesia. KPU menjalankan tugasnya secara berkesinambungan dan dalam menyelenggarakan Pemilu, KPU bebas dari pengaruh pihak manapun berkaitan dengan pelaksanaan tugas dan wewenangnya.
          </p>
          <p>
            KPU terdiri atas KPU, KPU Provinsi, dan KPU Kabupaten/Kota. Dalam melaksanakan tahapan Pemilu dan Pemilihan Kepala Daerah, KPU membentuk Badan Ad Hoc yang bertugas membantu KPU dalam melaksanakan tahapan Pemilu dan Pemilihan di tingkat Kecamatan (disebut dengan PPK/Panitia Pemilihan Kecamatan), di tingkat Desa (disebut PPS/ Panitia Pemungutan Suara), dan di tingkat TPS / Tempat Pemungutan Suara (disebut KPPS/ Kelompok Penyelenggara Pemungutan Suara). Selain itu, untuk melaksanakan Pemilu di luar negeri, KPU juga dibantu oleh Panitia Pemilihan Luar Negeri (PPLN) dan Kelompok Penyelenggera Pemungutan Suara Luar Negeri (KPPSLN).
          </p>
        </div>
      </section>

      {/* VISI MISI */}
      <section>
        <div className="grid md:grid-cols-[400px_1fr] gap-6 w-full">

          {/* VISI */}
          <div className="bg-linear-to-b from-[#c02f31] to-[#5a1617] p-8 md:p-10 rounded-xl text-white md:w-100.75">
            <h3 className="text-xl md:text-3xl font-bold">Visi</h3>
            <p className="mt-4 text-xl md:text-[30px] leading-relaxed">
              Menjadi Penyelenggara Pemilihan Umum yang Mandiri, Professional, dan Berintegritas untuk Terwujudnya Pemilu yang LUBER dan JURDIL
            </p>
          </div>

          {/* MISI */}
          <div className="bg-linear-to-b from-[#c02f31] to-[#5a1617] p-8 md:p-10 rounded-xl text-white w-full">
            <h3 className="text-xl md:text-3xl font-bold">Misi</h3>

            <ul className="mt-4 space-y-2 text-sm md:text-lg list-decimal pl-5">
              <li>meningkatkan kualitas penyelenggaraan Pemilu yang efektif dan efisien, transparan, akuntabel, serta aksesibel;</li>
              <li>meningkatkan integritas, kemandirian, kompetensi dan profesionalisme penyelenggara Pemilu dengan mengukuhkan code of conduct penyelenggara Pemilu;</li>
              <li>menyusun regulasi di bidang Pemilu yang memberikan kepastian hukum, progesif, dan partisipatif;</li>
              <li>meningkatkan partisipasi dan kualitas pemilih dalam Pemilu, Pemilih berdaulat Negara kuat; dan</li>
              <li>mengoptimalkan pemanfaatan kemajuan teknologi informasi dalam penyelenggaraan Pemilu.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* BLORA */}
      <section>
        <h2 className="text-2xl md:text-4xl font-bold text-[#c02f31]">
          Tentang KPU Kabupaten Blora
        </h2>

        <div className="mt-4 space-y-4 text-justify text-sm md:text-lg leading-relaxed">
          <p>
            Komisi Pemilihan Umum Kabupaten Blora adalah lembaga penyelenggara pemilu di tingkat kabupaten yang bertugas mengkoordinasikan penyelenggaraan Pemilu dan Pemilihan di wilayah Kabupaten Blora. Kantor KPU Kabupaten Blora terletak di Jalan Halmahera 11 Kel. Jetis Kec Blora Kabupaten Blora. Jumlah anggota KPU Kabupaten Blora 5 (lima) orang, terdiri atas seorang ketua merangkap anggota dan empat orang anggota.
          </p>
          <p>
            Dalam menjalankan tugasnya, anggota KPU Kabupaten Blora dibantu oleh Sekretariat KPU Kabupaten Blora. Sekretariat KPU Kabupaten Blora dipimpin oleh seorang sekretaris, yang dibantu oleh 4 (empat) orang Kepala Sub-Bagian, dan para staf yang terdiri atas Pegawai Negeri Sipil dan Non PNS. Sekretaris adalah PNS yang secara fungsional bertanggung jawab kepada ketua KPU Kabupaten Blora dan secara administratif kepada Sekretaris Jenderal KPU RI.
          </p>
        </div>
      </section>

    </div>
  );
}