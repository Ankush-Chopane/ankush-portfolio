"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaFileAlt, FaTimes, FaBars } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

/* ─── Nav links ────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "About",    href: "#about"          },
  { label: "Projects", href: "#projects"       },
  { label: "Experience", href: "#experience"   },
  { label: "Skills",   href: "#skills"         },
  { label: "Education",href: "#education"      },
  { label: "Certs",    href: "#certifications" },
  { label: "Honors",   href: "#achievements"   },
];

/* ─── Component ────────────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [progress,   setProgress]   = useState(0);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [active,     setActive]     = useState("home");

  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  /* ── Scroll: progress bar + background transition ── */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const maxY = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 20);
      setProgress(maxY > 0 ? (y / maxY) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Active section via IntersectionObserver ── */
  useEffect(() => {
    const ids = ["home", "about", "projects", "experience", "skills", "education", "certifications", "achievements", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  /* ── Close menu on Escape key ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  /* ── Close menu on outside click ── */
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !toggleRef.current?.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [menuOpen]);

  /* ── Prevent body scroll when menu open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ── Scroll progress bar ─────────────────────────────── */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[2px] z-[70] pointer-events-none"
      >
        <div
          className="h-full origin-left bg-gradient-to-r from-amber-400 via-amber-300 to-sky-400 transition-all duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ── Main navbar ─────────────────────────────────────── */}
      <header
        role="banner"
        className={[
          "fixed top-0 left-0 right-0 z-50",
          "transition-all duration-300 ease-in-out",
          scrolled
            ? "bg-[#0a0e17]/90 backdrop-blur-xl border-b border-white/[0.07] shadow-[0_1px_24px_rgba(0,0,0,0.45)] py-3"
            : "bg-transparent border-b border-transparent py-4",
        ].join(" ")}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

          {/* ── Logo ── */}
          <Link
            href="#home"
            aria-label="Back to top"
            className="flex items-center gap-2.5 group shrink-0"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-amber-500/30 group-hover:border-amber-400/70 transition-colors duration-200 shrink-0">
              <Image
                src="/profile3.jpg"
                alt="Ankush Chopane"
                width={32}
                height={32}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-[15px] font-medium text-white group-hover:text-amber-300 transition-colors duration-200 tracking-tight">
                Ankush Chopane
              </span>
              <span className="text-[10px] text-gray-500 font-sans tracking-wide hidden sm:block">
                Full-Stack Developer
              </span>
            </div>
          </Link>

          {/* ── Desktop links ── */}
          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace("#", "");
              const isActive = active === id;
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "relative px-3 py-1.5 rounded-md text-[13px] font-medium transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400 focus-visible:outline-offset-1",
                    isActive
                      ? "text-amber-300"
                      : "text-gray-400 hover:text-white hover:bg-white/[0.05]",
                  ].join(" ")}
                >
                  {label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0.5 left-3 right-3 h-[1.5px] rounded-full bg-amber-400"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ── Desktop actions ── */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <a
              href="https://github.com/Ankush-Chopane"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/[0.06] transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400 focus-visible:outline-offset-1"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/ankush-chopane/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/[0.06] transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400 focus-visible:outline-offset-1"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://leetcode.com/u/ankush_chopane/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode profile"
              title="LeetCode — 100+ problems solved"
              className="p-2 rounded-md text-gray-400 hover:text-amber-400 hover:bg-amber-400/10 transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400 focus-visible:outline-offset-1"
            >
              <SiLeetcode className="w-4 h-4" />
            </a>

            <div aria-hidden="true" className="w-px h-4 bg-white/10 mx-1" />

            <a
              href="/assets/Ankush_Chopane_Resume.pdf"
              download="Ankush_Chopane_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download résumé PDF"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-[13px] font-semibold text-amber-300 border border-amber-500/35 hover:bg-amber-400/10 hover:border-amber-400/60 transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400 focus-visible:outline-offset-1"
            >
              <FaFileAlt className="w-3 h-3" />
              Résumé
            </a>

            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-[13px] font-semibold bg-amber-400 text-gray-950 hover:bg-amber-300 transition-all duration-150 shadow-sm shadow-amber-500/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400 focus-visible:outline-offset-1"
            >
              Contact
            </Link>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/[0.06] transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400 focus-visible:outline-offset-1"
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <span
              aria-hidden="true"
              className="block transition-all duration-200"
              style={{ transform: menuOpen ? "rotate(90deg)" : "rotate(0deg)" }}
            >
              {menuOpen
                ? <FaTimes className="w-5 h-5" />
                : <FaBars  className="w-5 h-5" />
              }
            </span>
          </button>
        </div>
      </header>

      {/* ── Mobile menu overlay ──────────────────────────────── */}
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={closeMenu}
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden transition-opacity duration-300"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      />

      {/* Drawer */}
      <div
        id="mobile-nav"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className="fixed top-0 right-0 bottom-0 z-50 w-72 max-w-[85vw] bg-[#0c1220] border-l border-white/[0.08] shadow-2xl lg:hidden flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: menuOpen ? "translateX(0)" : "translateX(100%)" }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.07]">
          <div className="flex items-center gap-2.5">
            <div className="relative w-7 h-7 rounded-full overflow-hidden border border-amber-500/30 shrink-0">
              <Image
                src="/profile3.jpg"
                alt="Ankush Chopane"
                width={28}
                height={28}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="font-serif text-sm font-medium text-white">
              Ankush Chopane
            </span>
          </div>
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className="p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-white/[0.08] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400"
          >
            <FaTimes className="w-4 h-4" />
          </button>
        </div>

        {/* Nav links */}
        <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-0.5" role="list">
            {[...NAV_LINKS, { label: "Contact", href: "#contact" }].map(
              ({ label, href }, i) => {
                const id = href.replace("#", "");
                const isActive = active === id;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={closeMenu}
                      aria-current={isActive ? "page" : undefined}
                      className={[
                        "flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400",
                        isActive
                          ? "text-amber-300 bg-amber-400/10"
                          : "text-gray-300 hover:text-white hover:bg-white/[0.05]",
                      ].join(" ")}
                      style={{
                        transitionDelay: menuOpen ? `${i * 30}ms` : "0ms",
                      }}
                    >
                      <span>{label}</span>
                      {isActive && (
                        <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      )}
                    </Link>
                  </li>
                );
              }
            )}
          </ul>
        </nav>

        {/* Drawer footer — actions */}
        <div className="px-4 pb-6 pt-3 border-t border-white/[0.07] space-y-2.5">
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Ankush-Chopane"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-white/[0.1] text-gray-300 hover:text-white hover:bg-white/[0.06] text-sm font-medium transition-all"
            >
              <FaGithub className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ankush-chopane/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-white/[0.1] text-gray-300 hover:text-white hover:bg-white/[0.06] text-sm font-medium transition-all"
            >
              <FaLinkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
          <a
            href="/assets/Ankush_Chopane_Resume.pdf"
            download="Ankush_Chopane_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 py-2.5 rounded-lg border border-amber-500/35 text-amber-300 hover:bg-amber-400/10 text-sm font-semibold transition-all"
          >
            <FaFileAlt className="w-3.5 h-3.5" />
            Download Résumé
          </a>
        </div>
      </div>
    </>
  );
}
