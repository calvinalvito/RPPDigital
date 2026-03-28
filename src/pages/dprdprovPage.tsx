import Navbar from "../components/navbar";
import SectionHeader from "../components/sectionHeader";
import FotoBackground from "../assets/Foto-Background.png"
import Footer from "../components/footer";
import DPRDProvSection from "../components/statistik/dprdprov";

export default function DPRDProv() {
  return (
    <>
    <Navbar />
      <SectionHeader
        title="DPRD Provinsi Jawa Tengah 2024"
        image={FotoBackground}
      />
      <DPRDProvSection />
      <Footer />
    </>
  );
}