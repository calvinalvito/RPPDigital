import { useState } from "react";
import CaraMenjadiPemilih from "./faq/caraMenjadiPemilihSection";
import DaftarPemilih from "./faq/DaftarPemilihSection.tsx";
import PindahDomisili from "./faq/pindahPemilihSection";

const tabs = [
  { id: "caramenjadipemilih", label: "Cara Menjadi Pemilih" },
  { id: "daftarpemilih", label: "Daftar Pemilih" },
  { id: "pindahdomisili", label: "Pindah Domisili" },
];

export default function TabFAQ() {
  const [active, setActive] = useState("caramenjadipemilih");

  return (
    <div className="px-6 md:px-20 py-10">

      {/* TAB */}
      <div className="flex overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`
              whitespace-nowrap px-6 py-3 font-semibold transition-all
              ${
                active === tab.id
                  ? "bg-linear-to-r from-[#c02f31] to-[#5a1617] text-white"
                  : "border-b border-[#5a1617] text-gray-800"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="mt-8">

        {active === "caramenjadipemilih" && <CaraMenjadiPemilih />}
        {active === "daftarpemilih" && <DaftarPemilih />}
        {active === "pindahdomisili" && <PindahDomisili />}

      </div>

    </div>
  );
}