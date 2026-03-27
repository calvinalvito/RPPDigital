import Navbar from "../components/navbar";
import SectionHeader from "../components/sectionHeader";
import FotoBackground from "../assets/Foto-Background.png"
import Footer from "../components/footer";
import PilgubSection from "../components/statistik/pilgub";

export default function PilgubPage() {
  return (
    <>
    <Navbar />
      <SectionHeader
        title="Pilgub 2024"
        image={FotoBackground}
      />
      <PilgubSection />
      <Footer />
    </>
  );
}