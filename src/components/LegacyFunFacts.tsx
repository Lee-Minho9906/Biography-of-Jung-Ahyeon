import { useState, useEffect } from "react";
import { MEMBER_QUOTES, FUN_FACTS } from "../data";
import { MessageSquare, Calendar, Globe, Heart, Quote, Compass, Eye, ShieldAlert, Sparkles, Hourglass } from "lucide-react";

export default function LegacyFunFacts() {
  const [activeQuoteId, setActiveQuoteId] = useState(MEMBER_QUOTES[0].id);
  const activeQuote = MEMBER_QUOTES.find(q => q.id === activeQuoteId) || MEMBER_QUOTES[0];

  const [counter, setCounter] = useState(1);

  // Auto rotate quotes for immersive museum feel
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        const next = (prev % MEMBER_QUOTES.length) + 1;
        const targetQuote = MEMBER_QUOTES[next - 1];
        if (targetQuote) {
          setActiveQuoteId(targetQuote.id);
        }
        return next;
      });
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="legacy"
      className="relative min-h-screen flex flex-col justify-center bg-black text-white px-6 md:px-16 lg:pl-80 py-24 border-t border-white/5 overflow-hidden"
    >
      {/* Background majestic lights */}
      <div className="absolute inset-x-0 bottom-0 top-0 pointer-events-none overflow-hidden">
        {/* Massive dramatic red/plum blast */}
        <div className="absolute bottom-0 right-0 w-[55vw] h-[55vw] bg-monster-red/10 blur-[150px] rounded-full animate-glow-2"></div>
        <div className="absolute top-1/2 left-0 w-[35vw] h-[35vw] bg-dark-plum/10 blur-[110px] rounded-full animate-glow-1"></div>
      </div>

      <div className="relative z-10 max-w-5xl space-y-16">
        
        {/* Part 1: Personality quotes (Section IX) */}
        <div>
          {/* Section Heading Tag */}
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-xs text-monster-red bg-monster-red/10 px-3 py-1 rounded border border-monster-red/20 font-bold tracking-wider">
              SECTION XIV
            </span>
            <span className="font-mono text-xs text-white/40 tracking-widest uppercase">
              PEER EVALUATIVE ARCHIVE
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-2 leading-none">
            PERSONALITY & <span className="text-monster-red">AURA</span>
          </h2>
          <p className="font-mono text-xs text-white/50 uppercase tracking-[0.2em] mb-8 border-b border-white/10 pb-4">
            TESTIMONIAL ARCHIVE • TEAM MEMBER COMMENTS & PRODUCER EVALS
          </p>

          {/* Testimonials Quote Slider */}
          <div className="glass-panel-heavy p-6 md:p-8 rounded-lg border border-white/10 relative overflow-hidden max-w-3xl">
            
            {/* Quote Icon watermark */}
            <div className="absolute right-6 top-6 text-monster-red/10 opacity-30 pointer-events-none select-none">
              <Quote className="w-24 h-24" />
            </div>

            <div className="space-y-4">
              <span className="font-mono text-[9px] text-monster-red font-bold uppercase tracking-widest block">
                YG EXECUTIVE LOG • HIGH CONFIDENCE FILE
              </span>

              {/* Transition quote container */}
              <div className="min-h-[110px] flex flex-col justify-center">
                <p className="font-serif italic text-lg md:text-xl text-white/90 leading-relaxed font-light">
                  "{activeQuote.quote}"
                </p>
              </div>

              {/* Author footer */}
              <div className="flex justify-between items-center pt-4 border-t border-white/5 text-xs font-mono">
                <div>
                  <span className="text-white font-bold block uppercase tracking-wider">{activeQuote.author}</span>
                  <span className="text-white/45 text-[10px] uppercase">{activeQuote.relationship}</span>
                </div>

                {/* Micro indicators */}
                <div className="flex gap-1">
                  {MEMBER_QUOTES.map((q) => (
                    <button
                      key={q.id}
                      onClick={() => setActiveQuoteId(q.id)}
                      className={`w-2.5 h-2.5 rounded-full border transition-all cursor-pointer ${
                        activeQuoteId === q.id 
                          ? "bg-monster-red border-monster-red scale-110" 
                          : "bg-transparent border-white/35 hover:border-white"
                      }`}
                    ></button>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Part 2: Fun Facts & Trivia (Section XVII) */}
        <div>
          {/* Section Heading Tag */}
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-xs text-monster-red bg-monster-red/10 px-3 py-1 rounded border border-monster-red/20 font-bold tracking-wider">
              SECTION XV
            </span>
            <span className="font-mono text-xs text-white/40 tracking-widest uppercase">
              AUTHENTIC PROFILE TRIVIA
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-2 leading-none">
            FUN FACTS & <span className="text-monster-red">TRIVIA</span>
          </h2>
          <p className="font-mono text-xs text-white/50 uppercase tracking-[0.2em] mb-8 border-b border-white/10 pb-4">
            VIRTUOSO HABITS • PRE-SHOW ROUTINES & FUN ANECDOTES
          </p>

          {/* Grid Layout Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FUN_FACTS.map((fact) => {
              return (
                <div 
                  key={fact.id}
                  className="p-5 rounded-lg border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] hover:border-monster-red/10 transition-all space-y-2 group"
                >
                  <div className="flex gap-3.5 items-start">
                    <div className="p-2 bg-monster-red/5 border border-monster-red/15 rounded text-monster-red shrink-0 group-hover:bg-monster-red group-hover:text-white transition-colors">
                      {fact.icon === "music_note" && <Sparkles className="w-4 h-4" />}
                      {fact.icon === "translate" && <Globe className="w-4 h-4" />}
                      {fact.icon === "psychology" && <Quote className="w-4 h-4" />}
                      {fact.icon === "hourglass_empty" && <Hourglass className="w-4 h-4" />}
                    </div>

                    <div>
                      <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider leading-none">
                        {fact.title}
                      </h4>
                      <p className="font-sans text-[11px] text-white/60 leading-relaxed mt-2">
                        {fact.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Part 3: Legacy & Impact (Section XVIII) */}
        <div className="pt-8">
          <div className="relative rounded-lg overflow-hidden border border-monster-red/20 bg-gradient-to-r from-monster-red/5 via-[#0b0305] to-transparent p-8 md:p-12 shadow-[0_0_50px_rgba(226,30,58,0.1)]">
            
            {/* Visual accent vertical bar */}
            <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-monster-red"></div>

            <div className="space-y-4 max-w-3xl">
              <span className="font-mono text-xs text-monster-red font-bold uppercase tracking-[0.3em] block">
                THE ULTIMATE MUSICAL LEGACY SUMMARY
              </span>

              <h2 className="font-display text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">
                THE SOVEREIGN <span className="glow-text-red">ALL-ROUNDER ALLURE</span>
              </h2>

              <p className="font-serif italic text-lg text-white/80 leading-relaxed">
                "Ahyeon is not just a performer; she sets the standard for 5th generation K-pop all-rounders. Her powerful vocal register, rapid multi-language rap flow, and outstanding stage presence represent the pinnacle of modern idol training."
              </p>

              <div className="pt-6 flex flex-col md:flex-row gap-6 md:items-center text-xs font-mono text-white/50">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-monster-red"></span>
                  <span>5th Generation Standard Setter</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-monster-red"></span>
                  <span>Active Anchor Designation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-monster-red"></span>
                  <span>YG Entertainment Core Flagship</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
