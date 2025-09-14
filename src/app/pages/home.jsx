"use client";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Banner from "../components/banner";
import { FiArrowRight, FiAward, FiBook, FiGlobe } from "react-icons/fi";
import { FaGlobeAsia } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  setStoreReduxGallery,
  setStoreReduxText,
  setStoreReduxVideo,
} from "../../reducer/gallerySlice";

const homeImages = [
  "./1.jpg",
  "./2.jpg",
  "./3.jpg",
  "./4.jpg",
  "./5.jpg",
  "./6.jpg",
  "./7.jpg",
  "./8.jpg",
];

function PlayIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
      />
    </svg>
  );
}

function SkeletonBox({ className }) {
  return (
    <div
      className={`bg-gray-700/50 animate-pulse rounded-lg ${className}`}
    ></div>
  );
}

function SkeletonText({ className }) {
  return (
    <div className={`bg-gray-600/50 animate-pulse rounded ${className}`}></div>
  );
}

export default function HomePage() {
  const backend_domain_name = `https://bicadmin.z256600-ll9lz.ps02.zwhhosting.com`;
  const [isLoading, setIsLoading] = useState(true);
  const [activeLifeSection, setActiveLifeSection] = useState(0);
  const ReduxGallerySection = useSelector((store) => store.galleries);
  const [galleries, setGalleries] = useState(ReduxGallerySection.galleries);
  const [videos, setVideos] = useState(ReduxGallerySection.video);
  const [galleryText, setGalleryText] = useState(ReduxGallerySection.text);
  // const [galleryHeader, setgalleryHeader] = useState("Bridge International");
  const sectionRefs = useRef([]);
  const dispatch = useDispatch();

  const lifeSections = [
    {
      title: "Cultural Immersion",
      description:
        "Immerse yourself in Thai culture while maintaining your global perspective. Our students experience the rich traditions, festivals, and customs of Thailand through organized cultural activities and community engagement.",
      image: "./cultural.webp",
      details: [
        "Traditional Thai festivals and celebrations",
        "Cultural exchange programs with local communities",
        "Language immersion opportunities",
        "Historical site visits and cultural tours",
      ],
    },
    {
      title: "Extracurricular Activities",
      description:
        "From sports teams to academic clubs, drama productions to community service projects. Our diverse range of activities ensures every student finds their passion and develops leadership skills.",
      image: "./extra.webp",
      details: [
        "Sports teams and fitness programs",
        "Academic clubs and competitions",
        "Drama and arts productions",
        "Community service initiatives",
      ],
    },
    {
      title: "Build Lifelong Memories",
      description:
        "Create unforgettable experiences with classmates from around the world. Our campus events, international trips, and graduation celebrations become cherished memories that last a lifetime.",
      image: "./memories.webp",
      details: [
        "International student exchange programs",
        "Campus events and celebrations",
        "Graduation ceremonies and achievements",
        "Alumni network connections",
      ],
    },
    {
      title: "Accommodation",
      description:
        "We offer a variety of safe and modern living options, including on-campus residences and off-campus housing with trusted partners. All accommodations are equipped with the amenities needed to create a comfortable and productive living environment.",
      image: "./accomodation.webp",
      details: [
        "On-campus residences with 24/7 security",
        "Off-campus housing with trusted partners",
        "Modern amenities and comfortable furnishings",
        "Study spaces and recreational facilities",
      ],
    },
  ];

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${backend_domain_name}/api/galleries`);
      if (response.status == 200) {
        console.log(response.data);
        dispatch(setStoreReduxVideo(response.data.data.video));
        dispatch(setStoreReduxGallery(response.data.data.galleries));
        dispatch(setStoreReduxText(response.data.data.text));
        setGalleryText(response.data.data.text);
        setVideos(response.data.data.video);
        setGalleries(response.data.data.galleries);
        console.log(response.data.data.text);
        // dispatch(setReduxMainSponsors(response.data.mainSponsors));
        // dispatch(setReduxDiamondSponsors(response.data.diamondSponsors));
        // dispatch(setReduxPrevSponsors(response.data.prevSponsors));
        // dispatch(setStoreReduxFaq(response.data.faqs));
      } else {
        console.log("error");
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error in fetchApi:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen font-lora">
      <Banner
        title="Welcome to Bridge International  Bangkok"
        subtitle="Discover an unparalleled educational experience in the heart of Bangkok."
      />

      {isLoading ? (
        <div className="space-y-0">
          <section className="w-full flex flex-col md:flex-row items-stretch">
            <div className="w-full md:w-1/2">
              <SkeletonBox className="w-full h-96 md:h-[500px]" />
            </div>
            <div className="w-full md:w-1/2 bg-dark-blue p-6 md:p-10 flex flex-col justify-center space-y-4">
              <SkeletonText className="h-10 w-3/4" />
              <SkeletonText className="h-4 w-full" />
              <SkeletonText className="h-4 w-5/6" />
              <SkeletonText className="h-4 w-4/5" />
              <div className="flex gap-4 pt-6">
                <SkeletonBox className="h-12 w-32" />
                <SkeletonBox className="h-12 w-32" />
              </div>
            </div>
          </section>

          <section className="w-full bg-grey-blue flex flex-wrap">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-1/2 md:w-1/4 p-4 flex justify-center items-center"
              >
                <SkeletonBox className="h-20 w-32" />
              </div>
            ))}
          </section>

          {[1, 2, 3].map((i) => (
            <section
              key={i}
              className={`w-full flex flex-col ${
                i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              } items-stretch`}
            >
              <div className="w-full md:w-1/2">
                <SkeletonBox className="w-full h-96 md:h-[400px]" />
              </div>
              <div className="w-full md:w-1/2 bg-dark-blue p-6 md:p-10 flex flex-col justify-center space-y-4">
                <SkeletonText className="h-8 w-2/3" />
                <SkeletonText className="h-4 w-full" />
                <SkeletonText className="h-4 w-5/6" />
                <SkeletonText className="h-4 w-3/4" />
                <SkeletonBox className="h-12 w-36 mt-6" />
              </div>
            </section>
          ))}

          <section className="w-full flex flex-col md:flex-row items-start py-8 md:py-14 px-4 md:px-6 gap-8 md:gap-12 bg-dark-blue">
            <div className="w-full md:w-1/2 flex flex-col space-y-6">
              <SkeletonText className="h-12 w-3/4" />
              <SkeletonText className="h-6 w-1/2" />
              <SkeletonText className="h-4 w-full" />
              <SkeletonText className="h-4 w-5/6" />
              <SkeletonBox className="h-12 w-48 mt-6" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-3">
              <SkeletonBox className="aspect-video w-full rounded-xl" />
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((i) => (
                  <SkeletonBox key={i} className="aspect-video rounded-lg" />
                ))}
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-dark-blue via-dark-primary to-dark-blue">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <SkeletonText className="h-12 w-1/2 mx-auto mb-4" />
                <SkeletonText className="h-6 w-3/4 mx-auto" />
              </div>
              <div className="space-y-16">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`flex flex-col ${
                      i % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                    } gap-8 lg:gap-12 items-center`}
                  >
                    <div className="w-full lg:w-1/2">
                      <SkeletonBox className="aspect-video w-full rounded-2xl mb-4" />
                      <SkeletonBox className="aspect-video w-full rounded-xl" />
                    </div>
                    <div className="w-full lg:w-1/2 space-y-6">
                      <div className="flex items-center gap-3">
                        <SkeletonBox className="h-6 w-20" />
                        <SkeletonText className="h-8 w-1/2" />
                      </div>
                      <SkeletonText className="h-6 w-full" />
                      <SkeletonText className="h-4 w-5/6" />
                      <SkeletonText className="h-4 w-4/5" />
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
                        {[1, 2, 3, 4].map((j) => (
                          <SkeletonBox
                            key={j}
                            className="aspect-square rounded-xl"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      ) : (
        <>
          <section className="w-full flex flex-col md:flex-row items-stretch">
            {/* Left side: just an image */}
            <div className="w-full md:w-1/2">
              <img
                src="./bbi.jpeg"
                alt="Bridge International Bangkok"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right side: background image + overlay + text */}
            <div
              className="w-full md:w-1/2 relative bg-cover bg-center"
              style={{
                backgroundImage: "url('./bridge-bg.jpg')",
              }}
            >
              {/* Darker overlay */}
              <div className="absolute inset-0 bg-dark-blue bg-opacity-80"></div>

              {/* Text content */}
              <div className="relative z-10 p-6 md:p-10 flex flex-col justify-center h-full space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-4xl font-lora font-semibold leading-tight text-brand-beige">
                  What is Bridge International?
                </h2>
                <p className="text-base md:text-lg font-manrope text-gray-300 max-w-xl">
                  Bridge International (BI) is a premier educational institution
                  in Bangkok, dedicated to guiding ambitious students toward top
                  universities around the world.
                </p>
                <p className="text-base md:text-lg font-manrope text-gray-300 max-w-xl">
                  We serve as a bridge between potential and opportunity,
                  helping students gain the academic foundation, skills, and
                  confidence needed for admission into leading universities in
                  the UK, the United States, Australia, New Zealand, Canada,
                  Europe, and beyond.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                  <Link
                    to="/about"
                    className="px-4 md:px-6 py-2 md:py-3 bg-brand-red hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition hover-lift font-manrope text-sm md:text-base"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/admissions"
                    className="px-4 md:px-6 py-2 md:py-3 bg-transparent border border-brand-beige hover:bg-brand-beige hover:text-dark-primary text-brand-beige font-semibold rounded-lg transition hover-lift font-manrope text-sm md:text-base"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full bg-grey-blue flex flex-wrap">
            {[
              {
                alt: "IGCSE",
                src: "/IGCSE.jpg",
              },
              {
                alt: "A Levels",
                src: "/alevels.jpg",
              },
              {
                alt: "OSSD",
                src: "/ossd.jpg",
              },
              {
                alt: "GED",
                src: "/ged.jpg",
              },
            ].map(({ alt, src }) => (
              <div
                key={alt}
                className="w-1/2 md:w-1/4 p-2 bg-grey-blue flex justify-center items-center filter grayscale hover:grayscale-0 transition duration-300"
              >
                <img
                  src={src || "/placeholder.svg"}
                  alt={alt}
                  className="max-w-full max-h-33 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </section>

          <section className="w-full flex flex-col md:flex-row items-stretch">
            {/* Left side: just an image */}
            <div className="w-full md:w-1/2">
              <img
                src="https://tse1.mm.bing.net/th/id/OIP.C4y-ifG4Ft1ZZwi0vEepVgHaFD?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="What we offer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Right side: background image + overlay + text */}
            <div
              className="w-full md:w-1/2 relative bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://tse4.mm.bing.net/th/id/OIP.vk03m39fWEWmlTN6t7XH1gHaFX?rs=1&pid=ImgDetMain&o=7&rm=3')",
              }}
            >
              {/* Darker overlay */}
              <div className="absolute inset-0 bg-black/70 bg-opacity-80"></div>
              {/* Text content */}
              <div className="relative z-10 p-6 md:p-10 flex flex-col justify-center h-full space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-4xl font-lora font-semibold leading-tight text-brand-beige">
                  What We Offer
                </h2>
                <p className="text-base md:text-lg font-manrope text-gray-300 max-w-xl">
                  We provide comprehensive educational programs designed to
                  prepare students for success at top international
                  universities. Our expert faculty and proven curriculum ensure
                  exceptional academic outcomes.
                </p>
                <ul className="list-disc list-inside font-manrope text-gray-400 max-w-xl space-y-1 text-sm md:text-base">
                  <li className=" text-brand-beige">
                    IGCSE, A Levels, OSSD, and GED programs
                  </li>
                  <li className=" text-brand-beige">
                    University application guidance and support
                  </li>
                  <li className=" text-brand-beige">
                    Small class sizes with personalized attention
                  </li>
                  <li className=" text-brand-beige">
                    International faculty with proven expertise
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                  <Link
                    to="/programs"
                    className="px-4 md:px-6 py-2 md:py-3 bg-brand-red hover:bg-red-700 text-white font-semibold rounded-xl shadow-md transition hover-lift font-manrope text-sm md:text-base"
                  >
                    View Programs
                  </Link>
                  <Link
                    to="/admissions"
                    className="px-4 md:px-6 py-2 md:py-3 bg-transparent border border-brand-beige hover:bg-brand-beige hover:text-dark-primary text-brand-beige font-semibold rounded-xl transition hover-lift font-manrope text-sm md:text-base"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full flex flex-col md:flex-row-reverse items-stretch">
            {/* Right side: image */}
            <div className="w-full md:w-1/2">
              <img
                src="./bginternational.webp"
                alt="What we offer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Left side: text with bg-white/40 */}
            <div className="w-full md:w-1/2 bg-dark-blue flex flex-col justify-center p-6 md:p-10 space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-4xl font-lora font-semibold leading-tight text-brand-beige">
                University Preparation at BI
              </h2>
              <p className="text-base md:text-lg font-manrope text-gray-300 max-w-xl">
                At BI, we are committed to fostering academic excellence through
                our rigorous University preparation programmes:{" "}
                <strong className=" text-brand-red">GED</strong>,{" "}
                <strong className=" text-brand-red">IGCSE</strong>, and
                <strong className=" text-brand-red"> A Levels</strong> — all
                tailored for students aiming to get into top international
                universities.
              </p>
              <p className="text-base md:text-lg font-manrope text-gray-300 max-w-xl">
                Our vibrant campus, expert faculty, and cultural immersion
                opportunities make BI the perfect place to achieve your academic
                goals and prepare for a global future.
              </p>
            </div>
          </section>

          <section className="w-full flex flex-col md:flex-row items-stretch">
            {/* Left side: just an image */}
            <div className="w-full md:w-1/2">
              <img
                src="./bgstudent.webp"
                alt="What we offer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right side: semi-transparent white background */}
            <div className="w-full md:w-1/2 bg- flex flex-col justify-center p-6 md:p-10 space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-4xl font-lora font-semibold leading-tight text-brand-beige">
                Second One I Just Created
              </h2>
              <p className="text-base md:text-lg font-manrope text-gray-300 max-w-xl">
                At BI, we are committed to fostering academic excellence through
                our rigorous University preparation programmes:{" "}
                <strong className=" text-brand-red">GED</strong>,{" "}
                <strong className=" text-brand-red">IGCSE</strong>, and
                <strong className=" text-brand-red"> A Levels</strong>, tailored
                for students who are aiming to get into top international
                universities.
              </p>
              <p className="text-base md:text-lg font-manrope text-gray-300 max-w-xl">
                Our vibrant campus, expert faculty, and cultural immersion
                opportunities make BI the perfect place to achieve your academic
                goals and prepare for a global future.
              </p>
            </div>
          </section>

          <section className="w-full flex flex-col md:flex-row items-start py-8 md:py-14 px-4 md:px-6 gap-8 md:gap-12 relative overflow-hidden">
            <div className="w-full md:w-1/2 flex flex-col mt-4 justify-start">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-lora font-semibold text-brand-beige mb-6 md:mb-8">
                Why Choose Us
              </h2>
              <h3 className="text-xl md:text-2xl font-lora text-brand-beige font-semibold mb-4">
                Bridge International Bangkok
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed font-manrope mb-4 md:mb-6">
                We offer more than just education — we offer transformation.
                With an internationally aligned curriculum and a strong emphasis
                on global citizenship, BI Bangkok empowers students with the
                knowledge, skills, and confidence to thrive in an ever-changing
                world.
              </p>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed font-manrope">
                Our expert educators and inclusive community foster critical
                thinking, innovation, and a lifelong passion for learning.
                Choosing BI means choosing a future where every student's
                potential is unlocked.
              </p>
              {/* Full-width Button on mobile, fit on desktop */}
              <Link
                to="/about"
                className="w-full md:w-auto inline-flex justify-center items-center px-4 md:px-6 py-2 md:py-3 bg-brand-red hover:bg-brand-red/90 text-white font-manrope font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-brand-red/30 mt-6 md:mt-8 hover-lift text-sm md:text-base"
              >
                Learn More About Us
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
            {/* Right Side - Video only, NO BOX */}
            <div className="w-full md:w-1/2 flex flex-col gap-2">
              {/* Main Video */}
              <div className="aspect-video rounded-xl overflow-hidden bg-dark-primary">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/lRbBGBDqFsI"
                  title="BI Welcoming Message"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                />
              </div>
              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                {["lRbBGBDqFsI", "i4fJI-_zbqs", "86CzKrRi8hE"].map(
                  (id, index) => (
                    <button
                      key={id}
                      onClick={() =>
                        (document.querySelector(
                          "iframe"
                        ).src = `https://www.youtube.com/embed/${id}?autoplay=1`)
                      }
                      className="relative aspect-video rounded-lg overflow-hidden border-2 border-white/20 hover:border-brand-beige transition-all group"
                    >
                      <img
                        src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                        alt={`Video ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-dark-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <PlayIcon className="w-4 h-4 md:w-6 md:h-6 text-brand-beige" />
                      </div>
                    </button>
                  )
                )}
              </div>
            </div>
          </section>

          {/* IGCSE Program Section */}
          <section className="w-full flex flex-col md:flex-row items-stretch">
            {/* Left side: just an image */}
            <div className="w-full md:w-1/2">
              <img
                src="/IGCSE.jpg"
                alt="IGCSE Program"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Right side: background image + overlay + text */}
            <div
              className="w-full md:w-1/2 relative bg-cover bg-center"
              style={{
                backgroundImage: "url('./igcse-bg.jpg')",
              }}
            >
              {/* Darker overlay */}
              <div className="absolute inset-0 bg-white/40 bg-opacity-80"></div>
              {/* Text content */}
              <div className="relative z-10 p-6 md:p-10 flex flex-col justify-center h-full space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-4xl font-lora font-semibold leading-tight text-brand-beige">
                  IGCSE
                </h2>
                <p className="text-base md:text-lg font-manrope text-gray-300 max-w-xl">
                  Engaging students through discussions, group projects, and
                  practical applications. Our IGCSE program provides a solid
                  foundation for advanced studies with internationally
                  recognized qualifications.
                </p>
                <p className="text-base md:text-lg font-manrope text-gray-300 max-w-xl">
                  Students develop critical thinking skills and gain
                  comprehensive knowledge across multiple subjects, preparing
                  them for A Levels and university entrance.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    to="/igcse"
                    className="px-4 md:px-6 py-2 md:py-3 bg-brand-red hover:bg-red-700 text-white font-semibold rounded-xl shadow-md transition hover-lift font-manrope text-sm md:text-base"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* OSSD Program Section */}
          <section className="w-full flex flex-col-reverse md:flex-row items-stretch">
            {/* Left side: background image + overlay + text */}
            <div
              className="w-full md:w-1/2 relative bg-cover bg-center"
              style={{
                backgroundImage: "url('./ossd-bg.jpg')",
              }}
            >
              {/* Darker overlay */}
              <div className="absolute inset-0 bg-white/40 bg-opacity-80"></div>
              {/* Text content */}
              <div className="relative z-10 p-6 md:p-10 flex flex-col justify-center h-full space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-4xl font-lora font-semibold leading-tight text-brand-beige">
                  OSSD
                </h2>
                <p className="text-base md:text-lg font-manrope text-gray-300 max-w-xl">
                  With small class sizes, our teachers focus on the unique needs
                  of each student. The Ontario Secondary School Diploma offers a
                  flexible pathway to Canadian and international universities.
                </p>
                <p className="text-base md:text-lg font-manrope text-gray-300 max-w-xl">
                  Students benefit from personalized attention and a curriculum
                  that emphasizes both academic excellence and practical skills
                  development.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    to="/ossd"
                    className="px-4 md:px-6 py-2 md:py-3 bg-brand-red hover:bg-red-700 text-white font-semibold rounded-xl shadow-md transition hover-lift font-manrope text-sm md:text-base"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            {/* Right side: just an image */}
            <div className="w-full md:w-1/2">
              <img
                src="/ossd.jpg"
                alt="OSSD Program"
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          {/* A Levels Program Section */}
          <section className="w-full flex flex-col md:flex-row items-stretch">
            {/* Left side: just an image */}
            <div className="w-full md:w-1/2">
              <img
                src="/alevels.jpg"
                alt="A Levels Program"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Right side: background image + overlay + text */}
            <div
              className="w-full md:w-1/2 relative bg-cover bg-center"
              style={{
                backgroundImage: "url('./alevels-bg.jpg')",
              }}
            >
              {/* Darker overlay */}
              <div className="absolute inset-0 bg-white/40 bg-opacity-80"></div>
              {/* Text content */}
              <div className="relative z-10 p-6 md:p-10 flex flex-col justify-center h-full space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-4xl font-lora font-semibold leading-tight text-brand-beige">
                  A Levels
                </h2>
                <p className="text-base md:text-lg font-manrope text-gray-300 max-w-xl">
                  Read about the achievements of our students who have gone on
                  to study at prestigious universities around the world. Our A
                  Levels program is the gold standard for university
                  preparation.
                </p>
                <p className="text-base md:text-lg font-manrope text-gray-300 max-w-xl">
                  Students pursue in-depth study in their chosen subjects,
                  developing the analytical and research skills essential for
                  university success.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    to="/alevels"
                    className="px-4 md:px-6 py-2 md:py-3 bg-brand-red hover:bg-red-700 text-white font-semibold rounded-xl shadow-md transition hover-lift font-manrope text-sm md:text-base"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* GED Program Section */}
          <section className="w-full flex flex-col-reverse md:flex-row items-stretch">
            {/* Left side: background image + overlay + text */}
            <div
              className="w-full md:w-1/2 relative bg-cover bg-center"
              style={{
                backgroundImage: "url('./ged-bg.jpg')",
              }}
            >
              {/* Darker overlay */}
              <div className="absolute inset-0 bg-white/40 bg-opacity-80"></div>
              {/* Text content */}
              <div className="relative z-10 p-6 md:p-10 flex flex-col justify-center h-full space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-4xl font-lora font-semibold leading-tight text-brand-beige">
                  GED
                </h2>
                <p className="text-base md:text-lg font-manrope text-gray-300 max-w-xl">
                  Flexible pathway for adult learners seeking to complete their
                  high school equivalency and advance to higher education. Our
                  GED program accommodates working professionals and
                  non-traditional students.
                </p>
                <p className="text-base md:text-lg font-manrope text-gray-300 max-w-xl">
                  With flexible scheduling and comprehensive support, students
                  can achieve their educational goals while balancing other life
                  commitments.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    to="/ged"
                    className="px-4 md:px-6 py-2 md:py-3 bg-brand-red hover:bg-red-700 text-white font-semibold rounded-xl shadow-md transition hover-lift font-manrope text-sm md:text-base"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            {/* Right side: just an image */}
            <div className="w-full md:w-1/2">
              <img
                src="/ged.jpg"
                alt="GED Program"
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          {/* Why Bangkok Section */}
          <section className="w-full">
            <div
              className="w-full relative bg-cover bg-center py-12 md:py-20"
              style={{
                backgroundImage: "url('./bangkok-bg.jpg')",
              }}
            >
              {/* Darker overlay */}
              <div className="absolute inset-0 bg-dark-blue bg-opacity-80"></div>
              {/* Text content - centered */}
              <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center space-y-6 md:space-y-8">
                <h2 className="text-3xl md:text-5xl font-lora font-semibold leading-tight text-brand-beige">
                  Why Bangkok?
                </h2>
                <div className="space-y-6 max-w-3xl mx-auto">
                  <div className="flex items-start space-x-4 text-left">
                    <div className="w-3 h-3 bg-brand-red rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg md:text-xl font-manrope text-gray-300">
                      Bangkok offers a{" "}
                      <span className="text-brand-beige font-semibold">
                        safe, accessible, and culturally familiar environment
                      </span>
                      , making it the perfect first step for Myanmar students.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4 text-left">
                    <div className="w-3 h-3 bg-brand-red rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg md:text-xl font-manrope text-gray-300">
                      It allows them to{" "}
                      <span className="text-brand-beige font-semibold">
                        build independence and adapt gradually
                      </span>{" "}
                      before transitioning to the UK.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4 text-left">
                    <div className="w-3 h-3 bg-brand-red rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg md:text-xl font-manrope text-gray-300">
                      With its{" "}
                      <span className="text-brand-beige font-semibold">
                        close proximity, parents can easily visit
                      </span>
                      , offering added peace of mind.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4 text-left">
                    <div className="w-3 h-3 bg-brand-red rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg md:text-xl font-manrope text-gray-300">
                      As a{" "}
                      <span className="text-brand-beige font-semibold">
                        modern, global city with regional comfort
                      </span>
                      , Bangkok serves as an ideal launchpad for students to
                      grow academically and personally on their international
                      journey.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-4 pt-6">
                  {/* <Link
                    to="/about"
                    className="px-6 md:px-8 py-3 md:py-4 bg-brand-red hover:bg-red-700 text-white font-semibold rounded-xl shadow-md transition hover-lift font-manrope text-base md:text-lg"
                  >
                    Discover More
                  </Link> */}
                  <Link
                    to="/enquire"
                    className="px-6 md:px-8 py-3 md:py-4 bg-transparent border border-brand-beige hover:bg-brand-beige hover:text-dark-primary text-brand-beige font-semibold rounded-xl transition hover-lift font-manrope text-base md:text-lg"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* LEARN FROM THE BEST AT BI - Modern Card Layout */}
          <section
            className="w-full py-12 md:py-20 px-4 md:px-6 bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: "url('./learn.webp')" }}
          >
            {/* Gray overlay scoped only inside this section */}
            <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

            {/* Actual content */}
            <div className="relative z-10 max-w-7xl mx-auto">
              {/* Header + Text */}
              <div className="text-left mb-12 md:mb-16">
                <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-7xl font-lora font-extrabold text-gray-300 leading-tight drop-shadow-lg">
                  LEARN FROM THE BEST AT BI
                </h2>
                <p className="text-lg md:text-2xl lg:text-3xl font-manrope font-bold text-brand-beige leading-relaxed drop-shadow-md">
                  Join a community where your success is our priority. We offer
                  personalized learning, state-of-the-art facilities, and a
                  supportive environment that nurtures every student's
                  potential.
                </p>
              </div>

              {/* Teacher Profiles */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
                {/* Profile 1 */}
                <div className="group bg-black/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-brand-beige/50 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 md:mb-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-700 overflow-hidden mb-3 sm:mb-0 sm:mr-4 flex-shrink-0">
                      <img
                        src="./teacher1.jpg"
                        alt="Dr. Sarah Johnson"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg md:text-2xl font-lora font-semibold text-brand-beige">
                        Dr. Sarah Johnson
                      </h3>
                      <p className="text-gray-400 font-manrope text-sm md:text-base">
                        Mathematics
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 md:gap-3 mb-3 md:mb-4">
                    <div className="flex items-center text-gray-400">
                      <FiAward className="mr-1 md:mr-2 text-sm md:text-base" />
                      <span className="text-xs md:text-sm">Cambridge</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <FaGlobeAsia className="mr-1 md:mr-2 text-sm md:text-base" />
                      <span className="text-xs md:text-sm">12 years</span>
                    </div>
                  </div>
                  <p className="text-gray-300 font-manrope leading-relaxed text-sm md:text-base text-center sm:text-left">
                    Specializes in advanced calculus with research published in
                    5 international journals. Passionate about making math
                    accessible.
                  </p>
                </div>

                {/* Profile 2 */}
                <div className="group bg-black/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-brand-beige/50 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 md:mb-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-700 overflow-hidden mb-3 sm:mb-0 sm:mr-4 flex-shrink-0">
                      <img
                        src="./teacher2.jpg"
                        alt="Prof. David Chen"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg md:text-2xl font-lora font-semibold text-brand-beige">
                        Prof. David Chen
                      </h3>
                      <p className="text-gray-400 font-manrope text-sm md:text-base">
                        Physics
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 md:gap-3 mb-3 md:mb-4">
                    <div className="flex items-center text-gray-400">
                      <FiAward className="mr-1 md:mr-2 text-sm md:text-base" />
                      <span className="text-xs md:text-sm">Oxford</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <FiGlobe className="mr-1 md:mr-2 text-sm md:text-base" />
                      <span className="text-xs md:text-sm">8 countries</span>
                    </div>
                  </div>
                  <p className="text-gray-300 font-manrope leading-relaxed text-sm md:text-base text-center sm:text-left">
                    Experimental physicist with industry experience at CERN.
                    Focuses on connecting theory with real-world applications.
                  </p>
                </div>

                {/* Profile 3 */}
                <div className="group bg-black/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-brand-beige/50 transition-all duration-300 md:col-span-2 lg:col-span-1">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 md:mb-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-700 overflow-hidden mb-3 sm:mb-0 sm:mr-4 flex-shrink-0">
                      <img
                        src="./teacher3.jpg"
                        alt="Dr. Amina Rahman"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg md:text-2xl font-lora font-semibold text-brand-beige">
                        Dr. Amina Rahman
                      </h3>
                      <p className="text-gray-400 font-manrope text-sm md:text-base">
                        Literature
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 md:gap-3 mb-3 md:mb-4">
                    <div className="flex items-center text-gray-400">
                      <FiAward className="mr-1 md:mr-2 text-sm md:text-base" />
                      <span className="text-xs md:text-sm">Harvard</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <FiBook className="mr-1 md:mr-2 text-sm md:text-base" />
                      <span className="text-xs md:text-sm">3 publications</span>
                    </div>
                  </div>
                  <p className="text-gray-300 font-manrope leading-relaxed text-sm md:text-base text-center sm:text-left">
                    Expert in post-colonial literature and creative writing.
                    Leads the school's award-winning debate team.
                  </p>
                </div>
              </div>

              {/* CTA button */}
              <div className="text-center md:text-left">
                <Link
                  to="/admission"
                  className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-brand-red hover:bg-red-700 text-white font-manrope font-semibold rounded-xl shadow-lg hover:shadow-brand-red/30 transition-all duration-300 hover-lift text-base md:text-lg"
                >
                  Meet Our Faculty
                  <FiArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                </Link>
              </div>
            </div>
          </section>

          {/* Trust in Our Expertise - Stats Showcase */}
          <section className="w-full flex flex-col md:flex-row items-stretch">
            {/* Left side: background image + gray overlay + text */}
            <div
              className="w-full md:w-1/2 relative bg-gray-900  bg-center"
              // style={{
              //   backgroundImage: "url('./memories.webp')",
              // }}
            >
              {/* Gray overlay */}
              <div className="absolute inset-0  bg-opacity-80"></div>

              {/* Text content */}
              <div className="relative z-10 p-6 md:p-10 flex flex-col justify-center h-full space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-4xl font-lora font-semibold leading-tight text-brand-beige">
                  Trust in Our Expertise
                </h2>
                <p className="text-base md:text-lg font-manrope text-gray-300 max-w-xl">
                  Our teaching methodology is designed to build confidence,
                  encourage critical thinking, and foster a love of learning. At
                  BI, your success is our mission.
                </p>
              </div>
            </div>

            {/* Right side: just an image */}
            <div className="w-full md:w-1/2">
              <img
                src="./memories.webp"
                alt="Trust Image"
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          {/* Activities Section */}
          <section className="py-16 md:py-24 bg-dark-blue relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-20 left-10 w-32 h-32 bg-brand-red/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-beige/10 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/4 w-2 h-20 bg-brand-red/20 rotate-45 rounded-full"></div>
              <div className="absolute bottom-1/3 right-1/3 w-16 h-2 bg-brand-beige/20 rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="text-left mb-12 md:mb-16">
                <div className="mb-6">
                  <span className="text-brand-red text-sm md:text-base font-manrope font-semibold tracking-wider uppercase mb-2 block">
                    Student Experience
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-lora font-bold text-white mb-4 bg-gradient-to-r from-white via-brand-red to-brand-beige bg-clip-text text-transparent">
                    {galleryText.title}
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-brand-red to-brand-beige rounded-full"></div>
                </div>

                <div className="max-w-5xl space-y-6">
                  <div className="relative">
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                      {galleryText.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 md:mt-16">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-lora font-semibold text-white mb-2">
                    Campus Life in{" "}
                    <span className="text-brand-red">Motion</span>
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    Experience our{" "}
                    <span className="text-brand-red font-medium">
                      vibrant community
                    </span>{" "}
                    through these exclusive glimpses
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
                  {videos?.map((video) => (
                    <div key={video.id} className="group relative">
                      <div className="relative">
                        {/* Video iframe */}
                        <div className="relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-2 border-white/10 hover:border-brand-red/60 transition-all duration-700 shadow-2xl hover:shadow-brand-red/20">
                          <iframe
                            src={`https://www.youtube.com/embed/${video.embed_id}`}
                            title={video.title}
                            className="w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
                          <div className="absolute top-4 right-4 w-3 h-3 bg-brand-red rounded-full opacity-80 animate-pulse"></div>
                        </div>

                        {/* Video description */}
                        <div className="mt-6 text-center">
                          <h4 className="text-xl md:text-2xl font-lora font-bold text-white mb-3 group-hover:text-brand-red transition-colors duration-300">
                            {video.title}
                          </h4>
                          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm mx-auto">
                            {video.description}
                          </p>
                          <p className="text-gray-500 text-xs mt-2">
                            Uploaded:{" "}
                            {new Date(video.created_at).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity Gallery - keeping existing design */}
              <div className="mt-16 md:mt-20">
                <div className="text-center mb-12">
                  <h3 className="text-3xl md:text-4xl font-lora font-bold text-brand-red mb-4">
                    Activity Galleries
                  </h3>
                  <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                    Explore the vibrant moments that showcase our dynamic
                    student community and diverse campus experiences
                  </p>
                </div>

                {/* Photo Grid */}
                {galleries.length == 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <div
                        key={num}
                        className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-800/50 border border-white/10 hover:border-brand-beige/50 transition-all duration-500"
                      >
                        <img
                          src={`/act${num}.jpg`}
                          alt={`Student Activity ${num}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                          <div className="text-white">
                            <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center mb-2">
                              <div className="w-4 h-4 bg-white rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {galleries.length != 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
                    {galleries.map((item) => (
                      <div
                        key={item.id}
                        className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-800/50 border border-white/10 hover:border-brand-beige/50 transition-all duration-500"
                      >
                        <img
                          src={`${backend_domain_name}/public/storage/${item.gallery}`}
                          alt={`Gallery ${item.id}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                          <div className="text-white">
                            <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center mb-2">
                              <div className="w-4 h-4 bg-white rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>

          <section
            className="w-full bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: "url('./shirt.jpg')" }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 pointer-events-none z-0"></div>

            {/* Content wrapper */}
            <div className="relative z-10 max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-screen">
                {/* LEFT: Scrollable Sections */}
                <div className="space-y-0">
                  {lifeSections.map((section, index) => (
                    <div
                      key={section.title}
                      ref={(el) => (sectionRefs.current[index] = el)}
                      className="min-h-screen flex items-center px-4 md:px-6 lg:px-12 py-8 md:py-10"
                    >
                      <div
                        className={`w-full transition-all duration-700 transform ${
                          index === activeLifeSection
                            ? "opacity-100 translate-x-0 scale-100"
                            : "opacity-60 translate-x-4 scale-95"
                        }`}
                      >
                        {/* Image */}
                        <div className="mb-6 md:mb-8">
                          <div className="w-full h-48 md:h-64 rounded-2xl overflow-hidden shadow-2xl">
                            <img
                              src={section.image || "/placeholder.svg"}
                              alt={section.title}
                              className={`w-full h-full object-cover transition-all duration-700 ${
                                index === activeLifeSection
                                  ? "scale-100"
                                  : "scale-110"
                              }`}
                            />
                          </div>
                        </div>

                        {/* Text */}
                        <div className="space-y-4 md:space-y-6">
                          <h3
                            className={`text-2xl md:text-4xl lg:text-5xl font-lora font-bold transition-colors duration-500 ${
                              index === activeLifeSection
                                ? "text-brand-red"
                                : "text-brand-beige"
                            }`}
                          >
                            {section.title}
                          </h3>

                          <p className="text-base md:text-lg font-manrope text-gray-300 leading-relaxed">
                            {section.description}
                          </p>

                          {/* Details */}
                          <div className="space-y-2 md:space-y-3">
                            {section.details.map((detail, detailIndex) => (
                              <div
                                key={detailIndex}
                                className={`flex items-center space-x-3 transition-all duration-500 delay-${
                                  detailIndex * 100
                                } ${
                                  index === activeLifeSection
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 translate-x-8"
                                }`}
                              >
                                <div className="w-2 h-2 bg-brand-red rounded-full flex-shrink-0"></div>
                                <span className="text-gray-300 font-manrope text-sm md:text-base">
                                  {detail}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* Progress Dots */}
                          <div className="flex space-x-2 pt-4 md:pt-6">
                            {lifeSections.map((_, dotIndex) => (
                              <div
                                key={dotIndex}
                                className={`h-1 rounded-full transition-all duration-300 ${
                                  dotIndex === activeLifeSection
                                    ? "w-8 md:w-12 bg-brand-red"
                                    : dotIndex < activeLifeSection
                                    ? "w-6 md:w-8 bg-brand-red/50"
                                    : "w-3 md:w-4 bg-gray-600"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* RIGHT: Text + Video + Preview */}
                <div className="lg:sticky lg:top-0 lg:h-screen flex items-center justify-center p-4 md:p-6 lg:p-12">
                  <div className="w-full max-w-lg space-y-6 md:space-y-10">
                    {/* Text Header */}
                    <div className="text-center lg:text-left">
                      <h2 className="text-2xl md:text-4xl lg:text-5xl font-lora font-bold text-brand-beige mb-3">
                        Experience Life at BI
                      </h2>
                      <p className="text-base md:text-xl font-manrope text-gray-300 leading-relaxed">
                        Discover what makes BI special through our vibrant
                        campus community, comfortable accommodations, and
                        enriching experiences that shape your future.
                      </p>
                    </div>

                    {/* Video */}
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/ajR1zf0h8AQ"
                        title="BI Student Accommodation"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>

                    {/* Preview Box */}
                    <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10">
                      <h4 className="text-lg md:text-xl font-lora font-semibold text-brand-beige mb-2 md:mb-3">
                        Currently Viewing
                      </h4>
                      <p className="text-brand-red font-manrope font-semibold text-base md:text-lg">
                        {lifeSections[activeLifeSection].title}
                      </p>
                      <p className="text-gray-300 font-manrope text-xs md:text-sm mt-2">
                        Scroll to explore more aspects of campus life
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-screen relative">
            {/* Full background image */}
            <img
              src="./cstu.jpg"
              alt="Trust us to guide your academic journey"
              className="w-screen h-auto object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Text content */}
            <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6">
              <div className="text-center max-w-4xl space-y-6 md:space-y-8 z-10">
                <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-lora font-extrabold text-gray-300 leading-tight drop-shadow-lg">
                  Trust Us to Guide Your Academic Journey
                </h2>
                <p className="text-lg md:text-2xl lg:text-3xl font-manrope font-bold text-brand-beige leading-relaxed drop-shadow-md">
                  Join a community where your success is our priority. We offer
                  personalized learning, state-of-the-art facilities, and a
                  supportive environment that nurtures every student's
                  potential.
                </p>

                <Link
                  to="/enquire"
                  className="inline-block bg-brand-red hover:bg-red-700 text-white font-manrope font-extrabold text-lg md:text-xl px-8 md:px-10 py-4 md:py-5 shadow-lg transition-all hover-lift rounded-xl"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </section>

          <div className="relative z-10"></div>
        </>
      )}
    </div>
  );
}
