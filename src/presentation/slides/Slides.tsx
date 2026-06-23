import { IMissiveLogo, RasscoLogo, StcLogo, StcGroupLogo, RasscoGroupLogo } from "../Brand";
import { meta } from "@/data/deck";

/* ───────── Brand tokens (tech / neon refit) ───────── */
const INK = "#07050C";           // near-black canvas
const INK2 = "#0E0A18";          // panel
const LINE = "rgba(255,255,255,0.10)";
const TEXT = "#ECE8F2";
const MUTED = "#8B8497";
const YELLOW = "#FDBF30";
const TEAL = "#61C5BA";
const ORANGE = "#F68C20";
const PURPLE = "#8B5CF6";        // brighter purple for dark bg
const PURPLE_DEEP = "#492E51";
const STC_PURPLE = "#7A2BFF";    // luminous stc accent for dark bg
const STC_PURPLE_TRUE = "#4F00A0";
const STC_CORAL = "#FF375E";

/* ───────── Shared chrome ───────── */
function SlideFrame({ children, variant = "dark" }: { children: React.ReactNode; variant?: "dark" | "panel" }) {
  return (
    <div className="slide-content radial-glow-purple" style={{ background: variant === "panel" ? INK2 : undefined }}>
      <div className="mesh-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.55 }} />
      {/* corner ticks */}
      <Corner pos="tl" /><Corner pos="tr" /><Corner pos="bl" /><Corner pos="br" />
      <div style={{ position: "relative", width: "100%", height: "100%" }}>{children}</div>
    </div>
  );
}

function Corner({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const s: React.CSSProperties = { position: "absolute", width: 36, height: 36, borderColor: YELLOW, opacity: 0.85, pointerEvents: "none" };
  const m = 36;
  if (pos === "tl") return <div style={{ ...s, top: m, left: m, borderTop: `2px solid ${YELLOW}`, borderLeft: `2px solid ${YELLOW}` }} />;
  if (pos === "tr") return <div style={{ ...s, top: m, right: m, borderTop: `2px solid ${YELLOW}`, borderRight: `2px solid ${YELLOW}` }} />;
  if (pos === "bl") return <div style={{ ...s, bottom: m, left: m, borderBottom: `2px solid ${YELLOW}`, borderLeft: `2px solid ${YELLOW}` }} />;
  return <div style={{ ...s, bottom: m, right: m, borderBottom: `2px solid ${YELLOW}`, borderRight: `2px solid ${YELLOW}` }} />;
}

function Kicker({ children, color = YELLOW }: { children: React.ReactNode; color?: string }) {
  return (
    <div className="font-mono-d" style={{ color, fontSize: 20, letterSpacing: "0.32em", textTransform: "uppercase", fontWeight: 500, display: "flex", alignItems: "center", gap: 18 }}>
      <span style={{ width: 10, height: 10, background: color, boxShadow: `0 0 16px ${color}` }} />
      {children}
    </div>
  );
}

function SlideHeader({ kicker, title, sub }: { kicker: string; title: React.ReactNode; sub?: string }) {
  return (
    <div style={{ padding: "120px 130px 0", display: "flex", flexDirection: "column", gap: 22 }}>
      <Kicker>{kicker}</Kicker>
      <h2 className="slide-title-sm" style={{ color: TEXT, margin: 0, maxWidth: 1620, fontSize: 78, lineHeight: 1.02 }}>{title}</h2>
      {sub && <div className="font-mono-d" style={{ color: MUTED, fontSize: 22, marginTop: 4 }}>{sub}</div>}
    </div>
  );
}

function SlideFooter({ n }: { n: number }) {
  return (
    <div style={{ position: "absolute", left: 130, right: 130, bottom: 56, display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 5 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <IMissiveLogo height={26} invert />
        <div style={{ width: 1, height: 22, background: "rgba(255,255,255,0.18)" }} />
        <span className="font-mono-d" style={{ color: MUTED, fontSize: 16, letterSpacing: "0.22em", textTransform: "uppercase" }}>iMissive × stc</span>
      </div>
      <div className="font-mono-d" style={{ color: MUTED, fontSize: 16, letterSpacing: "0.22em", display: "flex", alignItems: "center", gap: 14 }}>
        <span style={{ color: YELLOW }}>●</span>
        <span style={{ fontVariantNumeric: "tabular-nums" }}>{String(n).padStart(2, "0")} / 09</span>
      </div>
    </div>
  );
}

function Pill({ children, color = YELLOW }: { children: React.ReactNode; color?: string }) {
  return (
    <span className="font-mono-d" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 16px", border: `1px solid ${color}`, color, fontSize: 16, letterSpacing: "0.18em", textTransform: "uppercase", borderRadius: 4 }}>
      <span style={{ width: 6, height: 6, background: color, boxShadow: `0 0 10px ${color}` }} />
      {children}
    </span>
  );
}

/* ============== 1. COVER ============== */
export function CoverSlide() {
  return (
    <SlideFrame>
      {/* Big circuit backdrop */}
      <svg viewBox="0 0 1920 1080" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.9 }}>
        <defs>
          <radialGradient id="cg" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor={YELLOW} stopOpacity="0.9" />
            <stop offset="100%" stopColor={YELLOW} stopOpacity="0" />
          </radialGradient>
          <radialGradient id="cgp" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor={PURPLE} stopOpacity="0.9" />
            <stop offset="100%" stopColor={PURPLE} stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Orbit rings around left anchor */}
        <g transform="translate(420 540)" stroke={PURPLE} strokeOpacity="0.35" fill="none">
          <circle r="160" /><circle r="260" /><circle r="380" strokeOpacity="0.2" /><circle r="520" strokeOpacity="0.12" />
        </g>
        {/* connection lines */}
        <g stroke={YELLOW} strokeOpacity="0.55" strokeWidth="1.2">
          <line x1="420" y1="540" x2="1500" y2="540" />
          <line x1="420" y1="540" x2="1500" y2="260" strokeOpacity="0.25" />
          <line x1="420" y1="540" x2="1500" y2="820" strokeOpacity="0.25" />
        </g>
        {/* nodes */}
        <circle cx="420" cy="540" r="180" fill="url(#cgp)" />
        <circle cx="420" cy="540" r="14" fill={YELLOW} />
        <circle cx="1500" cy="540" r="120" fill="url(#cg)" />
        <circle cx="1500" cy="540" r="12" fill={STC_PURPLE} />
        {/* tick marks */}
        {Array.from({ length: 24 }).map((_, i) => (
          <line key={i} x1={420 + Math.cos((i / 24) * Math.PI * 2) * 580} y1={540 + Math.sin((i / 24) * Math.PI * 2) * 580} x2={420 + Math.cos((i / 24) * Math.PI * 2) * 600} y2={540 + Math.sin((i / 24) * Math.PI * 2) * 600} stroke={PURPLE} strokeOpacity="0.4" strokeWidth="1.5" />
        ))}
      </svg>

      {/* Top bar */}
      <div style={{ position: "absolute", top: 80, left: 130, right: 130, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <IMissiveLogo height={44} invert />
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <span className="font-mono-d" style={{ color: MUTED, fontSize: 16, letterSpacing: "0.22em", textTransform: "uppercase" }}>In conversation with</span>
          <StcGroupLogo height={52} />
        </div>
      </div>

      {/* Center content */}
      <div style={{ position: "absolute", left: 130, right: 130, top: 220, bottom: 220, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Kicker>Strategic Partnership Discussion · {meta.date}</Kicker>
        <div style={{ margin: "44px 0 0", display: "flex", alignItems: "center", gap: 56, flexWrap: "nowrap" }}>
          <div style={{ background: "#fff", padding: "28px 38px", borderRadius: 10, display: "inline-flex", alignItems: "center" }}>
            <IMissiveLogo height={140} />
          </div>
          <span className="glow-yellow" style={{ color: YELLOW, fontFamily: "Manrope", fontWeight: 800, fontSize: 180, lineHeight: 1, letterSpacing: "-0.04em" }}>×</span>
          <div style={{ background: "#fff", padding: "28px 56px", borderRadius: 10, display: "inline-flex", alignItems: "center" }}>
            <StcLogo size={140} color={STC_PURPLE_TRUE} />
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 22, marginTop: 44 }}>
          <div style={{ width: 80, height: 3, background: YELLOW }} />
          <div className="slide-subtitle" style={{ color: TEXT, opacity: 0.9, fontSize: 40, fontWeight: 600 }}>Growing Enterprise Messaging Together</div>
        </div>
      </div>

      {/* Bottom strip — presenters */}
      <div style={{ position: "absolute", left: 130, right: 130, bottom: 80, display: "grid", gridTemplateColumns: "repeat(3,1fr) auto", gap: 40, alignItems: "end", paddingTop: 28, borderTop: `1px solid ${LINE}` }}>
        {meta.presenters.map((p) => (
          <div key={p.name} style={{ paddingTop: 20 }}>
            <div className="font-mono-d" style={{ color: YELLOW, fontSize: 14, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 10 }}>Presenter</div>
            <div style={{ color: TEXT, fontFamily: "Manrope", fontWeight: 700, fontSize: 26 }}>{p.name}</div>
            <div style={{ color: MUTED, fontSize: 18, marginTop: 4 }}>{p.role}</div>
          </div>
        ))}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10, paddingTop: 20 }}>
          <span className="font-mono-d" style={{ color: MUTED, fontSize: 14, letterSpacing: "0.22em", textTransform: "uppercase" }}>Part of</span>
          <div style={{ background: "#fff", padding: "12px 18px", borderRadius: 6, display: "inline-flex", alignItems: "center" }}><RasscoGroupLogo height={60} /></div>
        </div>
      </div>
    </SlideFrame>
  );
}

/* ============== 2. GLANCE ============== */
export function GlanceSlide() {
  return (
    <SlideFrame>
      <SlideHeader kicker="01 · iMissive at a Glance" title={<>Built for Enterprise<br />Communication<span style={{ color: YELLOW }}>.</span></>} />
      <div style={{ padding: "70px 130px 0", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 90 }}>
        <div>
          <p className="slide-body-lg" style={{ color: TEXT, fontSize: 32, lineHeight: 1.3, margin: 0, maxWidth: 640 }}>
            A licensed <span style={{ color: YELLOW }}>Saudi enterprise messaging</span> provider enabling organizations to communicate securely, reliably and at scale.
          </p>
          <div style={{ marginTop: 56, display: "flex", flexDirection: "column", gap: 22 }}>
            {[
              "Licensed Saudi SMS aggregator",
              "Local commercial, technical and operational support",
              "Enterprise-focused communication stack",
              "Backed by RASSCO Group",
            ].map((t, i) => (
              <div key={t} style={{ display: "flex", gap: 22, alignItems: "center", borderBottom: `1px solid ${LINE}`, paddingBottom: 16 }}>
                <span className="font-mono-d" style={{ color: YELLOW, fontSize: 18, width: 40 }}>{`0${i + 1}`}</span>
                <span style={{ color: TEXT, fontSize: 26 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Pill>iMissive</Pill>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginTop: 24, marginBottom: 48 }}>
            <StatCard v="29+" l="Years combined messaging experience" accent={YELLOW} big />
            <StatCard v="5M" l="Domestic messages per month" accent={YELLOW} big />
          </div>
          <Pill color={TEAL}>RASSCO Group</Pill>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 22, marginTop: 24 }}>
            <StatCard v="9" l="Specialized companies" accent={TEAL} />
            <StatCard v="2,500+" l="Group employees" accent={TEAL} />
            <StatCard v="65+" l="Group clients" accent={TEAL} />
          </div>
        </div>
      </div>
      <SlideFooter n={2} />
    </SlideFrame>
  );
}

function StatCard({ v, l, accent, big }: { v: string; l: string; accent: string; big?: boolean }) {
  return (
    <div style={{ position: "relative", padding: "22px 22px 22px 24px", background: "rgba(255,255,255,0.025)", border: `1px solid ${LINE}`, borderRadius: 6, overflow: "hidden" }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: accent, boxShadow: `0 0 18px ${accent}` }} />
      <div className="font-mono-d glow-yellow" style={{ color: accent, fontWeight: 700, fontSize: big ? 92 : 64, lineHeight: 1, letterSpacing: "-0.02em" }}>{v}</div>
      <div style={{ color: MUTED, fontSize: 18, marginTop: 12, lineHeight: 1.35 }}>{l}</div>
    </div>
  );
}

/* ============== 3. SCALE ============== */
export function ScaleSlide() {
  const nodes = [
    { t: "Enterprise\nCustomers", icon: "users" },
    { t: "API · SMPP\nGateway", icon: "gateway" },
    { t: "iMissive\nPlatform", icon: "core" },
    { t: "Intelligent\nRouting", icon: "router" },
    { t: "stc On-Net\nConnectivity", icon: "stc" },
  ];
  const stats = [
    { v: "300", u: "TPS", l: "API throughput · stress-tested" },
    { v: "100", u: "TPS", l: "Per SMPP session" },
    { v: "10", u: "SESS", l: "SMPP sessions per customer" },
    { v: "24/7", u: "", l: "Monitoring · failover · recovery" },
  ];
  return (
    <SlideFrame>
      <SlideHeader kicker="02 · Engineered for Scale" title={<>Infrastructure ready for <span style={{ color: YELLOW }}>high-volume</span> operations</>} />

      {/* Flow */}
      <div style={{ padding: "80px 130px 0" }}>
        <div style={{ position: "relative", display: "flex", alignItems: "stretch", gap: 0 }}>
          {nodes.map((n, i) => {
            const isCore = i === 2;
            const isStc = i === nodes.length - 1;
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                <div style={{
                  flex: 1, position: "relative",
                  padding: "32px 18px 28px",
                  minHeight: 200,
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 18,
                  border: `1px solid ${isCore ? YELLOW : LINE}`,
                  background: isCore ? "rgba(253,191,48,0.08)" : isStc ? "rgba(122,43,255,0.10)" : "rgba(255,255,255,0.02)",
                  boxShadow: isCore ? `0 0 60px rgba(253,191,48,0.18) inset` : undefined,
                  borderRadius: 6,
                }}>
                  <FlowIcon kind={n.icon} color={isCore ? YELLOW : isStc ? STC_PURPLE : PURPLE} />
                  <div style={{ color: TEXT, fontFamily: "Manrope", fontWeight: 700, fontSize: 22, textAlign: "center", whiteSpace: "pre-line", lineHeight: 1.2 }}>{n.t}</div>
                  <div className="font-mono-d" style={{ position: "absolute", top: 10, left: 12, color: MUTED, fontSize: 12, letterSpacing: "0.2em" }}>{`NODE_0${i + 1}`}</div>
                </div>
                {i < nodes.length - 1 && (
                  <svg width="56" height="20" viewBox="0 0 56 20" style={{ flexShrink: 0 }}>
                    <line x1="0" y1="10" x2="46" y2="10" stroke={YELLOW} strokeWidth="2" strokeDasharray="3 4" />
                    <polygon points="46,4 56,10 46,16" fill={YELLOW} />
                  </svg>
                )}
              </div>
            );
          })}
        </div>

        {/* Stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 28, marginTop: 70 }}>
          {stats.map((s) => (
            <div key={s.l} style={{ borderTop: `1px solid ${YELLOW}`, paddingTop: 20 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                <div className="font-mono-d glow-yellow" style={{ color: YELLOW, fontWeight: 700, fontSize: 84, lineHeight: 1, letterSpacing: "-0.03em" }}>{s.v}</div>
                {s.u && <div className="font-mono-d" style={{ color: MUTED, fontSize: 20, letterSpacing: "0.18em" }}>{s.u}</div>}
              </div>
              <div style={{ color: TEXT, fontSize: 20, marginTop: 14, opacity: 0.85 }}>{s.l}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 38 }}>
          {["Failover", "Backup & Recovery", "Delivery Reporting", "Scalable Sessions", "Saudi-Hosted"].map((t) => (
            <Pill key={t} color={TEAL}>{t}</Pill>
          ))}
        </div>
      </div>
      <SlideFooter n={3} />
    </SlideFrame>
  );
}

function FlowIcon({ kind, color }: { kind: string; color: string }) {
  const c = color;
  const sw = 1.8;
  if (kind === "users") return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke={c} strokeWidth={sw}>
      <circle cx="14" cy="16" r="5" /><circle cx="30" cy="16" r="5" /><path d="M4 36c1-6 5-9 10-9s9 3 10 9M22 36c1-6 5-9 10-9s8 3 8 9" />
    </svg>
  );
  if (kind === "gateway") return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke={c} strokeWidth={sw}>
      <rect x="6" y="14" width="32" height="16" rx="2" /><line x1="12" y1="14" x2="12" y2="30" /><line x1="32" y1="14" x2="32" y2="30" /><circle cx="22" cy="22" r="2.5" fill={c} />
    </svg>
  );
  if (kind === "core") return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke={c} strokeWidth={sw}>
      <rect x="10" y="10" width="24" height="24" rx="2" /><rect x="16" y="16" width="12" height="12" fill={c} fillOpacity="0.25" /><line x1="4" y1="16" x2="10" y2="16" /><line x1="4" y1="28" x2="10" y2="28" /><line x1="34" y1="16" x2="40" y2="16" /><line x1="34" y1="28" x2="40" y2="28" /><line x1="16" y1="4" x2="16" y2="10" /><line x1="28" y1="4" x2="28" y2="10" /><line x1="16" y1="34" x2="16" y2="40" /><line x1="28" y1="34" x2="28" y2="40" />
    </svg>
  );
  if (kind === "router") return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke={c} strokeWidth={sw}>
      <circle cx="22" cy="22" r="6" /><path d="M22 4v8M22 32v8M4 22h8M32 22h8M9 9l6 6M29 29l6 6M9 35l6-6M29 15l6-6" />
    </svg>
  );
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke={c} strokeWidth={sw}>
      <path d="M22 6c-9 9-9 23 0 32M22 6c9 9 9 23 0 32M6 22h32M10 14h24M10 30h24" />
    </svg>
  );
}

/* ============== 4. ECOSYSTEM ============== */
export function EcosystemSlide() {
  const sats = [
    "OTP & Authentication", "WhatsApp Business", "RCS Messaging", "AI Chatbots",
    "AI Voice Agents", "Push Notifications", "Enterprise APIs", "Email-to-SMS",
  ];
  const cx = 540, cy = 540, r = 360;
  return (
    <SlideFrame>
      <SlideHeader kicker="03 · Communication Ecosystem" title={<>SMS at the core. <span style={{ color: YELLOW }}>Channels orbit around it.</span></>} />
      <div style={{ padding: "20px 130px 0", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, alignItems: "center" }}>
        <div style={{ position: "relative", height: 760 }}>
          <svg viewBox="0 0 1080 1080" width="100%" height="100%">
            <defs>
              <radialGradient id="coreG" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor={YELLOW} stopOpacity="0.55" />
                <stop offset="60%" stopColor={YELLOW} stopOpacity="0.10" />
                <stop offset="100%" stopColor={YELLOW} stopOpacity="0" />
              </radialGradient>
            </defs>
            {[1, 2, 3].map((k) => (
              <circle key={k} cx={cx} cy={cy} r={r - 60 + k * 60} stroke={PURPLE} strokeOpacity={0.25 - k * 0.05} fill="none" />
            ))}
            {sats.map((_, i) => {
              const a = (i / sats.length) * Math.PI * 2 - Math.PI / 2;
              const x = cx + Math.cos(a) * r;
              const y = cy + Math.sin(a) * r;
              return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke={YELLOW} strokeOpacity="0.35" strokeWidth="1.2" strokeDasharray="2 5" />;
            })}
            <circle cx={cx} cy={cy} r="300" fill="url(#coreG)" />
            <circle cx={cx} cy={cy} r="180" fill={INK2} stroke={YELLOW} strokeWidth="2" />
            <circle cx={cx} cy={cy} r="200" fill="none" stroke={YELLOW} strokeOpacity="0.35" />
            <text x={cx} y={cy - 20} textAnchor="middle" fill={TEXT} fontFamily="Manrope" fontWeight="700" fontSize="42">Enterprise</text>
            <text x={cx} y={cy + 55} textAnchor="middle" fill={YELLOW} fontFamily="Manrope" fontWeight="800" fontSize="96" letterSpacing="-0.03em">SMS</text>
            <text x={cx} y={cy + 95} textAnchor="middle" fill={MUTED} fontFamily="JetBrains Mono" fontSize="16" letterSpacing="0.3em">CORE CHANNEL</text>
            {sats.map((s, i) => {
              const a = (i / sats.length) * Math.PI * 2 - Math.PI / 2;
              const x = cx + Math.cos(a) * r;
              const y = cy + Math.sin(a) * r;
              const right = Math.cos(a) > 0.15;
              const left = Math.cos(a) < -0.15;
              const anchor = right ? "start" : left ? "end" : "middle";
              const dx = right ? 26 : left ? -26 : 0;
              const dy = Math.sin(a) > 0.7 ? 44 : Math.sin(a) < -0.7 ? -28 : 8;
              return (
                <g key={s}>
                  <circle cx={x} cy={y} r="14" fill={INK2} stroke={i % 2 === 0 ? TEAL : ORANGE} strokeWidth="2" />
                  <circle cx={x} cy={y} r="5" fill={i % 2 === 0 ? TEAL : ORANGE} />
                  <text x={x + dx} y={y + dy} textAnchor={anchor} fill={TEXT} fontFamily="Inter" fontWeight="500" fontSize="24">{s}</text>
                </g>
              );
            })}
          </svg>
        </div>

        <div>
          <div style={{ width: 80, height: 3, background: YELLOW, marginBottom: 32 }} />
          <p className="slide-body-lg" style={{ color: TEXT, fontSize: 34, lineHeight: 1.3, maxWidth: 620, margin: 0 }}>
            A <span style={{ color: YELLOW }}>unified communication foundation</span> — designed for enterprise integration, governance and measurable delivery.
          </p>
          <div style={{ marginTop: 44, display: "flex", flexDirection: "column", gap: 14 }}>
            {["One platform.", "One contract.", "One operational team."].map((t) => (
              <div key={t} className="font-mono-d" style={{ color: MUTED, fontSize: 22, letterSpacing: "0.06em" }}>
                <span style={{ color: YELLOW, marginRight: 14 }}>›</span>{t}
              </div>
            ))}
          </div>
        </div>
      </div>
      <SlideFooter n={4} />
    </SlideFrame>
  );
}

/* ============== 5. RELATIONSHIP ============== */
export function RelationshipSlide() {
  const pillars = [
    { t: "Enterprise Messaging", c: STC_PURPLE, items: ["Existing contracted stc On-Net relationship", "Monthly usage-based billing", "Domestic Saudi traffic"] },
    { t: "Cloud Infrastructure", c: TEAL, items: ["Saudi-based SCCC Alibaba Cloud", "SCCC formed through partnerships including stc Group", "Locally resilient deployment"] },
    { t: "Operational Alignment", c: YELLOW, items: ["Established account management", "Active commercial engagement", "Existing operational touchpoints"] },
  ];
  return (
    <SlideFrame>
      <SlideHeader kicker="04 · Already Within the stc Ecosystem" title={<>An existing relationship — <span style={{ color: YELLOW }}>with room to grow</span></>} />
      <div style={{ padding: "70px 130px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 36 }}>
          {pillars.map((p, i) => (
            <div key={p.t} style={{ position: "relative", padding: "32px 30px", background: "rgba(255,255,255,0.025)", border: `1px solid ${LINE}`, borderRadius: 6, minHeight: 380 }}>
              <div style={{ position: "absolute", left: 0, top: 0, height: 4, width: "100%", background: p.c, boxShadow: `0 0 24px ${p.c}` }} />
              <div className="font-mono-d" style={{ color: p.c, fontSize: 16, letterSpacing: "0.28em", marginBottom: 18 }}>{`PILLAR · 0${i + 1}`}</div>
              <h3 style={{ color: TEXT, fontFamily: "Manrope", fontWeight: 800, fontSize: 36, margin: 0, marginBottom: 22, letterSpacing: "-0.015em" }}>{p.t}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {p.items.map((it) => (
                  <div key={it} style={{ display: "flex", gap: 14, alignItems: "baseline" }}>
                    <span style={{ color: p.c, fontSize: 18 }}>▸</span>
                    <span style={{ color: TEXT, opacity: 0.88, fontSize: 22, lineHeight: 1.4 }}>{it}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 50, padding: "26px 32px", borderLeft: `3px solid ${YELLOW}`, background: "rgba(253,191,48,0.05)" }}>
          <p style={{ color: TEXT, fontSize: 28, lineHeight: 1.35, margin: 0, maxWidth: 1500 }}>
            iMissive is already invested in the broader <span style={{ color: YELLOW, fontWeight: 600 }}>stc</span> ecosystem through enterprise messaging connectivity and Saudi-based cloud infrastructure.
          </p>
        </div>
      </div>
      <SlideFooter n={5} />
    </SlideFrame>
  );
}

/* ============== 6. VISION ============== */
export function VisionSlide() {
  return (
    <SlideFrame>
      <SlideHeader kicker="05 · 12-Month Vision" title={<>From proven infrastructure to <span style={{ color: YELLOW }}>scaled market impact</span></>} />
      <div style={{ padding: "40px 130px 0" }}>
        {/* Hero growth visualisation */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 0.7fr", gap: 60, alignItems: "stretch" }}>
          <div style={{ position: "relative", padding: "10px 0" }}>
            <div className="font-mono-d" style={{ color: MUTED, fontSize: 16, letterSpacing: "0.28em" }}>TODAY</div>
            <div className="font-mono-d" style={{ color: TEXT, fontSize: 150, fontWeight: 700, lineHeight: 1, marginTop: 14, letterSpacing: "-0.04em" }}>5<span style={{ color: MUTED, fontWeight: 500 }}>M</span></div>
            <div style={{ color: MUTED, fontSize: 20, marginTop: 8 }}>messages per month</div>
            <div style={{ marginTop: 22, height: 12, width: "30%", background: PURPLE, opacity: 0.7 }} />
          </div>
          <div style={{ position: "relative", padding: "10px 0" }}>
            <div className="font-mono-d" style={{ color: YELLOW, fontSize: 16, letterSpacing: "0.28em" }}>12-MONTH AMBITION</div>
            <div className="font-mono-d glow-yellow" style={{ color: YELLOW, fontSize: 180, fontWeight: 700, lineHeight: 1, marginTop: 14, letterSpacing: "-0.04em" }}>35<span style={{ color: YELLOW, opacity: 0.6, fontWeight: 500 }}>M</span></div>
            <div style={{ color: TEXT, fontSize: 20, marginTop: 8 }}>messages per month · forward target</div>
            <div style={{ marginTop: 22, height: 12, width: "100%", background: YELLOW, boxShadow: `0 0 24px ${YELLOW}` }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderLeft: `1px solid ${LINE}`, paddingLeft: 50 }}>
            <div className="font-mono-d" style={{ color: MUTED, fontSize: 14, letterSpacing: "0.3em" }}>GROWTH</div>
            <div className="font-mono-d glow-yellow" style={{ color: YELLOW, fontWeight: 700, fontSize: 210, lineHeight: 1, letterSpacing: "-0.05em" }}>7×</div>
            <div style={{ color: MUTED, fontSize: 18, textAlign: "center", marginTop: 4 }}>monthly volume<br />ambition</div>
          </div>
        </div>

        {/* annualized strip */}
        <div style={{ marginTop: 30, padding: "18px 30px", border: `1px solid ${LINE}`, background: "rgba(255,255,255,0.02)", borderRadius: 6, display: "flex", alignItems: "center", gap: 32 }}>
          <span className="font-mono-d" style={{ color: YELLOW, fontSize: 14, letterSpacing: "0.3em" }}>ANNUALIZED</span>
          <span className="font-mono-d" style={{ color: TEXT, fontSize: 32, fontWeight: 700 }}>60M</span>
          <span style={{ color: MUTED, fontSize: 18 }}>current</span>
          <svg width="80" height="14"><line x1="0" y1="7" x2="64" y2="7" stroke={YELLOW} strokeWidth="2" strokeDasharray="3 4" /><polygon points="64,1 80,7 64,13" fill={YELLOW} /></svg>
          <span className="font-mono-d glow-yellow" style={{ color: YELLOW, fontSize: 38, fontWeight: 700 }}>420M</span>
          <span style={{ color: TEXT, fontSize: 18 }}>run-rate · 12-month ambition</span>
        </div>

        {/* pillars */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 22, marginTop: 26 }}>
          {[
            "Scale domestic messaging volume",
            "Grow enterprise customer base",
            "Strengthen operator relationships",
            "Expand multi-channel adoption",
          ].map((p, i) => (
            <div key={p} style={{ padding: "16px 20px", border: `1px solid ${LINE}`, borderTop: `2px solid ${YELLOW}`, borderRadius: 4 }}>
              <div className="font-mono-d" style={{ color: YELLOW, fontSize: 13, letterSpacing: "0.28em", marginBottom: 8 }}>{`P0${i + 1}`}</div>
              <div style={{ color: TEXT, fontSize: 18, fontFamily: "Manrope", fontWeight: 600, lineHeight: 1.3 }}>{p}</div>
            </div>
          ))}
        </div>
      </div>
      <SlideFooter n={6} />
    </SlideFrame>
  );
}

/* ============== 7. WHY ============== */
export function WhySlide() {
  const themes = [
    { n: "01", t: "Industry Experience", d: "29+ years of combined messaging expertise.", c: YELLOW },
    { n: "02", t: "Technical Readiness", d: "Stress-tested, high-volume API and SMPP infrastructure.", c: TEAL },
    { n: "03", t: "Local Execution", d: "Saudi market understanding and responsive local support.", c: ORANGE },
    { n: "04", t: "Enterprise Governance", d: "Reporting, sender management, permissions and structured operations.", c: PURPLE },
  ];
  return (
    <SlideFrame>
      <SlideHeader kicker="06 · Why iMissive for Enterprise Opportunities" title={<>A capable local partner for <span style={{ color: YELLOW }}>enterprise messaging</span></>} />
      <div style={{ padding: "70px 130px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px 36px" }}>
        {themes.map((th) => (
          <div key={th.n} style={{ position: "relative", padding: "34px 36px", background: "rgba(255,255,255,0.025)", border: `1px solid ${LINE}`, borderRadius: 6, display: "flex", gap: 30, alignItems: "flex-start", minHeight: 200 }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: th.c, boxShadow: `0 0 20px ${th.c}` }} />
            <div className="font-mono-d" style={{ color: th.c, fontSize: 64, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.02em" }}>{th.n}</div>
            <div>
              <h3 style={{ color: TEXT, fontFamily: "Manrope", fontWeight: 800, fontSize: 36, margin: 0, marginBottom: 12 }}>{th.t}</h3>
              <div style={{ color: TEXT, opacity: 0.78, fontSize: 22, lineHeight: 1.4, maxWidth: 540 }}>{th.d}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ position: "absolute", left: 130, right: 130, bottom: 130 }}>
        <p style={{ color: TEXT, fontSize: 26, lineHeight: 1.4, margin: 0, borderLeft: `3px solid ${YELLOW}`, paddingLeft: 24, maxWidth: 1500 }}>
          iMissive combines the <span style={{ color: YELLOW }}>agility of a specialized local provider</span> with the infrastructure and institutional backing required for enterprise delivery.
        </p>
      </div>
      <SlideFooter n={7} />
    </SlideFrame>
  );
}

/* ============== 8. PARTNERSHIP ============== */
export function PartnershipSlide() {
  const areas = [
    { t: "Enterprise Opportunity Referrals", d: "Consider iMissive among qualified local providers for suitable enterprise messaging opportunities.", c: STC_PURPLE },
    { t: "Joint Enterprise Engagement", d: "Collaborate on strategic accounts requiring platform integration, reporting and local operational support.", c: STC_CORAL },
    { t: "Growth-Enabled Payment Terms", d: "Extend payment terms to 60 days to support larger enterprise commitments and sustainable traffic growth.", c: YELLOW },
    { t: "Structured Coordination", d: "Establish clear commercial and operational points of contact with regular business reviews.", c: TEAL },
  ];
  return (
    <SlideFrame>
      <SlideHeader kicker="07 · Partnership Model" title={<>A model for <span style={{ color: YELLOW }}>mutual growth</span></>} sub="Combining stc's market reach with iMissive's enterprise execution" />
      <div style={{ padding: "60px 130px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px 32px" }}>
        {areas.map((a, i) => (
          <div key={a.t} style={{ position: "relative", padding: "34px 36px 34px 42px", background: "rgba(255,255,255,0.025)", border: `1px solid ${LINE}`, borderRadius: 6, minHeight: 220 }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: a.c, boxShadow: `0 0 24px ${a.c}` }} />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <div className="font-mono-d" style={{ color: a.c, fontSize: 16, letterSpacing: "0.28em" }}>{`AREA · 0${i + 1}`}</div>
              <div className="font-mono-d" style={{ color: MUTED, fontSize: 12, letterSpacing: "0.3em" }}>FOR DISCUSSION</div>
            </div>
            <h3 style={{ color: TEXT, fontFamily: "Manrope", fontWeight: 800, fontSize: 32, margin: 0, marginBottom: 14, lineHeight: 1.15 }}>{a.t}</h3>
            <div style={{ color: TEXT, opacity: 0.82, fontSize: 22, lineHeight: 1.4 }}>{a.d}</div>
          </div>
        ))}
      </div>
      <SlideFooter n={8} />
    </SlideFrame>
  );
}

/* ============== 9. CLOSING ============== */
export function ClosingSlide() {
  const steps = [
    "Confirm the appropriate enterprise referral path",
    "Identify commercial and operational owners",
    "Review the 60-day payment-term request",
    "Select initial enterprise opportunities for collaboration",
    "Establish a regular business review cadence",
  ];
  return (
    <SlideFrame>
      <div style={{ padding: "110px 130px 110px", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 80, height: "100%", boxSizing: "border-box" }}>
        {/* Left statement */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <Kicker>08 · Next Steps & Closing</Kicker>
            <h2 style={{ color: TEXT, fontFamily: "Manrope", fontWeight: 800, fontSize: 96, lineHeight: 0.98, margin: "36px 0 0", letterSpacing: "-0.03em" }}>
              The infrastructure<br />is ready.
            </h2>
            <h2 className="glow-yellow" style={{ color: YELLOW, fontFamily: "Manrope", fontWeight: 800, fontSize: 96, lineHeight: 0.98, margin: "12px 0 0", letterSpacing: "-0.03em" }}>
              The next chapter<br />is scale.
            </h2>
          </div>
          <div style={{ paddingTop: 28, borderTop: `1px solid ${LINE}`, maxWidth: 760 }}>
            <p style={{ color: TEXT, opacity: 0.82, fontSize: 22, lineHeight: 1.4, margin: 0 }}>
              Together, iMissive and stc can unlock new enterprise messaging growth while delivering reliable, locally supported communication at scale.
            </p>
            <div className="font-mono-d" style={{ color: MUTED, fontSize: 14, letterSpacing: "0.28em", marginTop: 22 }}>09 / 09 · END OF DECK</div>
          </div>
        </div>

        {/* Right — next steps */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <Pill>Suggested Next Steps</Pill>
            <ol style={{ listStyle: "none", padding: 0, margin: "28px 0 0", display: "flex", flexDirection: "column", gap: 14 }}>
              {steps.map((s, i) => (
                <li key={s} style={{ display: "flex", alignItems: "center", gap: 22, padding: "16px 20px", border: `1px solid ${LINE}`, borderLeft: `3px solid ${YELLOW}`, background: "rgba(255,255,255,0.025)", borderRadius: 4 }}>
                  <span className="font-mono-d" style={{ color: YELLOW, fontWeight: 700, fontSize: 22, width: 40, fontVariantNumeric: "tabular-nums" }}>{`0${i + 1}`}</span>
                  <span style={{ color: TEXT, fontSize: 22, lineHeight: 1.3 }}>{s}</span>
                </li>
              ))}
            </ol>
          </div>

          <div style={{ marginTop: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 28, paddingBottom: 22, borderBottom: `1px solid ${LINE}` }}>
              <IMissiveLogo height={44} invert />
              <span className="font-mono-d" style={{ color: MUTED, fontSize: 14, letterSpacing: "0.28em" }}>WITH</span>
              <div style={{ background: "#fff", padding: "10px 18px", borderRadius: 6, display: "inline-flex", alignItems: "center" }}>
                <StcLogo size={42} color={STC_PURPLE_TRUE} />
              </div>
            </div>
            <div style={{ color: MUTED, fontSize: 15, marginTop: 16, lineHeight: 1.55 }}>
              <div style={{ color: TEXT, fontWeight: 700, fontFamily: "Manrope", fontSize: 20 }}>{meta.contact.company}</div>
              <div>{meta.contact.legal} · {meta.contact.location}</div>
              <div className="font-mono-d" style={{ marginTop: 6, color: YELLOW, fontSize: 16, letterSpacing: "0.12em" }}>{meta.contact.web}</div>
            </div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

export const slideComponents = [
  CoverSlide,
  GlanceSlide,
  ScaleSlide,
  EcosystemSlide,
  RelationshipSlide,
  VisionSlide,
  WhySlide,
  PartnershipSlide,
  ClosingSlide,
];