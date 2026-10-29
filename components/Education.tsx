"use client";

import React from "react";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useReveal } from "@/hooks/useReveal";

export default function Education() {
  const sectionRef = useReveal<HTMLElement>();

  const primaryDegree = {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "Bachelor of Technology — Computer Science and Engineering",
    score: "CGPA: 6.52",
    period: "2024 – 2028 (Present)",
    status: "Currently Pursuing",
    description:
      "Core curriculum in data structures, algorithms, object-oriented programming, operating systems, database management systems, and full-stack software development.",
  };

  const secondaryEducation = [
    {
      institution: "Vasant Kanishta Mahavidyalaya",
      location: "Kaij, Maharashtra",
      degree: "Higher Secondary Certificate / Intermediate (Class XII)",
      score: "76.6%",
      period: "2023 – 2024",
      status: "Completed",
      description: "Science stream with focus on Physics, Chemistry, and Mathematics.",
    },
    {
      institution: "Sabarmati The Global School",
      location: "Latur, Maharashtra",
      degree: "Secondary School Certificate / Matriculation (Class X)",
      score: "77.4%",
      period: "2021 – 2022",
      status: "Completed",
      description: "Foundational coursework in mathematics, computer applications, and sciences.",
    },
  ];

  return (
    <section id="education" ref={sectionRef} className="py-28 bg-[#0a0e17] border-t border-white/[0.07]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="reveal flex items-center justify-between gap-4 mb-3" style={{ transitionDelay: "0ms" }}>
            <p className="text-[11px] uppercase tracking-[0.2em] text-amber-400 font-semibold">
              Academic Background
            </p>
            <span className="font-mono text-[11px] text-white/30 hidden sm:inline tracking-wider">
              SEC://05.EDUCATION
            </span>
          </div>
          <h2
            className="reveal-left font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight"
            style={{ transitionDelay: "60ms" }}
          >
            Education &amp;{" "}
            <span className="italic font-light text-amber-300/80">Qualifications</span>
          </h2>
          <p
            className="reveal text-gray-400 mt-3 text-sm sm:text-base font-light leading-relaxed"
            style={{ transitionDelay: "120ms" }}
          >
            Formal computer science engineering degree track and academic foundations.
          </p>
        </div>

        <div className="space-y-6">
          {/* Primary Featured Degree */}
          <div
            className="reveal hover-lift p-7 sm:p-8 rounded-2xl bg-[#0f1523] border border-white/[0.1] hover:border-amber-500/35 space-y-4"
            style={{ transitionDelay: "180ms" }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 shrink-0 border border-amber-400/20">
                  <FaGraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20">
                      Primary Degree
                    </span>
                    <span className="text-xs text-emerald-400 font-medium">
                      {primaryDegree.status}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-white font-medium mt-1">
                    {primaryDegree.institution}
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
                <span className="flex items-center gap-1 font-mono">
                  <FaCalendarAlt className="text-amber-400/70" />
                  {primaryDegree.period}
                </span>
                <span className="text-white/20">•</span>
                <span className="flex items-center gap-1">
                  <FaMapMarkerAlt className="text-gray-400" />
                  {primaryDegree.location}
                </span>
                <span className="text-white/20">•</span>
                <span className="font-semibold text-amber-300 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20">
                  {primaryDegree.score}
                </span>
              </div>
            </div>

            <p className="text-base font-medium text-amber-200/90">
              {primaryDegree.degree}
            </p>
            <p className="text-sm text-gray-300 font-light leading-relaxed">
              {primaryDegree.description}
            </p>
          </div>

          {/* Secondary Education Compact Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {secondaryEducation.map((sec, i) => (
              <div
                key={i}
                className="reveal hover-lift p-5 rounded-xl bg-[#0f1523]/70 border border-white/[0.07] hover:border-amber-500/25 space-y-2"
                style={{ transitionDelay: `${260 + i * 80}ms` }}
              >
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="font-mono text-gray-400">{sec.period}</span>
                  <span className="font-medium text-amber-200 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                    {sec.score}
                  </span>
                </div>
                <h4 className="font-serif text-lg text-white font-medium">{sec.institution}</h4>
                <p className="text-xs text-amber-400/90 font-medium">{sec.degree}</p>
                <p className="text-xs text-gray-400 font-light leading-relaxed">{sec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
