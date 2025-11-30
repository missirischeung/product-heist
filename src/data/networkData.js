// src/data/networkData.js

export const PEOPLE = [
    {
      id: "me",
      name: "You (Main User)",
      headline: "Founder @ Stealth Startup",
      company: "Stealth",
      location: "Vancouver, BC",
      tags: ["Founder", "BCS", "UBC"],
    },
    {
      id: "p1",
      name: "Alice Zhang",
      headline: "Angel Investor",
      company: "Zhang Capital",
      location: "San Francisco, CA",
      tags: ["Investor", "Angel"],
    },
    {
      id: "p2",
      name: "Brian Lee",
      headline: "Senior Engineer",
      company: "TechNova",
      location: "Seattle, WA",
      tags: ["Engineer"],
    },
    {
      id: "p3",
      name: "Carla Gomez",
      headline: "VC Partner",
      company: "Northbridge Ventures",
      location: "New York, NY",
      tags: ["Investor", "VC"],
    },
    {
      id: "p4",
      name: "Daniel Kim",
      headline: "Student @ UBC",
      company: "UBC",
      location: "Vancouver, BC",
      tags: ["Student", "BCS", "UBC"],
    },
    {
      id: "p5",
      name: "Evelyn Park",
      headline: "Product Manager",
      company: "TechNova",
      location: "Seattle, WA",
      tags: ["PM"],
    },
    {
      id: "p6",
      name: "Frank Nguyen",
      headline: "Founder @ Maple Labs",
      company: "Maple Labs",
      location: "Toronto, ON",
      tags: ["Founder"],
    },
    {
      id: "p7",
      name: "Grace Chen",
      headline: "Angel & Ex-FAANG",
      company: "Independent",
      location: "San Jose, CA",
      tags: ["Investor", "Angel"],
    },
    {
      id: "p8",
      name: "Hassan Ali",
      headline: "CTO @ FinEdge",
      company: "FinEdge",
      location: "London, UK",
      tags: ["CTO", "Engineer"],
    },
    {
      id: "p9",
      name: "Isabella Rossi",
      headline: "Associate @ Northbridge Ventures",
      company: "Northbridge Ventures",
      location: "New York, NY",
      tags: ["VC"],
    },
    {
      id: "p10",
      name: "Jason Wu",
      headline: "Student @ UBC",
      company: "UBC",
      location: "Vancouver, BC",
      tags: ["Student", "BCS", "UBC"],
    },
    {
      id: "p11",
      name: "Karen Patel",
      headline: "Founder @ FlowOps",
      company: "FlowOps",
      location: "San Francisco, CA",
      tags: ["Founder"],
    },
    {
      id: "p12",
      name: "Leo Martinez",
      headline: "Angel Investor",
      company: "Martinez Capital",
      location: "Miami, FL",
      tags: ["Investor", "Angel"],
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
  