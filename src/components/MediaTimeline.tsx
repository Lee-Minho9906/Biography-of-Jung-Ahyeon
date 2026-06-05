import { useState } from "react";
import { MEDIA_ARCHIVE, TIMELINE_NODES } from "../data";
import { PlayCircle, Clock, Eye, Sparkles, Navigation, Globe, ArrowRight, Video } from "lucide-react";

interface MediaTimelineProps {
  onExploreImage: (url: string, title: string, desc: string, videoUrl?: string) => void;
}

export default function MediaTimeline({ onExploreImage }: MediaTimelineProps) {
  const [activeNodeId, setActiveNodeId] = useState("node-1");

  const activeNode = TIMELINE_NODES.find(n => n.id === activeNodeId) || TIMELINE_NODES[0];

  return (
    <section 
      id="media-archive"
      className="relative min-h-screen flex flex-col justify-center bg-black/95 text-white px-6 md:px-16 lg:pl-80 py-24 border-t border-white/5"
    >
      <div className="relative z-10 max-w-5xl space-y-16">
        
        {/* Part 1: Interactive Timeline (Section XV) */}
        <div>
          {/* Section Heading Tag */}
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-xs text-monster-red bg-monster-red/10 px-3 py-1 rounded border border-monster-red/20 font-bold tracking-wider">
              SECTION XII
            </span>
            <span className="font-mono text-xs text-white/40 tracking-widest uppercase">
              Chronicles Timeline
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-2 leading-none">
            INTERACTIVE <span className="text-monster-red">TIMELINE</span>
          </h2>
          <p className="font-mono text-xs text-white/50 uppercase tracking-[0.2em] mb-8 border-b border-white/10 pb-4">
            CHRONOLOGY SCAMP OVERVIEW • HORIZONTAL DECISION NODES
          </p>

          {/* Horizontal Slider Navigation nodes */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
            {TIMELINE_NODES.map((node) => {
              const isActive = activeNodeId === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNodeId(node.id)}
                  className={`p-3 rounded border text-left cursor-pointer transition-all ${
                    isActive
                      ? "bg-monster-red/15 border-monster-red text-white"
                      : "bg-white/[0.01] border-white/5 text-white/40 hover:border-white/15"
                  }`}
                >
                  <span className="font-mono text-xs font-bold text-monster-red block">{node.era}</span>
                  <span className="font-display text-[11px] font-black uppercase tracking-wide truncate block">{node.title}</span>
                </button>
              );
            })}
          </div>

          {/* Horizontal active node expanding summary */}
          <div className="glass-panel p-6 rounded-lg border border-white/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#080808]">
            <div className="md:col-span-4 relative group rounded overflow-hidden border border-white/5 max-h-32">
              <img
                src={activeNode.imageUrl}
                alt={activeNode.title}
                referrerPolicy="no-referrer"
                className="w-full h-32 object-cover filter brightness-90 group-hover:scale-105 transition-transform"
              />
            </div>
            
            <div className="md:col-span-8 space-y-2">
              <span className="font-mono text-[9px] text-monster-red font-bold uppercase tracking-widest">
                TIMELINE NODE DETAILS • {activeNode.era} RECORD
              </span>
              <h3 className="font-display text-xl font-bold uppercase text-white tracking-wide">
                {activeNode.title}
              </h3>
              <p className="font-sans text-xs text-white/70 leading-relaxed">
                {activeNode.desc}
              </p>

              <button
                onClick={() => onExploreImage(activeNode.imageUrl, activeNode.title, activeNode.desc)}
                className="text-[9px] font-mono uppercase text-monster-red hover:text-white font-bold tracking-widest block pt-2 flex items-center gap-1.5"
              >
                EXAMINE EXPANDED FILE <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Part 2: Media Archive Netflix Rows Slider (Section XVI) */}
        <div>
          {/* Section Heading Tag */}
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-xs text-monster-red bg-monster-red/10 px-3 py-1 rounded border border-monster-red/20 font-bold tracking-wider">
              SECTION XIII
            </span>
            <span className="font-mono text-xs text-white/40 tracking-widest uppercase">
              Netflix Media Rows Matrix
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-2 leading-none">
            MEDIA <span className="text-monster-red">ARCHIVE</span>
          </h2>
          <p className="font-mono text-xs text-white/50 uppercase tracking-[0.2em] mb-8 border-b border-white/10 pb-4">
            VIRAL PERFORMANCES • SOUNDBOOTH RECORDINGS & SPECIAL DIRECTED CLIPS
          </p>

          {/* Horizontal Drag grid Row scroll */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MEDIA_ARCHIVE.map((item) => {
              const youtubeId = item.videoUrl?.includes("watch?v=")
                ? item.videoUrl.split("watch?v=")[1]?.split("&")[0]
                : item.videoUrl?.includes("youtu.be/")
                ? item.videoUrl.split("youtu.be/")[1]?.split("?")[0]
                : "";
              const resolvedThumbnail = youtubeId 
                ? `https://img.youtube.com/vi/${youtubeId}/0.jpg` 
                : item.imageUrl;
              
              return (
                <div 
                  key={item.id}
                  onClick={() => onExploreImage(resolvedThumbnail, item.title, item.description, item.videoUrl)}
                  className="group relative rounded overflow-hidden border border-white/5 bg-[#070707] hover:border-monster-red/30 cursor-pointer overflow-hidden transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={resolvedThumbnail}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover filter brightness-75 group-hover:scale-102 group-hover:brightness-90 transition-transform duration-500"
                      />
                      
                      {/* Subtle video icon overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/35 opacity-60 group-hover:opacity-100 transition-opacity">
                        <PlayCircle className="w-8 h-8 text-white group-hover:text-monster-red group-hover:scale-110 transition-transform" />
                      </div>

                      {/* Timing stamps */}
                      <span className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded font-mono text-[8px]">
                        {item.duration}
                      </span>

                      <span className="absolute top-2 left-2 bg-monster-red/85 px-1.5 py-0.5 rounded font-mono text-[7px] uppercase tracking-wider leading-none">
                        {item.category}
                      </span>
                    </div>

                    <div className="p-3 space-y-1.5">
                      <h3 className="font-sans font-bold text-[11px] uppercase tracking-wide text-white leading-tight line-clamp-1 group-hover:text-[#ffffff]">
                        {item.title}
                      </h3>
                      
                      <p className="font-mono text-[9px] text-white/45 line-clamp-2 leading-tight">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 pt-0">
                    <div className="flex justify-between items-center text-[8px] font-mono text-white/30 pt-1.5 border-t border-white/[0.04]">
                      <span>Views: {item.views}</span>
                      <span className="text-monster-red uppercase font-bold group-hover:block transition-all">ZOOM CLIP</span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
