
import VideoCard from "./VideoCard";
import type { Video } from "@/lib/data";

interface VideoGridProps {
  videos: Video[];
}

export default function VideoGrid({ videos }: VideoGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
