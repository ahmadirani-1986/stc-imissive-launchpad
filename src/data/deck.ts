export const meta = {
  title: "iMissive × stc",
  headline: "Growing Enterprise Messaging Together",
  subtitle: "Strategic Partnership Discussion",
  date: "23 June 2026 | Riyadh",
  presenters: [
    { name: "Ahmad Bassam", role: "CCO & Co-Founder, iMissive" },
    { name: "Mohammad Naqawa", role: "CTO, iMissive" },
    { name: "Basem Al Abdulqader", role: "CCO, RASSCO Group" },
  ],
  contact: {
    company: "iMissive",
    legal: "Interactive Digital Solutions for IT Co.",
    location: "Riyadh, Saudi Arabia",
    web: "www.imissive.com",
    email: "Sales@imissive.com",
    phone: "+966 580 18 18 11",
  },
};

export type SlideDef = {
  id: string;
  title: string;
  notes: string;
};

export const slides: SlideDef[] = [
  {
    id: "cover",
    title: "Cover",
    notes:
      "Good morning, and thank you for the time today. I'm Ahmad Bassam, joined by our CTO Mohammad Naqawa and Basem Al Abdulqader from RASSCO Group. In the next ten minutes we want to share where iMissive stands today as a Saudi enterprise messaging provider, where our existing relationship with stc already creates value, and three specific directions we believe are worth exploring together. This is a working conversation, not a pitch.",
  },
  {
    id: "glance",
    title: "iMissive at a Glance",
    notes:
      "iMissive is a licensed Saudi SMS aggregator built specifically for enterprise communication. Between our founders and senior team we carry more than twenty-nine years of combined messaging experience, and today we manage around five million domestic messages every month for our customers. We sit inside RASSCO Group — nine specialized companies, more than two thousand five hundred employees, and over sixty-five group clients — which gives us the institutional backing, governance and local presence that enterprise buyers expect. Commercial, technical and operational support all sit inside Saudi Arabia.",
  },
  {
    id: "scale",
    title: "Engineered for Scale",
    notes:
      "On the technical side, the platform has been stress-tested at three hundred transactions per second through our API, and one hundred TPS per SMPP session, with up to ten sessions available per customer based on requirements. Enterprise customers connect through API or SMPP, traffic moves through intelligent routing and lands on stc on-net connectivity. We run twenty-four-seven monitoring, with failover, backup and recovery, and full delivery reporting. The point is straightforward: the infrastructure is already in place to absorb significantly larger volumes.",
  },
  {
    id: "ecosystem",
    title: "Communication Ecosystem",
    notes:
      "Enterprise SMS is and remains our core. Around it we offer the channels modern enterprises increasingly ask for in the same conversation — OTP and authentication, WhatsApp Business, RCS, AI chatbots and voice agents, push, enterprise APIs and email-to-SMS. The value to stc and to joint customers is a single, governed communication foundation rather than a patchwork of point tools.",
  },
  {
    id: "relationship",
    title: "Already Within the stc Ecosystem",
    notes:
      "We are not new to the stc ecosystem. We already have a contracted on-net relationship for enterprise messaging, billed monthly on usage, for domestic Saudi traffic. Our cloud infrastructure runs locally on SCCC Alibaba Cloud, which itself was formed through partnerships that include stc Group. And we have established account management, operational and commercial touchpoints. So the foundation is real — what we want to discuss today is how to grow it.",
  },
  {
    id: "vision",
    title: "Our 12-Month Vision",
    notes:
      "Today we manage around five million messages per month — roughly sixty million annualized. Our twelve-month ambition is to reach thirty-five million per month, a seven-times growth, which translates to a four-hundred-and-twenty million annualized run rate. These are clearly forward figures, not commitments. They are anchored on four pillars: scaling domestic volume, growing the enterprise customer base, strengthening operator relationships, and broadening multi-channel adoption. The infrastructure is ready; the next phase is commercial scale.",
  },
  {
    id: "why",
    title: "Why iMissive",
    notes:
      "When stc evaluates local providers for enterprise opportunities, we believe four things make iMissive a credible option: deep messaging experience, infrastructure that has been stress-tested for high volume, genuine local execution with Saudi-based support, and the governance enterprise customers require — proper reporting, sender management, permissions and structured operations. We combine the agility of a specialized provider with the institutional backing of RASSCO Group.",
  },
  {
    id: "partnership",
    title: "Partnership Model",
    notes:
      "We would like to put four areas on the table for discussion. First, considering iMissive among the qualified local providers for suitable enterprise opportunities referred by stc. Second, joint engagement on strategic accounts that benefit from a specialized provider alongside stc's market reach. Third, an extension of our payment terms to sixty days, which would allow us to take on materially larger enterprise commitments responsibly. And fourth, lightweight structured coordination — clear points of contact and regular business reviews. None of these are demands; they are directions we believe create mutual upside.",
  },
  {
    id: "closing",
    title: "Next Steps and Closing",
    notes:
      "To close: the infrastructure is ready, and the next chapter is scale. As immediate next steps we would suggest confirming the right enterprise referral path on stc's side, identifying commercial and operational owners on both sides, reviewing the sixty-day payment-term request, selecting one or two initial enterprise opportunities to collaborate on, and agreeing a regular business review cadence. Together, iMissive and stc can unlock meaningful enterprise messaging growth while delivering reliable, locally supported communication at scale. Thank you — we welcome your questions.",
  },
];