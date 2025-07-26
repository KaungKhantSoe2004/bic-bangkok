// "use client";

// import { useState, useEffect } from "react";

// export default function Banner({ images, title, subtitle }) {
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <section className="relative h-screen overflow-hidden">
//       {/* Background Images with Darker Overlays */}
//       <div className="absolute inset-0">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               index === currentImage ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <img
//               src={image || "/placeholder.svg"}
//               alt={`Banner ${index + 1}`}
//               className="w-full h-full object-cover"
//             />
//             {/* Enhanced Dark Overlays */}
//             <div className="absolute inset-0 bg-black/50"></div>
//             <div className="absolute inset-0 bg-gradient-to-tr from-dark-primary/95 via-dark-primary/80 to-transparent"></div>
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-primary/95"></div>
//           </div>
//         ))}
//       </div>

//       {/* Text Container with Stronger Background */}
//       <div className="absolute bottom-0 left-0 right-0 z-5">
//         <div className="max-w-7xl mx-auto">
//           <div className="max-w-6xl">
//             <div className="relative">
//               {/* Solid Dark Base */}
//               <div className="absolute inset-0 bg-dark-primary/95 rounded-tr-3xl"></div>
//               {/* Supporting Gradients */}
//               <div className="absolute inset-0 bg-gradient-to-r from-dark-primary/95 via-dark-primary/85 to-dark-primary/70 rounded-tr-3xl"></div>
//               <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/90 via-dark-primary/60 to-transparent rounded-tr-3xl"></div>
//               {/* Subtle Blur Effect */}
//               <div className="relative backdrop-blur-sm p-8 md:p-12 lg:p-16 m-8 md:m-12 lg:m-16 rounded-tr-3xl">
//                 {/* Content remains here */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Lion Background Elements */}
//       <div className="absolute top-20 right-10 w-40 h-40 opacity-8 animate-float-slow">
//         <img
//           src="./lion.png"
//           alt="Lion"
//           className="w-full h-full object-contain filter brightness-150"
//         />
//       </div>
//       <div className="absolute top-1/2 right-1/4 w-32 h-32 opacity-6 animate-float-reverse">
//         <img
//           src="./lion.png"
//           alt="Lion"
//           className="w-full h-full object-contain filter brightness-150"
//         />
//       </div>
//       <div className="absolute bottom-1/3 right-1/3 w-28 h-28 opacity-5 animate-pulse-slow">
//         <img
//           src="./lion.png"
//           alt="Lion"
//           className="w-full h-full object-contain filter brightness-200"
//         />
//       </div>

//       {/* Content - Bottom Left */}
//       <div className="absolute bottom-0 left-0 right-0 z-10 p-8 md:p-12 lg:p-16">
//         <div className="max-w-7xl mx-auto">
//           <div className="max-w-4xl">
//             <div className="relative z-10">
//               {/* Title */}
//               <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-6 md:mb-8 leading-tight font-lora animate-fade-in-up">
//                 <span className="block">
//                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-beige to-white drop-shadow-2xl">
//                     {title.split(" ").slice(0, 3).join(" ")}
//                   </span>
//                 </span>
//                 <span className="block mt-2">
//                   <span className="text-white drop-shadow-2xl">
//                     {title.split(" ").slice(3).join(" ")}
//                   </span>
//                 </span>
//               </h1>

//               {/* Subtitle */}
//               <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed font-lora mb-8 md:mb-10 animate-fade-in-up delay-200 max-w-3xl drop-shadow-xl">
//                 {subtitle}
//               </p>

//               {/* Action Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 md:gap-6 animate-fade-in-up delay-300">
//                 <button className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-semibold text-white bg-gradient-to-r from-brand-red to-brand-red/80 rounded-2xl hover:from-brand-red/90 hover:to-brand-red transform hover:-translate-y-1 hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-brand-red/30 overflow-hidden">
//                   <span className="relative z-10">Explore Programs</span>
//                   <svg
//                     className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M17 8l4 4m0 0l-4 4m4-4H3"
//                     />
//                   </svg>
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
//                 </button>

//                 <button className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-semibold text-dark-primary bg-gradient-to-r from-brand-beige to-brand-beige/90 rounded-2xl hover:from-brand-beige/90 hover:to-brand-beige transform hover:-translate-y-1 hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-brand-beige/30 overflow-hidden">
//                   <span className="relative z-10">Apply Now</span>
//                   <svg
//                     className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M12 4v16m8-8H4"
//                     />
//                   </svg>
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
//                 </button>
//               </div>

//               {/* Quick Stats */}
//               <div className="flex flex-wrap gap-6 md:gap-8 mt-8 md:mt-12 animate-fade-in-up delay-500">
//                 <div className="flex items-center space-x-3 group">
//                   <div className="w-12 h-12 bg-gradient-to-br from-brand-red/40 to-brand-red/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/30">
//                     <span className="text-brand-beige text-xl drop-shadow-lg">
//                       🎓
//                     </span>
//                   </div>
//                   <div>
//                     <div className="text-2xl font-bold text-white drop-shadow-lg">
//                       2500+
//                     </div>
//                     <div className="text-sm text-white drop-shadow-md">
//                       Graduates
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-3 group">
//                   <div className="w-12 h-12 bg-gradient-to-br from-brand-beige/40 to-brand-beige/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/30">
//                     <span className="text-brand-beige text-xl drop-shadow-lg">
//                       🌍
//                     </span>
//                   </div>
//                   <div>
//                     <div className="text-2xl font-bold text-white drop-shadow-lg">
//                       50+
//                     </div>
//                     <div className="text-sm text-white drop-shadow-md">
//                       Countries
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-3 group">
//                   <div className="w-12 h-12 bg-gradient-to-br from-brand-red/30 to-brand-beige/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/30">
//                     <span className="text-brand-beige text-xl drop-shadow-lg">
//                       ⭐
//                     </span>
//                   </div>
//                   <div>
//                     <div className="text-2xl font-bold text-white drop-shadow-lg">
//                       98%
//                     </div>
//                     <div className="text-sm text-white drop-shadow-md">
//                       Success Rate
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Enhanced Image Indicators - Bottom Right */}
//       <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20">
//         <div className="flex flex-col space-y-3">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentImage(index)}
//               className={`relative w-1 h-8 md:h-12 rounded-full transition-all duration-500 ${
//                 index === currentImage
//                   ? "bg-brand-beige shadow-lg shadow-brand-beige/50 scale-125"
//                   : "bg-white/30 hover:bg-white/50 hover:scale-110"
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             >
//               {index === currentImage && (
//                 <div className="absolute inset-0 bg-brand-beige rounded-full animate-pulse opacity-75"></div>
//               )}
//             </button>
//           ))}
//         </div>

//         {/* Image Counter */}
//         <div className="mt-4 text-center">
//           <span className="text-white/80 text-sm font-medium drop-shadow-md">
//             {String(currentImage + 1).padStart(2, "0")} /{" "}
//             {String(images.length).padStart(2, "0")}
//           </span>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
//         <div className="flex flex-col items-center space-y-2">
//           <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
//             <div className="w-1 h-3 bg-brand-beige rounded-full mt-2 animate-pulse drop-shadow-lg"></div>
//           </div>
//           <span className="text-white/80 text-xs font-medium uppercase tracking-wider drop-shadow-md">
//             Scroll
//           </span>
//         </div>
//       </div>

//       {/* Floating Action Button - Top Right */}
//       <div className="absolute top-8 right-8 md:top-12 md:right-12 z-20">
//         <button className="group relative w-14 h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-xl">
//           <svg
//             className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-brand-beige transition-colors duration-300"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//             />
//           </svg>
//           <div className="absolute inset-0 bg-gradient-to-r from-brand-red/20 to-brand-beige/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//         </button>
//       </div>

//       {/* Background Pattern Overlay */}
//       <div className="absolute inset-0 opacity-5 pointer-events-none">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(216,190,156,0.1)_0%,transparent_50%)]"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(130,6,44,0.1)_0%,transparent_50%)]"></div>
//       </div>
//     </section>
//   );
// }
// ""use client"
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

      {/* Video Controls - Bottom Right */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20">
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
      {/* <div className="absolute top-8 right-8 md:top-12 md:right-12 z-20">
        <button className="group relative w-14 h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
          <FaHeart className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-red-400 transition-colors duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div> */}

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
