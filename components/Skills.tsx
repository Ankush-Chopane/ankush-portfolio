"use client";

import React from "react";
import { useReveal } from "@/hooks/useReveal";
import { SiJavascript, SiPython, SiCplusplus, SiHtml5, SiCss, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiGit, SiGithub, SiVercel, SiJsonwebtokens } from "react-icons/si";
import { FaDatabase, FaJava, FaCode, FaLayerGroup, FaUsers, FaBrain, FaNetworkWired, FaChartBar } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

/* ─── Data ──────────────────────────────────────────────────────── */
type Skill = {
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
  note?: string;
};

type Category = {
  label: string;
  description: string;
  skills: Skill[];
};

const CATEGORIES: Category[] = [
  {
    label: "Languages",
    description: "Programming & scripting",
    skills: [
      { name: "JavaScript", icon: SiJavascript,  note: "Primary language" },
      { name: "Python",     icon: SiPython,       note: "Scripting & AI"   },
      { name: "Java",       icon: FaJava,         note: "OOP fundamentals" },
      { name: "C++",        icon: SiCplusplus,    note: "DSA & systems"    },
      { name: "C",          icon: FaCode,         note: "Foundations"      },
      { name: "SQL",        icon: FaDatabase,     note: "Query language"   },
      { name: "HTML5",      icon: SiHtml5                                  },
      { name: "CSS3",       icon: SiCss                                    },
    ],
  },
  {
    label: "Frontend",
    description: "UI libraries & styling",
    skills: [
      { name: "React.js",     icon: SiReact,       note: "Component-driven UIs" },
      { name: "Next.js",      icon: SiNextdotjs,   note: "SSR & App Router"     },
      { name: "Tailwind CSS", icon: SiTailwindcss, note: "Utility-first CSS"    },
    ],
  },
  {
    label: "Backend",
    description: "Server, APIs & auth",
    skills: [
      { name: "Node.js",    icon: SiNodedotjs,     note: "Runtime"         },
      { name: "Express.js", icon: SiExpress,       note: "REST framework"  },
      { name: "REST APIs",  icon: TbApi,           note: "API architecture"},
      { name: "JWT Auth",   icon: SiJsonwebtokens, note: "Token auth"      },
    ],
  },
  {
    label: "Databases",
    description: "Relational & NoSQL",
    skills: [
      { name: "MongoDB",       icon: SiMongodb,          note: "Document store"  },
      { name: "MySQL",         icon: SiMysql,            note: "Relational"      },
      { name: "PostgreSQL",    icon: SiPostgresql,       note: "Relational"      },
      { name: "MS SQL Server", icon: FaDatabase,         note: "Enterprise SQL" },
    ],
  },
  {
    label: "Tools & Deployment",
    description: "Workflow & platforms",
    skills: [
      { name: "Git",     icon: SiGit,     note: "Version control" },
      { name: "GitHub",  icon: SiGithub,  note: "Collaboration"   },
      { name: "Vercel",  icon: SiVercel,  note: "Deployment"      },
      { name: "Tableau", icon: FaChartBar, note: "Data viz"        },
    ],
  },
  {
    label: "Core Competencies",
    description: "Engineering & teamwork",
    skills: [
      { name: "Data Structures & Algorithms", icon: FaBrain,       note: "100+ LeetCode" },
      { name: "Full-Stack Architecture",      icon: FaLayerGroup,  note: "End-to-end design" },
      { name: "ETL Pipelines",                icon: FaNetworkWired,note: "Data engineering" },
      { name: "Team Collaboration",           icon: FaUsers                               },
      { name: "Problem-Solving",              icon: FaCode                                },
    ],
  },
];

/* ─── Skill chip ─────────────────────────────────────────────────── */
function SkillChip({ name, icon: Icon, note }: Skill) {
  return (
    <li>
      <div
        title={note}
        aria-label={note ? `${name} — ${note}` : name}
        className="group inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/[0.08] bg-white/[0.025] hover:border-amber-500/35 hover:bg-amber-500/[0.05] transition-all duration-150 cursor-default"
      >
        {Icon && (
          <Icon className="w-3.5 h-3.5 text-gray-500 group-hover:text-amber-400 transition-colors duration-150 shrink-0" />
        )}
        <span className="text-[13px] font-medium text-gray-300 group-hover:text-white transition-colors duration-150 leading-none whitespace-nowrap">
          {name}
        </span>
        {note && (
          <span className="hidden sm:inline text-[11px] text-gray-600 group-hover:text-gray-500 transition-colors leading-none whitespace-nowrap">
            · {note}
          </span>
        )}
      </div>
    </li>
  );
}

/* ─── Component ─────────────────────────────────────────────────── */
export default function Skills() {
  const sectionRef = useReveal();

  return (
    <section
      id="skills"
      ref={sectionRef}
      aria-label="Skills and Technologies"
      className="relative py-28 bg-[#0a0e17] bg-dots-subtle border-t border-white/[0.07]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="max-w-2xl mb-14">
          <div className="reveal flex items-center justify-between gap-4 mb-4" style={{ transitionDelay: "0ms" }}>
            <p className="text-[11px] uppercase tracking-[0.2em] text-amber-400 font-semibold">
              Technical Arsenal
            </p>
            <span className="font-mono text-[11px] text-white/30 hidden sm:inline tracking-wider">
              SEC://04.STACK
            </span>
          </div>
          <h2
            className="reveal-left font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight"
            style={{ transitionDelay: "60ms" }}
          >
            Skills &amp;{" "}
            <span className="italic font-light text-amber-300/80">Technologies</span>
          </h2>
          <p
            className="reveal text-sm sm:text-base text-gray-400 font-light mt-3 leading-relaxed"
            style={{ transitionDelay: "110ms" }}
          >
            Technologies I work with, organized by discipline.
          </p>
        </div>

        {/* ── Category rows ── */}
        <div className="space-y-0">
          {CATEGORIES.map((cat, catIdx) => (
            <div
              key={cat.label}
              className="reveal border-t border-white/[0.07] py-6 grid sm:grid-cols-12 gap-4 sm:gap-8 items-start group/row"
              style={{ transitionDelay: `${140 + catIdx * 60}ms` }}
            >
              {/* Left — category label */}
              <div className="sm:col-span-3 lg:col-span-2 pt-0.5 shrink-0">
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-400 group-hover/row:text-amber-400 transition-colors duration-150">
                  {cat.label}
                </h3>
                <p className="text-[11px] text-gray-600 font-light mt-1 hidden sm:block">
                  {cat.description}
                </p>
              </div>

              {/* Right — skill chips */}
              <ul
                className="sm:col-span-9 lg:col-span-10 flex flex-wrap gap-2"
                role="list"
                aria-label={`${cat.label} skills`}
              >
                {cat.skills.map((skill) => (
                  <SkillChip key={skill.name} {...skill} />
                ))}
              </ul>
            </div>
          ))}

          {/* Bottom border */}
          <div className="reveal border-t border-white/[0.07]" style={{ transitionDelay: "540ms" }} aria-hidden="true" />
        </div>

      </div>
    </section>
  );
}
