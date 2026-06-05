import { useState } from "react";
import { BABYMONSTER_JOURNEY } from "../data";
import { Star, ShieldAlert, Zap, Compass, CheckCircle } from "lucide-react";

interface JourneyProps {
  onExploreImage: (url: string, title: string, desc: string) => void;
}

export default function Journey({ onExploreImage }: JourneyProps) {
  const [selectedEraIndex, setSelectedEraIndex] = useState(2); // default to SHEESH debut!
  const selectedEra = BABYMONSTER_JOURNEY[selectedEraIndex];

  return (
    <section 
      id="journey"
      className="relative min-h-screen flex flex-col justify-center bg-black text-white px-6 md:px-16 lg:pl-80 py-24 border-t border-white/5"
    >
      <div className="relative z-10 max-w-5xl">
        {/* Section Heading Tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-monster-red bg-monster-red/10 px-3 py-1 rounded border border-monster-red/20 font-bold tracking-wider">
            SECTION V
          </span>
          <span className="font-mono text-xs text-white/40 tracking-widest uppercase">
            GROUP DEBUT HISTORICAL ARCHIVE
          </span>
        </div>

        <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-2 leading-none">
          BABYMONSTER <span className="text-monster-red">JOURNEY</span>
        </h2>
        <p className="font-mono text-xs text-white/50 uppercase tracking-[0.2em] mb-12 border-b border-white/10 pb-4">
          FROM YG SURVIVAL REVEAL TO WORLD TOUR HEGEMONY
        </p>

        {/* Timeline Era Quick Buttons Segment */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-10">
          {BABYMONSTER_JOURNEY.map((item, idx) => {
            const isActive = selectedEraIndex === idx;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedEraIndex(idx)}
                className={`flex-1 min-w-[130px] font-mono text-[10px] uppercase py-3.5 px-4 rounded border text-center transition-all cursor-pointer ${
                  isActive
                    ? "bg-monster-red border-monster-red text-white font-bold drop-shadow-[0_0_15px_rgba(226,30,58,0.35)]"
                    : "bg-white/[0.01] border-white/5 text-white/40 hover:border-white/20 hover:text-white"
                }`}
              >
                <span className="block text-[8px] opacity-60 mb-0.5">{item.period}</span>
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Era Spotlight Grid Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#070707] border border-white/5 p-6 md:p-8 rounded-lg">
          
          {/* Era Graphic Coverage: Left 5 columns */}
          <div className="lg:col-span-5 relative group">
            <div className="overflow-hidden rounded border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
              <img
                src={selectedEra.imageUrl}
                alt={selectedEra.title}
                referrerPolicy="no-referrer"
                className="w-full h-[280px] md:h-[340px] object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-90 group-hover:saturate-100"
              />
            </div>
            
            {/* Visual Action floating tag */}
            <div className="absolute top-3 left-3 bg-monster-red px-2 py-0.5 font-mono text-[8px] rounded uppercase font-bold tracking-widest shadow-lg">
              {selectedEra.period} ERA MATCH
            </div>

            <div className="absolute bottom-3 right-3">
              <button
                onClick={() => onExploreImage(selectedEra.imageUrl, selectedEra.title, selectedEra.headline)}
                className="p-1.5 px-3 bg-black/90 backdrop-blur border border-white/10 text-[9px] font-mono uppercase tracking-widest hover:bg-monster-red transition-all rounded"
              >
                EXPLORE IMAGE SOURCE
              </button>
            </div>
          </div>

          {/* Era Narrative Details: Right 7 columns */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="font-mono text-xs text-monster-red uppercase font-semibold tracking-widest">
                {selectedEra.period} EPISODE FOCUS
              </span>
              
              <h3 className="font-display text-2xl md:text-3xl font-black text-white uppercase tracking-wide mt-1">
                {selectedEra.headline}
              </h3>
            </div>

            <p className="font-serif italic text-base text-white/80 leading-relaxed">
              "{selectedEra.description}"
            </p>

            {/* Core Achievement Highlights Bullet block */}
            <div className="space-y-3 pt-4 border-t border-white/5">
              <span className="font-mono text-[9px] text-white/35 uppercase tracking-wider block font-bold">
                CRITICAL MILESTONES:
              </span>
              
              <ul className="space-y-2">
                {selectedEra.details.map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-monster-red shrink-0" />
                    <span className="font-mono text-xs text-white/80 uppercase tracking-wide">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Custom Warning highlight specifically regarding physical hiatus recovery */}
            {selectedEraIndex === 1 && (
              <div className="p-3 bg-dark-plum/30 border border-dark-plum/60 text-white/80 text-xs rounded font-sans leading-relaxed flex gap-3">
                <ShieldAlert className="w-5 h-5 text-monster-red shrink-0" />
                <div>
                  Our medical file notes indicate direct oversight from agency staff allowed Ahyeon to recover peacefully without standard trainee evaluation pressures, culminating in her powerhouse delivery upon return.
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
