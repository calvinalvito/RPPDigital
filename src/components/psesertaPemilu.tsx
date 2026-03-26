export default function PesertaPemiluIndo() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-20 py-10 space-y-8">

      {/* TITLE */}
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-[#c02f31]">
          Peserta Pemilu di Indonesia
        </h2>
        <p className="mt-3 text-sm md:text-lg text-gray-800 text-justify leading-relaxed">
          Peserta pemilu dari masa ke masa menunjukkan dinamika politik Indonesia,
          mulai dari banyaknya partai di pemilu awal hingga penyederhanaan sistem
          kepartaian.
        </p>
      </div>

      {/* TABEL 1 */}
      <div>
        {/* HEADER */}
      <div className="bg-[#c02f31] text-white text-center py-4 font-bold text-lg md:text-2xl">
        Tahun Pelaksanaan
      </div>

      <div className="bg-[#c02f31] text-white text-center py-3 font-semibold text-base md:text-xl border-t border-white">
        Pemilu 1955
      </div>

      {/* CONTENT */}
      <div className="grid lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="bg-[#f2b632] text-white">

          {/* TITLE */}
          <div className="text-center font-bold text-lg md:text-xl py-4 border-b border-white">
            Pemilu Anggota DPR, DPD dan DPRD
          </div>

          {/* GRID DALAM */}
          <div className="grid md:grid-cols-3">

            {/* DPR */}
            <div className="p-4 border-b border-white space-y-2">
              <p className="font-bold">Pemilu Anggota DPR</p>
              <p>Pelaksanaan:</p>
              <p>29 September 1955</p>
            </div>

            {/* PESERTA */}
            <div className="p-4 border-r border-b border-white space-y-2">
              <p className="font-semibold">Peserta:</p>
              <p>36 Partai Politik</p>
              <p>34 Ormas</p>
              <p>48 Perorangan</p>
            </div>

            {/* PEMENANG */}
            <div className="p-4 space-y-2">
              <p className="font-semibold">Partai Pemenang:</p>
              <ol className="list-decimal pl-4">
                <li>PNI</li>
                <li>Masyumi</li>
                <li>NU</li>
              </ol>
            </div>

            {/* KONSTITUANTE */}
            <div className="p-4 border-white space-y-2">
              <p className="font-bold">Pemilu Anggota Konstituante</p>
              <p>25 Desember 1955</p>
            </div>

            {/* PESERTA KONSTITUANTE */}
            <div className="p-4 border-r border-white space-y-2">
              <p className="font-semibold">Peserta:</p>
              <p>39 Partai Politik</p>
              <p>23 Ormas</p>
              <p>29 Perorangan</p>
            </div>

            

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#63aeb5] text-white flex flex-col columns-2 items-center">
            {/* TITLE */}
            <div className="w-full text-center font-bold text-lg md:text-xl py-4 border-b border-white">
              Pemilu Presiden dan Wakil Presiden
            </div>

            {/* CONTENT */}
            <div className="w-full h-full flex items-center justify-center p-6 md:p-10">
            <div className="text-sm md:text-base leading-relaxed max-w-md">
                
                <p className="font-semibold mb-2">
                Tidak ada Pemilu Presiden dan Wakil Presiden
                </p>

                <p>
                Presiden dan Wakil Presiden diangkat dan ditetapkan oleh MPR RI.
Presiden dan Wakil Presiden Terpilih: Abdurrahman Wahid dan Megawati Soekarnoputri
                </p>

            </div>
            </div>

        </div>

      </div>
      </div>
      {/* TABEL 1 CLOSE */}

      {/* TABEL 2 */}
      <div>

        {/* KONTEN 2 */}
        <div className="bg-[#c02f31] text-white text-center py-4 font-bold text-lg md:text-2xl">
            Tahun Pelaksanaan
        </div>

        <div className="bg-[#c02f31] text-white text-center py-3 font-semibold text-base md:text-xl border-t border-white">
            Pemilu 1971
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 bg-red-100">

            {/* LEFT SIDE */}
            <div className="bg-[#ffc133] text-white">

        {/* TITLE */}
        <div className="text-center font-bold text-lg md:text-xl py-4 border-b border-white">
            Pemilu Anggota DPR, DPD dan DPRD
        </div>

        {/* 3 KOLOM */}
        <div className="grid md:grid-cols-3">

            {/* KOLOM 1 */}
            <div className="p-6 border-r border-white flex flex-col justify-center text-base">
            <p className="font-bold">Pelaksanaan:</p>
            <p>5 Juli 1971</p>
            </div>

            {/* KOLOM 2 */}
            <div className="p-6 border-r border-white flex flex-col justify-center text-center text-base">
            <p className="font-bold">Peserta:</p>
            <p className="text-lg font-bold">10</p>
            <p>Partai Politik</p>
            </div>

            {/* KOLOM 3 */}
            <div className="p-6 flex flex-col justify-center text-center text-base">
            <p className="font-bold mb-2">Partai Pemenang:</p>
            <ul className="space-y-1">
                <li>GOLKAR</li>
                <li>NU</li>
                <li>PKI</li>
            </ul>
            </div>

        </div>

        </div>

            {/* RIGHT SIDE */}
            <div className="bg-[#63aeb5] text-white flex flex-col columns-2 items-center">
                {/* TITLE */}
                <div className="w-full text-center font-bold text-lg md:text-xl py-4 border-b border-white">
                Pemilu Presiden dan Wakil Presiden
                </div>

                {/* CONTENT */}
                <div className="w-full h-full flex items-center justify-center p-6 md:p-10">
                <div className="text-sm md:text-base leading-relaxed max-w-md">
                    
                    <p className="font-semibold mb-2">
                    Tidak ada Pemilu Presiden dan Wakil Presiden
                    </p>

                    <p>
                    Soekarno dan Mohammad Hatta ditetapkan sebagai Presiden dan Wakil Presiden pertama oleh Panitia Persiapan Kemerdekaan Indonesia (PPKI).
                    </p>

                </div>
                </div>

            </div>

        </div>
        </div>
        {/* TABEL 2 CLOSE*/}

        {/* TABEL 3 */}
      <div>

        {/* KONTEN 3 */}
        <div className="bg-[#c02f31] text-white text-center py-4 font-bold text-lg md:text-2xl">
            Tahun Pelaksanaan
        </div>

        <div className="bg-[#c02f31] text-white text-center py-3 font-semibold text-base md:text-xl border-t border-white">
            Pemilu 1977-1997
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 bg-red-100">

            {/* LEFT SIDE */}
            <div className="bg-[#ffc133] text-white">

        {/* TITLE */}
        <div className="text-center font-bold text-lg md:text-xl py-4 border-b border-white">
            Pemilu Anggota DPR, DPD dan DPRD
        </div>

        {/* 3 KOLOM */}
        <div className="grid md:grid-cols-3">

            {/* KOLOM 1 */}
            <div className="p-6 border-r border-white flex flex-col justify-center text-base">
            <p className="font-bold">Pelaksanaan:</p>
            <p>
            1977: 2 Mei 1977
            1982: 4 Mei 1982
            1987: 23 April 1987
            1992: 9 Juni 1992
            1997: 29 Mei 1997</p>
            </div>

            {/* KOLOM 2 */}
            <div className="p-6 border-r border-white flex flex-col justify-center text-center text-base">
            <p className="font-bold">Peserta:</p>
            <p className="text-lg font-bold">3</p>
            <p>Partai Politik</p>
            </div>

            {/* KOLOM 3 */}
            <div className="p-6 flex flex-col justify-center text-center text-base">
            <p className="font-bold mb-2">Partai Pemenang:</p>
            <ul className="space-y-1">
                <li>GOLKAR</li>
                <li>PPP</li>
                <li>PDI</li>
            </ul>
            </div>

        </div>

        </div>

            {/* RIGHT SIDE */}
            <div className="bg-[#63aeb5] text-white flex flex-col columns-2 items-center">
                {/* TITLE */}
                <div className="w-full text-center font-bold text-lg md:text-xl py-4 border-b border-white">
                Pemilu Presiden dan Wakil Presiden
                </div>

                {/* CONTENT */}
                <div className="w-full h-full flex items-center justify-center p-6 md:p-10">
                <div className="text-sm md:text-base leading-relaxed max-w-md">
                    
                    <p className="font-semibold mb-2">
                    Tidak ada Pemilu Presiden dan Wakil Presiden
                    </p>

                    <p>
                        Presiden dan Wakil Presiden diangkat dan ditetapkan oleh MPR RI:
                        Tahun 1977: Soeharto dan Adam Malik
                        Tahun 1982: Soeharto dan Umar Wirahadikusumah
                        Tahun 1987: Soeharto dan Soedharmono
                        Tahun 1992: Soeharto dan Try Sutrisno
                        Tahun 1997: Soeharto dan BJ. Habibie
                    </p>

                </div>
                </div>

            </div>

        </div>
        </div>
        {/* TABEL 3 CLOSE*/}

        {/* TABEL 4 */}
      <div>

        {/* KONTEN 3 */}
        <div className="bg-[#c02f31] text-white text-center py-4 font-bold text-lg md:text-2xl">
            Tahun Pelaksanaan
        </div>

        <div className="bg-[#c02f31] text-white text-center py-3 font-semibold text-base md:text-xl border-t border-white">
            Pemilu 1999
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 bg-red-100">

            {/* LEFT SIDE */}
            <div className="bg-[#ffc133] text-white">

        {/* TITLE */}
        <div className="text-center font-bold text-lg md:text-xl py-4 border-b border-white">
            Pemilu Anggota DPR, DPD dan DPRD
        </div>

        {/* 3 KOLOM */}
        <div className="grid md:grid-cols-3">

            {/* KOLOM 1 */}
            <div className="p-6 border-r border-white flex flex-col justify-center text-base">
            <p className="font-bold">Pelaksanaan:</p>
            <p>
            7 Juni 1999</p>
            </div>

            {/* KOLOM 2 */}
            <div className="p-6 border-r border-white flex flex-col justify-center text-center text-base">
            <p className="font-bold">Peserta:</p>
            <p className="text-lg font-bold">48</p>
            <p>Partai Politik</p>
            </div>

            {/* KOLOM 3 */}
            <div className="p-6 flex flex-col justify-center text-center text-base">
            <p className="font-bold mb-2">Partai Pemenang:</p>
            <ul className="space-y-1">
                <li>PDI Perjuangan</li>
                <li>GOLKAR</li>
                <li>PPP</li>
            </ul>
            </div>

        </div>

        </div>

            {/* RIGHT SIDE */}
            <div className="bg-[#63aeb5] text-white flex flex-col columns-2 items-center">
                {/* TITLE */}
                <div className="w-full text-center font-bold text-lg md:text-xl py-4 border-b border-white">
                Pemilu Presiden dan Wakil Presiden
                </div>

                {/* CONTENT */}
                <div className="w-full h-full flex items-center justify-center p-6 md:p-10">
                <div className="text-sm md:text-base leading-relaxed max-w-md">
                    
                    <p className="font-semibold mb-2">
                    Tidak ada Pemilu Presiden dan Wakil Presiden
                    </p>

                    <p>
                    Presiden dan Wakil Presiden diangkat dan ditetapkan oleh MPR RI
                    Presiden dan Wakil Presiden terpilih: Abdurrahman Wahid dan Megawati Soekarnoputri
                    </p>

                </div>
                </div>

            </div>

        </div>
        </div>
        {/* TABEL 4 CLOSE*/}
      

    </section>
  );
}