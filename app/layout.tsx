import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-ibm-plex-sans",
});

export const viewport: Viewport = {
  themeColor: "#0a0e17",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://ankush-chopane.vercel.app"),
  title: {
    default: "Ankush Chopane — Full-Stack Developer & Software Engineer",
    template: "%s | Ankush Chopane",
  },
  description:
    "Ankush Chopane is a Full-Stack Software Developer specializing in React, Next.js, Node.js, Express, and MongoDB. Engineering modern, scalable web applications with clean architecture and AI integrations.",
  keywords: [
    "Ankush Chopane",
    "Full-Stack Developer",
    "Software Engineer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js",
    "MongoDB",
    "LPU",
    "AI Web Applications",
    "Frontend Engineer",
    "Backend Engineer",
  ],
  authors: [{ name: "Ankush Chopane", url: "https://github.com/Ankush-Chopane" }],
  creator: "Ankush Chopane",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Ankush Chopane — Full-Stack Developer & Software Engineer",
    description:
      "Full-stack software engineer crafting responsive, high-performance web products with MERN stack, Next.js, and practical AI integrations. 100+ LeetCode DSA solved.",
    url: "https://ankush-chopane.vercel.app",
    siteName: "Ankush Chopane Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankush Chopane — Full-Stack Developer",
    description: "Full-stack software engineer crafting modern web applications with MERN, Next.js, and AI integrations.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ankush Chopane",
  url: "https://ankush-chopane.vercel.app",
  jobTitle: "Full-Stack Developer",
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Lovely Professional University",
  },
  knowsAbout: [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "Full-Stack Development",
    "Data Structures and Algorithms",
    "REST APIs",
  ],
  sameAs: [
    "https://github.com/Ankush-Chopane",
    "https://www.linkedin.com/in/ankush-chopane/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`h-full scroll-smooth ${fraunces.variable} ${ibmPlexSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-[#0a0e17] text-[#e2e8f0] font-sans antialiased selection:bg-amber-500/20 selection:text-amber-200"
        suppressHydrationWarning
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 w-full pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
