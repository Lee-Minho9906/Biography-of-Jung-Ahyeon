import { Award, Compass, TrendingUp, BarChart2, Youtube, Play, Globe } from "lucide-react";
import { CORE_STATISTICS } from "../data";

export default function AchievementsStats() {
  const trophies = [
    { title: "Fastest Debut M/V Record", award: "200M views (76 days)", desc: "SHEESH music video bypassed previous flagship rookies to secure 5th generation records." },
    { title: "Spotify Milestone Rookie", award: "100M Streams fastest", desc: "First 5th Gen girl group to register immediate triple digit streaming numbers on standard titles." },
    { title: "Music Show High Belt", award: "1st Win Center Anchor", desc: "Praised over public broadcasting for fully live stable high note support under intense layouts." }
  ];

  const statMetrics = [
    { label: "YouTube M/V Views", val: "300M+", prev: "SHEESH Tracker" },
    { label: "Spotify Monthly Listeners", val: "12M+", prev: "Peak Global standard" },
    { label: "Social Media Challenge Flows", val: "40M+", prev: "Sovereign Trend reach" }
  ];

  return (
    <section 
      id="achievements"
      className="relative min-h-screen flex flex-col justify-center bg-black text-white px-6 md:px-16 lg:pl-80 py-24 border-t border-white/5"
    >
      <div className="relative z-10 max-w-5xl">
        {/* Section Heading Tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-monster-red bg-monster-red/10 px-3 py-1 rounded border border-monster-red/20 font-bold tracking-wider">
            SECTION XI
          </span>
          <span className="font-mono text-xs text-white/40 tracking-widest uppercase">
            GLOBAL RECORD METRICS
          </span>
        </div>

        <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-2 leading-none">
          ACHIEVEMENTS & <span className="text-monster-red">AWARDS</span>
        </h2>
        <p className="font-mono text-xs text-white/50 uppercase tracking-[0.2em] mb-12 border-b border-white/10 pb-4">
          DIGITAL STREAM RECORDS • BRAND TREND ANALYSIS
        </p>

        {/* Layout Split: Left: Trophies & Stats Count. Right: Neon SVG Graph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8">
          
          {/* Trophies & Streaming Counters: Left 6 columns */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Big Metrics Header list */}
            <div className="grid grid-cols-3 gap-2">
              {statMetrics.map((stat, idx) => (
                <div key={idx} className="p-3.5 bg-white/[0.01] border border-white/5 rounded text-center">
                  <span className="font-mono text-[8px] text-white/30 block uppercase tracking-wider font-bold">
                    {stat.label}
                  </span>
                  
                  <span className="font-display text-lg md:text-xl font-black text-monster-red block my-1 glow-text-red">
                    {stat.val}
                  </span>

                  <span className="font-mono text-[8px] text-white/40 block leading-none truncate">
                    {stat.prev}
                  </span>
                </div>
              ))}
            </div>

            {/* Trophies Grid items */}
            <div className="space-y-4">
              <span className="font-mono text-[8px] text-monster-red block tracking-widest font-bold uppercase">
                CRITICAL RECORD BENCHMARKS
              </span>

              {trophies.map((trophy, idx) => (
                <div 
                  key={idx}
                  className="glass-panel p-4 rounded-lg border border-white/5 flex gap-4 items-start"
                >
                  <div className="p-2 bg-monster-red/10 border border-monster-red/20 rounded-full shrink-0">
                    <Award className="w-5 h-5 text-monster-red" />
                  </div>

                  <div>
                    <span className="font-mono text-[8px] text-white/30 uppercase block font-bold">
                      {trophy.title}
                    </span>
                    <h3 className="font-display text-sm font-bold text-white uppercase mt-0.5 tracking-wide">
                      {trophy.award}
                    </h3>
                    <p className="font-sans text-[11px] text-white/60 mt-1 leading-relaxed">
                      {trophy.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Popularity Trend SVG Graph: Right 6 columns */}
          <div className="lg:col-span-6 glass-panel p-6 rounded-lg border border-white/5 flex flex-col justify-between">
            
            <div>
              <div className="flex gap-2 items-center mb-1">
                <TrendingUp className="w-4 h-4 text-monster-red" />
                <span className="font-mono text-[9px] text-[#ffffff] uppercase font-bold tracking-wider">
                  MONTHLY SEARCH & STREAM VELOCITY CURVE
                </span>
              </div>
              <p className="font-sans text-[11px] text-white/50 leading-relaxed">
                Illustrates search density and fan engagement indexes from the pre-debut Dangerously reveal (Q1 2023) to her return in official group promotional EP releases.
              </p>
            </div>

            {/* Custom SVG Line Graph Stage */}
            <div className="relative py-6">
              
              {/* Plot Frame Container */}
              <div className="h-44 bg-[#0a090b] border border-white/5 rounded-lg flex items-end relative overflow-hidden">
                
                {/* Simulated Grid lines inside background */}
                <div className="absolute inset-x-0 h-[1px] top-1/4 bg-white/[0.02] pointer-events-none"></div>
                <div className="absolute inset-x-0 h-[1px] top-1/2 bg-white/[0.02] pointer-events-none"></div>
                <div className="absolute inset-x-0 h-[1px] top-3/4 bg-white/[0.02] pointer-events-none"></div>
                
                {/* Main Curve */}
                <svg className="w-full h-full absolute inset-0 z-10 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Fill Area */}
                  <path
                    d="M 10,95 L 10,85 Q 25,75 35,50 T 60,35 T 85,20 L 95,15 L 95,95 Z"
                    fill="url(#grad-red)"
                    opacity="0.15"
                  />
                  {/* Main stroke line */}
                  <path
                    d="M 10,85 Q 25,75 35,50 T 60,35 T 85,20 L 95,15"
                    fill="none"
                    stroke="#E21E3A"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  
                  {/* Glowing Dots */}
                  <circle cx="10" cy="85" r="2.5" fill="#ffffff" stroke="#E21E3A" strokeWidth="1" />
                  <circle cx="35" cy="50" r="2.5" fill="#ffffff" stroke="#E21E3A" strokeWidth="1" />
                  <circle cx="60" cy="35" r="2.5" fill="#ffffff" stroke="#E21E3A" strokeWidth="1" />
                  <circle cx="85" cy="20" r="2.5" fill="#ffffff" stroke="#E21E3A" strokeWidth="1" />
                  <circle cx="95" cy="15" r="3" fill="#FFE3A3" stroke="#E21E3A" strokeWidth="1.5" />
                  
                  {/* Gradients declaration */}
                  <defs>
                    <linearGradient id="grad-red" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#E21E3A" />
                      <stop offset="100%" stopColor="#000000" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Left vertical values labels */}
                <div className="absolute left-2 top-2 font-mono text-[8px] text-white/30 uppercase block space-y-8 select-none">
                  <div>100% SPEED</div>
                  <div>50% PITCH</div>
                  <div>BASELINE</div>
                </div>

              </div>

              {/* Bottom timeline values */}
              <div className="flex justify-between items-center text-[9px] font-mono text-white/40 mt-2 px-1">
                <span>Q1 2023 (Dangerously)</span>
                <span>Q4 2023 (Debut Reveal)</span>
                <span>Q2 2024 (SHEESH EP)</span>
                <span>Q4 2024 (DRIP LP)</span>
              </div>

            </div>

            {/* Description footnote */}
            <div className="font-mono text-[9px] text-white/35 leading-tight uppercase tracking-wider block border-t border-white/5 pt-4">
              METRIC ANALYSIS: Immediate 230% breakout query spike recorded upon official comeback. Her technical center anchor execution remains a core variable.
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
