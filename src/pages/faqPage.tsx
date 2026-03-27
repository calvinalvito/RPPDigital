import Navbar from "../components/navbar";
import FAQHeader from "../components/faqHeader.tsx";
import Footer from "../components/footer";
import TabFAQ from "../components/tabFAQ.tsx";

export default function FAQ() {
  return (
    <>
    <Navbar />
      <FAQHeader />
      <TabFAQ />
      <Footer />
    </>
  );
}