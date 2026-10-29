"use client";

import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaCopy, FaCheck } from "react-icons/fa";
import { useReveal } from "@/hooks/useReveal";

export default function Contact() {
  const sectionRef = useReveal<HTMLElement>();
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ankushchopane5757@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
  };

  const contactMethods = [
    {
      label: "Email Address",
      value: "ankushchopane5757@gmail.com",
      href: "mailto:ankushchopane5757@gmail.com",
      icon: FaEnvelope,
      action: "Send Email",
    },
    {
      label: "Direct Phone",
      value: "+91 93095 38757",
      href: "tel:+919309538757",
      icon: FaPhone,
      action: "Call",
    },
    {
      label: "LinkedIn Profile",
      value: "in/ankush-chopane",
      href: "https://www.linkedin.com/in/ankush-chopane/",
      icon: FaLinkedin,
      action: "Connect",
    },
    {
      label: "GitHub Repositories",
      value: "Ankush-Chopane",
      href: "https://github.com/Ankush-Chopane",
      icon: FaGithub,
      action: "Follow",
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-28 bg-[#0a0e17] border-t border-white/[0.07]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="reveal flex items-center justify-between gap-4 mb-3" style={{ transitionDelay: "0ms" }}>
            <p className="text-[11px] uppercase tracking-[0.2em] text-amber-400 font-semibold">
              Get In Touch
            </p>
            <span className="font-mono text-[11px] text-white/30 hidden sm:inline tracking-wider">
              SEC://08.CONTACT
            </span>
          </div>
          <h2
            className="reveal-left font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight"
            style={{ transitionDelay: "60ms" }}
          >
            Let&apos;s Build{" "}
            <span className="italic font-light text-amber-300/80">Together.</span>
          </h2>
          <p
            className="reveal text-gray-400 mt-3 text-sm sm:text-base font-light leading-relaxed"
            style={{ transitionDelay: "120ms" }}
          >
            Open to software engineering internships, junior developer roles, and impactful technical collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Direct channels */}
          <div className="lg:col-span-5 space-y-4">
            <h3
              className="reveal font-serif text-xl text-white font-medium mb-1"
              style={{ transitionDelay: "160ms" }}
            >
              Direct Channels
            </h3>
            <p
              className="reveal text-xs sm:text-sm text-gray-400 font-light leading-relaxed mb-4"
              style={{ transitionDelay: "200ms" }}
            >
              Direct communication is preferred. Reach out via email, LinkedIn, or phone for rapid inquiries.
            </p>

            <div className="space-y-3">
              {contactMethods.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div
                    key={i}
                    className="reveal hover-lift p-4 rounded-xl bg-[#0f1523] border border-white/[0.08] hover:border-amber-500/35 flex items-center justify-between gap-3 group"
                    style={{ transitionDelay: `${240 + i * 60}ms` }}
                  >
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3.5 flex-1 min-w-0"
                    >
                      <div className="w-9 h-9 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-400 shrink-0 border border-amber-400/20 group-hover:bg-amber-400/20 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-[11px] text-gray-400 uppercase tracking-wider">{c.label}</span>
                        <span className="text-sm font-medium text-white group-hover:text-amber-200 transition-colors truncate block">
                          {c.value}
                        </span>
                      </div>
                    </a>

                    {c.label === "Email Address" && (
                      <button
                        onClick={handleCopyEmail}
                        className="p-2 rounded-md hover:bg-white/[0.08] text-gray-400 hover:text-white transition-colors"
                        title="Copy email address"
                        aria-label="Copy email address"
                      >
                        {copied ? <FaCheck className="w-3.5 h-3.5 text-emerald-400" /> : <FaCopy className="w-3.5 h-3.5" />}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Minimalist Message Form */}
          <div className="lg:col-span-7">
            <div
              className="reveal p-7 sm:p-8 rounded-2xl bg-[#0f1523] border border-white/[0.08] space-y-6"
              style={{ transitionDelay: "220ms" }}
            >
              <div>
                <h3 className="font-serif text-xl text-white font-medium">Send a Direct Inquiry</h3>
                <p className="text-xs sm:text-sm text-gray-400 font-light mt-1">
                  Have an open role or project idea? Drop a note below.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-amber-400/10 border border-amber-400/20 text-center space-y-3">
                  <FaCheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="font-serif text-lg font-medium text-white">Thank you for reaching out</h4>
                  <p className="text-xs sm:text-sm text-gray-300 font-light max-w-md mx-auto">
                    Your inquiry has been noted. You can also reach Ankush directly at{" "}
                    <a href="mailto:ankushchopane5757@gmail.com" className="text-amber-300 underline">
                      ankushchopane5757@gmail.com
                    </a>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: "", email: "", message: "" });
                    }}
                    className="mt-3 px-4 py-2 rounded-md bg-white/[0.06] text-xs font-semibold hover:bg-white/[0.12] text-white transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Lin"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#0a0e17] border border-white/[0.1] text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#0a0e17] border border-white/[0.1] text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about the opportunity, timeline, or engineering challenge..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#0a0e17] border border-white/[0.1] text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-gray-950 font-semibold text-sm transition-all hover:scale-[1.01] active:scale-[0.99] shadow-sm"
                  >
                    <FaPaperPlane className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
