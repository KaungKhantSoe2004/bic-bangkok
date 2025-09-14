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
 <section className="relative h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">
  {/* Background Videos */}
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>
      </div>
    ))}
  </div>

  {/* Main Content */}
  <div className="absolute inset-0 flex items-end z-10">
    <div className="w-full p-6 sm:p-8 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-5xl">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight text-white">
            <span className="block">
              <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent drop-shadow-2xl">
                {title.split(" ").slice(0, 3).join(" ")}
              </span>
            </span>
            <span className="block mt-1 sm:mt-2 drop-shadow-2xl">
              {title.split(" ").slice(3).join(" ")}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 leading-relaxed mb-6 sm:mb-8 md:mb-12 max-w-4xl drop-shadow-xl">
            {subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
            {/* Explore Programs */}
            <button className="group relative inline-flex items-center justify-center px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 rounded-full hover:from-red-500 hover:to-red-600 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 shadow-lg md:shadow-xl hover:shadow-2xl hover:shadow-red-500/25 overflow-hidden">
              <span className="relative z-10">Explore Programs</span>
              <FaArrowRight className="w-3 sm:w-4 h-3 sm:h-4 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
            </button>

            {/* Apply Now */}
            <button className="group relative inline-flex items-center justify-center px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg font-semibold text-gray-900 bg-gradient-to-r from-white to-gray-100 rounded-full hover:from-gray-100 hover:to-white transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 shadow-lg md:shadow-xl hover:shadow-2xl overflow-hidden">
              <span className="relative z-10">Apply Now</span>
              <FaPlus className="w-3 sm:w-4 h-3 sm:h-4 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Controls - smaller on mobile */}
  <div className="absolute top-1/2 left-4 sm:left-6 md:left-12 transform -translate-y-1/2 z-20">
    <div className="flex flex-col items-center space-y-3 sm:space-y-4">
      {/* Play/Pause */}
      <button
        onClick={togglePlayPause}
        className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 shadow-md sm:shadow-lg hover:shadow-xl"
      >
        {isPlaying ? (
          <FaPause className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
        ) : (
          <FaPlay className="w-3 sm:w-4 h-3 sm:h-4 text-white ml-0.5" />
        )}
      </button>

      {/* Indicators */}
      <div className="flex flex-col space-y-1.5 sm:space-y-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVideo(index)}
            className={`relative w-1 h-6 sm:h-7 md:h-8 rounded-full transition-all duration-300 ${
              index === currentVideo
                ? "bg-white shadow-lg shadow-white/30 scale-110"
                : "bg-white/40 hover:bg-white/60 hover:scale-105"
            }`}
          >
            {index === currentVideo && (
              <div className="absolute inset-0 bg-white rounded-full animate-pulse opacity-60"></div>
            )}
          </button>
        ))}
      </div>

      {/* Counter */}
      <div className="text-center">
        <span className="text-white/80 text-[10px] sm:text-xs font-medium">
          {String(currentVideo + 1).padStart(2, "0")} /{" "}
          {String(videos.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  </div>
</section>

  );
}
