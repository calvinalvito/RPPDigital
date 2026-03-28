import TableAdvanced from "../tableAdvance";
export default function SejarahSection4() {
    const headersPartai = [
    [
        { content: "No. urut", className: "bg-[#c02f31] text-white text-center" },
        { content: "Partai", className: "bg-[#c02f31] text-white text-center" },
    ],
    ];
    const dataPartai = [
        [{ content: "1" }, { content: "Partai Keadilan" }],
        [{ content: "2" }, { content: "PNU" }],
        [{ content: "3" }, { content: "PBI" }],
        [{ content: "4" }, { content: "PDI" }],
        [{ content: "5" }, { content: "Masyumi" }],
        [{ content: "6" }, { content: "PNI Supeni" }],
        [{ content: "7" }, { content: "Krisna" }],
        [{ content: "8" }, { content: "Partai KAMI" }],
        [{ content: "9" }, { content: "PKD" }],
        [{ content: "10" }, { content: "PAY" }],
        [{ content: "11" }, { content: "Partai MKGR" }],
        [{ content: "12" }, { content: "PIB" }],
        [{ content: "13" }, { content: "Partai SUNI" }],
        [{ content: "14" }, { content: "PNBI" }],
        [{ content: "15" }, { content: "PUDI" }],
        [{ content: "16" }, { content: "PBN" }],
        [{ content: "17" }, { content: "PKM" }],
        [{ content: "18" }, { content: "PND" }],
        [{ content: "19" }, { content: "PADI" }],
        [{ content: "20" }, { content: "PRD" }],
        [{ content: "21" }, { content: "PID" }],
        [{ content: "22" }, { content: "Murba" }],
        [{ content: "23" }, { content: "SPSI" }],
        [{ content: "24" }, { content: "PUMI" }],
        [{ content: "25" }, { content: "PSP" }],
        ];

        const headersHasilPemilu = [
        [
            { content: "No", className: "bg-[#c02f31] text-white text-center" },
            { content: "Partai", className: "bg-[#c02f31] text-white text-center" },
            { content: "Suara DPR", className: "bg-[#c02f31] text-white text-center" },
            { content: "Kursi Tanpa SA", className: "bg-[#c02f31] text-white text-center" },
            { content: "Kursi Dengan SA", className: "bg-[#c02f31] text-white text-center" },
        ],
        ];

        const dataHasilPemilu = [
        [
            { content: "1" }, { content: "PDIP" }, { content: "35.689.073" }, { content: "153" }, { content: "154" }
        ],
        [
            { content: "2" }, { content: "Golkar" }, { content: "23.741.749" }, { content: "120" }, { content: "120" }
        ],
        [
            { content: "3" }, { content: "PPP" }, { content: "11.329.905" }, { content: "58" }, { content: "59" }
        ],
        [
            { content: "4" }, { content: "PKB" }, { content: "13.336.982" }, { content: "51" }, { content: "51" }
        ],
        [
            { content: "5" }, { content: "PAN" }, { content: "7.528.956" }, { content: "34" }, { content: "35" }
        ],
        [
            { content: "6" }, { content: "Partai Keadilan" }, { content: "2.049.708" }, { content: "13" }, { content: "13" }
        ],
        [
            { content: "7" }, { content: "PKP" }, { content: "1.436.565" }, { content: "7" }, { content: "6" }
        ],
        [
            { content: "8" }, { content: "PNU" }, { content: "1.065.686" }, { content: "4" }, { content: "6" }
        ],
        [
            { content: "9" }, { content: "PDKB" }, { content: "679.178" }, { content: "5" }, { content: "3" }
        ],
        [
            { content: "10" }, { content: "PBI" }, { content: "550.846" }, { content: "5" }, { content: "3" }
        ],

        // TOTAL
        [
            {
            content: "Jumlah",
            colSpan: 2,
            className: "font-bold bg-gray-200 text-left",
            },
            { content: "105.786.661", className: "font-bold" },
            { content: "462", className: "font-bold" },
            { content: "462", className: "font-bold" },
        ],
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
        <ol className="list-decimal pl-5 space-y-3">
            <li>
            <span className="font-semibold">Pasal 22E UUD 1945 (Amandemen)</span>

            <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Pemilihan umum dilaksanakan secara langsung, umum, bebas, rahasia, jujur, dan adil setiap lima tahun sekali.</li>
                <li>Pemilihan umum diselenggarakan untuk memilih anggota DPR, DPD, Presiden dan Wakil Presiden, serta DPRD.</li>
                <li>Peserta pemilu untuk DPR dan DPRD adalah partai politik.</li>
                <li>Peserta pemilu untuk DPD adalah perseorangan.</li>
                <li>Pemilu diselenggarakan oleh komisi pemilihan umum yang bersifat nasional, tetap, dan mandiri.</li>
                <li>Ketentuan lebih lanjut diatur dengan undang-undang.</li>
            </ul>
            </li>

            <li>
            Undang-undang Nomor 2 Tahun 1999 Tentang Partai Politik.
            </li>

            <li>
            Undang-undang Nomor 3 Tahun 1999 Tentang Pemilihan Umum
            (menetapkan Komisi Pemilihan Umum sebagai penyelenggara pemilu).
            </li>

            <li>
            Undang-undang Nomor 4 Tahun 1999 Tentang Susunan dan Kedudukan MPR, DPR, dan DPRD.
            </li>

        </ol>
        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Sistem Pemilu
            </p>
        </div>
        <ol className="list-decimal pl-5 md:pl-6 space-y-2 text-base md:text-lg text-justify text-black">
            <li>
            Sistem pemilu masih sama yaitu sistem proporsional, hanya saja penetapan calon terpilih dalam Pemilu kali ini berbeda dengan Pemilu sebelumnya, yakni dengan rangking perolehan suara suatu partai di daerah pemilihan.
            </li>
            <li>
            Untuk Presiden dan Wakil Presiden masih sama dengan pemilu-pemilu sebelumnya yaitu dipilih di MPR.
            </li>
        </ol>

        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Badan Penyelenggara Pemilu
            </p>
        </div>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Komisi Pemilihan Umum (KPU) pertama kali dibentuk oleh Presiden untuk melaksanakan Pemilihan Umum Tahun 1999. Organisasi penyelenggara mulai dari pusat KPU dan PPI sampai daerah (PPD I, PPD II, PPK, PPS, KPPS, PPLN, PPSLN, KPPSLN) yang keanggotaannya terdiri dari wakil-wakil parpol peserta Pemilu ditambah beberapa orang wakil dari Pemerintah dan tokoh-tokoh masyarakat. Sedangkan pengawasan dilakukan oleh Panitia Pengawas Pelaksana Pemilu (Panwaslak Pemilu).
        </p>

        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Pelaksanaan Pemilihan Umum 1999
            </p>
        </div>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Setelah Presiden Soeharto dilengserkan dari kekuasaannya pada tanggal 21 Mei 1998 jabatan presiden digantikan oleh Wakil Presiden Bacharuddin Jusuf Habibie. Atas desakan publik, Pemilu yang baru atau dipercepat segera dilaksanakan, sehingga hasil-hasil Pemilu 1997 segera diganti. Kemudian ternyata bahwa Pemilu dilaksanakan pada 7 Juni 1999, atau 13 bulan masa kekuasaan Habibie. Pada saat itu untuk sebagian alasan diadakannya Pemilu adalah untuk memperoleh pengakuan atau kepercayaan dari publik, termasuk dunia internasional, karena pemerintahan dan lembaga-lembaga lain yang merupakan produk Pemilu 1997 sudah dianggap tidak dipercaya. Hal ini kemudian dilanjutkan dengan penyelenggaraan Sidang Umum MPR untuk memilih presiden dan wakil presiden yang baru.
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Ini berarti bahwa dengan pemilu dipercepat, yang terjadi bukan hanya bakal digantinya keanggotaan DPR dan MPR sebelum selesai masa kerjanya, tetapi Presiden Habibie sendiri memangkas masa jabatannya yang seharusnya berlangsung sampai tahun 2003, suatu kebijakan dari seorang presiden yang belum pernah terjadi sebelumnya.
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Sebelum menyelenggarakan Pemilu yang dipercepat itu, pemerintah mengajukan RUU tentang Partai Politik, RUU tentang Pemilu dan RUU tentang Susunan dan Kedudukan MPR, DPR dan DPRD. Ketiga draft UU ini disiapkan oleh sebuah tim Depdagri, yang disebut Tim 7, yang diketuai oleh Prof. Dr. M. Ryaas Rasyid (Rektor IIP Depdagri, Jakarta).
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Setelah RUU disetujui DPR dan disahkan menjadi UU, presiden membentuk Komisi Pemilihan Umum (KPU) yang anggota-anggotanya adalah wakil dari partai politik dan wakil dari pemerintah. Satu hal yang secara sangat menonjol membedakan Pemilu 1999 dengan Pemilu-pemilu sebelumnya sejak 1971 adalah Pemilu 1999 ini diikuti oleh banyak sekali peserta. Ini dimungkinkan karena adanya kebebasan untuk mendirikan partai politik. Peserta Pemilu kali ini adalah 48 partai. Ini sudah jauh lebih sedikit dibandingkan dengan jumlah partai yang ada dan terdaftar di Departemen Kehakiman dan HAM, yakni 141 partai.
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Dalam sejarah Indonesia tercatat, bahwa setelah pemerintahan Perdana Menteri Burhanuddin Harahap, pemerintahan Reformasi inilah yang mampu menyelenggarakan pemilu lebih cepat setelah proses alih kekuasaan. Burhanuddin Harahap berhasil menyelenggarakan pemilu hanya sebulan setelah menjadi Perdana Menteri menggantikan Ali Sastroamidjojo, meski persiapan-persiapannya sudah dijalankan juga oleh pemerintahan sebelum-nya. Habibie menyelenggarakan pemilu setelah 13 bulan sejak ia naik ke kekuasaan, meski persoalan yang dihadapi Indonesia bukan hanya krisis politik, tetapi yang lebih parah adalah krisis ekonomi, sosial dan penegakan hukum serta tekanan internasional.
        </p>

        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Hasil Pemilu 1999
            </p>
        </div>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Meskipun masa persiapannya tergolong singkat, pelaksanaan pemungutan suara pada Pemilu 1999 ini bisa dilakukan sesuai jadwal, yakni tanggal 7 Juni 1999. Tidak seperti yang diprediksikan dan dikhawatirkan banyak pihak sebelumnya, ternyata Pemilu 1999 bisa terlaksana dengan damai, tanpa ada kekacauan yang berarti. Hanya di beberapa Daerah Tingkat II di Sumatera Utara yang pelaksanaan pemungutan suaranya terpaksa diundur suara satu pekan. Itu pun karena adanya keterlambatan atas datangnya perlengkapan pemungutan suara.
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Tetapi tidak seperti pada pemungutan suara yang berjalan lancar, tahap penghitungan suara dan pembagian kursi pada Pemilu kali ini sempat menghadapi hambatan. Pada tahap penghitungan suara, 27 partai politik menolak menandatangani berita acara perhitungan suara dengan dalih Pemilu belum jurdil (jujur dan adil). Sikap penolakan tersebut ditunjukkan dalam sebuah rapat pleno KPU. Ke-27 partai tersebut adalah sebagai berikut:
        </p>

        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Partai yang Tidak Menandatangani Hasil Pemilu 1999
            </p>
        </div>
        <TableAdvanced headers={headersPartai} data={dataPartai} />
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Karena ada penolakan, dokumen rapat KPU kemudian diserahkan pimpinan KPU kepada presiden. Oleh presiden hasil rapat dari KPU tersebut kemudian diserahkan kepada Panwaslu (Panitia Pengawas Pemilu). Panwaslu diberi tugas untuk meneliti keberatan-keberatan yang diajukan wakil-wakil partai di KPU yang berkeberatan tadi. Hasilnya, Panwaslu memberikan rekomen-dasi bahwa pemilu sudah sah. Lagipula mayoritas partai tidak menyertakan data tertulis menyangkut keberatan-keberatannya. Presiden kemudian juga menyatakan bahwa hasil pemilu sah. Hasil final pemilu baru diketahui masyararakat tanggal 26 Juli 1999
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Setelah disahkan oleh presiden, PPI (Panitia Pemilihan Indonesia) langsung melakukan pembagian kursi. Pada tahap ini juga muncul masalah. Rapat pembagian kursi di PPI berjalan alot. Hasil pembagian kursi yang ditetapkan Kelompok Kerja PPI, khususnya pembagian kursi sisa, ditolak oleh kelompok partai Islam yang melakukan stembus accoord. Hasil Kelompok Kerja PPI menunjukkan, partai Islam yang melakukan stembus accoord hanya mendapatkan 40 kursi. Sementara Kelompok stembus accoord 8 partai Islam menyatakan bahwa mereka berhak atas 53 dari 120 kursi sisa.
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Perbedaan pendapat di PPI tersebut akhirnya diserahkan kepada KPU. Di KPU perbedaan pendapat itu akhirnya diselesaikan melalui voting dengan dua opsi. Opsi pertama, pembagian kursi sisa dihitung dengan memperhatikan suara stembus accoord, sedangkan opsi kedua pembagian tanpa stembus accoord. Hanya 12 suara yang mendukung opsi pertama, sedangkan yang mendukung opsi kedua 43 suara. Lebih dari 8 partai walk out. Ini berarti bahwa pembagian kursi dilakukan tanpa memperhitungkan lagi stembus accoord.
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Berbekal keputusan KPU tersebut, PPI akhirnya dapat melakukan pembagian kursi hasil pemilu pada tanggal 1 September 1999. Hasil pembagian kursi itu menunjukkan, lima partai besar memborong 417 kursi DPR atau 90,26 persen dari 462 kursi yang diperebutkan.
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Sebagai pemenangnya adalah PDI-P yang meraih 35.689.073 suara atau 33,74 persen dengan perolehan 153 kursi. Golkar memperoleh 23.741.758 suara atau 22,44 persen sehingga mendapatkan 120 kursi atau kehilangan 205 kursi dibanding Pemilu 1997. PKB dengan 13.336.982 suara atau 12,61 persen, mendapatkan 51 kursi. PPP dengan 11.329.905 suara atau 10,71 persen, mendapatkan 58 kursi atau kehilangan 31 kursi dibanding Pemilu 1997. PAN meraih 7.528.956 suara atau 7,12 persen, mendapatkan 34 kursi. Di luar lima besar, partai lama yang masih ikut, yakni PDI merosot tajam dan hanya meraih 2 kursi dari pembagian kursi sisa, atau kehilangan 9 kursi dibanding Pemilu 1997.
        </p>
        <TableAdvanced headers={headersHasilPemilu} data={dataHasilPemilu} />
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Contoh:
        </p>
        <ol className="list-decimal pl-5 md:pl-6 space-y-2 text-base md:text-lg text-justify text-black">
            <li>
            Jumlah suara partai yang tidak menghasilkan kursi mencapai 9.700.658. atau 9,17 persen dari suara yang sah.
            </li>
            <li>
            Apabila pembagian kursi dilakukan dengan sistem kombinasi jumlah partai yang mendapatkan kursi mencapai 37 partai dengan jumlah suara partai yang tidak menghasilkan kursi hanya 706.447 atau 0,67 persen dari suara sah.
            </li>
        </ol>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Tetapi cara penetapan calon terpilih berbeda dengan Pemilu sebelumnya, yakni dengan menentukan ranking perolehan suara suatu partai di daerah pemilihan. Apabila sejak Pemilu 1977 calon nomor urut pertama dalam daftar calon partai otomatis terpilih apabila partai itu mendapatkan kursi, maka kini calon terpillih ditetapkan berdasarkan suara terbesar atau terba-nyak dari daerah di mana seseorang dicalonkan. Dengan demikian seseorang calon, sebut saja si A, meski berada di urutan terbawah dari daftar calon, kalau dari daerahnya partai mendapatkan suara terbesar, maka dialah yang terpilih. Untuk cara penetapan calon terpilih berdasarkan perolehan suara di Daerah Tingkat II ini sama dengan cara yang dipergunakan pada Pemilu 1971.
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Bagaimanapun penyelenggaraan Pemilu-pemilu tersebut merupakan pengalaman yang berharga. Sekarang, apakah pengalaman itu akan bermanfaat atau tidak semuanya sangat tergantung pada penggunaannya untuk masa-masa yang akan datang. Pemilu yang paling dekat adalah Pemilu 2004. Pengalaman tadi akan bisa dikatakan berharga apabila Pemilu 2004 nanti memang lebih baik daripada Pemilu 1999. Pemilu 1999 untuk banyak hal telah mendapat pujian dari berbagai pihak. Dengan pengalaman tersebut, sudah seharusnyalah kalau Pemilu 2004 mendatang lebih baik lagi.
        </p>
        
        
        
        
        
        

    </section>
  );
}