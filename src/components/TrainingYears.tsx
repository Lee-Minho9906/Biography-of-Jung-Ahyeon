import { useState } from "react";
import { TRAINING_YEARS_MILESTONES } from "../data";
import { Award, Compass, Volume2, Star, ShieldCheck } from "lucide-react";

interface TrainingYearsProps {
  onExploreImage: (url: string, title: string, desc: string) => void;
}

export default function TrainingYears({ onExploreImage }: TrainingYearsProps) {
  const [selectedMilestone, setSelectedMilestone] = useState(TRAINING_YEARS_MILESTONES[0]);

  return (
    <section 
      id="training-years"
      className="relative min-h-screen flex flex-col justify-center bg-black/95 text-white px-6 md:px-16 lg:pl-80 py-24 border-t border-white/5"
    >
      <div className="relative z-10 max-w-5xl">
        {/* Section Heading Tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-monster-red bg-monster-red/10 px-3 py-1 rounded border border-monster-red/20 font-bold tracking-wider">
            SECTION IV
          </span>
          <span className="font-mono text-xs text-white/40 tracking-widest uppercase">
            TRAINING CHRONICLES & DEV
          </span>
        </div>

        <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-2 leading-none">
          TRAINING <span className="text-monster-red">YEARS</span>
        </h2>
        <p className="font-mono text-xs text-white/50 uppercase tracking-[0.2em] mb-12 border-b border-white/10 pb-4">
          FORGING THE ULTIMATE ACE • MONTHLY EVALUATION SURVIVAL
        </p>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          
          {/* Interactive Timeline Node Line: Left */}
          <div className="lg:col-span-5 relative border-l-2 border-white/10 ml-4 pl-8 py-4 space-y-12">
            
            {/* Pulsing indicator loop */}
            <div className="absolute top-0 -left-[11px] w-5 h-5 bg-monster-red/30 border-2 border-monster-red rounded-full animate-ping pointer-events-none"></div>

            {TRAINING_YEARS_MILESTONES.map((node) => {
              const isActive = selectedMilestone.id === node.id;
              return (
                <div 
                  key={node.id} 
                  onClick={() => setSelectedMilestone(node)}
                  className="relative cursor-pointer group"
                >
                  {/* Timeline Point Bullet */}
                  <span 
                    className={`absolute -left-[41px] top-1 w-4 h-4 rounded-full border-2 transition-all ${
                      isActive 
                        ? "bg-monster-red border-monster-red scale-125 drop-shadow-[0_0_8px_rgba(226,30,58,0.8)]" 
                        : "bg-black border-white/40 group-hover:border-monster-red group-hover:scale-110"
                    }`}
                  ></span>

                  {/* Date Heading */}
                  <span className={`font-mono text-xs tracking-widest block font-bold transition-colors ${
                    isActive ? "text-monster-red" : "text-white/40 group-hover:text-white"
                  }`}>
                    {node.year}
                  </span>

                  {/* Title node */}
                  <h3 className={`font-display text-lg tracking-wide uppercase transition-colors ${
                    isActive ? "text-white font-black" : "text-white/70 group-hover:text-white"
                  }`}>
                    {node.title}
                  </h3>

                  {/* Mini summary */}
                  <p className="font-sans text-xs text-white/50 mt-1 line-clamp-1 truncate block group-hover:text-white/80 transition-colors">
                    {node.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Interactive Node Explanation Detail Display Box: Right */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 md:p-8 rounded-lg border border-white/10 hover:border-monster-red/20 transition-all shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
              
              {/* Year large float label */}
              <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-4">
                <div>
                  <span className="font-mono text-[9px] text-monster-red uppercase block tracking-widest font-bold">
                    Trainee Progress Index
                  </span>
                  <h4 className="font-display text-2xl font-black uppercase text-white tracking-wider">
                    {selectedMilestone.title}
                  </h4>
                  <span className="font-mono text-xs text-white/40">{selectedMilestone.subtitle}</span>
                </div>

                <div className="font-display text-5xl font-black text-monster-red/20 leading-none">
                  {selectedMilestone.year}
                </div>
              </div>

              {/* Photo representation with prompt fallback if clicked */}
              {selectedMilestone.imageUrl && (
                <div className="relative group rounded overflow-hidden border border-white/5 mb-6">
                  <div className="absolute inset-0 bg-monster-red/10 mix-blend-multiply opacity-20 pointer-events-none"></div>
                  <img
                    src={selectedMilestone.imageUrl}
                    alt={selectedMilestone.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-44 object-cover filter brightness-95 hover:brightness-100 transition-all duration-300"
                  />
                  <div className="absolute bottom-3 right-3">
                    <button
                      onClick={() => onExploreImage(selectedMilestone.imageUrl || "", selectedMilestone.title, selectedMilestone.description)}
                      className="px-3 py-1.5 bg-black/80 hover:bg-monster-red backdrop-blur text-[10px] font-mono tracking-widest uppercase text-white rounded transition-colors"
                    >
                      ZOOM VIEW
                    </button>
                  </div>
                </div>
              )}

              {/* Description explanation text */}
              <p className="font-serif italic text-base text-white/85 leading-relaxed">
                "{selectedMilestone.description}"
              </p>

              {/* Simulated evaluation chart stats */}
              <div className="grid grid-cols-3 gap-2 mt-8 pt-6 border-t border-white/5">
                <div className="p-3 bg-white/[0.01] border border-white/5 rounded">
                  <span className="font-mono text-[8px] text-white/30 block uppercase font-bold">Vocal Rank</span>
                  <span className="font-display text-sm font-black text-white">CLASS A (#1)</span>
                  <div className="w-full bg-white/5 h-1 rounded-full mt-1.5 overflow-hidden">
                    <div className="h-full bg-monster-red w-[98%]"></div>
                  </div>
                </div>

                <div className="p-3 bg-white/[0.01] border border-white/5 rounded">
                  <span className="font-mono text-[8px] text-white/30 block uppercase font-bold">Choreography</span>
                  <span className="font-display text-sm font-black text-white">96% Accuracy</span>
                  <div className="w-full bg-white/5 h-1 rounded-full mt-1.5 overflow-hidden">
                    <div className="h-full bg-monster-red w-[96%]"></div>
                  </div>
                </div>

                <div className="p-3 bg-white/[0.01] border border-white/5 rounded">
                  <span className="font-mono text-[8px] text-white/30 block uppercase font-bold">Rhythm Drill</span>
                  <span className="font-display text-sm font-black text-white">Class A+ Elite</span>
                  <div className="w-full bg-white/5 h-1 rounded-full mt-1.5 overflow-hidden">
                    <div className="h-full bg-monster-red w-[97%]"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
