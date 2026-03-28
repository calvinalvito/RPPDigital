import Navbar from "../components/navbar";
import SectionHeader from "../components/sectionHeader";
import FotoBackground from "../assets/Foto-Background.png"
import Footer from "../components/footer";
import DPDRIPROVSection from "../components/statistik/dpdRIProv";

export default function DPDRIProv() {
  return (
    <>
    <Navbar />
      <SectionHeader
        title="DPD RI Provinsi Jawa Tengah 2024"
        image={FotoBackground}
      />
      <DPDRIPROVSection />
      <Footer />
    </>
  );
}