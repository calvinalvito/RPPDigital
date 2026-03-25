import Navbar from "../components/navbar";
import SectionHeader from "../components/sectionHeader";
import FotoBackground from "../assets/Foto-Background.png"
import Footer from "../components/footer";
import PDPBSection from "../components/pdpbsection";

export default function PDPB() {
  return (
    <>
    <Navbar />
      <SectionHeader
        title="Pemutakhiran Data Pemilih Berkelanjutan (PDPB)"
        image={FotoBackground}
      />
      <PDPBSection />
      <Footer />
    </>
  );
}