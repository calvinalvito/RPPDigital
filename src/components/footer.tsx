import logoweb from "../assets/web (1) 2.png"
import facebook from "../assets/facebook (3) 2.png"
import instagram from "../assets/instagram (3) 2.png"

export default function Footer() {
  return (
    <footer className="w-full">

      {/* MAIN FOOTER */}
      <div className="bg-linear-to-b from-[#c02f31] to-[#5a1617] text-white py-16">
        
        <div className="px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-10 w-full">

          {/* LEFT - BRAND */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Rumah Pintar <br /> Pemilu
            </h2>

            <p className="mt-4 text-sm md:text-base text-gray-200">
              Kenali lebih dekat tentang Pemilu, KPU, dan informasi kepemiluan 
              melalui Rumah Pintar Pemilu.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-6">
              <img src={logoweb} className="w-6 h-6" />
              <img src={facebook} className="w-6 h-6" />
              <img src={instagram} className="w-6 h-6" />
            </div>
          </div>

          {/* MENU 1 */}
          <div className="md:flex gap-8 space-y-4 md:justify-end">
            <div className="space-y-4">
                <p className="font-bold text-lg">Menu</p>
                <p className="hover:opacity-80 cursor-pointer">Tentang KPU</p>
                <p className="hover:opacity-80 cursor-pointer">Struktur Organisasi</p>
                <p className="hover:opacity-80 cursor-pointer">Statistik Pemilu</p>
            </div>

            {/* MENU 2 */}
            <div className="space-y-4">
                <p className="font-bold text-lg">Lainnya</p>
                <p className="hover:opacity-80 cursor-pointer">Sejarah Pemilu</p>
                <p className="hover:opacity-80 cursor-pointer">PDPB</p>
                <p className="hover:opacity-80 cursor-pointer">FAQ Pemilu</p>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-gray-100 py-4">
        <p className="text-center text-sm md:text-base text-gray-700">
          © 2024 Rumah Pintar Pemilu
        </p>
      </div>

    </footer>
  );
}