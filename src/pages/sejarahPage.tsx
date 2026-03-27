import Navbar from "../components/navbar";
import SectionHeader from "../components/sectionHeader";
import FotoBackground from "../assets/Foto-Background.png"
import Footer from "../components/footer";
import TimelinePemilu from "../components/sejarahHome";

export default function sejarahPage() {
  return (
    <>
    <Navbar />
      <SectionHeader
        title="Struktur Organisasi"
        image={FotoBackground}
      />
      <TimelinePemilu />
      <Footer />
    </>
  );
}