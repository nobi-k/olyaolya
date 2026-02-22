import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "@/pages/Home";
import Love from "@/pages/Love";
import CaseStudy from "@/pages/CaseStudy";
import Resume from "@/pages/Resume";
import Cases from "@/pages/Cases";
import { Navbar } from "@/components/Navbar";

function NavbarWrapper() {
  const location = useLocation();
  if (location.pathname === "/love") return null;
  return <Navbar />;
}

export default function App() {
  return (
    <Router>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded-lg focus:outline-none"
      >
        Перейти к основному содержимому
      </a>
      <NavbarWrapper />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/love" element={<Love />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/other" element={<div className="text-center text-xl">Other Page - Coming Soon</div>} />
      </Routes>
    </Router>
  );
}
