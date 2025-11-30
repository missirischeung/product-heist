// src/data/networkData.js

// Canonical "me" object (used by both Network + Me pages)
export const ME = {
    id: "me",
    name: "You (Main User)",
    headline: "Founder @ Stealth Startup",
    company: "Stealth", // keep as string for list/graph
    location: "Vancouver, BC",
    tags: ["Founder", "BCS", "UBC", "Builder"],
  
    // extra fields for Me page / detailed profile
    companyDetails: {
      name: "Stealth",
      size: "1–10 employees",
      logo: "/company-logo.png",
    },
    industry: "Software / AI",
    education: "UBC — BCS Program",
    patents: [
      { title: "Graph-Based Social Discovery Engine", date: "2024-08-12" },
      { title: "Adaptive Embedding Compression Model", date: "2025-02-01" },
    ],
    funding: [
      { round: "Pre-Seed", date: "2024-11-03" },
      { round: "Angel", date: "2025-04-22" },
    ],
    bio: "Building products, mapping networks, and connecting ambitious people.",
  };
  
  export const PEOPLE = [
    ME,
    {
      id: "p0",
      name: "Georgiy",
      headline: "CEO @ Overview",
      company: "Overview",
      location: "Vancouver, BC",
      tags: ["Founder"],
      companyDetails: {
        name: "Overview",
        size: "11–50 employees",
        logo: "/logos/overview.png",
      },
      industry: "Developer Tools / Infra",
      education: "UBC — Computer Science",
      bio: "Building tools that help teams understand their systems and ship faster.",
      funding: [
        { round: "Seed", date: "2023-06-10" },
        { round: "Series A", date: "2024-12-02" },
      ],
    },
    {
      id: "p1",
      name: "Alice Zhang",
      headline: "Angel Investor",
      company: "Zhang Capital",
      location: "San Francisco, CA",
      tags: ["Investor", "Angel"],
      companyDetails: {
        name: "Zhang Capital",
        size: "Solo GP",
        logo: "/logos/zhang-capital.png",
      },
      industry: "Angel / Early-Stage Investing",
      education: "Stanford — Computer Science",
      bio: "Former founder, now backing technical teams at day zero.",
      funding: [
        { round: "Angel Checks", date: "2021–Present" },
      ],
    },
    {
      id: "p2",
      name: "Brian Lee",
      headline: "Senior Engineer",
      company: "TechNova",
      location: "Seattle, WA",
      tags: ["Engineer"],
      companyDetails: {
        name: "TechNova",
        size: "500–1,000 employees",
        logo: "/logos/technova.png",
      },
      industry: "SaaS / B2B",
      education: "University of Washington — Software Engineering",
      bio: "Senior IC focused on backend systems, reliability, and mentoring junior engineers.",
      patents: [
        { title: "Resilient Microservice Deployment Scheduler", date: "2022-05-18" },
      ],
    },
    {
      id: "p3",
      name: "Carla Gomez",
      headline: "VC Partner",
      company: "Northbridge Ventures",
      location: "New York, NY",
      tags: ["Investor", "VC"],
      companyDetails: {
        name: "Northbridge Ventures",
        size: "51–200 employees",
        logo: "/logos/northbridge.png",
      },
      industry: "Venture Capital",
      education: "Wharton — MBA",
      bio: "Partner focused on early-stage B2B, infra, and fintech companies.",
      funding: [
        { round: "Fund III — $250M", date: "2023-09-01" },
      ],
    },
    {
      id: "p4",
      name: "Daniel Kim",
      headline: "Student @ UBC",
      company: "UBC",
      location: "Vancouver, BC",
      tags: ["Student", "BCS", "UBC"],
      companyDetails: {
        name: "UBC",
        size: "10,000+ students",
        logo: "/logos/ubc.png",
      },
      industry: "Student / CS",
      education: "UBC — BCS Program",
      bio: "Transitioning into tech; interested in AI infrastructure and developer tooling.",
    },
    {
      id: "p5",
      name: "Evelyn Park",
      headline: "Product Manager",
      company: "TechNova",
      location: "Seattle, WA",
      tags: ["PM"],
      companyDetails: {
        name: "TechNova",
        size: "500–1,000 employees",
        logo: "/logos/technova.png",
      },
      industry: "Product / SaaS",
      education: "UC Berkeley — Business Administration",
      bio: "PM bridging engineering and customers, shipping features that actually get used.",
    },
    {
      id: "p6",
      name: "Frank Nguyen",
      headline: "Founder @ Maple Labs",
      company: "Maple Labs",
      location: "Toronto, ON",
      tags: ["Founder"],
      companyDetails: {
        name: "Maple Labs",
        size: "1–10 employees",
        logo: "/logos/maple-labs.png",
      },
      industry: "AI / Data Infra",
      education: "University of Toronto — Computer Engineering",
      bio: "Founder building AI-native data infra for fast-growing teams.",
      funding: [
        { round: "Pre-Seed", date: "2023-04-15" },
        { round: "Seed", date: "2024-02-20" },
      ],
      patents: [
        { title: "Streaming Feature Store for Real-Time ML", date: "2023-11-07" },
      ],
    },
    {
      id: "p7",
      name: "Grace Chen",
      headline: "Angel & Ex-FAANG",
      company: "Independent",
      location: "San Jose, CA",
      tags: ["Investor", "Angel"],
      companyDetails: {
        name: "Independent Angel",
        size: "Solo",
        logo: "/logos/grace-chen.png",
      },
      industry: "Consumer / Productivity",
      education: "MIT — Computer Science",
      bio: "Ex-FAANG eng leader now writing angel checks into ambitious, product-obsessed teams.",
      funding: [
        { round: "15+ Angel Deals", date: "2020–Present" },
      ],
    },
    {
      id: "p8",
      name: "Hassan Ali",
      headline: "CTO @ FinEdge",
      company: "FinEdge",
      location: "London, UK",
      tags: ["CTO", "Engineer"],
      companyDetails: {
        name: "FinEdge",
        size: "51–200 employees",
        logo: "/logos/finedge.png",
      },
      industry: "Fintech / Risk",
      education: "Imperial College London — Computer Science",
      bio: "CTO leading engineering for a modern risk and compliance platform.",
      patents: [
        { title: "Adaptive Fraud Detection Pipeline", date: "2021-03-30" },
      ],
    },
    {
      id: "p9",
      name: "Isabella Rossi",
      headline: "Associate @ Northbridge Ventures",
      company: "Northbridge Ventures",
      location: "New York, NY",
      tags: ["VC"],
      companyDetails: {
        name: "Northbridge Ventures",
        size: "51–200 employees",
        logo: "/logos/northbridge.png",
      },
      industry: "Venture Capital",
      education: "NYU — Economics",
      bio: "Associate sourcing early-stage deals and supporting portfolio founders at Northbridge.",
    },
    {
      id: "p10",
      name: "Jason Wu",
      headline: "Student @ UBC",
      company: "UBC",
      location: "Vancouver, BC",
      tags: ["Student", "BCS", "UBC"],
      companyDetails: {
        name: "UBC",
        size: "10,000+ students",
        logo: "/logos/ubc.png",
      },
      industry: "Student / CS",
      education: "UBC — BCS Program",
      bio: "Early in CS journey, tinkering with side projects and hackathons.",
    },
    {
      id: "p11",
      name: "Karen Patel",
      headline: "Founder @ FlowOps",
      company: "FlowOps",
      location: "San Francisco, CA",
      tags: ["Founder"],
      companyDetails: {
        name: "FlowOps",
        size: "11–50 employees",
        logo: "/logos/flowops.png",
      },
      industry: "DevOps / Observability",
      education: "Georgia Tech — Computer Science",
      bio: "Founder building observability tools that simplify on-call life for eng teams.",
      funding: [
        { round: "Pre-Seed", date: "2022-09-10" },
        { round: "Seed", date: "2023-12-01" },
      ],
    },
    {
      id: "p12",
      name: "Leo Martinez",
      headline: "Angel Investor",
      company: "Martinez Capital",
      location: "Miami, FL",
      tags: ["Investor", "Angel"],
      companyDetails: {
        name: "Martinez Capital",
        size: "Solo GP",
        logo: "/logos/martinez-capital.png",
      },
      industry: "Angel / Climate & Infra",
      education: "UPenn — Finance",
      bio: "Angel investor focused on climate tech, infra, and overlooked markets.",
      funding: [
        { round: "Angel Checks", date: "2019–Present" },
      ],
    },
  ];
  
  export const RELATIONSHIPS = [
    // direct connections to you
    { id: "r1", fromId: "me", toId: "p1", type: "FirstDegree" },
    { id: "r2", fromId: "me", toId: "p2", type: "FirstDegree" },
    { id: "r3", fromId: "me", toId: "p4", type: "FirstDegree" },
    { id: "r4", fromId: "me", toId: "p6", type: "FirstDegree" },
    { id: "r5", fromId: "me", toId: "p11", type: "FirstDegree" },
  
    // investor ↔ founder links
    { id: "r6", fromId: "p1", toId: "p6", type: "Investor-Founder" },
    { id: "r7", fromId: "p1", toId: "p11", type: "Investor-Founder" },
    { id: "r8", fromId: "p3", toId: "p6", type: "Investor-Founder" },
    { id: "r9", fromId: "p3", toId: "p11", type: "Investor-Founder" },
    { id: "r10", fromId: "p7", toId: "p6", type: "Investor-Founder" },
    { id: "r11", fromId: "p12", toId: "p11", type: "Investor-Founder" },
  
    // company clusters
    { id: "r12", fromId: "p2", toId: "p5", type: "Colleague" },
    { id: "r13", fromId: "p3", toId: "p9", type: "Colleague" },
    { id: "r14", fromId: "p6", toId: "p8", type: "Founder-CTO" },
  
    // UBC cluster
    { id: "r15", fromId: "p4", toId: "p10", type: "UBC-BCS" },
    { id: "r16", fromId: "p4", toId: "p2", type: "Alumni-Connection" },
  
    // cross-links
    { id: "r17", fromId: "p5", toId: "p11", type: "Operator-Founder" },
    { id: "r18", fromId: "p8", toId: "p1", type: "Past-Colleague" },
  ];
  