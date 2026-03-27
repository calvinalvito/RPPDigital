export default function TimelinePemilu() {
  const data = [
    { year: "1955", title: "Pemilu Pertama di Indonesia" },
    { year: "1971", title: "Pemilu Orde Baru Pertama" },
    { year: "1977,1982,1987,1992,1997", title: "Pemilu Orde Baru" },
    { year: "1999", title: "Pemilu Reformasi Pertama" },
    { year: "2004", title: "Pemilu Langsung Presiden Pertama" },
    { year: "2009", title: "Pemilu Legislatif & Presiden" },
    { year: "2014", title: "Pemilu Reformasi Pertama" },
    { year: "2019", title: "Pemilu Serentak Pertama" },
    { year: "2024", title: "Pemilu Serentak Nasional Terbesar" },
  ];

  return (
    <section className="relative py-16 px-6 md:px-20 overflow-x-auto">

      {/* GARIS */}
      <div className="absolute top-1/2 left-0 w-full h-0.75 bg-[#c02f31]"></div>

      {/* FLEX WRAPPER */}
      <div className="flex justify-between min-w-299.25">

        {data.map((item, index) => {
          const isTop = index % 2 === 0;

          return (
            <div
              key={index}
              className="flex flex-col items-center text-center w-42.75 shrink-0"
            >
              {/* ATAS */}
              {isTop && (
                <div className="mb-6">
                  <p className="w-42.75 text-xl font-bold text-[#c02f31] leading-tight">
                    {item.year}
                  </p>
                  <p className="text-sm font-semibold mt-2 leading-snug">
                    {item.title}
                  </p>
                  <p className="text-xs text-[#e2aa29] mt-2">
                    Lihat Detail →
                  </p>
                </div>
              )}

              {/* DOT */}
              <div className="w-4 h-4 bg-[#c02f31] rounded-full z-10"></div>

              {/* BAWAH */}
              {!isTop && (
                <div className="mt-6">
                  <p className="text-xl font-bold text-[#c02f31] leading-tight">
                    {item.year}
                  </p>
                  <p className="text-sm font-semibold mt-2 leading-snug">
                    {item.title}
                  </p>
                  <p className="text-xs text-[#e2aa29] mt-2">
                    Lihat Detail →
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
}