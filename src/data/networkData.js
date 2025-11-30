// src/data/networkData.js

// ----------------------------------------------
// ME (Main User)
// ----------------------------------------------

export const ME = {
    id: "me",
    name: "Iris Cheung",
    headline: "Prev PM Intern @ HP",
    company: "University of British Columbia",
    location: "Vancouver, BC",
    tags: ["Founder", "BCS", "UBC", "Builder"],
  
    companyDetails: {
      name: "University of British Columbia",
      size: "70 000 Students",
      logo: "/company-logo.png",
    },
    industry: "Software / AI",
    education: "UBC — BCS Program",
    connections: 359,
    patents: [
      { title: "Kawaiido", date: "2024-08-23" },
    ],
    funding: [
      { round: "BCSSA", date: "2025-01-01" },
      { round: "BCS Snack Share", date: "2025-09-01" },
    ],
    bio: "Building products, mapping networks, and connecting ambitious people.",
  };
  
  // ----------------------------------------------
  // PEOPLE (Clean Sequential IDs)
  // ----------------------------------------------
  
  export const PEOPLE = [
    ME,
  
    // ------------------------------
    // REAL PEOPLE PROVIDED BY YOU
    // ------------------------------
  
    // p0 — Georgiy Sekretaryuk
    {
      id: "p0",
      name: "Georgiy Sekretaryuk",
      headline: "Managing Partner",
      company: "Overdrive",
      location: "Vancouver, BC",
      tags: ["Founder", "Operator"],
      companyDetails: {
        name: "Overdrive",
        size: "50–200 employees",
        logo: "/logos/overdrive.png",
      },
      industry: "Software",
      education: "UC Berkeley — Master’s of Information and Data Science",
      connections: 4923,
      bio: "Managing Partner building the next generation of data and software intelligence systems.",
      patents: [],
      funding: [],
    },
  
    // p1 — Liam Ross
    {
      id: "p1",
      name: "Liam Ross",
      headline: "CTO & Co-Founder",
      company: "Withe",
      location: "Vancouver, BC",
      tags: ["Founder", "CTO"],
      companyDetails: {
        name: "Withe",
        size: "150 employees",
        logo: "/logos/withe.png",
      },
      industry: "Software",
      education:
        "UBC — BSc Combined Major: Computer Science, Chemistry, Biology",
      connections: 1042,
      bio: "CTO & Co-Founder scaling Withe’s technical systems and product execution.",
      patents: [],
      funding: [],
    },
  
    // p2 — Sol L.
    {
      id: "p2",
      name: "Sol L.",
      headline: "Head of Product",
      company: "CreatorCore",
      location: "Vancouver, BC",
      tags: ["Product"],
      companyDetails: {
        name: "CreatorCore",
        size: "350 employees",
        logo: "/logos/creatorcore.png",
      },
      industry: "Media",
      education: "UBC — Bachelor's in Computer Science",
      connections: 2007,
      bio: "Head of Product shaping creative tools and digital media workflows.",
      patents: [],
      funding: [],
    },
  
    // p3 — Colleen Knuff
    {
      id: "p3",
      name: "Colleen Knuff",
      headline: "CEO & Principal Consultant",
      company: "Visionary Vectors Consulting Inc.",
      location: "Canada",
      tags: ["Founder", "Consulting"],
      companyDetails: {
        name: "Visionary Vectors Consulting Inc.",
        size: "225 employees",
        logo: "/logos/visionary-vectors.png",
      },
      industry: "Consulting",
      education: "Saskatchewan Polytechnic — Accounting",
      connections: 2245,
      bio: "CEO enabling organizations to transform through strategic advisory and operational design.",
      patents: [],
      funding: [],
    },
  
    // p4 — Oliver Xie
    {
      id: "p4",
      name: "Oliver Xie",
      headline: "Product Manager",
      company: "Workday",
      location: "Vancouver, BC",
      tags: ["PM"],
      companyDetails: {
        name: "Workday",
        size: "225 employees",
        logo: "/logos/workday.png",
      },
      industry: "SaaS",
      education:
        "UBC — BASc Integrated Engineering (Materials + Mechanical)",
      connections: 851,
      bio: "Product Manager shaping enterprise user experiences and large-scale workflows.",
      patents: [],
      funding: [],
    },
  
    // p5 — Julian Joseph
    {
      id: "p5",
      name: "Julian Joseph",
      headline: "Senior AI Product Manager",
      company: "Telus",
      location: "Canada",
      tags: ["PM", "AI"],
      companyDetails: {
        name: "Telus",
        size: "300 employees",
        logo: "/logos/telus.png",
      },
      industry: "Telecommunications / AI",
      education:
        "Model Engineering College — BTech, Computer Science & Engineering",
      connections: 2819,
      bio: "Senior AI PM delivering intelligent product capabilities at telecom scale.",
      patents: [],
      funding: [],
    },
  
    // p6 — Kyle Chua
    {
      id: "p6",
      name: "Kyle Chua",
      headline: "Lead Product Manager",
      company: "Yelp",
      location: "San Francisco, CA",
      tags: ["PM", "Lead PM"],
      companyDetails: {
        name: "Yelp",
        size: "125 employees",
        logo: "/logos/yelp.png",
      },
      industry: "Media / Internet",
      education:
        "University of Southern California — BS, CS & Business Administration",
      connections: 844,
      bio: "Lead PM building meaningful consumer and business product experiences.",
      patents: [],
      funding: [],
    },
  
    // p7 — Xinglu Wang
    {
      id: "p7",
      name: "Xinglu Wang",
      headline: "Senior Product Manager, Cloud Platform",
      company: "Elastic",
      location: "Vancouver, BC",
      tags: ["PM"],
      companyDetails: {
        name: "Elastic",
        size: "200 employees",
        logo: "/logos/elastic.png",
      },
      industry: "Software",
      education: "SFU — BASc Mechatronics",
      connections: 1403,
      bio: "Senior PM shaping cloud platform strategy at Elastic.",
      patents: [],
      funding: [],
    },
  
    // p8 — Prasanna Shankar
    {
      id: "p8",
      name: "Prasanna Shankar",
      headline: "TPM",
      company: "Atlassian",
      location: "USA",
      tags: ["TPM"],
      companyDetails: {
        name: "Atlassian",
        size: "150 employees",
        logo: "/logos/atlassian.png",
      },
      industry: "Software",
      education:
        "University of Arizona — Master's in Management Information Systems",
      connections: 1295,
      bio: "TPM driving cross-team execution and platform strategy at Atlassian.",
      patents: [],
      funding: [],
    },
  
    // ------------------------------
    // DUMMY / RANDOM USERS (p9–p20)
    // ------------------------------
  
    // (All dummy users generated earlier)
    {
      id: "p9",
      name: "Maya Fernandes",
      headline: "Director of AI Research",
      company: "DeepWave Labs",
      location: "San Francisco, CA",
      tags: ["AI", "Research"],
      companyDetails: {
        name: "DeepWave Labs",
        size: "500 employees",
        logo: "/logos/deepwave-labs.png",
      },
      industry: "Artificial Intelligence",
      education: "MIT — PhD, Machine Learning",
      connections: 4211,
      bio: "Leading multimodal AI research across generative and distributed systems.",
      patents: [
        { title: "Distributed Gradient Synchronization Engine", date: "2023-07-09" },
      ],
      funding: [],
    },
  
    {
      id: "p10",
      name: "Rafael Mendes",
      headline: "Senior Systems Architect",
      company: "CloudForge",
      location: "Seattle, WA",
      tags: ["Engineer", "Infra"],
      companyDetails: {
        name: "CloudForge",
        size: "800 employees",
        logo: "/logos/cloudforge.png",
      },
      industry: "Cloud Infrastructure",
      education: "University of São Paulo — Computer Engineering",
      connections: 1984,
      bio: "Architecting resilient, globally distributed cloud systems.",
      patents: [],
      funding: [],
    },
  
    {
      id: "p11",
      name: "Amara Patel",
      headline: "VC Partner",
      company: "Blue Horizon Capital",
      location: "New York, NY",
      tags: ["VC", "Investor"],
      companyDetails: {
        name: "Blue Horizon Capital",
        size: "40 employees",
        logo: "/logos/blue-horizon.png",
      },
      industry: "Venture Capital",
      education: "Harvard Business School — MBA",
      connections: 3127,
      bio: "Backing early-stage software, infra, and fintech founders.",
      funding: [
        { round: "Fund II — $180M", date: "2024-03-12" },
      ],
      patents: [],
    },
  
    {
      id: "p12",
      name: "Noah Lindstrom",
      headline: "Head of Engineering",
      company: "Iterate.ai",
      location: "Toronto, ON",
      tags: ["Engineering Lead"],
      companyDetails: {
        name: "Iterate.ai",
        size: "200 employees",
        logo: "/logos/iterateai.png",
      },
      industry: "AI / DevTools",
      education: "University of Waterloo — Software Engineering",
      connections: 1460,
      bio: "Leading distributed teams building developer and ML infrastructure.",
      patents: [],
      funding: [],
    },
  
    {
      id: "p13",
      name: "Sophia Nguyen",
      headline: "Product Lead",
      company: "StrideHQ",
      location: "Los Angeles, CA",
      tags: ["PM"],
      companyDetails: {
        name: "StrideHQ",
        size: "110 employees",
        logo: "/logos/stridehq.png",
      },
      industry: "Consumer Tech / Fitness",
      education: "UCLA — BA Cognitive Science",
      connections: 2230,
      bio: "Leading product development for consumer fitness AI products.",
      patents: [],
      funding: [],
    },
  
    {
      id: "p14",
      name: "Jae Park",
      headline: "ML Infra Engineer",
      company: "Tactile Robotics",
      location: "Boston, MA",
      tags: ["Engineer", "ML"],
      companyDetails: {
        name: "Tactile Robotics",
        size: "350 employees",
        logo: "/logos/tactile-robotics.png",
      },
      industry: "Robotics / ML Infra",
      education: "Carnegie Mellon University — MS Robotics",
      connections: 1678,
      bio: "Building low-latency ML systems powering robotics control loops.",
      patents: [
        { title: "Latency-Aware Motion Vector Prediction", date: "2022-11-02" },
      ],
      funding: [],
    },
  
    {
      id: "p15",
      name: "Elena Grayson",
      headline: "Founder & CEO",
      company: "Lumina Analytics",
      location: "Austin, TX",
      tags: ["Founder", "AI"],
      companyDetails: {
        name: "Lumina Analytics",
        size: "65 employees",
        logo: "/logos/lumina.png",
      },
      industry: "Enterprise AI",
      education: "Rice University — BSc Computer Science",
      connections: 3094,
      bio: "Founder building predictive analytics for enterprise risk intelligence.",
      funding: [
        { round: "Seed — $4.5M", date: "2023-10-15" },
        { round: "Series A — $18M", date: "2025-02-27" },
      ],
      patents: [],
    },
  
    {
      id: "p16",
      name: "Marcus Ritchie",
      headline: "Data Platform Lead",
      company: "Greenflare Energy",
      location: "Denver, CO",
      tags: ["Data", "Infra"],
      companyDetails: {
        name: "Greenflare Energy",
        size: "450 employees",
        logo: "/logos/greenflare.png",
      },
      industry: "Energy / Climate Tech",
      education: "University of Colorado — Computer Science",
      connections: 1548,
      bio: "Building energy telemetry and forecasting data platforms.",
      patents: [],
      funding: [],
    },
  
    {
      id: "p17",
      name: "Clara Jensen",
      headline: "Senior UX Designer",
      company: "Figma",
      location: "San Francisco, CA",
      tags: ["Design", "UX"],
      companyDetails: {
        name: "Figma",
        size: "1000+ employees",
        logo: "/logos/figma.png",
      },
      industry: "Design Tools",
      education: "Parsons School of Design — BFA",
      connections: 3105,
      bio: "Designing collaborative workflows for millions of global creators.",
      patents: [],
      funding: [],
    },
  
    {
      id: "p18",
      name: "Haruto Ishikawa",
      headline: "Blockchain Research Engineer",
      company: "CypherTech",
      location: "Tokyo, Japan",
      tags: ["Blockchain", "Engineer"],
      companyDetails: {
        name: "CypherTech",
        size: "220 employees",
        logo: "/logos/cyphertech.png",
      },
      industry: "Web3 / Cybersecurity",
      education: "University of Tokyo — MEng Computer Science",
      connections: 1670,
      bio: "Researching next-generation decentralized consensus systems.",
      patents: [],
      funding: [],
    },
  
    {
      id: "p19",
      name: "Sarah Collins",
      headline: "Growth Lead",
      company: "Looped",
      location: "Chicago, IL",
      tags: ["Growth", "Marketing"],
      companyDetails: {
        name: "Looped",
        size: "300 employees",
        logo: "/logos/looped.png",
      },
      industry: "SaaS / Productivity",
      education: "Northwestern University — Economics",
      connections: 2833,
      bio: "Scaling activation, retention, and lifecycle performance for enterprise SaaS.",
      patents: [],
      funding: [],
    },
  
    {
      id: "p20",
      name: "Omar Haddad",
      headline: "Security Architect",
      company: "ShieldCore",
      location: "Dubai, UAE",
      tags: ["Security"],
      companyDetails: {
        name: "ShieldCore",
        size: "180 employees",
        logo: "/logos/shieldcore.png",
      },
      industry: "Cybersecurity",
      education: "NYU Abu Dhabi — Computer Science",
      connections: 1320,
      bio: "Architecting next-gen zero-trust systems for enterprise workloads.",
      patents: [
        { title: "Zero-Trust Access Token Randomization System", date: "2023-05-14" },
      ],
      funding: [],
    },

    // p21 — Dr. Aria Kwon
{
    id: "p21",
    name: "Dr. Aria Kwon",
    headline: "Chief Scientist",
    company: "NeuroShift AI",
    location: "Palo Alto, CA",
    tags: ["AI", "Research"],
    companyDetails: {
      name: "NeuroShift AI",
      size: "120 employees",
      logo: "/logos/neuroshift.png",
    },
    industry: "AI / Neuroscience",
    education: "Stanford — PhD Computational Neuroscience",
    connections: 3982,
    bio: "Researching neuro-inspired architectures for next-generation general intelligence systems.",
    patents: [
      { title: "Hierarchical Spiking Model Encoder", date: "2024-03-18" }
    ],
    funding: [],
  },
  
  // p22 — Daniel Alvarez
  {
    id: "p22",
    name: "Daniel Alvarez",
    headline: "Principal Product Manager",
    company: "Apollo Metrics",
    location: "New York, NY",
    tags: ["PM", "Product Lead"],
    companyDetails: {
      name: "Apollo Metrics",
      size: "400 employees",
      logo: "/logos/apollo.png",
    },
    industry: "Analytics / SaaS",
    education: "Cornell — MBA, Technology Management",
    connections: 2671,
    bio: "Leading enterprise analytics initiatives for customers in finance and logistics.",
    patents: [],
    funding: [],
  },
  
  // p23 — Vanessa Park
  {
    id: "p23",
    name: "Vanessa Park",
    headline: "Security Engineer",
    company: "Firewatch",
    location: "Austin, TX",
    tags: ["Security", "Engineer"],
    companyDetails: {
      name: "Firewatch",
      size: "600 employees",
      logo: "/logos/firewatch.png",
    },
    industry: "Cybersecurity",
    education: "UT Austin — BS Computer Science",
    connections: 1893,
    bio: "Security engineer focusing on large-scale threat detection and incident response.",
    patents: [],
    funding: [],
  },
  
  // p24 — Tomás Ribeiro
  {
    id: "p24",
    name: "Tomás Ribeiro",
    headline: "Staff Software Engineer",
    company: "Streamflow Systems",
    location: "Porto, Portugal",
    tags: ["Engineer", "Backend"],
    companyDetails: {
      name: "Streamflow Systems",
      size: "220 employees",
      logo: "/logos/streamflow.png",
    },
    industry: "Data Infrastructure",
    education: "University of Porto — MSc Distributed Systems",
    connections: 1455,
    bio: "Building distributed, real-time data pipelines powering global event streaming.",
    patents: [],
    funding: [],
  },
  
  // p25 — Serena Malik
  {
    id: "p25",
    name: "Serena Malik",
    headline: "Founder & CPO",
    company: "Verde",
    location: "San Diego, CA",
    tags: ["Founder", "Product"],
    companyDetails: {
      name: "Verde",
      size: "40 employees",
      logo: "/logos/verde.png",
    },
    industry: "Climate Tech",
    education: "UC San Diego — BA Environmental Engineering",
    connections: 3052,
    bio: "Co-founder building climate risk analytics for enterprise sustainability teams.",
    patents: [],
    funding: [
      { round: "Seed — $3.2M", date: "2024-09-01" }
    ],
  },
  
  // p26 — Hiro Tanaka
  {
    id: "p26",
    name: "Hiro Tanaka",
    headline: "Robotics Engineer",
    company: "Kinetica Labs",
    location: "Tokyo, Japan",
    tags: ["Robotics", "Engineer"],
    companyDetails: {
      name: "Kinetica Labs",
      size: "280 employees",
      logo: "/logos/kinetica.png",
    },
    industry: "Robotics / Automation",
    education: "Tokyo Institute of Technology — MSc Robotics",
    connections: 1780,
    bio: "Building autonomous robotic manipulation systems for industrial automation.",
    patents: [],
    funding: [],
  },
  
  // p27 — Sarah Jaffe
  {
    id: "p27",
    name: "Sarah Jaffe",
    headline: "Senior Data Scientist",
    company: "InsightGrid",
    location: "Toronto, ON",
    tags: ["Data", "AI"],
    companyDetails: {
      name: "InsightGrid",
      size: "180 employees",
      logo: "/logos/insightgrid.png",
    },
    industry: "Enterprise Data / ML",
    education: "University of Toronto — MSc Computer Science",
    connections: 2311,
    bio: "Developing predictive intelligence and anomaly detection for enterprise telemetry.",
    patents: [],
    funding: [],
  },
  
  // p28 — Malik Johnson
  {
    id: "p28",
    name: "Malik Johnson",
    headline: "Product Marketing Manager",
    company: "Nimbus Cloud",
    location: "Seattle, WA",
    tags: ["Marketing", "Cloud"],
    companyDetails: {
      name: "Nimbus Cloud",
      size: "900 employees",
      logo: "/logos/nimbus.png",
    },
    industry: "Cloud Computing",
    education: "Washington University — BA Economics",
    connections: 2098,
    bio: "Driving go-to-market strategy for cloud-native developer tools.",
    patents: [],
    funding: [],
  },
  
  // p29 — Eva Schmidt
  {
    id: "p29",
    name: "Eva Schmidt",
    headline: "Head of Operations",
    company: "FormWorks",
    location: "Berlin, Germany",
    tags: ["Operations", "Leadership"],
    companyDetails: {
      name: "FormWorks",
      size: "320 employees",
      logo: "/logos/formworks.png",
    },
    industry: "Manufacturing / Automation",
    education: "TU Berlin — Industrial Engineering",
    connections: 2551,
    bio: "Managing global operations and systems optimization for automated manufacturing lines.",
    patents: [],
    funding: [],
  },
  
  // p30 — Leo Carter
  {
    id: "p30",
    name: "Leo Carter",
    headline: "Founder & CTO",
    company: "Fluxbyte",
    location: "Chicago, IL",
    tags: ["Founder", "CTO", "Engineer"],
    companyDetails: {
      name: "Fluxbyte",
      size: "15 employees",
      logo: "/logos/fluxbyte.png",
    },
    industry: "Developer Tools",
    education: "UIUC — BS Computer Engineering",
    connections: 3188,
    bio: "Building next-gen developer tooling for parallel compute workflows.",
    patents: [
      { title: "Adaptive Compute Sharding Engine", date: "2024-05-29" },
    ],
    funding: [
      { round: "Pre-Seed — $1.1M", date: "2025-01-10" },
    ],
  },
  

  ];
  
  // ----------------------------------------------
  // RELATIONSHIPS — CLEANLY REBUILT (Sequential & Non-Broken)
  // ----------------------------------------------
  
  export const RELATIONSHIPS = [
    // First-degree connections to ME
    { id: "r1", fromId: "me", toId: "p0", type: "FirstDegree" },
    { id: "r2", fromId: "me", toId: "p1", type: "FirstDegree" },
    { id: "r3", fromId: "me", toId: "p2", type: "FirstDegree" },
    { id: "r4", fromId: "me", toId: "p4", type: "FirstDegree" },
  
    // Alumni / Industry clusters
    { id: "r5", fromId: "p1", toId: "p2", type: "Alumni-Connection" },
    { id: "r6", fromId: "p4", toId: "p7", type: "Alumni-Connection" },
  
    // PM / Engineer collaboration
    { id: "r7", fromId: "p6", toId: "p7", type: "Colleague" },
  
    // VC–Founder relationships
    { id: "r8", fromId: "p11", toId: "p15", type: "Investor-Founder" },
    { id: "r9", fromId: "p11", toId: "p9", type: "Investor-Founder" },
  
    // Tech leadership clusters
    { id: "r10", fromId: "p12", toId: "p14", type: "Tech-Leadership" },
    { id: "r11", fromId: "p12", toId: "p10", type: "Tech-Leadership" },
  
    // Random realistic connections to make graph richer
    { id: "r12", fromId: "p3", toId: "p5", type: "Professional" },
    { id: "r13", fromId: "p9", toId: "p12", type: "Research-Collaboration" },
    { id: "r14", fromId: "p15", toId: "p16", type: "Climate-AI" },
    { id: "r15", fromId: "p20", toId: "p18", type: "Security-Crypto" },
    { id: "r16", fromId: "p19", toId: "p13", type: "Growth-Product" },
    // Additional connectivity for new nodes
{ id: "r17", fromId: "p21", toId: "p9", type: "AI-Research" },
{ id: "r18", fromId: "p22", toId: "p13", type: "Product-Collab" },
{ id: "r19", fromId: "p23", toId: "p20", type: "Security-Network" },
{ id: "r20", fromId: "p24", toId: "p10", type: "Infra-Backend" },
{ id: "r21", fromId: "p25", toId: "p16", type: "Climate-Data" },
{ id: "r22", fromId: "p26", toId: "p14", type: "Robotics-ML" },
{ id: "r23", fromId: "p27", toId: "p12", type: "Data-Engineering" },
{ id: "r24", fromId: "p28", toId: "p6", type: "Marketing-Product" },
{ id: "r25", fromId: "p29", toId: "p3", type: "Ops-Consulting" },
{ id: "r26", fromId: "p30", toId: "p1", type: "Founder-Founder" },
{ id: "r27", fromId: "p30", toId: "p21", type: "Research-Engineering" },
{ id: "r28", fromId: "p24", toId: "p27", type: "Data-Pipeline" },
{ id: "r29", fromId: "p26", toId: "p18", type: "Crypto-Robotics" },
{ id: "r30", fromId: "p29", toId: "p16", type: "Ops-Climate" },
{ id: "r31", fromId: "p23", toId: "p7", type: "Security-PM" },
{ id: "r32", fromId: "p22", toId: "p19", type: "Growth-Strategy" },
{ id: "r33", fromId: "p25", toId: "p11", type: "Climate-Investor" },
{ id: "r34", fromId: "p21", toId: "p12", type: "Research-Infra" },
{ id: "r35", fromId: "p30", toId: "me", type: "Founder-Network" },
{ id: "r36", fromId: "p29", toId: "p5", type: "Ops-AI" },
{ id: "r37", fromId: "p28", toId: "p4", type: "Cloud-PM" },
{ id: "r38", fromId: "p27", toId: "p15", type: "Data-AI" },
{ id: "r39", fromId: "p24", toId: "p6", type: "Infra-Product" },
{ id: "r40", fromId: "p22", toId: "me", type: "Professional" },

  ];
  