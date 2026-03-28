import Navbar from "../../components/navbar";
import SectionHeader from "../../components/sectionHeader";
import FotoBackground from "../../assets/Foto-Background.png"
import Footer from "../../components/footer";
import SejarahSection5 from "../../components/sejarah/2004Section";

export default function Sejarah5() {
  return (
    <>
    <Navbar />
      <SectionHeader
        title="Pemilihan Umum Tahun 2004"
        image={FotoBackground}
      />
      <SejarahSection5 />
      <Footer />
    </>
  );
}