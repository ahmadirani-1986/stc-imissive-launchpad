import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { slideComponents } from "@/presentation/slides/Slides";

export const Route = createFileRoute("/print")({
  head: () => ({
    meta: [{ title: "Print — iMissive × stc" }],
  }),
  component: PrintView,
});

function PrintView() {
  useEffect(() => {
    // Auto-open print dialog shortly after layout settles
    const t = window.setTimeout(() => window.print(), 600);
    return () => window.clearTimeout(t);
  }, []);
  return (
    <div className="print-root" style={{ background: "#1a1a1a", minHeight: "100vh", padding: 24 }}>
      <style>{`
        @media screen {
          .print-deck { display: flex; flex-direction: column; gap: 24px; align-items: center; }
          .print-page { width: 1280px; height: 720px; background: #fff; box-shadow: 0 8px 30px rgba(0,0,0,0.35); position: relative; overflow: hidden; }
          .print-inner { position: absolute; left: 0; top: 0; width: 1920px; height: 1080px; transform: scale(${1280 / 1920}); transform-origin: top left; }
        }
        @media print {
          @page { size: 1920px 1080px landscape; margin: 0; }
          html, body, #root { background: #fff !important; }
          .print-root { padding: 0 !important; margin: 0 !important; background: #fff !important; min-height: 0 !important; }
          .print-deck { display: block; }
          .print-page { width: 1920px; height: 1080px; background: #fff; box-shadow: none; position: relative; overflow: hidden; page-break-after: always; break-after: page; }
          .print-page:last-child { page-break-after: auto; }
          .print-inner { position: absolute; left: 0; top: 0; width: 1920px; height: 1080px; transform: none; }
        }
      `}</style>
      <div className="print-deck">
        {slideComponents.map((SC, i) => (
          <div key={i} className="print-page">
            <div className="print-inner">
              <SC />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}