import TableAdvanced from "../tableAdvance";
import FotoMegawati from "../../assets/FotoCalon2004/Megawati.png"
import FotoPrabowo from "../../assets/FotoCalon2004/Prabowo.png"
import FotoSBY from "../../assets/FotoCalon2004/SBY.png"
import FotoBoediono from "../../assets/FotoCalon2004/Boediono.png"
import FotoJK from "../../assets/FotoCalon2004/JK.png"
import FotoWiranto from "../../assets/FotoCalon2004/Wiranto.png"

export default function SejarahSection6() {
    const headersPartai2004 = [
    [
        { content: "No Urut", className: "bg-[#c02f31] text-white text-center" },
        { content: "Partai", className: "bg-[#c02f31] text-white text-center" },
    ],
    ];
    const dataPartai2004 = [
    [{ content: "1" }, { content: "Partai Hati Nurani Rakyat" }],
    [{ content: "2" }, { content: "Partai Karya Peduli Bangsa" }],
    [{ content: "3" }, { content: "Partai Pengusaha dan Pekerja Indonesia" }],
    [{ content: "4" }, { content: "Partai Peduli Rakyat Nasional" }],
    [{ content: "5" }, { content: "Partai Gerakan Indonesia Raya" }],
    [{ content: "6" }, { content: "Partai Barisan Nasional" }],
    [{ content: "7" }, { content: "Partai Keadilan dan Persatuan Indonesia" }],
    [{ content: "8" }, { content: "Partai Keadilan Sejahtera" }],
    [{ content: "9" }, { content: "Partai Amanat Nasional" }],
    [{ content: "10" }, { content: "Partai Perjuangan Indonesia Baru" }],
    [{ content: "11" }, { content: "Partai Kedaulatan" }],
    [{ content: "12" }, { content: "Partai Persatuan Daerah" }],
    [{ content: "13" }, { content: "Partai Kebangkitan Bangsa" }],
    [{ content: "14" }, { content: "Partai Pemuda Indonesia" }],
    [{ content: "15" }, { content: "Partai Nasional Indonesia Marhaenisme" }],
    [{ content: "16" }, { content: "Partai Demokrasi Pembaruan" }],
    [{ content: "17" }, { content: "Partai Karya Perjuangan" }],
    [{ content: "18" }, { content: "Partai Matahari Bangsa" }],
    [{ content: "19" }, { content: "Partai Penegak Demokrasi Indonesia" }],
    [{ content: "20" }, { content: "Partai Demokrasi Kebangsaan" }],
    [{ content: "21" }, { content: "Partai Republika Nusantara" }],
    [{ content: "22" }, { content: "Partai Pelopor" }],
    [{ content: "23" }, { content: "Partai Golongan Karya" }],
    [{ content: "24" }, { content: "Partai Persatuan Pembangunan" }],
    [{ content: "25" }, { content: "Partai Damai Sejahtera" }],
    [{ content: "26" }, { content: "Partai Nasional Benteng Kerakyatan Indonesia" }],
    [{ content: "27" }, { content: "Partai Bulan Bintang" }],
    [{ content: "28" }, { content: "Partai Demokrasi Indonesia Perjuangan" }],
    [{ content: "29" }, { content: "Partai Bintang Reformasi" }],
    [{ content: "30" }, { content: "Partai Patriot" }],
    [{ content: "31" }, { content: "Partai Demokrat" }],
    [{ content: "32" }, { content: "Partai Kasih Demokrasi Indonesia" }],
    [{ content: "33" }, { content: "Partai Indonesia Sejahtera" }],
    [{ content: "34" }, { content: "Partai Kebangkitan Nasional Ulama" }],
    [{ content: "35" }, { content: "Partai Merdeka" }],
    [{ content: "36" }, { content: "Partai Persatuan Nahdlatul Ummah Indonesia" }],
    [{ content: "37" }, { content: "Partai Serikat Indonesia" }],
    [{ content: "38" }, { content: "Partai Buruh" }],
    ];
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-20 py-10 space-y-4">
        {/* HEADER */}
        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Dasar Hukum Pemilu Tahun 2004
            </p>
        </div>

        {/* LIST */}
        <ol className="list-decimal pl-5 space-y-3">
            <li>UU Nomor 17 Tahun 2009 Tentang Penetapan Peraturan Pemerintah Pengganti Undang-Undang Nomor 1 Tahun 2009 tentang Perubahan Atas Undang-Undang Nomor 10 Tahun 2008 tentang Pemilihan Umum Anggota Dewan Perwakilan Rakyat, Dewan Perwakilan Daerah, dan Dewan Perwakilan Rakyat Daerah Menjadi Undang-Undang</li>
            <li>UU Nomor 42 Tahun 2008 Tentang Pemilihan Umum Presiden Dan Wakil Presiden.</li>
            <li>UU Nomor 10 Tahun 2008 Tentang Pemilihan Umum Anggota Dewan Perwakilan Rakyat, Dewan Perwakilan Daerah, dan Dewan Perwakilan Rakyat Daerah.</li>
            <li>UU Nomor 22 Tahun 2007 Tentang Penyelenggara Pemilihan Umum</li>
        </ol>

        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Sistem Pemilu
            </p>
        </div>
        <ol className="list-decimal pl-5 space-y-3">
            <li>Ada 3 macam Pemilu, yaitu Pemilu DPR, DPD dan DPRD, Pemilu Presiden dan Wakil Presiden, serta Pemilu Kepala Daerah dan Wakil Kepala Daerah.</li>
            <li>Pemilu DPR dan DPRD menggunakan sistem proporsional terbuka,</li>
            <li>Dewan Perwakilan Daerah (DPD) menggunakan sistem distrik berwakil banyak.</li>
            <li>Presiden dan Wakil Presiden dipilih secara langsung oleh rakyat melalui Pemilu Presiden dan Wakil Presiden.</li>
            <li>Kepala Daerah dan Wakil Kepala Daerah tidak lagi diangkat, tetapi dipilih secara langsung oleh rakyat melalui Pemilu Kepala Daerah dan Wakil Kepala Daerah.</li>
        </ol>
        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Badan Penyelenggara Pemilu
            </p>
        </div>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Pemilu 2009 dilaksanakan oleh Komisi Pemilihan Umum (KPU) sebagai penyelenggaraan pemilu yang bersifat nasional, tetap, dan mandiri. Organisasi penyelenggara mulai dari pusat KPU, KPU Provinsi, KPU Kabupaten/Kota, PPK, PPS, KPPS, PPLN, PPSLN, KPPSLN yang keanggotaannya terdiri dari perwakilan akademisi dan tokoh-tokoh masyarakat. Pada Pemilu 2009 ini juga pertama kali Panitia Pengawas Pemilu (Panwaslu) bertansformasi menjadi Badan Pengawas Pemilu (Bawaslu) dan kode etik masih bernama Dewan Kehormatan Komisi Pemilihan Umum (DK KPU).
        </p>
        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Pelaksanaan Pemilihan Umum
            </p>
        </div>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Pemilihan Umum Anggota Dewan Perwakilan Rakyat, Dewan Perwakilan Daerah, dan Dewan Perwakilan Rakyat Daerah 2009 (biasa disingkat Pemilu Legislatif 2009 atau Pileg 2009) diselenggarakan untuk memilih 560 anggota Dewan Perwakilan Rakyat (DPR), 132 anggota Dewan Perwakilan Daerah (DPD), serta anggota Dewan Perwakilan Rakyat Daerah (DPRD Provinsi dan DPRD Kabupaten/Kota) periode 2009-2014. Pemungutan suara diselenggarakan secara serentak di hampir seluruh wilayah Indonesia pada tanggal 9 April 2009, dengan azas langsung, umum, bebas, rahasia dan jujur dan adil.
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Pemilihan Umum Anggota DPR dilaksanakan dengan sistem proporsional terbuka yang perhitungannya didasarkan pada sejumlah daerah pemilihan, dengan peserta pemilu adalah partai politik. Pemilihan umum ini adalah yang pertama kalinya dilakukan dengan penetapan calon terpilih berdasarkan perolehan suara terbanyak, bukan berdasarkan nomor urut (pemilih memilih calon anggota DPR, bukan partai politik).
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Sedangkan Pemilihan Umum Presiden dan Wakil Presiden Republik Indonesia Tahun 2009 (biasa disingkat Pilpres 2009) diselenggarakan untuk memilih Presiden dan Wakil Presiden Indonesia periode 2009-2014. Pemungutan suara diselenggarakan pada 8 Juli 2009. Berdasarkan Undang-undang Nomor 42 Tahun 2008, pengajuan pasangan calon presiden dan wakil presiden diusulkan oleh partai politik atau gabungan partai politik peserta Pemilihan Umum Anggota Dewan Perwakilan Rakyat 2009 yang memperoleh minimal 20% dari jumlah kursi DPR atau 25% dari jumlah suara sah nasional.
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Pemilihan umum kepala daerah dan wakil kepala daerah, atau seringkali disebut pilkada, adalah pemilihan umum untuk memilih kepala daerah dan wakil kepala daerah secara langsung di Indonesia oleh penduduk daerah setempat yang memenuhi syarat. Kepala daerah dan wakil kepala daerah adalah
        </p>
        <ol className="list-decimal pl-5 space-y-3">
            <li>Gubernur dan wakil gubernur untuk provinsi</li>
            <li>Bupati dan wakil bupati untuk kabupaten</li>
            <li>Walikota dan wakil walikota untuk kota</li>
        </ol>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Sebelumnya, kepala daerah dan wakil kepala daerah dipilih oleh Dewan Perwakilan Rakyat Daerah (DPRD). Dasar hukum penyelenggaraan pilkada adalah Undang-Undang Nomor 32 Tahun 2004 tentang Pemerintahan Daerah. Dalam undang-undang ini, pilkada (pemilihan kepala daerah dan wakil kepala daerah) belum dimasukkan dalam rezim pemilihan umum (pemilu). Pilkada pertama kali diselenggarakan pada bulan Juni 2005.
        </p>
        <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
        Pilkada diselenggarakan oleh Komisi Pemilihan Umum (KPU) Provinsi dan KPU Kabupaten/Kota dengan diawasi oleh Panitia Pengawas Pemilihan Umum (Panwaslu) Provinsi dan Panwaslu Kabupaten/Kota. Khusus di Nanggroe Aceh Darussalam, Pilkada diselenggarakan oleh Komisi Independen Pemilihan (KIP) dengan diawasi oleh Panitia Pengawas Pemilihan Aceh (Panwaslih Aceh).
        </p>
        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Peserta Pemilu DPR, DPD, dan DPRD Tahun 2009
            </p>
        </div>
        <TableAdvanced headers={headersPartai2004} data={dataPartai2004} />
        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Berikut daftar 6 partai politik lokal Aceh tersebut beserta nomor urutnya
            </p>
        </div>
        <ol className="list-decimal pl-5 space-y-3">
            <li>Partai Aceh Aman Seujahtra</li>
            <li> Partai Daulat Aceh</li>
            <li> Partai Suara Independen Rakyat Aceh</li>
            <li>  Partai Rakyat Aceh</li>
            <li>  Partai Aceh</li>
            <li>  Partai Bersatu Aceh</li>
        </ol>
        <div className="w-fit px-4 py-3 pr-20 bg-linear-to-r from-[#c02f31] to-[#5a1617]">
            <p className="text-lg md:text-xl font-bold text-white">
            Peserta Pemilu Presiden dan wakil Presiden 2009
            </p>
        </div>
        {/* LIST PASLON */}
        <div className="space-y-8">

            {/* PASLON 1 */}
            <div className="gap-4 items-start">
            
            {/* FOTO */}
            <div className="flex gap-3">
                <img src={FotoMegawati} className="w-20 h-24 object-cover " />
                <img src={FotoPrabowo} className="w-20 h-24 object-cover " />
            </div>

            {/* TEXT */}
            <div>
                <p className="font-semibold text-lg">
                Megawati Soekarnoputri dan Prabowo Subianto
                </p>
                <p className="text-sm md:text-base text-gray-700">
                Didukung oleh PDIP, Partai Gerindra, PNI Marhaenisme, Partai Buruh,
                Pakar Pangan, Partai Merdeka, Partai Kedaulatan, PSI, PPNUI
                </p>
            </div>

            </div>

            {/* PASLON 2 */}
            <div className="gap-4 items-start">
            
            <div className="flex gap-3">
                <img src={FotoSBY} className="w-20 h-24 object-cover " />
                <img src={FotoBoediono} className="w-20 h-24 object-cover " />
            </div>

            <div>
                <p className="font-semibold text-lg">
                Susilo Bambang Yudhoyono dan Boediono
                </p>
                <p className="text-sm md:text-base text-gray-700">
                Didukung oleh Partai Demokrat, PKS, PAN, PPP, PKB, PBB, PDS, PKPB,
                PBR, PPRN, PKPI, PDP, PPPI, Partai Republikan, Partai Patriot,
                PNBKI, PMB, PPI, Partai Pelopor, PKDI, PIS, Partai PIB, Partai PDI
                </p>
            </div>

            </div>

            {/* PASLON 3 */}
            <div className="gap-4 items-start">
            
            <div className="flex gap-3">
                <img src={FotoJK} className="w-20 h-24 object-cover " />
                <img src={FotoWiranto} className="w-20 h-24 object-cover " />
            </div>

            <div>
                <p className="font-semibold text-lg">
                Muhammad Jusuf Kalla dan Wiranto
                </p>
                <p className="text-sm md:text-base text-gray-700">
                Didukung oleh Partai Golkar, Partai Hanura
                </p>
            </div>

            </div>

        </div>
    </section>
  );
}