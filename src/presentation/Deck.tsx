import { useCallback, useEffect, useRef, useState } from "react";
import { ScaledSlide } from "./ScaledSlide";
import { slideComponents } from "./slides/Slides";
import { slides as slideMeta } from "@/data/deck";

const TOTAL = slideComponents.length;

function readSlideFromUrl(): number {
  if (typeof window === "undefined") return 0;
  const sp = new URLSearchParams(window.location.search);
  const n = parseInt(sp.get("slide") || "1", 10);
  if (Number.isNaN(n)) return 0;
  return Math.max(0, Math.min(TOTAL - 1, n - 1));
}

export function Deck() {
  const [index, setIndex] = useState(0);
  const [showGrid, setShowGrid] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const hideTimer = useRef<number | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  // Initial URL sync
  useEffect(() => {
    setIndex(readSlideFromUrl());
    const onPop = () => setIndex(readSlideFromUrl());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // URL update
  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    sp.set("slide", String(index + 1));
    window.history.replaceState(null, "", `${window.location.pathname}?${sp.toString()}`);
    document.title = `${index + 1}/${TOTAL} — ${slideMeta[index].title} · iMissive × stc`;
  }, [index]);

  const go = useCallback((next: number) => {
    setIndex((cur) => {
      const clamped = Math.max(0, Math.min(TOTAL - 1, next));
      return clamped === cur ? cur : clamped;
    });
  }, []);
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  // Activity → show controls and auto-hide
  const bumpActivity = useCallback(() => {
    setControlsVisible(true);
    if (hideTimer.current) window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => setControlsVisible(false), 2500);
  }, []);
  useEffect(() => {
    bumpActivity();
    return () => {
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
    };
  }, [bumpActivity]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      bumpActivity();
      if (showGrid) {
        if (e.key === "Escape" || e.key.toLowerCase() === "g") { setShowGrid(false); e.preventDefault(); }
        return;
      }
      switch (e.key) {
        case "ArrowRight":
        case "PageDown":
        case " ": next(); e.preventDefault(); break;
        case "ArrowLeft":
        case "PageUp": prev(); e.preventDefault(); break;
        case "Home": go(0); break;
        case "End": go(TOTAL - 1); break;
        case "Escape":
          if (document.fullscreenElement) document.exitFullscreen();
          if (showNotes) setShowNotes(false);
          break;
        case "f": case "F": toggleFullscreen(); break;
        case "g": case "G": setShowGrid(true); break;
        case "n": case "N": setShowNotes((v) => !v); break;
        case "p": case "P": if (e.metaKey || e.ctrlKey) { /* native print */ } else window.print(); break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, go, bumpActivity, showGrid, showNotes]);

  // Fullscreen state sync
  useEffect(() => {
    const onFs = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) rootRef.current?.requestFullscreen?.();
    else document.exitFullscreen?.();
  };

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next(); else prev();
    }
    touchStart.current = null;
  };

  const Current = slideComponents[index];

  return (
    <div
      ref={rootRef}
      onMouseMove={bumpActivity}
      onTouchStart={(e) => { bumpActivity(); onTouchStart(e); }}
      onTouchEnd={onTouchEnd}
      style={{ position: "fixed", inset: 0, background: "#0a0a0a", overflow: "hidden", cursor: controlsVisible ? "default" : "none" }}
    >
      <div style={{ position: "absolute", inset: 0 }}>
        <ScaledSlide>
          <Current />
        </ScaledSlide>
      </div>

      {/* Controls */}
      <div
        className="no-print"
        style={{
          position: "absolute", left: 0, right: 0, bottom: 0,
          display: "flex", justifyContent: "center", padding: 24,
          opacity: controlsVisible ? 1 : 0, transition: "opacity 220ms ease",
          pointerEvents: controlsVisible ? "auto" : "none",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", borderRadius: 8, background: "rgba(20,18,24,0.85)", backdropFilter: "blur(6px)", color: "#fff", border: "1px solid rgba(255,255,255,0.08)" }}>
          <CtrlBtn onClick={prev} label="Previous">‹</CtrlBtn>
          <div style={{ minWidth: 64, textAlign: "center", fontFamily: "Manrope", fontSize: 14, fontVariantNumeric: "tabular-nums", opacity: 0.85 }}>
            {String(index + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
          </div>
          <CtrlBtn onClick={next} label="Next">›</CtrlBtn>
          <div style={{ width: 1, height: 22, background: "rgba(255,255,255,0.12)", margin: "0 6px" }} />
          <CtrlBtn onClick={() => setShowGrid(true)} label="Overview (G)"><GridIcon /></CtrlBtn>
          <CtrlBtn onClick={() => setShowNotes((v) => !v)} label="Presenter notes (N)" active={showNotes}><NotesIcon /></CtrlBtn>
          <CtrlBtn onClick={toggleFullscreen} label="Fullscreen (F)" active={isFullscreen}><FsIcon /></CtrlBtn>
          <CtrlBtn onClick={() => window.open("/print", "_blank")} label="Print / PDF"><PrintIcon /></CtrlBtn>
        </div>
      </div>

      {/* Notes panel */}
      {showNotes && (
        <div className="no-print" style={{
          position: "absolute", left: 24, right: 24, bottom: 96,
          maxWidth: 920, margin: "0 auto",
          background: "rgba(20,18,24,0.92)", color: "#fff", border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 8, padding: "20px 24px", backdropFilter: "blur(8px)",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
            <div style={{ fontFamily: "Manrope", fontWeight: 700, fontSize: 13, letterSpacing: 0, textTransform: "uppercase", color: "#FDBF30" }}>
              Presenter Notes · Slide {index + 1}
            </div>
            <button onClick={() => setShowNotes(false)} style={btnReset}>✕</button>
          </div>
          <div style={{ fontFamily: "Inter", fontSize: 15, lineHeight: 1.55, opacity: 0.92 }}>{slideMeta[index].notes}</div>
        </div>
      )}

      {/* Grid overview */}
      {showGrid && (
        <div
          className="no-print"
          onClick={() => setShowGrid(false)}
          style={{ position: "absolute", inset: 0, background: "rgba(8,8,10,0.96)", padding: 56, overflow: "auto", zIndex: 50 }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32, color: "#fff" }}>
            <div style={{ fontFamily: "Manrope", fontWeight: 800, fontSize: 22 }}>Overview</div>
            <button style={btnReset} onClick={() => setShowGrid(false)}>Close ✕</button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
            {slideComponents.map((SC, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); go(i); setShowGrid(false); }}
                style={{
                  background: "transparent", border: i === index ? "2px solid #FDBF30" : "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 8, padding: 0, cursor: "pointer", textAlign: "left", overflow: "hidden",
                }}
              >
                <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", background: "#fff" }}>
                  <ScaledSlide>
                    <SC />
                  </ScaledSlide>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 14px", color: "#fff", fontFamily: "Inter", fontSize: 13 }}>
                  <span style={{ opacity: 0.6, fontVariantNumeric: "tabular-nums" }}>{String(i + 1).padStart(2, "0")}</span>
                  <span style={{ opacity: 0.9 }}>{slideMeta[i].title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const btnReset: React.CSSProperties = {
  background: "transparent", border: "none", color: "#fff", cursor: "pointer",
  fontFamily: "Inter", fontSize: 14, opacity: 0.85, padding: 6,
};

function CtrlBtn({ children, onClick, label, active }: { children: React.ReactNode; onClick: () => void; label: string; active?: boolean }) {
  return (
    <button
      aria-label={label}
      title={label}
      onClick={onClick}
      style={{
        width: 36, height: 36, display: "inline-flex", alignItems: "center", justifyContent: "center",
        background: active ? "rgba(253,191,48,0.18)" : "transparent",
        color: active ? "#FDBF30" : "#fff",
        border: "none", borderRadius: 6, cursor: "pointer",
        fontFamily: "Manrope", fontSize: 22, lineHeight: 1, fontWeight: 700,
      }}
    >
      {children}
    </button>
  );
}

const GridIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>
);
const NotesIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h12l4 4v12H4z" /><line x1="8" y1="10" x2="16" y2="10" /><line x1="8" y1="14" x2="16" y2="14" /><line x1="8" y1="18" x2="13" y2="18" /></svg>
);
const FsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="4 9 4 4 9 4" /><polyline points="20 9 20 4 15 4" /><polyline points="4 15 4 20 9 20" /><polyline points="20 15 20 20 15 20" /></svg>
);
const PrintIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect x="6" y="14" width="12" height="8" /></svg>
);
