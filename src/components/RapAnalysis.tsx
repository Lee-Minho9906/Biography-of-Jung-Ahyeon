import { useState } from "react";
import { Zap, Volume2, Globe, Music, Flame, FastForward } from "lucide-react";
import { IMAGES } from "../data";

interface RapAnalysisProps {
  onExploreImage: (url: string, title: string, desc: string) => void;
}

export default function RapAnalysis({ onExploreImage }: RapAnalysisProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<"KOR" | "ENG" | "CHN">("KOR");
  const [cadenceSpeed, setCadenceSpeed] = useState<"Slow" | "Normal" | "Fast" | "Swift">("Normal");

  const rapVerses = {
    KOR: {
      title: "CLIK CLAK Verses",
      lyrics: "응, 내 가방 다 넣을 밴이 필요해, 항상 처음이지 절대 마지막이 아니야 (현금-현금). 내 여자애들이랑 여기 있어, 우리가 등장하면 크게 해, 무슨 말인지 알지 (짜-징). 어느 게 더 좋아 보이는지 내가 말하면, 너는 둘 다라고 해 (둘 다), 둘 다 (둘 다). 나는 어떤 각도에서든 섹시해, 그 포즈 취해 (포즈), 포즈 (포즈, 응).",
      analysis: "High syllables placement matching authentic old-school boom bap rhythms."
    },
    ENG: {
      title: "CLIK CLAK English Translate",
      lyrics: "Yeah, I need a van to hold all my bags, always the first and never the last (cash-cash). Here with my girls, we step on the scene, we do it big, you know what I mean (cha-ching). If I say which one looks better, you say both (both), both (both). I'm bad from any angle, hit that pose (pose), pose (pose, yeah).",
      analysis: "Highly optimized English word placement, avoiding heavy plosives that break breath endurance."
    },
    CHN: {
      title: "CLIK CLAK Mandarine Edition",
      lyrics: "是的，我需要一辆面包车来装下我所有的包，总是第一个，永远不是最后一个（钞票声）。和我的女孩们在一起，我们登场亮相，尽情展示，你明白我的意思（钞票声）。如果我问哪个更好看，你会说两个都好（两个都好），两个都好（两个都好）。我从任何角度看都很酷，摆好姿势（姿势），姿势（姿势，没错）。",
      analysis: "Leverages detailed pitch registers of mandarin tones to deliver highly percussive vocal attacks."
    }
  };

  const speedMetrics = {
    Slow: { syllables: "5.2 syllables/sec", metronomeMs: 140, barW: "w-1/3" },
    Normal: { syllables: "7.1 syllables/sec", metronomeMs: 90, barW: "w-2/3" },
    Fast: { syllables: "8.4 syllables/sec", metronomeMs: 60, barW: "w-4/5" },
    Swift: { syllables: "9.8 syllables/sec", metronomeMs: 40, barW: "w-full" }
  };

  return (
    <section 
      id="rap-analysis"
      className="relative min-h-screen flex flex-col justify-center bg-black text-white px-6 md:px-16 lg:pl-80 py-24 border-t border-white/5"
    >
      {/* Visual neon light leaks */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-10 w-[35vw] h-[35vw] bg-electric-crimson/5 rounded-full blur-[110px] animate-glow-1"></div>
      </div>

      <div className="relative z-10 max-w-5xl">
        {/* Section Heading Tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-monster-red bg-monster-red/10 px-3 py-1 rounded border border-monster-red/20 font-bold tracking-wider">
            SECTION VII
          </span>
          <span className="font-mono text-xs text-white/40 tracking-widest uppercase">
            Rhythmic Flow Mechanics
          </span>
        </div>

        <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-2 leading-none">
          RAP <span className="text-monster-red">ANALYSIS</span>
        </h2>
        <p className="font-mono text-xs text-white/50 uppercase tracking-[0.2em] mb-12 border-b border-white/10 pb-4">
          ELASTIC CADENCE TEMPO • TRILINGUAL HIP-HOP INTEGRITY
        </p>

        {/* Core Showcase Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Neon HipHop Lyric Chamber: Left 7 Columns */}
          <div className="lg:col-span-7 glass-panel p-6 rounded-lg border border-monster-red/10 relative overflow-hidden">
            
            {/* Visual Neon Border Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-monster-red via-electric-crimson to-transparent shadow-[0_0_12px_#E21E3A]"></div>

            {/* Language Selection Header */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
              <span className="font-mono text-[9px] text-[#ffffff] uppercase font-bold tracking-wider">
                TRANSLATION MATRIX DESIGNS
              </span>
              
              <div className="flex bg-white/5 p-1 rounded gap-1">
                {(["KOR", "ENG", "CHN"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`px-3 py-1 font-mono text-[9px] rounded transition-all cursor-pointer ${
                      selectedLanguage === lang
                        ? "bg-monster-red text-white font-bold"
                        : "text-white/40 hover:text-white"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Core Rap Lyrics Segment */}
            <div className="space-y-4">
              <span className="font-mono text-[8px] text-monster-red uppercase block tracking-wider font-bold">
                TRANSCRIPTION SELECTION:
              </span>
              
              <h3 className="font-display text-xl font-bold uppercase text-white tracking-wide">
                {rapVerses[selectedLanguage].title}
              </h3>

              {/* Lyrics Block */}
              <div className="p-4 bg-black/40 border border-white/5 rounded-lg text-white font-sans leading-relaxed relative">
                <p className="text-sm italic text-white/90">
                  "{rapVerses[selectedLanguage].lyrics}"
                </p>
                
                <span className="absolute bottom-2 right-2 text-[8px] font-mono text-white/20 select-none">
                  CLIK_CLAK.WAV
                </span>
              </div>

              {/* Dynamic analysis note */}
              <div className="p-3.5 bg-white/[0.01] border-l-2 border-monster-red text-xs font-mono text-white/60">
                <span className="text-monster-red font-bold uppercase block text-[9px] mb-0.5">FLOW EVALUATION NOTE</span>
                {rapVerses[selectedLanguage].analysis}
              </div>
            </div>

            {/* Cadence Speed Switch Controls */}
            <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-mono text-[8px] text-[#ffffff] uppercase font-bold tracking-wider">
                  FLOW VELOCITY CONTROLLER:
                </span>
                
                <div className="flex gap-1.5 bg-white/5 p-1 rounded text-[9px] font-mono">
                  {(["Slow", "Normal", "Fast", "Swift"] as const).map((spd) => (
                    <button
                      key={spd}
                      onClick={() => setCadenceSpeed(spd)}
                      className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                        cadenceSpeed === spd
                          ? "bg-monster-red text-white font-bold"
                          : "text-white/40 hover:text-white"
                      }`}
                    >
                      {spd}
                    </button>
                  ))}
                </div>
              </div>

              {/* METRONOME CADENCE VISUALIZER */}
              <div className="p-4 bg-black/30 border border-white/5 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-sans text-[11px] text-white/50 uppercase tracking-widest flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-monster-red animate-pulse" />
                    Syllabic Speed Cadence
                  </span>
                  
                  <span className="font-mono text-xs font-black text-monster-red uppercase">
                    {speedMetrics[cadenceSpeed].syllables}
                  </span>
                </div>

                {/* Meter Fill Channel */}
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-monster-red to-electric-crimson ${speedMetrics[cadenceSpeed].barW} transition-all duration-300 shadow-[0_0_8px_rgba(226,30,58,0.5)]`}
                  ></div>
                </div>

                <div className="mt-2.5 font-mono text-[8px] text-white/30 uppercase tracking-[0.2em] leading-relaxed">
                  SYSTEM METRIC: Dialing up speed sets the syllables counter to high density. Ahyeon retains high breath support up to 9.8 syllables without metric loss.
                </div>
              </div>

            </div>

          </div>

          {/* Gritty Neon Photo Cover: Right 5 Columns */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Rap stage visuals */}
            <div 
              onClick={() => onExploreImage(IMAGES.rapStage, "Ahyeon Rap Stage Performance", "Visual capturing aggressive stage focus and dynamic posturing.")}
              className="relative group border border-white/10 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.6)] cursor-pointer"
            >
              <img
                src={IMAGES.rapStage}
                alt="Ahyeon hip hop performing"
                referrerPolicy="no-referrer"
                className="w-full h-[280px] object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>

              <div className="absolute bottom-3 left-3 bg-black/8 w-[90%] p-2 rounded backdrop-blur border border-white/5 text-[10px] font-mono leading-none">
                <div className="flex justify-between items-center text-xs">
                  <div>
                    <span className="text-[8px] text-monster-red uppercase block font-bold">STRETCH TARGET FILE</span>
                    <span className="text-white/90">CLIK_CLAK SHOWROOM</span>
                  </div>
                  <span className="text-[10px] text-monster-red font-bold">ZOOM</span>
                </div>
              </div>
            </div>

            {/* Performance metrics list */}
            <div className="glass-panel p-5 rounded-lg border border-white/5 space-y-4">
              <span className="font-mono text-[8px] text-monster-red block tracking-widest font-bold uppercase">
                AEROBIC PROFILING & FLOW SCHEMATICS
              </span>

              <div className="space-y-3 font-sans text-xs">
                <div className="flex justify-between items-center py-1 border-b border-white/[0.04]">
                  <span className="text-white/50">Lyrical Accent Attack</span>
                  <span className="font-mono font-bold text-white uppercase font-bold">95.4% Precision</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/[0.04]">
                  <span className="text-white/50">Breath Rest Intervals</span>
                  <span className="font-mono font-bold text-white uppercase font-bold">4.2 bars (Standard R&B)</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/[0.04]">
                  <span className="text-white/50">Multi-tonal Cadence</span>
                  <span className="font-mono font-bold text-white uppercase font-bold">Elastic Sync 128BPM</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
