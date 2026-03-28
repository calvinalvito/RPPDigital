import Navbar from "../../components/navbar";
import SectionHeader from "../../components/sectionHeader";
import FotoBackground from "../../assets/Foto-Background.png"
import Footer from "../../components/footer";
import SejarahSection4 from "../../components/sejarah/1999Section";

export default function Sejarah4() {
  return (
    <>
    <Navbar />
      <SectionHeader
        title="Pemilihan Umum Tahun 1999"
        image={FotoBackground}
      />
      <SejarahSection4 />
      <Footer />
    </>
  );
}