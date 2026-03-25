import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import TentangKPU from "./pages/tentangkpu";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentangkpu" element={<TentangKPU />} />
      </Routes>
    </BrowserRouter>
  );
}