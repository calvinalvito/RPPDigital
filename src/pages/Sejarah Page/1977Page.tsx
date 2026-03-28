import Navbar from "../../components/navbar";
import SectionHeader from "../../components/sectionHeader";
import FotoBackground from "../../assets/Foto-Background.png"
import Footer from "../../components/footer";
import SejarahSection3 from "../../components/sejarah/1977Section";

export default function Sejarah3() {
  return (
    <>
    <Navbar />
      <SectionHeader
        title="Pemilihan Umum Tahun 1977-1997"
        image={FotoBackground}
      />
      <SejarahSection3 />
      <Footer />
    </>
  );
}