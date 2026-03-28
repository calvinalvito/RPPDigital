export default function SejarahSection1() {
    const items = [
  {
    title: "Panitia Pemilihan (PP)",
    desc: "Dibentuk di setiap daerah pemilihan untuk membantu persiapan dan menyelenggarakan pemilihan anggota konstituante dan anggota DPR. Susunan keanggotaan sekurang-kurangnya 5 orang anggota dan sebanyak-banyaknya 7 orang anggota, dengan masa kerja 4 tahun.",
  },
  {
    title: "Panitia Pemilihan Kabupaten (PPK)",
    desc: "Dibentuk pada tiap Kabupaten oleh Menteri Dalam Negeri yang bertugas membantu Panitia Pemilihan mempersiapkan dan menyelenggarakan pemilihan anggota konstituante dan anggota DPR.",
  },
  {
    title: "Panitia Pemilihan Indonesia (PPI)",
    desc: "Mempersiapkan dan menyelenggarakan pemilihan Anggota Konstituante dan Anggota DPR. Keanggotaan PPI sekurang-kurangnya 5 orang dan sebanyak-banyaknya 9 orang, dengan masa kerja 4 tahun.",
  },
  {
    title: "Panitia Pemungutan Suara (PPS)",
    desc: "Dibentuk di tiap kecamatan oleh Menteri Dalam Negeri. Bertugas mengesahkan daftar pemilih, mempersiapkan pemilihan anggota Konstituante dan DPR, serta menyelenggarakan pemungutan suara.",
  },
];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-20 py-10 space-y-4">
        {/* HEADER */}
        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Rumpun Sistem Pemilu
            </p>
        </div>

        {/* LIST */}
        <ol className="list-decimal pl-5 md:pl-6 space-y-2 text-base md:text-lg text-justify text-black">
            <li>
            UU Nomor 7/1953 tentang Pemilihan Anggota Konstituante dan anggota DPR
            sebagaimana diubah dengan UU Nomor 18/1953.
            </li>
            <li>
            PP Nomor 9/1954 tentang Menyelenggarakan undang-undang Pemilu.
            </li>
            <li>
            PP Nomor 47/1954 tentang Cara Pencalonan Keanggotaan DPR/Konstituante oleh
            Anggota Angkatan Perang dan Pernyataan Non Aktif/Pemberhantian berdasarkan
            penerimaan keanggotaan pencalonan keanggotaan tersebut, maupun larangan
            mengadakan Kampanye Pemilu terhadap Anggota Angkatan Perang.
            </li>
        </ol>
        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Sistem Pemilu 1955: Kombinasi Distrik dan Perwakilan Berimbang
            </p>
        </div>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Sistem Pemilu tahun 1955 di Indonesia merupakan kombinasi antara sistem distrik dan sistem perwakilan berimbang. Dalam sistem distrik, wilayah negara dibagi menjadi distrik-distrik pemilihan berdasarkan jumlah penduduk, dengan jumlah anggota badan perwakilan rakyat yang sama dengan jumlah distrik. Setiap distrik memilih satu wakil melalui suara terbanyak, dan pemilih memilih calon yang diajukan oleh organisasi peserta Pemilu (OPP). Sementara itu, dalam sistem perwakilan berimbang, wilayah negara dapat dianggap satu daerah pemilihan atau dibagi secara administratif. Jumlah wakil ditentukan berdasarkan rasio jumlah penduduk, di mana setiap daerah memilih lebih dari satu wakil. Pemilih memilih OPP yang mengajukan daftar calon, dan jumlah kursi ditentukan secara proporsional berdasarkan jumlah suara. Calon yang terpilih diambil dari daftar berdasarkan nomor urut (daftar mengikat) atau perolehan suara (daftar bebas). Sistem kombinasi menggabungkan kedua sistem tersebut, di mana sebagian besar anggota dipilih melalui sistem distrik dan sebagian kecil mewakili OPP yang tidak memperoleh kursi dari sistem distrik, dengan alokasi kursi berdasarkan jumlah suara OPP.
        </p>
        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Badan Penyelenggara Pemilu
            </p>
        </div>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Untuk menyelenggarakan Pemilu dibentuk badan badan penyelenggara pemilihan, dengan berpedoman pada Surat Edaran Menteri Kehakiman Nomor JB.2/9/4 Und.Tanggal 23 April 1953 dan 5/11/37/KDN tanggal 30 Juli 1953, yaitu :
        </p>
        <div className="space-y-6">
        {items.map((item, i) => (
            <div
            key={i}
            className="flex flex-col md:flex-row gap-4 md:gap-6 px-5 md:px-8 py-5 rounded-xl bg-linear-to-b from-[#c02f31] to-[#5a1617] text-white"
            >
            {/* TITLE */}
            <div className="md:w-62.5 font-semibold text-lg md:text-xl leading-snug">
                {item.title}
            </div>

            {/* DESC */}
            <p className="flex-1 text-sm md:text-base leading-relaxed text-justify">
                {item.desc}
            </p>
            </div>
        ))}
        </div>
        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Pelaksanaan Pemilihan Umum 1955
            </p>
        </div>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Ini merupakan Pemilu yang pertama dalam sejarah bangsa Indonesia. Waktu itu Republik Indonesia berusia 10 tahun. Kalau dikatakan Pemilu merupakan syarat minimal bagi adanya demokrasi, apakah berarti selama 10 tahun itu Indonesia benar-benar tidak demokratis? Tidak mudah juga menjawab pertanyaan tersebut.Yang jelas, sebetulnya sekitar tiga bulan setelah kemerdekaan dipro-klamasikan oleh Soekarno dan Hatta pada 17 Agustus 1945, pemerintah waktu itu sudah menyatakan keinginannya untuk bisa menyelenggarakan Pemilu pada awal tahun 1946. Hal itu dicantumkan dalam Maklumat X, atau Maklumat Wakil Presiden Mohammad Hatta tanggal 3 Nopember 1945, yang berisi anjuran tentang pembentukan partai-partai politik. Maklumat tersebut menyebutkan, Pemilu untuk memilih anggota DPR dan MPR akan diselenggarakan bulan Januari 1946. Kalau kemudian ternyata Pemilu pertama tersebut baru terselenggara hampir sepuluh tahun setelah kemudian tentu bukan tanpa sebab.
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Tetapi, berbeda dengan tujuan yang dimaksudkan oleh Maklumat X, Pemilu 1955 dilakukan dua kali. Yang pertama, pada 29 September 1955 untuk memlih anggota-anggota DPR. Yang kedua, 15 Desember 1955 untuk memilih anggota-anggota Dewan Konstituante. Dalam Maklumat X hanya disebutkan bahwa Pemilu yang akan diadakan Januari 1946 adalah untuk memilih angota DPR dan MPR, tidak ada Konstituante.
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Keterlambatan dan “penyimpangan” tersebut bukan tanpa sebab pula. Ada kendala yang bersumber dari dalam negeri dan ada pula yang berasal dari faktor luar negeri. Sumber penyebab dari dalam antara lain ketidaksiapan pemerintah menyelenggarakan Pemilu, baik karena belum tersedianya perangkat perundang-undangan untuk mengatur penyelenggaraan Pemilu maupun akibat rendahnya stabilitas keamanan negara. Dan yang tidak kalah pentingnya, penyebab dari dalam itu adalah sikap pemerintah yang enggan menyelenggarakan perkisaran (sirkulasi) kekuasaan secara teratur dan kompetitif. Penyebab dari luar antara lain serbuan kekuatan asing yang mengharuskan negara ini terlibat peperangan.
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Tidak terlaksananya Pemilu pertama pada bulan Januari 1946 seperti yang diamanatkan oleh Maklumat 3 Nopember 1945, paling tidak disebabkan 2 (dua) hal :
        </p>
        <ol className="list-decimal pl-5 md:pl-6 space-y-2 text-base md:text-lg text-justify text-black">
            <li>
            Belum siapnya pemerintah baru, termasuk dalam penyusunan perangkat UU Pemilu.
            </li>
            <li>
            Belum stabilnya kondisi keamanan negara akibat konflik internal antar kekuatan politik yang ada pada waktu itu, apalagi pada saat yang sama gangguan dari luar juga masih mengancam. Dengan kata lain, para pemimpin lebih disibukkan oleh urusan konsolidasi.
            </li>
        </ol>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Namun, tidaklah berarti bahwa selama masa konsolidasi kekuatan bangsa dan perjuangan mengusir penjajah itu, pemerintah kemudian tidak berniat untuk menyelenggarakan Pemilu. Ada indikasi kuat bahwa pemerintah punya keinginan politik untuk menyelenggarakan Pemilu. Misalnya adalah dibentuknya UU No. UU No 27 tahun 1948 tentang Pemilu, yang kemudian diubah dengan UU No. 12 tahun 1949 tentang Pemilu. Di dalam UU No 12/1949 diamanatkan bahwa pemilihan umum yang akan dilakukan adalah bertingkat (tidak langsung). Sifat pemilihan tidak langsung ini didasarkan pada alasan bahwa mayoritas warga negara Indonesia pada waktu itu masih buta huruf. Sehingga kalau pemilihannya langsung dikhawatirkan akan banyak terjadi distorsi.
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Kemudian pada paruh kedua tahun 1950, ketika Mohammad Natsir dari Masyumi menjadi Perdana Menteri, pemerintah memutuskan untuk menjadikan Pemilu sebagai program kabinetnya. Sejak itu pembahasan UU Pemilu mulai dilakukan lagi, yang dilakukan oleh Panitia Sahardjo dari Kantor Panitia Pemilihan Pusat sebelum kemudian dilanjutkan ke parlemen. Pada waktu itu Indonesia kembali menjadi negara kesatuan, setelah sejak 1949 menjadi negara serikat dengan nama Republik Indonesia Serikat (RIS).
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Setelah Kabinet Natsir jatuh 6 bulan kemudian, pembahasan RUU Pemilu dilanjutkan oleh pemerintahan Sukiman Wirjosandjojo, juga dari Masyumi. Pemerintah ketika itu berupaya menyelenggarakan Pemilu karena pasal 57 UUDS 1950 menyatakan bahwa anggota DPR dipilih oleh rakyat melalui pemilihan umum.
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Tetapi pemerintah Sukiman juga tidak berhasil menuntaskan pembahasan undang-undang Pemilu tersebut. Selanjutnya UU ini baru selesai dibahas oleh parlemen pada masa pemerintahan Wilopo dari PNI pada tahun 1953. Maka lahirlah UU No. 7 Tahun 1953 tentang Pemilu. UU inilah yang menjadi payung hukum Pemilu 1955 yang diselenggarakan secara langsung, umum, bebas dan rahasia. Dengan demikian UU No. 27 Tahun 1948 tentang Pemilu yang diubah dengan UU No. 12 tahun 1949 yang mengadopsi pemilihan bertingkat (tidak langsung) bagi anggota DPR tidak berlaku lagi.
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Patut dicatat dan dibanggakan bahwa Pemilu yang pertama kali tersebut berhasil diselenggarakan dengan aman, lancar, jujur dan adil serta sangat demokratis. Pemilu 1955 bahkan mendapat pujian dari berbagai pihak, termasuk dari negara-negara asing. Pemilu ini diikuti oleh lebih 30-an partai politik dan lebih dari seratus daftar kumpulan dan calon perorangan.
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Yang menarik dari Pemilu 1955 adalah tingginya kesadaran berkompetisi secara sehat. Misalnya, meski yang menjadi calon anggota DPR adalah perdana menteri dan menteri yang sedang memerintah, mereka tidak menggunakan fasilitas negara dan otoritasnya kepada pejabat bawahan untuk menggiring pemilih yang menguntungkan partainya. Karena itu, sosok pejabat negara tidak dianggap sebagai pesaing yang menakutkan dan akan memenangkan Pemilu dengan segala cara. Karena Pemilu kali ini dilakukan untuk dua keperluan, yaitu memilih anggota DPR dan memilih anggota Dewan Konstituante, maka hasilnya pun perlu dipaparkan semuanya.
        </p>

    </section>
  );
}