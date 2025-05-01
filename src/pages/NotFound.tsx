
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-youtube-background">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4 text-youtube-text">404</h1>
        <p className="text-xl text-youtube-text mb-4">This page isn't available. Sorry about that.</p>
        <p className="text-youtube-text-secondary mb-8">Try searching for something else.</p>
        <Button asChild className="bg-youtube-DEFAULT hover:bg-youtube-dark">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
