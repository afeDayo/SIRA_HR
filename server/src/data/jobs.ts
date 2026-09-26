export type Job = {
  id: string;
  title: string;
  location: string;
  type: string;
  mode: string;
  category: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

export const jobs: Job[] = [
  {
    id: "hr-lead",
    title: "Human Resources Lead",
    location: "Lagos",
    type: "Full-time",
    mode: "Hybrid",
    category: "HR & People",
    summary:
      "A senior, strategic HR role within a venture building & venture capital firm. You'll shape people strategy, leadership capability, the talent agenda, organisational effectiveness and total rewards across the business and its portfolio ventures.",
    responsibilities: [
      "Own people strategy across the firm and its portfolio ventures",
      "Build leadership capability and org effectiveness frameworks",
      "Design the talent agenda — acquisition, development and retention",
      "Lead the total rewards and performance framework",
    ],
    requirements: [
      "8+ years in progressive HR/People roles, incl. leadership",
      "Experience in high-growth, venture or multi-entity environments",
      "Strong grounding in org design and talent strategy",
      "Excellent stakeholder management up to board level",
    ],
  },
  {
    id: "founding-sales",
    title: "Founding Sales Partner",
    location: "Remote · Global",
    type: "Commission-only",
    mode: "Remote",
    category: "Sales",
    summary:
      "A founding commission-only sales role for a builder who wants upside. You'll own the full cycle — pipeline, pitch and close — and help shape the go-to-market motion from the ground up.",
    responsibilities: [
      "Build and own the sales pipeline end to end",
      "Shape the go-to-market and outbound motion",
      "Close and onboard early customers",
      "Feed insights back into product and positioning",
    ],
    requirements: [
      "Proven full-cycle B2B sales track record",
      "Comfortable in ambiguity and building from zero",
      "Self-directed, high-ownership operator",
      "Motivated by uncapped, performance-based upside",
    ],
  },
  {
    id: "hr-operations",
    title: "HR Operations (Contract)",
    location: "Lagos",
    type: "Contract",
    mode: "On-site",
    category: "HR & People",
    summary:
      "We're supporting talent sourcing for an experienced HR Operations professional on a contract basis — someone who can keep people processes running cleanly and reliably day to day.",
    responsibilities: [
      "Run core HR operations and people processes",
      "Own HR systems, records and compliance",
      "Support onboarding, offboarding and payroll inputs",
      "Improve and document repeatable people workflows",
    ],
    requirements: [
      "4+ years in HR operations or people ops",
      "Strong systems and process discipline",
      "Detail-oriented and highly organised",
      "Available on a contract basis, on-site in Lagos",
    ],
  },
  {
    id: "talent-partner",
    title: "Talent Acquisition Partner",
    location: "Lagos",
    type: "Full-time",
    mode: "Hybrid",
    category: "Recruitment",
    summary:
      "Join SIRA HR as a Talent Acquisition Partner. You'll run searches end to end — briefing, sourcing, assessment and placement — with the rigor our clients rely on.",
    responsibilities: [
      "Own client searches from brief to placement",
      "Map markets and headhunt active & passive talent",
      "Assess candidates against competency frameworks",
      "Manage client and candidate relationships",
    ],
    requirements: [
      "3+ years in recruitment or executive search",
      "Strong sourcing and market-mapping skills",
      "Excellent assessment and communication ability",
      "A genuine interest in people and hiring done well",
    ],
  },
];
