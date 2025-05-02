"use client";
import React, { useState } from "react";
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

// Placeholder component for platform icons used in the new section
const PlatformIcon: React.FC<{ platform: string }> = ({ platform }) => (
  <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
    {platform}
  </div>
);

// Placeholder component for channel icons used in the new section
const ChannelIcon: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-gray-200">
    <img src={src} alt={alt} className="w-6 h-6 object-contain" />
  </div>
);

// Placeholder component for the phone icon
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 inline ml-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

export default function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      className="min-h-screen text-black bg-sky-200"
      aria-label="GoMarble.ai Homepage"
    >
      <Header />
      {/* Modal Overlay and Content */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative bg-[#073135] rounded-2xl shadow-2xl flex flex-row w-full max-w-3xl mx-4 p-0 overflow-hidden min-h-[480px]">
            {/* Close Button */}
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-[#66DDC7] text-2xl font-bold hover:text-[#AFFFFA]">&times;</button>
            {/* Form */}
            <form className="w-1/2 flex flex-col gap-4 px-8 py-10 justify-center">
              <div className="flex gap-3 mb-2">
                <div className="flex flex-col w-1/2">
                  <label className="text-[#AFFFFA] text-base font-semibold mb-1">First Name</label>
                  <input type="text" placeholder="Jane" className="bg-[#0a2329] text-white placeholder-gray-400 rounded px-4 py-3 text-base focus:outline-none" />
                </div>
                <div className="flex flex-col w-1/2">
                  <label className="text-[#AFFFFA] text-base font-semibold mb-1">Last Name</label>
                  <input type="text" placeholder="Smith" className="bg-[#0a2329] text-white placeholder-gray-400 rounded px-4 py-3 text-base focus:outline-none" />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <label className="text-[#AFFFFA] text-base font-semibold mb-1">Email</label>
                <input type="email" placeholder="jane@framer.com" className="bg-[#0a2329] text-white placeholder-gray-400 rounded px-4 py-3 text-base focus:outline-none" />
              </div>
              <div className="flex flex-col mb-2">
                <label className="text-[#AFFFFA] text-base font-semibold mb-1">Company Website</label>
                <input type="text" placeholder="www.brandname.com" className="bg-[#0a2329] text-white placeholder-gray-400 rounded px-4 py-3 text-base focus:outline-none" />
              </div>
              <div className="flex flex-col mb-2">
                <label className="text-[#AFFFFA] text-base font-semibold mb-1">Monthly Ad Budget</label>
                <select className="bg-[#0a2329] text-white placeholder-gray-400 rounded px-4 py-3 text-base focus:outline-none">
                  <option value="">Select...</option>
                  <option value="<5k">Less than $5,000</option>
                  <option value="5k-20k">$5,000 - $20,000</option>
                  <option value="20k-50k">$20,000 - $50,000</option>
                  <option value=">50k">More than $50,000</option>
                </select>
              </div>
              <button type="submit" className="mt-4 bg-[#066d5f] text-[#AFFFFA] font-semibold rounded px-4 py-3 text-lg hover:bg-[#66DDC7] hover:text-[#0a2329] transition">Submit</button>
            </form>
            {/* Testimonial Card */}
            <div className="w-1/2 flex flex-col justify-center items-center bg-[#0a2329] px-8 py-10">
              <span className="text-[#AFFFFA] text-base font-semibold mb-4 self-start">Here is what our partners say</span>
              <div className="bg-[#073135] rounded-xl p-6 w-full max-w-xs flex flex-col items-start shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-bold text-[#66DDC7] text-lg tracking-widest">BARRISTER AND MANN</span>
                  <span className="text-[#66DDC7] text-xl font-bold">x</span>
                  <span className="font-bold text-[#66DDC7] text-lg tracking-widest">GoMarble</span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop" alt="Will Carius" className="w-14 h-14 rounded-lg object-cover" />
                  <div className="text-left">
                    <div className="text-[#AFFFFA] font-bold text-base leading-tight">WILL CARIUS,</div>
                    <div className="text-[#AFFFFA] font-bold text-base leading-tight">FOUNDER</div>
                  </div>
                </div>
                <p className="text-[#AFFFFA] text-base leading-relaxed mt-2">“I'm incredibly pleased with the results. I've worked with multiple agencies, but only GoMarble has delivered profitable outcomes for Barrister and Mann, and they did it at a fraction of the cost!”</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <main className="pt-16">
        {/* HERO SECTION */}
        <section
          className="flex flex-col items-center justify-center text-center py-14 px-4"
          aria-labelledby="hero-title"
        >
          <h1
            id="hero-title"
            className="text-3xl md:text-5xl font-bold mb-2 text-black"
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
            className="rounded-full px-6 py-3 text-lg font-semibold shadow-md bg-[#66DDC7] text-white"
            aria-label="Get Started with GoMarble"
            onClick={() => setShowModal(true)}
          >
            Get Started
          </button>
        </section>

        {/* ROAS METRICS SECTION */}
        <section className="py-16 px-4 relative mb-20">
          <div className="max-w-6xl mx-auto relative">
            {/* ROAS Box */}
            <div className="bg-[#66DDC7] rounded-xl p-6 w-[350px] relative z-10 border-2 border-black ml-[200px]">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#065f46]">
                      <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.3"/>
                      <circle cx="4" cy="12" r="3" fill="currentColor"/>
                      <circle cx="20" cy="12" r="3" fill="currentColor"/>
                      <circle cx="12" cy="4" r="3" fill="currentColor"/>
                      <circle cx="12" cy="20" r="3" fill="currentColor"/>
                    </svg>
                    <span className="text-[#065f46] font-medium">ROAS</span>
                  </div>
                  <span className="text-[#065f46] flex items-center">
                    <span className="transform rotate-0">↑</span> 56.4%
                  </span>
                </div>
              </div>
              <div className="text-6xl font-bold text-[#065f46] mt-4">5.73</div>
              <div className="mt-4">
                <svg className="w-full" height="40" viewBox="0 0 300 40">
                  <path d="M0 30 L60 25 L120 28 L180 20 L240 35 L300 15" stroke="#065f46" fill="none" strokeWidth="2"/>
                </svg>
              </div>
            </div>

            {/* Total Profits Box */}
            <div className="bg-[#66DDC7] rounded-xl p-6 w-[350px] absolute left-[400px] top-[20px] z-20 border-2 border-black">
              <div className="flex items-center gap-2">
                <span className="text-[#065f46] flex items-center gap-2">
                  <span>💰</span>
                  Total Profits
                </span>
                <span className="text-[#065f46] flex items-center">
                  <span className="transform rotate-0">↑</span> 18.4%
                </span>
              </div>
              <div className="text-6xl font-bold text-[#065f46] mt-4">$18,563</div>
              <div className="mt-4">
                <svg className="w-full" height="40" viewBox="0 0 300 40">
                  <path d="M0 20 L60 15 L120 25 L180 10 L240 30 L300 5" stroke="#065f46" fill="none" strokeWidth="2"/>
                </svg>
              </div>
            </div>

            {/* Save wasted ad spend Box */}
            <div className="bg-[#66DDC7] rounded-lg px-6 py-3 absolute left-[650px] top-[150px] z-20 border-2 border-black">
              <span className="text-[#065f46]">Save wasted ad spend</span>
            </div>

            {/* Experts Box */}
            <div className="bg-[#66DDC7] rounded-xl p-4 w-[180px] absolute left-[700px] top-0 z-30 border-2 border-black">
              <h3 className="text-[#065f46] text-sm mb-3">Dedicated Experts for your brand</h3>
              <div className="flex justify-center items-center gap-2 mb-3">
                <img
                  src="https://randomuser.me/api/portraits/women/1.jpg"
                  alt="Team member"
                  className="w-10 h-10 rounded-full border-2 border-[#66DDC7]"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="Team member"
                  className="w-10 h-10 rounded-full border-2 border-[#66DDC7]"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/2.jpg"
                  alt="Team member"
                  className="w-10 h-10 rounded-full border-2 border-[#66DDC7]"
                />
              </div>
            </div>

            {/* Additional Info */}
            <div className="absolute bottom-[-80px] left-0 right-0 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="bg-[#66DDC7] rounded-lg px-6 py-3 absolute left-[350px]">
                  <span className="text-[#065f46]">Launch new ads every week</span>
                </div>
              </div>
              <div className="flex gap-4 absolute left-[650px]">
                <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                  <img src="/metaa.png" alt="Meta" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                  <img src="/goog.jpg" alt="Google" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                  <img src="/ama.jpg" alt="Amazon" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BRAND LOGOS & STATS */}
        <section
          className="py-10"
          aria-label="Trusted brands and stats"
        >
          <h2
            className="text-center text-3xl font-medium mb-4"
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
                className="h-16 object-contain"
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
                className="text-4xl font-bold text-black"
              >
                34%
              </div>
              <div className="text-lg text-black">CAC Reduction</div>
            </div>
            <div role="listitem" aria-label="54 percent ROAS Improvement">
              <div
                className="text-4xl font-bold text-black"
              >
                54%
              </div>
              <div className="text-lg text-black">ROAS Improvement</div>
            </div>
            <div role="listitem" aria-label="4000 plus Ads Generated">
              <div
                className="text-4xl font-bold text-black"
              >
                4000+
              </div>
              <div className="text-lg text-black">Ads Generated</div>
            </div>
            <div role="listitem" aria-label="85 percent Faster Creatives">
              <div
                className="text-4xl font-bold text-black"
              >
                85%
              </div>
              <div className="text-lg text-black">Faster Creatives</div>
            </div>
          </div>
          <div className="text-center">
            <button
              className="rounded-full px-6 py-2 font-semibold bg-[#66DDC7] text-[#065f46]"
              aria-label="Book a Call with GoMarble"
              onClick={() => setShowModal(true)}
            >
              Book a Call
            </button>
          </div>
        </section>

        {/* TESTIMONIALS - Redesigned - Grid Box Background Changed to Accent */}
        <section
          className="py-14 px-4"
          aria-labelledby="testimonials-title"
        >
          <h2
            id="testimonials-title"
            className="text-center text-3xl md:text-4xl font-bold mb-12 text-black"
            tabIndex={0}
          >
            What our customers say
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {TESTIMONIALS.map((t, i) => (
              <article
                key={i}
                className="bg-[#66DDC7] rounded-xl shadow-xl p-8 flex flex-col justify-between border border-[#4ac0b3] text-[#065f46]"
                aria-label={`Testimonial from ${t.name}`}
                tabIndex={0}
              >
                {/* Partner Logo Header */}
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-[#065f46]">
                  <span className="font-semibold text-sm text-[#054d37]">
                    {i === 0 ? "Alps & Meters Logo" : "Barrister and Mann Logo"}
                  </span>
                  <span className="text-[#054d37] text-sm">x</span>
                  <span className="font-semibold text-sm text-[#054d37]">GoMarble Logo</span>
                </div>
                
                {/* Quote and Author */}
                <div className="flex flex-col md:flex-row gap-8 flex-grow">
                  <p className="text-base text-[#054d37] italic flex-grow md:w-2/3">{t.quote}</p>
                  <div className="flex flex-col items-center text-center flex-shrink-0 md:w-1/3">
                    <img
                      src={t.avatar}
                      alt={`${t.name} avatar`}
                      className={`w-24 h-24 rounded-lg object-cover mb-4`}
                      loading="lazy"
                    />
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-[#065f46]">{t.name}</h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS / STEPS */}
        <section className="py-14 px-4">
          <div className="max-w-6xl mx-auto">
            {/* One-Click Account Audit */}
            <div className="flex flex-row items-center justify-between gap-8 mb-20">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 bg-[#66DDC7] rounded-full flex items-center justify-center text-2xl font-black text-[#0c3655]">
                    1
                  </div>
                  <h2 className="text-3xl font-bold">One-Click Account Audit</h2>
                </div>
                <p className="text-xl text-[#454c53] mb-8 max-w-xl">
                  Your dedicated AI Expert uses our AI Audit Tool to scan your ad accounts and find opportunities to improve profitability.
                </p>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <div className="text-black mb-2">$3.5K wasted ad spend detected</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#e0f2fe] border border-gray-300 rounded-lg p-4">
                      <svg className="w-full" height="40" viewBox="0 0 300 40">
                        <path d="M0 30 L60 25 L120 28 L180 20 L240 35 L300 15" stroke="#065f46" fill="none" strokeWidth="2"/>
                      </svg>
                      <div className="text-black text-sm mt-2">Low Creative Velocity</div>
                    </div>
                    <div className="bg-[#e0f2fe] border border-gray-300 rounded-lg p-4">
                      <div className="flex justify-between items-end h-[40px]">
                        <div className="w-8 bg-[#66DDC7] h-[60%]"></div>
                        <div className="w-8 bg-[#66DDC7] h-[40%]"></div>
                        <div className="w-8 bg-[#66DDC7] h-[100%]"></div>
                        <div className="w-8 bg-[#66DDC7] h-[50%]"></div>
                        <div className="w-8 bg-[#66DDC7] h-[30%]"></div>
                      </div>
                      <div className="text-black text-sm mt-2">Performance Analysis</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI-driven Consumer Research */}
            <div className="flex flex-row items-center justify-between gap-8 mb-20">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 bg-[#66DDC7] rounded-full flex items-center justify-center text-3xl font-black text-[#0c3655]">
                    2
                  </div>
                  <h2 className="text-4xl font-bold text-[#000000]">
                    AI-driven<br />
                    Consumer Research
                  </h2>
                </div>
                <p className="text-xl text-[#000000] mb-8 max-w-xl leading-relaxed">
                  We ingest all your online assets in our custom Generative AI Model to generate targeted buyer personas and generate high performing marketing concepts
                </p>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <div className="grid gap-4">
                    <div className="bg-[#e0f2fe] border border-gray-300 rounded-lg p-4">
                      <div className="flex items-start gap-4">
                        <img
                          src="https://randomuser.me/api/portraits/men/32.jpg"
                          alt="User profile"
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1 bg-sky-100 rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-black">Zach</span>
                            <span className="text-gray-600 text-sm">Match: 75%</span>
                          </div>
                          <p className="text-gray-700 text-sm">
                            Zach actively seeks ways to incorporate green practices into his life...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-[#e0f2fe] border border-gray-300 rounded-lg p-4 flex items-center justify-center">
                        <span className="text-black">Assets</span>
                      </div>
                      <div className="bg-[#e0f2fe] border border-gray-300 rounded-lg p-4 flex items-center justify-center">
                        <span className="text-black">Brand Kit</span>
                      </div>
                      <div className="bg-[#e0f2fe] border border-gray-300 rounded-lg p-4 flex items-center justify-center">
                        <span className="text-black">Website</span>
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
                  <div className="h-16 w-16 bg-[#66DDC7] rounded-full flex items-center justify-center text-3xl font-black text-[#0c3655]">
                    3
                  </div>
                  <h2 className="text-4xl font-bold text-[#000000]">
                    Humans + Gen AI for<br />
                    5x faster creatives
                  </h2>
                </div>
                <p className="text-xl text-[#000000] mb-8 max-w-xl leading-relaxed">
                  Our designers and copywriters use GoMarble's Generative AI tools to rapidly create, conduct pre-flight tests and launch on all ads
                </p>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <div className="grid gap-4">
                    <div className="bg-[#e0f2fe] border border-gray-300 rounded-lg p-4">
                      <div className="flex flex-col gap-2">
                        <div className="text-black text-sm">Concept: Thick Lather</div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="relative">
                            <img
                              src="https://picsum.photos/seed/butterup2/400/300"
                              alt="Butter up product"
                              className="w-full h-32 object-cover rounded-lg"
                            />
                            <button className="absolute bottom-2 right-2 bg-[#0c3655] text-[#66DDC7] px-3 py-1 rounded text-sm">
                              Buy Now
                            </button>
                          </div>
                          <div className="relative">
                            <img
                              src="https://picsum.photos/seed/butterup1/400/300"
                              alt="Butter up product"
                              className="w-full h-32 object-cover rounded-lg"
                            />
                            <button className="absolute bottom-2 right-2 bg-[#0c3655] text-[#66DDC7] px-3 py-1 rounded text-sm">
                              Buy Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="bg-[#e0f2fe] border border-gray-300 rounded-lg px-4 py-2 flex items-center gap-2">
                        <span className="text-black">👨‍🎨</span>
                        <span className="text-black text-sm">Human Graphic Designers</span>
                      </div>
                      <div className="bg-[#e0f2fe] border border-gray-300 rounded-lg px-4 py-2 flex items-center gap-2">
                        <span className="text-black">✍️</span>
                        <span className="text-black text-sm">Human Copywriters</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Omni-Channel Ads - NEW SECTION - Reordered & Background Removed from Main */}
            <div className="flex flex-row items-center justify-between gap-12 my-12">
              {/* Left Column: Text Content (No background box) */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 bg-[#66DDC7] rounded-full flex items-center justify-center text-3xl font-black text-[#065f46]">
                    4
                  </div>
                  {/* Text color needs to be reset if it was white before */}
                  <h2 className="text-4xl font-bold text-[#000000]">Omni-Channel Ads</h2>
                </div>
                 {/* Text color needs to be reset if it was white/gray before */}
                <p className="text-xl text-[#000000] mb-8 max-w-md leading-relaxed">
                  GoMarble AI Platform enables our experts to run ads on all major marketing channels.
                </p>
                <div className="flex gap-4">
                   {/* Using direct img tags for logos */}
                   <img src="/meta.webp" alt="Meta" className="w-8 h-8 object-contain rounded-full" />
                   <img src="/google.jpg" alt="Google" className="w-8 h-8 object-contain rounded-full" />
                   <img src="/amazon.jpg" alt="Amazon" className="w-8 h-8 object-contain rounded-full" />
                </div>
              </div>

              {/* Right Column: Ad Previews (Removed background box) */}
              <div className="flex-1">
                <div className="flex flex-col items-center relative"> {/* This inner div holds the column - still centered by flex-1 parent */}
                  {/* Row for first two images */}
                  <div className="flex justify-center gap-4 mb-1 w-full"> {/* Added flex row container */}
                    {/* Image 1 (IG) */}
                    <div className="relative w-2/5"> {/* Adjusted width, removed mb-1 */}
                      <img
                        src="/shaving cream.jpg"
                        alt="Ad preview Instagram"
                        className="w-48 h-36 object-cover rounded-lg shadow-lg mx-auto" /* Increased width to w-32 */
                      />
                      <img src="/instagram.jpg" alt="Instagram" className="absolute top-2 right-2 h-6 w-6 object-contain bg-white rounded-full p-1" />
                      <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-[#042f2e] px-2 py-0.5 rounded text-xs font-semibold">
                        BUY NOW
                      </button>
                    </div>
                    {/* Image 2 (FB) */}
                    <div className="relative w-2/5"> {/* Adjusted width, removed ml-8, removed mb-1 */}
                      <img
                        src="/shaving cream.jpg"
                        alt="Ad preview Facebook"
                        className="w-48 h-24 object-cover rounded-lg shadow-lg mx-auto" /* Increased width to w-32 */
                      />
                      <img src="/facebook.png" alt="Facebook" className="absolute top-2 right-2 h-6 w-6 object-contain bg-white rounded-full p-1" />
                      {/* Moved Publish All button here - Adjusted size */}
                      <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-[#66DDC7] text-[#042f2e] rounded px-2 py-0.5 text-xs font-semibold">
                        Publish All
                      </button>
                      {/* Moved Facebook BUY NOW button back here - Moved up again */}
                      <button className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white text-[#042f2e] px-2 py-0.5 rounded text-xs font-semibold">
                        BUY NOW
                      </button>
                    </div>
                  </div>
                  {/* Image 3 (YT) */}
                  <div className="relative mb-1 w-4/5"> {/* Kept width as it's on its own row */}
                    <img
                      src="/shaving cream.jpg"
                      alt="Ad preview YouTube"
                      className="w-64 h-24 object-cover rounded-lg shadow-lg mx-auto" /* Increased width to w-48 */
                    />
                    <img src="/youtube.png" alt="YouTube" className="absolute top-2 right-10 h-6 w-6 object-contain bg-white rounded-full p-1" /> {/* Changed right-8 to right-10 */}
                    <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-[#042f2e] px-2 py-0.5 rounded text-xs font-semibold">
                      BUY NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Omni-Channel Ads Section */}

          </div>
        </section>

        {/* GROWTH + ALGORITHM SECTION - Redesigned - Background Changed */}
        <section
          className="py-16 px-4 text-center"
          aria-labelledby="agency-leverage-ai-title"
        >
          <div className="max-w-3xl mx-auto">
            <h2
              id="agency-leverage-ai-title"
              className="text-4xl md:text-5xl font-bold mb-6 text-black"
              tabIndex={0}
            >
              Is your current Agency leveraging AI?
            </h2>
            <p className="mb-8 text-lg text-gray-700 max-w-2xl mx-auto" tabIndex={0}>
              Improve ROAS and bring down your marketing costs with AI-Assisted Performance Marketing
            </p>
            <button
              className="rounded-full px-8 py-3 text-lg font-semibold shadow-md bg-[#66DDC7] text-[#065f46]"
              aria-label="Hire GoMarble"
              onClick={() => setShowModal(true)}
            >
              Hire GoMarble
            </button>
          </div>
        </section>

        {/* METRICS SECTION - Redesigned - Grid Box Background Changed to Accent */}
        <section
          className="py-16 px-4 text-center"
          aria-label="Performance metrics"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-[#000000] max-w-3xl mx-auto">
            Specialised for brands with strong product-market-fit but limited growth fuel
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
            {/* Metric Box 1 */}
            <div className="bg-[#66DDC7] text-[#065f46] rounded-lg p-6 text-left border border-[#4ac0b3] shadow-md">
              <h3 className="text-sm text-[#054d37] mb-2">Home Decor</h3>
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-4xl font-bold">3.73</span>
                <span className="text-[#065f46] font-semibold">191%</span>
              </div>
              <p className="text-sm text-[#054d37]">
                ROAS Improved from 1.95 to 3.73 in 45 days
              </p>
            </div>
            
            {/* Metric Box 2 */}
            <div className="bg-[#66DDC7] text-[#065f46] rounded-lg p-6 text-left border border-[#4ac0b3] shadow-md">
              <h3 className="text-sm text-[#054d37] mb-2">Jewellery Brand</h3>
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-4xl font-bold">$34K</span>
                <span className="text-[#065f46] font-semibold">124%</span>
              </div>
              <p className="text-sm text-[#054d37]">
                Sales grew from $15K/Month to $34K/Month in 90 days
              </p>
            </div>

            {/* Metric Box 3 */}
            <div className="bg-[#66DDC7] text-[#065f46] rounded-lg p-6 text-left border border-[#4ac0b3] shadow-md">
              <h3 className="text-sm text-[#054d37] mb-2">Global Expansion</h3>
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-4xl font-bold">3 days</span>
              </div>
              <p className="text-sm text-[#054d37]">
                TAT for localised creatives for EU expansion of a US Brand
              </p>
            </div>

            {/* Metric Box 4 */}
            <div className="bg-[#66DDC7] text-[#065f46] rounded-lg p-6 text-left border border-[#4ac0b3] shadow-md">
              <h3 className="text-sm text-[#054d37] mb-2">Beauty Brand</h3>
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-4xl font-bold">$13.5K</span>
              </div>
              <p className="text-sm text-[#054d37]">
                Identified and saved wasted monthly ad spend of $13.5K
              </p>
            </div>
          </div>
          
          {/* Talk to Us Link */}
          <div className="text-xl text-[#000000]">
            Not sure if you fit? 
            <a href="#" className="text-black font-semibold hover:underline">
              Talk to Us
              <PhoneIcon />
            </a>
          </div>
        </section>

        {/* FINAL CTA - Background Changed */}
        <section
          className="py-16 px-4 text-center"
          aria-labelledby="final-cta-title"
        >
          <h2
            id="final-cta-title"
            className="text-4xl font-bold mb-6 text-black"
            tabIndex={0}
          >
            Ready to unlock your next growth lever?
          </h2>
          <button
            className="rounded-full px-8 py-3 text-lg font-semibold shadow-md bg-[#66DDC7] text-[#065f46]"
            aria-label="Book a call to unlock growth"
            onClick={() => setShowModal(true)}
          >
            Book a Call
          </button>
        </section>
      </main>

      {/* FOOTER - Background Changed */}
      <footer
        className="pt-16 px-4 text-black"
        role="contentinfo"
      >
        <div className="max-w-6xl mx-auto">
          {/* Footer Logo and Tagline - Centered */}
          <div className="flex flex-col items-center mb-10">
            <img
              src="/logo.webp"
              alt="GoMarble Logo Footer"
              className="h-14 w-14 mb-4"
            />
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">GoMarble</div>
              <div className="text-gray-700">AI-Assisted Performance Marketing Experts</div>
            </div>
          </div>
          
          {/* Footer Links in Three Columns - Increased padding again */}
          <div className="grid md:grid-cols-3 gap-10 mb-12 pl-24">
            {/* Company Links */}
            <div>
              <h3 className="text-lg font-medium mb-4 text-gray-500">COMPANY</h3>
              <ul className="space-y-3">
                <li><a href="/" className="hover:text-blue-600 transition-colors">Home</a></li>
                <li><a href="/blog" className="hover:text-blue-600 transition-colors">Blog</a></li>
              </ul>
            </div>
            
            {/* Social Links */}
            <div>
              <h3 className="text-lg font-medium mb-4 text-gray-500">SOCIALS</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Youtube</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Instagram</a></li>
              </ul>
            </div>
            
            {/* Free Tools */}
            <div>
              <h3 className="text-lg font-medium mb-4 text-gray-500">FREE TOOLS</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Meta Ads Grader</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">AI Ads Analyzer</a></li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors flex items-center">
                    AI Copywriter
                    <span className="ml-2 text-black bg-transparent rounded px-2 py-0.5 text-xs border border-black">New</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Copyright and Legal - Added Dark Green Background - This div is now outside the max-w-6xl container */}
        <div className="bg-[#065f46] text-gray-300 py-4 px-4 mt-12">
           <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between">
              <div className="mb-4 md:mb-0 text-center md:text-left">Copyright © GoMarble AI 2024</div> 
              <div className="flex gap-6 justify-center md:justify-start">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> 
                <a href="#" className="hover:text-white transition-colors">Terms of Use</a> 
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
}