import TableAdvanced from "../tableAdvance";


export default function SejarahSection7() {
    const headersPartai = [
    [
        { content: "No Urut", className: "bg-[#c02f31] text-white text-center" },
        { content: "Partai", className: "bg-[#c02f31] text-white text-center" },
    ],
    ];
    const dataPartai = [
    [{ content: "1" }, { content: "Partai NasDem (NasDem)" }],
    [{ content: "2" }, { content: "Partai Kebangkitan Bangsa (PKB)" }],
    [{ content: "3" }, { content: "Partai Keadilan Sejahtera (PKS)" }],
    [{ content: "4" }, { content: "Partai Demokrasi Indonesia Perjuangan (PDI-P)" }],
    [{ content: "5" }, { content: "Partai Golongan Karya (Golkar)" }],
    [{ content: "6" }, { content: "Partai Gerakan Indonesia Raya (Gerindra)" }],
    [{ content: "7" }, { content: "Partai Demokrat (Demokrat)" }],
    [{ content: "8" }, { content: "Partai Amanat Nasional (PAN)" }],
    [{ content: "9" }, { content: "Partai Persatuan Pembangunan (PPP)" }],
    [{ content: "10" }, { content: "Partai Hati Nurani Rakyat (Hanura)" }],
    [{ content: "14" }, { content: "Partai Bulan Bintang (PBB)" }],
    [{ content: "15" }, { content: "Partai Keadilan dan Persatuan Indonesia (PKPI)" }],
    ];

    const dataPartaiAceh = [
    [{ content: "11" }, { content: "Partai Damai Aceh" }],
    [{ content: "12" }, { content: "Partai Nasional Aceh" }],
    [{ content: "13" }, { content: "Partai Aceh" }],
    ];
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-20 py-10 space-y-4">
        {/* HEADER */}
        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Dasar Hukum Pemilu Tahun 2014
            </p>
        </div>

        {/* LIST */}
        <ol className="list-decimal pl-5 space-y-3">
            <li>UU Nomor 8 Tahun 2012 Tentang Pemilihan Umum Anggota Dewan Perwakilan Rakyat, Dewan Perwakilan Daerah, dan Dewan Perwakilan Rakyat Daerah.</li>
            <li>UU Nomor 15 Tahun 2011 Tentang Pelenggara Pemilihan Umum.</li>
        </ol>

        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
           Sistem Pemilu
            </p>
        </div>
        <ol className="list-decimal pl-5 space-y-3">
            <li>Ada 3 macam Pemilu, yaitu Pemilu DPR, DPD dan DPRD, Pemilu Presiden dan Wakil Presiden, serta Pemilu Kepala Daerah dan Wakil Kepala Daerah.</li>
            <li>Pemilu DPR dan DPRD menggunakan sistem proporsional terbuka (suara terbanyak)</li>
            <li>Dewan Perwakilan Daerah (DPD) menggunakan sistem distrik berwakil banyak</li>
            <li>Presiden dan Wakil Presiden dipilih secara langsung oleh rakyat melalui Pemilu Presiden dan Wakil Presiden.</li>
            <li>Kepala Daerah dan Wakil Kepala Daerah dipilih secara langsung oleh rakyat melalui Pemilu Kepala Daerah dan Wakil Kepala Daerah</li> 
        </ol>
        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
           Badan Penyelenggara Pemilu
            </p>
        </div>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Organisasi penyelenggara mulai dari pusat Komisi Pemilihan Umum (KPU), KPU Provinsi, KPU Kabupaten/Kota, PPK, PPS, KPPS, PPLN, PPSLN, KPPSLN yang keanggotaannya terdiri dari perwakilan akademisi dan tokoh-tokoh masyarakat. Pada Pada Pemilu 2014 ini juga pertama kali Dewan Kehormatan Komisi Pemilihan Umum (DK KPU) bertransformasi menjadi Dewan Kehormatan Penyelenggara Pemilu (DKPP) sedangkan pengawasan tetap oleh lembaga Badan Pengawas Pemilu (Bawaslu).
        </p>

        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
           Pelaksanaan Pemilihan Umum
            </p>
        </div>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Pemilihan Umum Anggota Dewan Perwakilan Rakyat (DPR), Dewan Perwakilan Daerah (DPD), dan Dewan Perwakilan Rakyat Daerah (DPRD) Tahun 2014 diselenggarakan pada tanggal 9 April 2014 untuk memilih 560 anggota DPR, 132 anggota, serta anggota DPRD Provinsi dan DPRD Kabupaten/Kota serentak di seluruh Indonesia periode 2014-2019. Khusus untuk warga negara Indonesia di luar negeri, hari pemilihan ditetapkan oleh panitia pemilihan setempat di masing-masing negara domisili pemilih sebelum tanggal 9 April 2014. Pemilihan di luar negeri hanya terbatas untuk anggota DPR di daerah pemilihan DKI Jakarta II, dan tidak ada pemilihan anggota DPD.
        </p>
        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
           Peserta Pemilu DPR, DPD, dan DPRD Tahun 2009
            </p>
        </div>
        <TableAdvanced
        headers={headersPartai}
        data={dataPartai}
        />
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Peserta pemilihan umum anggota DPRD adalah partai politik yang sama dengan peserta pemilihan umum anggota DPR, kecuali khusus untuk Provinsi Aceh ditambah dengan partai politik lokal sesuai dengan Undang-Undang Pemerintahan Aceh dan Nota Kesepahaman Helsinki 2005. Berikut adalah daftar 3 partai politik lokal yang ditetapkan oleh Komite Independen Pemilihan Aceh sebagai peserta pemilihan umum anggota DPRD di Aceh beserta nomor urutnya.
        </p>
        <TableAdvanced
        headers={headersPartai}
        data={dataPartaiAceh}
        />
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Pada Pemilihan Umum Presiden dan Wakil Presiden Tahun 2014 ini, Presiden petahana Susilo Bambang Yudhoyono tidak dapat mencalonkan kembali, mengingat sudah menjabat selama dua periode. Sesuai aturan perundangan, jabatan presiden dan wakil presiden paling banyak dua periode, sedangkan partai pengusung adalah partai yang menguasai lebih dari 20 persen kursi di DPR atau memiliki suara 25 persen suara dapat mengajukan pasangan calon.
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Pemilihan Umum Presiden dan Wakil Presiden 2014 ini diikuti oleh dua pasang calon Presiden dan Wakil Presiden yaitu Prabowo Subianto yang berpasangan dengan Hatta Rajasa dan Joko Widodo yang berpasangan dengan Jusuf Kalla. Pada tanggal 31 Mei 2014, KPU menetapkan 2 pasangan calon Presiden dan Wakil Presiden tersebut, serta melakukan pengundian nomor urut pada 1 Juni 2014. Proses pemungutan suara dilaksanakan pada tanggal 9 Juli 2014
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Pemilihan presiden dan wakil presiden ini akhirnya dimenangi oleh pasangan Joko Widodo-Jusuf Kalla dengan memperoleh suara sebesar 53,15%, mengalahkan pasangan Prabowo Subianto-Hatta Rajasa yang memperoleh suara sebesar 46,85% sesuai dengan keputusan KPU RI pada 22 Juli 2014. Presiden dan Wakil Presiden terpilih dilantik pada tanggal 20 Oktober 2014, menggantikan Susilo Bambang Yudhoyono.
        </p>
    </section>
  );
}