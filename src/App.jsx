import { useState, useEffect } from "react";
import profileImg from "./images/LinkedInProfile5.png";
import "./App.css";

const projects = [
  {
    title: "Emissions Factor Pipeline",
    description:
      "Bronze/silver medallion architecture pipeline ingesting emissions factor data into PostgreSQL. Uses psycopg2 and PostgreSQL JSON operators for structured data handling across layers.",
    tech: ["Python", "PostgreSQL", "psycopg2", "Medallion Architecture"],
    github: "https://github.com/ryansiebertcodes/climatiq-medallion-pipeline",
    live: null,
  },
  {
    title: "Real-Time Crypto Streaming Pipeline",
    description:
      "Ingested live Binance WebSocket trade ticks into Kafka and aggregated into 1-minute OHLCV candles via Spark Structured Streaming; layered Z-score anomaly detection with Discord webhook alerting and a dbt analytics tier for hourly rollups and daily anomaly summaries.",
    tech: ["Python", "Apache Kafka", "PySpark", "PostgreSQL", "dbt"],
    github: "#",
    live: "#",
  },
];

const skills = [
  "Python", "pandas", "C#", "Java",
  "Data Warehouse Architecture", "Dimensional Modeling", "Master Data Management", "Data Governance",
  "SQL Server", "Oracle", "PostgreSQL", "Snowflake", "Redshift", "MySQL",
  "PL/SQL", "T-SQL", "Snowflake SQL", "Query Optimization & Tuning",
  "ETL/ELT Pipeline Design",
  "Azure", "Azure DevOps", "Azure Data Factory",
  "Informatica PowerCenter", "IICS / IDMC (CDI, CAI)", "Cloud Migration & Modernization",
  "BI Schema Design", "Tableau", "Power BI", "Streamlit",
  "CI/CD & DevOps Automation", "Jenkins", "PowerShell",
  "AWS", "S3", "EC2", "Elastic Beanstalk", "Route 53", "CodeDeploy", "CloudWatch",
  "RESTful APIs", "WebSocket APIs", "Data Quality & Validation",
  "dbt", "Event-Driven Architecture", "Apache Kafka", "Spark Structured Streaming", "PySpark / Apache Spark",
  "GitHub / Git",
];

const typewriterPhrases = [
  "Building pipelines that actually scale.",
  "Designing warehouses that last.",
  "Turning raw data into trusted systems.",
  "Engineering ETL/ELT that actually works.",
  "Making clean data look easy.",
];

const medals = [
  { label: "Bronze", dot: "#c5824e", text: "#e8c4a0", bg: "rgba(197,130,78,0.1)", border: "rgba(197,130,78,0.32)" },
  { label: "Silver", dot: "#c7cdd9", text: "#dde2ec", bg: "rgba(199,205,217,0.1)", border: "rgba(199,205,217,0.28)" },
  { label: "Gold ★", dot: "#f0c64a", text: "#ffe39a", bg: "rgba(240,198,74,0.12)", border: "rgba(240,198,74,0.38)" },
];

const candles = [
  { body: 30, wick: 60, shift: 14, color: "#7c3aed", glow: "rgba(124,58,237,0.5)" },
  { body: 46, wick: 74, shift: 4, color: "#9d5cff", glow: "rgba(157,92,255,0.5)" },
  { body: 24, wick: 50, shift: -6, color: "#7c3aed", glow: "rgba(124,58,237,0.5)" },
  { body: 58, wick: 86, shift: -10, color: "#b785ff", glow: "rgba(183,133,255,0.55)" },
  { body: 36, wick: 64, shift: -18, color: "#9d5cff", glow: "rgba(157,92,255,0.5)" },
  { body: 50, wick: 78, shift: -24, color: "#c9a4ff", glow: "rgba(201,164,255,0.6)" },
  { body: 28, wick: 54, shift: -30, color: "#9d5cff", glow: "rgba(157,92,255,0.5)" },
];

const MONO = "'JetBrains Mono', monospace";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [displayed, setDisplayed] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = typewriterPhrases[phraseIndex];
    const atFull = displayed === current;
    const atEmpty = displayed === "";

    const delay = isDeleting
      ? atEmpty ? 400 : 40
      : atFull ? 1800 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (atFull) {
          setIsDeleting(true);
        } else {
          setDisplayed(current.slice(0, displayed.length + 1));
        }
      } else {
        if (atEmpty) {
          setIsDeleting(false);
          setPhraseIndex((i) => (i + 1) % typewriterPhrases.length);
        } else {
          setDisplayed(displayed.slice(0, -1));
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, phraseIndex]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-300 font-sans">

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-white font-mono text-sm tracking-widest uppercase">
            Ryan Siebert
          </span>
          <div className="hidden md:flex gap-8 text-sm">
            {["about", "projects", "contact"].map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className="capitalize hover:text-white transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800 px-6 py-4 flex flex-col gap-4 text-sm">
            {["about", "projects", "contact"].map((s) => (
              <button key={s} onClick={() => scrollTo(s)} className="capitalize text-left hover:text-white">
                {s}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto w-full flex items-center gap-12">
          <div className="flex-1">
            <p className="text-violet-400 font-mono text-sm mb-3 tracking-widest uppercase">
              Data Engineer
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
              Hi, I'm Ryan.
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mb-8 leading-relaxed min-h-[2em]">
              <span className="text-gray-200">{displayed}</span>
              <span className="inline-block w-0.5 h-5 bg-violet-400 ml-0.5 align-middle animate-pulse" />
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => scrollTo("projects")}
                className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-lg text-sm font-medium transition-colors"
              >
                View projects
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="px-6 py-3 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg text-sm font-medium transition-colors"
              >
                Get in touch
              </button>
            </div>
          </div>
          <div className="hidden md:block shrink-0">
            <img
              src={profileImg}
              alt="Ryan Siebert"
              className="w-56 h-56 rounded-full object-cover object-top border-2 border-gray-700"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-violet-400 font-mono text-sm mb-2 tracking-widest uppercase">About</p>
          <h2 className="text-3xl font-bold text-white mb-6">Clean data is earned, not given.</h2>

          <div className="flex flex-col gap-3 text-gray-400 leading-relaxed mb-10 max-w-2xl">
            <p>
              Data engineer with extensive experience designing and delivering enterprise data warehouse
              solutions across Oracle, SQL Server, and cloud platforms, with deep expertise in ETL/ELT
              architecture, dimensional modeling, and comprehensive data warehouse design.
            </p>
            <p>
              Most recently at Marquis Data building Azure-based EDW solutions, and before that a
              14-year run at InsightSoftware leading data warehouse platform releases for Fortune 500
              organizations across Oracle, SQL Server, and Snowflake.
            </p>
          </div>

          {/* Skills */}
          <p className="text-gray-500 text-xs font-mono uppercase tracking-widest mb-3">Skills</p>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-0.5 bg-gray-800 border border-gray-700 text-gray-300 rounded text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-violet-400 font-mono text-sm mb-2 tracking-widest uppercase">Projects</p>
          <h2 className="text-3xl font-bold text-white mb-12">Things I've built</h2>
          <div className="grid md:grid-cols-2 gap-8">

            {/* ── Card 1: Emissions Factor Pipeline ── */}
            <div style={{ background: "#0d1220", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "22px", overflow: "hidden" }}>
              <div style={{ position: "relative", height: "168px", background: "radial-gradient(120% 130% at 80% 0%, rgba(124,58,237,0.28) 0%, rgba(124,58,237,0) 55%), linear-gradient(160deg, #120e22 0%, #0d1220 70%)", overflow: "hidden", borderBottom: "1px solid rgba(149,92,255,0.14)" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(149,92,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(149,92,255,0.06) 1px, transparent 1px)", backgroundSize: "30px 30px", maskImage: "radial-gradient(ellipse 90% 100% at 70% 0%, #000 20%, transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse 90% 100% at 70% 0%, #000 20%, transparent 75%)" }} />
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", gap: "16px", padding: "0 30px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                    {medals.map((m) => (
                      <div key={m.label} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "7px 14px 7px 9px", borderRadius: "10px", background: m.bg, border: `1px solid ${m.border}`, minWidth: "132px" }}>
                        <span style={{ width: "11px", height: "11px", borderRadius: "3px", background: m.dot, boxShadow: `0 0 12px ${m.dot}`, flexShrink: 0 }} />
                        <span style={{ fontFamily: MONO, fontSize: "13px", fontWeight: 500, color: m.text, letterSpacing: "0.02em" }}>{m.label}</span>
                      </div>
                    ))}
                  </div>
                  <svg width="46" height="60" viewBox="0 0 46 60" fill="none">
                    <line x1="0" y1="30" x2="36" y2="30" stroke="#7c3aed" strokeWidth="2.5" strokeDasharray="5 7" className="stream-dash" />
                    <path d="M36 23 L45 30 L36 37" stroke="#a674ff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                    <svg width="58" height="64" viewBox="0 0 58 64" fill="none">
                      <ellipse cx="29" cy="12" rx="24" ry="9" fill="#1c1530" stroke="#a674ff" strokeWidth="2" />
                      <path d="M5 12 V52 C5 57 16 61 29 61 C42 61 53 57 53 52 V12" stroke="#a674ff" strokeWidth="2" fill="rgba(124,58,237,0.12)" />
                      <path d="M5 28 C5 33 16 37 29 37 C42 37 53 33 53 28" stroke="#7c3aed" strokeWidth="1.6" fill="none" opacity="0.7" />
                      <path d="M5 42 C5 47 16 51 29 51 C42 51 53 47 53 42" stroke="#7c3aed" strokeWidth="1.6" fill="none" opacity="0.7" />
                    </svg>
                    <span style={{ fontFamily: MONO, fontSize: "11px", color: "#9d8fc7", letterSpacing: "0.05em" }}>PostgreSQL</span>
                  </div>
                </div>
              </div>
              <div style={{ padding: "28px 30px 32px" }}>
                <h3 style={{ fontSize: "21px", fontWeight: 700, color: "#fff", letterSpacing: "-0.01em" }}>Emissions Factor Pipeline</h3>
                <p style={{ marginTop: "14px", fontSize: "14px", lineHeight: 1.6, color: "#9a9bab" }}>Bronze/silver medallion architecture pipeline ingesting emissions factor data into PostgreSQL. Uses psycopg2 and PostgreSQL JSON operators for structured data handling across layers.</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "18px" }}>
                  {["Python", "PostgreSQL", "psycopg2", "Medallion Architecture"].map((t) => (
                    <span key={t} style={{ fontFamily: MONO, fontSize: "12px", color: "#c3bed8", padding: "5px 11px", borderRadius: "6px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>{t}</span>
                  ))}
                </div>
                <a href="https://github.com/ryansiebertcodes/climatiq-medallion-pipeline" style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "22px", color: "#c9c5d6", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>
                  <svg width="17" height="17" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" /></svg>
                  GitHub
                </a>
              </div>
            </div>

            {/* ── Card 2: Real-Time Crypto Streaming ── */}
            <div style={{ background: "#0d1220", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "22px", overflow: "hidden" }}>
              <div style={{ position: "relative", height: "168px", background: "radial-gradient(120% 130% at 20% 0%, rgba(124,58,237,0.28) 0%, rgba(124,58,237,0) 55%), linear-gradient(160deg, #120e22 0%, #0d1220 70%)", overflow: "hidden", borderBottom: "1px solid rgba(149,92,255,0.14)" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(149,92,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(149,92,255,0.06) 1px, transparent 1px)", backgroundSize: "30px 30px", maskImage: "radial-gradient(ellipse 90% 100% at 30% 0%, #000 20%, transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse 90% 100% at 30% 0%, #000 20%, transparent 75%)" }} />
                <svg width="100%" height="100%" viewBox="0 0 560 168" preserveAspectRatio="none" style={{ position: "absolute", inset: 0 }}>
                  <path d="M-10 120 C 80 120, 110 70, 200 70 S 360 110, 460 70 580 50 580 50" stroke="#7c3aed" strokeWidth="2" fill="none" strokeDasharray="4 8" opacity="0.5" className="stream-dash-fast" />
                </svg>
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: "13px", padding: "0 32px" }}>
                  {candles.map((k, i) => (
                    <div key={i} style={{ position: "relative", width: "13px", height: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ position: "absolute", width: "2px", height: `${k.wick}px`, background: k.color, opacity: 0.6 }} />
                      <span style={{ position: "absolute", width: "13px", height: `${k.body}px`, borderRadius: "3px", background: k.color, boxShadow: `0 0 14px ${k.glow}`, transform: `translateY(${k.shift}px)` }} />
                    </div>
                  ))}
                </div>
                <div style={{ position: "absolute", top: "18px", right: "20px", display: "flex", alignItems: "center", gap: "7px", padding: "6px 12px", borderRadius: "999px", background: "rgba(149,92,255,0.14)", border: "1px solid rgba(166,116,255,0.4)" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#c9a4ff", boxShadow: "0 0 10px #c9a4ff" }} />
                  <span style={{ fontFamily: MONO, fontSize: "11px", color: "#d9c9ff", letterSpacing: "0.04em" }}>Z-SCORE ANOMALY</span>
                </div>
              </div>
              <div style={{ padding: "28px 30px 32px" }}>
                <h3 style={{ fontSize: "21px", fontWeight: 700, color: "#fff", letterSpacing: "-0.01em" }}>Real-Time Crypto Streaming Pipeline</h3>
                <p style={{ marginTop: "14px", fontSize: "14px", lineHeight: 1.6, color: "#9a9bab" }}>Ingested live Binance WebSocket trade ticks into Kafka and aggregated into 1-minute OHLCV candles via Spark Structured Streaming; layered Z-score anomaly detection with Discord webhook alerting and a dbt analytics tier for hourly rollups and daily anomaly summaries.</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "18px" }}>
                  {["Python", "Apache Kafka", "PySpark", "PostgreSQL", "dbt"].map((t) => (
                    <span key={t} style={{ fontFamily: MONO, fontSize: "12px", color: "#c3bed8", padding: "5px 11px", borderRadius: "6px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "20px", marginTop: "22px" }}>
                  <a href="https://github.com/ryansiebertcodes/crypto-streaming-pipeline" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#c9c5d6", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>
                    <svg width="17" height="17" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" /></svg>
                    GitHub
                  </a>
                  {/* <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "7px", color: "#a684ff", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Live demo
                  </a> */}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-violet-400 font-mono text-sm mb-2 tracking-widest uppercase">Contact</p>
          <h2 className="text-3xl font-bold text-white mb-4">Let's talk data</h2>
          <p className="text-gray-400 mb-8 max-w-md">
            Open to data engineering, analytics engineering, and BI-adjacent roles. Based in Seattle.
          </p>
          <div className="flex gap-6 flex-wrap">
            <a
              href="mailto:ryansiebertcodes@gmail.com"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              ryansiebertcodes@gmail.com
            </a>
            <a
              href="https://github.com/ryansiebertcodes"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              ryansiebertcodes
            </a>
            <a
              href="https://www.linkedin.com/in/ryan-s-98b92939/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-800 py-8 px-6 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Ryan Siebert · Built with React + Tailwind
      </footer>
    </div>
  );
}
