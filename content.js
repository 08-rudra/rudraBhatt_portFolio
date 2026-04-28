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
  location: "Ahmedabad, Gujarat, India",
  linkedin: "https://www.linkedin.com/in/rudrabhatt-700973402",
  github: "https://github.com/08-rudra",
  resumePDF: "assets/Resume_Rudra.pdf",   // ← drop your PDF here
  profilePhoto: "assets/profile-pic.png", // ← drop your photo here

  // ─── HERO TYPEWRITER ROLES ──────────────────────────
  // Add / remove / reorder — they'll cycle automatically
  roles: [
    "Process Analyst · US P&C Insurance",
    "SPOC for 3 Client Projects",
    "Underwriting & Claims Operations",
    "Excel & VBA Automation",
    "KPO Operations Specialist",
  ],

  // ─── HERO SUBTITLE ─────────────────────────────────
  heroSub: "Operations specialist in underwriting, claims, accounting, and process automation at Dyad India Office.",

  // ─── ABOUT PARAGRAPHS ──────────────────────────────
  aboutTitle: "I streamline operations",
  aboutTitleItalic: "and reduce manual effort.",
  aboutParagraphs: [
    "I'm a Process Analyst at Dyad India Office, working across US P&C insurance and KPO operations. My work spans new business submissions, renewal underwriting, policy endorsements, cancellations, COI processing, claims support, and accounting reconciliation.",
    "Beyond core operations, I serve as SPOC for multiple client projects — coordinating daily workflows, resolving escalations, and standardising processes through SOP creation. I actively use Advanced Excel, VBA, and AI tools to reduce manual effort and improve output quality.",
    "I hold a Diploma in Information Technology from GTU and am always looking to grow at the intersection of insurance operations, analytics, and automation.",
  ],

  // ─── STATS ─────────────────────────────────────────
  stats: [
    { num: "3+",   label: "Projects as SPOC" },
    { num: "1.5yr",label: "Industry Experience" },
    { num: "10+",  label: "Insurance Processes" },
    { num: "1",    label: "Kaizenator Award" },
  ],

  // ─── SKILLS ────────────────────────────────────────
  // accent: true = highlighted brown pill
  skillGroups: [
    {
      title: "Insurance Operations",
      skills: [
        { name: "New Business Submissions" },
        { name: "Renewal Underwriting" },
        { name: "Policy Endorsements" },
        { name: "Risk Evaluation" },
        { name: "Cancellations" },
        { name: "COI Processing" },
        { name: "Claims Support" },
        { name: "Inspection Support" },
        { name: "US P&C Insurance" },
      ],
    },
    {
      title: "Accounting & KPO",
      skills: [
        { name: "Exceptions Download" },
        { name: "DB Reconciliation" },
        { name: "Multi-client Workflows" },
        { name: "Audit Readiness" },
        { name: "SOP Creation" },
        { name: "Quality Checks" },
      ],
    },
    {
      title: "Tools & Automation",
      skills: [
        { name: "Advanced Excel",     accent: true },
        { name: "VBA Automation",     accent: true },
        { name: "Generative AI Tools",accent: true },
        { name: "Microsoft Word" },
        { name: "Data Analysis" },
        { name: "Process Improvement" },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Escalation Management" },
        { name: "Team Coordination" },
        { name: "SPOC Operations" },
        { name: "Continuous Improvement" },
        { name: "Problem Solving" },
      ],
    },
  ],

  // ─── EXPERIENCE ────────────────────────────────────
  // Set current: true for the active/latest role
  experience: [
    {
      role: "Process Analyst",
      company: "Dyad India Office",
      location: "Ahmedabad",
      period: "Jan 2026 – Present",
      current: true,
      bullets: [
        "Act as Single Point of Contact (SPOC) for 3 projects — coordinating daily operations, resolving escalations, and guiding team members",
        "Handle end-to-end US P&C insurance operations including new business submissions, renewal underwriting, policy endorsements, risk evaluation, cancellations, COI, and inspection support",
        "Manage accounting services including Exceptions Download processing and DB reconciliation across client workflows",
        "Create and maintain SOPs to standardise processes and ensure audit readiness",
        "Use Advanced Excel, VBA automation, and AI tools to reduce manual effort and improve data accuracy",
        "Contribute to ongoing process improvement initiatives, identifying gaps and implementing corrective actions",
      ],
    },
    {
      role: "Junior Process Analyst",
      company: "Dyad India Office",
      location: "Ahmedabad",
      period: "Dec 2024 – Jan 2026",
      current: false,
      bullets: [
        "Executed core insurance operational tasks including insured profile setup, quote processing, and policy renewals",
        "Supported SOP documentation and assisted senior analysts in quality checks and audits",
        "Used Excel-based tools to track and organize operational data, improving workflow efficiency",
        "Built strong domain knowledge across insurance and KPO processes",
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
      title: "VBA Automation Tool",
      desc: "Built Excel-based VBA macros to automate repetitive data entry and reconciliation tasks in insurance operations, significantly cutting manual processing time.",
      github: "https://github.com/08-rudra",
      live: "",
    },
    {
      tags: ["HTML", "CSS", "JS"],
      title: "Personal Portfolio",
      desc: "Designed and built this personal portfolio from scratch to represent professional identity in the insurance and KPO operations space.",
      github: "https://github.com/08-rudra/Rudra-Portfolio-.git",
      live: "https://08-rudra.github.io/Rudra-Portfolio-/",
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
      org: "Dyad India Office",
      desc: "Recognised for continuous improvement mindset and outstanding contribution to process efficiency and operational excellence.",
    },
    {
      featured: false,
      icon: "education",
      title: "Diploma — Information Technology",
      org: "Gujarat Technological University",
      desc: "Completed a 3-year diploma program with focus on IT systems, programming fundamentals, and software development principles.",
    },
  ],

  // ─── CONTACT SECTION ───────────────────────────────
  contactSub: "Open to opportunities in InsurTech, KPO operations, and process automation. Feel free to reach out.",

  // ─── FOOTER ────────────────────────────────────────
  footerCopy: "© 2026 Rudra Bhatt. All rights reserved.",

};
