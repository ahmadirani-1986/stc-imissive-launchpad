import type { ReactNode } from "react";
import {
  Activity,
  BellRing,
  Bot,
  Braces,
  Building2,
  CalendarClock,
  Check,
  Cloud,
  Gauge,
  Handshake,
  Headphones,
  KeyRound,
  Mail,
  MessageSquareText,
  MessagesSquare,
  Network,
  PhoneCall,
  RadioTower,
  Route,
  ServerCog,
  ShieldCheck,
  UsersRound,
  Workflow,
} from "lucide-react";
import { IMissiveLogo, IMissiveLogoNegative, RasscoLogo, StcLogo } from "../Brand";
import { meta } from "@/data/deck";

const PURPLE = "#492E51";
const YELLOW = "#FDBF30";
const TEAL = "#61C5BA";
const ORANGE = "#F68C20";
const PINK = "#E0357C";
const STC_PURPLE = "#4F00A0";
const STC_CORAL = "#FF375E";
const INK = "#151217";
const PAPER = "#F7F5F2";
const MUTED = "#665F69";

function Slide({ children, bg = PAPER, className = "" }: { children: ReactNode; bg?: string; className?: string }) {
  return (
    <div className={`slide-content ${className}`} style={{ background: bg }}>
      {children}
    </div>
  );
}

function Triangle({ color = YELLOW, size = 30 }: { color?: string; size?: number }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-block",
        width: 0,
        height: 0,
        borderTop: `${size * 0.62}px solid transparent`,
        borderBottom: `${size * 0.62}px solid transparent`,
        borderLeft: `${size}px solid ${color}`,
      }}
    />
  );
}

function Header({ overline, title, light = false, accent = YELLOW }: { overline: string; title: string; light?: boolean; accent?: string }) {
  return (
    <header style={{ padding: "62px 88px 0", position: "relative", zIndex: 3 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
        <Triangle color={accent} size={14} />
        <div className="slide-kicker" style={{ color: light ? "rgba(255,255,255,.74)" : PURPLE }}>{overline}</div>
      </div>
      <h2 className="slide-title-sm" style={{ margin: 0, color: light ? "#fff" : INK, maxWidth: 1500 }}>{title}</h2>
    </header>
  );
}

function Footer({ n, light = false }: { n: number; light?: boolean }) {
  return (
    <footer style={{ position: "absolute", left: 88, right: 88, bottom: 32, display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 5 }}>
      {light ? <IMissiveLogoNegative height={24} /> : <IMissiveLogo height={24} />}
      <span className="slide-chrome" style={{ color: light ? "rgba(255,255,255,.56)" : "#948D97", fontVariantNumeric: "tabular-nums" }}>
        {String(n).padStart(2, "0")} / 09
      </span>
    </footer>
  );
}

function Rule({ color = YELLOW, width = 72 }: { color?: string; width?: number }) {
  return <div style={{ width, height: 6, background: color }} />;
}

/* 01 — Cover */
export function CoverSlide() {
  return (
    <Slide bg={PURPLE}>
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -180, top: -210, width: 820, height: 820, background: STC_PURPLE, transform: "rotate(18deg)", opacity: 0.72 }} />
        <div style={{ position: "absolute", right: 80, bottom: -250, width: 680, height: 680, background: STC_CORAL, clipPath: "polygon(0 50%, 100% 0, 100% 100%)" }} />
        <div style={{ position: "absolute", right: 360, top: 285, width: 0, height: 0, borderTop: "170px solid transparent", borderBottom: "170px solid transparent", borderLeft: `270px solid ${YELLOW}` }} />
        <div className="signal-grid" style={{ position: "absolute", inset: "0 0 0 58%", opacity: 0.18 }} />
      </div>

      <div style={{ position: "absolute", top: 58, left: 82, right: 82, display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 3 }}>
        <IMissiveLogoNegative height={52} />
        <div style={{ width: 196, height: 112, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <StcLogo height={58} />
        </div>
      </div>

      <main style={{ position: "relative", zIndex: 2, height: "100%", padding: "215px 82px 90px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ maxWidth: 1110 }}>
          <div className="slide-kicker" style={{ color: YELLOW, marginBottom: 28 }}>Strategic Partnership Discussion</div>
          <h1 className="slide-title-xl" style={{ margin: 0, color: "#fff", maxWidth: 1020 }}>
            Growing enterprise messaging.
            <span style={{ display: "block", color: YELLOW }}>Together.</span>
          </h1>
          <div style={{ marginTop: 38, display: "flex", alignItems: "center", gap: 22 }}>
            <Rule color={STC_CORAL} width={98} />
            <div className="slide-body" style={{ color: "rgba(255,255,255,.74)" }}>iMissive &times; stc</div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr auto", gap: 48, alignItems: "end", color: "#fff" }}>
          <div>
            <div className="slide-kicker" style={{ color: "rgba(255,255,255,.5)", marginBottom: 14 }}>Presented by</div>
            <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
              {meta.presenters.map((p) => (
                <div key={p.name}>
                  <div className="slide-caption" style={{ color: "#fff", fontWeight: 700, fontFamily: "Manrope" }}>{p.name}</div>
                  <div style={{ color: "rgba(255,255,255,.58)", fontSize: 16, marginTop: 3 }}>{p.role}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="slide-caption" style={{ color: "rgba(255,255,255,.62)" }}>{meta.date}</div>
          <div style={{ background: "rgba(255,255,255,.94)", padding: "13px 16px", display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ color: "#77707A", fontSize: 15 }}>Part of</span>
            <RasscoLogo height={30} />
          </div>
        </div>
      </main>
    </Slide>
  );
}

/* 02 — At a glance */
export function GlanceSlide() {
  return (
    <Slide>
      <Header overline="iMissive at a glance" title="Built for enterprise communication" />

      <div style={{ padding: "54px 88px 0", display: "grid", gridTemplateColumns: "0.92fr 1.08fr", gap: 46, height: 700 }}>
        <section style={{ background: PURPLE, color: "#fff", padding: "54px 58px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", right: -86, top: -70, color: TEAL, opacity: 0.22, transform: "scale(6)" }}><Triangle color={TEAL} size={38} /></div>
          <div className="slide-kicker" style={{ color: YELLOW }}>Messaging experience</div>
          <div className="slide-stat" style={{ fontSize: 190, color: "#fff", marginTop: 46 }}>29+</div>
          <div className="slide-subtitle" style={{ color: YELLOW, maxWidth: 500 }}>combined years in enterprise messaging</div>
          <p className="slide-body" style={{ color: "rgba(255,255,255,.72)", margin: "48px 0 0", maxWidth: 620 }}>
            A Saudi enterprise communications provider built by operators who understand scale, reliability and delivery.
          </p>
        </section>

        <section style={{ display: "grid", gridTemplateRows: "1fr 230px", gap: 30 }}>
          <div style={{ background: "#fff", padding: "50px 56px", position: "relative", border: "1px solid #E5E0E6" }}>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 36 }}>
              <div>
                <div className="slide-kicker" style={{ color: PURPLE }}>Current domestic traffic</div>
                <div className="slide-stat" style={{ color: PURPLE, fontSize: 190, marginTop: 34 }}>5M</div>
                <div className="slide-subtitle" style={{ color: INK }}>messages managed monthly</div>
              </div>
              <div style={{ width: 150, height: 150, background: YELLOW, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <MessageSquareText size={72} color={PURPLE} strokeWidth={1.7} />
              </div>
            </div>
            <div style={{ position: "absolute", left: 56, bottom: 44, display: "flex", gap: 30 }}>
              {["Licensed Saudi SMS aggregator", "Local technical and operational support"].map((item) => (
                <div key={item} className="slide-caption" style={{ display: "flex", alignItems: "center", gap: 10, color: MUTED }}>
                  <Check size={22} color={TEAL} strokeWidth={3} /> {item}
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "#fff", borderLeft: `10px solid ${TEAL}`, padding: "28px 38px", display: "grid", gridTemplateColumns: "auto 1fr", gap: 34, alignItems: "center" }}>
            <RasscoLogo height={60} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {[
                ["9", "specialized companies"],
                ["2,500+", "group employees"],
                ["65+", "group clients"],
              ].map(([value, label]) => (
                <div key={label} style={{ borderLeft: "1px solid #DDD6DE", paddingLeft: 24 }}>
                  <div style={{ fontFamily: "Manrope", fontSize: 48, fontWeight: 800, color: INK }}>{value}</div>
                  <div style={{ fontSize: 17, color: MUTED, marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer n={2} />
    </Slide>
  );
}

/* 03 — Scale */
export function ScaleSlide() {
  const proof = [
    { value: "100 TPS", label: "per SMPP session", icon: Activity },
    { value: "Up to 10", label: "sessions per customer", icon: Network },
    { value: "24/7", label: "platform monitoring", icon: Headphones },
  ];
  const flow = ["Enterprise", "API / SMPP", "iMissive Core", "Routing", "stc On-Net"];
  return (
    <Slide bg={INK}>
      <Header overline="Engineered for scale" title="Infrastructure ready for high-volume operations" light />

      <div style={{ padding: "52px 88px 0", display: "grid", gridTemplateColumns: "1.02fr .98fr", gap: 72 }}>
        <section style={{ position: "relative" }}>
          <div className="slide-kicker" style={{ color: TEAL }}>Stress-tested API throughput</div>
          <div className="slide-stat" style={{ fontSize: 225, color: YELLOW, marginTop: 28 }}>300</div>
          <div style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 2 }}>
            <div className="slide-title-sm" style={{ color: "#fff" }}>TPS</div>
            <Rule color={STC_CORAL} width={110} />
          </div>
          <p className="slide-body" style={{ color: "rgba(255,255,255,.62)", maxWidth: 690, marginTop: 40 }}>
            Tested under load, with failover, backup and delivery visibility built into the operating model.
          </p>
        </section>

        <section style={{ paddingTop: 8 }}>
          {proof.map(({ value, label, icon: Icon }, index) => (
            <div key={label} style={{ display: "grid", gridTemplateColumns: "78px 1fr", gap: 26, alignItems: "center", padding: "25px 0", borderBottom: "1px solid rgba(255,255,255,.12)" }}>
              <div style={{ width: 70, height: 70, background: index === 0 ? PURPLE : index === 1 ? TEAL : STC_PURPLE, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon size={34} color="#fff" strokeWidth={1.8} />
              </div>
              <div>
                <div style={{ fontFamily: "Manrope", fontSize: 52, fontWeight: 800, color: "#fff" }}>{value}</div>
                <div className="slide-caption" style={{ color: "rgba(255,255,255,.55)" }}>{label}</div>
              </div>
            </div>
          ))}
        </section>
      </div>

      <div style={{ position: "absolute", left: 88, right: 88, bottom: 92, height: 155, background: "#fff", padding: "26px 34px", display: "grid", gridTemplateColumns: "repeat(9, auto)", alignItems: "center", justifyContent: "space-between" }}>
        {flow.map((item, index) => (
          <div key={item} style={{ display: "contents" }}>
            <div style={{ minWidth: index === 2 ? 240 : 180, textAlign: "center" }}>
              <div style={{ width: 12, height: 12, background: index === 4 ? STC_CORAL : index === 2 ? YELLOW : TEAL, margin: "0 auto 16px" }} />
              <div style={{ fontFamily: "Manrope", fontSize: 21, fontWeight: 700, color: index === 2 ? PURPLE : INK }}>{item}</div>
            </div>
            {index < flow.length - 1 && <div style={{ width: 76, height: 2, background: "#D8D1DA", position: "relative" }}><span style={{ position: "absolute", right: -2, top: -4, width: 9, height: 9, borderTop: "2px solid #D8D1DA", borderRight: "2px solid #D8D1DA", transform: "rotate(45deg)" }} /></div>}
          </div>
        ))}
      </div>
      <Footer n={3} light />
    </Slide>
  );
}

/* 04 — Ecosystem */
export function EcosystemSlide() {
  const services = [
    { name: "OTP & Authentication", icon: KeyRound, color: YELLOW },
    { name: "WhatsApp Business", icon: MessagesSquare, color: TEAL },
    { name: "RCS Messaging", icon: RadioTower, color: STC_CORAL },
    { name: "AI Chatbots", icon: Bot, color: ORANGE },
    { name: "AI Voice Agents", icon: PhoneCall, color: PINK },
    { name: "Push Notifications", icon: BellRing, color: TEAL },
    { name: "Enterprise APIs", icon: Braces, color: YELLOW },
    { name: "Email-to-SMS", icon: Mail, color: STC_CORAL },
  ];
  return (
    <Slide bg="#fff">
      <Header overline="Communication ecosystem" title="SMS at the core. More channels around it." />

      <div style={{ padding: "46px 88px 0", display: "grid", gridTemplateColumns: "610px 1fr", gap: 82, alignItems: "center" }}>
        <section style={{ height: 690, background: PURPLE, color: "#fff", position: "relative", padding: "62px 58px", overflow: "hidden" }}>
          <div className="signal-grid" style={{ position: "absolute", inset: 0, opacity: 0.16 }} />
          <div style={{ position: "relative", zIndex: 2 }}>
            <MessageSquareText size={74} color={YELLOW} strokeWidth={1.6} />
            <div className="slide-kicker" style={{ color: "rgba(255,255,255,.6)", marginTop: 48 }}>The operational core</div>
            <div style={{ fontFamily: "Manrope", fontSize: 116, fontWeight: 800, lineHeight: 0.95, color: "#fff", marginTop: 18 }}>Enterprise<br /><span style={{ color: YELLOW }}>SMS</span></div>
            <p className="slide-body" style={{ color: "rgba(255,255,255,.68)", margin: "45px 0 0", maxWidth: 460 }}>
              Integration, governance and measurable delivery from one local operating team.
            </p>
          </div>
          <div style={{ position: "absolute", right: -80, bottom: -60, color: TEAL, transform: "scale(5)", opacity: .22 }}><Triangle color={TEAL} size={30} /></div>
        </section>

        <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 52, rowGap: 0 }}>
          {services.map(({ name, icon: Icon, color }, index) => (
            <div key={name} style={{ minHeight: 135, display: "grid", gridTemplateColumns: "62px 1fr", gap: 22, alignItems: "center", borderBottom: index < 6 ? "1px solid #E6E0E7" : "none" }}>
              <div style={{ width: 58, height: 58, background: color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon size={29} color={color === YELLOW || color === TEAL ? PURPLE : "#fff"} strokeWidth={1.9} />
              </div>
              <div style={{ fontFamily: "Manrope", fontSize: 24, fontWeight: 700, color: INK }}>{name}</div>
            </div>
          ))}
        </section>
      </div>
      <Footer n={4} />
    </Slide>
  );
}

/* 05 — Existing relationship */
export function RelationshipSlide() {
  const pillars = [
    { n: "01", title: "Messaging", icon: MessageSquareText, color: STC_PURPLE, lines: ["Contracted stc On-Net relationship", "Domestic Saudi traffic", "Monthly usage-based billing"] },
    { n: "02", title: "Cloud", icon: Cloud, color: TEAL, lines: ["Saudi-based SCCC Alibaba Cloud", "Part of a wider ecosystem that includes stc Group"] },
    { n: "03", title: "Operations", icon: Workflow, color: YELLOW, lines: ["Established account management", "Active commercial and operational touchpoints"] },
  ];
  return (
    <Slide>
      <div style={{ position: "absolute", top: 0, right: 0, width: 520, height: 250, background: STC_PURPLE }} />
      <div style={{ position: "absolute", top: 0, right: 520, width: 250, height: 250, background: STC_CORAL, clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} />
      <div style={{ position: "absolute", top: 62, right: 92, width: 188, height: 102, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 4 }}><StcLogo height={52} /></div>
      <Header overline="Already within the stc ecosystem" title="An existing relationship with room to grow" accent={STC_CORAL} />

      <div style={{ padding: "70px 88px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
          {pillars.map(({ n, title, icon: Icon, color, lines }) => (
            <section key={title} style={{ background: "#fff", minHeight: 440, padding: "38px 38px 34px", borderTop: `9px solid ${color}`, position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ width: 68, height: 68, background: color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={34} color={color === YELLOW || color === TEAL ? PURPLE : "#fff"} strokeWidth={1.8} />
                </div>
                <span style={{ fontFamily: "Manrope", fontSize: 22, fontWeight: 800, color: "#A19AA5" }}>{n}</span>
              </div>
              <h3 style={{ fontFamily: "Manrope", fontSize: 42, margin: "32px 0 26px", color: INK }}>{title}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {lines.map((line) => <div key={line} className="slide-caption" style={{ color: MUTED, paddingBottom: 16, borderBottom: "1px solid #EEE9EF" }}>{line}</div>)}
              </div>
            </section>
          ))}
        </div>

        <div style={{ marginTop: 42, display: "flex", alignItems: "center", gap: 28 }}>
          <Rule color={STC_CORAL} width={100} />
          <p className="slide-body-lg" style={{ margin: 0, color: INK, maxWidth: 1440 }}>
            iMissive is already invested in the broader <strong style={{ color: STC_PURPLE }}>stc ecosystem</strong> through messaging connectivity and Saudi-based cloud infrastructure.
          </p>
        </div>
      </div>
      <Footer n={5} />
    </Slide>
  );
}

/* 06 — Vision */
export function VisionSlide() {
  const pillars = [
    [Gauge, "Scale domestic volume"],
    [Building2, "Grow enterprise customers"],
    [Handshake, "Strengthen operator relationships"],
    [Network, "Expand multi-channel adoption"],
  ] as const;
  return (
    <Slide bg="#fff">
      <Header overline="Our 12-month vision" title="From proven infrastructure to scaled market impact" />

      <div style={{ padding: "40px 88px 0", position: "relative" }}>
        <div style={{ height: 460, background: PAPER, position: "relative", overflow: "hidden" }}>
          <div className="signal-grid" style={{ position: "absolute", inset: 0, opacity: .5 }} />
          <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 300, background: PURPLE, clipPath: "polygon(0 88%, 100% 0, 100% 100%, 0 100%)" }} />

          <div style={{ position: "absolute", left: 58, top: 56 }}>
            <div className="slide-kicker" style={{ color: MUTED }}>Today</div>
            <div className="slide-stat" style={{ fontSize: 142, color: INK, marginTop: 12 }}>5M</div>
            <div className="slide-caption" style={{ color: MUTED }}>messages per month</div>
          </div>

          <div style={{ position: "absolute", left: "48%", top: 45, background: YELLOW, color: PURPLE, width: 146, height: 146, borderRadius: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ fontFamily: "Manrope", fontSize: 56, lineHeight: 1, fontWeight: 800 }}>7&times;</div>
            <div style={{ fontSize: 15, fontWeight: 700, marginTop: 7 }}>GROWTH</div>
          </div>

          <div style={{ position: "absolute", right: 62, top: 58, textAlign: "right" }}>
            <div className="slide-kicker" style={{ color: YELLOW }}>12-month ambition</div>
            <div className="slide-stat" style={{ fontSize: 170, color: "#fff", marginTop: 12 }}>35M</div>
            <div className="slide-caption" style={{ color: "rgba(255,255,255,.68)" }}>messages per month</div>
          </div>

          <div style={{ position: "absolute", left: "37%", bottom: 34, display: "flex", alignItems: "center", gap: 18, color: "#fff" }}>
            <span className="slide-caption" style={{ opacity: .58 }}>Annualized</span>
            <strong style={{ fontFamily: "Manrope", fontSize: 32 }}>60M</strong>
            <span style={{ color: YELLOW, fontSize: 34 }}>→</span>
            <strong style={{ fontFamily: "Manrope", fontSize: 42, color: YELLOW }}>420M</strong>
            <span className="slide-caption" style={{ opacity: .58 }}>target run rate</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 22, marginTop: 34 }}>
          {pillars.map(([Icon, label], index) => (
            <div key={label} style={{ display: "grid", gridTemplateColumns: "58px 1fr", gap: 18, alignItems: "center", padding: "20px 0", borderTop: `4px solid ${[YELLOW, TEAL, STC_CORAL, PURPLE][index]}` }}>
              <Icon size={34} color={PURPLE} strokeWidth={1.8} />
              <span style={{ fontFamily: "Manrope", fontSize: 21, fontWeight: 700, color: INK }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
      <Footer n={6} />
    </Slide>
  );
}

/* 07 — Why iMissive */
export function WhySlide() {
  const reasons = [
    { icon: UsersRound, title: "Industry experience", proof: "29+ years of combined messaging expertise", color: YELLOW },
    { icon: ServerCog, title: "Technical readiness", proof: "Stress-tested API and SMPP infrastructure", color: TEAL },
    { icon: Route, title: "Local execution", proof: "Saudi market understanding and responsive support", color: STC_CORAL },
    { icon: ShieldCheck, title: "Enterprise governance", proof: "Reporting, sender management and structured operations", color: PINK },
  ];
  return (
    <Slide bg={INK}>
      <Header overline="Why iMissive for enterprise opportunities" title="A capable local partner for enterprise messaging" light />
      <div style={{ padding: "62px 88px 0", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
        {reasons.map(({ icon: Icon, title, proof, color }, index) => (
          <section key={title} style={{ minHeight: 570, background: index % 2 === 0 ? "#211D24" : "#29232C", padding: "40px 34px", position: "relative" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ width: 72, height: 72, background: color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon size={36} color={color === YELLOW || color === TEAL ? PURPLE : "#fff"} strokeWidth={1.7} />
              </div>
              <span style={{ fontFamily: "Manrope", fontSize: 22, color: "rgba(255,255,255,.34)" }}>0{index + 1}</span>
            </div>
            <h3 style={{ fontFamily: "Manrope", fontSize: 37, lineHeight: 1.12, margin: "58px 0 28px", color: "#fff" }}>{title}</h3>
            <p className="slide-body" style={{ color: "rgba(255,255,255,.6)", margin: 0 }}>{proof}</p>
            <div style={{ position: "absolute", left: 34, right: 34, bottom: 34, height: 7, background: color }} />
          </section>
        ))}
      </div>
      <div style={{ position: "absolute", left: 350, bottom: 38, color: "rgba(255,255,255,.56)", fontSize: 17 }}>
        Specialized local agility. Enterprise-grade execution. Institutional backing from RASSCO Group.
      </div>
      <Footer n={7} light />
    </Slide>
  );
}

/* 08 — Partnership */
export function PartnershipSlide() {
  const areas = [
    { title: "Enterprise opportunity referrals", text: "Consider iMissive for suitable opportunities requiring a qualified local messaging provider.", icon: Route },
    { title: "Joint enterprise engagement", text: "Collaborate on strategic accounts requiring integration, reporting and local operations.", icon: Handshake },
    { title: "Growth-enabled payment terms", text: "Extend payment terms to 60 days to support larger enterprise commitments.", icon: CalendarClock },
    { title: "Structured coordination", text: "Establish clear commercial and operational owners with regular business reviews.", icon: Workflow },
  ];
  return (
    <Slide bg={STC_PURPLE}>
      <div style={{ position: "absolute", right: -130, bottom: -180, width: 720, height: 720, background: STC_CORAL, clipPath: "polygon(0 50%, 100% 0, 100% 100%)" }} />
      <div style={{ position: "absolute", right: 130, top: 70, width: 176, height: 100, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 4 }}><StcLogo height={50} /></div>
      <Header overline="Discussion framework" title="A partnership model for mutual growth" light accent={STC_CORAL} />

      <div style={{ padding: "56px 88px 0", display: "grid", gridTemplateColumns: "540px 1fr", gap: 84 }}>
        <section>
          <div className="slide-kicker" style={{ color: "rgba(255,255,255,.54)" }}>The shared opportunity</div>
          <h3 style={{ fontFamily: "Manrope", fontSize: 62, lineHeight: 1.08, margin: "28px 0", color: "#fff" }}>
            stc market reach
            <span style={{ display: "block", color: STC_CORAL }}>meets</span>
            iMissive execution.
          </h3>
          <p className="slide-body" style={{ color: "rgba(255,255,255,.64)", maxWidth: 500 }}>
            A practical model designed to convert enterprise opportunities into sustainable messaging traffic.
          </p>
        </section>

        <section style={{ background: "#fff", padding: "30px 42px" }}>
          {areas.map(({ title, text, icon: Icon }, index) => (
            <div key={title} style={{ display: "grid", gridTemplateColumns: "70px 1fr", gap: 24, alignItems: "center", minHeight: 142, borderBottom: index < areas.length - 1 ? "1px solid #E7E1E8" : "none" }}>
              <div style={{ width: 60, height: 60, background: index === 2 ? YELLOW : index === 1 ? STC_CORAL : PURPLE, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon size={30} color={index === 2 ? PURPLE : "#fff"} strokeWidth={1.8} />
              </div>
              <div>
                <h3 style={{ fontFamily: "Manrope", fontSize: 27, margin: 0, color: INK }}>{title}</h3>
                <p style={{ fontSize: 19, lineHeight: 1.38, color: MUTED, margin: "8px 0 0", maxWidth: 690 }}>{text}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
      <Footer n={8} light />
    </Slide>
  );
}

/* 09 — Closing */
export function ClosingSlide() {
  const steps = [
    "Confirm the enterprise referral path",
    "Identify commercial and operational owners",
    "Review the 60-day payment-term request",
    "Select initial opportunities for collaboration",
    "Establish a regular business review cadence",
  ];
  return (
    <Slide bg={YELLOW}>
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 690, background: "#fff" }} />
      <div style={{ position: "absolute", left: 0, bottom: 0, width: 760, height: 310, background: PURPLE, clipPath: "polygon(0 48%, 100% 100%, 0 100%)" }} />

      <div style={{ position: "relative", zIndex: 2, height: "100%", display: "grid", gridTemplateColumns: "1fr 690px" }}>
        <section style={{ padding: "70px 80px 68px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <IMissiveLogo height={48} />
          <div>
            <div className="slide-kicker" style={{ color: PURPLE, marginBottom: 30 }}>Next steps</div>
            <h2 className="slide-title" style={{ color: PURPLE, margin: 0, maxWidth: 980 }}>
              The infrastructure is ready.
              <span style={{ display: "block", color: "#fff", background: PURPLE, marginTop: 16, padding: "12px 20px 18px", width: "fit-content" }}>The next chapter is scale.</span>
            </h2>
          </div>
          <div className="slide-caption" style={{ color: "rgba(255,255,255,.72)", maxWidth: 760 }}>
            Together, iMissive and stc can unlock enterprise messaging growth with reliable local execution.
          </div>
        </section>

        <section style={{ padding: "70px 66px 50px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 28, borderBottom: "1px solid #E5DFE6" }}>
              <div>
                <div className="slide-kicker" style={{ color: STC_PURPLE }}>Suggested actions</div>
                <div style={{ fontSize: 18, color: MUTED, marginTop: 9 }}>For discussion and alignment</div>
              </div>
              <StcLogo height={48} />
            </div>
            <ol style={{ listStyle: "none", padding: 0, margin: "30px 0 0" }}>
              {steps.map((step, index) => (
                <li key={step} style={{ display: "grid", gridTemplateColumns: "42px 1fr", gap: 18, alignItems: "center", minHeight: 78, borderBottom: index < steps.length - 1 ? "1px solid #EEE9EF" : "none" }}>
                  <span style={{ fontFamily: "Manrope", fontSize: 17, fontWeight: 800, color: index === 2 ? STC_CORAL : PURPLE }}>0{index + 1}</span>
                  <span style={{ fontSize: 21, lineHeight: 1.32, color: INK }}>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "end", paddingTop: 24, borderTop: "1px solid #E5DFE6" }}>
            <div style={{ fontSize: 16, lineHeight: 1.55, color: MUTED }}>
              <strong style={{ display: "block", color: INK }}>{meta.contact.company}</strong>
              {meta.contact.web} &middot; {meta.contact.email}<br />
              {meta.contact.phone}
            </div>
            <RasscoLogo height={34} />
          </div>
        </section>
      </div>
    </Slide>
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
