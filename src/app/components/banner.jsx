"use client";
import { useState, useEffect, useRef } from "react";
import { FaPlay, FaPause, FaChevronDown } from "react-icons/fa";

export default function Banner({ title, subtitle }) {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videos = ["bannerv.mp4", "bannera.mp4", "bannerb.mp4"];
  const videoRefs = useRef([]);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
      }, 8000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    // Pause all videos except the current one
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentVideo && isPlaying) {
          video.play().catch((e) => console.log("Auto-play prevented:", e));
        } else {
          video.pause();
        }
      }
    });
  }, [currentVideo, isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden">
      {/* Background Videos */}
      <div className="absolute inset-0 w-full h-full">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentVideo ? "opacity-100" : "opacity-0"
            }`}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video}
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              preload="auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center justify-center sm:justify-start sm:items-end z-10 px-4 sm:px-6 md:px-8 pb-12 sm:pb-16">
        <div className="w-full max-w-6xl mx-auto text-center sm:text-left">
          <div className="max-w-3xl mx-auto sm:mx-0">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              <span className="block bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
                {title.split(" ").slice(0, 3).join(" ")}
              </span>
              <span className="block mt-1 md:mt-2 text-white">
                {title.split(" ").slice(3).join(" ")}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-6 max-w-2xl mx-auto sm:mx-0">
              {subtitle}
            </p>

            {/* CTA Button */}
            <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all transform hover:scale-105 active:scale-95 shadow-lg">
              Discover More
            </button>
          </div>
        </div>
      </div>

      {/* Controls - Mobile Bottom, Desktop Left */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 sm:left-6 sm:translate-x-0 sm:top-1/2 sm:-translate-y-1/2 z-20">
        <div className="flex flex-row sm:flex-col items-center space-x-3 sm:space-x-0 sm:space-y-3">
          {/* Play/Pause */}
          <button
            onClick={togglePlayPause}
            className="w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 shadow-lg"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <FaPause className="w-3 h-3 text-white" />
            ) : (
              <FaPlay className="w-3 h-3 text-white ml-0.5" />
            )}
          </button>

          {/* Indicators - Horizontal on mobile, vertical on desktop */}
          <div className="flex flex-row sm:flex-col space-x-2 sm:space-x-0 sm:space-y-2">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVideo(index)}
                className={`relative w-6 h-1 sm:w-1 sm:h-6 rounded-full transition-all duration-300 ${
                  index === currentVideo
                    ? "bg-white shadow-lg shadow-white/30"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to video ${index + 1}`}
              >
                {index === currentVideo && (
                  <div className="absolute inset-0 bg-white rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

          {/* Counter */}
          <div className="text-center">
            <span className="text-white/80 text-xs font-medium">
              {String(currentVideo + 1).padStart(2, "0")}/
              {String(videos.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 hidden sm:block">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <FaChevronDown className="text-white/70 mt-1 text-xs" />
          </div>
          <span className="text-white/70 text-xs font-medium tracking-wider">
            Scroll
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="h-1 bg-white/20 w-full">
          <div
            className="h-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300"
            style={{
              width: `${((currentVideo + 1) / videos.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
