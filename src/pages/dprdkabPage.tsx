import Navbar from "../components/navbar";
import SectionHeader from "../components/sectionHeader";
import FotoBackground from "../assets/Foto-Background.png"
import Footer from "../components/footer";
import DPRDKABSection from "../components/statistik/dprdkab";

export default function DPRDKAB() {
  return (
    <>
    <Navbar />
      <SectionHeader
        title="DPRD Kabupaten Blora 2024"
        image={FotoBackground}
      />
      <DPRDKABSection />
      <Footer />
    </>
  );
}