import Navbar from "../components/navbar";
import SectionHeader from "../components/sectionHeader";
import FotoBackground from "../assets/Foto-Background.png"
import Footer from "../components/footer";
import PilpresSection from "../components/statistik/pilpres";

export default function PilpresPage() {
  return (
    <>
    <Navbar />
      <SectionHeader
        title="Pilpres 2024"
        image={FotoBackground}
      />
      <PilpresSection />
      <Footer />
    </>
  );
}