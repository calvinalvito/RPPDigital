import GambarModul from "../assets/Gambar-Modul.png"
import { Link } from "react-router-dom";

export default function ModulSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-20 py-10 space-y-8">

        {/* TITLE */}
        <div className="max-w-xl">
            <h2 className="text-2xl md:text-4xl font-bold text-[#c02f31]">
            Modul Pembelajaran
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-800">
            Pilih modul berikut untuk mengenal Pemilu secara mendalam.
            </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* CARD 1 */}
            <Link
                to="/modul-pembelajaran/Peserta-Pemilu"
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group"
            >
                <img
                src={GambarModul}
                className="w-full h-50 object-cover group-hover:scale-105 transition duration-300"
                />

                <div className="p-5 space-y-2">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#c02f31] transition">
                    Peserta Pemilu Indonesia
                </h3>
                <p className="text-sm md:text-base text-gray-700">
                    Peserta pemilu dari masa ke masa menunjukkan dinamika politik Indonesia
                </p>
                </div>
            </Link>

            {/* CARD 2 */}
            <Link
                to="/modul-pembelajaran/Sistem-Pemilu-Dunia"
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group"
            >
                <img
                src={GambarModul}
                className="w-full h-50 object-cover group-hover:scale-105 transition duration-300"
                />

                <div className="p-5 space-y-2">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#c02f31] transition">
                    Sistem Pemilu di Dunia
                </h3>
                <p className="text-sm md:text-base text-gray-700">
                    Peserta pemilu dari masa ke masa menunjukkan dinamika politik Indonesia
                </p>
                </div>
            </Link>

            {/* CARD 3 */}
            <Link
                to="/modul-pembelajaran/Tahapan-Penyelenggaraan"
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group"
            >
                <img
                src={GambarModul}
                className="w-full h-50 object-cover group-hover:scale-105 transition duration-300"
                />

                <div className="p-5 space-y-2">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#c02f31] transition">
                    Tahapan Penyelenggaraan Pemilu
                </h3>
                <p className="text-sm md:text-base text-gray-700">
                    Tahapan penyelenggaraan pemilu merupakan rangkaian kegiatan...
                </p>
                </div>
            </Link>

        </div>

        {/* TITLE */}
        <div className="max-w-xl">
            <h2 className="text-2xl md:text-4xl font-bold text-[#c02f31]">
            Buku Pilkada 2024
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-800">
            Pilih buku berikut untuk mengenal Pemilu secara mendalam.
            </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* CARD 1 */}
            <Link
                to="/pembelajaran/peserta-pemilu"
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group"
            >
                <img
                src={GambarModul}
                className="w-full h-50 object-cover group-hover:scale-105 transition duration-300"
                />

                <div className="p-5 space-y-2">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#c02f31] transition">
                    Kita Turut Berperan
                </h3>
                <p className="text-sm md:text-base text-gray-700">
                    
                </p>
                </div>
            </Link>

            {/* CARD 2 */}
            <Link
                to="/pembelajaran/sistem-pemilu"
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group"
            >
                <img
                src={GambarModul}
                className="w-full h-50 object-cover group-hover:scale-105 transition duration-300"
                />

                <div className="p-5 space-y-2">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#c02f31] transition">
                    Desa Kita Masa Depan Kita
                </h3>
                <p className="text-sm md:text-base text-gray-700">
                    
                </p>
                </div>
            </Link>

            {/* CARD 3 */}
            <Link
                to="/pembelajaran/tahapan"
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group"
            >
                <img
                src={GambarModul}
                className="w-full h-50 object-cover group-hover:scale-105 transition duration-300"
                />

                <div className="p-5 space-y-2">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#c02f31] transition">
                    Semua Punya Suara
                </h3>
                <p className="text-sm md:text-base text-gray-700">
                    
                </p>
                </div>
            </Link>

            <Link
                to="/pembelajaran/tahapan"
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group"
            >
                <img
                src={GambarModul}
                className="w-full h-[200px] object-cover group-hover:scale-105 transition duration-300"
                />

                <div className="p-5 space-y-2">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#c02f31] transition">
                    Sukseskan Pilkada Serentak 2024
                </h3>
                <p className="text-sm md:text-base text-gray-700">
                    
                </p>
                </div>
            </Link>


        </div>

        

    </section>
  );
}