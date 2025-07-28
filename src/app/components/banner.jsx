"use client";
import { useState, useEffect } from "react";
import { FaArrowRight, FaPlus, FaHeart, FaPlay, FaPause } from "react-icons/fa";

export default function Banner({ title, subtitle }) {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videos = ["bannerv.mp4", "bannera.mp4", "bannerb.mp4"];

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
      }, 8000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Videos with Optimized Overlays */}
      <div className="absolute inset-0">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentVideo ? "opacity-100" : "opacity-0"
            }`}
          >
            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            {/* Subtle gradient overlays for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="absolute inset-0 flex items-end z-10">
        <div className="w-full p-8 md:p-12 lg:p-16">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-5xl">
              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 leading-tight text-white">
                <span className="block">
                  <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent drop-shadow-2xl">
                    {title.split(" ").slice(0, 3).join(" ")}
                  </span>
                </span>
                <span className="block mt-2 drop-shadow-2xl">
                  {title.split(" ").slice(3).join(" ")}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed mb-10 md:mb-12 max-w-4xl drop-shadow-xl">
                {subtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-8">
                <button className="group relative inline-flex items-center justify-center px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 rounded-full hover:from-red-500 hover:to-red-600 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-red-500/25 overflow-hidden">
                  <span className="relative z-10">Explore Programs</span>
                  <FaArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                </button>

                <button className="group relative inline-flex items-center justify-center px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-semibold text-gray-900 bg-gradient-to-r from-white to-gray-100 rounded-full hover:from-gray-100 hover:to-white transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden">
                  <span className="relative z-10">Apply Now</span>
                  <FaPlus className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Controls - Left Side */}
      <div className="absolute top-1/2 left-8 md:left-12 transform -translate-y-1/2 z-20">
        <div className="flex flex-col items-center space-y-4">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {isPlaying ? (
              <FaPause className="w-4 h-4 text-white" />
            ) : (
              <FaPlay className="w-4 h-4 text-white ml-0.5" />
            )}
          </button>

          {/* Video Indicators */}
          <div className="flex flex-col space-y-2">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVideo(index)}
                className={`relative w-1 h-8 rounded-full transition-all duration-300 ${
                  index === currentVideo
                    ? "bg-white shadow-lg shadow-white/30 scale-110"
                    : "bg-white/40 hover:bg-white/60 hover:scale-105"
                }`}
                aria-label={`Go to video ${index + 1}`}
              >
                {index === currentVideo && (
                  <div className="absolute inset-0 bg-white rounded-full animate-pulse opacity-60"></div>
                )}
              </button>
            ))}
          </div>

          {/* Video Counter */}
          <div className="text-center">
            <span className="text-white/80 text-xs font-medium">
              {String(currentVideo + 1).padStart(2, "0")} /{" "}
              {String(videos.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Bottom Center */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-white/60 text-xs font-medium uppercase tracking-wider">
            Scroll
          </span>
        </div>
      </div>

      {/* Floating Action Button - Top Right */}

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="h-1 bg-white/20">
          <div
            className="h-full bg-gradient-to-r from-red-500 to-yellow-400 transition-all duration-300"
            style={{
              width: `${((currentVideo + 1) / videos.length) * 100}%`,
              animation: isPlaying ? "none" : "pulse 2s infinite",
            }}
          ></div>
        </div>
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1)_0%,transparent_60%)]"></div>
      </div>
    </section>
  );
}
