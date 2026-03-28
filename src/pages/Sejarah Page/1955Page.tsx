import Navbar from "../../components/navbar";
import SectionHeader from "../../components/sectionHeader";
import FotoBackground from "../../assets/Foto-Background.png"
import Footer from "../../components/footer";
import SejarahSection1 from "../../components/sejarah/1955Section";

export default function Sejarah1() {
  return (
    <>
    <Navbar />
      <SectionHeader
        title="Pemilihan Umum Tahun 1955"
        image={FotoBackground}
      />
      <SejarahSection1 />
      <Footer />
    </>
  );
}