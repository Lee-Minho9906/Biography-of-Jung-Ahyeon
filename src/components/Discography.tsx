import { useState } from "react";
import { DISCOGRAPHY_ITEMS } from "../data";
import { Disc, PlayCircle, Music, Star, Flame } from "lucide-react";

interface DiscographyProps {
  onExploreImage: (url: string, title: string, desc: string) => void;
}

export default function Discography({ onExploreImage }: DiscographyProps) {
  const [activeAlbumId, setActiveAlbumId] = useState(DISCOGRAPHY_ITEMS[0].id);
  const [vinylOnTop, setVinylOnTop] = useState(false);

  const activeAlbum = DISCOGRAPHY_ITEMS.find((item) => item.id === activeAlbumId) || DISCOGRAPHY_ITEMS[0];

  return (
    <section 
      id="discography"
      className="relative min-h-screen flex flex-col justify-center bg-black/95 text-white px-6 md:px-16 lg:pl-80 py-24 border-t border-white/5"
    >
      <div className="relative z-10 max-w-5xl">
        {/* Section Heading Tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-monster-red bg-monster-red/10 px-3 py-1 rounded border border-monster-red/20 font-bold tracking-wider">
            SECTION X
          </span>
          <span className="font-mono text-xs text-white/40 tracking-widest uppercase">
            SONIC CHRONICLE RELEASES
          </span>
        </div>

        <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-2 leading-none">
          OFFICIAL <span className="text-monster-red">DISCOGRAPHY</span>
        </h2>
        <p className="font-mono text-xs text-white/50 uppercase tracking-[0.2em] mb-12 border-b border-white/10 pb-4">
          STUDIO RELEASES • INTERACTIVE VIRTUAL VINYL SELECTION
        </p>

        {/* Layout Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Sleeve list */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-[8px] text-monster-red block tracking-widest font-bold uppercase">
              SELECT ALBUM RELEASE
            </span>

            {/* List trigger buttons */}
            <div className="space-y-3">
              {DISCOGRAPHY_ITEMS.map((album) => {
                const isActive = activeAlbumId === album.id;
                return (
                  <button
                    key={album.id}
                    onClick={() => setActiveAlbumId(album.id)}
                    className={`w-full text-left p-4 rounded border transition-all flex items-center gap-4 cursor-pointer relative overflow-hidden group ${
                      isActive
                        ? "bg-monster-red/10 border-monster-red shadow-[0_0_20px_rgba(226,30,58,0.15)]"
                        : "bg-white/[0.01] border-white/5 text-white/50 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {/* Visual miniature cover */}
                    <div className="w-12 h-12 rounded overflow-hidden shrink-0 border border-white/10">
                      <img
                        src={album.imageUrl}
                        alt={album.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="truncate">
                      <span className="font-mono text-[8px] opacity-60 uppercase tracking-widest block leading-none">
                        {album.type} • {album.year}
                      </span>
                      <h3 className="font-display font-bold text-sm tracking-wide text-white uppercase mt-1 leading-tight">
                        {album.title}
                      </h3>
                      <p className="font-mono text-[9px] text-white/30 truncate max-w-[200px]">
                        Vibe: {album.vibe}
                      </p>
                    </div>

                    {/* Active index arrow block */}
                    {isActive && (
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-monster-red rounded-full drop-shadow-[0_0_8px_#E21E3A]"></span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side: Virtual Vinyl Player Stage */}
          <div className="lg:col-span-7 glass-panel p-6 md:p-8 rounded-lg border border-white/10 relative overflow-hidden">
            
            {/* Visual Red light flare */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-monster-red/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Interactive Vinyl Depth Controls */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-5">
              <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest block">
                VINYL LAYERING SYSTEM
              </span>
              <div className="flex bg-black/40 p-0.5 rounded border border-white/10">
                <button
                  id="vinyl-behind-btn"
                  onClick={() => setVinylOnTop(false)}
                  className={`px-3 py-1 text-[9px] font-mono uppercase tracking-wider rounded transition-all cursor-pointer ${
                    !vinylOnTop
                      ? "bg-monster-red text-white py-0.5 font-bold shadow-[0_0_10px_rgba(226,30,58,0.3)]"
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  Behind Cover
                </button>
                <button
                  id="vinyl-ontop-btn"
                  onClick={() => setVinylOnTop(true)}
                  className={`px-3 py-1 text-[9px] font-mono uppercase tracking-wider rounded transition-all cursor-pointer ${
                    vinylOnTop
                      ? "bg-monster-red text-white py-0.5 font-bold shadow-[0_0_10px_rgba(226,30,58,0.3)]"
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  On Top
                </button>
              </div>
            </div>

            {/* 3D Pullout Sleeve Segment */}
            <div className="flex justify-center items-center h-48 relative mb-6">
              
              {/* Sleve Jacket (Leftwards slightly) */}
              <div 
                onClick={() => onExploreImage(activeAlbum.imageUrl, activeAlbum.title, activeAlbum.description)}
                className="w-36 h-36 border border-white/15 rounded-sm overflow-hidden shadow-2xl relative z-20 hover:scale-102 hover:border-monster-red/30 cursor-pointer transition-all"
              >
                <img
                  src={activeAlbum.imageUrl}
                  alt={activeAlbum.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                
                {/* Visual Title mark */}
                <div className="absolute top-2 left-2 bg-black/70 px-1.5 py-0.5 rounded font-mono text-[6px] tracking-wider uppercase leading-none">
                  {activeAlbum.type}
                </div>
              </div>

              {/* Vinyl record pulling out on hover or simply active (moves to right) */}
              <div className={`absolute left-[calc(50%-10px)] w-36 h-36 rounded-full bg-slate-950 border-4 border-slate-900 shadow-2xl animate-spin duration-15000 flex items-center justify-center select-none group pointer-events-none transition-all duration-300 ${
                vinylOnTop 
                  ? "z-30 border-slate-800 scale-102 ring-4 ring-black/80 drop-shadow-[0_0_20px_rgba(0,0,0,0.9)]" 
                  : "z-10"
              }`}>
                
                {/* Vinyl Grooves inside background */}
                <div className="absolute inset-2 border border-black/35 rounded-full"></div>
                <div className="absolute inset-4 border border-black/20 rounded-full"></div>
                <div className="absolute inset-6 border border-black/10 rounded-full"></div>
                
                {/* Vinyl Label Center Mini Sticker */}
                <div className="w-12 h-12 rounded-full border border-slate-800 overflow-hidden relative">
                  <img
                    src={activeAlbum.imageUrl}
                    alt={activeAlbum.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-80"
                  />
                  {/* Center pinhole */}
                  <div className="absolute inset-0 m-auto w-3 h-3 bg-black rounded-full border border-slate-700"></div>
                </div>
              </div>

            </div>

            {/* Lyrics Quote spotlight */}
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-mono text-[9px] text-monster-red font-bold uppercase tracking-widest block">
                    {activeAlbum.title} LYRIC STUDY SHEET
                  </span>
                  <h4 className="font-serif italic text-base text-white/90 leading-relaxed mt-1">
                    "{activeAlbum.lyricsQuote}"
                  </h4>
                </div>
              </div>

              {/* Tracks Checklist */}
              <div className="space-y-2 border-t border-white/5 pt-4">
                <span className="font-mono text-[8px] text-white/30 uppercase block font-bold">
                  VERIFIED ALBUM TRACKLISTING:
                </span>
                
                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-white/70">
                  {activeAlbum.tracklist.map((track, idx) => (
                    <div key={idx} className="flex gap-2 items-center">
                      <Music className="w-3 h-3 text-monster-red shrink-0" />
                      <span className="truncate">{track}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-white/[0.01] border border-white/5 rounded text-[11px] text-white/50 space-y-1 mt-4">
                <span className="font-mono text-[8px] text-monster-red uppercase block tracking-wider font-bold">ALBUM PROFILE DECRYPTION</span>
                <p className="leading-relaxed">
                  {activeAlbum.description}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
