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

type ComparisonData = {
  inHouse: ComparisonRow[];
  legacy: ComparisonRow[];
  freelancer: ComparisonRow[];
};

type TabType = 'inHouse' | 'legacy' | 'freelancer';

const comparisonData: ComparisonData = {
  inHouse: [
    { item: 'Media Buyer', competitor: '$40/hr', gomarble: 'Included' },
    { item: 'Graphic Designer', competitor: '$20/hr', gomarble: 'Included' },
    { item: 'Video Editor', competitor: '$30/hr', gomarble: 'Included' },
    { item: 'Copywriter', competitor: '$20/hr', gomarble: 'Included' },
    { item: 'Software Costs', competitor: '$200 / Mo', gomarble: 'Included' },
    { item: 'Creative Velocity', competitor: '1-2 Concepts per Month', gomarble: '10-15 Concepts per Month' },
    { item: 'Creative Testing', competitor: 'Sporadic', gomarble: 'Hypothesis driven concept testing' },
    { item: 'Time to onboard', competitor: '6 months', gomarble: '&lt; 1 day' },
    { item: 'Advertising Channels', competitor: '1-2 Channels', gomarble: 'Google, Meta, Amazon' },
    { item: 'Ads Effectiveness', competitor: 'Limited by experience of hires', gomarble: 'Industry Best Practices + AI Optimized' },
    { item: 'Total Cost', competitor: '$20,000 / Mo', gomarble: '$1499 / Mo' }
  ],
  legacy: [
    { item: 'Media Buyer', competitor: '$60/hr', gomarble: 'Included' },
    { item: 'Graphic Designer', competitor: '$40/hr', gomarble: 'Included' },
    { item: 'Video Editor', competitor: '$50/hr', gomarble: 'Included' },
    { item: 'Copywriter', competitor: '$35/hr', gomarble: 'Included' },
    { item: 'Software Costs', competitor: '$500 / Mo', gomarble: 'Included' },
    { item: 'Creative Velocity', competitor: '3-4 Concepts per Month', gomarble: '10-15 Concepts per Month' },
    { item: 'Creative Testing', competitor: 'Monthly', gomarble: 'Hypothesis driven concept testing' },
    { item: 'Time to onboard', competitor: '3 months', gomarble: '&lt; 1 day' },
    { item: 'Advertising Channels', competitor: '2-3 Channels', gomarble: 'Google, Meta, Amazon' },
    { item: 'Ads Effectiveness', competitor: 'Traditional methods', gomarble: 'Industry Best Practices + AI Optimized' },
    { item: 'Total Cost', competitor: '$25,000 / Mo', gomarble: '$1499 / Mo' }
  ],
  freelancer: [
    { item: 'Media Buyer', competitor: '$25/hr', gomarble: 'Included' },
    { item: 'Graphic Designer', competitor: '$15/hr', gomarble: 'Included' },
    { item: 'Video Editor', competitor: '$20/hr', gomarble: 'Included' },
    { item: 'Copywriter', competitor: '$15/hr', gomarble: 'Included' },
    { item: 'Software Costs', competitor: '$100 / Mo', gomarble: 'Included' },
    { item: 'Creative Velocity', competitor: '1 Concept per Month', gomarble: '10-15 Concepts per Month' },
    { item: 'Creative Testing', competitor: 'Limited', gomarble: 'Hypothesis driven concept testing' },
    { item: 'Time to onboard', competitor: '2 weeks', gomarble: '&lt; 1 day' },
    { item: 'Advertising Channels', competitor: '1 Channel', gomarble: 'Google, Meta, Amazon' },
    { item: 'Ads Effectiveness', competitor: 'Individual expertise', gomarble: 'Industry Best Practices + AI Optimized' },
    { item: 'Total Cost', competitor: '$8,000 / Mo', gomarble: '$1499 / Mo' }
  ]
};

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<TabType>('inHouse');

  return (
    <main className="min-h-screen bg-[#0a2329] pt-24 pb-16 px-4 flex flex-col items-center overflow-x-hidden">
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
                : 'bg-transparent text-[#66DDC7] hover:bg-[#0c3655] hover:text-[#AFFFFA]'
            }`}
          >
            In House Teams
          </button>
          <button 
            onClick={() => setActiveTab('legacy')}
            className={`px-6 py-2 rounded-full font-semibold border-2 border-[#1a8de1] transition-all duration-300 ${
              activeTab === 'legacy' 
                ? 'bg-[#0c3655] text-[#AFFFFA] shadow-inner' 
                : 'bg-transparent text-[#66DDC7] hover:bg-[#0c3655] hover:text-[#AFFFFA]'
            }`}
          >
            Legacy Agency
          </button>
          <button 
            onClick={() => setActiveTab('freelancer')}
            className={`px-6 py-2 rounded-full font-semibold border-2 border-[#1a8de1] transition-all duration-300 ${
              activeTab === 'freelancer' 
                ? 'bg-[#0c3655] text-[#AFFFFA] shadow-inner' 
                : 'bg-transparent text-[#66DDC7] hover:bg-[#0c3655] hover:text-[#AFFFFA]'
            }`}
          >
            Freelancer
          </button>
        </div>
        {/* Table */}
        <div className="w-full max-w-4xl overflow-x-auto">
          <table className="w-full text-left rounded-2xl overflow-hidden bg-[#10272e]">
            <thead>
              <tr className="bg-[#0c3655] text-[#AFFFFA]">
                <th className="py-3 px-4 font-semibold">Items</th>
                <th className="py-3 px-4 font-semibold">
                  {activeTab === 'inHouse' ? 'In-House Team' : activeTab === 'legacy' ? 'Legacy Agency' : 'Freelancer'}
                </th>
                <th className="py-3 px-4 font-semibold">GoMarble</th>
              </tr>
            </thead>
            <tbody className="text-[#66DDC7] text-lg">
              {comparisonData[activeTab].map((row, index) => (
                <tr key={row.item} className={index < comparisonData[activeTab].length - 1 ? 'border-b border-[#1a8de1]/30' : ''}>
                  <td className="py-3 px-4">{row.item}</td>
                  <td className="py-3 px-4">{row.competitor}</td>
                  <td className="py-3 px-4" dangerouslySetInnerHTML={{ __html: row.gomarble }}></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
} 