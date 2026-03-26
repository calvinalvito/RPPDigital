import location1 from "../assets/location 1.png"
import groupIcon from "../assets/group 1.png";
import chartIcon from "../assets/line-chart 1.png";
import democracyIcon from "../assets/democracy 1.png";
import bookIcon from "../assets/open-book 1.png";
import faqIcon from "../assets/faq 1.png";
import calendarIcon from "../assets/calendar 1.png";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Tentang KPU",
    desc: "Mengenal profil, peran, dan tugas KPU dalam penyelenggaraan Pemilu.",
    icon: location1,
    link: "/tentangkpu",
  },
  {
    title: "Struktur Organisasi",
    desc: "Susunan kelembagaan KPU dan pembagian tugas tiap bagian.",
    icon: groupIcon,
    link: "/strukturkpu",
  },
  {
    title: "Statistik Pemilu",
    desc: "Data partisipasi, hasil, dan tren Pemilu dari tahun ke tahun.",
    icon: chartIcon,
    link: "/statistik",
  },
  {
    title: "Sejarah Pemilu",
    desc: "Perjalanan demokrasi Indonesia sejak Pemilu Pertama.",
    icon: democracyIcon,
    link: "/sejarah",
  },
  {
    title: "Modul Pembelajaran",
    desc: "Modul pembelajaran untuk memahami demokrasi dan kepemiluan di Indonesia.",
    icon: bookIcon,
    link: "/modul-pembalajaran",
  },
  {
    title: "FAQ Pemilu",
    desc: "Kumpulan pertanyaan dan jawaban seputar Pemilu.",
    icon: faqIcon,
    link: "/faq",
  },
  {
    title: "PDPB",
    desc: "Informasi pembaruan Daftar Pemilih Berkelanjutan untuk menjamin hak pilih",
    icon: calendarIcon,
    link: "/pdpb",
  },
];

export default function FeatureSection() {
  return (
    <section className="px-6 md:px-20 py-10">
      
      {/* TITLE */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#c02f31]">
          Kenali Pemilu Lebih Dekat
        </h2>
        <p className="mt-2 text-gray-700 text-sm md:text-base">
          Pilih menu berikut untuk mengenal Pemilu secara mendalam.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((item, index) => (
        
        <Link
          to={item.link}
          key={index}
          className="flex items-start gap-4 rounded-xl transition-all duration-300 group"
        >
          
          {/* ICON */}
          <div className="flex items-center justify-center 
            w-20 h-20 md:w-24 md:h-24 lg:w-20 lg:h-20
            rounded-xl bg-linear-to-b from-[#c02f31] to-[#5a1617]
            group-hover:scale-105 transition"
          >
            <img src={item.icon} className="w-8 h-8 md:w-10 md:h-10" />
          </div>

          {/* TEXT */}
          <div className="w-62.5">
            <h3 className="text-[18px] md:text-xl font-bold group-hover:text-[#c02f31] transition">
              {item.title}
            </h3>

            <p className="text-base text-gray-600 mt-1 leading-relaxed group-hover:text-[#000000] transition">
              {item.desc}
            </p>
          </div>

        </Link>

      ))}
</div>

    </section>
  );
}