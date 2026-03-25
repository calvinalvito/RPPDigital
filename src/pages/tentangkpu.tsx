import Navbar from "../components/navbar";
import SectionHeader from "../components/sectionHeader";
import FotoBackground from "../assets/Foto-Background.png"
import TabsSection from "../components/tabSection";
import Footer from "../components/footer";

export default function TentangKPU() {
  return (
    <>
    <Navbar />
      <SectionHeader
        title="Tentang KPU Kabupaten Blora"
        image={FotoBackground}
      />
      <TabsSection />
      <Footer />
    </>
  );
}