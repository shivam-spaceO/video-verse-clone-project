
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/data";

export default function CategoryBar() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="sticky top-14 z-10 bg-youtube-background border-b border-youtube-card">
      <ScrollArea className="whitespace-nowrap py-3">
        <div className="inline-flex gap-3 px-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant="secondary"
              size="sm"
              className={`rounded-lg text-sm ${
                selectedCategory === category
                  ? "bg-white text-youtube-background hover:bg-gray-200"
                  : "bg-youtube-card text-youtube-text hover:bg-youtube-hover"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
