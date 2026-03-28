import Navbar from "../../components/navbar";
import SectionHeader from "../../components/sectionHeader";
import FotoBackground from "../../assets/Foto-Background.png"
import Footer from "../../components/footer";
import SejarahSection6 from "../../components/sejarah/2009Section";

export default function Sejarah6() {
  return (
    <>
    <Navbar />
      <SectionHeader
        title="Pemilihan Umum Tahun 2009"
        image={FotoBackground}
      />
      <SejarahSection6 />
      <Footer />
    </>
  );
}