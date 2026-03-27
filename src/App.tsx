import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import TentangKPU from "./pages/tentangkpu";
import PDPB from "./pages/pdpb";
import StrukturKPU from "./pages/strukturPage";
import ModulPembalajaran from "./pages/modulPembelajaran";
import TahapanPenyelenggaraan from "./pages/Modul Pembelajaran/tahapanPenyelenggaraan";
import SistemPemiluDunia from "./pages/Modul Pembelajaran/sistemPemilu";
import PesertaPemilu from "./pages/Modul Pembelajaran/pesertaPemilu";
import SejarahPage from "./pages/sejarahPage";
import StatistikPage from "./pages/statistikPage";
import FAQ from "./pages/faqPage";
import PilpresPage from "./pages/pilpresPage";
import PilbupPage from "./pages/pilbupPage";
import PilgubPage from "./pages/pilgubPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentangkpu" element={<TentangKPU />} />
        <Route path="/pdpb" element={<PDPB />} />
        <Route path="/statistik" element={<StatistikPage />} />
        <Route path="/statistik/pilpres-2024" element={<PilpresPage />} />
        <Route path="/statistik/pilbup-2024" element={<PilbupPage />} />
        <Route path="/statistik/pilgub-2024" element={<PilgubPage />} />
        <Route path="/sejarah" element={<SejarahPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/strukturkpu" element={<StrukturKPU />} />
        <Route path="/modul-pembelajaran" element={<ModulPembalajaran />} />
        <Route path="/modul-pembelajaran/Tahapan-Penyelenggaraan" element={<TahapanPenyelenggaraan />} />
        <Route path="/modul-pembelajaran/Sistem-Pemilu-Dunia" element={<SistemPemiluDunia />} />
        <Route path="/modul-pembelajaran/Peserta-Pemilu" element={<PesertaPemilu />} />
      </Routes>
    </BrowserRouter>
  );
}