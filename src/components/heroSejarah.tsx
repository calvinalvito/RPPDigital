import heroImage from "../assets/gambar-hero.png";

export default function HeroSejarah() {
  return (
    <section className="w-full bg-white px-6 md:px-20 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
      
      {/* LEFT CONTENT */}
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold md:font-bold text-[#c02f31] leading-tight">
          Sejarah Pemilu
        </h1>
        <h1 className="text-4xl md:text-6xl font-extrabold md:font-bold text-[#c02f31] leading-tight">
          Di Indonesia
        </h1>

        <p className="mt-6 text-lg md:text-xl text-black">
          Perjalanan Demokrasi dari masa ke masa
        </p>
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