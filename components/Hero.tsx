"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaFileAlt,
  FaArrowRight,
  FaEnvelope,
  FaCode,
  FaTerminal,
} from "react-icons/fa";
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiTypescript, SiTailwindcss } from "react-icons/si";

/* ─── Static data ──────────────────────────────────────────────── */

const TECH_STACK = [
  { icon: SiReact,      label: "React"       },
  { icon: SiNextdotjs,  label: "Next.js"     },
  { icon: SiNodedotjs,  label: "Node.js"     },
  { icon: SiMongodb,    label: "MongoDB"     },
  { icon: SiTypescript, label: "TypeScript"  },
  { icon: SiTailwindcss,label: "Tailwind"    },
];

const TERMINAL_LINES = [
  { prefix: "const",    key: "role",     value: '"Full-Stack Developer"',  color: "#93c5fd" },
  { prefix: "const",    key: "stack",    value: '["MERN", "Next.js", "AI"]', color: "#86efac" },
  { prefix: "const",    key: "leetcode", value: '"100+ problems solved"',  color: "#fcd34d" },
  { prefix: "const",    key: "status",   value: '"Open to opportunities"', color: "#a5f3fc" },
];

/* ─── Delay helper ─────────────────────────────────────────────── */
const d = (ms: number): React.CSSProperties => ({
  animationDelay: `${ms}ms`,
});

/* ─── Component ────────────────────────────────────────────────── */

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex items-center justify-center min-h-[calc(100vh-4rem)] overflow-hidden bg-[#0a0e17] bg-grid-subtle"
    >
      {/* ── Ambient background glows & technical coordinate markers ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* Primary warm glow — restrained subtle ambient */}
        <div
          className="absolute -top-32 -left-24 w-[500px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(245,158,11,0.05) 0%, transparent 70%)",
          }}
        />
        {/* Secondary cool glow — bottom-right */}
        <div
          className="absolute bottom-0 right-0 w-[420px] h-[320px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(56,189,248,0.04) 0%, transparent 70%)",
          }}
        />

        {/* Technical corner coordinate markings */}
        <div className="absolute top-6 left-6 hidden lg:flex items-center gap-2 text-[10px] font-mono text-white/20 select-none">
          <span className="text-amber-500/40">SYS://</span>
          <span>PORTFOLIO.CORE.v2</span>
        </div>
        <div className="absolute top-6 right-8 hidden lg:flex items-center gap-2 text-[10px] font-mono text-white/20 select-none">
          <span>LOC://</span>
          <span className="text-amber-500/40">31.2536°N, 75.7037°E</span>
        </div>

        {/* Horizontal hairline accent */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/10 to-transparent" />
      </div>

      {/* ── Main grid ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-0">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center">

          {/* ══ LEFT — Content column (7/12) ══ */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Availability pill */}
            <div
              className="hero-fade-up inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] text-xs text-gray-300 font-medium w-fit"
              style={d(0)}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" style={{ animation: "heroPulseGlow 2s ease-in-out infinite" }} />
              Open to Software Engineering Roles
            </div>

            {/* Eyebrow label */}
            <p
              className="hero-fade-up text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-amber-400"
              style={d(80)}
            >
              Full-Stack Developer · MERN · Next.js · AI
            </p>

            {/* Main headline */}
            <div className="hero-fade-up space-y-0" style={d(160)}>
              <h1 className="font-serif text-[3.25rem] sm:text-[4.5rem] lg:text-[5.5rem] xl:text-[6rem] tracking-tight text-white leading-[1.02] select-none">
                Ankush
              </h1>
              <h1 className="font-serif text-[3.25rem] sm:text-[4.5rem] lg:text-[5.5rem] xl:text-[6rem] tracking-tight leading-[1.02] select-none">
                <span className="italic font-light text-amber-300/90">Chopane</span>
              </h1>
            </div>

            {/* Supporting statement */}
            <p
              className="hero-fade-up text-base sm:text-lg text-gray-300 leading-relaxed max-w-lg font-light"
              style={d(280)}
            >
              I architect full-stack systems with{" "}
              <span className="text-white font-medium">React, Node.js &amp; MongoDB</span>
              , deliver AI-integrated products from{" "}
              <span className="text-amber-300 font-medium">concept to production</span>
              , and maintain a sharp DSA edge with{" "}
              <span className="text-white font-medium">100+ LeetCode problems solved</span>.
            </p>

            {/* Tech-stack chips */}
            <div
              className="hero-fade-up flex flex-wrap gap-2 pt-1"
              style={d(360)}
              aria-label="Technology stack"
            >
              {TECH_STACK.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-medium text-gray-300 border border-white/[0.08] bg-white/[0.03] hover:border-amber-500/40 hover:text-amber-200 hover:bg-amber-500/5 transition-all duration-200"
                >
                  <Icon className="w-3 h-3 opacity-80" />
                  {label}
                </span>
              ))}
            </div>

            {/* CTA row */}
            <div
              className="hero-fade-up flex flex-wrap items-center gap-3 pt-2"
              style={d(450)}
            >
              {/* Primary — View Projects */}
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-gray-950 font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-amber-500/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400 focus-visible:outline-offset-2"
              >
                <FaCode className="w-3.5 h-3.5" />
                <span>View Projects</span>
                <FaArrowRight className="w-3 h-3 opacity-80" />
              </Link>

              {/* Secondary — GitHub */}
              <a
                href="https://github.com/Ankush-Chopane"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/[0.04] hover:bg-white/[0.09] text-gray-200 border border-white/[0.12] hover:border-white/25 font-medium text-sm transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              >
                <FaGithub className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              {/* Tertiary — Resume */}
              <a
                href="/assets/Ankush_Chopane_Resume.pdf"
                download="Ankush_Chopane_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download résumé PDF"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/[0.04] hover:bg-white/[0.09] text-gray-200 border border-white/[0.12] hover:border-white/25 font-medium text-sm transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              >
                <FaFileAlt className="w-3.5 h-3.5 text-amber-400" />
                <span>Download CV</span>
              </a>

              {/* Quaternary — Contact */}
              <Link
                href="#contact"
                aria-label="Go to contact section"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/[0.04] hover:bg-white/[0.09] text-gray-200 border border-white/[0.12] hover:border-white/25 font-medium text-sm transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              >
                <FaEnvelope className="w-3.5 h-3.5" />
                <span>Contact Me</span>
              </Link>
            </div>
          </div>

          {/* ══ RIGHT — Visual column (5/12) ══ */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              className="hero-fade-in hero-float relative w-full max-w-[340px] lg:max-w-[380px]"
              style={d(200)}
            >
              {/* Outer glow ring */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-2xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(245,158,11,0.18) 0%, transparent 65%)",
                }}
              />

              {/* Card frame */}
              <div className="relative rounded-2xl bg-[#0d1220] border border-white/[0.09] overflow-hidden shadow-2xl">

                {/* ── Profile portrait ── */}
                <div className="relative aspect-[4/3.8] w-full overflow-hidden">
                  <Image
                    src="/profile3.jpg"
                    alt="Ankush Chopane — Full-Stack Developer"
                    fill
                    sizes="(max-width: 1024px) 90vw, 380px"
                    className="object-cover"
                    style={{ objectPosition: "center 20%" }}
                    priority
                  />
                  {/* Gradient overlay — bottom fade to card bg */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1220] via-[#0d1220]/20 to-transparent pointer-events-none" />

                  {/* Status badge — overlaid on photo */}
                  <div className="absolute bottom-3 left-3">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0d1220]/90 backdrop-blur-md border border-emerald-500/30 text-[11px] text-emerald-300 font-medium">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"
                        style={{ animation: "heroPulseGlow 2s ease-in-out infinite" }}
                      />
                      Available for hire
                    </div>
                  </div>
                </div>

                {/* ── Terminal metadata panel ── */}
                <div className="px-4 py-4 bg-[#070c15] border-t border-white/[0.06]">
                  {/* Terminal chrome */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/80" />
                    <span className="ml-2 text-[10px] text-gray-500 font-mono flex items-center gap-1">
                      <FaTerminal className="w-2.5 h-2.5" />
                      ankush.config.ts
                    </span>
                  </div>

                  {/* Code lines */}
                  <div className="space-y-1 font-mono text-[11px] leading-relaxed">
                    {TERMINAL_LINES.map((line, i) => (
                      <div
                        key={line.key}
                        className="hero-fade-up flex gap-1.5 flex-wrap"
                        style={d(350 + i * 90)}
                      >
                        <span className="text-purple-400">{line.prefix}</span>
                        <span className="text-sky-300">{line.key}</span>
                        <span className="text-gray-500">=</span>
                        <span style={{ color: line.color }}>{line.value}</span>
                        <span className="text-gray-600">;</span>
                      </div>
                    ))}
                    {/* Cursor line */}
                    <div
                      className="hero-fade-up flex items-center gap-1 text-gray-600 pt-0.5"
                      style={d(740)}
                    >
                      <span className="text-amber-400 text-[10px]">❯</span>
                      <span className="hero-cursor text-[10px] text-gray-400"></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Floating credential badges ── */}
              {/* LeetCode badge */}
              <div
                className="hero-fade-up absolute -left-12 top-16 hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0d1220] border border-white/[0.1] shadow-xl text-xs font-medium"
                style={d(550)}
                aria-label="100+ LeetCode problems solved"
              >
                <span className="text-amber-400 font-bold text-sm">100+</span>
                <div>
                  <div className="text-white text-[10px] font-semibold leading-none">LeetCode</div>
                  <div className="text-gray-400 text-[9px] mt-0.5">Problems Solved</div>
                </div>
              </div>

              {/* University badge */}
              <div
                className="hero-fade-up absolute -right-10 bottom-20 hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0d1220] border border-white/[0.1] shadow-xl text-xs font-medium"
                style={d(650)}
                aria-label="B.Tech CSE at LPU"
              >
                <div className="w-6 h-6 rounded-md bg-amber-400/15 flex items-center justify-center text-amber-400 shrink-0">
                  <span className="text-[10px] font-bold">LPU</span>
                </div>
                <div>
                  <div className="text-white text-[10px] font-semibold leading-none">B.Tech CSE</div>
                  <div className="text-gray-400 text-[9px] mt-0.5">Class of 2028</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── Scroll hint ── */}
        <div
          className="hero-fade-in absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1.5 text-gray-500 text-[10px] font-medium tracking-widest uppercase"
          style={d(900)}
          aria-hidden="true"
        >
          <span>Scroll</span>
          <span
            className="w-px h-6 bg-gradient-to-b from-amber-400/60 to-transparent"
            style={{ animation: "heroFloatY 1.8s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
