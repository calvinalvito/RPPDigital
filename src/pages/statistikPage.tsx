import Navbar from "../components/navbar";
import HeroStatistik from "../components/heroStatistik";
import StatistikSection from "../components/statistikSection";
import Footer from "../components/footer";

export default function StatistikPage() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroStatistik />
      <StatistikSection />
      <Footer />
    </div>
  );
}