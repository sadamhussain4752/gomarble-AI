import React from "react";

// Brand color palette
const COLORS = {
  background: "#04242a",
  accent: "#57bbbb",
  text: "#b8d1c7",
  card: "#194a51",
  secondary: "#245e59",
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
    name: "Customer Name",
    quote:
      '"Marble delivers the results. We switched our agency and immediately saw the difference. Our favorite: the AI-powered creative review tool!"',
    avatar: "https://ext.same-assets.com/1796335204/4253919488.png",
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

export default function App() {
  return (
    <div
      style={{
        background: COLORS.background,
        minHeight: "100vh",
        color: COLORS.text,
      }}
      aria-label="GoMarble.ai Homepage"
    >
      {/* HEADER */}
      <header
        className="flex items-center justify-between p-4"
        style={{ background: COLORS.background }}
        role="banner"
      >
        <div className="flex items-center">
          <img
            src="https://ext.same-assets.com/1796335204/3966176097.png"
            alt="GoMarble Logo"
            className="h-8 w-8 mr-2"
          />
          <span className="text-xl font-bold" tabIndex={0}>
            GoMarble
          </span>
        </div>
        <div>
          <button
            className="rounded-md px-4 py-2 bg-transparent"
            style={{ color: COLORS.text }}
            aria-label="Open menu"
          >
            Pricing
          </button>
          <button
            className="rounded-md px-4 py-2"
            style={{ color: COLORS.text }}
            aria-label="Open menu"
          >
            Labs
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        className="flex flex-col items-center justify-center text-center py-14 px-4"
        style={{ background: COLORS.background }}
        aria-labelledby="hero-title"
      >
        <h1
          id="hero-title"
          className="text-3xl md:text-5xl font-bold mb-2"
          style={{ color: "rgb(102, 221, 207)", lineHeight: 1.8 }}
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

      {/* BRAND LOGOS & STATS */}
      <section
        className="py-10"
        style={{ background: COLORS.card }}
        aria-label="Trusted brands and stats"
      >
        <h2
          className="text-center text-lg font-medium mb-4"
          style={{ color: COLORS.text }}
          tabIndex={0}
        >
          Trusted by brands across the globe
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mb-8" role="list">
          {BRAND_LOGOS.map((logo) => (
            <img
              key={logo.src}
              src={logo.src}
              alt={`${logo.alt} logo`}
              className="h-10 object-contain"
              role="listitem"
              loading="lazy"
            />
          ))}
        </div>
        <div
          className="flex flex-wrap justify-center gap-10 text-center mb-6"
          role="list"
        >
          <div role="listitem" aria-label="34 percent CAC Reduction">
            <div
              className="text-2xl font-bold"
              style={{ color: COLORS.accent }}
            >
              34%
            </div>
            <div className="text-sm">CAC Reduction</div>
          </div>
          <div role="listitem" aria-label="54 percent ROAS Improvement">
            <div
              className="text-2xl font-bold"
              style={{ color: COLORS.accent }}
            >
              54%
            </div>
            <div className="text-sm">ROAS Improvement</div>
          </div>
          <div role="listitem" aria-label="4000 plus Ads Generated">
            <div
              className="text-2xl font-bold"
              style={{ color: COLORS.accent }}
            >
              4000+
            </div>
            <div className="text-sm">Ads Generated</div>
          </div>
          <div role="listitem" aria-label="85 percent Faster Creatives">
            <div
              className="text-2xl font-bold"
              style={{ color: COLORS.accent }}
            >
              85%
            </div>
            <div className="text-sm">Faster Creatives</div>
          </div>
        </div>
        <div className="text-center">
          <button
            className="rounded-full px-6 py-2 font-semibold"
            style={{ background: COLORS.accent, color: COLORS.background }}
            aria-label="Book a Call with GoMarble"
          >
            Book a Call
          </button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        className="py-14 px-4"
        style={{ background: COLORS.background }}
        aria-labelledby="testimonials-title"
      >
        <h2
          id="testimonials-title"
          className="text-center text-lg font-semibold mb-7"
          tabIndex={0}
        >
          What our customers say
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-7">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={i}
              className="rounded-xl shadow-lg bg-[#13323b] flex-1 max-w-md mx-auto p-6 min-h-[180px] flex flex-col items-center text-center"
              aria-label={`Testimonial from ${t.name}`}
              tabIndex={0}
            >
              <img
                src={t.avatar}
                alt={`${t.name} avatar`}
                className="w-16 h-16 rounded-full mb-3 border-2 border-[#57bbbb] object-cover"
                loading="lazy"
              />
              <h3 className="font-medium mt-3">{t.name}</h3>
              <p className="text-sm opacity-80 italic mt-2">{t.quote}</p>
            </article>
          ))}
        </div>
        <div className="text-center">
          <button
            className="rounded-full px-6 py-2 font-semibold"
            style={{ background: COLORS.accent, color: COLORS.background }}
            aria-label="Book a Demo with GoMarble"
          >
            Book a Demo
          </button>
        </div>
      </section>

      {/* HOW IT WORKS / STEPS */}
      <section
        className="py-14 px-4 bg-[#18464f]"
        aria-labelledby="how-it-works-title"
      >
        <h2
          id="how-it-works-title"
          className="text-center text-lg font-semibold mb-10"
          tabIndex={0}
        >
          Here’s how our{" "}
          <span className="text-[#57bbbb]">AI Assisted Expert Marketers</span>{" "}
          deliver profitable growth for your brand
        </h2>
        <ol
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          aria-label="Steps of how GoMarble delivers growth"
        >
          {features.map((f, i) => (
            <li
              key={i}
              className="flex items-start gap-5 bg-[#103039] rounded-lg p-6 shadow-md"
              tabIndex={0}
            >
              <div className="flex-shrink-0 mt-2" aria-hidden="true">
                <div className="h-8 w-8 bg-[#57bbbb] rounded-full flex items-center justify-center text-lg font-black text-[#04242a]">
                  {i + 1}
                </div>
                <img
                  src={f.img}
                  alt={f.title}
                  className="my-4 w-20 h-20 object-contain"
                  loading="lazy"
                />
              </div>
              <div>
                <h4 className="font-semibold text-white text-base mb-1">
                  {f.title}
                </h4>
                <p className="text-sm opacity-80 text-[#b8d1c7]">{f.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* GROWTH + ALGORITHM SECTION */}
      <section
        className="py-14 px-4"
        style={{ background: COLORS.background }}
        aria-labelledby="growth-algorithm-title"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2
            id="growth-algorithm-title"
            className="text-2xl font-bold mb-3"
            style={{ color: "#fff" }}
            tabIndex={0}
          >
            Scale growth
            <br />
            Human + Algorithm
          </h2>
          <p className="mb-4 text-[#b8d1c7]" tabIndex={0}>
            Our AI algorithms assist your performance. Bundled and target
            profitability, backed by experts.
          </p>
          <img
            src="https://ext.same-assets.com/1796335204/3094497045.svg"
            alt="Algorithm illustration"
            className="mx-auto mb-7"
            style={{ maxWidth: 120 }}
            loading="lazy"
          />
          <div>
            <h3 className="font-semibold mb-2" tabIndex={0}>
              Is your current Agency leveraging AI?
            </h3>
            <p className="text-sm mb-4" tabIndex={0}>
              Improve ROAS and bring down your marketing costs with AI-Assisted
              Performance Marketing
            </p>
            <button
              className="rounded-full px-6 py-2 font-semibold"
              style={{ background: COLORS.accent, color: COLORS.background }}
              aria-label="Hire GoMarble"
            >
              Hire GoMarble
            </button>
          </div>
        </div>
      </section>

      {/* METRICS SECTION */}
      <section
        className="py-10"
        style={{ background: COLORS.card }}
        aria-label="Performance metrics"
      >
        <div className="flex flex-wrap justify-center gap-6 text-center">
          <div
            className="px-8 py-5 bg-[#1d5864] rounded-lg min-w-[170px]"
            tabIndex={0}
            aria-label="Blended ROAS last 90 days 3.73"
          >
            <div
              className="text-xl font-bold mb-1"
              style={{ color: COLORS.accent }}
            >
              3.73
            </div>
            <div className="text-xs opacity-70">
              Blended ROAS (last 90 days)
            </div>
          </div>
          <div
            className="px-8 py-5 bg-[#1d5864] rounded-lg min-w-[170px]"
            tabIndex={0}
            aria-label="Average revenue in 30 days top quartile 34 thousand dollars"
          >
            <div
              className="text-xl font-bold mb-1"
              style={{ color: COLORS.accent }}
            >
              $34K
            </div>
            <div className="text-xs opacity-70">
              Avg. revenue in 30d (top quartile)
            </div>
          </div>
          <div
            className="px-8 py-5 bg-[#1d5864] rounded-lg min-w-[170px]"
            tabIndex={0}
            aria-label="Average time to first winning creative 3 days"
          >
            <div
              className="text-xl font-bold mb-1"
              style={{ color: COLORS.accent }}
            >
              3 days
            </div>
            <div className="text-xs opacity-70">
              Avg. time to first winning creative
            </div>
          </div>
          <div
            className="px-8 py-5 bg-[#1d5864] rounded-lg min-w-[170px]"
            tabIndex={0}
            aria-label="Lowest monthly ad spend 13.5 thousand dollars"
          >
            <div
              className="text-xl font-bold mb-1"
              style={{ color: COLORS.accent }}
            >
              $13.5K
            </div>
            <div className="text-xs opacity-70">Lowest monthly ad spend</div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="py-16 px-4 text-center"
        style={{ background: COLORS.background }}
        aria-labelledby="final-cta-title"
      >
        <h2
          id="final-cta-title"
          className="text-2xl font-bold mb-4"
          style={{ color: "#fff" }}
          tabIndex={0}
        >
          Ready to unlock your next growth lever?
        </h2>
        <button
          className="rounded-full px-8 py-3 text-lg font-semibold shadow-md"
          style={{ background: COLORS.accent, color: COLORS.background }}
          aria-label="Book a call to unlock growth"
        >
          Book a Call
        </button>
      </section>

      {/* FOOTER */}
      <footer
        className="pt-10 pb-4 px-4"
        style={{ background: COLORS.card }}
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
            className="flex flex-wrap gap-5 text-sm text-[#b8d1c7] opacity-90"
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
            <a href="#" className="hover:underline">
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
