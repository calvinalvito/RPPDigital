import Navbar from "../../components/navbar";
import SectionHeader from "../../components/sectionHeader";
import FotoBackground from "../../assets/Foto-Background.png"
import Footer from "../../components/footer";
import SejarahSection8 from "../../components/sejarah/2019Section";

export default function Sejarah8() {
  return (
    <>
    <Navbar />
      <SectionHeader
        title="Pemilihan Umum Tahun 2019"
        image={FotoBackground}
      />
      <SejarahSection8 />
      <Footer />
    </>
  );
}