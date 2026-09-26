export type Insight = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
};

export const insights: Insight[] = [
  { id: "rush-hiring", title: "The fastest way to slow down hiring is to rush it.", excerpt: "The fastest way to fix a broken hiring process is to slow down — before you even write the job description.", category: "Hiring Strategy", readTime: "3 min", date: "Recent" },
  { id: "quality-of-hires", title: "The quality of your hires determines the quality of your growth.", excerpt: "Many organisations invest heavily in marketing and technology — then leave hiring to chance.", category: "Leadership", readTime: "4 min", date: "Recent" },
  { id: "costing-top-talent", title: "Your hiring process could be costing you top talent.", excerpt: "If your process is unclear, slow or inconsistent, the best candidates quietly opt out.", category: "Recruitment", readTime: "3 min", date: "Recent" },
  { id: "structured-onboarding", title: "Don't underestimate the importance of good onboarding.", excerpt: "Structured onboarding drives retention and meaningfully higher new-hire productivity.", category: "Retention", readTime: "5 min", date: "Recent" },
  { id: "ats-with-ai", title: "High application volume, low quality? It's an ATS problem.", excerpt: "A good ATS with AI filters unqualified candidates early and ranks on real fit.", category: "HR Tech", readTime: "4 min", date: "Recent" },
  { id: "talent-retention", title: "Why employees leave, and why they stay.", excerpt: "Attrition is rarely about money. It's usually about management, growth and transparency.", category: "Retention", readTime: "5 min", date: "Recent" },
];
