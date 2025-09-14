"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OssdPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [activePathway, setActivePathway] = useState("engineering");
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pathwayData = {
    engineering: {
      title: "Engineering & Technology",
      courses: [
        { code: "ENG3U", name: "English – Grade 11 (University)" },
        {
          code: "MFH4U",
          name: "Grade 12 Advanced Functions Course (University)",
        },
        {
          code: "MDM4U",
          name: "Mathematics Of Data Management – Grade 12 (University)",
        },
        { code: "ENG4U", name: "Grade 12 English (University)" },
        { code: "SCH4U", name: "Chemistry - Grade 12 (University)" },
        { code: "SPH4U", name: "Physics - Grade 12 (University)" },
        { code: "MCV4U", name: "Calculus & Vectors" },
      ],
    },
    business: {
      title: "Business",
      courses: [
        { code: "ENG3U", name: "English – Grade 11 (University)" },
        {
          code: "MFH4U",
          name: "Grade 12 Advanced Functions Course (University)",
        },
        {
          code: "MDM4U",
          name: "Mathematics Of Data Management – Grade 12 (University)",
        },
        {
          code: "BOH4M",
          name: "Business Leadership: Management Fundamentals – Grade 12 (University/College)",
        },
        { code: "ENG4U", name: "Grade 12 English (University)" },
        {
          code: "BBB4M",
          name: "International Business Fundamentals – Grade 12 (University/College)",
        },
        { code: "CIA4U", name: "Analysing Current Economics Issues" },
      ],
    },
    science: {
      title: "Science",
      courses: [
        { code: "ENG3U", name: "English – Grade 11 (University)" },
        {
          code: "MFH4U",
          name: "Grade 12 Advanced Functions Course (University)",
        },
        {
          code: "MDM4U",
          name: "Mathematics Of Data Management – Grade 12 (University)",
        },
        { code: "MCV4U", name: "Calculus & Vectors - Grade 12 (University)" },
        { code: "ENG4U", name: "Grade 12 English (University)" },
        { code: "SBI4U", name: "Biology - Grade 12 (University)" },
        { code: "SCH4U", name: "Chemistry - Grade 12 (University)" },
      ],
    },
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-blue text-white font-manrope">
        {/* Hero Banner Skeleton */}
        <section className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] flex items-end justify-start overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-brand-red/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-brand-beige/20 rounded-full animate-pulse"></div>
          </div>

          <div className="relative z-10 px-4 sm:px-6 md:px-8 mb-4 sm:mb-6 md:mb-10 ml-2 sm:ml-6 md:ml-12 max-w-full sm:max-w-3xl">
            <div className="h-16 sm:h-20 md:h-24 lg:h-28 bg-gradient-to-r from-gray-600 to-gray-500 rounded-lg mb-3 sm:mb-4 animate-pulse"></div>
            <div className="space-y-3">
              <div className="h-4 sm:h-5 md:h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg animate-pulse"></div>
              <div className="h-4 sm:h-5 md:h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg w-5/6 animate-pulse"></div>
              <div className="h-4 sm:h-5 md:h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg w-4/5 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Full Width Image Skeleton */}
        <section className="relative h-[400px] sm:h-[500px] md:h-[660px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-red/90 via-brand-red/60 to-transparent"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg
              className="block w-full h-13 sm:h-16 md:h-18"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 1200 120"
            >
              <path
                d="M0,0 C250,100 950,-50 1200,60 L1200,120 L0,120 Z"
                fill="#82062c"
              />
            </svg>
          </div>
        </section>

        {/* Content Sections Skeleton */}
        {[1, 2, 3].map((section) => (
          <section
            key={section}
            className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-dark-blue"
          >
            <div className="max-w-7xl mx-auto">
              <div className="h-12 sm:h-16 md:h-20 bg-gradient-to-r from-gray-600 to-gray-500 rounded-lg mb-12 md:mb-20 mx-auto w-1/2 animate-pulse"></div>
              <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="space-y-6 md:space-y-8">
                  <div className="space-y-4">
                    <div className="h-6 md:h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg animate-pulse"></div>
                    <div className="h-6 md:h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg w-5/6 animate-pulse"></div>
                    <div className="h-6 md:h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg w-4/5 animate-pulse"></div>
                  </div>
                  <div className="bg-gradient-to-r from-black to-gray-900 p-6 md:p-8 border-l-4 border-brand-red">
                    <div className="h-8 md:h-10 bg-gradient-to-r from-gray-600 to-gray-500 rounded-lg mb-4 md:mb-6 animate-pulse"></div>
                    <div className="space-y-3 md:space-y-4">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="flex items-center">
                          <div className="w-3 h-3 bg-brand-red rounded-full mr-4 animate-pulse"></div>
                          <div className="h-5 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg flex-1 animate-pulse"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-8 lg:mt-0">
                  <div className="bg-white p-4 sm:p-6 md:p-8 shadow-2xl max-w-sm w-full">
                    <div className="h-32 bg-gradient-to-r from-gray-300 to-gray-200 rounded-lg animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Programs Section Skeleton */}
        <section className="relative py-20 md:py-32 px-4 sm:px-6 md:px-8 bg-dark-blue overflow-hidden">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="h-16 md:h-20 bg-gradient-to-r from-gray-600 to-gray-500 rounded-lg mb-6 mx-auto w-1/2 animate-pulse"></div>
              <div className="h-6 md:h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg mx-auto w-3/4 animate-pulse"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mb-20">
              {[1, 2, 3].map((btn) => (
                <div
                  key={btn}
                  className="h-16 w-48 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg animate-pulse"
                ></div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="bg-gray-900 backdrop-blur-sm border-l-4 border-brand-red p-6"
                >
                  <div className="flex flex-col gap-4 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="h-10 w-20 bg-gradient-to-r from-gray-600 to-gray-500 rounded-lg animate-pulse"></div>
                      <div className="h-6 w-16 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg animate-pulse"></div>
                    </div>
                    <div className="h-4 w-32 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg animate-pulse"></div>
                  </div>
                  <div className="h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-blue text-white font-manrope">
      <section className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] flex items-end justify-start overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(./ossd.jpg)" }}
        >
          {/* Subtle bottom gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </div>

        {/* Text at bottom-left */}
        <div className="relative z-10 px-4 sm:px-6 md:px-8 mb-4 sm:mb-6 md:mb-10 ml-2 sm:ml-6 md:ml-12 max-w-full sm:max-w-3xl">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-lora font-bold text-white leading-tight mb-3 sm:mb-4">
            What is <span className="text-brand-red">OSSD</span>?
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-2 sm:mb-3">
            <span className="text-brand-red font-bold text-lg sm:text-xl">
              O
            </span>
            ntario{" "}
            <span className="text-brand-red font-bold text-lg sm:text-xl">
              S
            </span>
            econdary{" "}
            <span className="text-brand-red font-bold text-lg sm:text-xl">
              S
            </span>
            chool{" "}
            <span className="text-brand-red font-bold text-lg sm:text-xl">
              D
            </span>
            iploma (OSSD) is a diploma granted to secondary school graduates by
            the Canadian province of Ontario.
          </p>
          <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
            OSSD is recognized by most universities in{" "}
            <span className="text-brand-red font-semibold">
              USA, Canada, UK, Hong Kong, Australia
            </span>{" "}
            and other English-speaking countries.
          </p>
        </div>
      </section>

      <section className="relative h-[400px] sm:h-[500px] md:h-[660px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-700 hover:scale-110"
          style={{
            backgroundImage: "url(./ossdbb.webp)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-red/90 via-brand-red/60 to-transparent"></div>
        </div>

        {/* SVG wave divider at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="block w-full h-13 sm:h-16 md:h-18"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
          >
            <path
              d="M0,0 C250,100 950,-50 1200,60 L1200,120 L0,120 Z"
              fill="#82062c"
            />
          </svg>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-dark-blue">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-lora font-bold text-center mb-12 md:mb-20 text-brand-beige">
            Who do we work with?
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8">
              <p className="text-lg md:text-xl leading-relaxed text-gray-200">
                <span className="text-brand-red font-semibold text-xl md:text-2xl">
                  Rosedale Global High School
                </span>
                , is operated under
                <span className="text-brand-beige font-semibold">
                  {" "}
                  Rosedale International Education Inc
                </span>
                . The school is dedicated to building strong partnerships with
                top secondary schools around the world to provide students with
                access to{" "}
                <span className="text-brand-red font-semibold">
                  differentiated education
                </span>{" "}
                with an emphasis on{" "}
                <span className="text-brand-beige font-semibold">
                  higher order thinking skills
                </span>
                , while studying in their local school's classroom.
              </p>

              <div className="bg-gradient-to-r from-black to-gray-900 p-6 md:p-8 border-l-4 border-brand-red shadow-xl">
                <h3 className="text-2xl md:text-3xl font-lora font-bold text-brand-beige mb-4 md:mb-6">
                  Why do we work with Rosedale?
                </h3>
                <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
                  <li className="flex items-center group">
                    <div className="w-3 h-3 bg-brand-red rounded-full mr-4 group-hover:scale-125 transition-transform duration-300 flex-shrink-0"></div>
                    <span className="text-brand-red font-semibold group-hover:text-brand-beige transition-colors duration-300">
                      Top University Acceptance
                    </span>
                  </li>
                  <li className="flex items-center group">
                    <div className="w-3 h-3 bg-brand-red rounded-full mr-4 group-hover:scale-125 transition-transform duration-300 flex-shrink-0"></div>
                    <span className="text-brand-red font-semibold group-hover:text-brand-beige transition-colors duration-300">
                      Recommended by Canadian Embassy
                    </span>
                  </li>
                  <li className="flex items-center group">
                    <div className="w-3 h-3 bg-brand-red rounded-full mr-4 group-hover:scale-125 transition-transform duration-300 flex-shrink-0"></div>
                    <span className="text-brand-red font-semibold group-hover:text-brand-beige transition-colors duration-300">
                      Partners with NUS, University of Toronto, HKU, University
                      of Waterloo
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center mt-8 lg:mt-0">
              <div className="bg-white p-4 sm:p-6 md:p-8 shadow-2xl hover:shadow-brand-red/20 transition-all duration-500 transform hover:scale-105 max-w-sm w-full">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rosedalelogo-BNX6vevBHIfi1iGlWAyJlRmqqNXpjR.png"
                  alt="Rosedale Global High School Logo"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0 px-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-full mx-auto">
          <div className="grid lg:grid-cols-2 items-stretch min-h-[600px] md:min-h-[700px]">
            {/* Image first on mobile */}
            <div className="order-1 lg:order-1 w-full">
              <div className="relative group h-64 sm:h-80 md:h-full overflow-hidden">
                <img
                  src="./globalst.webp"
                  alt="Global Strategic Pathway"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/50"></div>
              </div>
            </div>

            {/* Text second on mobile */}
            <div className="order-2 lg:order-2 px-4 sm:px-6 md:px-8 lg:px-12 flex items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-lora font-bold text-brand-beige mb-6 md:mb-8 leading-tight">
                  GLOBAL STRATEGIC PATHWAY
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white mb-6 md:mb-8">
                  After obtaining the OSSD certificate, not only universities in
                  <span className="text-brand-beige font-semibold bg-brand-beige/10 px-2 py-1 mx-1  border-brand-beige/30">
                    Canada, Australia, UK, United States, and Japan
                  </span>
                  but also be placed in
                  <span className="text-brand-red font-semibold bg-brand-red/10 px-2 py-1  border-brand-red/30 mx-1">
                    Singapore public universities
                  </span>
                  .
                </p>
                {/* <div className="flex space-x-4">
                  <div className="w-2 h-12 md:h-16 bg-brand-red"></div>
                  <div className="w-2 h-12 md:h-16 bg-brand-beige"></div>
                  <div className="w-2 h-12 md:h-16 bg-white"></div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-32 px-4 sm:px-6 md:px-8 bg-dark-blue overflow-hidden">
        {/* Elegant background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-beige/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Elegant Header */}
          <div className="text-center mb-20">
            <div className="inline-block">
              <h2 className="text-5xl md:text-7xl font-lora font-bold text-white mb-6 relative">
                OSSD
                <span className="text-brand-red ml-4">Programmes</span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-beige to-transparent"></div>
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mt-12 leading-relaxed font-light">
              Depending on the student's background education record and the
              pathway they are interested in pursuing at the university,
              students can choose from the following specialized programmes.
            </p>
          </div>

          {/* Elegant Pathway Selection */}
          <div className="flex flex-wrap justify-center gap-6 mb-20">
            {Object.entries(pathwayData).map(([key, pathway]) => (
              <button
                key={key}
                onClick={() => setActivePathway(key)}
                className={`group relative px-10 py-6 font-bold text-xl transition-all duration-500 overflow-hidden ${
                  activePathway === key
                    ? "text-white"
                    : "text-brand-beige hover:text-white"
                }`}
              >
                {/* Button background */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    activePathway === key
                      ? "bg-brand-red"
                      : "bg-transparent border-2 border-brand-beige group-hover:bg-brand-red group-hover:border-brand-red"
                  }`}
                ></div>

                {/* Button text */}
                <span className="relative z-10">{pathway.title}</span>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            ))}
          </div>

          {/* Course Display - No container boxes, better grid layout */}
          <div className="w-full">
            {/* Pathway Title */}
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-6xl font-lora font-bold text-brand-beige mb-4">
                {pathwayData[activePathway].title}
              </h3>
              <div className="w-32 h-1 bg-brand-red mx-auto mb-6"></div>
              <p className="text-xl text-gray-300 font-light">
                Comprehensive curriculum designed for academic excellence
              </p>
            </div>

            {/* Course Grid - Better layout for PC, responsive for mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              {pathwayData[activePathway].courses.map((course, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-900 backdrop-blur-sm border-l-4 border-brand-red hover:border-brand-beige transition-all duration-500 p-6 hover:shadow-2xl hover:shadow-brand-red/20 hover:transform hover:-translate-y-2"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {/* Course header */}
                  <div className="flex flex-col gap-4 mb-4">
                    <div className="flex items-center justify-between">
                      {/* Course code */}
                      <div className="bg-brand-red text-white font-bold text-lg px-4 py-2 group-hover:bg-brand-beige group-hover:text-black transition-all duration-300">
                        {course.code}
                      </div>

                      {/* Grade level indicator */}
                      <div className="text-brand-beige font-semibold text-sm bg-brand-beige/20 px-3 py-1 border border-brand-beige/30">
                        {course.code.includes("3") ? "Grade 11" : "Grade 12"}
                      </div>
                    </div>

                    {/* University level badge */}
                    <div className="text-brand-beige/80 text-xs font-medium">
                      University Level Course
                    </div>
                  </div>

                  {/* Course name */}
                  <h4 className="text-white text-lg font-light leading-relaxed group-hover:text-brand-beige transition-colors duration-300 min-h-[3rem]">
                    {course.name}
                  </h4>

                  {/* Hover indicator line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-brand-red to-brand-beige group-hover:w-full transition-all duration-500"></div>
                </div>
              ))}
            </div>

            {/* Call to action */}
            <div className="text-center mt-16 pt-12 border-t border-gray-700">
              <p className="text-gray-300 text-lg mb-8 font-light">
                Ready to begin your academic journey with{" "}
                {pathwayData[activePathway].title}?
              </p>
              <button className="bg-brand-red hover:bg-red-700 text-white font-bold py-4 px-12 text-lg transition-all duration-300 hover:shadow-xl hover:shadow-brand-red/30 border border-brand-red hover:border-red-700">
                Learn More About This Pathway
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-lora font-bold text-center text-brand-red mb-12 md:mb-20">
            Entry Requirements
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            <div className="bg-dark-blue p-6 sm:p-8 md:p-10 text-center border-2 border-brand-beige/30 hover:border-brand-beige transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-brand-beige/30 group">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-brand-beige flex items-center justify-center mx-auto mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                <svg
                  className="w-10 h-10 md:w-12 md:h-12 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-beige mb-4 md:mb-6 group-hover:text-white transition-colors duration-300">
                Age
              </h3>
              <p className="text-white text-lg md:text-xl leading-relaxed">
                Applicants must be at least{" "}
                <span className="text-brand-beige font-bold text-2xl md:text-3xl bg-brand-beige/10 px-2 py-1">
                  15 years old
                </span>{" "}
                to be eligible for enrollment.
              </p>
            </div>

            <div className="bg-dark-blue p-6 sm:p-8 md:p-10 text-center border-2 border-brand-beige/30 hover:border-brand-beige transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-brand-beige/30 group">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-brand-beige flex items-center justify-center mx-auto mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                <svg
                  className="w-10 h-10 md:w-12 md:h-12 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13m0-13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-beige mb-4 md:mb-6 group-hover:text-white transition-colors duration-300">
                English Level
              </h3>
              <p className="text-white text-lg md:text-xl leading-relaxed">
                Academic International English Language Testing System{" "}
                <span className="text-brand-beige font-bold text-2xl md:text-3xl bg-brand-beige/10 px-2 py-1">
                  (IELTS) 5.5
                </span>
              </p>
            </div>

            <div className="bg-dark-blue p-6 sm:p-8 md:p-10 text-center border-2 border-brand-beige/30 hover:border-brand-beige transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-brand-beige/30 group sm:col-span-2 lg:col-span-1">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-brand-beige flex items-center justify-center mx-auto mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                <svg
                  className="w-10 h-10 md:w-12 md:h-12 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-beige mb-4 md:mb-6 group-hover:text-white transition-colors duration-300">
                Entry Assessment
              </h3>
              <p className="text-white text-lg md:text-xl leading-relaxed">
                You'll be asked to sit{" "}
                <span className="text-brand-beige font-bold text-lg md:text-xl bg-brand-beige/10 px-2 py-1">
                  admissions tests
                </span>{" "}
                in your chosen subjects, as well as an{" "}
                <span className="text-brand-beige font-bold text-lg md:text-xl bg-brand-beige/10 px-2 py-1">
                  online aptitude test
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-0 px-0 bg-gradient-to-b from-gray-800 to-black">
        <div className="max-w-full mx-auto">
          <div className="grid lg:grid-cols-2 items-stretch min-h-[600px] md:min-h-[700px]">
            {/* Image - shown first on mobile */}
            <div className="w-full lg:order-2 order-1">
              <div className="relative group h-full overflow-hidden">
                <img
                  src="./wcu.webp"
                  alt="Why Choose OSSD"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-800/50"></div>
              </div>
            </div>

            {/* Text content - shown second on mobile */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 flex items-center lg:order-1 order-2">
              <div>
                <h2 className="text-3xl mt-2 sm:text-4xl md:text-5xl lg:text-6xl font-lora font-bold text-brand-red mb-8 md:mb-12 leading-tight">
                  Why Choose OSSD?
                </h2>
                <div className="space-y-4 md:space-y-6">
                  <div className="bg-dark-blue p-6 md:p-8 border-2 border-white/30 hover:border-brand-red transition-all duration-500 transform hover:translate-x-2 group">
                    <h3 className="text-xl md:text-2xl font-bold text-brand-beige mb-3 md:mb-4 group-hover:text-brand-beige transition-colors duration-300">
                      Global Recognition
                    </h3>
                    <p className="text-white text-base md:text-lg leading-relaxed">
                      Accepted by top universities worldwide including Ivy
                      League institutions
                    </p>
                  </div>
                  <div className="bg-dark-blue p-6 md:p-8 border-2 border-white/30 hover:border-brand-red transition-all duration-500 transform hover:translate-x-2 group">
                    <h3 className="text-xl md:text-2xl font-bold text-brand-beige mb-3 md:mb-4 group-hover:text-brand-red transition-colors duration-300">
                      Flexible Learning
                    </h3>
                    <p className="text-white text-base md:text-lg leading-relaxed">
                      Study in your local environment while earning a Canadian
                      diploma
                    </p>
                  </div>
                  <div className="bg-dark-blue p-6 md:p-8 border-2 border-white/30 hover:border-white transition-all duration-500 transform hover:translate-x-2 group">
                    <h3 className="text-xl md:text-2xl font-bold text-brand-beige mb-3 md:mb-4 group-hover:text-brand-beige transition-colors duration-300">
                      University Preparation
                    </h3>
                    <p className="text-white text-base md:text-lg leading-relaxed">
                      Comprehensive curriculum designed for higher education
                      success
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-105"
          style={{
            backgroundImage: "url(./ossdgra.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-lora font-bold text-brand-red mb-6 md:mb-8 leading-tight">
            Ready to Apply?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 md:mb-12 leading-relaxed font-light">
            Join a community where your success is our priority. We offer
            personalized learning, state-of-the-art facilities, and a supportive
            environment that nurtures every student's potential.
          </p>
          <button
            onClick={() => {
              navigate("/enquire");
            }}
            className="bg-brand-red hover:bg-red-700 text-white font-bold py-4 px-8 sm:py-5 sm:px-12 md:py-6 md:px-16 text-lg sm:text-xl md:text-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-brand-red/30 border-2 border-brand-red hover:border-red-700"
          >
            APPLY NOW
          </button>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
};

export default OssdPage;
