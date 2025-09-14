"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setStoreReduxFaq } from "../../reducer/faqSlice";

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

export default function AdmissionsPage() {
  const backend_domain_name = `http://bicadmin.z256600-ll9lz.ps02.zwhhosting.com`;
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const ReduxFaqSection = useSelector((store) => store.faqs);
  const dispatch = useDispatch();
  const [faqs, setFaqs] = useState(ReduxFaqSection.faqs);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${backend_domain_name}/api/faqs`);
      if (response.status == 200) {
        console.log(response.data);
        dispatch(setStoreReduxFaq(response.data.data));
        setFaqs(response.data.data);
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
    window.scrollTo(0, 0);

    fetchData();
  }, []);

  return (
    <div className="relative min-h-screen font-lora">
      {isLoading ? (
        <div className="space-y-0">
          <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            <SkeletonBox className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-800 to-gray-900" />
            <div className="absolute inset-0 bg-dark-blue/80"></div>

            <div className="absolute z-10 max-w-6xl mx-auto text-center px-4 md:px-6 space-y-6 md:space-y-8">
              {/* Main title skeleton with gradient effect */}
              <div className="space-y-4">
                <SkeletonText className="h-12 md:h-20 lg:h-24 w-full mb-2 bg-gradient-to-r from-gray-600/50 to-gray-700/50" />
                <SkeletonText className="h-12 md:h-20 lg:h-24 w-4/5 mx-auto bg-gradient-to-r from-gray-700/50 to-gray-600/50" />
              </div>

              {/* Subtitle skeleton */}
              <div className="max-w-4xl mx-auto space-y-3">
                <SkeletonText className="h-6 md:h-8 w-3/4 mx-auto bg-gray-600/40" />
                <SkeletonText className="h-6 md:h-8 w-2/3 mx-auto bg-gray-600/40" />
              </div>

              {/* Decorative elements */}
              <div className="flex justify-center space-x-4 mt-8">
                <SkeletonBox className="w-3 h-3 rounded-full bg-gray-600/50 animate-pulse" />
                <SkeletonBox
                  className="w-3 h-3 rounded-full bg-gray-600/50 animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                />
                <SkeletonBox
                  className="w-3 h-3 rounded-full bg-gray-600/50 animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                />
              </div>
            </div>
          </section>

          {/* Learning Environment Skeleton */}
          <section className="w-full flex flex-col lg:flex-row items-stretch">
            <div className="w-full lg:w-1/2">
              <SkeletonBox className="w-full h-96 lg:h-[500px]" />
            </div>
            <div className="w-full lg:w-1/2 bg-gray-800 p-6 md:p-10 flex flex-col justify-center space-y-4">
              <SkeletonText className="h-10 w-3/4" />
              <SkeletonText className="h-4 w-full" />
              <SkeletonText className="h-4 w-5/6" />
              <SkeletonText className="h-4 w-4/5" />
            </div>
          </section>

          {/* Entry Requirements Skeleton */}
          <section className="w-full py-12 sm:py-16 md:py-20 px-4 md:px-6 bg-gray-900">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 md:mb-16 space-y-4">
                <SkeletonText className="h-12 w-1/2 mx-auto" />
                <SkeletonText className="h-6 w-2/3 mx-auto" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-gray-800 p-8 space-y-4">
                    <SkeletonBox className="w-12 h-12" />
                    <SkeletonText className="h-6 w-3/4" />
                    <SkeletonText className="h-4 w-full" />
                    <SkeletonText className="h-4 w-5/6" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Step-by-Step Process Skeleton */}
          <section className="w-full py-12 sm:py-16 md:py-20 px-4 md:px-6 bg-dark-blue">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <SkeletonText className="h-12 w-2/3 mx-auto" />
                <SkeletonText className="h-6 w-1/2 mx-auto" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="text-center space-y-4">
                    <SkeletonBox className="w-16 h-16 mx-auto rounded-full" />
                    <SkeletonText className="h-6 w-3/4" />
                    <SkeletonText className="h-4 w-full" />
                    <SkeletonText className="h-4 w-5/6 mx-auto" />
                  </div>
                ))}
              </div>
              <div className="text-center mt-16">
                <div className="bg-gray-800 p-8 max-w-2xl mx-auto space-y-4">
                  <SkeletonText className="h-8 w-1/2 mx-auto" />
                  <SkeletonText className="h-4 w-3/4 mx-auto" />
                  <SkeletonBox className="h-12 w-48 mx-auto" />
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Skeleton */}
          <section className="w-full py-12 sm:py-16 md:py-20 px-4 md:px-6 bg-grey-900">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 md:mb-16 space-y-6">
                <SkeletonText className="h-12 w-2/3 mx-auto" />
                <SkeletonText className="h-6 w-3/4 mx-auto" />
              </div>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="bg-black/40 rounded-2xl p-6 space-y-3"
                  >
                    <SkeletonText className="h-6 w-3/4" />
                    <SkeletonText className="h-4 w-full" />
                    <SkeletonText className="h-4 w-5/6" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final Sections Skeleton */}
          <section className="w-full flex flex-col lg:flex-row items-stretch">
            <div className="w-full lg:w-1/2 bg-gray-800 p-6 md:p-10 space-y-4">
              <SkeletonText className="h-10 w-3/4" />
              <SkeletonText className="h-4 w-full" />
              <SkeletonText className="h-4 w-5/6" />
            </div>
            <div className="w-full lg:w-1/2">
              <SkeletonBox className="w-full h-96 lg:h-full" />
            </div>
          </section>

          <section className="w-screen relative">
            <SkeletonBox className="w-screen h-96" />
            <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6">
              <div className="text-center max-w-4xl space-y-6 md:space-y-8">
                <SkeletonText className="h-16 w-1/2 mx-auto" />
                <SkeletonText className="h-6 w-3/4 mx-auto" />
                <SkeletonBox className="h-12 w-32 mx-auto" />
              </div>
            </div>
          </section>
        </div>
      ) : (
        <>
          {/* Hero Section - Admissions Banner */}
          <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523050854058-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Bridge International School Students"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-dark-blue"></div>

            <div className="absolute z-10 max-w-6xl mx-auto text-center px-4 md:px-6 space-y-4 md:space-y-8">
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
                src="./exc.jpg"
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
                  environment where students are guided by experienced faculty
                  and equipped with modern facilities. With a strong commitment
                  to academic excellence and personal growth, we prepare
                  students for success at top universities worldwide.
                </p>
              </div>
            </div>
          </section>

          {/* Entry Requirements Section */}
          <section className="w-full py-12 sm:py-16 md:py-20 px-4 md:px-6 bg-gray-900">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 md:mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-lora font-bold text-brand-beige leading-tight">
                  Entry Requirements
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto font-manrope">
                  Everything you need to know before starting your application
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Age */}
                <div className="bg-gray-800 p-8 border-l-4 border-brand-red hover:bg-gray-700 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-brand-red flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
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
                    <h3 className="text-xl font-lora font-bold text-brand-beige">
                      Age Requirement
                    </h3>
                    <p className="text-gray-300 font-manrope">
                      Applicants must be at least{" "}
                      <span className="font-bold text-brand-beige">
                        15 years old
                      </span>{" "}
                      to be eligible for enrollment.
                    </p>
                  </div>
                </div>

                {/* English Level */}
                <div className="bg-gray-800 p-8 border-l-4 border-brand-red hover:bg-gray-700 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-brand-red flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
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
                    <h3 className="text-xl font-lora font-bold text-brand-beige">
                      English Proficiency
                    </h3>
                    <p className="text-gray-300 font-manrope">
                      Academic{" "}
                      <span className="font-bold text-brand-beige">
                        IELTS 5.5
                      </span>{" "}
                      or equivalent English language proficiency required.
                    </p>
                  </div>
                </div>

                {/* Entry Assessment */}
                <div className="bg-gray-800 p-8 border-l-4 border-brand-red hover:bg-gray-700 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-brand-red flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
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
                    <h3 className="text-xl font-lora font-bold text-brand-beige">
                      Entry Assessment
                    </h3>
                    <p className="text-gray-300 font-manrope">
                      Complete{" "}
                      <span className="font-bold text-brand-beige">
                        maths & science
                      </span>{" "}
                      assessments plus online Cognitive Abilities Test.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Step-by-Step Process Section */}
          <section className="w-full py-12 sm:py-16 md:py-20 px-4 md:px-6 bg-dark-blue">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-lora font-bold text-brand-beige leading-tight">
                  Step-by-Step Admissions Process
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto font-manrope">
                  Follow these simple steps to begin your educational journey
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="text-center space-y-4 group">
                    <div className="w-16 h-16 bg-brand-red text-white flex items-center justify-center mx-auto font-bold text-xl font-manrope group-hover:bg-red-600 transition-colors duration-300">
                      {i}
                    </div>
                    <h3 className="text-lg font-lora font-bold text-brand-beige">
                      {
                        [
                          "Apply Now",
                          "Make an Enquiry",
                          "Send Application",
                          "Assessment & Interview",
                          "Receive Your Offer",
                        ][i - 1]
                      }
                    </h3>
                    <p className="text-sm text-gray-300 font-manrope">
                      {
                        [
                          "Submit your online application with required documents",
                          "Connect with our admissions team for guidance",
                          "Complete and submit all required documentation",
                          "Complete entrance tests and personal interview",
                          "Get your acceptance letter and enrollment details",
                        ][i - 1]
                      }
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-16">
                <div className="bg-gray-800 p-8 max-w-2xl mx-auto">
                  <h3 className="text-2xl font-lora font-bold text-brand-beige mb-4">
                    Ready to Begin?
                  </h3>
                  <p className="text-gray-300 mb-6 font-manrope">
                    Take the first step towards your future. Start your
                    application today.
                  </p>
                  <Link
                    to="/enquire"
                    className="inline-block px-8 py-4 bg-brand-red hover:bg-red-600 text-white font-manrope font-bold transition-colors duration-300 rounded-lg"
                  >
                    START YOUR APPLICATION
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Frequently Asked Questions Section */}
          <section className="w-full py-12 sm:py-16 md:py-20 px-4 md:px-6 bg-grey-900 relative overflow-hidden">
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
                    key={faq.id}
                    className="bg-black/40 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-brand-beige/30 hover:shadow-lg hover:shadow-brand-red/10 group faq-item"
                  >
                    <button
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                      className="w-full px-6 md:px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300 group-hover:bg-white/5"
                      aria-expanded={openFaq === index}
                      aria-controls={`faq-content-${index}`}
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 ${
                            openFaq === index
                              ? "bg-brand-red"
                              : "bg-brand-beige/20"
                          }`}
                        >
                          <span
                            className={`text-xs font-bold ${
                              openFaq === index
                                ? "text-white"
                                : "text-brand-beige"
                            }`}
                          >
                            {index + 1}
                          </span>
                        </div>
                        <h3 className="text-lg md:text-xl font-lora font-semibold text-brand-beige pr-4 text-left transition-colors duration-300 group-hover:text-brand-gold">
                          {faq.q}
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
                        <p className="text-gray-300 leading-relaxed">{faq.a}</p>
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
                  <button
                    onClick={() => {
                      navigate("/enquire");
                    }}
                    className="px-6 py-3 bg-brand-red hover:bg-brand-red/90 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-opacity-50"
                  >
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
                  Take the first step toward a brighter future today by joining
                  a school committed to excellence, growth, and opportunity.
                  Secure your place and begin your journey toward academic
                  success and global recognition.
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
              src="./contactbb.jpg"
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
        </>
      )}
    </div>
  );
}
