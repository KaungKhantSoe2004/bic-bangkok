"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GEDPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const facilities = [
    {
      title: "Main Building",
      mainImage:
        "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      smallImages: [
        "https://images.unsplash.com/photo-1497486751825-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      ],
    },
    {
      title: "Library",
      mainImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      smallImages: [
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1524995997946-b7833e8f5577?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      ],
    },
    {
      title: "Lecture Room",
      mainImage:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      smallImages: [
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      ],
    },
    {
      title: "Accommodation",
      mainImage:
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      smallImages: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      ],
    },
    {
      title: "Gymnasium",
      mainImage:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      smallImages: [
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1524995997946-b7833e8f5577?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      ],
    },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white font-manrope">
        {/* Hero Section Skeleton */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0 bg-gray-800 shimmer"></div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto px-4">
              <div className="h-16 bg-gray-700 rounded mb-6 shimmer"></div>
              <div className="space-y-3">
                <div className="h-6 bg-gray-700 rounded shimmer"></div>
                <div className="h-6 bg-gray-700 rounded w-4/5 mx-auto shimmer"></div>
                <div className="h-6 bg-gray-700 rounded w-3/5 mx-auto shimmer"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections Skeleton */}
        <div className="space-y-16 py-16">
          {[1, 2, 3].map((i) => (
            <div key={i} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-800 rounded shimmer"></div>
                <div className="space-y-4">
                  <div className="h-8 bg-gray-700 rounded shimmer"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-700 rounded shimmer"></div>
                    <div className="h-4 bg-gray-700 rounded w-4/5 shimmer"></div>
                    <div className="h-4 bg-gray-700 rounded w-3/5 shimmer"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white font-manrope">
      {/* Hero Banner Section - IGCSE Style */}
   <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url('/ged.jpg')`,
    }}
  >
    <div className="absolute inset-0 bg-black/60"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 h-full flex items-end pb-10 sm:pb-14 md:pb-20 lg:pb-24">
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-lora mb-4 sm:mb-6 text-brand-beige">
          GED
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed">
          Your Pathway to the World's Top Universities. The General Educational
          Development (GED) is a globally recognized high school equivalency
          credential designed for individuals who did not complete traditional
          high school.
        </p>
      </div>
    </div>
  </div>
</section>

      <section className="relative h-96 md:h-[700px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-[20s] ease-linear hover:scale-110"
          style={{
            backgroundImage: `url('./lett.jpeg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>
        </div>

        {/* Floating Elements Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-brand-red rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-brand-beige rounded-full animate-bounce opacity-40"></div>
          <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-white rounded-full animate-ping opacity-30"></div>
        </div>
      </section>

      {/* What is Bridge International Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-dark-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-lora mb-8 text-brand-beige">
                What is Bridge International (BI)?
              </h2>
              <p className="text-lg md:text-xl text-white leading-relaxed mb-6">
                Bridge International (BI) is a premier educational institution
                in Bangkok, dedicated to guiding ambitious students toward top
                universities around the world.
              </p>
              <p className="text-lg md:text-xl text-white leading-relaxed">
                Open doors to universities worldwide including the US,
                Switzerland, Singapore, Malaysia and Thailand.
              </p>
            </div>
            <div className="relative">
              <img
                src="./gg.jpg"
                alt="Bridge International Campus"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GED Program Overview */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-lora mb-8 text-brand-red">
              GED Program
            </h2>
            <p className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed">
              The General Educational Development (GED) is an American High
              School diploma which is a globally recognized high school
              equivalency credential. It is designed for individuals who did not
              complete the traditional high school.
            </p>
          </div>
        </div>
      </section>

      {/* GED Subjects Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-dark-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-lora mb-8 text-brand-beige">
              GED Subjects
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Master these four essential subjects to earn your GED credential
              and unlock university opportunities
            </p>
          </div>

          {/* Subjects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                number: "01",
                title: "Reasoning Through Language Arts",
                description:
                  "Reading comprehension, writing skills, and language usage",
              },
              {
                number: "02",
                title: "Mathematical Reasoning",
                description:
                  "Algebra, geometry, statistics, and problem-solving",
              },
              {
                number: "03",
                title: "Science",
                description:
                  "Life science, physical science, and earth & space science",
              },
              {
                number: "04",
                title: "Social Studies",
                description: "History, civics, geography, and economics",
              },
            ].map((subject, index) => (
              <div
                key={index}
                className="relative bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {/* Number Badge */}
                <div className="absolute -left-4 top-8 w-20 h-16 bg-brand-red rounded-r-full flex items-center justify-center shadow-lg">
                  <span className="text-brand-beige font-bold text-2xl ml-2">
                    {subject.number}
                  </span>
                </div>

                {/* Content */}
                <div className="ml-12">
                  <h3 className="text-2xl font-bold text-brand-beige mb-4 group-hover:text-brand-red transition-colors duration-300">
                    {subject.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {subject.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Program Details Header */}
        </div>
      </section>

      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-lora font-bold text-center text-brand-red mb-12 md:mb-20">
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
                  16 years old
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13m6-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-beige mb-4 md:mb-6 group-hover:text-white transition-colors duration-300">
                English Level
              </h3>
              <p className="text-white text-lg md:text-xl leading-relaxed">
                English Proficiency Level{" "}
                <span className="text-brand-beige font-bold text-2xl md:text-3xl bg-brand-beige/10 px-2 py-1">
                  Intermediate
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
                Academic
              </h3>
              <p className="text-white text-lg md:text-xl leading-relaxed">
                Must pass the{" "}
                <span className="text-brand-beige font-bold text-lg md:text-xl bg-brand-beige/10 px-2 py-1">
                  entry test
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-dark-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-lora mb-8 text-brand-beige">
              Program Details
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about the duration and intake schedule
            </p>
          </div>

          {/* Program Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                number: "01",
                title: "Duration",
                description: "6 months",
              },
              {
                number: "02",
                title: "Monthly Intakes",
                description: "Every month, limited seats available",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {/* Number Badge */}
                <div className="absolute -left-4 top-8 w-20 h-16 bg-brand-red rounded-r-full flex items-center justify-center shadow-lg">
                  <span className="text-brand-beige font-bold text-2xl ml-2">
                    {item.number}
                  </span>
                </div>

                {/* Content */}
                <div className="ml-12">
                  <h3 className="text-2xl font-bold text-brand-beige mb-4 group-hover:text-brand-red transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-lora mb-8 text-brand-beige">
              School Fees
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Choose the plan that fits your visa requirements
            </p>
          </div>

          {/* Fee Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                number: "01",
                title: "Without VISA",
                description: "60,000 THB",
              },
              {
                number: "02",
                title: "With 9-Month VISA",
                description: "90,000 THB",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {/* Number Badge */}
                <div className="absolute -left-4 top-8 w-20 h-16 bg-brand-red rounded-r-full flex items-center justify-center shadow-lg">
                  <span className="text-brand-beige font-bold text-2xl ml-2">
                    {item.number}
                  </span>
                </div>

                {/* Content */}
                <div className="ml-12">
                  <h3 className="text-2xl font-bold text-brand-beige mb-4 group-hover:text-brand-red transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose BI Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-dark-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-lora mb-8 text-white">
              Why Choose BI?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover the advantages that make Bridge International your ideal
              choice for GED preparation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "ED Visa Support",
                description:
                  "Complete visa assistance for international students with 9 months visa support available",
              },
              {
                number: "02",
                title: "Experienced Qualified Teachers",
                description:
                  "Expert instructors with proven track records in GED preparation and student success",
              },
              {
                number: "03",
                title: "Small Class Sizes",
                description:
                  "Personalized attention with limited students per class for optimal learning experience",
              },
              {
                number: "04",
                title: "University Admission Support",
                description:
                  "Comprehensive guidance for university applications to institutions worldwide",
              },
              {
                number: "05",
                title: "Safe and Supportive International Learning Environment",
                description:
                  "Multicultural campus with comprehensive student support and modern facilities",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {/* Number Badge */}
                <div className="absolute -left-4 top-8 w-16 h-16 bg-red-800 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-yellow-200 font-bold text-xl">
                    {feature.number}
                  </span>
                </div>

                {/* Content */}
                <div className="ml-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-800 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Campus Section - Updated Design */}
      <section className="w-full bg-slate-900 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-amber-200 font-lora mb-4 sm:mb-6 md:mb-8 leading-tight">
              Our Campus
            </h2>
          </div>

          <div className="space-y-0">
            {/* Main Building Section */}
            <div className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden mb-0">
              <div className="absolute inset-0 bg-slate-900">
                {/* Geometric Red Accent Shapes - Top Right - Hidden on mobile */}
                <div className="absolute inset-0 overflow-hidden hidden md:block">
                  <div className="absolute top-0 right-0 w-full sm:w-3/4 md:w-2/3 h-2/3">
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-red-800 to-red-900 transform rotate-6 sm:rotate-12 origin-top-right opacity-90"></div>
                    <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-3/4 h-3/4 bg-gradient-to-bl from-red-700 to-red-800 transform -rotate-3 sm:-rotate-6 opacity-70"></div>
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
                <div className="flex flex-col items-center space-y-6 md:grid md:grid-cols-2 md:gap-8 lg:gap-12 xl:gap-16 md:items-center md:space-y-0">
                  {/* Title Section - Always first on mobile, right on desktop */}
                  <div className="text-center md:text-right order-1 md:order-2">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white font-lora mb-4 sm:mb-6 md:mb-8 leading-tight">
                      Main Building
                    </h3>
                  </div>

                  {/* Images Section - Second on mobile, left on desktop */}
                  <div className="relative order-2 md:order-1">
                    {/* Main Image */}
                    <div className="relative group mb-4 sm:mb-6">
                      <div className="w-full h-60 sm:h-72 md:h-80 lg:h-96 xl:h-[400px] overflow-hidden shadow-xl border-2 sm:border-4 border-white/20 group-hover:border-brand-beige transition-all duration-300">
                        <img
                          src="./building1.jpg"
                          alt="Main Building"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    {/* Three Small Circular Images */}
                    <div className="flex gap-2 sm:gap-3 md:gap-4 justify-center">
                      <div className="relative group">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-lg border-2 sm:border-3 border-white/30 group-hover:border-brand-beige transition-all duration-300 group-hover:scale-110">
                          <img
                            src="./building2.jpg"
                            alt="Building view 2"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </div>
                      <div className="relative group">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-lg border-2 sm:border-3 border-white/30 group-hover:border-brand-beige transition-all duration-300 group-hover:scale-110">
                          <img
                            src="./building3.jpg"
                            alt="Building view 3"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </div>
                      <div className="relative group">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-lg border-2 sm:border-3 border-white/30 group-hover:border-brand-beige transition-all duration-300 group-hover:scale-110">
                          <img
                            src="./building4.jpg"
                            alt="Building view 4"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Library Section */}
            <div className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden mb-0">
              <div className="absolute inset-0 bg-slate-900">
                {/* Geometric Red Accent Shapes - Bottom Left - Hidden on mobile */}
                <div className="absolute inset-0 overflow-hidden hidden md:block">
                  <div className="absolute bottom-0 left-0 w-full sm:w-3/4 md:w-2/3 h-2/3">
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-red-800 to-red-900 transform -rotate-6 sm:-rotate-12 origin-bottom-left opacity-90"></div>
                    <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-3/4 h-3/4 bg-gradient-to-tr from-red-700 to-red-800 transform rotate-3 sm:rotate-6 opacity-70"></div>
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
                <div className="flex flex-col items-center space-y-6 md:grid md:grid-cols-2 md:gap-8 lg:gap-12 xl:gap-16 md:items-center md:space-y-0">
                  {/* Title Section - Always first on mobile, left on desktop */}
                  <div className="text-center md:text-left order-1">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white font-lora mb-4 sm:mb-6 md:mb-8 leading-tight">
                      Library
                    </h3>
                  </div>

                  {/* Images Section - Second on mobile, right on desktop */}
                  <div className="relative order-2">
                    {/* Main Image */}
                    <div className="relative group mb-4 sm:mb-6">
                      <div className="w-full h-60 sm:h-72 md:h-80 lg:h-96 xl:h-[400px] overflow-hidden shadow-xl border-2 sm:border-4 border-white/20 group-hover:border-brand-beige transition-all duration-300">
                        <img
                          src="./library1.jpg"
                          alt="Library"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    {/* Three Small Circular Images */}
                    <div className="flex gap-2 sm:gap-3 md:gap-4 justify-center">
                      <div className="relative group">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-lg border-2 sm:border-3 border-white/30 group-hover:border-brand-beige transition-all duration-300 group-hover:scale-110">
                          <img
                            src="./library2.jpg"
                            alt="Library view 2"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </div>
                      <div className="relative group">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-lg border-2 sm:border-3 border-white/30 group-hover:border-brand-beige transition-all duration-300 group-hover:scale-110">
                          <img
                            src="./library3.jpg"
                            alt="Library view 3"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </div>
                      <div className="relative group">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-lg border-2 sm:border-3 border-white/30 group-hover:border-brand-beige transition-all duration-300 group-hover:scale-110">
                          <img
                            src="./library4.jpg"
                            alt="Library view 4"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lecture Room Section */}
            <div className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden mb-0">
              <div className="absolute inset-0 bg-slate-900">
                {/* Geometric Red Accent Shapes - Top Right - Hidden on mobile */}
                <div className="absolute inset-0 overflow-hidden hidden md:block">
                  <div className="absolute top-0 right-0 w-full sm:w-3/4 md:w-2/3 h-2/3">
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-red-800 to-red-900 transform rotate-6 sm:rotate-12 origin-top-right opacity-90"></div>
                    <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-3/4 h-3/4 bg-gradient-to-bl from-red-700 to-red-800 transform -rotate-3 sm:-rotate-6 opacity-70"></div>
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
                <div className="flex flex-col items-center space-y-6 md:grid md:grid-cols-2 md:gap-8 lg:gap-12 xl:gap-16 md:items-center md:space-y-0">
                  {/* Title Section - Always first on mobile, right on desktop */}
                  <div className="text-center md:text-right order-1 md:order-2">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white font-lora mb-4 sm:mb-6 md:mb-8 leading-tight">
                      Lecture Room
                    </h3>
                  </div>

                  {/* Images Section - Second on mobile, left on desktop */}
                  <div className="relative order-2 md:order-1">
                    {/* Main Image */}
                    <div className="relative group mb-4 sm:mb-6">
                      <div className="w-full h-60 sm:h-72 md:h-80 lg:h-96 xl:h-[400px] overflow-hidden shadow-xl border-2 sm:border-4 border-white/20 group-hover:border-brand-beige transition-all duration-300">
                        <img
                          src="./class1.jpg"
                          alt="Lecture Room"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    {/* Three Small Circular Images */}
                    <div className="flex gap-2 sm:gap-3 md:gap-4 justify-center">
                      <div className="relative group">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-lg border-2 sm:border-3 border-white/30 group-hover:border-brand-beige transition-all duration-300 group-hover:scale-110">
                          <img
                            src="./class2.jpg"
                            alt="Class view 2"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </div>
                      <div className="relative group">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-lg border-2 sm:border-3 border-white/30 group-hover:border-brand-beige transition-all duration-300 group-hover:scale-110">
                          <img
                            src="./class3.jpg"
                            alt="Class view 3"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </div>
                      <div className="relative group">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-lg border-2 sm:border-3 border-white/30 group-hover:border-brand-beige transition-all duration-300 group-hover:scale-110">
                          <img
                            src="./class4.jpg"
                            alt="Class view 4"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gymnasium Section */}
            <div className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden mb-0">
              <div className="absolute inset-0 bg-slate-900">
                {/* Geometric Red Accent Shapes - Bottom Left - Hidden on mobile */}
                <div className="absolute inset-0 overflow-hidden hidden md:block">
                  <div className="absolute bottom-0 left-0 w-full sm:w-3/4 md:w-2/3 h-2/3">
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-red-800 to-red-900 transform -rotate-6 sm:-rotate-12 origin-bottom-left opacity-90"></div>
                    <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-3/4 h-3/4 bg-gradient-to-tr from-red-700 to-red-800 transform rotate-3 sm:rotate-6 opacity-70"></div>
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
                <div className="flex flex-col items-center space-y-6 md:grid md:grid-cols-2 md:gap-8 lg:gap-12 xl:gap-16 md:items-center md:space-y-0">
                  {/* Title Section - Always first on mobile, left on desktop */}
                  <div className="text-center md:text-left order-1">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white font-lora mb-4 sm:mb-6 md:mb-8 leading-tight">
                      Gymnasium
                    </h3>
                  </div>

                  {/* Images Section - Second on mobile, right on desktop */}
                  <div className="relative order-2">
                    {/* Main Image */}
                    <div className="relative group mb-4 sm:mb-6">
                      <div className="w-full h-60 sm:h-72 md:h-80 lg:h-96 xl:h-[400px] overflow-hidden shadow-xl border-2 sm:border-4 border-white/20 group-hover:border-brand-beige transition-all duration-300">
                        <img
                          src="./gym1.jpg"
                          alt="Gymnasium"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    {/* Three Small Circular Images */}
                    <div className="flex gap-2 sm:gap-3 md:gap-4 justify-center">
                      <div className="relative group">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-lg border-2 sm:border-3 border-white/30 group-hover:border-brand-beige transition-all duration-300 group-hover:scale-110">
                          <img
                            src="./gym2.jpg"
                            alt="Gym view 2"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </div>
                      <div className="relative group">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-lg border-2 sm:border-3 border-white/30 group-hover:border-brand-beige transition-all duration-300 group-hover:scale-110">
                          <img
                            src="./gym3.jpg"
                            alt="Gym view 3"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </div>
                      <div className="relative group">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-lg border-2 sm:border-3 border-white/30 group-hover:border-brand-beige transition-all duration-300 group-hover:scale-110">
                          <img
                            src="./gym4.jpg"
                            alt="Gym view 4"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Accommodation Section */}
            <div className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-slate-900">
                {/* Geometric Red Accent Shapes - Top Right - Hidden on mobile */}
                <div className="absolute inset-0 overflow-hidden hidden md:block">
                  <div className="absolute top-0 right-0 w-full sm:w-3/4 md:w-2/3 h-2/3">
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-red-800 to-red-900 transform rotate-6 sm:rotate-12 origin-top-right opacity-90"></div>
                    <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-3/4 h-3/4 bg-gradient-to-bl from-red-700 to-red-800 transform -rotate-3 sm:-rotate-6 opacity-70"></div>
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
                <div className="flex flex-col items-center space-y-6 md:grid md:grid-cols-2 md:gap-8 lg:gap-12 xl:gap-16 md:items-center md:space-y-0">
                  {/* Title Section - Always first on mobile, right on desktop */}
                  <div className="text-center md:text-right order-1 md:order-2">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white font-lora mb-4 sm:mb-6 md:mb-8 leading-tight">
                      Accommodation
                    </h3>
                  </div>

                  {/* Images Section - Second on mobile, left on desktop */}
                  <div className="relative order-2 md:order-1">
                    {/* Main Image */}
                    <div className="relative group mb-4 sm:mb-6">
                      <div className="w-full h-60 sm:h-72 md:h-80 lg:h-96 xl:h-[400px] overflow-hidden shadow-xl border-2 sm:border-4 border-white/20 group-hover:border-brand-beige transition-all duration-300">
                        <img
                          src="./accommodation1.jpg"
                          alt="Accommodation"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    {/* Three Small Circular Images */}
                    <div className="flex gap-2 sm:gap-3 md:gap-4 justify-center">
                      <div className="relative group">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-lg border-2 sm:border-3 border-white/30 group-hover:border-brand-beige transition-all duration-300 group-hover:scale-110">
                          <img
                            src="./accommodation2.jpg"
                            alt="Accommodation view 2"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </div>
                      <div className="relative group">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-lg border-2 sm:border-3 border-white/30 group-hover:border-brand-beige transition-all duration-300 group-hover:scale-110">
                          <img
                            src="./accommodation3.jpg"
                            alt="Accommodation view 3"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </div>
                      <div className="relative group">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-lg border-2 sm:border-3 border-white/30 group-hover:border-brand-beige transition-all duration-300 group-hover:scale-110">
                          <img
                            src="./accommodation4.jpg"
                            alt="Accommodation view 4"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Apply CTA */}
      <section className="relative py-20 md:py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-lora mb-8 text-brand-beige">
            Ready to Start Your GED Journey?
          </h2>
          <p className="text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto leading-relaxed">
            Take the first step toward achieving your educational goals. Join
            Bridge International and unlock your pathway to the world's top
            universities.
          </p>

          <button
            onClick={() => {
              navigate("/enquire");
            }}
            className="bg-brand-red hover:bg-red-700 text-white font-bold py-4 px-12 text-lg transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl rounded-lg"
          >
            ENROLL NOW
          </button>
        </div>
      </section>
    </div>
  );
};

export default GEDPage;
