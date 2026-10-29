"use client";

import { useEffect, useRef, RefObject } from "react";

/**
 * Universal scroll reveal hook using IntersectionObserver.
 * Observes elements with `.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-scale` inside the container.
 * When in view, adds the `.visible` class and unobserves to maintain high performance.
 */
export function useReveal<T extends HTMLElement = HTMLElement>(): RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // In case the user prefers reduced motion, immediately make all reveal elements visible
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const targets = el.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right, .reveal-scale");
      targets.forEach((t) => t.classList.add("visible"));
      return;
    }

    const targets = el.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    targets.forEach((t) => observer.observe(t));

    return () => {
      observer.disconnect();
    };
  }, []);

  return ref;
}
