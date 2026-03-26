import FotoWidi from "../assets/foto komisioner/Widi Nurintan.png"
import FotoHeniRina from "../assets/foto komisioner/Heni Rina.png"
import FotoSolikin from "../assets/foto komisioner/Ahmad Solikin.png"
import FotoMustakim from "../assets/foto komisioner/Ahmad Mustakim.png"
import FotoNoorman from "../assets/foto komisioner/Noorman Pramono.png"
import fotoSekretariat from "../assets/foto komisioner/Struktur-Organisasi-KPU.png"


export default function StrukturBlora() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-20 py-10 space-y-12">

      {/* TITLE */}
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-[#c02f31]">
          Struktur Organisasi KPU Kabupaten Blora
        </h2>

        <p className="mt-4 text-gray-800 text-sm md:text-lg leading-relaxed text-justify">
          Struktur organisasi Komisi Pemilihan Umum (KPU) disusun untuk memastikan setiap tahapan pemilu berjalan transparan, akuntabel, dan sesuai dengan peraturan perundang-undangan. Dengan pembagian tugas yang jelas antar anggota, sekretariat, serta unit kerja pendukung, KPU mampu menjalankan fungsi penyelenggaraan pemilu secara profesional, efektif, dan efisien demi terwujudnya pemilu yang demokratis.
        </p>
      </div>

      {/* SECTION HEADER */}
      <div className="bg-linear-to-r from-[#c02f31] to-[#5a1617] text-white font-bold px-4 py-2 inline-block">
        Anggota Komisioner KPU Kab. Blora
      </div>

      {/* GRID FOTO */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* CARD 1 */}
        <div className="relative rounded-xl overflow-hidden">
          <img src={FotoWidi} className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-linear-to-t from-[#c02f31] via-transparent to-transparent"></div>

          <div className="absolute bottom-6 left-6 text-white md:w-55">
            <p className="text-lg md:text-2xl font-semibold">
              Widi Nurintan Ary Kurnianto
            </p>
            <p className="text-sm font-semibold">Ketua</p>
            <p className="text-xs">
              Kadiv Keuangan, Umum dan Logistik
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="relative rounded-2xl overflow-hidden">
          <img src={FotoHeniRina} className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-linear-to-t from-[#c02f31] via-transparent to-transparent"></div>

          <div className="absolute bottom-6 left-6 text-white md:w-55">
            <p className="text-lg md:text-2xl font-semibold">
              Heni Rina Minarti, S.H.
            </p>
            <p className="text-sm font-semibold">Anggota</p>
            <p className="text-xs">
              Kadiv Perencanaan, Data dan Informasi
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="relative rounded-xl overflow-hidden">
          <img src={FotoSolikin} className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-linear-to-t from-[#c02f31] via-transparent to-transparent"></div>

          <div className="absolute bottom-6 left-6 text-white md:w-55">
            <p className="text-lg md:text-2xl font-semibold">
              Ahmad Solikin, S.Pd.I.
            </p>
            <p className="text-sm font-semibold">Anggota</p>
            <p className="text-xs">
              Kadiv Teknis Penyelenggaraan Pemilu
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-3 flex justify-center gap-6">
            <div className="w-full sm:w-[48%] lg:w-[30%] relative rounded-xl overflow-hidden">
          <img src={FotoMustakim} className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-linear-to-t from-[#c02f31] via-transparent to-transparent"></div>

          <div className="absolute bottom-6 left-6 text-white md:w-55">
            <p className="text-lg md:text-2xl font-semibold">
              Ahmad Muastakim, S.Pd.I
            </p>
            <p className="text-sm font-semibold">Anggota</p>
            <p className="text-xs">
              Kadiv Sosialisasi, Pendidikan Pemilih, Partisipasi Masyarakat dan SDM
            </p>
          </div>
        </div>

        {/* CARD 5 */}
        <div className="w-full sm:w-[48%] lg:w-[30%] relative rounded-xl overflow-hidden">
          <img src={FotoNoorman} className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-linear-to-t from-[#c02f31] via-transparent to-transparent"></div>

          <div className="absolute bottom-6 left-6 text-white md:w-55">
            <p className="text-lg md:text-2xl font-semibold">
              Noorman Pramono, S.IP.
            </p>
            <p className="text-sm font-semibold">Anggota</p>
            <p className="text-xs">
              Kadiv Hukum dan Pengawasan
            </p>
          </div>
        </div>
        </div>

        {/* CARD 4 */}
        

      </div>

      {/* SEKRETARIAT */}
      <div className="space-y-4">
        <div className="bg-linear-to-r from-[#c02f31] to-[#5a1617] text-white font-bold px-4 py-2 inline-block">
          Sekretariat KPU Kab. Blora
        </div>

        <img
          src={fotoSekretariat}
          className="w-full rounded-xl"
        />
      </div>

    </div>
  );
}