import Navbar from "../components/navbar";
import HeroModul from "../components/heroModul";
import Footer from "../components/footer";
import ModulSection from "../components/modulSection";

export default function ModulPembalajaran() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroModul />
      <ModulSection />
      <Footer />
    </div>
  );
}