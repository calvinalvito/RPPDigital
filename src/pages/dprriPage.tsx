import Navbar from "../components/navbar";
import SectionHeader from "../components/sectionHeader";
import FotoBackground from "../assets/Foto-Background.png"
import Footer from "../components/footer";
import DPRRISection from "../components/statistik/dprri";

export default function DPRRI() {
  return (
    <>
    <Navbar />
      <SectionHeader
        title="DPR RI 2024"
        image={FotoBackground}
      />
      <DPRRISection />
      <Footer />
    </>
  );
}