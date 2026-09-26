export const site = {
  name: "SIRA HR",
  tagline: "Helping companies build the teams that drive growth.",
  email: "hello@sira-hr.com",
  phone: "+234 810 487 0423",
  location: "Lagos, Nigeria",
  website: "https://www.sira-hr.com",
  linkedin: "https://www.linkedin.com/company/sira-hr",
  instagram: "https://www.instagram.com/sira_hr",
};

export const nav = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Process", to: "/process" },
  { label: "Insights", to: "/insights" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export const heroStats = [
  { value: "14", label: "Days to a vetted shortlist" },
  { value: "90", label: "Day replacement guarantee" },
  { value: "3–5", label: "Assessed candidates per shortlist" },
];

export const services = [
  {
    id: "executive-search",
    num: "01",
    title: "Executive Search & Senior Leadership",
    short:
      "Placing qualified Directors, VPs and C-suite executives who shape where a business goes next.",
    body: "Placing qualified Directors, VPs and C-suite executives. Leadership hires shape culture, strategy and results for years — so we treat them with the depth they deserve: confidential search, rigorous assessment and market mapping that reaches leaders who aren't actively looking.",
    points: [
      {
        h: "Confidential search",
        p: "Discreet outreach that protects your brand and the candidate's.",
      },
      {
        h: "Board-ready shortlists",
        p: "Written profiles, assessment notes and clear recommendations.",
      },
    ],
    price: "20% of first-year gross salary",
  },
  {
    id: "specialist-placement",
    num: "02",
    title: "Mid-Level & Specialist Placement",
    short:
      "Sourcing high-calibre professionals across engineering, product, sales, finance, operations and beyond.",
    body: "Sourcing high-calibre professionals across engineering, product, sales, finance, operations and beyond. We map the full market and assess against a competency framework built for your role — so the shortlist is relevant, not just plentiful.",
    points: [
      {
        h: "Full-market mapping",
        p: "Active and passive candidates, evaluated on fit.",
      },
      {
        h: "Structured assessment",
        p: "Competency-based, role-specific — no guesswork.",
      },
    ],
    price: "15% of first-year gross salary",
  },
  {
    id: "graduate-programs",
    num: "03",
    title: "Graduate & Internship Program Design",
    short:
      "Building and managing early-career pipelines that bring in the best graduate and internship talent.",
    body: "Building and managing early-career pipelines that bring in the best graduate and internship talent. We design the program, run the assessment and help you develop the next generation of your workforce from day one.",
    points: [
      {
        h: "Program design",
        p: "Structured intake, assessment and onboarding.",
      },
      {
        h: "Early-career pipeline",
        p: "A repeatable engine for future talent.",
      },
    ],
    price: "Fixed project fee",
  },
  {
    id: "hr-advisory",
    num: "04",
    title: "HR Advisory",
    short:
      "Partnering with leadership teams to design HR strategies, people processes and workplace structures.",
    body: "Partnering with leadership teams to design HR strategies, people processes and workplace structures. From org design to performance frameworks, we help you build the systems that make great hiring stick.",
    points: [
      { h: "People strategy", p: "Org design, structures and workflows." },
      {
        h: "Process & frameworks",
        p: "Performance, onboarding and retention.",
      },
    ],
    price: "Fixed project fee",
  },
];

export const differentiators = [
  {
    h: "We assess, not just screen",
    p: "Every candidate is evaluated against a competency framework built for the specific role and level.",
  },
  {
    h: "We don't disappear after the offer",
    p: "Every placement includes structured 30 and 60-day check-ins and a 90-day replacement guarantee.",
  },
  {
    h: "Deep market knowledge",
    p: "We understand the roles, the market and where the right people are — including those not actively looking.",
  },
  {
    h: "A curated shortlist in 14 days",
    p: "You receive 3 to 5 properly vetted candidates within two weeks — each with written profiles and notes.",
  },
];

export const whySira = [
  {
    h: "Speed & Precision",
    p: "Faster time-to-hire without compromising on quality.",
  },
  {
    h: "Market Knowledge",
    p: "Deep expertise across industries and talent markets.",
  },
  { h: "No Shortcuts", p: "Same rigor from graduate hire to C-suite search." },
  {
    h: "Confidential & Compliant",
    p: "Integrity and discretion throughout the process.",
  },
];

export const process = [
  {
    num: "01",
    title: "Briefing & Role Analysis",
    when: "Week 1",
    body: "We start by deeply understanding your business, team structure, culture and what success looks like in the role — at that specific level. A great search begins with a great brief.",
  },
  {
    num: "02",
    title: "Talent Sourcing",
    when: "Week 1–2",
    body: "We map the full market, activate our curated network and proactively headhunt the right candidates — including the passive ones who aren't actively looking but are exactly right.",
  },
  {
    num: "03",
    title: "Screening & Assessment",
    when: "Week 2",
    body: "Every candidate is assessed against a structured role-based framework, with profiles, assessment notes, and a curated shortlist of 3–5. No shortcuts.",
  },
  {
    num: "04",
    title: "Placement",
    when: "Week 2–3",
    body: "We present your shortlist and walk you through each candidate with assessment notes — then support offer, negotiation and close so the right hire actually says yes.",
  },
  {
    num: "05",
    title: "Follow Through",
    when: "Day 30 · 60 · 90",
    body: "We check in at 30 and 60 days after every placement. Every placement comes with a 90-day replacement guarantee — because we don't disappear after the offer.",
  },
];

export const pricing = [
  {
    title: "Executive Search",
    amount: "20%",
    unit: "/ first-year gross",
    desc: "Senior leadership & C-suite placement.",
    feat: false,
    features: [
      "25% of total fee upfront on signing",
      "75% on successful placement",
      "Confidential, board-ready search",
    ],
    cta: { label: "Start a search", to: "/book" },
  },
  {
    title: "Mid-Level & Specialist",
    amount: "15%",
    unit: "/ first-year gross",
    desc: "High-calibre professional placement.",
    feat: true,
    badge: "Most requested",
    features: [
      "No upfront cost",
      "Invoiced only on successful placement",
      "90-day replacement guarantee",
    ],
    cta: { label: "Start a search", to: "/book" },
  },
  {
    title: "Graduate & HR Advisory",
    amount: "Fixed",
    unit: "project fee",
    desc: "Program design & HR advisory.",
    feat: false,
    features: [
      "Scoped & agreed upfront",
      "No surprises before work begins",
      "Tailored to your objectives",
    ],
    cta: { label: "Request a quote", to: "/contact" },
  },
];

export const faqs = [
  {
    q: "How quickly will I receive candidates?",
    a: "You receive a curated shortlist of 3 to 5 properly vetted candidates within 14 days of confirming the engagement — each with written profiles and recommendation notes.",
  },
  {
    q: "What happens if a placement doesn't work out?",
    a: "Every placement comes with a 90-day replacement guarantee. We also run structured 30 and 60-day check-ins to catch and resolve issues early — long before they become problems.",
  },
  {
    q: "What levels and roles do you recruit for?",
    a: "Everything from graduate and internship pipelines to mid-level specialists and C-suite executive search — across engineering, product, sales, finance, operations and more. Same rigor at every level.",
  },
  {
    q: "How is your pricing structured?",
    a: "Executive search is 20% of first-year gross salary; mid-level & specialist placement is 15%, invoiced only on successful placement; graduate programs and HR advisory are a fixed project fee scoped and agreed upfront. No hidden fees.",
  },
  {
    q: "Do you work confidentially?",
    a: "Yes. Integrity and discretion run through every engagement — especially executive search, where we protect both your brand and the candidate's throughout the process.",
  },
];

export type Insight = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  gradient: 1 | 2 | 3;
  body: string[];
};

export const insights: Insight[] = [
  {
    id: "rush-hiring",
    title: "The fastest way to slow down hiring is to rush it.",
    excerpt:
      "The fastest way to fix a broken hiring process is to slow down — before you even write the job description. Clarity up front is what makes everything after it fast.",
    category: "Hiring Strategy",
    readTime: "3 min",
    date: "Recent",
    gradient: 1,
    body: [
      "The fastest way to slow down hiring is to rush it. Skip the brief, post a vague role, and you'll spend the next two months reviewing candidates who were never right — then start again.",
      "The fastest way to fix it is to slow down before you even write the job description. Get specific about the outcomes the role owns, the level, and what success looks like in the first year.",
      "That clarity is what makes everything after it fast: sharper sourcing, cleaner assessment, and a shortlist you can actually decide on.",
    ],
  },
  {
    id: "quality-of-hires",
    title: "The quality of your hires determines the quality of your growth.",
    excerpt:
      "Many organisations invest heavily in marketing, technology and infrastructure — then leave hiring to chance. The people you bring in are the ceiling on everything else.",
    category: "Leadership",
    readTime: "4 min",
    date: "Recent",
    gradient: 2,
    body: [
      "Many organisations invest heavily in marketing, technology and infrastructure — and then leave hiring to chance.",
      "But the people you bring in are the ceiling on everything else. A brilliant strategy executed by the wrong team underperforms a good strategy executed by the right one, every time.",
      "Treat every hire as an investment decision, because that's exactly what it is.",
    ],
  },
  {
    id: "costing-top-talent",
    title: "Your hiring process could be costing you top talent.",
    excerpt:
      "If your process is unclear, slow or inconsistent, the best candidates quietly opt out — usually without telling you why. Here's how to spot it and fix it.",
    category: "Recruitment",
    readTime: "3 min",
    date: "Recent",
    gradient: 3,
    body: [
      "Your hiring process could be actively costing you top talent — especially if it's unclear, slow, or inconsistent.",
      "The best candidates have options. When your process drags or sends mixed signals, they quietly opt out — usually without telling you why.",
      "Audit it from the candidate's side: how long between stages, how clear is each step, and how consistent is the experience from first contact to offer.",
    ],
  },
  {
    id: "structured-onboarding",
    title: "Don't underestimate the importance of good onboarding.",
    excerpt:
      "Employees who go through effective onboarding are far more likely to stay long-term, and companies with structured onboarding see meaningfully higher new-hire productivity.",
    category: "Retention",
    readTime: "5 min",
    date: "Recent",
    gradient: 1,
    body: [
      "The offer is not the finish line. Onboarding is where a great hire becomes a great employee — or quietly starts looking again.",
      "Employees who go through effective onboarding are far more likely to stay long-term, and companies with structured onboarding see meaningfully higher new-hire productivity.",
      "Design the first 90 days as deliberately as you designed the search.",
    ],
  },
  {
    id: "ats-with-ai",
    title: "High application volume, low quality? It's an ATS problem.",
    excerpt:
      "A good ATS with AI can filter out clearly unqualified candidates early, rank on real fit, and let recruiters focus on the people who actually match the role.",
    category: "HR Tech",
    readTime: "4 min",
    date: "Recent",
    gradient: 2,
    body: [
      "One of the most common recruitment problems is high application volume but low quality of candidates.",
      "A practical solution is to use an ATS — but not just any ATS. An ATS with AI can automatically filter out clearly unqualified candidates early, rank candidates based on how well they match the role, and reduce time spent on manual CV screening.",
      "This alone can significantly reduce screening workload and improve speed in hiring.",
    ],
  },
  {
    id: "talent-retention",
    title: "Why employees leave, and why they stay.",
    excerpt:
      "Attrition is rarely about money. It's usually about management, growth and transparency. Understanding the real drivers is how you build teams that last.",
    category: "Retention",
    readTime: "5 min",
    date: "Recent",
    gradient: 3,
    body: [
      "Attrition is rarely about money. It's usually about management, growth and transparency.",
      "People leave managers, stalled growth, and environments where they can't see what's happening or why. They stay for the opposite.",
      "If you want to understand retention, stop asking about salary first and start asking about those three.",
    ],
  },
];

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
