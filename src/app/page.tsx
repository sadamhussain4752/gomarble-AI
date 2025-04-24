import React from "react";
import Header from "../components/Header";

// Brand color palette
const COLORS = {
  background: "#f8f9fa",
  accent: "#007bff",
  text: "#000000",
  card: "#ffffff",
  secondary: "#6c757d",
  darkblue: "#0c3655",
  skyblue: "#1A8DE1",
  border: "#8d8e8e",
};

// Logos discovered
const BRAND_LOGOS = [
  {
    src: "https://ext.same-assets.com/1796335204/3966176097.png",
    alt: "Pinacolada",
  },
  {
    src: "https://ext.same-assets.com/1796335204/2487648592.png",
    alt: "Next Moons",
  },
  {
    src: "https://ext.same-assets.com/1796335204/2342749069.png",
    alt: "Milkymama",
  },
  {
    src: "https://ext.same-assets.com/1796335204/1615208435.png",
    alt: "Long Wharf",
  },
  {
    src: "https://ext.same-assets.com/1796335204/2303959685.png",
    alt: "Harlem Candle Co.",
  },
  {
    src: "https://ext.same-assets.com/1796335204/2102165006.png",
    alt: "Oat Haus",
  },
];

const TESTIMONIALS = [
  {
    name: "Louis Joseph, Founder",
    quote:
      '"GoMarble helped us scale ad spend and outreach while optimizing for ROAS like clockwork!"',
    avatar: "https://ext.same-assets.com/1796335204/3731116193.jpeg",
  },
  {
    name: "Frank Flin",
    quote:
      '"Marble delivers the results. We switched our agency and immediately saw the difference. Our favorite: the AI-powered creative review tool!"',
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const features = [
  {
    title: "One-Click Account Audit",
    desc: "Your dedicated AI Expert will scan your ad account and find opportunities to improve profitability.",
    img: "https://ext.same-assets.com/1796335204/3094497045.svg",
  },
  {
    title: "AI-driven Consumer Research",
    desc: "We ingest all your online assets to generate customer insights, and create targeted high performing marketing concepts.",
    img: "https://ext.same-assets.com/1796335204/2487648592.png",
  },
  {
    title: "Humans + Gen AI for 5x faster creatives",
    desc: "Our strategists and copywriters use GenAI to iterate multiple ad tests and launch at scale.",
    img: "https://ext.same-assets.com/1796335204/2102165006.png",
  },
  {
    title: "Omni-Channel Ads",
    desc: "GoMarble AI Platform enables our experts to run ads on all major marketing channels.",
    img: "https://ext.same-assets.com/1796335204/1615208435.png",
  },
];

export default function Home() {
  return (
    <div
      style={{
        background: COLORS.background,
        minHeight: "100vh",
        color: COLORS.text,
      }}
      aria-label="GoMarble.ai Homepage"
    >
      <Header />
      <main className="pt-16">
        {/* HERO SECTION */}
        <section
          className="flex flex-col items-center justify-center text-center py-14 px-4"
          style={{ background: COLORS.background }}
          aria-labelledby="hero-title"
        >
          <h1
            id="hero-title"
            className="text-3xl md:text-5xl font-bold mb-2"
            style={{ color: COLORS.accent, lineHeight: 1.8 }}
            tabIndex={0}
          >
            Scale profitably with
            <br />
            AI-Assisted Human-led performance marketing
          </h1>
          <p
            className="mb-6 max-w-xl"
            style={{ color: COLORS.text }}
            tabIndex={0}
          >
            Improve your ROAS with targeted, high quality ad campaigns managed by
            expert marketers assisted by GoMarble AI
          </p>
          <button
            className="rounded-full px-6 py-3 text-lg font-semibold shadow-md"
            style={{ background: COLORS.accent, color: COLORS.background }}
            aria-label="Get Started with GoMarble"
          >
            Get Started
          </button>
        </section>

        {/* Rest of the sections remain the same */}
        {/* ... existing code ... */}
      </main>

      {/* FOOTER */}
      <footer
        className="pt-10 pb-4 px-4"
        style={{ background: COLORS.background }}
        role="contentinfo"
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-center max-w-5xl mx-auto mb-7">
          <div className="flex items-center mb-5 md:mb-0">
            <img
              src="https://ext.same-assets.com/1796335204/3966176097.png"
              alt="GoMarble Logo Footer"
              className="h-7 w-7 mr-2"
            />
            <span className="text-lg font-bold" tabIndex={0}>
              GoMarble
            </span>
          </div>
          <nav
            className="flex flex-wrap gap-5 text-sm text-[#000000] opacity-90"
            aria-label="Footer navigation"
          >
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              Blog
            </a>
            <a href="#" className="hover:underline">
              Instagram
            </a>
            <a href="#" className="hover:underline">
              YouTube
            </a>
            <a href="#" className="hover:underline">
              LinkedIn
            </a>
            <span className="mx-2" aria-hidden="true">
              |
            </span>
            <span className="opacity-70" tabIndex={0}>
              Free Tools:
            </span>
            <a href="#" className="hover:underline">
              Meta Ads Grader
            </a>
            <a href="#" className="hover:underline">
              AI Ads Analyzer
            </a>
            <a href="#" className={`hover:underline ml-1 bg-[${COLORS.accent}] text-[${COLORS.background}] rounded px-1 text-xs`}>
              AI Copywriter{" "}
              <span className="ml-1 bg-[#57bbbb] text-[#04242a] rounded px-1 text-xs">
                Free
              </span>
            </a>
          </nav>
        </div>
        <div className="text-center text-xs opacity-70" tabIndex={0}>
          Copyright © GoMarble.ai 2024
        </div>
      </footer>
    </div>
  );
} 