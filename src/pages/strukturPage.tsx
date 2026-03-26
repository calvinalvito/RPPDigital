import Navbar from "../components/navbar";
import SectionHeader from "../components/sectionHeader";
import FotoBackground from "../assets/Foto-Background.png"
import Footer from "../components/footer";
import StrukturBlora from "../components/strukturSection";

export default function strukturKPU() {
  return (
    <>
    <Navbar />
      <SectionHeader
        title="Struktur Organisasi"
        image={FotoBackground}
      />
      <StrukturBlora />
      <Footer />
    </>
  );
}