import { useState } from "react";
import TentangKPU from "./sections/tentangKPU";
import TugasKPU from "./sections/tugasKPU";
import StrukturKPU from "./sections/strukturKPU";

const tabs = [
  { id: "tentang", label: "Tentang KPU" },
  { id: "tugas", label: "Tugas dan Kewenangan" },
  { id: "struktur", label: "Struktur Organisasi" },
];

export default function TabsSection() {
  const [active, setActive] = useState("tentang");

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

        {active === "tentang" && <TentangKPU />}
        {active === "tugas" && <TugasKPU />}
        {active === "struktur" && <StrukturKPU />}

      </div>

    </div>
  );
}