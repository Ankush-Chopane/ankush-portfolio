"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaCode,
  FaMedal,
  FaAward,
  FaCertificate,
  FaExternalLinkAlt,
  FaTimes,
  FaDownload,
  FaCheckCircle,
} from "react-icons/fa";
import { useReveal } from "@/hooks/useReveal";

interface AchievementItem {
  title: string;
  description: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  highlight: string;
  link?: string;
  linkText?: string;
  hasCertificate?: boolean;
}

export default function Achievements() {
  const sectionRef = useReveal<HTMLElement>();
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [activeCertPage, setActiveCertPage] = useState<1 | 2>(1);

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    if (isCertModalOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsCertModalOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isCertModalOpen]);

  const achievements: AchievementItem[] = [
    {
      title: "100+ Problems Solved on LeetCode",
      description:
        "Actively practicing and strengthening data structures, algorithms fundamentals, asymptotic optimization, and analytical problem-solving.",
      tag: "Competitive Coding",
      icon: FaCode,
      highlight: "100+ Solved",
      link: "https://leetcode.com/u/ankush_chopane/",
      linkText: "View Profile",
    },
    {
      title: "4th Position — ONE INDIA 2025",
      description:
        "Secured 4th position representing Maharashtra in 'Rang De Bharat Celebrating Patriotism Through Art and Culture' among competitive multi-state delegations at Lovely Professional University.",
      tag: "State Representation",
      icon: FaMedal,
      highlight: "Finalist",
      hasCertificate: true,
    },
  ];

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="py-28 bg-[#0a0e17] border-t border-white/[0.07]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div
            className="reveal flex items-center justify-between gap-4 mb-3"
            style={{ transitionDelay: "0ms" }}
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-amber-400 font-semibold">
              Honors &amp; Recognition
            </p>
            <span className="font-mono text-[11px] text-white/30 hidden sm:inline tracking-wider">
              SEC://07.HONORS
            </span>
          </div>
          <h2
            className="reveal-left font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight"
            style={{ transitionDelay: "60ms" }}
          >
            Key Achievements
          </h2>
          <p
            className="reveal text-gray-400 mt-3 text-sm sm:text-base font-light leading-relaxed"
            style={{ transitionDelay: "120ms" }}
          >
            Competitive milestones, state-level conclave victories, and algorithmic problem-solving track record.
          </p>
        </div>

        {/* 2-Column Responsive Milestone Cards */}
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="reveal hover-lift group p-6 sm:p-7 rounded-2xl bg-[#0f1523] border border-white/[0.08] hover:border-amber-500/40 flex flex-col justify-between transition-all duration-300"
                style={{ transitionDelay: `${180 + idx * 90}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 group-hover:scale-105 group-hover:bg-amber-400 group-hover:text-gray-950 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-white font-medium group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="text-gray-400 font-medium">{item.tag}</span>
                  {item.hasCertificate ? (
                    <button
                      type="button"
                      onClick={() => setIsCertModalOpen(true)}
                      className="text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1.5 transition-colors cursor-pointer group/btn"
                    >
                      <FaCertificate className="text-[11px]" />
                      <span>View Certificate</span>
                      <FaExternalLinkAlt className="text-[9px] group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  ) : item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>{item.linkText || "View Milestone"}</span>
                      <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  ) : (
                    <span className="text-amber-400/80 font-medium inline-flex items-center gap-1">
                      <span>Verified milestone</span>
                      <span className="arrow-slide">→</span>
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── ONE INDIA Certificate Preview Modal ── */}
      {isCertModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsCertModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="one-india-modal-title"
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c121e] border border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#0f1726]/90">
              <div className="flex items-center gap-3 pr-4 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-amber-400/15 flex items-center justify-center text-amber-400 shrink-0 border border-amber-400/30">
                  <FaAward className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h3
                    id="one-india-modal-title"
                    className="text-base sm:text-lg font-medium text-white truncate"
                  >
                    ONE INDIA 2025 — Certificate of Merit
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mt-0.5">
                    <span className="text-amber-300 font-medium">Lovely Professional University</span>
                    <span>•</span>
                    <span>Student Welfare Wing</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="hidden sm:inline-flex items-center gap-1 text-emerald-400 font-medium">
                      <FaCheckCircle className="w-3 h-3" />
                      4th Position (Team Maharashtra)
                    </span>
                  </div>
                </div>
              </div>

              {/* Action buttons & Close */}
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="/certificates/one-india-2025-certificate.pdf"
                  download="Ankush-Chopane-One-India-Certificate.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400 text-gray-950 hover:bg-amber-300 font-semibold text-xs transition-all shadow-sm shadow-amber-500/20"
                  title="Download Certificate PDF"
                >
                  <FaDownload className="w-3 h-3" />
                  <span className="hidden sm:inline">Download PDF</span>
                </a>
                <a
                  href="/certificates/one-india-2025-certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-gray-200 border border-white/10 text-xs font-medium transition-all"
                  title="Open PDF in new tab"
                >
                  <FaExternalLinkAlt className="w-3 h-3 text-amber-400" />
                  <span className="hidden sm:inline">Full PDF</span>
                </a>
                <button
                  type="button"
                  onClick={() => setIsCertModalOpen(false)}
                  aria-label="Close modal"
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors ml-1 cursor-pointer"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Sub-header with Page Selection Tabs */}
            <div className="flex items-center justify-between px-5 py-2.5 bg-[#090e18] border-b border-white/[0.06] text-xs">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveCertPage(1)}
                  className={`px-3 py-1 rounded-md font-medium transition-all cursor-pointer ${
                    activeCertPage === 1
                      ? "bg-amber-400 text-gray-950 shadow-sm shadow-amber-500/20 font-semibold"
                      : "bg-white/[0.05] text-gray-400 hover:text-white hover:bg-white/[0.09]"
                  }`}
                >
                  Page 1: Certificate of Merit (4th Place)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCertPage(2)}
                  className={`px-3 py-1 rounded-md font-medium transition-all cursor-pointer ${
                    activeCertPage === 2
                      ? "bg-amber-400 text-gray-950 shadow-sm shadow-amber-500/20 font-semibold"
                      : "bg-white/[0.05] text-gray-400 hover:text-white hover:bg-white/[0.09]"
                  }`}
                >
                  Page 2: Certificate of Participation
                </button>
              </div>
              <span className="font-mono text-[11px] text-gray-400 hidden md:inline">
                Cert No. {activeCertPage === 1 ? "385526" : "381308"} • NAAC A++
              </span>
            </div>

            {/* Modal Body: High Resolution Certificate Display */}
            <div className="relative flex-1 bg-[#060910] min-h-[480px] sm:min-h-[580px] overflow-y-auto p-4 sm:p-6 flex items-center justify-center">
              <div className="relative max-w-2xl w-full rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white">
                <Image
                  src={
                    activeCertPage === 1
                      ? "/certificates/one-india-2025-page-1.jpg"
                      : "/certificates/one-india-2025-page-2.jpg"
                  }
                  alt={
                    activeCertPage === 1
                      ? "ONE INDIA 2025 Certificate of Merit — Ankush Ramkisan Chopane"
                      : "ONE INDIA 2025 Certificate of Participation — Ankush Ramkisan Chopane"
                  }
                  width={1488}
                  height={2105}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-2.5 bg-[#0a0e17] border-t border-white/[0.06] flex items-center justify-between text-[11px] text-gray-400 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                OFFICIAL CREDENTIAL • DIVISION OF ARTS AND CULTURE, STUDENT WELFARE WING
              </span>
              <span className="text-gray-400 hidden sm:inline">
                Registration No: 12413449 • School of Computer Science &amp; Engineering
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
