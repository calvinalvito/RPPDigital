import Navbar from "../../components/navbar";
import SectionHeader from "../../components/sectionHeader";
import FotoBackground from "../../assets/Foto-Background.png"
import Footer from "../../components/footer";
import TahapanSection from "../../components/modulTahapan";

export default function TahapanPenyelenggaraan() {
  return (
    <>
    <Navbar />
      <SectionHeader
        title="Pemutakhiran Data Pemilih Berkelanjutan (PDPB)"
        image={FotoBackground}
      />
      <TahapanSection />
      <Footer />
    </>
  );
}