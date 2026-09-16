/**
 * ╔══════════════════════════════════════════════════╗
 * ║         RUDRA BHATT — PORTFOLIO CONTENT          ║
 * ║   Edit this file to update ANY part of the site  ║
 * ║   No need to touch index.html or style.css ever  ║
 * ╚══════════════════════════════════════════════════╝
 */

const PORTFOLIO = {

  // ─── PERSONAL INFO ─────────────────────────────────
  name: "Rudra Bhatt",
  title: "Rudra",          // large display name (hero)
  email: "rudrakbhatt15@gmail.com",
  phone: "+91 90548 06054",
  location: "Gujarat, India",
  linkedin: "https://www.linkedin.com/in/rudra-bhatt-700973402",
  github: "https://github.com/08-rudra",
  resumePDF: "assets/Resume_Rudra.html",  // ← drop your resume file here (HTML version)
  profilePhoto: "assets/profile-pic.png", // ← drop your photo here

  // ─── HERO TYPEWRITER ROLES ──────────────────────────
  // Add / remove / reorder — they'll cycle automatically
  roles: [
    "Senior Process Analyst · US P&C Insurance",
    "SPOC — Multiple Insurance Projects",
    "Underwriting, Claims & Policy Admin",
    "Excel & VBA Automation",
    "Generative AI for Process Improvement",
  ],

  // ─── HERO SUBTITLE ─────────────────────────────────
  heroSub: "Senior Process Analyst driving QA, data validation, and process automation across US P&C insurance operations at Dyad, Inc.",

  // ─── ABOUT PARAGRAPHS ──────────────────────────────
  aboutTitle: "I streamline operations",
  aboutTitleItalic: "and reduce manual effort.",
  aboutParagraphs: [
    "I'm a Senior Process Analyst at Dyad, Inc., specializing in US P&C Insurance Operations, Quality Assurance, Manual Testing, and Data Validation. I act as SPOC across multiple insurance projects, supporting underwriting, policy administration, accounting, claims support, data migration, reconciliation, and reporting.",
    "I lead process improvement initiatives through workflow analysis, SOP development, and Excel/VBA automation — including an end-to-end reporting automation that cut processing time by approximately 79%. I also apply Generative AI tools for analysis, documentation, and productivity improvement.",
    "I progressed from Junior Process Analyst to Process Analyst to Senior Process Analyst within the same organization, and I'm currently pursuing a BCA at Parul University alongside a completed Diploma in Information Technology from GTU.",
  ],

  // ─── STATS ─────────────────────────────────────────
  stats: [
    { num: "79%",  label: "Reporting Time Reduced" },
    { num: "3",    label: "Roles — Same Company" },
    { num: "10+",  label: "Insurance Processes" },
    { num: "1",    label: "Kaizenator Award" },
  ],

  // ─── SKILLS ────────────────────────────────────────
  // accent: true = highlighted brown pill
  skillGroups: [
    {
      title: "Insurance Operations",
      skills: [
        { name: "US P&C Insurance Operations" },
        { name: "Underwriting" },
        { name: "Policy Administration" },
        { name: "Claims Support" },
        { name: "Accounting" },
        { name: "Data Migration" },
      ],
    },
    {
      title: "QA & Data",
      skills: [
        { name: "Manual Testing" },
        { name: "Functional Testing & Validation" },
        { name: "Quality Assurance" },
        { name: "Data Validation" },
        { name: "Data Reconciliation" },
        { name: "Issue & Discrepancy Analysis" },
      ],
    },
    {
      title: "Process & Documentation",
      skills: [
        { name: "Business Process Analysis" },
        { name: "Process Improvement" },
        { name: "Workflow Optimization" },
        { name: "SOP Development" },
        { name: "Process Documentation" },
        { name: "Reporting & Analytics" },
      ],
    },
    {
      title: "Tools & Automation",
      skills: [
        { name: "Advanced Excel",      accent: true },
        { name: "VBA Automation",      accent: true },
        { name: "Generative AI Tools", accent: true },
        { name: "Basic Python" },
      ],
    },
  ],

  // ─── EXPERIENCE ────────────────────────────────────
  // Set current: true for the active/latest role
  experience: [
    {
      role: "Senior Process Analyst",
      company: "Dyad, Inc.",
      location: "Gujarat",
      period: "Jun 2026 – Present",
      current: true,
      bullets: [
        "Serve as SPOC for multiple US P&C insurance projects, coordinating daily operations, issue resolution, team support, quality checks, and process improvement",
        "Perform manual testing and functional validation of business workflows, operational changes, process outputs, and data to identify discrepancies and support resolution",
        "Coordinate and validate workflows across underwriting, policy administration, accounting, claims support, data migration, and related insurance operations",
        "Perform data validation, reconciliation, reporting checks, and process-quality reviews to support accuracy, consistency, and turnaround requirements",
        "Lead process improvement initiatives through workflow analysis, standardization, documentation, and Excel/VBA automation",
        "Develop and maintain SOPs and process documentation to improve consistency, traceability, standardization, and audit readiness",
        "Apply Generative AI tools for analysis, documentation, workflow optimization, and productivity improvement",
        "Designed an end-to-end reporting automation that reduced processing time by approximately 79% through automated extraction, Excel processing, distribution, scheduling, and error handling",
      ],
    },
    {
      role: "Process Analyst",
      company: "Dyad, Inc.",
      location: "Gujarat",
      period: "Jan 2026 – Jun 2026",
      current: false,
      bullets: [
        "Managed US P&C insurance workflows across underwriting, policy servicing, accounting, claims support, and related processes",
        "Performed manual quality checks, functional validation, data analysis, reconciliation, and data validation to identify discrepancies and support accurate reporting",
        "Supported data migration and validation activities to maintain data integrity across operational systems",
        "Created and standardized SOPs and process documentation and coordinated issue resolution for assigned workflows",
        "Used Advanced Excel and VBA-based automation to reduce repetitive manual work and improve reporting accuracy",
      ],
    },
    {
      role: "Junior Process Analyst",
      company: "Dyad, Inc.",
      location: "Gujarat",
      period: "Dec 2024 – Jan 2026",
      current: false,
      bullets: [
        "Executed US P&C insurance activities including insured profile setup, quote processing, policy renewals, and related servicing tasks",
        "Supported quality checks, audits, data validation, SOP documentation, and process-standardization activities",
        "Used Excel-based tools to organize, track, validate, and report operational data",
        "Built foundational US P&C insurance and KPO expertise, progressing to Process Analyst within 13 months",
      ],
    },
  ],

  // ─── PROJECTS ──────────────────────────────────────
  // To ADD a project: copy one block and fill in the fields
  // To REMOVE a project: delete the block entirely
  // github / live are optional — set to "" to hide the link
  projects: [
    {
      tags: ["Excel", "VBA"],
      title: "End-to-End Reporting Automation",
      desc: "Designed an automated reporting pipeline covering extraction, Excel processing, distribution, scheduling, and error handling — cutting reporting processing time by approximately 79%.",
      github: "",
      live: "",
    },
    {
      tags: ["Excel", "VBA"],
      title: "VBA Automation Tool",
      desc: "Built Excel-based VBA macros to automate repetitive data entry and reconciliation tasks in insurance operations, significantly cutting manual processing time.",
      github: "https://github.com/08-rudra",
      live: "",
    },
    {
      tags: ["HTML", "CSS", "JS"],
      title: "Personal Portfolio",
      desc: "Designed and built this personal portfolio from scratch to represent professional identity in the insurance operations and process automation space.",
      github: "https://github.com/08-rudra/rudraBhatt_portFolio",
      live: "https://08-rudra.github.io/rudraBhatt_portFolio/",
    },
    {
      tags: ["JavaScript"],
      title: "Random Quote Generator",
      desc: "A lightweight JavaScript web app that fetches and displays random quotes, demonstrating frontend fundamentals and API integration concepts.",
      github: "https://github.com/08-rudra/Random-Quote-Generator",
      live: "https://08-rudra.github.io/Random-Quote-Generator/",
    },
    {
      tags: ["JavaScript"],
      title: "Notes App",
      desc: "A simple notes application with local storage support — an early project demonstrating DOM manipulation and persistent client-side state management.",
      github: "https://github.com/08-rudra/Notes-.git",
      live: "",
    },
  ],

  // ─── AWARDS / CERTIFICATIONS ───────────────────────
  // featured: true = brown highlighted card (first/best award)
  awards: [
    {
      featured: true,
      icon: "award",  // "award" | "education" | "cert"
      title: "Kaizenator Award",
      org: "Dyad, Inc. — March 2025",
      desc: "Recognised for continuous improvement mindset and outstanding contribution to process efficiency and operational excellence.",
    },
    {
      featured: false,
      icon: "education",
      title: "Bachelor of Computer Applications (BCA)",
      org: "Parul University — 2026 to Present",
      desc: "Currently pursuing a BCA to build on hands-on process and data expertise with formal computer applications education.",
    },
    {
      featured: false,
      icon: "education",
      title: "Diploma — Information Technology",
      org: "Gujarat Technological University (GTU) — Grade 7.32",
      desc: "Completed a diploma program with focus on IT systems, programming fundamentals, and software development principles.",
    },
  ],

  // ─── CONTACT SECTION ───────────────────────────────
  contactSub: "Open to opportunities in insurance operations, QA, and process automation. Feel free to reach out.",

  // ─── FOOTER ────────────────────────────────────────
  footerCopy: "© 2026 Rudra Bhatt. All rights reserved.",

};
