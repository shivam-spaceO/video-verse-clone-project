
import { Link } from "react-router-dom";
import type { Video } from "@/lib/data";

interface VideoCardProps {
  video: Video;
  horizontal?: boolean;
}

export default function VideoCard({ video, horizontal = false }: VideoCardProps) {
  return (
    <div className={`group ${horizontal ? 'flex gap-2' : ''}`}>
      <div className={`relative aspect-video rounded-xl overflow-hidden bg-youtube-card ${horizontal ? 'w-40 flex-shrink-0' : 'w-full'}`}>
        <Link to={`/watch/${video.id}`}>
          <img 
            src={video.thumbnail} 
            alt={video.title}
            className="w-full h-full object-cover" 
          />
          <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
            {video.duration}
          </div>
        </Link>
      </div>
      
      <div className={`mt-3 flex ${horizontal ? 'flex-col' : 'gap-3'}`}>
        {!horizontal && (
          <div className="flex-shrink-0">
            <Link to="#" className="block w-9 h-9">
              <img 
                src={video.channelAvatar} 
                alt={video.channelName}
                className="w-full h-full rounded-full"
              />
            </Link>
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          <Link to={`/watch/${video.id}`} className="block">
            <h3 className={`font-medium line-clamp-2 text-youtube-text ${horizontal ? 'text-sm' : ''}`}>
              {video.title}
            </h3>
          </Link>
          
          <Link to="#" className="block mt-1">
            <p className="text-youtube-text-secondary text-sm">{video.channelName}</p>
          </Link>
          
          <div className="text-youtube-text-secondary text-sm">
            <span>{video.views} views</span>
            <span className="mx-1">•</span>
            <span>{video.uploadedAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
