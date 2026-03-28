import Navbar from "../components/navbar";
import HeroSejarah from "../components/heroSejarah";
import Footer from "../components/footer";
import TimelinePemilu from "../components/sejarahHome";
import JumlahPemilihChart from "../components/jumlahpemilihChart";

export default function sejarahPage() {
  return (
    <>
    <Navbar />
      <HeroSejarah />
      <TimelinePemilu />
      <JumlahPemilihChart />
      <Footer />
    </>
  );
}