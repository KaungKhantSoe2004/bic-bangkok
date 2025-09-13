"use client"

import { useState, useEffect } from "react"

const IGCSEPage = () => {
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

  const postIGCSEPathways = [
    {
      title: "A-Levels",
      description:
        "A-Levels are subject-based qualifications typically pursued over two years. They offer in-depth study in specific subjects, allowing students to specialize in areas aligned with their career aspirations.",
      highlights: ["2-year program", "Subject specialization", "University preparation"],
    },
    {
      title: "Ontario Secondary School Diploma",
      description:
        "The OSSD provides a comprehensive pathway to North American universities, offering flexibility and global recognition.",
      highlights: ["North American pathway", "Flexible curriculum", "Global recognition"],
    },
    {
      title: "IB Diploma Programme",
      description:
        "The International Baccalaureate Diploma Programme is a rigorous, internationally recognized qualification that develops comprehensive skills.",
      highlights: ["Rigorous curriculum", "International recognition", "Holistic development"],
    },
    {
      title: "International Foundation Year",
      description:
        "Foundation programs bridge the gap between secondary education and university study, providing intensive preparation for undergraduate degrees.",
      highlights: ["University bridge", "Intensive preparation", "Academic adaptation"],
    },
    {
      title: "US University System",
      description:
        "Students who complete the IGCSE program are well-equipped with the academic foundation to pursue direct admission into US universities.",
      highlights: ["Direct admission", "Strong foundation", "US pathway"],
    },
  ]

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white font-manrope">
        {/* Hero Banner Skeleton */}
        <section className="relative h-screen md:h-[80vh] lg:h-screen overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 animate-pulse">
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-brand-beige/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-brand-red/20 rounded-full animate-pulse"></div>
          </div>

          <div className="relative z-10 h-full flex items-end pb-16 md:pb-20 lg:pb-24">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl">
                <div className="h-16 md:h-20 lg:h-24 bg-gradient-to-r from-gray-600 to-gray-500 rounded-lg mb-6 animate-pulse"></div>
                <div className="space-y-4">
                  <div className="h-6 md:h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg animate-pulse"></div>
                  <div className="h-6 md:h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg w-5/6 animate-pulse"></div>
                  <div className="h-6 md:h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg w-4/5 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Width Image Skeleton */}
        <section className="relative h-100 md:h-[700px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-brand-red rounded-full animate-pulse opacity-60"></div>
            <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-brand-beige rounded-full animate-bounce opacity-40"></div>
            <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-white rounded-full animate-ping opacity-30"></div>
          </div>
        </section>

        {/* Content Sections Skeleton */}
        {[1, 2, 3].map((section) => (
          <section key={section} className="relative min-h-screen flex">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-700 animate-pulse">
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 bg-gray-900 flex items-center">
              <div className="p-8 md:p-12 lg:p-16 xl:p-20">
                <div className="h-12 lg:h-16 bg-gradient-to-r from-gray-600 to-gray-500 rounded-lg mb-8 animate-pulse"></div>
                <div className="space-y-4">
                  <div className="h-6 md:h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg animate-pulse"></div>
                  <div className="h-6 md:h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg w-5/6 animate-pulse"></div>
                  <div className="h-6 md:h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg w-4/5 animate-pulse"></div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Pathways Section Skeleton */}
        <section className="py-16 md:py-20 lg:py-24 bg-dark-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="h-12 lg:h-16 bg-gradient-to-r from-gray-600 to-gray-500 rounded-lg mb-6 mx-auto w-1/2 animate-pulse"></div>
              <div className="h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg mx-auto w-3/4 animate-pulse"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[1, 2, 3, 4].map((btn) => (
                <div
                  key={btn}
                  className="h-12 w-32 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg animate-pulse"
                ></div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-black/30 backdrop-blur-sm p-6 border border-brand-beige/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-brand-red rounded-full animate-pulse"></div>
                    <div className="h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg flex-1 animate-pulse"></div>
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
      <section className="relative h-screen md:h-[80vh] lg:h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('./IGCSE.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 h-full flex items-end pb-16 md:pb-20 lg:pb-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-lora mb-6 text-brand-beige">
                IGCSE
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed">
                IGCSE is an internationally recognized qualification for students aged 14 to 16. Offered by the leading
                examination board Pearson Edexcel, it provides a robust academic framework that prepares students for
                advanced studies and global opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image with Flow Animation */}
      <section className="relative h-100 md:h-[700px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-[20s] ease-linear hover:scale-110"
          style={{
            backgroundImage: `url('./igcseBanner.webp')`,
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

      {/* Our IGCSE Programme Section */}
      <section className="relative min-h-screen flex">
        <div className="w-full lg:w-1/2 relative">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('./igbro.webp')`,
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-gray-900 flex items-center">
          <div className="p-8 md:p-12 lg:p-16 xl:p-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-lora mb-8 text-brand-beige">
              Our IGCSE Programme
            </h2>
            <p className="text-lg md:text-xl text-white leading-relaxed mb-6">
              IGCSE is widely recognized by universities and employers worldwide, including top universities in the UK,
              US, Canada, Australia, and Europe. The IGCSE program allows students to select subjects according to their
              interests and future study goals.
            </p>
            <p className="text-lg md:text-xl text-white leading-relaxed">
              There is no core set of required subjects, which means students can tailor their learning experience to
              align with their academic strengths and career aspirations.
            </p>
          </div>
        </div>
      </section>

      {/* Pathways Section */}
      <section className="relative min-h-screen flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 bg-gray-900 flex items-center order-2 lg:order-1">
          <div className="p-8 md:p-12 lg:p-16 xl:p-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-lora mb-8 text-brand-red">Pathways</h2>
            <p className="text-lg md:text-xl text-white leading-relaxed mb-6">
              IGCSE is a common pathway for students aiming to continue with A Levels, the International Baccalaureate
              (IB), or other pre-university qualifications.
            </p>
            <p className="text-lg md:text-xl text-white leading-relaxed">
              IGCSE provides an excellent foundation for A Levels, especially in subjects like Mathematics and Sciences,
              where a solid understanding of key concepts is crucial for further study.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('./igbros.webp')`,
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>
      </section>

      {/* IGCSE Preparation Program */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-lora mb-8 text-brand-beige">
            IGCSE Preparation Program
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-white leading-relaxed">
              At BIC, the IGCSE program is a vital stage in a student's journey, laying the groundwork for academic and
              personal excellence. With a curriculum that balances essential subjects such as Mathematics, Science, and
              Humanities, we provide a comprehensive learning experience. Our focus on critical thinking,
              problem-solving, and global awareness ensures students are equipped to excel in advanced studies and
              thrive in an ever-evolving world.
            </p>
          </div>
        </div>
      </section>

      {/* Subjects/Pathways Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-dark-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-lora mb-6 text-brand-beige">
              IGCSE Pathways
            </h2>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Guided by our expert team, you'll choose subjects that align with your interests and career goals.
            </p>
          </div>

          {/* Pathway Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(pathways).map((pathway) => (
              <button
                key={pathway}
                onClick={() => setActivePathway(pathway)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activePathway === pathway
                    ? "bg-brand-red text-white shadow-lg transform scale-105"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {pathway}
              </button>
            ))}
          </div>

          {/* Modules Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pathways[activePathway].map((subject, index) => (
              <div
                key={index}
                className="bg-black/30 backdrop-blur-sm p-6 border border-brand-beige/20 hover:border-brand-beige/40 transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-brand-red rounded-full"></div>
                  <h3 className="text-lg font-semibold text-white">{subject}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entry Requirements */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-lora mb-12 text-center text-brand-red">
            Entry Requirements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-dark-blue border border-brand-beige/20">
              <div className="w-16 h-16 bg-brand-beige rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-beige mb-4">Age</h3>
              <p className="text-white">Applicants must be at least 15 years old to be eligible for enrollment.</p>
            </div>

            <div className="text-center p-8 bg-dark-blue border border-brand-beige/20">
              <div className="w-16 h-16 bg-brand-beige rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-beige mb-4">English Level</h3>
              <p className="text-white">Academic International English Language Testing System (IELTS) 5.5.</p>
            </div>

            <div className="text-center p-8 bg-dark-blue border border-brand-beige/20">
              <div className="w-16 h-16 bg-brand-beige rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
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

      {/* Pathways after IGCSE - New Grid Design */}
      <section className="bg-dark-blue py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-lora text-brand-red text-center mb-16">
            Pathways after IGCSE
          </h2>

          <div className="text-center mb-12">
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Completing the IGCSE unlocks a range of educational opportunities. Here are some pathways to explore:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postIGCSEPathways.map((pathway, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 border-l-4 border-brand-red hover:bg-gray-800 transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-brand-beige mb-4 group-hover:text-white transition-colors">
                  {pathway.title}
                </h3>
                <p className="text-white text-sm leading-relaxed mb-6">{pathway.description}</p>

                <div className="space-y-2">
                  {pathway.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-brand-red rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-brand-beige text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Apply CTA */}
      <section className="relative py-20 md:py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('./graduation.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-lora mb-8 text-brand-beige">
            Ready to Apply?
          </h2>
          <p className="text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto leading-relaxed">
            Become part of a community where your success drives everything we do. With tailored learning experiences,
            world-class facilities, and an environment designed to inspire, we empower every student to reach their full
            potential.
          </p>

          <button className="bg-brand-red hover:bg-red-700 text-white font-bold py-4 px-12 text-lg transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl">
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
      `}</style>
    </div>
  )
}

export default IGCSEPage
