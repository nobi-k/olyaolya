import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "@/pages/Home";
import Love from "@/pages/Love";
import CaseStudy from "@/pages/CaseStudy";
import Resume from "@/pages/Resume";
import Cases from "@/pages/Cases";

export default function App() {
  useEffect(() => {
    const isEditableTarget = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return false;
      const el = target.closest("input, textarea, select, [contenteditable='true'], [contenteditable='plaintext-only']");
      return Boolean(el);
    };

    const onContextMenu = (e: MouseEvent) => {
      if (!isEditableTarget(e.target)) e.preventDefault();
    };

    const onCopy = (e: ClipboardEvent) => {
      if (!isEditableTarget(e.target)) e.preventDefault();
    };

    const onCut = (e: ClipboardEvent) => {
      if (!isEditableTarget(e.target)) e.preventDefault();
    };

    const onSelectStart = (e: Event) => {
      if (!isEditableTarget(e.target)) e.preventDefault();
    };

    const onDragStart = (e: DragEvent) => {
      if (!isEditableTarget(e.target)) e.preventDefault();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (isEditableTarget(e.target)) return;

      if (e.key === "F12") {
        e.preventDefault();
        return;
      }

      const ctrlOrMeta = e.ctrlKey || e.metaKey;
      if (!ctrlOrMeta) return;

      const key = e.key.toLowerCase();
      if (["c", "x", "s", "p", "u", "a"].includes(key)) {
        e.preventDefault();
        return;
      }

      if (e.shiftKey && ["i", "j", "c"].includes(key)) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("copy", onCopy);
    document.addEventListener("cut", onCut);
    document.addEventListener("selectstart", onSelectStart);
    document.addEventListener("dragstart", onDragStart);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("copy", onCopy);
      document.removeEventListener("cut", onCut);
      document.removeEventListener("selectstart", onSelectStart);
      document.removeEventListener("dragstart", onDragStart);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <Router>
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
