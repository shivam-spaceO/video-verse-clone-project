
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import VideoPlayer from "@/components/VideoPlayer";
import VideoCard from "@/components/VideoCard";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, Share } from "lucide-react";
import { getVideoById, getRelatedVideos } from "@/lib/data";

const VideoPage = () => {
  const { id } = useParams<{ id: string }>();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const video = getVideoById(id || "");
  const relatedVideos = getRelatedVideos(id || "");
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Responsive sidebar handling
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(false); // Keep closed by default on video page
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <div className="min-h-screen bg-youtube-background text-youtube-text">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} />
      
      <main 
        className={`min-h-[calc(100vh-3.5rem)] pt-14 transition-all duration-300 ${
          sidebarOpen ? "ml-60" : "ml-[72px]"
        }`}
      >
        <div className="max-w-[1500px] mx-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <VideoPlayer videoId={video.id} />
              
              <div className="mt-4">
                <h1 className="text-xl font-medium">{video.title}</h1>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2 pt-2 pb-3 border-b border-youtube-card">
                  <div className="flex items-center gap-2">
                    <img 
                      src={video.channelAvatar} 
                      alt={video.channelName}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h3 className="font-medium">{video.channelName}</h3>
                      <p className="text-sm text-youtube-text-secondary">1.2M subscribers</p>
                    </div>
                    <Button 
                      variant="default"
                      className="bg-white text-youtube-background hover:bg-gray-200 ml-4"
                    >
                      Subscribe
                    </Button>
                  </div>
                  
                  <div className="flex mt-3 sm:mt-0 gap-2">
                    <div className="flex">
                      <Button 
                        variant="secondary"
                        className="bg-youtube-card hover:bg-youtube-hover text-youtube-text rounded-r-none"
                      >
                        <ThumbsUp className="h-5 w-5 mr-2" />
                        <span>{parseInt(video.views.replace(/[^0-9]/g, "")) / 20}K</span>
                      </Button>
                      <Button 
                        variant="secondary"
                        className="bg-youtube-card hover:bg-youtube-hover text-youtube-text rounded-l-none border-l border-youtube-background"
                      >
                        <ThumbsDown className="h-5 w-5" />
                      </Button>
                    </div>
                    
                    <Button 
                      variant="secondary"
                      className="bg-youtube-card hover:bg-youtube-hover text-youtube-text"
                    >
                      <Share className="h-5 w-5 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
                
                <div className="mt-4 bg-youtube-card rounded-xl p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{video.views} views</span>
                    <span className="text-sm">{video.uploadedAt}</span>
                  </div>
                  <p className="mt-2 whitespace-pre-line">{video.description}</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="flex flex-col gap-3">
                {relatedVideos.map((video) => (
                  <VideoCard key={video.id} video={video} horizontal />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VideoPage;
