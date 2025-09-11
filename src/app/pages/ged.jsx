"use client";

import { useState } from "react";

const GEDPage = () => {
  const [activePathway, setActivePathway] = useState("College Preparation");

  const pathways = {
    "College Preparation": [
      "Mathematical Reasoning",
      "Reasoning Through Language Arts",
      "Science",
      "Social Studies",
      "College Readiness Skills",
      "Study Skills & Time Management",
      "Academic Writing",
    ],
    "Career Training": [
      "Mathematical Reasoning",
      "Reasoning Through Language Arts",
      "Science",
      "Social Studies",
      "Workplace Communication",
      "Professional Skills",
      "Industry Certifications Prep",
    ],
    "University Bridge": [
      "Mathematical Reasoning",
      "Reasoning Through Language Arts",
      "Science",
      "Social Studies",
      "Critical Thinking",
      "Research Methods",
      "Academic English",
    ],
    "Technical Pathway": [
      "Mathematical Reasoning",
      "Reasoning Through Language Arts",
      "Science",
      "Social Studies",
      "Applied Mathematics",
      "Technical Communication",
      "Problem Solving",
    ],
  };

  const postGEDPathways = [
    {
      title: "Community College",
      description:
        "Community colleges offer affordable, flexible pathways to higher education with associate degrees, certificates, and transfer programs to four-year universities.",
      highlights: [
        "Affordable tuition",
        "Flexible scheduling",
        "Transfer opportunities",
      ],
    },
    {
      title: "Four-Year Universities",
      description:
        "Many universities accept GED graduates for bachelor's degree programs, opening doors to advanced career opportunities and specialized fields of study.",
      highlights: [
        "Bachelor's degrees",
        "Career advancement",
        "Specialized programs",
      ],
    },
    {
      title: "Trade Schools",
      description:
        "Vocational and trade schools provide hands-on training in skilled trades, offering direct pathways to well-paying careers in growing industries.",
      highlights: ["Hands-on training", "Industry skills", "Career-focused"],
    },
    {
      title: "Professional Certifications",
      description:
        "Industry-recognized certifications in fields like IT, healthcare, and business can lead to immediate employment opportunities and career growth.",
      highlights: [
        "Industry recognition",
        "Immediate employment",
        "Career growth",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-manrope">
      {/* Hero Banner Section */}
      <section className="relative h-screen md:h-[80vh] lg:h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('./ged.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 h-full flex items-end pb-16 md:pb-20 lg:pb-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-lora mb-6 text-brand-beige">
                GED
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed">
                The General Educational Development (GED) test is a nationally
                recognized high school equivalency credential. Our comprehensive
                preparation program equips students with the knowledge and
                skills needed to pass the GED and pursue their educational and
                career goals.
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
            backgroundImage: `url('./GEDa.jpg')`,
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

      {/* Our GED Programme Section */}
      <section className="relative min-h-screen flex">
        <div className="w-full lg:w-1/2 relative">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('./GEDb.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-dark-blue flex items-center">
          <div className="p-8 md:p-12 lg:p-16 xl:p-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-lora mb-8 text-brand-beige">
              Our GED Programme
            </h2>
            <p className="text-lg md:text-xl text-white leading-relaxed mb-6">
              The GED credential is accepted by 99% of colleges and universities
              and recognized by employers nationwide. Our program covers all
              four subject areas tested on the GED: Mathematical Reasoning,
              Reasoning Through Language Arts, Science, and Social Studies.
            </p>
            <p className="text-lg md:text-xl text-white leading-relaxed">
              With personalized instruction, flexible scheduling, and
              comprehensive test preparation, we ensure every student is fully
              prepared to succeed on the GED test and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Pathways Section */}
      <section className="relative min-h-screen flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 bg-dark-blue flex items-center order-2 lg:order-1">
          <div className="p-8 md:p-12 lg:p-16 xl:p-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-lora mb-8 text-brand-red">
              Pathways
            </h2>
            <p className="text-lg md:text-xl text-white leading-relaxed mb-6">
              The GED opens doors to higher education, career advancement, and
              personal growth. Whether your goal is college, trade school, or
              immediate employment, the GED provides the foundation you need.
            </p>
            <p className="text-lg md:text-xl text-white leading-relaxed">
              Our program not only prepares you for the test but also develops
              critical thinking, problem-solving, and communication skills
              essential for success in today's competitive world.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('./gg.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>
      </section>

      {/* GED Preparation Program */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-lora mb-8 text-brand-beige">
            GED Preparation Program
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-white leading-relaxed">
              At BIC, our GED preparation program is designed to meet students
              where they are and guide them to success. With experienced
              instructors, individualized learning plans, and comprehensive
              practice materials, we provide the support and resources needed to
              pass the GED test. Our holistic approach includes academic
              preparation, test-taking strategies, and college and career
              readiness skills to ensure long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* Subjects/Pathways Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-dark-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-lora mb-6 text-brand-beige">
              GED Pathways
            </h2>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Choose a pathway that aligns with your goals and interests. Our
              expert instructors will guide you through comprehensive
              preparation in all subject areas.
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
                  <h3 className="text-lg font-semibold text-white">
                    {subject}
                  </h3>
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
                <svg
                  className="w-8 h-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-beige mb-4">Age</h3>
              <p className="text-white">
                Applicants must be at least 16 years old and not enrolled in
                high school.
              </p>
            </div>

            <div className="text-center p-8 bg-dark-blue border border-brand-beige/20">
              <div className="w-16 h-16 bg-brand-beige rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-beige mb-4">
                English Level
              </h3>
              <p className="text-white">
                Basic English proficiency required. ESL support available for
                non-native speakers.
              </p>
            </div>

            <div className="text-center p-8 bg-dark-blue border border-brand-beige/20">
              <div className="w-16 h-16 bg-brand-beige rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-beige mb-4">
                Placement Assessment
              </h3>
              <p className="text-white">
                Initial assessment to determine current skill level and create
                personalized learning plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pathways after GED - New Grid Design */}
      <section className="bg-dark-blue py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-lora text-brand-red text-center mb-16">
            Pathways after GED
          </h2>

          <div className="text-center mb-12">
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Earning your GED opens doors to numerous educational and career
              opportunities. Here are some pathways to explore:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postGEDPathways.map((pathway, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 border-l-4 border-brand-red hover:bg-gray-800 transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-brand-beige mb-4 group-hover:text-white transition-colors">
                  {pathway.title}
                </h3>
                <p className="text-white text-sm leading-relaxed mb-6">
                  {pathway.description}
                </p>

                <div className="space-y-2">
                  {pathway.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-brand-red rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-brand-beige text-sm">
                        {highlight}
                      </span>
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
            Ready to Start?
          </h2>
          <p className="text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto leading-relaxed">
            Take the first step toward achieving your educational goals. Our
            comprehensive GED preparation program provides the support,
            resources, and guidance you need to succeed and unlock new
            opportunities.
          </p>

          <button className="bg-brand-red hover:bg-red-700 text-white font-bold py-4 px-12 text-lg transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl">
            ENROLL NOW
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
  );
};

export default GEDPage;
