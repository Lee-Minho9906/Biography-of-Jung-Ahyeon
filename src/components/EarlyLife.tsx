import { MapPin, Sparkles, BookOpen, Music, Crop } from "lucide-react";
import { EARLY_LIFE_PEAKS } from "../data";

interface EarlyLifeProps {
  onExploreImage: (url: string, title: string, desc: string) => void;
}

export default function EarlyLife({ onExploreImage }: EarlyLifeProps) {
  return (
    <section 
      id="early-life"
      className="relative min-h-screen flex flex-col justify-center bg-black text-white px-6 md:px-16 lg:pl-80 py-24 border-t border-white/5"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-dark-plum/10 rounded-full blur-[100px] animate-glow-2"></div>
      </div>

      <div className="relative z-10 max-w-5xl">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-monster-red bg-monster-red/10 px-3 py-1 rounded border border-monster-red/20 font-bold tracking-wider">
            SECTION III
          </span>
          <span className="font-mono text-xs text-white/40 tracking-widest uppercase">
            EARLY CHRONOLOGY & ROOTS
          </span>
        </div>

        <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-2 leading-none">
          EARLY LIFE & <span className="text-monster-red">BEGINNINGS</span>
        </h2>
        <p className="font-mono text-xs text-white/50 uppercase tracking-[0.2em] mb-12 border-b border-white/10 pb-4">
          CHUNCHEON LAKESIDE MELODIES • CONVERTING INNATE PASSION TO DISCIPLINE
        </p>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Narrative Content: Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-monster-red">
              <MapPin className="w-5 h-5" />
              <span className="font-mono text-xs tracking-widest uppercase font-bold">Origin: Chuncheon, Gangwon-do</span>
            </div>

            <p className="font-serif italic text-lg text-white/90 leading-relaxed">
              Before taking center stage inside the futuristic halls of YG Entertainment, Ahyeon's relationship with music was forged alongside the quiet lakeside breezes of Chuncheon.
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-lg hover:border-monster-red/20 transition-all">
                <div className="flex gap-3">
                  <Music className="w-5 h-5 text-monster-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans font-bold text-sm tracking-wide text-white uppercase">Innate Musical Memory</h4>
                    <p className="font-sans text-xs text-white/60 mt-1 leading-relaxed">
                      At age four, Ahyeon stunned her family by singing back commercial jingles with absolute pitch, memorizing complex vocal intervals after hearing them once.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-lg hover:border-monster-red/20 transition-all">
                <div className="flex gap-3">
                  <BookOpen className="w-5 h-5 text-monster-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans font-bold text-sm tracking-wide text-white uppercase">Schooling Foundations</h4>
                    <p className="font-sans text-xs text-white/60 mt-1 leading-relaxed">
                      Attended Sungrim Elementary School followed by Daeryong Middle School. Peers remembered her as a lively, modest, extremely energetic student who excelled in language studies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-lg hover:border-monster-red/20 transition-all">
                <div className="flex gap-3">
                  <Sparkles className="w-5 h-5 text-monster-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans font-bold text-sm tracking-wide text-white uppercase">Ara Dance Academy</h4>
                    <p className="font-sans text-xs text-white/60 mt-1 leading-relaxed">
                      Formal training commenced at Chuncheon's esteemed Ara Dance Academy. There, she solidified her stage presence, physical balance, and muscle retention control.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Polaroid Scrapbook Stack: Right Column */}
          <div className="lg:col-span-6 flex flex-col justify-center items-center py-12 relative min-h-[460px]">
            
            {/* Scrapbook Backdrop Outline Grid */}
            <div className="absolute inset-0 border border-white/[0.03] grid grid-cols-4 grid-rows-4 pointer-events-none rounded">
              <div className="border-r border-b border-white/[0.02]"></div>
              <div className="border-r border-b border-white/[0.02]"></div>
              <div className="border-r border-b border-white/[0.02]"></div>
              <div className="border-b border-white/[0.02]"></div>
              <div className="border-r border-b border-white/[0.02]"></div>
              <div className="border-r border-b border-white/[0.02]"></div>
              <div className="border-r border-b border-white/[0.02]"></div>
              <div className="border-b border-white/[0.02]"></div>
            </div>

            {/* Scrapbook Polaroid Pieces */}
            <div className="relative w-full max-w-[420px] h-[340px] flex items-center justify-center">
              
              {/* Paper Piece 1: Under Layer Left */}
              <div 
                onClick={() => onExploreImage(EARLY_LIFE_PEAKS[0].imageUrl || "", EARLY_LIFE_PEAKS[0].title, EARLY_LIFE_PEAKS[0].description)}
                className="absolute left-2 top-0 w-48 bg-[#fdfdfd] text-slate-800 p-3 pt-3 pb-8 rounded-sm shadow-2xl origin-bottom-left rotate-[-8deg] hover:rotate-0 hover:-translate-y-4 hover:z-30 transition-all duration-300 cursor-pointer border border-slate-200 group"
              >
                <div className="w-full h-32 bg-slate-100 overflow-hidden relative">
                  <img
                    src={EARLY_LIFE_PEAKS[0].imageUrl}
                    alt={EARLY_LIFE_PEAKS[0].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter sepia-10 group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-monster-red/5 mix-blend-color"></div>
                </div>
                <div className="mt-3 font-mono text-[9px] uppercase tracking-wider text-slate-400">
                  {EARLY_LIFE_PEAKS[0].year}
                </div>
                <h4 className="font-display font-black text-xs text-slate-900 mt-1 uppercase leading-none">
                  {EARLY_LIFE_PEAKS[0].title}
                </h4>
                <p className="font-sans text-[9px] text-slate-600 leading-tight mt-1 truncate">
                  {EARLY_LIFE_PEAKS[0].subtitle}
                </p>
              </div>

              {/* Paper Piece 2: Under Layer Right */}
              <div 
                onClick={() => onExploreImage(EARLY_LIFE_PEAKS[1].imageUrl || "", EARLY_LIFE_PEAKS[1].title, EARLY_LIFE_PEAKS[1].description)}
                className="absolute right-2 top-6 w-48 bg-[#fafafa] text-slate-800 p-3 pt-3 pb-8 rounded-sm shadow-2xl origin-bottom-right rotate-[6deg] hover:rotate-0 hover:-translate-y-4 hover:z-30 transition-all duration-300 cursor-pointer border border-slate-200 group"
              >
                <div className="w-full h-32 bg-slate-100 overflow-hidden relative">
                  <img
                    src={EARLY_LIFE_PEAKS[1].imageUrl}
                    alt={EARLY_LIFE_PEAKS[1].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter sepia-10 group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-dark-plum/10 mix-blend-color"></div>
                </div>
                <div className="mt-3 font-mono text-[9px] uppercase tracking-wider text-slate-400">
                  {EARLY_LIFE_PEAKS[1].year}
                </div>
                <h4 className="font-display font-black text-xs text-slate-900 mt-1 uppercase leading-none">
                  {EARLY_LIFE_PEAKS[1].title}
                </h4>
                <p className="font-sans text-[9px] text-slate-600 leading-tight mt-1 truncate">
                  {EARLY_LIFE_PEAKS[1].subtitle}
                </p>
              </div>

              {/* Paper Piece 3: Main On Top Overlay */}
              <div 
                onClick={() => onExploreImage(EARLY_LIFE_PEAKS[2].imageUrl || "", EARLY_LIFE_PEAKS[2].title, EARLY_LIFE_PEAKS[2].description)}
                className="absolute bottom-0 w-52 bg-white text-slate-800 p-3.5 pt-3.5 pb-10 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-25 hover:scale-105 hover:-translate-y-2 hover:z-30 transition-all duration-300 cursor-pointer border border-slate-300 group"
              >
                <div className="w-full h-36 bg-slate-200 overflow-hidden">
                  <img
                    src={EARLY_LIFE_PEAKS[2].imageUrl}
                    alt={EARLY_LIFE_PEAKS[2].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="mt-3 font-mono text-[9px] uppercase tracking-wider text-monster-red font-bold">
                  {EARLY_LIFE_PEAKS[2].year}
                </div>
                <h4 className="font-display font-black text-sm text-slate-900 mt-0.5 uppercase leading-none">
                  {EARLY_LIFE_PEAKS[2].title}
                </h4>
                <p className="font-sans text-[10px] text-slate-500 leading-tight mt-1">
                  {EARLY_LIFE_PEAKS[2].subtitle}
                </p>
              </div>

            </div>

            {/* Hint stamp */}
            <div className="font-mono text-[9px] text-white/30 tracking-widest uppercase mt-4">
              [CLICK COVERS TO REVEAL FULL PHOTO SCHEMAS]
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
