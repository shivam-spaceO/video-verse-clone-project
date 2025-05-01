
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import VideoCard from "@/components/VideoCard";
import { searchVideos } from "@/lib/data";

const SearchPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const results = searchVideos(query);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  // Responsive sidebar handling
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-youtube-background text-youtube-text">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} />
      
      <main 
        className={`min-h-[calc(100vh-3.5rem)] pt-14 transition-all duration-300 ${
          sidebarOpen ? "ml-60" : "ml-[72px]"
        }`}
      >
        <div className="p-6">
          <h2 className="text-lg mb-6">Search results for: <span className="font-medium">{query}</span></h2>
          
          <div className="max-w-3xl">
            {results.length > 0 ? (
              <div className="flex flex-col gap-4">
                {results.map((video) => (
                  <VideoCard key={video.id} video={video} horizontal />
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-xl">No videos found matching your search.</p>
                <p className="text-youtube-text-secondary mt-2">Try different keywords or check for typos.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
