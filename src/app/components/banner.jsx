// "use client"
// import { useState, useEffect } from "react"
// import { FaPlay, FaPause } from "react-icons/fa"

// export default function Banner({ title, subtitle }) {
//   const [currentVideo, setCurrentVideo] = useState(0)
//   const [isPlaying, setIsPlaying] = useState(true)
//   const videos = ["bannerv.mp4", "bannera.mp4", "bannerb.mp4"]

//   useEffect(() => {
//     let interval
//     if (isPlaying) {
//       interval = setInterval(() => {
//         setCurrentVideo((prev) => (prev + 1) % videos.length)
//       }, 8000)
//     }
//     return () => clearInterval(interval)
//   }, [isPlaying])

//   const togglePlayPause = () => {
//     setIsPlaying(!isPlaying)
//   }

//   return (
//     <section
//       className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden w-full"
//       style={{
//         maxWidth: "100vw",
//         overflowX: "hidden",
//         position: "relative",
//       }}
//     >
//       {/* Background Videos */}
//       <div className="absolute inset-0 w-full h-full overflow-hidden">
//         {videos.map((video, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
//               index === currentVideo ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <video
//               src={video}
//               autoPlay
//               muted
//               loop
//               playsInline
//               className="w-full h-full object-cover"
//               style={{ maxWidth: "100%", width: "100%" }}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30"></div>
//             <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent"></div>
//           </div>
//         ))}
//       </div>

//       {/* Main Content */}
//       <div className="absolute inset-0 flex items-center sm:items-end z-10 px-3 sm:px-4 md:px-8">
//         <div className="w-full max-w-7xl mx-auto">
//           <div className="max-w-4xl">
//             {/* Title */}
//             <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight text-white">
//               <span className="block bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent drop-shadow-2xl">
//                 {title.split(" ").slice(0, 3).join(" ")}
//               </span>
//               <span className="block mt-1 md:mt-2 drop-shadow-2xl">{title.split(" ").slice(3).join(" ")}</span>
//             </h1>

//             {/* Subtitle */}
//             <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-white/95 leading-relaxed mb-4 sm:mb-6 md:mb-10 max-w-2xl drop-shadow-xl font-medium">
//               {subtitle}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Controls */}
//       <div className="absolute top-1/2 left-2 sm:left-4 md:left-8 transform -translate-y-1/2 z-20">
//         <div className="flex flex-col items-center space-y-2 sm:space-y-3">
//           {/* Play/Pause */}
//           <button
//             onClick={togglePlayPause}
//             className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/25 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center hover:bg-white/35 active:bg-white/40 transition-all duration-300 shadow-lg hover:shadow-xl touch-manipulation"
//             style={{ minWidth: "32px", minHeight: "32px" }}
//           >
//             {isPlaying ? (
//               <FaPause className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-white" />
//             ) : (
//               <FaPlay className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-white ml-0.5" />
//             )}
//           </button>

//           {/* Indicators */}
//           <div className="flex flex-col space-y-1 sm:space-y-1.5 md:space-y-2">
//             {videos.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentVideo(index)}
//                 className={`relative w-1 h-4 sm:h-6 md:h-8 rounded-full transition-all duration-300 touch-manipulation ${
//                   index === currentVideo
//                     ? "bg-white shadow-lg shadow-white/30 scale-110"
//                     : "bg-white/40 hover:bg-white/60 active:bg-white/70 hover:scale-105"
//                 }`}
//                 style={{ minWidth: "4px", minHeight: "16px" }}
//               >
//                 {index === currentVideo && (
//                   <div className="absolute inset-0 bg-white rounded-full animate-pulse opacity-60"></div>
//                 )}
//               </button>
//             ))}
//           </div>

//           {/* Counter */}
//           <div className="text-center">
//             <span className="text-white/80 text-[10px] sm:text-xs font-medium">
//               {String(currentVideo + 1).padStart(2, "0")} / {String(videos.length).padStart(2, "0")}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20">
//         <div className="flex flex-col items-center space-y-1 sm:space-y-2 animate-bounce">
//           <div className="w-4 h-6 sm:w-5 sm:h-8 md:w-6 md:h-10 border-2 border-white/70 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
//             <div className="w-0.5 sm:w-1 h-1.5 sm:h-2 md:h-3 bg-white rounded-full mt-1 sm:mt-1 md:mt-2 animate-pulse"></div>
//           </div>
//           <span className="text-white/70 text-[9px] sm:text-[10px] md:text-xs font-medium uppercase tracking-wider">
//             Scroll
//           </span>
//         </div>
//       </div>

//       {/* Progress Bar */}
//       <div className="absolute bottom-0 left-0 right-0 z-10" style={{ width: "100%", maxWidth: "100vw" }}>
//         <div className="h-0.5 sm:h-1 bg-white/20">
//           <div
//             className="h-full bg-gradient-to-r from-red-500 to-yellow-400 transition-all duration-300"
//             style={{
//               width: `${((currentVideo + 1) / videos.length) * 100}%`,
//               maxWidth: "100%",
//             }}
//           ></div>
//         </div>
//       </div>

//       {/* Background subtle pattern */}
//       <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_60%)]"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1)_0%,transparent_60%)]"></div>
//       </div>
//     </section>
//   )
// }
"use client";
import { useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function Banner({ title, subtitle }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 8000); // change every 8s
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return <div>ok</div>;
}
