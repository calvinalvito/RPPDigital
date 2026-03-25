import fotoSejarah from "../assets/FotoSejarah.png"


export default function HistorySection() {
  return (
    <section className="w-full">
      
      {/* BACKGROUND FULL */}
      <div className="w-full bg-linear-to-r from-[#c02f31] to-[#942c27] py-16">
        
        {/* CONTENT (ADA PADDING) */}
        <div className="px-6 md:px-20 flex flex-col md:flex-row items-center md:gap-20 gap-10">

          {/* LEFT */}
          <div className="text-white max-w-xl">
            <h2 className="text-[46px] md:text-4xl text-3xl font-bold">
              Pemilu Pertama:
              <br />
              Tahun 1955
            </h2>

            <p className="mt-4 text-base md:text-lg text-justify leading-relaxed">
              Pemilu pertama Indonesia tahun 1955 menjadi tonggak sejarah demokrasi, diikuti ratusan partai dan organisasi dengan partisipasi pemilih sangat tinggi, sekitar 91%. Hasilnya menempatkan PNI, Masyumi, NU, dan PKI sebagai empat partai besar yang mencerminkan keragaman politik bangsa saat itu.
            </p>

            <div className="mt-6 flex items-center gap-2 text-[#ffc02d] font-semibold cursor-pointer">
              <span>Click to Read more</span>
              <svg viewBox="0 0 23 23" className="w-5 h-5 fill-current">
                <path d="M11.5 1.916C6.21 1.916 1.916 6.21 1.916 11.5c0 5.29 4.294 9.583 9.584 9.583 5.29 0 9.583-4.293 9.583-9.583 0-5.29-4.293-9.584-9.583-9.584Zm0 10.542H7.666v-1.917H11.5V7.666L15.333 11.5 11.5 15.333v-2.875Z" />
              </svg>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-1/2">
            <img
              src={fotoSejarah}
              alt="Pemilu 1955"
              className="w-full h-62.5 md:h-87.5 object-cover rounded-xl"
            />
          </div>

        </div>
      </div>

    </section>
  );
}