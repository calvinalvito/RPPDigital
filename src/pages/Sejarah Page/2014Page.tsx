import Navbar from "../../components/navbar";
import SectionHeader from "../../components/sectionHeader";
import FotoBackground from "../../assets/Foto-Background.png"
import Footer from "../../components/footer";
import SejarahSection7 from "../../components/sejarah/2014Section";

export default function Sejarah7() {
  return (
    <>
    <Navbar />
      <SectionHeader
        title="Pemilihan Umum Tahun 2014"
        image={FotoBackground}
      />
      <SejarahSection7 />
      <Footer />
    </>
  );
}