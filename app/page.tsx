'use client';

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
    <div className="main-container" aria-label="GoMarble.ai Homepage">
      <Header />
      <main className="pt-16">
        {/* HERO SECTION */}
        <section
          className="hero-section flex flex-col items-center justify-center text-center py-14 px-4"
          aria-labelledby="hero-title"
        >
          <h1
            id="hero-title"
            className="hero-title text-3xl md:text-5xl font-bold mb-2"
            tabIndex={0}
          >
            Scale profitably with
            <br />
            AI-Assisted Human-led performance marketing
          </h1>
          <p
            className="mb-6 max-w-xl"
            tabIndex={0}
          >
            Improve your ROAS with targeted, high quality ad campaigns managed by
            expert marketers assisted by GoMarble AI
          </p>
          <button
            className="primary-button"
            aria-label="Get Started with GoMarble"
          >
            Get Started
          </button>
        </section>

        {/* ROAS METRICS SECTION */}
        <section className="py-16 px-4 relative mb-20">
          <div className="max-w-6xl mx-auto relative">
            {/* ROAS Box */}
            <div className="metrics-box rounded-xl p-6 w-[350px] relative z-10 ml-[200px]">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-teal">
                      <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.3"/>
                      <circle cx="4" cy="12" r="3" fill="currentColor"/>
                      <circle cx="20" cy="12" r="3" fill="currentColor"/>
                      <circle cx="12" cy="4" r="3" fill="currentColor"/>
                      <circle cx="12" cy="20" r="3" fill="currentColor"/>
                    </svg>
                    <span className="metrics-text font-medium">ROAS</span>
                  </div>
                  <span className="metrics-text flex items-center">
                    <span className="transform rotate-0">↑</span> 56.4%
                  </span>
                </div>
              </div>
              <div className="metrics-value text-6xl font-bold mt-4">5.73</div>
              <div className="mt-4">
                <svg className="w-full" height="40" viewBox="0 0 300 40">
                  <path d="M0 30 L60 25 L120 28 L180 20 L240 35 L300 15" stroke="#1A8DE1" fill="none" strokeWidth="2"/>
                </svg>
              </div>
            </div>

            {/* Total Profits Box */}
            <div className="metrics-box rounded-xl p-6 w-[350px] absolute left-[400px] top-[20px] z-20">
              <div className="flex items-center gap-2">
                <span className="metrics-text flex items-center gap-2">
                  <span>💰</span>
                  Total Profits
                </span>
                <span className="metrics-text flex items-center">
                  <span className="transform rotate-0">↑</span> 18.4%
                </span>
              </div>
              <div className="metrics-value text-6xl font-bold mt-4">$18,563</div>
              <div className="mt-4">
                <svg className="w-full" height="40" viewBox="0 0 300 40">
                  <path d="M0 20 L60 15 L120 25 L180 10 L240 30 L300 5" stroke="#1A8DE1" fill="none" strokeWidth="2"/>
                </svg>
              </div>
            </div>

            {/* Save wasted ad spend Box */}
            <div className="metrics-box rounded-lg px-6 py-3 absolute left-[650px] top-[150px] z-20">
              <span className="metrics-text">Save wasted ad spend</span>
            </div>

            {/* Experts Box */}
            <div className="metrics-box rounded-xl p-4 w-[180px] absolute left-[700px] top-0 z-30">
              <h3 className="metrics-text text-sm mb-3">Dedicated Experts for your brand</h3>
              <div className="flex justify-center items-center gap-2 mb-3">
                <img
                  src="https://randomuser.me/api/portraits/women/1.jpg"
                  alt="Team member"
                  className="w-10 h-10 rounded-full border-2 border-[#0c3655]"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="Team member"
                  className="w-10 h-10 rounded-full border-2 border-[#0c3655]"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/2.jpg"
                  alt="Team member"
                  className="w-10 h-10 rounded-full border-2 border-[#0c3655]"
                />
              </div>
            </div>

            {/* Additional Info */}
            <div className="absolute bottom-[-80px] left-0 right-0 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="metrics-box rounded-lg px-6 py-3 absolute left-[350px]">
                  <span className="metrics-text">Launch new ads every week</span>
                </div>
              </div>
              <div className="flex gap-4 absolute left-[650px]">
                <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                  <img src="/meta.webp" alt="Meta" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                  <img src="/google.jpg" alt="Google" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                  <img src="/amazon.jpg" alt="Amazon" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BRAND LOGOS & STATS */}
        <section
          className="brand-logos-section py-10"
          aria-label="Trusted brands and stats"
        >
          <h2
            className="text-center text-lg font-medium mb-4"
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
                className="brand-logo"
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
              <div className="metric-value text-2xl font-bold">
                34%
              </div>
              <div className="text-sm">CAC Reduction</div>
            </div>
            <div role="listitem" aria-label="54 percent ROAS Improvement">
              <div className="metric-value text-2xl font-bold">
                54%
              </div>
              <div className="text-sm">ROAS Improvement</div>
            </div>
            <div role="listitem" aria-label="4000 plus Ads Generated">
              <div className="metric-value text-2xl font-bold">
                4000+
              </div>
              <div className="text-sm">Ads Generated</div>
            </div>
            <div role="listitem" aria-label="85 percent Faster Creatives">
              <div className="metric-value text-2xl font-bold">
                85%
              </div>
              <div className="text-sm">Faster Creatives</div>
            </div>
          </div>
          <div className="text-center">
            <button
              className="primary-button"
              aria-label="Book a Call with GoMarble"
            >
              Book a Call
            </button>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section
          className="py-14 px-4"
          aria-labelledby="testimonials-title"
        >
          <h2
            id="testimonials-title"
            className="text-center text-2xl font-semibold mb-7"
            tabIndex={0}
          >
            What our customers say
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-7 max-w-5xl mx-auto">
            {TESTIMONIALS.map((t, i) => (
              <article
                key={i}
                className="testimonial-card flex-1 max-w-xl mx-auto p-8 min-h-[250px] flex flex-row items-center text-left"
                aria-label={`Testimonial from ${t.name}`}
                tabIndex={0}
              >
                <div className="flex-1">
                  <h3 className="font-medium text-lg mb-3">{t.name}</h3>
                  <p className="text-base opacity-80 italic">{t.quote}</p>
                </div>
                <div className="ml-6">
                  <img
                    src={t.avatar}
                    alt={`${t.name} avatar`}
                    className="testimonial-avatar w-24 h-24 rounded-full object-cover"
                    loading="lazy"
                  />
                </div>
              </article>
            ))}
          </div>
          <div className="text-center">
            <button
              className="primary-button"
              aria-label="Book a Demo with GoMarble"
            >
              Book a Demo
            </button>
          </div>
        </section>

        {/* HOW IT WORKS / STEPS */}
        <section className="py-14 px-4">
          <div className="max-w-6xl mx-auto">
            {/* One-Click Account Audit */}
            <div className="flex flex-row items-center justify-between gap-8 mb-20">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-teal h-12 w-12 rounded-full flex items-center justify-center text-2xl font-black text-[#0c3655]">
                    1
                  </div>
                  <h2 className="text-3xl font-bold">One-Click Account Audit</h2>
                </div>
                <p className="text-xl text-[#454c53] mb-8 max-w-xl">
                  Your dedicated AI Expert uses our AI Audit Tool to scan your ad accounts and find opportunities to improve profitability.
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-darkblue rounded-xl p-6 relative">
                  <div className="text-teal mb-2">$3.5K wasted ad spend detected</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#13323b] rounded-lg p-4">
                      <svg className="w-full" height="40" viewBox="0 0 300 40">
                        <path d="M0 30 L60 25 L120 28 L180 20 L240 35 L300 15" stroke="#66DDC7" fill="none" strokeWidth="2"/>
                      </svg>
                      <div className="text-teal text-sm mt-2">Low Creative Velocity</div>
                    </div>
                    <div className="bg-[#13323b] rounded-lg p-4">
                      <div className="flex justify-between items-end h-[40px]">
                        <div className="w-8 bg-[#1A8DE1] h-[60%]"></div>
                        <div className="w-8 bg-[#1A8DE1] h-[40%]"></div>
                        <div className="w-8 bg-[#66DDC7] h-[100%]"></div>
                        <div className="w-8 bg-[#1A8DE1] h-[50%]"></div>
                        <div className="w-8 bg-[#1A8DE1] h-[30%]"></div>
                      </div>
                      <div className="text-teal text-sm mt-2">Performance Analysis</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI-driven Consumer Research */}
            <div className="flex flex-row items-center justify-between gap-8 mb-20">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-teal h-16 w-16 rounded-full flex items-center justify-center text-3xl font-black text-[#0c3655]">
                    2
                  </div>
                  <h2 className="text-4xl font-bold">
                    AI-driven<br />
                    Consumer Research
                  </h2>
                </div>
                <p className="text-xl mb-8 max-w-xl leading-relaxed">
                  We ingest all your online assets in our custom Generative AI Model to generate targeted buyer personas and generate high performing marketing concepts
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-darkblue rounded-xl p-6 relative">
                  <div className="grid gap-4">
                    <div className="bg-[#13323b] rounded-lg p-4">
                      <div className="flex items-start gap-4">
                        <img
                          src="https://randomuser.me/api/portraits/men/32.jpg"
                          alt="User profile"
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1 bg-[#0c3655] rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-teal">Zach</span>
                            <span className="text-teal text-sm">Match: 75%</span>
                          </div>
                          <p className="text-teal text-sm">
                            Zach actively seeks ways to incorporate green practices into his life...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-[#13323b] rounded-lg p-4 flex items-center justify-center">
                        <span className="text-teal">Assets</span>
                      </div>
                      <div className="bg-[#13323b] rounded-lg p-4 flex items-center justify-center">
                        <span className="text-teal">Brand Kit</span>
                      </div>
                      <div className="bg-[#13323b] rounded-lg p-4 flex items-center justify-center">
                        <span className="text-teal">Website</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Humans + Gen AI for 5x faster creatives */}
            <div className="flex flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-teal h-16 w-16 rounded-full flex items-center justify-center text-3xl font-black text-[#0c3655]">
                    3
                  </div>
                  <h2 className="text-4xl font-bold">
                    Humans + Gen AI for<br />
                    5x faster creatives
                  </h2>
                </div>
                <p className="text-xl mb-8 max-w-xl leading-relaxed">
                  Our designers and copywriters use GoMarble's Generative AI tools to rapidly create, conduct pre-flight tests and launch on all ads
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-darkblue rounded-xl p-6 relative">
                  <div className="grid gap-4">
                    <div className="bg-[#13323b] rounded-lg p-4">
                      <div className="flex flex-col gap-2">
                        <div className="text-teal text-sm">Concept: Thick Lather</div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="relative">
                            <img
                              src="/butter-up-1.jpg"
                              alt="Butter up product"
                              className="w-full h-32 object-cover rounded-lg"
                            />
                            <button className="absolute bottom-2 right-2 bg-[#0c3655] text-teal px-3 py-1 rounded text-sm">
                              Buy Now
                            </button>
                          </div>
                          <div className="relative">
                            <img
                              src="/butter-up-2.jpg"
                              alt="Butter up product"
                              className="w-full h-32 object-cover rounded-lg"
                            />
                            <button className="absolute bottom-2 right-2 bg-[#0c3655] text-teal px-3 py-1 rounded text-sm">
                              Buy Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="bg-[#13323b] rounded-lg px-4 py-2 flex items-center gap-2">
                        <span className="text-teal">👨‍🎨</span>
                        <span className="text-teal text-sm">Human Graphic Designers</span>
                      </div>
                      <div className="bg-[#13323b] rounded-lg px-4 py-2 flex items-center gap-2">
                        <span className="text-teal">✍️</span>
                        <span className="text-teal text-sm">Human Copywriters</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of the features */}
        <section className="py-14 px-4">
          <ol className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <li
                key={i}
                className="feature-card flex items-start gap-5 p-6"
                tabIndex={0}
              >
                <div className="flex-shrink-0 mt-2" aria-hidden="true">
                  <div className="feature-number h-8 w-8 rounded-full flex items-center justify-center text-lg font-black">
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
                  <h4 className="font-semibold text-[#454c53] text-base mb-1">
                    {f.title}
                  </h4>
                  <p className="text-sm opacity-80 text-[#454c53]">{f.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* GROWTH + ALGORITHM SECTION */}
        <section
          className="growth-section py-14 px-4"
          aria-labelledby="growth-algorithm-title"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2
              id="growth-algorithm-title"
              className="text-2xl font-bold mb-3"
              tabIndex={0}
            >
              Scale growth
              <br />
              Human + Algorithm
            </h2>
            <p className="mb-4" tabIndex={0}>
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
                className="primary-button"
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
          aria-label="Performance metrics"
        >
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <div
              className="metric-card px-8 py-5 min-w-[200px]"
              tabIndex={0}
              aria-label="Blended ROAS last 90 days 3.73"
            >
              <div className="metric-value text-2xl font-bold mb-2">
                3.73
              </div>
              <div className="text-sm text-gray-600">
                Blended ROAS (last 90 days)
              </div>
            </div>
            <div
              className="metric-card px-8 py-5 min-w-[200px]"
              tabIndex={0}
              aria-label="Average revenue in 30 days top quartile 34 thousand dollars"
            >
              <div className="metric-value text-2xl font-bold mb-2">
                $34K
              </div>
              <div className="text-sm text-gray-600">
                Avg. revenue in 30d (top quartile)
              </div>
            </div>
            <div
              className="metric-card px-8 py-5 min-w-[200px]"
              tabIndex={0}
              aria-label="Average time to first winning creative 3 days"
            >
              <div className="metric-value text-2xl font-bold mb-2">
                3 days
              </div>
              <div className="text-sm text-gray-600">
                Avg. time to first winning creative
              </div>
            </div>
            <div
              className="metric-card px-8 py-5 min-w-[200px]"
              tabIndex={0}
              aria-label="Lowest monthly ad spend 13.5 thousand dollars"
            >
              <div className="metric-value text-2xl font-bold mb-2">
                $13.5K
              </div>
              <div className="text-sm text-gray-600">
                Lowest monthly ad spend
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          className="py-16 px-4 text-center"
          aria-labelledby="final-cta-title"
        >
          <h2
            id="final-cta-title"
            className="text-2xl font-bold mb-4"
            tabIndex={0}
          >
            Ready to unlock your next growth lever?
          </h2>
          <button
            className="primary-button"
            aria-label="Book a call to unlock growth"
          >
            Book a Call
          </button>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        className="footer pt-10 pb-4 px-4"
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
            className="flex flex-wrap gap-5 text-sm"
            aria-label="Footer navigation"
          >
            <a href="#" className="footer-link">
              Home
            </a>
            <a href="#" className="footer-link">
              Blog
            </a>
            <a href="#" className="footer-link">
              Instagram
            </a>
            <a href="#" className="footer-link">
              YouTube
            </a>
            <a href="#" className="footer-link">
              LinkedIn
            </a>
            <span className="mx-2" aria-hidden="true">
              |
            </span>
            <span className="opacity-70" tabIndex={0}>
              Free Tools:
            </span>
            <a href="#" className="footer-link">
              Meta Ads Grader
            </a>
            <a href="#" className="footer-link">
              AI Ads Analyzer
            </a>
            <a href="#" className="footer-link ml-1 bg-accent text-background rounded px-1 text-xs">
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