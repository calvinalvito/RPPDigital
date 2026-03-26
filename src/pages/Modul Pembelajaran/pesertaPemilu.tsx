import Navbar from "../../components/navbar";
import SectionHeader from "../../components/sectionHeader";
import FotoBackground from "../../assets/Foto-Background.png"
import Footer from "../../components/footer";
import PesertaPemiluIndo from "../../components/psesertaPemilu";

export default function PesertaPemilu() {
  return (
    <>
    <Navbar />
      <SectionHeader
        title="Peserta Pemilu"
        image={FotoBackground}
      />
      <PesertaPemiluIndo />
      <Footer />
    </>
  );
}