"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaCertificate,
  FaAward,
  FaEye,
  FaExternalLinkAlt,
  FaTimes,
  FaDownload,
  FaCheckCircle,
  FaIdCard,
} from "react-icons/fa";
import { useReveal } from "@/hooks/useReveal";

interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  category: string;
  credentialId?: string;
  driveId?: string;
  fileUrl?: string;
  imageSrc?: string;
}

export default function Certifications() {
  const sectionRef = useReveal<HTMLElement>();
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [iframeLoading, setIframeLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const certs: CertificateItem[] = [
    {
      title: "Oracle AI Database Certified Foundations Associate",
      issuer: "Oracle University",
      date: "Aug 2026",
      category: "Cloud & Database",
      credentialId: "103524369OCI26DCFA",
      imageSrc: "/certificates/oracle-ai-database-foundations.jpg",
    },
    {
      title: "Data Structure and Algorithm",
      issuer: "iamneo (NIIT) & LPU",
      date: "Jun 2026",
      category: "Programming & DSA",
      credentialId: "29Cm2028d77aN4dO7BP1",
      imageSrc: "/certificates/iamneo-data-structures-algorithms.jpg",
    },
    {
      title: "Object Oriented Programming",
      issuer: "iamneo (NIIT) & LPU",
      date: "Jun 2026",
      category: "Programming & DSA",
      credentialId: "24DL3dM7Dj3Dk3dI7Bm1",
      imageSrc: "/certificates/iamneo-object-oriented-programming.jpg",
    },
    {
      title: "Programming in JAVA",
      issuer: "iamneo (NIIT) & LPU",
      date: "May 2026",
      category: "Programming & DSA",
      credentialId: "25bM50j8Dk3bl5Dm3B21",
      imageSrc: "/certificates/iamneo-java-programming.jpg",
    },
    {
      title: "Database Management System Certificate",
      issuer: "Infosys",
      date: "Aug 2026",
      category: "Cloud & Database",
      driveId: "10faC_KbIZOnx-_uhGvha2Cc1H7sRQvHI",
      fileUrl: "https://drive.google.com/file/d/10faC_KbIZOnx-_uhGvha2Cc1H7sRQvHI/view?usp=sharing",
    },
    {
      title: "AI-Driven MERN Stack Bootcamp Certificate",
      issuer: "Lovely Professional University",
      date: "Jul 2026",
      category: "Full-Stack & Web",
      driveId: "1dmkv3KAjUbWTSoEyLpqcKwplXDaZE5GW",
      fileUrl: "https://drive.google.com/file/d/1dmkv3KAjUbWTSoEyLpqcKwplXDaZE5GW/view?usp=sharing",
    },
    {
      title: "Generative AI Certificate",
      issuer: "NASSCOM – SFJ",
      date: "Feb 2026",
      category: "Artificial Intelligence",
      driveId: "17Io7YLKEaJ7ePvUjNDb0MUVa9MH5VDfs",
      fileUrl: "https://drive.google.com/file/d/17Io7YLKEaJ7ePvUjNDb0MUVa9MH5VDfs/view?usp=sharing",
    },
    {
      title: "C++ Programming Certificate",
      issuer: "Infosys",
      date: "Aug 2025",
      category: "Programming & DSA",
      driveId: "1M_yTLuCAKusohbUKOAAxMP2NS5pl5bBr",
      fileUrl: "https://drive.google.com/file/d/1M_yTLuCAKusohbUKOAAxMP2NS5pl5bBr/view?usp=sharing",
    },
    {
      title: "Computer Programming (72 Hours Course)",
      issuer: "iamneo & LPU",
      date: "May 2025",
      category: "Computer Fundamentals",
      credentialId: "255M9aj4dk7al4Am0B21",
      imageSrc: "/certificates/iamneo-computer-programming.jpg",
    },
    {
      title: "Cyber Security Awareness Certificate",
      issuer: "WNS Cares Foundation & LPU",
      date: "Jul 2025",
      category: "Cyber Security",
      driveId: "1QEHnhJ2Opqczq7dlehZMMVV5TdfjZDPd",
      fileUrl: "https://drive.google.com/file/d/1QEHnhJ2Opqczq7dlehZMMVV5TdfjZDPd/view?usp=sharing",
    },
    {
      title: "React.js Certificate",
      issuer: "Tech Veda",
      date: "Mar 2025",
      category: "Full-Stack & Web",
      driveId: "1CcMqpDTEroTbXbYnaYXhJPBg7VcjXlv1",
      fileUrl: "https://drive.google.com/file/d/1CcMqpDTEroTbXbYnaYXhJPBg7VcjXlv1/view?usp=sharing",
    },
    {
      title: "C Programming Certificate",
      issuer: "Coding Tantra",
      date: "Jan 2025",
      category: "Computer Fundamentals",
      driveId: "1CIoI9UOSAerNLkPGg3_PrX-bXmnmv6T2",
      fileUrl: "https://drive.google.com/file/d/1CIoI9UOSAerNLkPGg3_PrX-bXmnmv6T2/view?usp=sharing",
    },
    {
      title: "Effective Communication Skills Course",
      issuer: "Skillera",
      date: "Oct 2024",
      category: "Professional Skills",
      driveId: "1xgyHGHQvC87r8xsDwyFsv2fqL0F6PtHY",
      fileUrl: "https://drive.google.com/file/d/1xgyHGHQvC87r8xsDwyFsv2fqL0F6PtHY/view?usp=sharing",
    },
    {
      title: "Cyber Security & Ethical Hacking",
      issuer: "Secuneus Technologies",
      date: "Sep 2024",
      category: "Cyber Security",
      credentialId: "STPL/WC/2311658",
      imageSrc: "/certificates/secuneus-cyber-security-ethical-hacking.jpg",
    },
  ];

  const categories = [
    "All",
    "Programming & DSA",
    "Cloud & Database",
    "Full-Stack & Web",
    "Artificial Intelligence",
    "Computer Fundamentals",
    "Cyber Security",
    "Professional Skills",
  ];

  const filteredCerts =
    selectedCategory === "All"
      ? certs
      : certs.filter((c) => c.category === selectedCategory);

  // Lock body scroll and handle Escape key when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
      setIframeLoading(true);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setSelectedCert(null);
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
  }, [selectedCert]);

  const handleOpenModal = (cert: CertificateItem) => {
    setSelectedCert(cert);
  };

  const handleCloseModal = () => {
    setSelectedCert(null);
  };

  return (
    <section id="certifications" ref={sectionRef} className="py-28 bg-[#0a0e17] border-t border-white/[0.07]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <div className="reveal flex items-center justify-between gap-4 mb-3" style={{ transitionDelay: "0ms" }}>
            <p className="text-[11px] uppercase tracking-[0.2em] text-amber-400 font-semibold">
              Continuous Learning
            </p>
            <span className="font-mono text-[11px] text-white/30 hidden sm:inline tracking-wider">
              SEC://06.CERTIFICATIONS
            </span>
          </div>
          <h2
            className="reveal-left font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight"
            style={{ transitionDelay: "60ms" }}
          >
            <span className="italic font-light text-amber-300/80">Certifications</span>
          </h2>
          <p
            className="reveal text-gray-400 mt-3 text-sm sm:text-base font-light leading-relaxed"
            style={{ transitionDelay: "120ms" }}
          >
            Verified credentials and coursework across software engineering, cloud, database systems, AI, and algorithms. Click any certificate to preview or download.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="reveal flex flex-wrap gap-2 mb-8" style={{ transitionDelay: "150ms" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-amber-400 text-gray-950 font-semibold shadow-md shadow-amber-400/20 scale-105"
                  : "bg-white/[0.04] text-gray-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
              }`}
            >
              {cat}
              {cat === "All" ? ` (${certs.length})` : ` (${certs.filter((c) => c.category === cat).length})`}
            </button>
          ))}
        </div>

        {/* Compact Editorial List with interactive view triggers */}
        <div className="divide-y divide-white/[0.06] border-y border-white/[0.08]">
          {filteredCerts.map((c, i) => (
            <div
              key={c.title + i}
              onClick={() => handleOpenModal(c)}
              className="reveal py-4 px-2 sm:px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-white/[0.04] transition-all duration-150 group cursor-pointer rounded-lg my-0.5"
              style={{ transitionDelay: `${150 + i * 35}ms` }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleOpenModal(c);
                }
              }}
              aria-label={`View certificate for ${c.title}`}
            >
              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-md bg-amber-400/10 flex items-center justify-center text-amber-400 shrink-0 border border-amber-400/20 group-hover:bg-amber-400/20 group-hover:scale-105 transition-all">
                  <FaCertificate className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-sm sm:text-base font-medium text-white group-hover:text-amber-200 transition-colors">
                      {c.title}
                    </h3>
                    {c.credentialId && (
                      <span className="hidden md:inline-flex items-center gap-1 font-mono text-[10px] text-amber-300/70 bg-amber-400/5 px-2 py-0.5 rounded border border-amber-400/15">
                        <FaIdCard className="text-[9px]" />
                        ID: {c.credentialId}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-0.5 sm:hidden">
                    <span className="text-xs text-amber-400/90 font-medium">
                      {c.issuer}
                    </span>
                    <span className="text-white/20">•</span>
                    <span className="text-xs text-gray-400">{c.category}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-5 text-xs text-gray-400 self-end sm:self-auto">
                <span className="hidden sm:inline px-2.5 py-0.5 rounded-full bg-white/[0.04] text-gray-300 border border-white/[0.06] group-hover:border-amber-500/25 transition-colors">
                  {c.category}
                </span>
                <span className="hidden sm:flex items-center gap-1 font-medium text-amber-400/90">
                  <FaAward className="text-[11px]" />
                  {c.issuer}
                </span>
                <span className="font-mono text-gray-500 text-right min-w-[70px]">
                  {c.date}
                </span>

                {/* View Certificate Action Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenModal(c);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-amber-400/10 hover:bg-amber-400 text-amber-300 hover:text-gray-950 border border-amber-500/30 hover:border-amber-400 font-medium text-xs transition-all duration-150 shadow-sm"
                  aria-label={`Preview ${c.title}`}
                >
                  <FaEye className="w-3 h-3" />
                  <span>View</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Certificate Preview Modal ── */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
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
                    id="cert-modal-title"
                    className="text-base sm:text-lg font-medium text-white truncate"
                  >
                    {selectedCert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mt-0.5 flex-wrap">
                    <span className="text-amber-300 font-medium">{selectedCert.issuer}</span>
                    <span>•</span>
                    <span>{selectedCert.date}</span>
                    {selectedCert.credentialId && (
                      <>
                        <span className="hidden sm:inline">•</span>
                        <span className="font-mono text-amber-200/80 hidden sm:inline">
                          Credential ID: {selectedCert.credentialId}
                        </span>
                      </>
                    )}
                    <span className="hidden sm:inline">•</span>
                    <span className="hidden sm:inline-flex items-center gap-1 text-emerald-400">
                      <FaCheckCircle className="w-3 h-3" />
                      Verified
                    </span>
                  </div>
                </div>
              </div>

              {/* Action buttons & Close */}
              <div className="flex items-center gap-2 shrink-0">
                {selectedCert.imageSrc ? (
                  <>
                    <a
                      href={selectedCert.imageSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-gray-200 border border-white/10 text-xs font-medium transition-all"
                      title="Open full resolution certificate"
                    >
                      <FaExternalLinkAlt className="w-3 h-3 text-amber-400" />
                      <span className="hidden sm:inline">Full Image</span>
                    </a>
                    <a
                      href={selectedCert.imageSrc}
                      download
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400 text-gray-950 hover:bg-amber-300 font-semibold text-xs transition-all shadow-sm shadow-amber-500/20"
                      title="Download Certificate"
                    >
                      <FaDownload className="w-3 h-3" />
                      <span className="hidden sm:inline">Download</span>
                    </a>
                  </>
                ) : (
                  <>
                    {selectedCert.fileUrl && (
                      <a
                        href={selectedCert.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-gray-200 border border-white/10 text-xs font-medium transition-all"
                        title="Open full certificate in Google Drive"
                      >
                        <FaExternalLinkAlt className="w-3 h-3 text-amber-400" />
                        <span className="hidden sm:inline">Drive View</span>
                      </a>
                    )}
                    {selectedCert.driveId && (
                      <a
                        href={`https://drive.google.com/uc?export=download&id=${selectedCert.driveId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400 text-gray-950 hover:bg-amber-300 font-semibold text-xs transition-all shadow-sm shadow-amber-500/20"
                        title="Download Certificate File"
                      >
                        <FaDownload className="w-3 h-3" />
                        <span className="hidden sm:inline">Download</span>
                      </a>
                    )}
                  </>
                )}
                <button
                  type="button"
                  onClick={handleCloseModal}
                  aria-label="Close modal"
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors ml-1"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body / Document & Image Viewer */}
            <div className="relative flex-1 bg-[#070a10] min-h-[460px] sm:min-h-[560px] overflow-hidden flex items-center justify-center">
              {selectedCert.imageSrc ? (
                <div className="relative w-full h-[460px] sm:h-[560px] p-4 flex items-center justify-center">
                  <div className="relative w-full h-full max-w-3xl">
                    <Image
                      src={selectedCert.imageSrc}
                      alt={selectedCert.title}
                      fill
                      className="object-contain rounded-lg shadow-2xl"
                      priority
                    />
                  </div>
                </div>
              ) : selectedCert.driveId ? (
                <>
                  {iframeLoading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#070a10] text-gray-400 z-10">
                      <div className="w-9 h-9 border-2 border-amber-400/20 border-t-amber-400 rounded-full animate-spin" />
                      <p className="text-xs font-mono tracking-wider text-gray-400">
                        Loading verified certificate document...
                      </p>
                    </div>
                  )}
                  <iframe
                    src={`https://drive.google.com/file/d/${selectedCert.driveId}/preview`}
                    title={selectedCert.title}
                    className="w-full h-full min-h-[460px] sm:min-h-[560px] border-0"
                    allow="autoplay"
                    onLoad={() => setIframeLoading(false)}
                  />
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                  <FaCertificate className="w-12 h-12 text-amber-400/40 mb-3" />
                  <p className="text-sm text-gray-300">
                    Certificate verification record is active.
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer helper */}
            <div className="px-5 py-2.5 bg-[#0a0e17] border-t border-white/[0.06] flex items-center justify-between text-[11px] text-gray-400 font-mono">
              <span className="flex items-center gap-1.5 truncate pr-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                OFFICIAL CREDENTIAL ISSUED BY {selectedCert.issuer.toUpperCase()}
              </span>
              {selectedCert.imageSrc ? (
                <a
                  href={selectedCert.imageSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline inline-flex items-center gap-1 shrink-0"
                >
                  Open Original Image
                  <FaExternalLinkAlt className="text-[9px]" />
                </a>
              ) : selectedCert.fileUrl ? (
                <a
                  href={selectedCert.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline inline-flex items-center gap-1 shrink-0"
                >
                  Trouble viewing? Open direct link
                  <FaExternalLinkAlt className="text-[9px]" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
