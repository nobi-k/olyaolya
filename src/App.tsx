import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import CaseStudy from "@/pages/CaseStudy";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/other" element={<div className="text-center text-xl">Other Page - Coming Soon</div>} />
      </Routes>
    </Router>
  );
}
