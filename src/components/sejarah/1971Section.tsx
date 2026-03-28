import TableAdvanced from "../tableAdvance";
export default function SejarahSection2() {
    const Pelaksanaan1955 = [
    "Ketika Jenderal Soeharto diangkat oleh MPRS menjadi pejabat Presiden menggantikan Soekarno dalam Sidang Istimewa MPRS 1967, ia juga tidak secepatnya menyelenggarakan Pemilu untuk mencari legitimasi kekuasaan transisi. Malah Ketetapan MPRS XI Tahun 1966 yang mengamanatkan agar Pemilu bisa diselenggarakan dalam tahun 1968, kemudian diubah lagi pada SI MPR 1967, oleh Jenderal Soeharto diubah lagi dengan menetapkan bahwa Pemilu akan diselenggarakan dalam tahun 1971.",
    "Sebagai pejabat presiden, Soeharto tetap menggunakan MPRS dan DPR-GR bentukan Soekarno, hanya saja ia melakukan pembersihan lembaga tertinggi dan tinggi negara tersebut dari sejumlah anggota yang dianggap berbau Orde Lama. Pada prakteknya, Pemilu kedua baru bisa diselenggarakan tanggal 5 Juli 1971, yang berarti setelah 4 tahun Soeharto berada di kursi kepresidenan. Pada waktu itu ketentuan tentang kepartaian (tanpa UU) kurang lebih sama dengan yang diterapkan Presiden Soekarno.",
    "UU yang diadakan adalah UU tentang Pemilu dan susunan dan kedudukan MPR, DPR, dan DPRD. Menjelang Pemilu 1971, pemerintah bersama DPR GR menyelesaikan UU No. 15 Tahun 1969 tentang Pemilu dan UU No. 16 tentang Susunan dan Kedudukan MPR, DPR dan DPRD. Penyelesaian UU itu sendiri memakan waktu hampir tiga tahun.",
    "Hal yang sangat signifikan yang berbeda dengan Pemilu 1955 adalah bahwa para pejebat negara pada Pemilu 1971 diharuskan bersikap netral. Sedangkan pada Pemilu 1955 pejabat negara, termasuk perdana menteri yang berasal dari partai bisa ikut menjadi calon partai secara formal. Tetapi pada prakteknya pada Pemilu 1971 para pejabat pemerintah berpihak kepada salah satu peserta Pemilu, yaitu Golkar. Jadi sesungguhnya pemerintah pun merekayasa ketentuan-ketentuan yang menguntungkan Golkar seperti menetapkan seluruh pegawai negeri sipil harus menyalurkan aspirasinya kepada salah satu peserta Pemilu itu.",
    "Dalam hubungannya dengan pembagian kursi, cara pembagian yang digunakan dalam Pemilu 1971 berbeda dengan Pemilu 1955. Dalam Pemilu 1971, yang menggunakan UU No. 15 Tahun 1969 sebagai dasar, semua kursi terbagi habis di setiap daerah pemilihan. Cara ini ternyata mampu menjadi mekanisme tidak langsung untuk mengurangi jumlah partai yang meraih kursi dibandingkan penggunaan sistem kombinasi. Tetapi, kelemahannya sistem demiki-an lebih banyak menyebabkan suara partai terbuang percuma.",
    "Jelasnya, pembagian kursi pada Pemilu 1971 dilakukan dalam tiga tahap, ini dalam hal ada partai yang melakukan stembus accoord. Tetapi di daerah pemilihan yang tidak terdapat partai yang melakukan stembus acccord, pembagian kursi hanya dilakukan dalam dua tahap.",
    "Tahap pembagian kursi pada Pemilu 1971 adalah sebagai berikut. Pertama, suara partai dibagi dengan kiesquotient di daerah pemi-lihan. Tahap kedua, apabila ada partai yang melakukan stembus accoord, maka jumlah sisa suara partai-partai yang menggabungkan sisa suara itu dibagi dengan kiesquotient. Pada tahap berikutnya apabila masih ada kursi yang tersisa masing-masing satu kursi diserahkan kepada partai yang meraih sisa suara terbesar, termasuk gabungan sisa suara partai yang melakukan stembus accoord dari perolehan kursi pembagian tahap kedua. Apabila tidak ada partai yang melakukan stembus accoord, maka setelah pembagian pertama, sisa kursi dibagikan langsung kepada partai yang memiliki sisa suara terbesar.",
    "Namun demikian, cara pembagian kursi dalam Pemilu 1971 menyebabkan tidak selarasnya hasil perolehan suara secara nasional dengan perolehan keseluruhan kursi oleh suatu partai. Contoh paling gamblang adalah bias perolehan kursi antara PNI dan Parmusi. PNI yang secara nasional suaranya lebih besar dari Parmusi, akhirnya memperoleh kursi lebih sedikit dibandingkan Parmusi. Untuk lebih jelasnya lihat tabel di bawah ini."
    ];

    const headersPelaksanaan = [
    [
        { content: "No.", className: "bg-[#c02f31] text-white" },
        { content: "Partai", className: "bg-[#c02f31] text-white" },
        { content: "Suara", className: "bg-[#c02f31] text-white" },
        { content: "%", className: "bg-[#c02f31] text-white" },
        { content: "Kursi", className: "bg-[#c02f31] text-white" },
    ],
    ];
    const headersHasil = [
    [
        { content: "No.", className: "bg-[#c02f31] text-white" },
        { content: "Partai", className: "bg-[#c02f31] text-white" },
        { content: "Jumlah Suara Nasional", className: "bg-[#c02f31] text-white" },
        { content: "Kursi Pembagian Pertama", className: "bg-[#c02f31] text-white" },
        { content: "Sisa Suara", className: "bg-[#c02f31] text-white" },
        { content: "Perolehan Kursi Sisa", className: "bg-[#c02f31] text-white" },
        { content: "Sisa Suara Akhir", className: "bg-[#c02f31] text-white" },
        { content: "Kursi Tambahan", className: "bg-[#c02f31] text-white" },
        { content: "Total Kursi", className: "bg-[#c02f31] text-white" },
    ],
    ];
    
    type Cell = {
  content: string;
  className?: string;
  colSpan?: number;
    };

    type Row = Cell[];

    const dataPelaksanaan: Row[] = [
    [
        { content: "1." },
        { content: "Golkar" },
        { content: "34.348.673" },
        { content: "62,82" },
        { content: "325" },
    ],
    [
        { content: "2." },
        { content: "NU" },
        { content: "10.213.650" },
        { content: "18,68" },
        { content: "89" },
    ],
    [
        { content: "3." },
        { content: "Parmusi" },
        { content: "2.930.746" },
        { content: "5,36" },
        { content: "11" },
    ],
    [
        { content: "4." },
        { content: "PNI" },
        { content: "3.793.266" },
        { content: "6,93" },
        { content: "" },
    ],
    [
        { content: "5." },
        { content: "PSII" },
        { content: "1.308.237" },
        { content: "2,39" },
        { content: "" },
    ],
    [
        { content: "6." },
        { content: "Parkindo" },
        { content: "733.359" },
        { content: "1,34" },
        { content: "" },
    ],
    [
        { content: "7." },
        { content: "Katolik" },
        { content: "603.740" },
        { content: "1,10" },
        { content: "" },
    ],
    [
        { content: "8." },
        { content: "Perti" },
        { content: "381.309" },
        { content: "0,69" },
        { content: "" },
    ],
    [
        { content: "9." },
        { content: "IPKI" },
        { content: "338.403" },
        { content: "0,61" },
        { content: "" },
    ],
    [
        { content: "10." },
        { content: "Murba" },
        { content: "48.126" },
        { content: "0,08" },
        { content: "" },
    ],
    [
        {
        content: "Jumlah",
        colSpan: 2,
        className: "font-bold bg-gray-200 text-left",
        },
        { content: "54.669.509", className: "font-bold" },
        { content: "100,00", className: "font-bold" },
        { content: "360", className: "font-bold" },
    ],
    ];


    const dataHasil: Row[] = [
    [
        { content: "1" },
        { content: "Golkar" },
        { content: "34.339.708" },
        { content: "214" },
        { content: "1.342.084" },
        { content: "11" },
        { content: "81.770 (III)" },
        { content: "1" },
        { content: "226" },
    ],
    [
        { content: "2" },
        { content: "NU" },
        { content: "10.201.659" },
        { content: "48" },
        { content: "1.323.245" },
        { content: "11" },
        { content: "62.931" },
        { content: "-" },
        { content: "59" },
    ],
    [
        { content: "3" },
        { content: "PNI" },
        { content: "3.793.266" },
        { content: "16" },
        { content: "908.061" },
        { content: "7" },
        { content: "106.043 (II)" },
        { content: "1" },
        { content: "24" },
    ],
    [
        { content: "4" },
        { content: "Parmusi" },
        { content: "2.930.919" },
        { content: "10" },
        { content: "1.389.435" },
        { content: "12" },
        { content: "14.547" },
        { content: "" },
        { content: "22" },
    ],
    [
        { content: "5" },
        { content: "PSII" },
        { content: "1.257.056" },
        { content: "1" },
        { content: "1.039.280" },
        { content: "9" },
        { content: "8.000" },
        { content: "-" },
        { content: "10" },
    ],
    [
        { content: "6" },
        { content: "Parkindo" },
        { content: "697.618" },
        { content: "1" },
        { content: "628.752" },
        { content: "5" },
        { content: "53.882" },
        { content: "-" },
        { content: "6" },
    ],
    [
        { content: "7" },
        { content: "Katolik" },
        { content: "603.740" },
        { content: "2" },
        { content: "412.428" },
        { content: "3" },
        { content: "68.706 (IV)" },
        { content: "1" },
        { content: "6" },
    ],
    [
        { content: "8" },
        { content: "Perti" },
        { content: "380.403" },
        { content: "2" },
        { content: "180.240" },
        { content: "1" },
        { content: "65.666 (V)" },
        { content: "1" },
        { content: "4" },
    ],
    [
        { content: "9" },
        { content: "IPKI" },
        { content: "338.376" },
        { content: "-" },
        { content: "338.376" },
        { content: "2" },
        { content: "109.228 (I)" },
        { content: "1" },
        { content: "3" },
    ],
    [
        { content: "10" },
        { content: "Murba" },
        { content: "47.800" },
        { content: "-" },
        { content: "47.800" },
        { content: "-" },
        { content: "47.800" },
        { content: "-" },
        { content: "-" },
    ],

    // TOTAL
    [
        {
        content: "Jumlah",
        colSpan: 2,
        className: "font-bold bg-gray-200 text-left",
        },
        { content: "54.669.509", className: "font-bold" },
        { content: "294", className: "font-bold" },
        { content: "7.561.901", className: "font-bold" },
        { content: "61", className: "font-bold" },
        { content: "" },
        { content: "5", className: "font-bold" },
        { content: "360", className: "font-bold" },
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
        <ol className="list-decimal pl-5 md:pl-6 space-y-2 text-base md:text-lg text-justify text-black">
            <li>
            Pemilu tahun 1971 didasari pada Undang-undang Nomor 15 Tahun 1969 tentang Pemilihan Umum Untuk Anggota-anggota DPR, DPRD Tingkat I dan DPRD Tingkat II diselenggarakan secara Langsung, Umum, Bebas dan Rahasia.
            </li>
            <li>
            Azas Pemilihan Umum 1971 tercantum dalam ketetapan MPRS Nomor XI/MPRS/1966 menetapkan Pemilihan Umum bersifat langsung, umum, bebas dan rahasia. Dalam rangka pemungutan suara dikeluarkan ketetapam MPRSNomor XLII/MPRS/1968 tentang jadwal waktu pemungutan suara yang dilaksanakan pada tanggal 5 Juli 1971.
            </li>
        </ol>
        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Sistem Pemilu 1971
            </p>
        </div>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Sistim Pemilu tahun 1971 menganut sistim perwakilan berimbang dengan menganut sisiem stelsel daftar mengikat, artinya besarnya kekuatan perwakilan organisasi dalam DPR dan DPRD, berimbang dengan besarnya dukungan pemilih karena pemilih  memberikan suaranya kepada Organisasi Peserta Pemilu.
        </p>
        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Badan Penyelenggara Pemilu
            </p>
        </div>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Lembaga Penyelenggara Pemilu (LPU) dibentuk dengan Keputusan Presiden Nomor 3 Tahun 1970 diketuai oleh Menteri Dalam Negeri. LPU keanggotaannya terdiri dari:
        </p>
        <div className="flex flex-wrap justify-center gap-4">

        <div className="px-6 md:px-10 py-4 md:py-5 rounded-xl bg-linear-to-b from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-semibold text-white text-center">
            Dewan Pimpinan
            </p>
        </div>

        <div className="px-6 md:px-10 py-4 md:py-5 rounded-xl bg-linear-to-b from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-semibold text-white text-center">
            Dewan Pertimbangan
            </p>
        </div>

        <div className="px-6 md:px-10 py-4 md:py-5 rounded-xl bg-linear-to-b from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-semibold text-white text-center">
            Sekretariat Umum
            </p>
        </div>

        </div>
        
        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Pelaksanaan Pemilihan Umum 1971
            </p>
        </div>
        <div className="space-y-4">
        {Pelaksanaan1955.map((text, i) => (
            <p key={i} className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
            {text}
            </p>
        ))}
        </div>
        <TableAdvanced headers={headersPelaksanaan} data={dataPelaksanaan} />
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Sekadar untuk perbandingan, seandainya pembagian kursi perolehan suara partai-partai pada Pemilu 1971 dilakukan dengan sistem kombinasi sebagaimana digunakan dalam Pemilu 1955, dengan mengabaikan stembus accoord 4 partai Islam yang mengikuti Pemilu 1971, hasilnya akan terlihat seperti pada tabel di bawah ini.
        </p>

        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Pembagian Kursi Hasil Pemilu 1971 Seandainya Menggunakan Sistem Kombinasi (hipotetis)
            </p>
        </div>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Sekadar untuk perbandingan, seandainya pembagian kursi perolehan suara partai-partai pada Pemilu 1971 dilakukan dengan sistem kombinasi sebagaimana digunakan dalam Pemilu 1955, dengan mengabaikan stembus accoord 4 partai Islam yang mengikuti Pemilu 1971, hasilnya akan terlihat seperti pada tabel di bawah ini.
        </p>
        <TableAdvanced headers={headersHasil} data={dataHasil} />

        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Catatan
            </p>
        </div>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Hasil pembagian pertama yang diperoleh partai-partai sebagaimana terlihat dalam lajur 4 (empat) sesuai dengan hasil bagi dengan kiesquotient di daerah pemilihan masing-masing. Sedangkan hasil pembagian kursi sisa pada lajur 6 (enam) merupakan hasil bagi sisa suara masing-masing partai dengan kiestquotient nasional 114.574 (7.561.901:66). Hasil pada lajur 8 (delapan) berdasarkan sisa suara terbesar atau terbanyak karena masih tersisa 7 kursi lagi.
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Dengan cara pembagian kursi seperti Pemilu 1955 itu, hanya Murba yang tidak mendapat kursi, karena pada pembagian kursi atas dasar sisa terbesar pun perolehan suara partai tersebut tidak mencukupi. Karena peringkat terbawah sisa suara terbesar adalah 65.666. PNI memperoleh kursi lebih banyak dari Parmusi, karena suaranya secara nasional di atas Parmusi.
        </p>
        
        
        
        

    </section>
  );
}