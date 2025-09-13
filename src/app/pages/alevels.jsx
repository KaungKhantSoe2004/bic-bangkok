"use client"

import { useState, useEffect } from "react"

export default function ALevelsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [activePathway, setActivePathway] = useState("Business & Economics")

  useEffect(() => {
    window.scrollTo(0, 0)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 6000)

    return () => clearTimeout(timer)
  }, [])

  const pathways = {
    "Business & Economics": [
      "English Language",
      "Mathematics B",
      "Further Pure Maths",
      "Physics",
      "Chemistry",
      "Business or Economics",
      "ICT",
    ],
    Engineering: [
      "English Language",
      "Mathematics B",
      "Further Pure Maths",
      "Physics",
      "Chemistry",
      "Business",
      "ICT or Computer Science",
    ],
    Science: [
      "English Language",
      "Mathematics B",
      "Further Pure Maths",
      "Physics",
      "Chemistry",
      "Biology",
      "Business or ICT",
    ],
    "IT/Computer Science": [
      "English Language",
      "Mathematics B",
      "Further Pure Maths",
      "Physics",
      "Chemistry",
      "ICT or Computer Science",
      "Business",
    ],
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white font-manrope">
        {/* Hero Banner Skeleton */}
        <section className="relative h-[300px] sm:h-[400px] md:h-screen flex items-end justify-start w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-brand-red/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-brand-beige/20 rounded-full animate-pulse"></div>
          </div>

          <div className="relative z-10 p-4 sm:p-8 md:p-16 max-w-2xl text-left">
            <div className="h-12 sm:h-16 md:h-20 bg-gradient-to-r from-gray-600 to-gray-500 rounded-lg mb-4 sm:mb-6 animate-pulse"></div>
            <div className="h-6 sm:h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg mb-2 animate-pulse"></div>
            <div className="h-6 sm:h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg w-3/4 animate-pulse"></div>
          </div>
        </section>

        {/* Full Width Image Skeleton */}
        <section className="relative h-96 md:h-[600px]">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
          </div>
        </section>

        {/* Content Sections Skeleton */}
        {[1, 2, 3].map((section) => (
          <section key={section} className="flex flex-col lg:flex-row min-h-screen">
            <div className="lg:w-1/2 h-64 lg:h-auto">
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-700 animate-pulse"></div>
            </div>
            <div className="lg:w-1/2 bg-gray-900 flex items-center">
              <div className="p-8 md:p-16 w-full">
                <div className="h-10 md:h-12 bg-gradient-to-r from-gray-600 to-gray-500 rounded-lg mb-8 animate-pulse"></div>
                <div className="space-y-4">
                  <div className="h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg animate-pulse"></div>
                  <div className="h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg w-5/6 animate-pulse"></div>
                  <div className="h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg w-4/5 animate-pulse"></div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Benefits Section Skeleton */}
        <section className="bg-gray-900 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="h-12 bg-gradient-to-r from-gray-600 to-gray-500 rounded-lg mb-16 mx-auto w-1/2 animate-pulse"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="text-center">
                  <div className="h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg mb-4 animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg animate-pulse"></div>
                    <div className="h-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg w-4/5 mx-auto animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white font-manrope">
      {/* Hero Banner Section */}
      <section className="relative h-[300px] sm:h-[400px] md:h-screen flex items-end justify-start w-full">
        <div
          className="absolute inset-0 bg-cover bg-center w-full h-full"
          style={{ backgroundImage: "url(./alevels.jpg)" }}
        >
          {/* Subtle bottom gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 p-4 sm:p-8 md:p-16 max-w-2xl text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-lora text-white mb-4 sm:mb-6 leading-tight">
            What is A-Levels?
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-brand-beige leading-relaxed">
            <span className="text-brand-red font-semibold">Global Recognition:</span> A-levels (Advanced Levels) is an
            internationally recognized UK qualification for students aged 16–19.
          </p>
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="relative h-96 md:h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('./studentsStudying.webp')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
        </div>
      </section>

      {/* Global Recognition Section - Left Image, Right Text */}
      <section className="flex flex-col lg:flex-row min-h-screen">
        <div className="lg:w-1/2 h-64 lg:h-auto">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('./gr.jpg')`,
            }}
          ></div>
        </div>

        <div className="lg:w-1/2 bg-gray-900 flex items-center">
          <div className="p-8 md:p-16">
            <h2 className="text-3xl md:text-4xl font-bold font-lora text-brand-red mb-8">Global Recognition</h2>
            <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
              A-levels (Advanced Levels) is an internationally recognized UK qualification for students aged 16–19.
            </p>
            <p className="text-lg text-brand-beige mb-6 font-semibold">
              Accepted by top universities worldwide, including:
            </p>
            <ul className="space-y-3 text-white">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-brand-red rounded-full mr-4"></div>
                Oxford, Cambridge, LSE, UCL
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-brand-red rounded-full mr-4"></div>
                Ivy League & Top 100 US universities
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-brand-red rounded-full mr-4"></div>
                Group of Eight (Australia)
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-brand-red rounded-full mr-4"></div>
                Top universities in Canada, Singapore, and Hong Kong
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our A-Level Courses Section - Left Text, Right Image */}
      <section className="flex flex-col lg:flex-row min-h-screen">
        <div className="lg:w-1/2 bg-dark-blue flex items-center">
          <div className="p-8 md:p-16">
            <h2 className="text-3xl md:text-4xl font-bold font-lora text-brand-red mb-8">OUR A-LEVEL COURSES</h2>
            <p className="text-lg md:text-xl text-white leading-relaxed">
              At BIC, we offer a two-year pathway. Both offer an entirely personalized journey for each student – from
              the first advisor meeting to the final university destination.
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 h-64 lg:h-auto">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('./clas.jpg')`,
            }}
          ></div>
        </div>
      </section>

      {/* Global Strategic Pathway Section - Left Image, Right Text */}
      <section className="flex flex-col lg:flex-row min-h-screen">
        <div className="lg:w-1/2 h-64 lg:h-auto">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('./aglobal.webp')`,
            }}
          ></div>
        </div>

        <div className="lg:w-1/2 bg-dark-blue flex items-center">
          <div className="p-8 md:p-16">
            <h2 className="text-3xl md:text-4xl font-bold font-lora text-brand-red mb-8">GLOBAL STRATEGIC PATHWAY</h2>
            <p className="text-lg md:text-xl text-white leading-relaxed">
              Every student follows their own Global Strategic Pathway at BIC. This will map out your learning journey
              from start to finish, creating a tailored academic, personal, and career-focused programme that's entirely
              based around your talents and interests, aims and aspirations.
            </p>
          </div>
        </div>
      </section>

      {/* Why A-Levels at BIC - Key Facts Section */}
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-lora text-brand-red text-center mb-16">
            Why A-Levels at BIC?
          </h2>

          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-beige mb-8 text-center">Key Facts</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-brand-red rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-white">Pearson Edexcel A-levels is offered</p>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-brand-red rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-white">15 - 18 months program (fast track)</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-brand-red rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-white">Students can choose to study 3 to 4 subjects of their choice</p>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-brand-red rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-white">
                    There will be 2 Exams: AS and A2, AS Exam taking place in the mid of the program and A2 Exam at the
                    end
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why A-Levels Benefits Section */}
      <section className="bg-dark-blue py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-brand-red mb-4">In-Depth Subject Mastery</h3>
              <p className="text-white text-sm leading-relaxed">
                Builds strong academic foundations in your chosen field (e.g., Medicine, Law, Engineering)
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-brand-red mb-4">Flexibility & Customization</h3>
              <p className="text-white text-sm leading-relaxed">
                Choose subjects that align with your strengths, interests, and career goals. Create a personalized
                academic path with expert advisors.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-brand-red mb-4">University Mentorship</h3>
              <p className="text-white text-sm leading-relaxed">Expert guidance for competitive university admission</p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-brand-red mb-4">Skills for University & Beyond</h3>
              <p className="text-white text-sm leading-relaxed">
                Develops critical thinking, problem-solving, independent research, and academic writing. Prepares you
                for top universities and competitive careers.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-brand-beige mb-4">Recognized & Respected Worldwide</h3>
            <p className="text-white max-w-3xl mx-auto leading-relaxed">
              Pearson Edexcel A-Levels are known for high standards and academic rigour. Trusted by universities and
              employers for over 60 years.
            </p>
          </div>
        </div>
      </section>

      {/* A-Level Subjects Section */}
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-lora text-brand-red mb-6">A-Level Subjects</h2>
            <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
              Guided by our expert team, you'll choose three or four A-level subjects. We offer a wide range of options,
              which include:
            </p>
          </div>

          {/* Pathway Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(pathways).map((pathway) => (
              <button
                key={pathway}
                onClick={() => setActivePathway(pathway)}
                className={`px-6 py-3 font-semibold transition-all duration-300 ${
                  activePathway === pathway
                    ? "bg-brand-red text-white"
                    : "bg-gray-800 text-brand-beige hover:bg-gray-700"
                }`}
              >
                {pathway}
              </button>
            ))}
          </div>

          {/* Course Display */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pathways[activePathway].map((subject, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 border-l-4 border-brand-red hover:bg-gray-800 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{subject}</h3>
                <p className="text-brand-beige text-sm">{activePathway} Pathway</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entry Requirements Section */}
      <section className="bg-dark-blue py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-lora text-brand-red text-center mb-16">
            Entry Requirements
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-beige mb-4">Age</h3>
              <p className="text-white">Applicants must be at least 15 years old to be eligible for enrollment.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-beige mb-4">English Level</h3>
              <p className="text-white">Academic International English Language Testing System (IELTS) 5.5.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-beige mb-4">Entry Assessment</h3>
              <p className="text-white">
                You'll be asked to sit admissions tests in your chosen subjects, as well as an online aptitude test.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Apply Section */}
      <section className="relative py-24 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('./graduation.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold font-lora text-white mb-8">Ready to Apply?</h2>
          <p className="text-lg md:text-xl text-brand-beige mb-12 leading-relaxed">
            Join a community where your success is our priority. We offer personalized learning, state-of-the-art
            facilities, and a supportive environment that nurtures every student's potential.
          </p>
          <button className="bg-brand-red text-white px-12 py-4 text-lg font-semibold hover:bg-red-700 transition-colors duration-300">
            APPLY NOW
          </button>
        </div>
      </section>
    </div>
  )
}
