"use client";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function AdmissionsPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What is the application deadline?",
      answer:
        "We operate on a rolling admissions basis, which means we accept applications throughout the year. However, we recommend applying at least 3 months before your intended start date to ensure proper processing time and visa arrangements if needed.",
    },
    {
      question: "Are scholarships available?",
      answer:
        "Yes, we offer merit-based scholarships for exceptional students. Academic scholarships are awarded based on previous academic performance, entrance assessments, and interview results. Financial aid options are also available for families who demonstrate need.",
    },
    {
      question: "What support is provided for international students?",
      answer:
        "We provide comprehensive support including visa guidance, airport pickup, accommodation assistance, orientation programs, and ongoing academic and pastoral care. Our international student services team is dedicated to helping you settle in successfully.",
    },
    {
      question: "Can I visit the school before applying?",
      answer:
        "We encourage prospective students and families to visit our campus. You can schedule a personal tour, attend our open days, or arrange a virtual tour if you're unable to visit in person. Contact our admissions team to arrange your visit.",
    },
    {
      question: "What happens after I submit my application?",
      answer:
        "After submission, you'll receive confirmation within 48 hours. Our admissions team will review your application and contact you within 5-7 business days to schedule your assessment and interview. The entire process typically takes 2-3 weeks from application to decision.",
    },
    {
      question: "Do you offer English language support?",
      answer:
        "Yes, we provide English as an Additional Language (EAL) support for students who need it. Our qualified EAL teachers work with students to improve their English proficiency while they pursue their main academic program.",
    },
  ];

  return (
    <div className="relative min-h-screen font-lora">
      {/* Hero Section - Admissions Banner */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523050854058-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Bridge International School Students"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center px-4 md:px-6 space-y-4 md:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-lora font-bold leading-tight tracking-tight">
            <span className="text-brand-beige">JOIN A COMMUNITY WITH </span>
            <span className="text-brand-red">PURPOSE AND PASSION</span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg md:text-2xl text-gray-300 leading-relaxed font-manrope">
              We can't wait to welcome you into our ambitious international
              community.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Environment Section */}
      <section className="w-full flex flex-col lg:flex-row items-stretch">
        {/* Left side: Image */}
        <div className="w-full lg:w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Bridge International School Learning Environment"
            className="w-full h-full object-cover min-h-[300px] sm:min-h-[400px] lg:min-h-full"
          />
        </div>

        {/* Right side: Text content with dark gray background */}
        <div className="w-full lg:w-1/2 bg-gray-800">
          <div className="p-6 md:p-10 flex flex-col justify-center h-full space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-4xl font-lora font-semibold leading-tight text-brand-beige">
              Excellence in Education
            </h2>
            <p className="text-base md:text-lg font-manrope text-gray-300 max-w-xl">
              BI provides a supportive and globally recognized learning
              environment where students are guided by experienced faculty and
              equipped with modern facilities. With a strong commitment to
              academic excellence and personal growth, we prepare students for
              success at top universities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Entry Requirements Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 md:px-6 bg-dark-primary">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-5xl font-lora font-bold text-brand-beige leading-tight">
              Entry Requirements
            </h2>
            <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-manrope">
              Here's what you need to know before applying
            </p>
          </div>

          {/* Requirements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Age */}
            <div className="group text-center space-y-4 md:space-y-6 bg-black/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-brand-beige/50 transition-all duration-300">
              <div className="flex justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-red flex items-center justify-center rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v10m6-10v10m-6-4h6"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-lora font-semibold text-brand-beige mb-3 md:mb-4 group-hover:text-brand-red transition-colors duration-300">
                  Age
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-manrope">
                  Applicants must be at least 15 years old to be eligible for
                  enrollment.
                </p>
              </div>
            </div>

            {/* English Level */}
            <div className="group text-center space-y-4 md:space-y-6 bg-black/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-brand-beige/50 transition-all duration-300">
              <div className="flex justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-red flex items-center justify-center rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-lora font-semibold text-brand-beige mb-3 md:mb-4 group-hover:text-brand-red transition-colors duration-300">
                  English Level
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-manrope">
                  Academic International English Language Testing System (IELTS)
                  5.5.
                </p>
              </div>
            </div>

            {/* Entry Assessment */}
            <div className="group text-center space-y-4 md:space-y-6 bg-black/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-brand-beige/50 transition-all duration-300">
              <div className="flex justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-red flex items-center justify-center rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 text-white"
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
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-lora font-semibold text-brand-beige mb-3 md:mb-4 group-hover:text-brand-red transition-colors duration-300">
                  Entry Assessment
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-manrope">
                  You'll be asked to sit maths and science assessments, and an
                  online Cognitive Abilities Test (CAT4).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-5xl font-lora font-bold text-brand-beige leading-tight">
              STEP-BY-STEP ADMISSIONS PROCESS
            </h2>
            <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-manrope">
              Ready to start your application? This is what you need to do.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-12">
            {[
              "Apply now",
              "Make an enquiry",
              "Send us your application",
              "Assessment and interview",
              "Offering you a place",
            ].map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-red text-white flex items-center justify-center rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <span className="text-xl md:text-2xl font-bold font-lora">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-lora font-semibold text-brand-beige">
                  {step}
                </h3>
              </div>
            ))}
          </div>

          {/* Getting Started */}
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-lora font-semibold text-brand-beige mb-6">
              Getting started
            </h3>
            <Link
              to="/enquire"
              className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-brand-red hover:bg-red-700 text-white font-manrope font-semibold rounded-xl shadow-lg hover:shadow-brand-red/30 transition-all duration-300 hover-lift text-base md:text-lg"
            >
              START YOUR APPLICATION
              <svg
                className="w-4 h-4 md:w-5 md:h-5 ml-2 md:ml-3"
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
        </div>
      </section>

      <section className="w-full py-12 sm:py-16 md:py-20 px-4 md:px-6 bg-dark-primary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-red/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-brand-gold/10 rounded-full blur-xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-lora font-bold text-brand-beige leading-tight">
              Frequently Asked Questions
            </h2>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our admissions process,
              requirements, and timelines
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-brand-beige/30 hover:shadow-lg hover:shadow-brand-red/10 group faq-item"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 md:px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300 group-hover:bg-white/5"
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-content-${index}`}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 ${
                        openFaq === index ? "bg-brand-red" : "bg-brand-beige/20"
                      }`}
                    >
                      <span
                        className={`text-xs font-bold ${
                          openFaq === index ? "text-white" : "text-brand-beige"
                        }`}
                      >
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-lora font-semibold text-brand-beige pr-4 text-left transition-colors duration-300 group-hover:text-brand-gold">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`flex-shrink-0 w-7 h-7 flex items-center justify-center transition-all duration-300 rounded-full bg-black/30 group-hover:bg-brand-red/20 ${
                      openFaq === index ? "bg-brand-red/20" : ""
                    }`}
                  >
                    <svg
                      className={`w-5 h-5 transition-all duration-300 chevron-animation ${
                        openFaq === index
                          ? "text-brand-red rotate-180 scale-110"
                          : "text-brand-beige"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  id={`faq-content-${index}`}
                  className={`overflow-hidden transition-all duration-500 ease-in-out answer-container ${
                    openFaq === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8 pl-14">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-brand-red to-brand-gold mb-4"></div>
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                    {faq.additionalInfo && (
                      <div className="mt-4 p-4 bg-black/30 rounded-lg border-l-4 border-brand-red">
                        <p className="text-sm text-gray-300">
                          <span className="font-semibold text-brand-beige">
                            Note:
                          </span>{" "}
                          {faq.additionalInfo}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 md:mt-16 pt-8 border-t border-white/10">
            <h3 className="text-xl font-lora font-semibold text-brand-beige mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Our admissions team is here to help you with any additional
              questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-brand-red hover:bg-brand-red/90 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-opacity-50">
                Contact Admissions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Open Section */}
      <section className="w-full flex flex-col lg:flex-row items-stretch">
        {/* Left side: Text content with dark gray background */}
        <div className="w-full lg:w-1/2 bg-gray-800">
          <div className="p-6 md:p-10 flex flex-col justify-center h-full space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-4xl font-lora font-semibold leading-tight text-brand-beige">
              Admissions Are Now Open
            </h2>
            <p className="text-base md:text-lg font-manrope text-gray-300 max-w-xl">
              Take the first step toward a brighter future today by joining a
              school committed to excellence, growth, and opportunity. Secure
              your place and begin your journey toward academic success and
              global recognition.
            </p>
          </div>
        </div>

        {/* Right side: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt="Bridge International School Students Success"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-screen relative">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Bridge International School Community"
          className="w-screen h-auto object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6">
          <div className="text-center max-w-4xl space-y-6 md:space-y-8 z-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-lora font-extrabold text-gray-300 leading-tight drop-shadow-lg">
              Ready to Apply?
            </h2>
            <p className="text-lg md:text-2xl lg:text-3xl font-manrope font-bold text-brand-beige leading-relaxed drop-shadow-md">
              Join a community where your success is our priority. We offer
              personalized learning, state-of-the-art facilities, and a
              supportive environment that nurtures every student's potential.
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
    </div>
  );
}
