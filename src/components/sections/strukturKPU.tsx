import Card from "./Card"

export default function StrukturKPU() {
  return (
    <div className="py-10 space-y-12 max-w-7xl mx-auto">

      {/* HEADER */}
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-[#c02f31]">
          Struktur Organisasi KPU
        </h2>

        <p className="mt-4 text-sm md:text-lg text-justify text-gray-800 leading-relaxed">
          Komisi Pemilihan Umum (KPU) memiliki struktur organisasi yang berlapis dari pusat hingga daerah untuk memastikan penyelenggaraan pemilu berjalan efektif, transparan, dan sesuai asas demokrasi. Struktur ini mencakup KPU RI di tingkat nasional, KPU Provinsi, KPU Kabupaten/Kota, hingga perangkat di tingkat kecamatan dan desa/kelurahan, serta penyelenggara di luar negeri. Setiap tingkatan memiliki peran dan kewenangan masing-masing yang saling mendukung demi terwujudnya pemilu yang langsung, umum, bebas, rahasia, jujur, dan adil.
        </p>
      </div>

      {/* LIST CARD */}
      <div className="space-y-6">

        {/* CARD */}
        <Card
          title="KPU RI"
          gradient="from-[#2b72fb] to-[#1a4495]"
          items={[
            "Berkedudukan di Ibu Kota Negara",
            "Anggota: 7 Orang",
            "Masa keanggotaan 5 tahun",
            "Dibantu oleh Sekretariat Jenderal",
          ]}
        />

        <Card
          title="KPU Provinsi"
          gradient="from-[#2b72fb] to-[#1a4495]"
          items={[
            "Berkedudukan di Ibu Kota Provinsi",
            "Anggota: 5 Orang",
            "Masa keanggotaan 5 tahun",
            "Dibantu oleh Sekretariat",
          ]}
        />

        <Card
          title="KPU Kabupaten/Kota"
          gradient="from-[#2b72fb] to-[#1a4495]"
          items={[
            "Berkedudukan di Ibu Kota Kabupaten/Kota",
            "Anggota: 5 Orang",
            "Masa keanggotaan 5 tahun",
            "Dibantu oleh Sekretariat",
          ]}
        />

        <Card
          title="Panitia Pemilihan Kecamatan (PPK)"
          gradient="from-[#822bfb] to-[#4d1a95]"
          items={[
            "Berkedudukan di Kecamatan",
            "Anggota: 5 Orang",
            "Dibentuk oleh KPU Kab/Kota",
            "Dibantu oleh Sekretariat",
          ]}
        />

        <Card
          title="Panitia Pemungutan Suara (PPS)"
          gradient="from-[#822bfb] to-[#4d1a95]"
          items={[
            "Berkedudukan di Desa/Kelurahan",
            "Anggota: 3 Orang",
            "Dibentuk oleh KPU Kab/Kota",
            "Dibantu oleh Sekretariat",
          ]}
        />

        <Card
          title="KPPS"
          gradient="from-[#822bfb] to-[#4d1a95]"
          items={[
            "Anggota: 7 Orang",
            "Diangkat oleh PPS",
            "Terdiri dari ketua dan anggota",
          ]}
        />

        <Card
          title="PPLN"
          gradient="from-[#2fa45e] to-[#123e24]"
          items={[
            "Berkedudukan di perwakilan RI",
            "Anggota: 3–7 Orang",
            "Diangkat oleh KPU",
          ]}
        />

        <Card
          title="KPPSLN"
          gradient="from-[#2fa45e] to-[#123e24]"
          items={[
            "Anggota: 3–7 Orang",
            "Diangkat oleh PPLN",
            "Terdiri dari ketua dan anggota",
          ]}
        />

      </div>

    </div>
  );
}