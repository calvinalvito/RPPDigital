import heroImage from "../assets/gambar-hero.png";

export default function Hero() {
  return (
    <section className="w-full bg-white px-6 md:px-20 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
      
      {/* LEFT CONTENT */}
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-7xl font-extrabold md:font-bold text-[#c02f31] leading-tight">
          Selamat Datang
        </h1>
        <h1 className="text-4xl md:text-7xl font-extrabold md:font-bold text-[#c02f31] leading-tight">
          di Sasono Pasinaon
        </h1>

        <p className="mt-6 text-lg md:text-xl text-black">
          Mengenal sejarah, partisipasi, dan makna Pemilu untuk masa depan bangsa.
        </p>

        <button className="mt-8 px-4 py-2 md:px-6 md:py-3 bg-[#c02f31] text-white text-lg font-semibold rounded-xl hover:opacity-90 transition">
          Sejarah Pemilu
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div>
        <img
        src={heroImage}
        alt="Hero"
        className="w-72 md:w-96 object-contain"
        />
      </div>

    </section>
  );
}