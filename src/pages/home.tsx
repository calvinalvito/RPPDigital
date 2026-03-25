import Navbar from "../components/navbar";
import Hero from "../components/hero";
import FeatureSection from "../components/menuCard";
import StatisticSection from "../components/datahome";
import HistorySection from "../components/historySection";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <FeatureSection />
      <StatisticSection />
      <HistorySection />
      <Footer />
    </div>
  );
}