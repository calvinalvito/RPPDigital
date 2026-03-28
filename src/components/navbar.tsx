import { useState } from "react";
import logoImage from "../assets/logo-kpu.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md px-6 md:px-20 py-4">

      <div className="flex justify-between items-center">

        {/* LEFT */}
        <div className="flex items-center gap-4">
          <img src={logoImage} className="w-10 h-10 md:w-12 md:h-12" />

          <div className="w-px h-8 bg-gray-300 hidden sm:block"></div>

          <div className="leading-tight hidden sm:block">
            <p className="font-bold text-gray-800">
              Komisi Pemilihan Umum
            </p>
            <p className="text-gray-700 text-sm">
              Kabupaten Blora
            </p>
          </div>
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex gap-8 font-semibold text-gray-700">
          <a href="/" className="hover:text-[#c02f31]">Beranda</a>
          <a href="/tentangkpu" className="hover:text-[#c02f31]">Tentang KPU</a>
          <a href="/statistik" className="hover:text-[#c02f31]">Statistik</a>
          <a href="/sejarah" className="hover:text-[#c02f31]">Sejarah Pemilu</a>
        </div>

        {/* HAMBURGER */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="mt-4 flex flex-col gap-4 md:hidden font-semibold text-gray-700">
          <a href="/" className="hover:text-[#c02f31]">Beranda</a>
          <a href="/tentangkpu" className="hover:text-[#c02f31]">Tentang KPU</a>
          <a href="/statistik" className="hover:text-[#c02f31]">Statistik</a>
          <a href="/sejarah" className="hover:text-[#c02f31]">Sejarah Pemilu</a>
        </div>
      )}

    </nav>
  );
}