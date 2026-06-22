import { IMissiveLogo, RasscoLogo, StcLogo } from "../Brand";
import { meta } from "@/data/deck";

const PURPLE = "#492E51";
const YELLOW = "#FDBF30";
const TEAL = "#61C5BA";
const ORANGE = "#F68C20";
const STC_PURPLE = "#4F00A0";
const STC_CORAL = "#FF375E";
const INK = "#0E0B12";
const PAPER = "#F7F5F2";

function SlideFrame({ children, bg = "#ffffff" }: { children: React.ReactNode; bg?: string }) {
  return (
    <div className="slide-content" style={{ background: bg }}>
      {children}
    </div>
  );
}

/* ---------------- 1. COVER ---------------- */
export function CoverSlide() {
  return (
    <SlideFrame bg="#ffffff">
      <div style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", height: "100%" }}>
        {/* Left — iMissive purple field */}
        <div style={{ background: PURPLE, color: "#fff", padding: "110px 100px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
            <IMissiveLogo height={64} invert />
          </div>

          <div>
            <div className="slide-kicker" style={{ color: YELLOW, marginBottom: 36 }}>Strategic Partnership Discussion</div>
            <h1 className="slide-title-xl" style={{ color: "#fff", margin: 0 }}>
              iMissive <span style={{ color: YELLOW }}>×</span> stc
            </h1>
            <div style={{ height: 6, width: 160, background: YELLOW, marginTop: 44, marginBottom: 44 }} />
            <div className="slide-subtitle" style={{ color: "#fff", opacity: 0.92, maxWidth: 820 }}>
              Growing Enterprise Messaging Together
            </div>
          </div>

          <div className="slide-caption" style={{ color: "#fff", opacity: 0.75 }}>
            {meta.date}
          </div>

          {/* Connectivity geometry */}
          <svg width="280" height="280" style={{ position: "absolute", right: -90, top: 80, opacity: 0.18 }} viewBox="0 0 280 280" fill="none">
            <circle cx="60" cy="60" r="8" fill={YELLOW} />
            <circle cx="220" cy="220" r="8" fill={YELLOW} />
            <line x1="60" y1="60" x2="220" y2="220" stroke={YELLOW} strokeWidth="1.5" />
            <circle cx="60" cy="60" r="40" stroke={YELLOW} strokeWidth="1" />
            <circle cx="220" cy="220" r="40" stroke={YELLOW} strokeWidth="1" />
          </svg>
        </div>

        {/* Right — light panel with presenters + stc */}
        <div style={{ background: "#ffffff", padding: "110px 90px", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <StcLogo size={88} color={STC_PURPLE} />
              <div style={{ width: 3, height: 64, background: STC_CORAL }} />
            </div>
          </div>

          <div>
            <div className="slide-kicker" style={{ color: PURPLE, marginBottom: 28 }}>Presented by</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
              {meta.presenters.map((p) => (
                <div key={p.name}>
                  <div className="slide-body-lg" style={{ color: INK, fontWeight: 700, fontFamily: "Manrope" }}>{p.name}</div>
                  <div className="slide-caption" style={{ color: "#5a5560" }}>{p.role}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16, justifyContent: "flex-end" }}>
            <span className="slide-chrome" style={{ color: "#7a7480" }}>Part of</span>
            <RasscoLogo height={36} />
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

/* ---------------- shared header ---------------- */
function SlideHeader({ kicker, title, accent = YELLOW }: { kicker: string; title: string; accent?: string }) {
  return (
    <div style={{ padding: "70px 110px 0", display: "flex", flexDirection: "column", gap: 18 }}>
      <div className="slide-kicker" style={{ color: PURPLE }}>
        <span style={{ display: "inline-block", width: 36, height: 4, background: accent, verticalAlign: "middle", marginRight: 16 }} />
        {kicker}
      </div>
      <h2 className="slide-title-sm" style={{ color: INK, margin: 0, maxWidth: 1500 }}>{title}</h2>
    </div>
  );
}

function SlideFooter({ n }: { n: number }) {
  return (
    <div style={{ position: "absolute", left: 110, right: 110, bottom: 36, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <IMissiveLogo height={28} />
      </div>
      <div className="slide-chrome" style={{ color: "#9a96a0", fontVariantNumeric: "tabular-nums" }}>
        {String(n).padStart(2, "0")} / 09
      </div>
    </div>
  );
}

/* ---------------- 2. GLANCE ---------------- */
export function GlanceSlide() {
  const imStats = [
    { v: "29+", l: "Years of Combined Messaging Experience", scope: "iMissive" },
    { v: "5M", l: "Domestic Messages Managed Monthly", scope: "iMissive" },
  ];
  const groupStats = [
    { v: "9", l: "Specialized Companies" },
    { v: "2,500+", l: "Group Employees" },
    { v: "65+", l: "Group Clients" },
  ];
  return (
    <SlideFrame>
      <SlideHeader kicker="iMissive at a Glance" title="Built for Enterprise Communication" />
      <div style={{ padding: "60px 110px 0", display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 80 }}>
        <div>
          <p className="slide-body-lg" style={{ color: INK, maxWidth: 720, margin: 0 }}>
            iMissive is a Saudi enterprise communications provider enabling organizations to communicate securely,
            reliably and at scale.
          </p>
          <div style={{ marginTop: 50, display: "flex", flexDirection: "column", gap: 18 }}>
            {[
              "Licensed Saudi SMS aggregator",
              "Local commercial, technical and operational support",
              "Enterprise-focused communication capabilities",
              "Part of RASSCO Group",
            ].map((t) => (
              <div key={t} style={{ display: "flex", gap: 18, alignItems: "baseline" }}>
                <span style={{ width: 10, height: 10, background: YELLOW, display: "inline-block", flexShrink: 0, marginTop: 12 }} />
                <span className="slide-body" style={{ color: INK }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="slide-kicker" style={{ color: PURPLE, marginBottom: 18 }}>
            <span style={{ display: "inline-block", width: 22, height: 3, background: YELLOW, marginRight: 12, verticalAlign: "middle" }} />
            iMissive
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, marginBottom: 50 }}>
            {imStats.map((s) => (
              <div key={s.l} style={{ borderTop: `3px solid ${YELLOW}`, paddingTop: 18 }}>
                <div className="slide-stat-sm" style={{ color: PURPLE }}>{s.v}</div>
                <div className="slide-caption" style={{ color: "#5a5560", marginTop: 8 }}>{s.l}</div>
              </div>
            ))}
          </div>

          <div className="slide-kicker" style={{ color: PURPLE, marginBottom: 18 }}>
            <span style={{ display: "inline-block", width: 22, height: 3, background: TEAL, marginRight: 12, verticalAlign: "middle" }} />
            RASSCO Group
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 28 }}>
            {groupStats.map((s) => (
              <div key={s.l} style={{ borderTop: `3px solid ${TEAL}`, paddingTop: 16 }}>
                <div className="slide-stat-sm" style={{ color: INK, fontSize: 64 }}>{s.v}</div>
                <div className="slide-caption" style={{ color: "#5a5560", marginTop: 6 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SlideFooter n={2} />
    </SlideFrame>
  );
}

/* ---------------- 3. SCALE ---------------- */
export function ScaleSlide() {
  const nodes = [
    "Enterprise Customers",
    "API & SMPP Gateway",
    "iMissive Messaging Platform",
    "Intelligent Routing",
    "stc On-Net Connectivity",
  ];
  const stats = [
    { v: "300 TPS", l: "Stress-Tested API Throughput" },
    { v: "100 TPS", l: "Per SMPP Session" },
    { v: "Up to 10", l: "SMPP Sessions Per Customer" },
    { v: "24/7", l: "Platform Monitoring" },
  ];
  return (
    <SlideFrame>
      <SlideHeader kicker="Engineered for Scale" title="Infrastructure Ready for High-Volume Operations" />
      <div style={{ padding: "30px 110px 0" }}>
        <div className="slide-subtitle" style={{ color: PURPLE, fontWeight: 700, marginBottom: 50 }}>
          Tested. Resilient. Ready to Scale.
        </div>

        {/* Flow */}
        <div style={{ display: "flex", alignItems: "stretch", gap: 0, marginBottom: 60 }}>
          {nodes.map((n, i) => {
            const isStc = i === nodes.length - 1;
            return (
              <div key={n} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                <div style={{
                  flex: 1,
                  border: `2px solid ${isStc ? STC_PURPLE : PURPLE}`,
                  borderRadius: 8,
                  padding: "22px 18px",
                  minHeight: 120,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  background: isStc ? STC_PURPLE : i === 2 ? PURPLE : "#fff",
                  color: isStc || i === 2 ? "#fff" : INK,
                }}>
                  <span className="slide-body" style={{ fontWeight: 600, fontFamily: "Manrope" }}>{n}</span>
                </div>
                {i < nodes.length - 1 && (
                  <svg width="42" height="20" viewBox="0 0 42 20" style={{ flexShrink: 0 }}>
                    <line x1="0" y1="10" x2="34" y2="10" stroke={YELLOW} strokeWidth="3" />
                    <polygon points="34,4 42,10 34,16" fill={YELLOW} />
                  </svg>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, marginBottom: 40 }}>
          {stats.map((s) => (
            <div key={s.l} style={{ borderTop: `3px solid ${YELLOW}`, paddingTop: 16 }}>
              <div className="slide-stat-sm" style={{ color: PURPLE, fontSize: 72 }}>{s.v}</div>
              <div className="slide-caption" style={{ color: "#5a5560", marginTop: 8 }}>{s.l}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
          {["Failover mechanism", "Backup and recovery", "Delivery reporting", "Scalable session capacity"].map((t) => (
            <div key={t} className="slide-caption" style={{ color: "#5a5560" }}>
              <span style={{ color: TEAL, marginRight: 10, fontWeight: 700 }}>—</span>{t}
            </div>
          ))}
        </div>
      </div>
      <SlideFooter n={3} />
    </SlideFrame>
  );
}

/* ---------------- 4. ECOSYSTEM ---------------- */
export function EcosystemSlide() {
  const satellites = [
    "OTP & Authentication",
    "WhatsApp Business",
    "RCS Messaging",
    "AI Chatbots",
    "AI Voice Agents",
    "Push Notifications",
    "Enterprise APIs",
    "Email-to-SMS",
  ];
  // Position 8 satellites around center
  const cx = 480, cy = 470, r = 360;
  return (
    <SlideFrame>
      <SlideHeader kicker="Communication Ecosystem" title="SMS at the Core. More Channels Around It." />
      <div style={{ padding: "30px 110px 0", display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 40, alignItems: "start" }}>
        {/* Diagram */}
        <div style={{ position: "relative", height: 820 }}>
          <svg viewBox="0 0 960 940" width="100%" height="100%">
            {satellites.map((_, i) => {
              const angle = (i / satellites.length) * Math.PI * 2 - Math.PI / 2;
              const x = cx + Math.cos(angle) * r;
              const y = cy + Math.sin(angle) * r;
              return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke={PURPLE} strokeOpacity="0.25" strokeWidth="1.5" />;
            })}
            <circle cx={cx} cy={cy} r="220" fill={PURPLE} />
            <circle cx={cx} cy={cy} r="240" fill="none" stroke={YELLOW} strokeWidth="3" />
            <text x={cx} y={cy - 10} textAnchor="middle" fill="#fff" fontFamily="Manrope" fontWeight="800" fontSize="64" letterSpacing="-0.02em">Enterprise</text>
            <text x={cx} y={cy + 70} textAnchor="middle" fill={YELLOW} fontFamily="Manrope" fontWeight="800" fontSize="96" letterSpacing="-0.03em">SMS</text>
            {satellites.map((s, i) => {
              const angle = (i / satellites.length) * Math.PI * 2 - Math.PI / 2;
              const x = cx + Math.cos(angle) * r;
              const y = cy + Math.sin(angle) * r;
              return (
                <g key={s}>
                  <circle cx={x} cy={y} r="14" fill={i % 2 === 0 ? TEAL : ORANGE} />
                  <text
                    x={x}
                    y={y + (Math.sin(angle) > 0.3 ? 56 : Math.sin(angle) < -0.3 ? -32 : 8)}
                    textAnchor={Math.cos(angle) > 0.3 ? "start" : Math.cos(angle) < -0.3 ? "end" : "middle"}
                    dx={Math.cos(angle) > 0.3 ? 26 : Math.cos(angle) < -0.3 ? -26 : 0}
                    fill={INK}
                    fontFamily="Inter"
                    fontWeight="600"
                    fontSize="26"
                  >
                    {s}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Statement */}
        <div style={{ paddingTop: 80 }}>
          <div style={{ width: 80, height: 4, background: YELLOW, marginBottom: 32 }} />
          <p className="slide-body-lg" style={{ color: INK, maxWidth: 720, margin: 0 }}>
            A unified communication foundation designed for enterprise integration, governance and measurable delivery.
          </p>
          <div style={{ marginTop: 50, display: "flex", flexDirection: "column", gap: 12 }}>
            <div className="slide-caption" style={{ color: "#5a5560" }}>One platform. One contract. One operational team.</div>
          </div>
        </div>
      </div>
      <SlideFooter n={4} />
    </SlideFrame>
  );
}

/* ---------------- 5. RELATIONSHIP ---------------- */
export function RelationshipSlide() {
  const pillars = [
    {
      t: "Enterprise Messaging",
      items: ["Existing contracted stc On-Net relationship", "Monthly usage-based billing", "Domestic Saudi traffic"],
    },
    {
      t: "Cloud Infrastructure",
      items: [
        "Saudi-based infrastructure through SCCC Alibaba Cloud",
        "SCCC Alibaba Cloud was formed through partnerships that include stc Group",
      ],
    },
    {
      t: "Operational Alignment",
      items: ["Existing account management relationship", "Established operational and commercial engagement"],
    },
  ];
  return (
    <SlideFrame>
      {/* Left stc colour band */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 18, background: STC_PURPLE }} />
      <SlideHeader kicker="Already Within the stc Ecosystem" title="An Existing Relationship with Room to Grow" accent={STC_CORAL} />
      <div style={{ padding: "60px 110px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 56 }}>
          {pillars.map((p, i) => (
            <div key={p.t} style={{ paddingTop: 18, borderTop: `4px solid ${i === 0 ? STC_PURPLE : i === 1 ? TEAL : YELLOW}` }}>
              <div className="slide-chrome" style={{ color: "#9a96a0", marginBottom: 14, fontVariantNumeric: "tabular-nums" }}>{`0${i + 1}`}</div>
              <h3 className="slide-title-sm" style={{ color: INK, fontSize: 40, margin: 0, marginBottom: 24 }}>{p.t}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {p.items.map((it) => (
                  <div key={it} className="slide-body" style={{ color: "#3d3742", fontSize: 24, lineHeight: 1.4 }}>{it}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 70, maxWidth: 1400 }}>
          <p className="slide-body-lg" style={{ color: INK, margin: 0 }}>
            iMissive is already invested in the broader <span style={{ color: STC_PURPLE, fontWeight: 700 }}>stc</span> ecosystem
            through enterprise messaging connectivity and Saudi-based cloud infrastructure.
          </p>
        </div>
      </div>
      <SlideFooter n={5} />
    </SlideFrame>
  );
}

/* ---------------- 6. VISION ---------------- */
export function VisionSlide() {
  return (
    <SlideFrame>
      <SlideHeader kicker="Our 12-Month Vision" title="From Proven Infrastructure to Scaled Market Impact" />
      <div style={{ padding: "40px 110px 0" }}>
        {/* Hero growth */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr auto", alignItems: "center", gap: 40 }}>
          <div>
            <div className="slide-chrome" style={{ color: "#9a96a0", marginBottom: 10 }}>TODAY</div>
            <div className="slide-stat" style={{ color: INK, fontSize: 140 }}>5M</div>
            <div className="slide-caption" style={{ color: "#5a5560" }}>messages per month</div>
          </div>
          <svg width="160" height="60" viewBox="0 0 160 60">
            <line x1="0" y1="30" x2="140" y2="30" stroke={PURPLE} strokeWidth="4" />
            <polygon points="140,18 160,30 140,42" fill={PURPLE} />
          </svg>
          <div>
            <div className="slide-chrome" style={{ color: YELLOW, marginBottom: 10, fontWeight: 700 }}>12-MONTH AMBITION</div>
            <div className="slide-stat" style={{ color: PURPLE, fontSize: 160 }}>35M</div>
            <div className="slide-caption" style={{ color: "#5a5560" }}>messages per month</div>
          </div>
          <div style={{ borderLeft: `4px solid ${YELLOW}`, paddingLeft: 28 }}>
            <div className="slide-stat" style={{ color: YELLOW, fontSize: 140, fontWeight: 800 }}>7×</div>
            <div className="slide-caption" style={{ color: "#5a5560", maxWidth: 200 }}>monthly volume growth ambition</div>
          </div>
        </div>

        {/* Annualized */}
        <div style={{ display: "flex", alignItems: "center", gap: 28, marginTop: 50, paddingTop: 28, borderTop: `1px solid #e6e3df` }}>
          <div className="slide-chrome" style={{ color: "#9a96a0" }}>ANNUALIZED</div>
          <div className="slide-subtitle" style={{ color: INK, fontWeight: 700 }}>60M</div>
          <div className="slide-caption" style={{ color: "#9a96a0" }}>current</div>
          <svg width="60" height="20"><line x1="0" y1="10" x2="46" y2="10" stroke={PURPLE} strokeWidth="2" /><polygon points="46,4 60,10 46,16" fill={PURPLE} /></svg>
          <div className="slide-subtitle" style={{ color: PURPLE, fontWeight: 700 }}>420M</div>
          <div className="slide-caption" style={{ color: YELLOW, fontWeight: 600 }}>targeted run rate · 12-month ambition</div>
        </div>

        {/* Pillars */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28, marginTop: 50 }}>
          {[
            "Scale domestic messaging volume",
            "Grow the enterprise customer base",
            "Strengthen strategic operator relationships",
            "Expand multi-channel adoption",
          ].map((p, i) => (
            <div key={p} style={{ borderTop: `3px solid ${YELLOW}`, paddingTop: 16 }}>
              <div className="slide-chrome" style={{ color: "#9a96a0", marginBottom: 8 }}>{`0${i + 1}`}</div>
              <div className="slide-body" style={{ color: INK, fontSize: 24, fontWeight: 600, fontFamily: "Manrope" }}>{p}</div>
            </div>
          ))}
        </div>

        <p className="slide-caption" style={{ color: "#5a5560", marginTop: 40, maxWidth: 1200 }}>
          The infrastructure is already in place. The next phase is focused on accelerating commercial scale.
        </p>
      </div>
      <SlideFooter n={6} />
    </SlideFrame>
  );
}

/* ---------------- 7. WHY IMISSIVE ---------------- */
export function WhySlide() {
  const themes = [
    { n: "01", t: "Industry Experience", d: "29+ years of combined messaging expertise" },
    { n: "02", t: "Technical Readiness", d: "Stress-tested, high-volume API and SMPP infrastructure" },
    { n: "03", t: "Local Execution", d: "Saudi market understanding and responsive local support" },
    { n: "04", t: "Enterprise Governance", d: "Reporting, sender management, permissions and structured operations" },
  ];
  return (
    <SlideFrame>
      <SlideHeader kicker="Why iMissive for Enterprise Opportunities" title="A Capable Local Partner for Enterprise Messaging" />
      <div style={{ padding: "70px 110px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px 90px" }}>
        {themes.map((th) => (
          <div key={th.n} style={{ borderTop: `3px solid ${YELLOW}`, paddingTop: 24 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 28 }}>
              <div className="slide-stat-sm" style={{ color: PURPLE, fontSize: 88 }}>{th.n}</div>
              <div>
                <h3 className="slide-title-sm" style={{ color: INK, fontSize: 42, margin: 0, marginBottom: 12 }}>{th.t}</h3>
                <div className="slide-body" style={{ color: "#3d3742", maxWidth: 520 }}>{th.d}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: "60px 110px 0" }}>
        <p className="slide-body-lg" style={{ color: INK, margin: 0, maxWidth: 1500, borderLeft: `4px solid ${YELLOW}`, paddingLeft: 28 }}>
          iMissive combines the agility of a specialized local provider with the infrastructure and institutional backing required for enterprise delivery.
        </p>
      </div>
      <SlideFooter n={7} />
    </SlideFrame>
  );
}

/* ---------------- 8. PARTNERSHIP ---------------- */
export function PartnershipSlide() {
  const areas = [
    {
      t: "Enterprise Opportunity Referrals",
      d: "Consider iMissive among qualified local providers for suitable enterprise messaging opportunities.",
      c: STC_PURPLE,
    },
    {
      t: "Joint Enterprise Engagement",
      d: "Collaborate on strategic accounts requiring platform integration, reporting and local operational support.",
      c: STC_CORAL,
    },
    {
      t: "Growth-Enabled Payment Terms",
      d: "Extend payment terms to 60 days to support larger enterprise commitments and sustainable traffic growth.",
      c: YELLOW,
    },
    {
      t: "Structured Coordination",
      d: "Establish clear commercial and operational points of contact with regular business reviews.",
      c: PURPLE,
    },
  ];
  return (
    <SlideFrame>
      <div style={{ background: STC_PURPLE, color: "#fff", padding: "60px 110px 50px" }}>
        <div className="slide-kicker" style={{ color: "#fff", opacity: 0.75, marginBottom: 14 }}>
          Partnership Model
        </div>
        <h2 className="slide-title-sm" style={{ color: "#fff", margin: 0 }}>A Partnership Model for Mutual Growth</h2>
        <div className="slide-subtitle" style={{ color: STC_CORAL, marginTop: 18, fontWeight: 600 }}>
          Combining stc's Market Reach with iMissive's Enterprise Execution
        </div>
      </div>

      <div style={{ padding: "60px 110px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "50px 80px" }}>
        {areas.map((a, i) => (
          <div key={a.t} style={{ paddingLeft: 28, borderLeft: `4px solid ${a.c}` }}>
            <div className="slide-chrome" style={{ color: "#9a96a0", marginBottom: 8 }}>{`0${i + 1}`}</div>
            <h3 className="slide-title-sm" style={{ color: INK, fontSize: 38, margin: 0, marginBottom: 14 }}>{a.t}</h3>
            <div className="slide-body" style={{ color: "#3d3742", maxWidth: 640, fontSize: 24, lineHeight: 1.45 }}>{a.d}</div>
          </div>
        ))}
      </div>
      <SlideFooter n={8} />
    </SlideFrame>
  );
}

/* ---------------- 9. CLOSING ---------------- */
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
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", height: "100%" }}>
        {/* Left — statement */}
        <div style={{ background: PURPLE, color: "#fff", padding: "100px 90px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div className="slide-kicker" style={{ color: YELLOW }}>Next Steps & Closing</div>

          <div>
            <h2 className="slide-title" style={{ color: "#fff", margin: 0 }}>
              The Infrastructure<br />Is Ready.
            </h2>
            <h2 className="slide-title" style={{ color: YELLOW, margin: 0, marginTop: 12 }}>
              The Next Chapter<br />Is Scale.
            </h2>
          </div>

          <p className="slide-body" style={{ color: "#fff", opacity: 0.85, maxWidth: 760, margin: 0 }}>
            Together, iMissive and stc can unlock new enterprise messaging growth while delivering reliable,
            locally supported communication at scale.
          </p>
        </div>

        {/* Right — next steps + contact */}
        <div style={{ padding: "80px 80px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div className="slide-kicker" style={{ color: PURPLE, marginBottom: 28 }}>Suggested Next Steps</div>
            <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 18 }}>
              {steps.map((s, i) => (
                <li key={s} style={{ display: "flex", alignItems: "baseline", gap: 22 }}>
                  <span className="slide-chrome" style={{ color: YELLOW, fontWeight: 700, width: 36, fontVariantNumeric: "tabular-nums" }}>{`0${i + 1}`}</span>
                  <span className="slide-body" style={{ color: INK, fontSize: 24, lineHeight: 1.35 }}>{s}</span>
                </li>
              ))}
            </ol>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, paddingBottom: 24, borderBottom: "1px solid #e6e3df" }}>
              <IMissiveLogo height={44} />
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span className="slide-chrome" style={{ color: "#9a96a0" }}>with</span>
                <StcLogo size={56} color={STC_PURPLE} />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span className="slide-chrome" style={{ color: "#9a96a0" }}>Part of</span>
                <RasscoLogo height={28} />
              </div>
            </div>

            <div className="slide-caption" style={{ color: "#5a5560", lineHeight: 1.55 }}>
              <div style={{ color: INK, fontWeight: 700, fontFamily: "Manrope" }}>{meta.contact.company}</div>
              <div>{meta.contact.legal}</div>
              <div>{meta.contact.location}</div>
              <div style={{ marginTop: 6 }}>{meta.contact.web} · {meta.contact.email}</div>
              <div>{meta.contact.phone}</div>
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