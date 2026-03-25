import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import TentangKPU from "./pages/tentangkpu";
import PDPB from "./pages/pdpb";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentangkpu" element={<TentangKPU />} />
        <Route path="/pdpb" element={<PDPB />} />
      </Routes>
    </BrowserRouter>
  );
}