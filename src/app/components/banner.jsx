"use client";

import { useState, useEffect } from "react";

export default function Banner({ images, title, subtitle }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-[700px] overflow-hidden bg-slate-950">
      {/* Image Slider */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentImageIndex
                ? "transform translate-x-0 opacity-100"
                : index < currentImageIndex
                ? "transform -translate-x-full opacity-0"
                : "transform translate-x-full opacity-0"
            }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Darker overlay for text visibility */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-red-900/40"></div>
          </div>
        ))}
      </div>

      {/* Red Line Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-red-800 transform rotate-12 animate-line-move-y"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-red-700 transform -rotate-12 animate-line-move-y delay-1000"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-red-600 animate-line-move-x"></div>
      </div>

      {/* Lion Image Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/public/images/lion-silhouette-1.png"
          alt="Lion Silhouette"
          className="absolute top-1/4 left-10 w-40 h-40 object-contain opacity-5 animate-float"
        />
        <img
          src="/public/images/lion-silhouette-2.png"
          alt="Lion Silhouette"
          className="absolute bottom-1/4 right-10 w-32 h-32 object-contain opacity-5 animate-float-delayed"
        />
      </div>

      {/* Text Overlay (No Background) */}
      <div className="absolute bottom-12 left-8 max-w-4xl z-10">
        <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight electro-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 animate-gradient">
            {title.split(" ").slice(0, 2).join(" ")}
          </span>
          <br />
          <span className="text-white">
            {title.split(" ").slice(2).join(" ")}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-medium electro-font">
          {subtitle}
        </p>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 flex space-x-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-gradient-to-r from-red-800 to-red-900 scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() =>
          setCurrentImageIndex(
            (prev) => (prev - 1 + images.length) % images.length
          )
        }
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-900/40 backdrop-blur-sm hover:bg-red-900/50 text-white rounded-full transition-all duration-300 flex items-center justify-center group"
      >
        <svg
          className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={() =>
          setCurrentImageIndex((prev) => (prev + 1) % images.length)
        }
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-900/40 backdrop-blur-sm hover:bg-red-900/50 text-white rounded-full transition-all duration-300 flex items-center justify-center group"
      >
        <svg
          className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
