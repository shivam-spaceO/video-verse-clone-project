
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import CategoryBar from "@/components/CategoryBar";
import VideoGrid from "@/components/VideoGrid";
import { videos } from "@/lib/data";

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
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
        <CategoryBar />
        <VideoGrid videos={videos} />
      </main>
    </div>
  );
};

export default Home;
