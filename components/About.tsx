"use client";

import React from "react";
import { useReveal } from "@/hooks/useReveal";

/* ─── Data ─────────────────────────────────────────────────────── */
const STATS = [
  { value: "100+", label: "LeetCode", sub: "Problems solved"    },
  { value: "7.01", label: "B.Tech CGPA", sub: "Computer Science" },
  { value: "1st",  label: "ONE INDIA 2025", sub: "University champion" },
  { value: "40+",  label: "Community", sub: "Trained in cyber safety" },
];

const STRENGTHS = [
  {
    index: "01",
    title: "Full-Stack Systems",
    detail:
      "End-to-end architecture with React, Node.js, Express, and MongoDB — from schema design to RESTful API contracts to responsive frontends.",
  },
  {
    index: "02",
    title: "AI Integration",
    detail:
      "Building AI-powered study assistants and flashcard engines using REST-based AI APIs — practical, product-ready integrations, not demos.",
  },
  {
    index: "03",
    title: "Algorithmic Rigour",
    detail:
      "100+ LeetCode problems solved across trees, graphs, dynamic programming, and data structures — with a focus on asymptotic optimization.",
  },
];

const FOCUS_TAGS = [
  "MERN Stack",
  "Next.js",
  "REST APIs",
  "JWT Auth",
  "MongoDB",
  "DSA",
  "AI Tooling",
  "Clean Architecture",
];

/* ─── Component ────────────────────────────────────────────────── */
export default function About() {
  const sectionRef = useReveal();

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-label="About Ankush Chopane"
      className="relative py-28 bg-[#0a0e17] bg-dots-subtle border-t border-white/[0.07] overflow-hidden"
    >
      {/* Subtle architectural perimeter line */}
      <div aria-hidden="true" className="absolute top-0 right-12 w-px h-full bg-gradient-to-b from-white/[0.04] via-amber-500/[0.05] to-transparent pointer-events-none hidden xl:block" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section label + technical index ── */}
        <div className="reveal flex items-center justify-between gap-4 mb-12" style={{ transitionDelay: "0ms" }}>
          <p className="text-[11px] uppercase tracking-[0.2em] text-amber-400 font-semibold">
            Engineering Profile
          </p>
          <span className="font-mono text-[11px] text-white/30 hidden sm:inline tracking-wider">
            SEC://01.OVERVIEW
          </span>
        </div>

        {/* ── Two-column grid ── */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* ══ LEFT — Narrative (7/12) ══ */}
          <div className="lg:col-span-7 space-y-10">

            {/* Heading */}
            <h2
              className="reveal-left font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-[1.1]"
              style={{ transitionDelay: "60ms" }}
            >
              Building systems that{" "}
              <span className="italic font-light text-amber-300/90">
                work end-to-end.
              </span>
            </h2>

            {/* Body copy — short focused paragraphs */}
            <div className="space-y-5 text-[15px] sm:text-base leading-[1.8] text-gray-300 font-light">
              <p
                className="reveal"
                style={{ transitionDelay: "120ms" }}
              >
                I&apos;m <strong className="text-white font-medium">Ankush Chopane</strong>, a Computer Science Engineering student at{" "}
                <span className="text-amber-200/80">Lovely Professional University</span>{" "}
                (Class of 2028), focused on building full-stack products that are fast, maintainable, and purposeful.
              </p>

              <p
                className="reveal"
                style={{ transitionDelay: "170ms" }}
              >
                My work spans the MERN stack — architecting RESTful backends with role-based JWT authentication, designing normalized MongoDB schemas, and building component-driven React frontends. I care about clean API contracts, sensible state management, and interfaces that don&apos;t get in the user&apos;s way.
              </p>

              <p
                className="reveal"
                style={{ transitionDelay: "220ms" }}
              >
                Outside the stack, I actively solve DSA challenges on LeetCode and have cleared{" "}
                <span className="text-amber-300 font-medium">100+ problems</span>{" "}
                across trees, graphs, dynamic programming, and sliding window patterns — because shipping fast code still needs to be correct code.
              </p>
            </div>

            {/* Focus area tags */}
            <div
              className="reveal"
              style={{ transitionDelay: "290ms" }}
            >
              <p className="text-[11px] uppercase tracking-[0.15em] text-gray-500 font-semibold mb-3">
                Focus areas
              </p>
              <div className="flex flex-wrap gap-2" aria-label="Technical focus areas">
                {FOCUS_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md text-xs font-medium text-gray-300 border border-white/[0.08] bg-white/[0.03] hover:border-amber-500/30 hover:text-amber-200 hover:bg-amber-500/[0.04] transition-all duration-150"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ══ RIGHT — Stats + Strengths (5/12) ══ */}
          <div className="lg:col-span-5 space-y-8">

            {/* Stats grid */}
            <div
              className="reveal-right grid grid-cols-2 gap-3"
              style={{ transitionDelay: "100ms" }}
              aria-label="Key statistics"
            >
              {STATS.map(({ value, label, sub }) => (
                <div
                  key={label}
                  className="group p-4 rounded-xl bg-[#0f1523] border border-white/[0.07] hover:border-amber-500/25 transition-colors duration-200"
                >
                  <span className="block font-serif text-[2rem] font-semibold text-white tracking-tight leading-none">
                    {value}
                  </span>
                  <span className="block text-[10px] uppercase tracking-widest text-amber-400 font-semibold mt-2">
                    {label}
                  </span>
                  <span className="block text-[11px] text-gray-500 mt-0.5 font-light">
                    {sub}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div
              className="reveal-right h-px bg-white/[0.06]"
              style={{ transitionDelay: "160ms" }}
              aria-hidden="true"
            />

            {/* Technical strengths — numbered list */}
            <div
              className="reveal-right space-y-5"
              style={{ transitionDelay: "220ms" }}
              aria-label="Technical strengths"
            >
              <p className="text-[11px] uppercase tracking-[0.15em] text-gray-500 font-semibold">
                Technical strengths
              </p>

              <ul className="space-y-5" role="list">
                {STRENGTHS.map(({ index, title, detail }) => (
                  <li key={index} className="flex gap-4 group">
                    <span
                      aria-hidden="true"
                      className="font-mono text-[11px] text-amber-400/60 font-semibold mt-0.5 shrink-0 w-5 text-right group-hover:text-amber-400 transition-colors"
                    >
                      {index}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-amber-200 transition-colors duration-150">
                        {title}
                      </h3>
                      <p className="text-[13px] text-gray-400 font-light leading-relaxed">
                        {detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
