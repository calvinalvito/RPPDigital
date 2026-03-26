import Navbar from "../../components/navbar";
import SectionHeader from "../../components/sectionHeader";
import FotoBackground from "../../assets/Foto-Background.png"
import Footer from "../../components/footer";
import SistemPemilu from "../../components/sistemPemilu";

export default function SistemPemiluDunia() {
  return (
    <>
    <Navbar />
      <SectionHeader
        title="Sistem Pemilu Umum di Dunia"
        image={FotoBackground}
      />
      <SistemPemilu />
      <Footer />
    </>
  );
}