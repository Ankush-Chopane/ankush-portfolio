"use client";

import React from "react";
import { FaGithub, FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import { useReveal } from "@/hooks/useReveal";

/* ─── Project data ─────────────────────────────────────────────── */
const projects = [
  {
    index: "01",
    title: "Blood Donation Management System",
    date: "Jul 2026",
    tagline: "Full‑stack MERN portal coordinating donors, hospitals, and blood banks.",
    description:
      "Comprehensive full‑stack healthcare platform facilitating life‑saving blood supply coordination with role‑based access and live inventory tracking.",
    features: [
      "Secure JWT authentication with role‑based authorisation (Donors, Hospitals, Admins)",
      "Real‑time blood stock queries and urgent request notifications",
      "Robust REST APIs with MongoDB aggregation pipelines",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
    github: "https://github.com/Ankush-Chopane/Blood-Donation-Management-System",
    certificate: "https://drive.google.com/file/d/1dmkv3KAjUbWTSoEyLpqcKwplXDaZE5GW/view?usp=sharing",
    badge: "MERN Stack",
    featured: true,
  },
  {
    index: "02",
    title: "AI Flashcard & Chatbot App",
    date: "May 2026",
    tagline: "Interactive AI study assistant with real‑time adaptive questioning.",
    description:
      "An AI‑powered flashcard and chatbot application engineered to accelerate study sessions through interactive Q&A and immediate feedback loops.",
    features: [
      "Dynamic question‑answer generation via integrated AI APIs",
      "Responsive conversational interface with real‑time feedback",
      "Reinforced learning through spaced‑repetition flashcards",
    ],
    tech: ["JavaScript", "REST APIs", "AI Prompting", "HTML5", "CSS3"],
    github: "https://github.com/Ankush-Chopane/AI-Flashcard-and-Chatbot",
    certificate: null,
    badge: "AI & Education",
    featured: false,
  },
  {
    index: "03",
    title: "TaskFlow Pro — AI Daily Organizer",
    date: "May 2026",
    tagline: "Smart productivity manager built with React for streamlined daily scheduling.",
    description:
      "A feature‑rich daily task organizer that centralises routine scheduling, priority management, and progress tracking in a clean, modern UI.",
    features: [
      "Structured daily planning with priority tags, status filtering, and deadlines",
      "Fast client‑side state handling with persistent local storage",
      "Mobile‑first responsive dashboard for frictionless task updates",
    ],
    tech: ["React.js", "JavaScript", "Component State", "CSS3", "HTML5"],
    github: "https://github.com/Ankush-Chopane/taskflow-pro",
    certificate: null,
    badge: "Productivity",
    featured: false,
  },
  {
    index: "04",
    title: "E‑Zone Electronics Store",
    date: "Nov 2024",
    tagline: "Modern responsive electronics storefront with catalog search and filtering.",
    description:
      "Engineered an interactive e‑commerce storefront showcasing consumer electronics with product filtering, instant search, and responsive layout across devices.",
    features: [
      "Dynamic catalog with category filters, search bar, and item specifications",
      "Intuitive cart state management providing a frictionless checkout preview",
      "Optimised layout ensuring rapid load times and cross‑browser consistency",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
    github: "https://github.com/Ankush-Chopane/E-Zone-Electronics",
    certificate: null,
    badge: "Frontend Architecture",
    featured: false,
  },
];

/* ─── Helper components ─────────────────────────────────────── */
function TechTag({ name }: { name: string }) {
  return (
    <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.04] text-gray-300 border border-white/[0.06] hover:border-amber-500/30 hover:text-amber-200 transition-colors duration-150">
      {name}
    </span>
  );
}

function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 mt-1.5 shrink-0" />
      <span className="text-sm text-gray-300 leading-relaxed font-light">{children}</span>
    </li>
  );
}

/* ─── Main component ──────────────────────────────────────── */
export default function Projects() {
  const sectionRef = useReveal<HTMLElement>();

  const featured = projects.find((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured);

  return (
    <section id="projects" ref={sectionRef} className="py-28 bg-[#0a0e17] border-t border-white/[0.07]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <div className="reveal flex items-center justify-between gap-4 mb-4" style={{ transitionDelay: "0ms" }}>
            <p className="text-[11px] uppercase tracking-[0.2em] text-amber-400 font-semibold">
              Selected Work
            </p>
            <span className="font-mono text-[11px] text-white/30 hidden sm:inline tracking-wider">
              SEC://02.PROJECTS
            </span>
          </div>
          <h2
            className="reveal-left font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight"
            style={{ transitionDelay: "60ms" }}
          >
            Featured Engineering Projects
          </h2>
          <p
            className="reveal text-sm sm:text-base text-gray-400 font-light mt-3 leading-relaxed"
            style={{ transitionDelay: "120ms" }}
          >
            End‑to‑end systems I designed and built — spanning frontend experience, API contracts, database schemas, and AI integration.
          </p>
        </div>

        {/* Featured project – large editorial showcase */}
        {featured && (
          <article
            className="reveal hover-lift group mb-14 p-7 sm:p-10 rounded-2xl bg-gradient-to-b from-[#11192b] to-[#0d1322] border border-amber-500/25 hover:border-amber-400/50 relative overflow-hidden"
            style={{ transitionDelay: "160ms" }}
          >
            {/* Subtle decorative glow */}
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none group-hover:bg-amber-500/15 transition-all duration-500"
            />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20">
                  FEATURED PROJECT · {featured.index}
                </span>
                <span className="text-white/20">•</span>
                <span className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                  {featured.badge}
                </span>
              </div>
              <span className="font-mono text-xs text-gray-400">{featured.date}</span>
            </div>

            <div className="mt-6 grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-medium group-hover:text-amber-200 transition-colors">
                  {featured.title}
                </h3>
                <p className="text-base text-amber-300/90 font-medium leading-snug">
                  {featured.tagline}
                </p>
                <p className="text-sm text-gray-300 font-light leading-relaxed">
                  {featured.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  {featured.tech.map((t) => (
                    <TechTag key={t} name={t} />
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-black/25 p-5 sm:p-6 rounded-xl border border-white/[0.06]">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-3">
                    Key Technical Highlights
                  </p>
                  <ul className="space-y-2.5">
                    {featured.features.map((f, idx) => (
                      <FeatureItem key={idx}>{f}</FeatureItem>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-2.5">
                  <a
                    href={featured.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-400 text-gray-950 font-semibold text-xs hover:bg-amber-300 transition-colors shadow-sm"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>View Repository on GitHub</span>
                    <span className="arrow-slide">→</span>
                  </a>
                  {featured.certificate && (
                    <a
                      href={featured.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-amber-300 border border-amber-500/30 hover:border-amber-400/60 font-semibold text-xs transition-all"
                    >
                      <FaCertificate className="w-3.5 h-3.5" />
                      <span>View Certificate</span>
                      <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Secondary projects – compact cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {secondary.map((proj, i) => (
            <article
              key={proj.index}
              className="reveal hover-lift group p-6 rounded-2xl bg-[#0f1523] border border-white/[0.08] hover:border-amber-500/40 flex flex-col justify-between"
              style={{ transitionDelay: `${240 + i * 80}ms` }}
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-amber-400">
                      {proj.index}
                    </span>
                    <span className="text-white/20">•</span>
                    <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium">
                      {proj.badge}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-gray-500">{proj.date}</span>
                </div>

                <h3 className="font-serif text-xl text-white font-medium group-hover:text-amber-200 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs text-amber-300/80 font-medium mt-1.5 leading-normal">
                  {proj.tagline}
                </p>
                <p className="text-xs text-gray-400 font-light mt-2.5 leading-relaxed line-clamp-3">
                  {proj.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {proj.features.slice(0, 2).map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-300 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70 mt-1.5 shrink-0" />
                      <span className="line-clamp-2">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] space-y-3.5">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t) => (
                    <TechTag key={t} name={t} />
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 hover:text-amber-200 transition-colors"
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                    <span>GitHub Repository</span>
                    <span className="arrow-slide">→</span>
                  </a>
                  {proj.certificate && (
                    <a
                      href={proj.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-400/10 hover:bg-amber-400 text-amber-300 hover:text-gray-950 border border-amber-500/30 hover:border-amber-400 font-semibold text-xs transition-all"
                    >
                      <FaCertificate className="w-3 h-3" />
                      <span>Certificate</span>
                      <FaExternalLinkAlt className="text-[9px]" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
