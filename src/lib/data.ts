
export interface Video {
  id: string;
  title: string;
  channelName: string;
  channelAvatar: string;
  thumbnail: string;
  duration: string;
  views: string;
  uploadedAt: string;
  description: string;
}

export const videos: Video[] = [
  {
    id: "video1",
    title: "How to Build a YouTube Clone with React",
    channelName: "WebDev Mastery",
    channelAvatar: "https://i.pravatar.cc/150?img=1",
    thumbnail: "https://picsum.photos/id/0/640/360",
    duration: "12:24",
    views: "120K",
    uploadedAt: "2 months ago",
    description: "In this tutorial, we will learn how to build a YouTube clone using React, Tailwind CSS, and TypeScript. We'll cover component structure, styling, and responsive design principles."
  },
  {
    id: "video2",
    title: "The Future of Web Development",
    channelName: "Tech Insights",
    channelAvatar: "https://i.pravatar.cc/150?img=2",
    thumbnail: "https://picsum.photos/id/1/640/360",
    duration: "18:32",
    views: "1.2M",
    uploadedAt: "3 weeks ago",
    description: "Explore the latest trends and technologies that are shaping the future of web development. From WebAssembly to edge computing, this video covers the innovations that will define the next generation of web applications."
  },
  {
    id: "video3",
    title: "Mastering CSS Grid Layout",
    channelName: "CSS Wizards",
    channelAvatar: "https://i.pravatar.cc/150?img=3",
    thumbnail: "https://picsum.photos/id/20/640/360",
    duration: "15:45",
    views: "450K",
    uploadedAt: "1 year ago",
    description: "A comprehensive guide to CSS Grid Layout. Learn how to create complex grid layouts with ease, using the power of CSS Grid. Perfect for beginners and experienced developers alike."
  },
  {
    id: "video4",
    title: "JavaScript ES2023 - New Features Explained",
    channelName: "JS Guru",
    channelAvatar: "https://i.pravatar.cc/150?img=4",
    thumbnail: "https://picsum.photos/id/48/640/360",
    duration: "22:15",
    views: "380K",
    uploadedAt: "4 days ago",
    description: "Discover the exciting new features in JavaScript ES2023. This video breaks down all the new additions to the language and shows how you can use them in your projects today."
  },
  {
    id: "video5",
    title: "Responsive Design Best Practices",
    channelName: "UX Champions",
    channelAvatar: "https://i.pravatar.cc/150?img=5",
    thumbnail: "https://picsum.photos/id/24/640/360",
    duration: "14:22",
    views: "290K",
    uploadedAt: "7 months ago",
    description: "Learn the best practices for creating truly responsive websites that work beautifully across all devices. From mobile-first approach to advanced media queries, this video covers it all."
  },
  {
    id: "video6",
    title: "Build a REST API with Node.js",
    channelName: "Backend Developers",
    channelAvatar: "https://i.pravatar.cc/150?img=6",
    thumbnail: "https://picsum.photos/id/28/640/360",
    duration: "32:45",
    views: "780K",
    uploadedAt: "2 years ago",
    description: "A step-by-step guide to building a RESTful API with Node.js and Express. Learn how to structure your backend, implement authentication, and connect to databases."
  },
  {
    id: "video7",
    title: "Intro to React Hooks",
    channelName: "React Masters",
    channelAvatar: "https://i.pravatar.cc/150?img=7",
    thumbnail: "https://picsum.photos/id/15/640/360",
    duration: "16:53",
    views: "1.8M",
    uploadedAt: "1 month ago",
    description: "An introduction to React Hooks. Learn how to use useState, useEffect, useContext, and custom hooks to manage state and side effects in your function components."
  },
  {
    id: "video8",
    title: "Docker for Web Developers",
    channelName: "DevOps Journey",
    channelAvatar: "https://i.pravatar.cc/150?img=8",
    thumbnail: "https://picsum.photos/id/60/640/360",
    duration: "28:10",
    views: "420K",
    uploadedAt: "5 months ago",
    description: "Learn how to use Docker to containerize your web applications. This tutorial covers Docker basics, creating Dockerfiles, and using Docker Compose for multi-container applications."
  }
];

export const categories = [
  "All",
  "Web Development",
  "JavaScript",
  "React",
  "CSS",
  "TypeScript",
  "Node.js",
  "Python",
  "Gaming",
  "Music",
  "Cooking",
  "Sports",
  "News",
  "Films"
];

export function getVideoById(id: string): Video | undefined {
  return videos.find(video => video.id === id);
}

export function getRelatedVideos(id: string, count: number = 5): Video[] {
  // In a real app, this would use tags or categories to find related videos
  // For now, we'll just return random videos excluding the current one
  return videos
    .filter(video => video.id !== id)
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
}

export function searchVideos(query: string): Video[] {
  if (!query.trim()) return videos;
  
  const lowerCaseQuery = query.toLowerCase();
  
  return videos.filter(
    video => 
      video.title.toLowerCase().includes(lowerCaseQuery) || 
      video.channelName.toLowerCase().includes(lowerCaseQuery) ||
      video.description.toLowerCase().includes(lowerCaseQuery)
  );
}
