
import { useState } from "react";
import { Play, Pause, Volume2, SkipBack, SkipForward, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface VideoPlayerProps {
  videoId: string;
}

export default function VideoPlayer({ videoId }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [progress, setProgress] = useState(0);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
  };

  const handleProgressChange = (value: number[]) => {
    setProgress(value[0]);
  };

  return (
    <div className="w-full aspect-video bg-black relative rounded-lg overflow-hidden">
      <img 
        src={`https://picsum.photos/id/${videoId === "video1" ? "0" : Math.floor(Math.random() * 30)}/1280/720`} 
        alt="Video thumbnail"
        className="w-full h-full object-cover"
      />
      
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="flex flex-col gap-2">
          <Slider
            value={[progress]}
            max={100}
            step={1}
            onValueChange={handleProgressChange}
            className="cursor-pointer"
          />
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/10 rounded-full"
                onClick={togglePlayPause}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/10 rounded-full"
              >
                <SkipBack className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/10 rounded-full"
              >
                <SkipForward className="h-4 w-4" />
              </Button>
              
              <div className="flex items-center gap-2 ml-2">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:bg-white/10 rounded-full"
                >
                  <Volume2 className="h-4 w-4" />
                </Button>
                <Slider 
                  value={[volume]}
                  max={100}
                  step={1}
                  onValueChange={handleVolumeChange}
                  className="w-20 cursor-pointer"
                />
              </div>
              
              <span className="text-white text-xs ml-2">
                0:00 / 12:24
              </span>
            </div>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/10 rounded-full"
            >
              <Maximize className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
