
import { Home, Video, Clock, ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside 
      className={cn(
        "fixed left-0 top-14 h-[calc(100vh-3.5rem)] z-40 transition-all duration-300 ease-in-out",
        isOpen ? "w-60" : "w-[72px]"
      )}
    >
      <ScrollArea className="h-full bg-youtube-background">
        <div className="py-2 px-1">
          <div className="mb-4">
            <SidebarItem icon={<Home />} text="Home" to="/" isOpen={isOpen} />
            <SidebarItem icon={<Video />} text="Subscriptions" to="/subscriptions" isOpen={isOpen} />
            <SidebarItem icon={<Clock />} text="History" to="/history" isOpen={isOpen} />
            <SidebarItem icon={<ThumbsUp />} text="Liked Videos" to="/liked" isOpen={isOpen} />
          </div>
          
          {isOpen && (
            <>
              <div className="mb-4">
                <h3 className="text-sm font-medium px-3 mb-1">Subscriptions</h3>
                <Channel name="Web Dev Mastery" isOpen={isOpen} />
                <Channel name="CSS Wizards" isOpen={isOpen} />
                <Channel name="JS Guru" isOpen={isOpen} />
                <Channel name="Tech Insights" isOpen={isOpen} />
              </div>
              
              <div className="mb-4">
                <h3 className="text-sm font-medium px-3 mb-1">Explore</h3>
                <SidebarItem text="Trending" to="/trending" isOpen={isOpen} />
                <SidebarItem text="Music" to="/music" isOpen={isOpen} />
                <SidebarItem text="Movies" to="/movies" isOpen={isOpen} />
                <SidebarItem text="Gaming" to="/gaming" isOpen={isOpen} />
                <SidebarItem text="News" to="/news" isOpen={isOpen} />
                <SidebarItem text="Sports" to="/sports" isOpen={isOpen} />
              </div>
            </>
          )}
        </div>
      </ScrollArea>
    </aside>
  );
}

interface SidebarItemProps {
  icon?: React.ReactNode;
  text: string;
  to: string;
  isOpen: boolean;
}

function SidebarItem({ icon, text, to, isOpen }: SidebarItemProps) {
  return (
    <Button 
      asChild
      variant="ghost" 
      className={cn(
        "w-full justify-start text-youtube-text hover:bg-youtube-hover", 
        isOpen ? "px-3" : "px-1"
      )}
    >
      <Link to={to}>
        {icon && <span className="mr-3">{icon}</span>}
        {isOpen && <span>{text}</span>}
      </Link>
    </Button>
  );
}

interface ChannelProps {
  name: string;
  isOpen: boolean;
}

function Channel({ name, isOpen }: ChannelProps) {
  if (!isOpen) return null;
  
  const initial = name.charAt(0).toUpperCase();
  
  return (
    <Button 
      asChild
      variant="ghost" 
      className="w-full justify-start text-youtube-text hover:bg-youtube-hover px-3"
    >
      <Link to="#">
        <span className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs mr-3">
          {initial}
        </span>
        <span className="truncate">{name}</span>
      </Link>
    </Button>
  );
}
