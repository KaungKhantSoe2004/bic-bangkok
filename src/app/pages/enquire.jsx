"use client";

import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

export default function ContactPage() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isMailed, setIsMailed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isMailed || errorMessage) {
      const timer = setTimeout(() => {
        setIsMailed(false);
        setErrorMessage("");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isMailed, errorMessage]);

  const submit = (e) => {
    e.preventDefault(); // prevent page reload
    setIsLoading(true);
    setIsMailed(false);
    setErrorMessage("");

    emailjs
      .sendForm(
        "service_q4hkje2", // your service ID
        "template_cb400bp", // your template ID
        form.current,
        "taWHxGleX6BjcDvid" // your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsMailed(true);
          setIsLoading(false);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setErrorMessage("❌ Failed to send message. Please try again.");
          setIsLoading(false);
        }
      );
  };

  // const submit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   setIsMailed(false);
  //   setErrorMessage("");

  //   const formData = {
  //     fullName: form.current.fullName.value,
  //     email: form.current.email.value,
  //     subject: form.current.subject.value,
  //     phone: form.current.phone.value,
  //     message: form.current.message.value,
  //   };

  //   try {
  //     const response = await axios.post(
  //       "http://127.0.0.1:8000/api/send-contact-email",
  //       formData
  //     );

  //     if (response.data.success) {
  //       setIsMailed(true);
  //       form.current.reset();
  //     } else {
  //       setErrorMessage("❌ Failed to send message. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     setErrorMessage("❌ Failed to send message. Please try again.");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  if (loading) {
    return (
      <div className="relative min-h-screen bg-dark-primary">
        {/* Hero Banner Skeleton */}
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 animate-pulse"></div>
          <div className="relative z-10 max-w-6xl mx-auto text-center px-4 md:px-6 space-y-4 md:space-y-8">
            <div className="space-y-4">
              <div className="h-16 md:h-24 bg-gradient-to-r from-gray-600 to-gray-500 rounded-lg animate-pulse mx-auto max-w-2xl"></div>
              <div className="h-8 md:h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg animate-pulse mx-auto max-w-xl"></div>
            </div>
            <div className="max-w-4xl mx-auto space-y-3">
              <div className="h-6 bg-gray-600 rounded animate-pulse"></div>
              <div className="h-6 bg-gray-600 rounded animate-pulse"></div>
              <div className="h-6 bg-gray-600 rounded animate-pulse max-w-3xl mx-auto"></div>
            </div>
            <div className="w-16 md:w-24 h-1 bg-brand-red mx-auto animate-pulse"></div>
            {/* Decorative animated dots */}
            <div className="flex justify-center space-x-2 mt-8">
              <div className="w-3 h-3 bg-brand-red rounded-full animate-pulse"></div>
              <div
                className="w-3 h-3 bg-brand-red rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-3 h-3 bg-brand-red rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>
        </section>

        {/* Campus Image Skeleton */}
        <section className="w-full relative overflow-hidden">
          <div className="relative h-[90vh] bg-gradient-to-r from-gray-700 to-gray-600 animate-pulse">
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
              <div className="block w-full h-20 sm:h-24 md:h-28 bg-brand-red"></div>
            </div>
          </div>
        </section>

        {/* Contact Information Skeleton */}
        <section className="w-full py-16 md:py-24 px-4 md:px-6 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 md:mb-20 space-y-5">
              <div className="w-20 h-1 bg-brand-red mx-auto animate-pulse"></div>
              <div className="h-12 md:h-16 bg-gradient-to-r from-gray-600 to-gray-500 rounded-lg animate-pulse mx-auto max-w-md"></div>
              <div className="h-6 bg-gray-600 rounded animate-pulse mx-auto max-w-2xl"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-800 p-8 border border-gray-700">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 md:w-18 md:h-18 bg-gradient-to-br from-brand-red to-red-700 animate-pulse"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-8 bg-gray-600 rounded animate-pulse mx-auto max-w-32"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-600 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-600 rounded animate-pulse max-w-3/4 mx-auto"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Find Us Section Skeleton */}
        <section className="w-full py-12 sm:py-16 md:py-32 px-4 md:px-6 bg-gradient-to-br from-black to-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-20 space-y-4 md:space-y-6">
              <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto animate-pulse"></div>
              <div className="h-12 md:h-16 bg-gradient-to-r from-gray-600 to-gray-500 rounded-lg animate-pulse mx-auto max-w-sm"></div>
              <div className="h-6 bg-gray-600 rounded animate-pulse mx-auto max-w-2xl"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-2">
                <div className="bg-gray-800 p-2 rounded-2xl">
                  <div className="aspect-video bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl animate-pulse"></div>
                </div>
              </div>
              <div className="space-y-6">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="bg-gray-800 rounded-2xl p-6 border border-gray-700"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse"></div>
                      <div className="h-6 bg-gray-600 rounded animate-pulse flex-1"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-600 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-600 rounded animate-pulse max-w-3/4"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Campus Visit Skeleton */}
        <section className="w-full flex flex-col lg:flex-row items-stretch">
          <div className="w-full lg:w-1/2 bg-gradient-to-r from-gray-700 to-gray-600 animate-pulse min-h-[300px] sm:min-h-[400px]"></div>
          <div className="w-full lg:w-1/2 bg-gray-800 flex items-center">
            <div className="p-6 sm:p-8 md:p-16 lg:p-20 space-y-6 md:space-y-8 w-full">
              <div className="space-y-3 md:space-y-4">
                <div className="w-12 md:w-16 h-1 bg-brand-red animate-pulse"></div>
                <div className="h-12 md:h-16 bg-gradient-to-r from-gray-600 to-gray-500 rounded-lg animate-pulse max-w-md"></div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-600 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-600 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-600 rounded animate-pulse max-w-4/5"></div>
              </div>
              <div className="h-12 bg-brand-red rounded-lg animate-pulse max-w-48"></div>
            </div>
          </div>
        </section>

        {/* Contact Form Skeleton */}
        <section className="w-full py-12 sm:py-16 md:py-32 px-4 md:px-6 bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6">
              <div className="w-16 md:w-20 h-1 bg-brand-red mx-auto animate-pulse"></div>
              <div className="h-12 md:h-16 bg-gradient-to-r from-gray-600 to-gray-500 rounded-lg animate-pulse mx-auto max-w-lg"></div>
              <div className="h-6 bg-gray-600 rounded animate-pulse mx-auto max-w-2xl"></div>
            </div>
            <div className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="h-14 bg-gray-800 border border-gray-600 animate-pulse"></div>
                <div className="h-14 bg-gray-800 border border-gray-600 animate-pulse"></div>
              </div>
              <div className="h-14 bg-gray-800 border border-gray-600 animate-pulse"></div>
              <div className="h-14 bg-gray-800 border border-gray-600 animate-pulse"></div>
              <div className="h-32 bg-gray-800 border border-gray-600 animate-pulse"></div>
              <div className="text-center pt-4 md:pt-6">
                <div className="h-14 bg-brand-red rounded-lg animate-pulse mx-auto max-w-48"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-dark-primary">
      {/* Hero Section - Contact Banner */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <img
          src="./contactbb.jpg"
          alt="Bridge International School Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-brand-red/20 to-black/80"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center px-4 md:px-6 space-y-4 md:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bold font-lora leading-tight tracking-tight">
            <span className="text-white">Get in </span>
            <span className="text-brand-red">Touch</span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg md:text-2xl text-gray-200 leading-relaxed font-light font-manrope">
              We're here to answer your questions and help you take the next
              step in your educational journey. Contact us today to learn more
              about Bridge International School.
            </p>
          </div>
          <div className="w-16 md:w-24 h-1 bg-brand-red mx-auto"></div>
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="w-full relative overflow-hidden">
        <div className="relative h-[90vh] sm:h-[90vh] md:h-[90vh]">
          <img
            src="./contactbanner.jpg"
            alt="Bridge International School Campus Building"
            className="w-full h-full object-cover"
          />

          {/* Elegant thin wave divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg
              className="block w-full h-20 sm:h-24 md:h-28"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 1200 120"
            >
              <path
                d="M0,0 C300,30 900,30 1200,0 L1200,120 L0,120 Z"
                fill="#82062c"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20 space-y-5">
            <div className="w-20 h-1 bg-brand-red mx-auto"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-lora text-white leading-tight">
              Get In <span className="text-brand-red">Touch</span>
            </h2>
            <p className="text-lg md:text-xl text-brand-beige max-w-3xl mx-auto leading-relaxed font-manrope">
              We'd love to hear from you. Reach out through any of these
              channels.
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Address Card */}
            <div className="group relative bg-gray-800 p-8 text-center transition-all duration-300 hover:bg-gray-700 hover:transform hover:-translate-y-1 shadow-lg hover:shadow-xl border border-gray-700">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 md:w-18 md:h-18 bg-gradient-to-br from-brand-red to-red-700 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                  <svg
                    className="w-8 h-8 md:w-9 md:h-9 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-lora text-white mb-4 group-hover:text-brand-red transition-colors duration-300">
                  Our Location
                </h3>
                <p className="text-brand-beige leading-relaxed font-manrope text-md">
                  Wannasorn Building, 7th Floor
                  <br />
                  No. 35 อาคารวรรณสรณ์
                  <br />
                  Phaya Thai Rd, Thanon Phaya Thai
                  <br />
                  Ratchathewi, Bangkok 10400
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group relative bg-gray-800 p-8 text-center transition-all duration-300 hover:bg-gray-700 hover:transform hover:-translate-y-1 shadow-lg hover:shadow-xl border border-gray-700">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 md:w-18 md:h-18 bg-gradient-to-br from-brand-red to-red-700 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                  <svg
                    className="w-8 h-8 md:w-9 md:h-9 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-lora text-white mb-4 group-hover:text-brand-red transition-colors duration-300">
                  Call Us
                </h3>
                <p className="text-brand-beige font-manrope text-md">
                  <a
                    href="tel:+66980904960"
                    className="hover:text-brand-red transition-colors duration-300 block py-2"
                  >
                    +66 98 090 4960
                  </a>
                </p>
                <p className="text-gray-400 text-sm mt-2 font-manrope">
                  Mon-Fri, 8:00 AM - 4:30 PM
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="group relative bg-gray-800 p-8 text-center transition-all duration-300 hover:bg-gray-700 hover:transform hover:-translate-y-1 shadow-lg hover:shadow-xl border border-gray-700">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 md:w-18 md:h-18 bg-gradient-to-br from-brand-red to-red-700 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                  <svg
                    className="w-8 h-8 md:w-9 md:h-9 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-lora text-white mb-4 group-hover:text-brand-red transition-colors duration-300">
                  Email Us
                </h3>
                <p className="text-brand-beige font-manrope text-md">
                  <a
                    href="mailto:admin@bic-bangkok.com"
                    className="hover:text-brand-red transition-colors duration-300 break-all py-2 block"
                  >
                    admin@bic-bangkok.com
                  </a>
                </p>
                <p className="text-gray-400 text-sm mt-2 font-manrope">
                  We respond within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="text-center mt-16 pt-8">
            <p className="text-gray-400 font-manrope">
              Follow us on social media for updates and news
            </p>
            <div className="flex justify-center space-x-5 mt-4">
              {/* Social media icons would go here */}
            </div>
          </div>
        </div>
      </section>

      {/* Find Us Section - Redesigned with Dark Theme */}
      <section className="w-full py-12 sm:py-16 md:py-32 px-4 md:px-6 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-brand-red rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gray-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-12 md:mb-20 space-y-4 md:space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold font-lora text-white leading-tight">
              Find <span className="text-brand-red">Us</span>
            </h2>
            <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-manrope">
              Located in the vibrant heart of Bangkok, our modern campus awaits
              your visit
            </p>
          </div>

          {/* Map and Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Map Container - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-800 p-2">
                <div className="aspect-[4/3] sm:aspect-video w-full rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.2847234567!2d100.5327822!3d13.7583265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29eca0a4dc2e7%3A0x944f80c1e57b451e!2sWannasorn%20Building!5e0!3m2!1sen!2sth!4v1234567890123!5m2!1sen!2sth"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Wannasorn Building Location"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="absolute top-6 left-6 bg-gray-800/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-600">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-gradient-to-r from-brand-red to-red-600 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-white font-lora text-sm md:text-base">
                        Wannasorn Building
                      </h3>
                      <p className="text-xs text-gray-300 font-manrope">
                        7th Floor, Phaya Thai Road
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Details - Takes 1 column */}
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-white font-lora">
                    Office Hours
                  </h3>
                </div>
                <div className="space-y-2 text-sm text-gray-300 font-manrope">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold text-white">
                      8:00 AM - 5:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold text-white">
                      9:00 AM - 3:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-red-400 font-semibold">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-white font-lora">
                    Getting Here
                  </h3>
                </div>
                <div className="space-y-3 text-sm text-gray-300 font-manrope">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>BTS Phaya Thai Station (5 min walk)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Airport Rail Link Phaya Thai</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Multiple bus routes available</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
            </div>
          </div>
        </div>
      </section>

      {/* Campus Visit Section */}
      <section className="w-full flex flex-col lg:flex-row items-stretch">
        {/* Left side: Image */}
        <div className="w-full lg:w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80"
            alt="Bridge International School Campus Tour"
            className="w-full h-full object-cover min-h-[300px] sm:min-h-[400px] lg:min-h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-red/10 to-brand-red/30"></div>
        </div>

        {/* Right side: Text content */}
        <div className="w-full lg:w-1/2 bg-gray-800 flex items-center">
          <div className="p-6 sm:p-8 md:p-16 lg:p-20 space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <div className="w-12 md:w-16 h-1 bg-brand-red"></div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold font-lora text-white leading-tight">
                Visit Our <span className="text-brand-red">Campus</span>
              </h2>
            </div>
            <p className="text-base md:text-xl text-brand-beige leading-relaxed font-light font-manrope">
              Interested in seeing BI in person? Our campus is open for tours,
              and we would love to show you around. Check out our location on
              the map and schedule a visit today.
            </p>
            <div className="pt-2 md:pt-4">
              <Link
                to="/visit"
                className="group inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-brand-red hover:bg-brand-red/90 text-white font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 w-full sm:w-auto justify-center disabled:opacity-50 disabled:cursor-not-allowed rounded-lg"
              >
                SCHEDULE A VISIT
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 ml-2 md:ml-3 group-hover:translate-x-1 transition-transform duration-300"
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
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 sm:py-16 md:py-32 px-4 md:px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6">
            <div className="w-16 md:w-20 h-1 bg-brand-red mx-auto"></div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold font-lora text-white leading-tight">
              Need More <span className="text-brand-red">Information?</span>
            </h2>
            <p className="text-base md:text-xl text-brand-beige max-w-3xl mx-auto leading-relaxed font-manrope">
              Fill out our inquiry form, and a member of our team will get back
              to you promptly.
            </p>
          </div>

          {isMailed && (
            <div
              style={{
                marginBottom: "32px",
                padding: "20px 24px",
                background:
                  "linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(21, 128, 61, 0.1) 100%)",
                border: "1px solid rgba(34, 197, 94, 0.3)",
                borderRadius: "12px",
                backdropFilter: "blur(10px)",
                boxShadow: "0 8px 32px rgba(34, 197, 94, 0.1)",
                animation: "fadeIn 0.5s ease-out",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background:
                      "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 12px rgba(34, 197, 94, 0.3)",
                  }}
                >
                  <svg
                    style={{ width: "20px", height: "20px", color: "white" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div style={{ textAlign: "center" }}>
                  <h3
                    style={{
                      color: "#22c55e",
                      fontWeight: "bold",
                      fontSize: "18px",
                      margin: "0 0 4px 0",
                      fontFamily: "inherit",
                    }}
                  >
                    Message Sent Successfully!
                  </h3>
                  <p
                    style={{
                      color: "#86efac",
                      fontSize: "14px",
                      margin: "0",
                      fontFamily: "inherit",
                    }}
                  >
                    Thank you for contacting us. We'll get back to you within 24
                    hours.
                  </p>
                </div>
              </div>
            </div>
          )}

          {errorMessage && (
            <div
              style={{
                marginBottom: "32px",
                padding: "20px 24px",
                background:
                  "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(185, 28, 28, 0.1) 100%)",
                border: "1px solid rgba(239, 68, 68, 0.3)",
                borderRadius: "12px",
                backdropFilter: "blur(10px)",
                boxShadow: "0 8px 32px rgba(239, 68, 68, 0.1)",
                animation: "fadeIn 0.5s ease-out",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background:
                      "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 12px rgba(239, 68, 68, 0.3)",
                  }}
                >
                  <svg
                    style={{ width: "20px", height: "20px", color: "white" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div style={{ textAlign: "center" }}>
                  <h3
                    style={{
                      color: "#ef4444",
                      fontWeight: "bold",
                      fontSize: "18px",
                      margin: "0 0 4px 0",
                      fontFamily: "inherit",
                    }}
                  >
                    Message Failed to Send
                  </h3>
                  <p
                    style={{
                      color: "#fca5a5",
                      fontSize: "14px",
                      margin: "0",
                      fontFamily: "inherit",
                    }}
                  >
                    {errorMessage.replace("❌ ", "")} Please try again or
                    contact us directly.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Contact Form */}
          <form ref={form} onSubmit={submit} className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label
                  htmlFor="fullName"
                  className="block text-white font-semibold font-manrope text-sm md:text-base"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  className="w-full px-3 py-3 md:px-4 md:py-4 bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all duration-300 text-sm md:text-base"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-white font-semibold font-manrope text-sm md:text-base"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-3 md:px-4 md:py-4 bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all duration-300 text-sm md:text-base"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            {/* Contact Phone */}
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="block text-white font-semibold font-manrope text-sm md:text-base"
              >
                Contact Phone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-3 py-3 md:px-4 md:py-4 bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all duration-300 text-sm md:text-base"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="block text-white font-semibold font-manrope text-sm md:text-base"
              >
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-3 py-3 md:px-4 md:py-4 bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all duration-300 text-sm md:text-base"
                placeholder="What is your inquiry about?"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-white font-semibold font-manrope text-sm md:text-base"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-3 py-3 md:px-4 md:py-4 bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all duration-300 resize-vertical text-sm md:text-base"
                placeholder="Tell us about your inquiry..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4 md:pt-6">
              <button
                type="submit"
                disabled={isLoading}
                className="group inline-flex items-center px-8 py-3 md:px-12 md:py-4 bg-brand-red hover:bg-brand-red/90 text-white font-bold text-lg md:text-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 w-full sm:w-auto justify-center disabled:opacity-50 disabled:cursor-not-allowed rounded-lg"
              >
                {isLoading ? "Sending..." : "SEND MESSAGE"}
                {!isLoading && (
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 ml-2 md:ml-3 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
