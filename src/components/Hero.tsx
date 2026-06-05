import { Compass, Music, Disc, ArrowDown, Sparkles } from "lucide-react";
import { IMAGES } from "../data";

interface HeroProps {
  onScrollDown: () => void;
  onExploreImage: (url: string, title: string, desc: string) => void;
}

export default function Hero({ onScrollDown, onExploreImage }: HeroProps) {
  const profileRoles = [
    { label: "Vocal Power", val: "Main Vocal", desc: "Legendary belts & relative pitch" },
    { label: "Hip Hop Flow", val: "Rapper", desc: "Elastic rap delivery in 3 languages" },
    { label: "Stage Magnet", val: "Center Anchor", desc: "Supreme visual presence & gaze" },
    { label: "Precision Line", val: "Lead Dancer", desc: "High kinetic control & sync" }
  ];

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-black text-white px-6 md:px-16 lg:pl-80 py-24"
    >
      {/* Background Layering */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Cinematic Red Radial Blast */}
        <div className="absolute top-1/4 right-0 w-[45vw] h-[45vw] rounded-full bg-monster-red/10 blur-[140px] animate-glow-1"></div>
        {/* Plum bottom-left shadow base */}
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] rounded-full bg-dark-plum/15 blur-[120px] animate-glow-2"></div>
        {/* Overlay texture scanlines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.005),rgba(0,0,255,0.015))] bg-[length:100%_4px,6px_100%]"></div>
      </div>

      {/* Top Tiny Lead Header */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-8 md:mt-2">
        <div>
          <span className="font-mono text-[9px] tracking-[0.5em] text-monster-red block uppercase font-bold">
            ARTIST PROFILE [01]
          </span>
          <span className="font-mono text-[10px] text-white/40 tracking-[0.2em] font-light">
            AHYEON (정아현) • THE ULTIMATE FIFTH-GENERATION ACE
          </span>
        </div>

        <div className="flex items-center gap-3 backdrop-blur-md bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
          <Music className="w-4 h-4 text-monster-red animate-spin duration-3000" />
          <span className="font-mono text-[9px] uppercase tracking-widest text-white/70">
            Playing: "Dangerously" Vocal Cover
          </span>
        </div>
      </div>

      {/* Central Portrait & Huge Typography Collision Grid */}
      <div className="relative z-10 my-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Large Typography block: Left/Center */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="font-mono text-xs md:text-sm text-monster-red tracking-[0.5em] block font-extrabold uppercase">
            YG ENTERTAINMENT FLAGSHIP
          </span>
          
          <h1 className="font-display text-5xl md:text-8xl font-black tracking-tight leading-none text-white my-3 select-none">
            JUNG
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-monster-red via-electric-crimson to-transparent glow-text-red">
              AHYEON
            </span>
          </h1>

          <p className="font-serif italic text-lg md:text-2xl text-white/70 font-light max-w-xl leading-relaxed">
            "A natural prodigy whose absolute pitch, trilingual lyrical delivery, and aggressive stage energy set the global standard for 5th Generation K-Pop center anchors."
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => onExploreImage(IMAGES.hero, "Ahyeon Era Portrait", "Official high-concept promotional series showcasing pure charismatic presence.")}
              className="px-6 py-3 bg-monster-red text-white uppercase font-mono text-xs tracking-widest hover:bg-electric-crimson transition-all cursor-pointer rounded glow-border-red flex items-center gap-2"
            >
              <Compass className="w-4 h-4" />
              VIEW FULL IMAGE PORTRAIT
            </button>
            <button
              onClick={onScrollDown}
              className="px-6 py-3 border border-white/20 hover:border-monster-red hover:bg-white/5 text-white uppercase font-mono text-xs tracking-widest transition-all rounded cursor-pointer"
            >
              EXPLORE BIOGRAPHY
            </button>
          </div>
        </div>

        {/* Right Side Image Portal Frame with Layered Elements */}
        <div className="lg:col-span-5 relative flex justify-center group">
          {/* Subtle frame outlines */}
          <div className="absolute inset-x-0 -inset-y-3 border border-white/5 scale-105 pointer-events-none transition-all group-hover:border-monster-red/20"></div>
          <div className="absolute inset-y-0 -inset-x-3 border border-white/5 scale-105 pointer-events-none transition-all group-hover:border-monster-red/20"></div>
          
          {/* Main Visual Display */}
          <div className="relative w-80 md:w-96 rounded-lg overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(226,30,58,0.15)] transition-all duration-500 hover:scale-[1.02] hover:border-monster-red/50">
            <img
              src={IMAGES.hero}
              alt="Jung Ahyeon Premium Cinematic Look"
              referrerPolicy="no-referrer"
              className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Visual Glass Tag */}
            <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-black/60 border border-white/10 p-3 rounded">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-mono text-[9px] text-monster-red block uppercase font-bold">CONCEPT SHOT 01</span>
                  <span className="font-sans text-[11px] text-white/80">Concept Reveal Promo Look</span>
                </div>
                <button
                  onClick={() => onExploreImage(IMAGES.hero, "Ahyeon Concept Reveal", "YG official portrait release series.")}
                  className="p-1 px-2.5 bg-white/10 hover:bg-monster-red rounded text-[10px] font-mono tracking-wider transition-colors"
                >
                  ZOOM
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Roles Carousel Blocks: Bottom */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
        {profileRoles.map((role, idx) => (
          <div 
            key={idx}
            className="p-4 rounded border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors"
          >
            <span className="font-mono text-[8px] text-monster-red uppercase tracking-[0.2em] font-semibold">
              {role.label}
            </span>
            <h3 className="font-display text-lg font-extrabold text-white tracking-wide uppercase mt-1 leading-none">
              {role.val}
            </h3>
            <p className="font-sans text-xs text-white/50 mt-1 leading-tight">
              {role.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Floating Scroll Indicator */}
      <div 
        onClick={onScrollDown}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer select-none opacity-60 hover:opacity-100 transition-opacity"
      >
        <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-white/30">
          Scroll to explore
        </span>
        <ArrowDown className="w-4 h-4 text-monster-red animate-float" />
      </div>
    </section>
  );
}
