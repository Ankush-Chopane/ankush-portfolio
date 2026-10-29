"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#070b12] border-t border-white/[0.08] py-14 text-gray-400 text-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          <div className="text-center md:text-left">
            <Link href="#home" className="font-serif text-xl font-medium text-white tracking-tight hover:text-amber-300 transition-colors">
              Ankush Chopane
            </Link>
            <p className="text-xs text-gray-400 mt-1 font-light">
              Full-Stack Software Engineer · Computer Science Undergrad @ LPU
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-amber-300 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2.5">
            <a
              href="https://github.com/Ankush-Chopane"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-white/[0.03] hover:text-white hover:bg-white/[0.08] border border-white/[0.06] transition-colors"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/ankush-chopane/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-white/[0.03] hover:text-white hover:bg-white/[0.08] border border-white/[0.06] transition-colors"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:ankushchopane5757@gmail.com"
              aria-label="Email Ankush"
              className="p-2 rounded-lg bg-white/[0.03] hover:text-white hover:bg-white/[0.08] border border-white/[0.06] transition-colors"
            >
              <FaEnvelope className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2">
          <p suppressHydrationWarning>© {new Date().getFullYear()} Ankush Chopane. All rights reserved.</p>
          <p className="flex items-center gap-1 font-light">
            Designed &amp; Engineered with Next.js, React 19 &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

