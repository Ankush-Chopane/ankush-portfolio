"use client";

import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaGithub, FaAward, FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import { useReveal } from "@/hooks/useReveal";

export default function Experience() {
  const sectionRef = useReveal<HTMLElement>();

  const experiences = [
    {
      role: "AI-Driven MERN Stack Bootcamp Trainee",
      organization: "Lovely Professional University",
      period: "Jun 2026 – Jul 2026",
      location: "Phagwara, Punjab",
      grade: "Grade A Milestone",
      bullets: [
        "Completed an intensive Full-Stack Development & DevOps training program covering modern React.js, Node.js, Express.js, and MongoDB.",
        "Architected a production-ready Blood Donation Management Platform integrating JWT authentication, role-based access control, and RESTful API endpoints.",
        "Enabled seamless coordination between donors, hospitals, and blood banks via real-time inventory tracking and urgent donor notifications.",
      ],
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs"],
      github: "https://github.com/Ankush-Chopane/Blood-Donation-Management-System",
      certificate: "https://drive.google.com/file/d/1dmkv3KAjUbWTSoEyLpqcKwplXDaZE5GW/view?usp=sharing",
    },
    {
      role: "Cyber Security Awareness Trainer",
      organization: "WNS Cares Foundation & LPU",
      period: "Jun 2025 – Jul 2025",
      location: "Community Outreach / Hybrid",
      grade: "Community Impact Milestone",
      bullets: [
        "Completed WNS CyberSmart specialized training encompassing social media safety, phishing countermeasures, cyberbullying prevention, and financial security.",
        "Created simplified training modules and demonstrations covering two-factor authentication, suspicious link verification, and privacy hygiene.",
        "Strengthened digital safety practices for over 40+ community participants through interactive workshops and hands-on guidance.",
      ],
      stack: ["Cyber Safety", "Public Speaking", "Phishing Prevention", "Community Leadership"],
      github: null,
      certificate: "https://drive.google.com/file/d/1QEHnhJ2Opqczq7dlehZMMVV5TdfjZDPd/view?usp=sharing",
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-28 bg-[#0a0e17] border-t border-white/[0.07]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="reveal flex items-center justify-between gap-4 mb-3" style={{ transitionDelay: "0ms" }}>
            <p className="text-[11px] uppercase tracking-[0.2em] text-amber-400 font-semibold">
              Career Milestones
            </p>
            <span className="font-mono text-[11px] text-white/30 hidden sm:inline tracking-wider">
              SEC://03.EXPERIENCE
            </span>
          </div>
          <h2
            className="reveal-left font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight"
            style={{ transitionDelay: "60ms" }}
          >
            Experience &amp;{" "}
            <span className="italic font-light text-amber-300/80">Technical Training</span>
          </h2>
          <p
            className="reveal text-gray-400 mt-3 text-sm sm:text-base font-light leading-relaxed"
            style={{ transitionDelay: "120ms" }}
          >
            Structured development bootcamps, production architecture milestones, and community leadership initiatives.
          </p>
        </div>

        {/* Timeline Presentation */}
        <div className="relative border-l border-white/[0.1] ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="reveal relative group"
              style={{ transitionDelay: `${180 + index * 100}ms` }}
            >
              {/* Timeline Bullet Node with animated pulse / scaling */}
              <div
                aria-hidden="true"
                className="timeline-dot absolute -left-[31px] sm:-left-[47px] top-2 w-3.5 h-3.5 rounded-full bg-[#0a0e17] border-2 border-amber-400 group-hover:bg-amber-400"
              />

              <div className="hover-lift p-6 sm:p-8 rounded-2xl bg-[#0f1523] border border-white/[0.08] group-hover:border-amber-500/35 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-3 border-b border-white/[0.06]">
                  <div>
                    <h3 className="font-serif text-2xl text-white font-medium group-hover:text-amber-200 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-amber-400/90 mt-0.5">
                      {exp.organization}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 text-xs text-gray-400">
                    <span className="flex items-center gap-1 font-mono">
                      <FaCalendarAlt className="text-amber-400/70" />
                      {exp.period}
                    </span>
                    <span className="text-white/20">•</span>
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-gray-400" />
                      {exp.location}
                    </span>
                    <span className="text-white/20">•</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 font-medium">
                      <FaAward className="text-[10px]" />
                      {exp.grade}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-gray-300 font-light leading-relaxed">
                  {exp.bullets.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 mt-2 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.04] text-gray-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {exp.certificate && (
                      <a
                        href={exp.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-amber-400/10 hover:bg-amber-400 text-amber-300 hover:text-gray-950 border border-amber-500/30 hover:border-amber-400 font-medium text-xs transition-all duration-150 shadow-sm"
                      >
                        <FaCertificate className="w-3 h-3" />
                        <span>View Certificate</span>
                        <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                    )}
                    {exp.github && (
                      <a
                        href={exp.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 hover:text-amber-200 transition-colors"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                        <span>View Repository</span>
                        <span className="arrow-slide">→</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
