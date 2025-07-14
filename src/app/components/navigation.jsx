"use client";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavigationProps {
  language: string;
  setLanguage: (lang: string) => void;
}

export default function Navigation({ language, setLanguage }: NavigationProps) {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const translations = {
    en: {
      home: "HOME",
      about: "ABOUT",
      courses: "COURSES",
      admission: "ADMISSION",
      enquire: "ENQUIRE",
      igcse: "IGCSE",
      alevels: "A LEVELS",
      ossd: "OSSD",
      ged: "GED",
    },
    mm: {
      home: "ပင်မစာမျက်နှာ",
      about: "အကြောင်း",
      courses: "သင်တန်းများ",
      admission: "ဝင်ခွင့်",
      enquire: "မေးမြန်းရန်",
      igcse: "IGCSE",
      alevels: "A Levels",
      ossd: "OSSD",
      ged: "GED",
    },
    th: {
      home: "หน้าแรก",
      about: "เกี่ยวกับ",
      courses: "หลักสูตร",
      admission: "การรับสมัคร",
      enquire: "สอบถาม",
      igcse: "IGCSE",
      alevels: "A Levels",
      ossd: "OSSD",
      ged: "GED",
    },
  };
  const t = translations[language];
  const coursePages = ["/igcse", "/alevels", "/ossd", "/ged"];

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500/20 to-rose-600/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-105 transition-transform duration-300 border border-gray-700 overflow-hidden">
                <img
                  src={`./Bridge.jpg`}
                  alt="Bridge International College Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-rose-500/10 to-rose-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </div>
            <div className="text-gray-100">
              <div className="text-xl font-bold leading-tight bg-gradient-to-r from-rose-400 to-rose-500 bg-clip-text text-transparent">
                Bridge
              </div>
              <div className="text-xs leading-tight text-gray-400 font-medium">
                International College
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-gray-300 hover:text-rose-400 transition-all duration-200 font-medium text-sm relative group ${
                location.pathname === "/" ? "text-rose-400" : ""
              }`}
            >
              {t.home}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-rose-500 group-hover:w-full transition-all duration-300"></div>
              {location.pathname === "/" && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-rose-400 to-rose-500"></div>
              )}
            </Link>
            <Link
              to="/about"
              className={`text-gray-300 hover:text-rose-400 transition-all duration-200 font-medium text-sm relative group ${
                location.pathname === "/about" ? "text-rose-400" : ""
              }`}
            >
              {t.about}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-rose-500 group-hover:w-full transition-all duration-300"></div>
              {location.pathname === "/about" && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-rose-400 to-rose-500"></div>
              )}
            </Link>

            {/* Courses Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsCoursesOpen(true)}
                onMouseLeave={() => setIsCoursesOpen(false)}
                className={`text-gray-300 hover:text-rose-400 transition-all duration-200 font-medium text-sm relative group flex items-center ${
                  coursePages.includes(location.pathname) ? "text-rose-400" : ""
                }`}
              >
                {t.courses}
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                    isCoursesOpen ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-rose-500 group-hover:w-full transition-all duration-300"></div>
                {coursePages.includes(location.pathname) && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-rose-400 to-rose-500"></div>
                )}
              </button>
              {isCoursesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-700 py-2 z-50 animate-fade-in"
                  onMouseEnter={() => setIsCoursesOpen(true)}
                  onMouseLeave={() => setIsCoursesOpen(false)}
                >
                  {[
                    { key: "/igcse", label: t.igcse },
                    { key: "/alevels", label: t.alevels },
                    { key: "/ossd", label: t.ossd },
                    { key: "/ged", label: t.ged },
                  ].map((course) => (
                    <Link
                      key={course.key}
                      to={course.key}
                      className={`block w-full text-left px-4 py-2.5 text-sm transition-all duration-200 font-medium ${
                        location.pathname === course.key
                          ? "text-rose-400 bg-gray-700/50"
                          : "text-gray-300 hover:text-rose-400 hover:bg-gray-700/50"
                      }`}
                      onClick={() => setIsCoursesOpen(false)}
                    >
                      {course.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/admission"
              className={`text-gray-300 hover:text-rose-400 transition-all duration-200 font-medium text-sm relative group ${
                location.pathname === "/admission" ? "text-rose-400" : ""
              }`}
            >
              {t.admission}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-rose-500 group-hover:w-full transition-all duration-300"></div>
              {location.pathname === "/admission" && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-rose-400 to-rose-500"></div>
              )}
            </Link>

            {/* Special Enquire Button */}
            <Link
              to="/enquire"
              className="group relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 bg-gradient-to-r from-rose-500 to-rose-600 rounded-lg hover:from-rose-600 hover:to-rose-700 shadow-md hover:shadow-lg border border-rose-600/30"
            >
              <span className="relative">{t.enquire}</span>
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-rose-600 to-rose-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
            </Link>

            {/* Language Switcher */}
            <div className="flex items-center space-x-1 bg-gray-800 rounded-lg p-1 border border-gray-700">
              {[
                { code: "en", label: "EN" },
                { code: "mm", label: "MM" },
                { code: "th", label: "TH" },
              ].map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-all duration-200 ${
                    language === lang.code
                      ? "bg-gray-700 text-rose-400 shadow-sm"
                      : "text-gray-400 hover:text-gray-200 hover:bg-gray-700/50"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-300 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`bg-gray-300 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-1.5"
                    : "-translate-y-0.5"
                }`}
              ></span>
              <span
                className={`bg-gray-300 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-1.5 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`bg-gray-300 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-1.5"
                    : "translate-y-0.5"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-gray-800/95 backdrop-blur-sm rounded-lg mt-2 mb-4 border border-gray-700 shadow-xl">
            <div className="flex flex-col space-y-1 p-4">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === "/"
                    ? "text-rose-400 bg-gray-700/50"
                    : "text-gray-300 hover:text-rose-400 hover:bg-gray-700/50"
                }`}
              >
                {t.home}
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === "/about"
                    ? "text-rose-400 bg-gray-700/50"
                    : "text-gray-300 hover:text-rose-400 hover:bg-gray-700/50"
                }`}
              >
                {t.about}
              </Link>

              {/* Mobile Courses */}
              <div className="px-4 py-3">
                <div className="text-gray-300 font-medium mb-2">
                  {t.courses}
                </div>
                <div className="space-y-1">
                  {[
                    { key: "/igcse", label: t.igcse },
                    { key: "/alevels", label: t.alevels },
                    { key: "/ossd", label: t.ossd },
                    { key: "/ged", label: t.ged },
                  ].map((course) => (
                    <Link
                      key={course.key}
                      to={course.key}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                        location.pathname === course.key
                          ? "text-rose-400 bg-gray-700/50"
                          : "text-gray-300 hover:text-rose-400 hover:bg-gray-700/50"
                      }`}
                    >
                      {course.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/admission"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === "/admission"
                    ? "text-rose-400 bg-gray-700/50"
                    : "text-gray-300 hover:text-rose-400 hover:bg-gray-700/50"
                }`}
              >
                {t.admission}
              </Link>
              <Link
                to="/enquire"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 px-4 py-3 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-center border border-rose-600/30"
              >
                {t.enquire}
              </Link>

              {/* Mobile Language Switcher */}
              <div className="px-4 py-3">
                <div className="text-gray-300 font-medium mb-2">Language</div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { code: "en", name: "English" },
                    { code: "mm", name: "မြန်မာ" },
                    { code: "th", name: "ไทย" },
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-3 py-2 rounded-md text-xs font-medium transition-all ${
                        language === lang.code
                          ? "bg-gray-700 text-rose-400 border border-gray-600"
                          : "text-gray-300 hover:bg-gray-700/50 border border-gray-700"
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
