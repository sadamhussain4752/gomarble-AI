"use client";

import React, { useState } from 'react';

// SVG icon components
const DollarIcon = () => (
  <svg className="w-5 h-5 text-[#66DDC7]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.343-4 3s1.79 3 4 3 4 1.343 4 3-1.79 3-4 3m0-12v2m0 8v2"/></svg>
);
const LocationIcon = () => (
  <svg className="w-5 h-5 text-[#66DDC7]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 0c-4 0-7 2.239-7 5v2h14v-2c0-2.761-3-5-7-5z"/></svg>
);
const ImageIcon = () => (
  <svg className="w-5 h-5 text-[#66DDC7]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="18" height="14" x="3" y="5" rx="2"/><circle cx="8.5" cy="10.5" r="1.5"/><path d="M21 19l-5.5-6.5-4 5L5 13"/></svg>
);
const UsersIcon = () => (
  <svg className="w-5 h-5 text-[#66DDC7]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
);
const PlusIcon = () => (
  <svg className="w-5 h-5 text-[#66DDC7]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg>
);
const VideoIcon = () => (
  <svg className="w-5 h-5 text-[#66DDC7]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="15" height="11" x="2" y="7" rx="2"/><path d="M17 7l5 4.5-5 4.5V7z"/></svg>
);
const UserIcon = () => (
  <svg className="w-5 h-5 text-[#66DDC7]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a7.5 7.5 0 0113 0"/></svg>
);
const IncentiveIcon = () => (
  <svg className="w-5 h-5 text-[#66DDC7]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
);
const GlobeIcon = () => (
  <svg className="w-5 h-5 text-[#66DDC7]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>
);
const FormatIcon = () => (
  <svg className="w-5 h-5 text-[#66DDC7]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></svg>
);

// Checkmark icon
const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#66DDC7] inline mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
);
// Phone icon
const PhoneIcon = () => (
  <svg className="w-6 h-6 text-[#66DDC7] inline mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5.75C3 4.784 3.784 4 4.75 4h2.5A1.75 1.75 0 019 5.75v2.5A1.75 1.75 0 017.25 10H6.5a11.5 11.5 0 005 5l1.25-0.75A1.75 1.75 0 0116.75 15.5h2.5A1.75 1.75 0 0121 17.25v2.5A1.75 1.75 0 0119.25 21C11.492 21 3 12.508 3 5.75z"/></svg>
);

const pricingPlans = [
  {
    title: 'Starter',
    description: 'For brands just starting out on advertising',
    price: '$1499 /mo',
    features: [
      { icon: <DollarIcon />, text: 'Ad Spend up to $10,000 / Mo' },
      { icon: <LocationIcon />, text: 'Any one channel' },
      { icon: <ImageIcon />, text: 'Static Ad Production' },
      { icon: <UsersIcon />, text: 'Shared GoMarble AI Expert + Shared Graphic Designer' },
      { icon: <PlusIcon />, text: '+$500 per additional channel' },
    ],
    highlight: false,
    button: true,
  },
  {
    title: 'Growth',
    description: 'For growing brands with multiple advertising channels',
    price: '$2499 /mo',
    features: [
      { icon: <DollarIcon />, text: 'Ad Spend up to $50,000 / Mo' },
      { icon: <LocationIcon />, text: 'Any two channels' },
      { icon: <VideoIcon />, text: 'Static and Motion Video Ads' },
      { icon: <UserIcon />, text: '1x Dedicated GoMarble AI Expert + Creative Team' },
      { icon: <PlusIcon />, text: '+$500 per additional channel' }
    ],
    highlight: true,
    badge: 'Most Popular',
    button: true,
  },
  {
    title: 'Pro',
    description: 'For Mature brands with more than one active advertising channel',
    price: 'Custom',
    features: [
      { icon: <IncentiveIcon />, text: 'success-linked incentives' },
      { icon: <DollarIcon />, text: 'Ad Spend above $50,000/ Mo' },
      { icon: <GlobeIcon />, text: 'All 3 channels Meta, Google, Amazon' },
      { icon: <FormatIcon />, text: 'All Formats (Statics, Motion Videos, UGC Editing)' },
    ],
    highlight: false,
    button: true,
  },
];

const includedFeatures = [
  [
    'Realtime Customized Dashboard',
    'Fortnightly Reviews',
    'Access to GoMarble AI Platform',
    'Hero Product Analysis',
    'CRO Checklist',
  ],
  [
    'Attribution Reports',
    'Industry Benchmarks',
    'Dedicated BaseCamp / ClickUp',
    'Funnel Analysis',
    '500+ Static Ad Templates',
  ],
];

type ComparisonRow = {
  item: string;
  competitor: string;
  gomarble: string;
};

type ComparisonTable = {
  title: string;
  data: ComparisonRow[];
};

type ComparisonData = {
  inHouse: ComparisonTable;
  agency: ComparisonTable;
  freelancer: ComparisonTable;
};

const comparisonData: ComparisonData = {
  inHouse: {
    title: "In House Teams",
    data: [
      { item: "Media Buyer", competitor: "$40/hr", gomarble: "Included" },
      { item: "Graphic Designer", competitor: "$20/hr", gomarble: "Included" },
      { item: "Video Editor", competitor: "$30/hr", gomarble: "Included" },
      { item: "Copywriter", competitor: "$20/hr", gomarble: "Included" },
      { item: "Software Costs", competitor: "$200 / Mo", gomarble: "Included" },
      { item: "Creative Velocity", competitor: "1-2 Concepts\nper Month", gomarble: "10-15 Concepts\nper Month" },
      { item: "Creative Testing", competitor: "Sporadic", gomarble: "Hypothesis driven\nconcept testing" },
      { item: "Time to onboard", competitor: "6 months", gomarble: "< 1 day" },
      { item: "Advertising Channels", competitor: "1-2 Channels", gomarble: "Google, Meta,\nAmazon" },
      { item: "Ads Effectiveness", competitor: "Limited by experience\nof hires", gomarble: "Industry Best Practices\n+ AI Optimized" },
      { item: "Total Cost", competitor: "$20,000 / Mo", gomarble: "$1499 / Mo" }
    ]
  },
  agency: {
    title: "Legacy Agency",
    data: [
      { item: "Ownership", competitor: "ROAS", gomarble: "Profit Growth" },
      { item: "Reporting", competitor: "Weekly Email", gomarble: "Custom Real-time\nDashboard" },
      { item: "Transparency", competitor: "On Demand", gomarble: "Change log\nwith explanation" },
      { item: "Alerts", competitor: "Reactive", gomarble: "Proactive\n24/7 Monitoring" },
      { item: "Scaling Strategy", competitor: "Varies by Media Buyer\nassigned", gomarble: "Data-driven Strategy\nfor Profitability" },
      { item: "Onboarding", competitor: "14 days", gomarble: "AI Assisted\n< 1 day" },
      { item: "Creative Research", competitor: "Competitor Ads\n+ Trending Ideas", gomarble: "Deep Consumer Insights\nusing AI" },
      { item: "Creative Testing", competitor: "Sporadic", gomarble: "Hypothesis driven\nconcept testing" },
      { item: "Creative Velocity", competitor: "1-2 Concepts per Month", gomarble: "10-15 Concepts per Month" },
      { item: "Total Cost", competitor: "$5,000 / Mo", gomarble: "$1499 / Mo" },
      { item: "Pricing", competitor: "% of ad spend", gomarble: "Flat Fee" }
    ]
  },
  freelancer: {
    title: "Freelancer",
    data: [
      { item: "Ownership", competitor: "Ads Delivery", gomarble: "Profit Growth" },
      { item: "Reporting", competitor: "Ads Manager", gomarble: "Custom Real-time\nDashboard" },
      { item: "Ad Quality", competitor: "Cookie Cutter", gomarble: "Human + AI\nOn-Brand Ads" },
      { item: "Alerts", competitor: "Reactive", gomarble: "Proactive Alerts with\n24/7 Monitoring" },
      { item: "Scaling Strategy", competitor: "\"Increase Spend\nfor better ROAS\"", gomarble: "Data-driven Strategy\nfor Sustainable Growth" },
      { item: "Onboarding", competitor: "1 week", gomarble: "AI Assisted\n< 1 day" },
      { item: "Creative Research", competitor: "None", gomarble: "Deep Consumer Insights\nusing AI" },
      { item: "Creative Testing", competitor: "None", gomarble: "Hypothesis driven\nvariant testing" },
      { item: "Creative Velocity", competitor: "On Demand", gomarble: "10-15\nConcepts per Month" }
    ]
  }
};

// Add these new components after the existing icon components
const AlpsMetersLogo = () => (
  <svg className="h-8" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="20" fill="#66DDC7"/>
    <path d="M12 20L18 26L28 14" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BarristerMannLogo = () => (
  <svg className="h-8" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="20" fill="#66DDC7"/>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="16">B&M</text>
  </svg>
);

const GoMarbleLogo = () => (
  <svg className="h-8" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="20" fill="#66DDC7"/>
    <path d="M13 20C13 16.134 16.134 13 20 13C23.866 13 27 16.134 27 20C27 23.866 23.866 27 20 27C16.134 27 13 23.866 13 20Z" stroke="white" strokeWidth="2"/>
  </svg>
);

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<keyof ComparisonData>('inHouse');
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="min-h-screen bg-[#0a2329] pt-24 pb-16 px-4 flex flex-col items-center overflow-x-hidden">
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
      <h1 className="text-4xl md:text-5xl font-bold text-[#AFFFFA] text-center mb-4">
        Hire best of Humans + AI<br />for your paid marketing
      </h1>
      <p className="text-xl text-[#66DDC7] text-center mb-2">
        Your CFO will be pleased with our affordable
      </p>
      <div className="mb-10">
        <span className="bg-[#0c3655] text-[#66DDC7] px-3 py-1 rounded-lg font-semibold text-lg">Flat-tiered</span>
        <span className="text-[#66DDC7] ml-2">pricing model</span>
      </div>
      <div className="w-full flex-1 flex flex-col items-center">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch w-full max-w-6xl overflow-x-auto md:overflow-x-visible">
          {pricingPlans.map((plan) => (
            <div
              key={plan.title}
              className={`bg-[#10272e] rounded-2xl shadow-lg p-8 w-full max-w-xs flex flex-col items-center border-2 ${plan.highlight ? 'border-[#66DDC7] scale-105' : 'border-[#1a8de1]'} relative min-h-[600px] transition-all duration-300 hover:shadow-[0_0_16px_2px_rgba(102,221,199,0.5)] hover:border-[#AFFFFA]`}
            >
              <h2 className="text-2xl font-bold text-[#66DDC7] mb-2">{plan.title}</h2>
              {plan.badge && (
                <span className="absolute top-4 right-4 bg-[#66DDC7] text-[#0a2329] px-2 py-1 rounded text-xs font-bold">{plan.badge}</span>
              )}
              <p className="text-[#AFFFFA] text-center mb-6">{plan.description}</p>
              <div className="text-3xl font-extrabold text-[#66DDC7] mb-4">{plan.price}</div>
              <ul className="text-[#66DDC7] text-left text-base mb-8 w-full space-y-2">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {f.icon}
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>
              {plan.button && (
                <button className="mt-auto w-full border border-[#66DDC7] text-[#66DDC7] rounded-full py-2 text-lg font-semibold hover:bg-[#66DDC7] hover:text-[#0a2329] transition">
                  Get Started
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Channels Supported Section */}
      <div className="w-full flex flex-col items-center mt-16 mb-8">
        <div className="text-[#66DDC7] text-2xl font-medium flex flex-wrap items-center justify-center gap-4 mb-4">
          Channels Supported
          <span className="flex items-center gap-4 ml-4">
            <span className="flex items-center gap-1"><span className="text-2xl">&#8734;</span> Meta</span>
            <span className="flex items-center gap-1"><span className="bg-[#1a8de1] text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">G</span> Google</span>
            <span className="flex items-center gap-1"><span className="bg-[#232f3e] text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">a</span> Amazon</span>
          </span>
        </div>
      </div>
      {/* Included in all plans section */}
      <div className="w-full flex flex-col items-center">
        <div className="bg-[#10272e] rounded-2xl p-10 max-w-5xl w-full flex flex-col md:flex-row gap-8 shadow-lg border border-[#1a8de1]">
          <div className="md:w-1/3 mb-6 md:mb-0 flex items-center justify-center">
            <span className="text-2xl md:text-3xl font-semibold text-[#66DDC7] text-center">Included in<br />all the plans</span>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-3">
            <div>
              <div className="flex items-center text-[#66DDC7] text-base mb-2"><CheckIcon />Realtime Customized Dashboard</div>
              <div className="flex items-center text-[#66DDC7] text-base mb-2"><CheckIcon />Fortnightly Reviews</div>
              <div className="flex items-center text-[#66DDC7] text-base mb-2"><CheckIcon />Access to GoMarble AI Platform</div>
              <div className="flex items-center text-[#66DDC7] text-base mb-2"><CheckIcon />Hero Product Analysis</div>
              <div className="flex items-center text-[#66DDC7] text-base mb-2"><CheckIcon />CRO Checklist</div>
            </div>
            <div>
              <div className="flex items-center text-[#66DDC7] text-base mb-2"><CheckIcon />Attribution Reports</div>
              <div className="flex items-center text-[#66DDC7] text-base mb-2"><CheckIcon />Industry Benchmarks</div>
              <div className="flex items-center text-[#66DDC7] text-base mb-2"><CheckIcon />Dedicated BaseCamp / ClickUp</div>
              <div className="flex items-center text-[#66DDC7] text-base mb-2"><CheckIcon />Funnel Analysis</div>
              <div className="flex items-center text-[#66DDC7] text-base mb-2"><CheckIcon />500+ Static Ad Templates</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center">
        <div className="text-[#66DDC7] text-lg mb-2">Need help in deciding? Get in touch with us at</div>
        <div className="text-[#AFFFFA] text-2xl font-bold flex items-center justify-center">
          <PhoneIcon />
          +1 (646) 980 6393
        </div>
      </div>
      {/* Comparison Section */}
      <div className="w-full flex flex-col items-center mt-20">
        <h2 className="text-3xl md:text-5xl font-bold text-[#AFFFFA] text-center mb-2">Why brands are shifting to<br />AI-led Marketing?</h2>
        <p className="text-xl text-[#66DDC7] text-center mb-8">How do we compare with other alternatives</p>
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-6">
          <button 
            onClick={() => setActiveTab('inHouse')}
            className={`px-6 py-2 rounded-full font-semibold border-2 border-[#1a8de1] transition-all duration-300 ${
              activeTab === 'inHouse' 
                ? 'bg-[#0c3655] text-[#AFFFFA] shadow-inner' 
                : 'bg-transparent text-[#66DDC7]'
            }`}
          >
            In House Teams
          </button>
          <button 
            onClick={() => setActiveTab('agency')}
            className={`px-6 py-2 rounded-full font-semibold border-2 border-[#1a8de1] transition-all duration-300 ${
              activeTab === 'agency' 
                ? 'bg-[#0c3655] text-[#AFFFFA] shadow-inner' 
                : 'bg-transparent text-[#66DDC7]'
            }`}
          >
            Legacy Agency
          </button>
          <button 
            onClick={() => setActiveTab('freelancer')}
            className={`px-6 py-2 rounded-full font-semibold border-2 border-[#1a8de1] transition-all duration-300 ${
              activeTab === 'freelancer' 
                ? 'bg-[#0c3655] text-[#AFFFFA] shadow-inner' 
                : 'bg-transparent text-[#66DDC7]'
            }`}
          >
            Freelancer
          </button>
        </div>
        {/* Table */}
        <div className="w-full max-w-4xl overflow-x-auto">
          <table className="w-full text-center rounded-2xl overflow-hidden bg-[#10272e] divide-x divide-[#1a8de1]/30">
            <thead>
              <tr className="bg-[#0c3655] text-[#AFFFFA] divide-x divide-[#1a8de1]/30">
                <th className="py-3 px-4 font-semibold w-1/3 text-center">Items</th>
                <th className="py-3 px-4 font-semibold w-1/3 text-center">{comparisonData[activeTab].title}</th>
                <th className="py-3 px-4 font-semibold w-1/3 text-center">GoMarble</th>
              </tr>
            </thead>
            <tbody className="text-[#66DDC7] text-lg divide-y divide-[#1a8de1]/30">
              {comparisonData[activeTab].data.map((row, index) => (
                <tr key={row.item} className="divide-x divide-[#1a8de1]/30">
                  <td className="py-3 px-4 align-middle text-center">{row.item}</td>
                  <td className="py-3 px-4 align-middle text-center whitespace-normal">{row.competitor}</td>
                  <td className="py-3 px-4 align-middle text-center whitespace-normal">{row.gomarble}</td>
                </tr>
              ))}
              <tr className="bg-[#0c3655]/20">
                <td colSpan={3} className="py-4 px-4 text-center text-[#66DDC7] font-medium">
                  {activeTab === 'inHouse' && "Save over 90% cost and months of hiring effort with GoMarble"}
                  {activeTab === 'agency' && "Stop Agency-Hopping and Adopt AI for marketing."}
                  {activeTab === 'freelancer' && "Hire a full-stack AI-first Agency at the cost of hiring freelancer"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full max-w-6xl mt-32">
        <h2 className="text-4xl md:text-5xl font-bold text-[#AFFFFA] text-center mb-16">
          What our customers say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Alps & Meters Testimonial */}
          <div className="bg-[#10272e] rounded-2xl p-8 flex flex-row items-center justify-between gap-8">
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  <AlpsMetersLogo />
                  <span className="text-[#AFFFFA] ml-2 font-medium">ALPS & METERS</span>
                </div>
                <span className="text-[#66DDC7] text-xl">x</span>
                <div className="flex items-center">
                  <GoMarbleLogo />
                  <span className="text-[#AFFFFA] ml-2 font-medium">GoMarble</span>
                </div>
              </div>
              <p className="text-[#AFFFFA] text-lg mb-8 leading-relaxed">
                "GoMarble has been an exceptional partner to Alps & Meters. Marrying sophisticated and emerging AI capabilities, robust creative ad launch capabilities and analysis with clear value driving outcomes"
              </p>
              <p className="text-[#66DDC7] font-medium text-lg mt-auto">LOUIS JOSEPH, FOUNDER</p>
            </div>
            <div className="flex-shrink-0 w-32 h-32 rounded-xl overflow-hidden bg-[#1a8de1]/20 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" 
                alt="Louis Joseph"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Barrister and Mann Testimonial */}
          <div className="bg-[#10272e] rounded-2xl p-8 flex flex-row items-center justify-between gap-8">
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  <BarristerMannLogo />
                  <span className="text-[#AFFFFA] ml-2 font-medium">BARRISTER AND MANN</span>
                </div>
                <span className="text-[#66DDC7] text-xl">x</span>
                <div className="flex items-center">
                  <GoMarbleLogo />
                  <span className="text-[#AFFFFA] ml-2 font-medium">GoMarble</span>
                </div>
              </div>
              <p className="text-[#AFFFFA] text-lg mb-8 leading-relaxed">
                "I'm incredibly pleased with the results. I've worked with multiple agencies, but only GoMarble has delivered profitable outcomes for Barrister and Mann, and they did it at a fraction of the cost!"
              </p>
              <p className="text-[#66DDC7] font-medium text-lg mt-auto">WILL CARIUS, FOUNDER</p>
            </div>
            <div className="flex-shrink-0 w-32 h-32 rounded-xl overflow-hidden bg-[#1a8de1]/20 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop" 
                alt="Will Carius"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full text-center mt-40 mb-0">
        <h2 className="text-4xl md:text-5xl font-bold text-[#AFFFFA] mb-12 tracking-tight">
          Ready to unlock your next growth lever?
        </h2>
        <button className="bg-[#66DDC7] text-[#0a2329] px-10 py-4 rounded-full text-xl font-semibold hover:bg-[#AFFFFA] transition-colors" onClick={() => setShowModal(true)}>
          Book a Call
        </button>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#0a2329] pt-24 pb-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
            {/* Logo and Description */}
            <div className="md:col-span-3">
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo.svg" alt="GoMarble" className="h-14 w-14" />
                <span className="text-white text-3xl font-bold">GoMarble</span>
              </div>
              <p className="text-[#66DDC7] text-lg">
                AI-Assisted Performance Marketing Experts
              </p>
            </div>

            {/* Company Links */}
            <div className="md:col-span-3">
              <h3 className="text-[#66DDC7] font-medium text-lg mb-6 uppercase tracking-wider">Company</h3>
              <ul className="space-y-4">
                <li><a href="/" className="text-[#AFFFFA] hover:text-[#66DDC7] text-lg">Home</a></li>
                <li><a href="/blog" className="text-[#AFFFFA] hover:text-[#66DDC7] text-lg">Blog</a></li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="md:col-span-3">
              <h3 className="text-[#66DDC7] font-medium text-lg mb-6 uppercase tracking-wider">Socials</h3>
              <ul className="space-y-1">
                <li><a href="/youtube" className="text-[#AFFFFA] hover:text-[#66DDC7] text-lg">Youtube</a></li>
                <li><a href="/linkedin" className="text-[#AFFFFA] hover:text-[#66DDC7] text-lg">LinkedIn</a></li>
                <li><a href="/instagram" className="text-[#AFFFFA] hover:text-[#66DDC7] text-lg">Instagram</a></li>
              </ul>
            </div>

            {/* Free Tools */}
            <div className="md:col-span-3">
              <h3 className="text-[#66DDC7] font-medium text-lg mb-6 uppercase tracking-wider">Free Tools</h3>
              <ul className="space-y-1">
                <li><a href="/meta-ads-grader" className="text-[#AFFFFA] hover:text-[#66DDC7] text-lg">Meta Ads Grader</a></li>
                <li><a href="/ai-ads-analyzer" className="text-[#AFFFFA] hover:text-[#66DDC7] text-lg">AI Ads Analyzer</a></li>
                <li className="flex items-center gap-1">
                  <a href="/ai-copywriter" className="text-[#AFFFFA] hover:text-[#66DDC7] text-lg">AI Copywriter</a>
                  <span className="bg-[#66DDC7] text-[#0a2329] text-xs px-2 py-0.5 rounded-full font-medium">New</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#1a8de1]/30">
            <p className="text-[#66DDC7] text-lg mb-4 md:mb-0">Copyright © GoMarble AI 2024</p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-[#AFFFFA] hover:text-[#66DDC7] text-lg">Privacy Policy</a>
              <a href="/terms" className="text-[#AFFFFA] hover:text-[#66DDC7] text-lg">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}  