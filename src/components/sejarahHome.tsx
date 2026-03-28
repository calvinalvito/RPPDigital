import { Link } from "react-router-dom";

export default function TimelinePemilu() {
  const data = [
    { year: "1955", title: "Pemilu Pertama di Indonesia", href: "/sejarah/1955" },
    { year: "1971", title: "Pemilu Orde Baru Pertama", href: "/sejarah/1971" },
    { year: "1977–1997", title: "Pemilu Orde Baru", href: "/sejarah/1977-1997" },
    { year: "1999", title: "Pemilu Reformasi Pertama", href: "/sejarah/1999" },
    { year: "2004", title: "Pemilu Langsung Presiden Pertama", href: "/sejarah/2004" },
    { year: "2009", title: "Pemilu Legislatif & Presiden", href: "/sejarah/2009" },
    { year: "2014", title: "Pemilu Reformasi Pertama", href: "/sejarah/2014" },
    { year: "2019", title: "Pemilu Serentak Pertama", href: "/sejarah/2019" },
    { year: "2024", title: "Pemilu Serentak Nasional Terbesar", href: "/sejarah/2024" },
  ];

  return (
    <section className="py-4 px-4 md:px-6">

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block max-w-6xl mx-auto relative">

        {/* GARIS */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#c02f31] -translate-y-1/2" />

        {/* WRAPPER */}
        <div className="flex justify-between items-center h-55 relative">

          {data.map((item, index) => {
            const isTop = index % 2 === 0;

            return (
              <div key={index} className="flex-1 flex flex-col items-center relative">

                {/* ATAS */}
                {isTop && (
                  <div className="absolute bottom-1/2 mb-8 max-w-27.5 text-center">
                    <Link
                      to={item.href}
                      className="block hover:scale-105 transition"
                    >
                      <p className="text-lg font-bold text-[#c02f31] hover:underline">
                        {item.year}
                      </p>
                      <p className="text-xs font-semibold mt-1">
                        {item.title}
                      </p>
                      <p className="text-xs text-[#e2aa29] mt-1">
                        Lihat Detail →
                      </p>
                    </Link>
                  </div>
                )}

                {/* DOT */}
                <Link to={item.href}>
                  <div className="w-4 h-4 bg-[#c02f31] rounded-full z-10 hover:scale-125 transition cursor-pointer" />
                </Link>

                {/* BAWAH */}
                {!isTop && (
                  <div className="absolute top-1/2 mt-8 max-w-27.5 text-center">
                    <Link
                      to={item.href}
                      className="block hover:scale-105 transition"
                    >
                      <p className="text-lg font-bold text-[#c02f31] hover:underline">
                        {item.year}
                      </p>
                      <p className="text-xs font-semibold mt-1">
                        {item.title}
                      </p>
                      <p className="text-xs text-[#e2aa29] mt-1">
                        Lihat Detail →
                      </p>
                    </Link>
                  </div>
                )}

              </div>
            );
          })}
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden max-w-md mx-auto relative">

        {/* GARIS VERTICAL */}
        <div className="absolute left-4 top-0 w-0.5 h-full bg-[#c02f31]" />

        <div className="space-y-10">

          {data.map((item, index) => (
            <div key={index} className="flex items-start gap-4">

              {/* DOT */}
              <Link to={item.href}>
                <div className="w-3 h-3 bg-[#c02f31] rounded-full mt-2 hover:scale-125 transition cursor-pointer" />
              </Link>

              {/* CONTENT */}
              <Link to={item.href} className="block">
                <p className="text-base font-bold text-[#c02f31] hover:underline">
                  {item.year}
                </p>
                <p className="text-sm font-semibold">
                  {item.title}
                </p>
                <p className="text-xs text-[#e2aa29] mt-1">
                  Lihat Detail →
                </p>
              </Link>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
}