import { useState } from "react";
import { Card } from "@/components/ui/card";

interface VideoRevealProps {
  videoSrc: string;
  title: string;
  description: string;
  variant: "celebration" | "party" | "joy" | "surprise";
}

const VideoReveal = ({ videoSrc, title, description, variant }: VideoRevealProps) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const gradientMap = {
    celebration: "gradient-celebration",
    party: "gradient-warm",
    joy: "gradient-joy", 
    surprise: "gradient-celebration"
  };

  const colorMap = {
    celebration: "celebration",
    party: "party", 
    joy: "joy",
    surprise: "surprise"
  };

  return (
    <Card className="relative overflow-hidden cursor-pointer transition-bounce hover:scale-105 shadow-celebration group">
      <div
        onClick={() => setIsRevealed(!isRevealed)}
        className="aspect-[9/16] w-full relative"
      >
        {/* Text Field Overlay */}
        <div
          className={`absolute inset-0 ${gradientMap[variant]} flex flex-col items-center justify-center p-6 text-center transition-smooth z-10 ${
            isRevealed ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <h3 className={`text-2xl font-bold text-${colorMap[variant]}-foreground mb-2 animate-float`}>
            {title}
          </h3>
          <p className={`text-${colorMap[variant]}-foreground/80 text-sm animate-pulse-slow`}>
            {description}
          </p>
          <div className={`mt-4 text-${colorMap[variant]}-foreground/60 text-xs`}>
            Click to reveal! 🎉
          </div>
        </div>

        {/* Video Element */}
        <video
          className={`w-full h-full object-cover transition-smooth ${
            isRevealed ? "opacity-100" : "opacity-0"
          }`}
          loop
          muted
          playsInline
          ref={(video) => {
            if (video && isRevealed) {
              video.play().catch(console.log);
            }
          }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Click overlay when video is showing */}
        {isRevealed && (
          <div
            className="absolute inset-0 bg-transparent cursor-pointer z-20"
            onClick={(e) => {
              e.stopPropagation();
              setIsRevealed(false);
            }}
          />
        )}
      </div>
    </Card>
  );
};

export default VideoReveal;