// src/content/en.ts
export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  current?: boolean;
};

export type CaseStudy = {
  title: string;
  tag: string;
  context: string;
  constraint: string;
  decision: string;
  tradeoff: string;
  result?: string;
};

export const profile = {
  name: "Thiago Watanabe",
  role: "Tech Lead | .NET, C# and AWS",
  location: "São Paulo, Brazil",
  headline:
    "16 years building retail and loyalty systems, from part-time junior to technical lead.",
  summary:
    "Software developer for 18 years, 16 of them at the same company. Most of my career was spent building and evolving loyalty and CRM systems for retail: products that run in live store operations and demand availability, volume and integration.",
  summaryExtra:
    "My core stack is .NET/C#, AWS and PostgreSQL. Over the last five years my focus moved from isolated code to the decisions that hold a product together: domain modeling, API design, distributed systems architecture and modernization of legacy codebases.",
  stack: [
    "C#",
    ".NET",
    "AWS",
    "PostgreSQL",
    "SQL Server",
    "Oracle",
    "React",
    "Python",
    "Docker",
  ],
  contact: {
    email: "thiagowatanabe@gmail.com",
    github: "https://github.com/thiagowatanabe",
    linkedin: "https://www.linkedin.com/in/thiago-watanabe",
  },
};

export const experience: ExperienceItem[] = [
  {
    company: "Rock Encantech",
    role: "Development Specialist",
    period: "Mar 2025 — Oct 2026",
    summary:
      "Maintenance and evolution of the loyalty CRM used by retailers to run their own relationship programs. Backend in .NET Core, AWS integrations, and support of the product in live store operations.",
  },
  {
    company: "Bnex",
    role: "Tech Lead",
    period: "Jan 2020 — Feb 2025",
    summary:
      "Technical lead for ZoOmBox, a retail loyalty platform with kiosk, consumer app and campaign console. Architecture decisions, coding standards, code review and the development team. C# MVC, Java, Python, ReactJS, PostgreSQL, Oracle, AWS.",
  },
  {
    company: "Bnex",
    role: "Software Developer",
    period: "Jan 2009 — Dec 2019",
    summary:
      "Built and maintained loyalty and CRM systems for retail: ZoOmBox, GVendas, Fideleco/Kontenta and Communicator. C#, ASP.NET MVC, Windows Forms, SQL Server, PostgreSQL, Oracle.",
  },
];

export const cases: CaseStudy[] = [
  {
    title: "ZoOmBox: modernizing a live loyalty platform",
    tag: "Architecture",
    context:
      "Multi-tenant platform used by retail chains, with self-service kiosk, consumer app and campaign console running on a legacy C# MVC codebase.",
    constraint: "No window for a rewrite. Store operations ran seven days a week.",
    decision:
      "Incremental modernization, isolating domain boundaries by layer before replacing the database, instead of a full rewrite.",
    tradeoff:
      "Two coding standards coexisted for 18 months, with real onboarding cost for the team.",
    result: undefined,
  },
];


export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  detail?: string;
};

export const education: EducationItem[] = [
  {
    degree: "Specialization in Web Development",
    institution: "FATEC — Rio Preto College of Technology",
    period: "2017 — 2018",
  },
  {
    degree: "Bachelor's Degree in Information Systems",
    institution: "Faculdade UniFAIMI",
    period: "2007 — 2010",
  },
];

export type ProjectItem = {
  name: string;
  repo: string;
  stack: string[];
  summary: string;
  year?: string;
  image?: string;
};

// Substitua pelos repositórios reais. Não publique com exemplo.
export const projects: ProjectItem[] = [
  {
    name: "DriveMediaDedup",
    repo: "https://github.com/thiagowatanabe/DriveMediaDedup",
    stack: [".NET 10", "C#", "Google Drive API", "AWS S3", "Octokit"],
    summary:
      "Console tool that migrates a Google Drive media archive to S3: downloads files, removes duplicate images by SHA256 hash, compresses the unique set, uploads the archive and only then deletes the originals.",
    year: "2026",
  },
];