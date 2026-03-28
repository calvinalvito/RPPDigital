import Navbar from "../../components/navbar";
import SectionHeader from "../../components/sectionHeader";
import FotoBackground from "../../assets/Foto-Background.png"
import Footer from "../../components/footer";
import SejarahSection2 from "../../components/sejarah/1971Section";

export default function Sejarah2() {
  return (
    <>
    <Navbar />
      <SectionHeader
        title="Pemilihan Umum Tahun 1971"
        image={FotoBackground}
      />
      <SejarahSection2 />
      <Footer />
    </>
  );
}