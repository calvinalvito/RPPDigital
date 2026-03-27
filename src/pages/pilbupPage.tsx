import Navbar from "../components/navbar";
import SectionHeader from "../components/sectionHeader";
import FotoBackground from "../assets/Foto-Background.png"
import Footer from "../components/footer";
import PilbupSection from "../components/statistik/pilbup";

export default function PilbupPage() {
  return (
    <>
    <Navbar />
      <SectionHeader
        title="Pilbup 2024"
        image={FotoBackground}
      />
      <PilbupSection />
      <Footer />
    </>
  );
}