import { useState, useRef, MouseEvent, WheelEvent } from "react";
import { X, ZoomIn, ZoomOut, RotateCcw, Download } from "lucide-react";

interface LightboxModalProps {
  isOpen: boolean;
  imageUrl: string;
  title: string;
  description: string;
  videoUrl?: string;
  onClose: () => void;
}

export default function LightboxModal({
  isOpen,
  imageUrl,
  title,
  description,
  videoUrl,
  onClose,
}: LightboxModalProps) {
  if (!isOpen) return null;

  const [scale, setScale] = useState<number>(1);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [rotation, setRotation] = useState<number>(0);

  const imgRef = useRef<HTMLImageElement>(null);

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.3, 4));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.3, 0.7));
  const handleRotate = () => setRotation((prev) => (prev + 90) % 360);
  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setRotation(0);
  };

  const helperGetEmbedUrl = (url: string | undefined): string | null => {
    if (!url) return null;
    let videoId = "";
    try {
      if (url.includes("youtube.com/watch")) {
        const u = new URL(url);
        videoId = u.searchParams.get("v") || "";
      } else if (url.includes("youtu.be/")) {
        videoId = url.split("youtu.be/")[1]?.split("?")[0] || "";
      } else if (url.includes("youtube.com/embed/")) {
        return url;
      }
    } catch (e) {
      // fallback if not a valid URL object
      if (url.includes("watch?v=")) {
        videoId = url.split("watch?v=")[1]?.split("&")[0] || "";
      }
    }
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
    }
    return null;
  };

  const embedUrl = helperGetEmbedUrl(videoUrl);

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    if (videoUrl) return; // disable zoom for videos
    e.preventDefault();
    const zoomIntensity = 0.1;
    if (e.deltaY < 0) {
      setScale((prev) => Math.min(prev + zoomIntensity, 4));
    } else {
      setScale((prev) => Math.max(prev - zoomIntensity, 0.7));
    }
  };

  const handleMouseDown = (e: MouseEvent<HTMLImageElement>) => {
    if (videoUrl) return;
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: MouseEvent<HTMLImageElement>) => {
    if (!isDragging || videoUrl) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/95 backdrop-blur-md text-white select-none transition-all duration-300"
      onWheel={handleWheel}
    >
      {/* Top Header Controls */}
      <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black/80 to-transparent">
        <div>
          <h4 className="font-display text-lg tracking-wide uppercase text-monster-red">{title}</h4>
          <p className="font-sans text-xs text-white/65">{description}</p>
        </div>
        
        {/* Controls Layout */}
        <div className="flex items-center gap-3">
          {!videoUrl && (
            <>
              <button
                onClick={handleZoomIn}
                className="p-2 bg-white/5 hover:bg-monster-red hover:text-white transition-all rounded"
                title="Zoom In"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={handleZoomOut}
                className="p-2 bg-white/5 hover:bg-monster-red hover:text-white transition-all rounded"
                title="Zoom Out"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <button
                onClick={handleRotate}
                className="p-2 bg-white/5 hover:bg-monster-red hover:text-white transition-all rounded"
                title="Rotate"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
              <button
                onClick={handleReset}
                className="font-mono text-xs px-3 py-2 bg-white/5 hover:bg-white/10 rounded transition-all"
              >
                RESET
              </button>
            </>
          )}
          <button
            onClick={onClose}
            className="p-2 bg-monster-red hover:bg-electric-crimson rounded transition-all"
            title="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className={`flex-1 w-full h-full flex items-center justify-center overflow-hidden relative ${videoUrl ? "" : "cursor-grab active:cursor-grabbing"}`}>
        {videoUrl ? (
          <div className="w-full max-w-4xl aspect-video px-4 z-10">
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title={title}
                className="w-full h-full rounded border border-white/10 shadow-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : (
              <video
                src={videoUrl}
                controls
                autoPlay
                className="w-full h-full rounded border border-white/10 max-h-[75vh]"
              />
            )}
          </div>
        ) : (
          <img
            ref={imgRef}
            src={imageUrl}
            alt={title}
            referrerPolicy="no-referrer"
            className="max-h-[80vh] max-w-[90vw] object-contain transition-transform duration-100 ease-out select-none pointer-events-auto"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale}) rotate(${rotation}deg)`,
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          />
        )}
        
        {/* Helper Tip */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] text-white/40 tracking-wider bg-black/40 px-3 py-1.5 rounded-full pointer-events-none">
          {videoUrl ? "ACTIVE VIDEO STREAMING • INTERACTIVE EMULATION" : "USE MOUSE WHEEL TO ZOOM • DRAG TO PAN SHAPES"}
        </div>
      </div>

      {/* Footer Branding */}
      <div className="text-center py-4 bg-gradient-to-t from-black/80 to-transparent">
        <span className="font-mono text-[10px] text-white/30 tracking-[0.4em]">
          AHYEON DIGITAL MUSEUM • MEDIA PORTFOLIO VIEWER
        </span>
      </div>
    </div>
  );
}
