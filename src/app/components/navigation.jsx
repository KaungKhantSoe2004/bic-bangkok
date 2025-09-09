// "use client";
// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   FaGraduationCap,
//   FaChevronDown,
//   FaTimes,
//   FaBars,
//   FaHome,
//   FaInfoCircle,
//   FaUserGraduate,
//   FaEnvelope,
// } from "react-icons/fa";

// export default function Navigation() {
//   const [isCoursesOpen, setIsCoursesOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const coursePages = ["/igcse", "/alevels", "/ossd", "/ged"];

//   const navItems = [
//     { path: "/", label: "HOME", icon: FaHome },
//     { path: "/about", label: "ABOUT", icon: FaInfoCircle },
//     { path: "/admission", label: "ADMISSION", icon: FaUserGraduate },
//   ];

//   const courses = [
//     {
//       key: "/igcse",
//       label: "IGCSE",
//       desc: "International General Certificate of Secondary Education",
//     },
//     {
//       key: "/alevels",
//       label: "A LEVELS",
//       desc: "Advanced Level Qualification",
//     },
//     {
//       key: "/ossd",
//       label: "OSSD",
//       desc: "Ontario Secondary School Diploma",
//     },
//     {
//       key: "/ged",
//       label: "GED",
//       desc: "General Educational Development",
//     },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         scrolled
//           ? "bg-gray-900/98 backdrop-blur-md shadow-2xl border-b border-gray-700/50"
//           : "bg-gray-900/95 backdrop-blur-sm border-b border-gray-800/30"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center cursor-pointer group">
//             <div className="relative">
//               <div className="w-14 h-14 bg-gradient-to-br from-rose-500/20 via-rose-400/10 to-rose-600/20 rounded-xl flex items-center justify-center mr-4 group-hover:scale-105 transition-all duration-300 border border-gray-700/50 overflow-hidden shadow-lg">
//                 <img
//                   src="./logos.png"
//                   alt="Bridge International College Logo"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//             <div className="text-gray-100">
//               <div className="text-xl font-bold leading-tight bg-gradient-to-r from-rose-400 via-rose-300 to-rose-500 bg-clip-text text-transparent">
//                 Bridge
//               </div>
//               <div className="text-xs leading-tight text-gray-400 font-medium tracking-wide">
//                 International College
//               </div>
//             </div>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 className={`relative text-gray-300 hover:text-rose-400 transition-all duration-300 font-medium text-sm tracking-wide group flex items-center ${
//                   location.pathname === item.path ? "text-rose-400" : ""
//                 }`}
//               >
//                 <item.icon className="w-4 h-4 mr-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
//                 {item.label}
//                 <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-rose-500 group-hover:w-full transition-all duration-300 rounded-full"></div>
//                 {location.pathname === item.path && (
//                   <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-rose-400 to-rose-500 rounded-full"></div>
//                 )}
//               </Link>
//             ))}

//             {/* Courses Dropdown - Removed colors from items */}
//             <div className="relative">
//               <button
//                 onMouseEnter={() => setIsCoursesOpen(true)}
//                 onMouseLeave={() => setIsCoursesOpen(false)}
//                 className={`relative text-gray-300 hover:text-rose-400 transition-all duration-300 font-medium text-sm tracking-wide group flex items-center ${
//                   coursePages.includes(location.pathname) ? "text-rose-400" : ""
//                 }`}
//               >
//                 <FaGraduationCap className="w-4 h-4 mr-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
//                 COURSES
//                 <FaChevronDown
//                   className={`w-3 h-3 ml-2 transition-transform duration-300 ${
//                     isCoursesOpen ? "rotate-180" : ""
//                   }`}
//                 />
//                 <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-rose-500 group-hover:w-full transition-all duration-300 rounded-full"></div>
//                 {coursePages.includes(location.pathname) && (
//                   <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-rose-400 to-rose-500 rounded-full"></div>
//                 )}
//               </button>

//               {isCoursesOpen && (
//                 <div
//                   className="absolute top-full left-0 mt-3 w-80 bg-gray-800 rounded-xl shadow-2xl border border-gray-700/50 py-3 z-50"
//                   onMouseEnter={() => setIsCoursesOpen(true)}
//                   onMouseLeave={() => setIsCoursesOpen(false)}
//                 >
//                   <div className="px-4 py-2 border-b border-gray-700/50 mb-2">
//                     <h3 className="text-rose-400 font-semibold text-sm">
//                       Available Programs
//                     </h3>
//                   </div>
//                   <div className="space-y-2 px-2">
//                     {courses.map((course) => (
//                       <Link
//                         key={course.key}
//                         to={course.key}
//                         className={`block w-full text-left px-4 py-3 transition-all duration-200 rounded-lg mx-1 ${
//                           location.pathname === course.key
//                             ? "text-rose-400 bg-gray-700/50"
//                             : "text-gray-300 hover:bg-gray-700/50"
//                         }`}
//                         onClick={() => setIsCoursesOpen(false)}
//                       >
//                         <div className="font-semibold text-sm mb-1">
//                           {course.label}
//                         </div>
//                         <div className="text-xs text-gray-400">
//                           {course.desc}
//                         </div>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Enquire Button */}
//             <Link
//               to="/enquire"
//               className="group relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition-all duration-300 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full hover:from-rose-400 hover:to-rose-500 shadow-lg hover:shadow-xl hover:shadow-rose-500/25 border border-rose-500/30 overflow-hidden transform hover:-translate-y-0.5"
//             >
//               <FaEnvelope className="w-4 h-4 mr-2" />
//               <span className="relative z-10">ENQUIRE</span>
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden relative w-12 h-12 text-gray-300 focus:outline-none transition-all duration-300 hover:bg-gray-800/50 rounded-lg flex items-center justify-center"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {isMobileMenuOpen ? (
//               <FaTimes className="w-5 h-5" />
//             ) : (
//               <FaBars className="w-5 h-5" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden fixed inset-0 z-40 mt-20 bg-gray-900/95 backdrop-blur-md overflow-y-auto pb-20">
//             <div className="container mx-auto px-4 py-6">
//               {/* Mobile Navigation Items */}
//               <div className="space-y-2 mb-6">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.path}
//                     to={item.path}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
//                       location.pathname === item.path
//                         ? "text-rose-400 bg-gray-700/50 border-l-4 border-rose-400"
//                         : "text-gray-300 hover:text-rose-400 hover:bg-gray-700/30"
//                     }`}
//                   >
//                     <item.icon className="w-4 h-4 mr-3" />
//                     {item.label}
//                   </Link>
//                 ))}
//               </div>

//               {/* Mobile Courses Section - Removed colors */}
//               <div className="mb-6">
//                 <div className="flex items-center px-4 py-3 text-gray-300 font-semibold text-sm border-b border-gray-700/50 mb-3">
//                   <FaGraduationCap className="w-4 h-4 mr-3" />
//                   COURSES
//                 </div>
//                 <div className="space-y-2">
//                   {courses.map((course) => (
//                     <Link
//                       key={course.key}
//                       to={course.key}
//                       onClick={() => setIsMobileMenuOpen(false)}
//                       className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
//                         location.pathname === course.key
//                           ? "text-rose-400 bg-gray-700/50"
//                           : "text-gray-300 hover:bg-gray-700/50"
//                       }`}
//                     >
//                       <div className="font-medium text-sm">{course.label}</div>
//                       <div className="text-xs text-gray-500 mt-1">
//                         {course.desc}
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               </div>

//               {/* Mobile Enquire Button */}
//               <Link
//                 to="/enquire"
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="flex items-center justify-center w-full px-6 py-4 text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-400 hover:to-rose-500 rounded-full border border-rose-500/30 shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
//               >
//                 <FaEnvelope className="w-4 h-4 mr-2" />
//                 ENQUIRE
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaGraduationCap,
  FaChevronDown,
  FaTimes,
  FaBars,
  FaHome,
  FaInfoCircle,
  FaUserGraduate,
  FaEnvelope,
} from "react-icons/fa";

export default function Navigation() {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const coursePages = ["/igcse", "/alevels", "/ossd", "/ged"];

  const navItems = [
    { path: "/", label: "HOME", icon: FaHome },
    { path: "/about", label: "ABOUT", icon: FaInfoCircle },
    { path: "/admission", label: "ADMISSION", icon: FaUserGraduate },
  ];

  const courses = [
    {
      key: "/igcse",
      label: "IGCSE",
      desc: "International General Certificate of Secondary Education",
    },
    {
      key: "/alevels",
      label: "A LEVELS",
      desc: "Advanced Level Qualification",
    },
    {
      key: "/ossd",
      label: "OSSD",
      desc: "Ontario Secondary School Diploma",
    },
    {
      key: "/ged",
      label: "GED",
      desc: "General Educational Development",
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gray-900/98 backdrop-blur-md shadow-2xl border-b border-gray-700/50"
          : "bg-gray-900/95 backdrop-blur-sm border-b border-gray-800/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer group">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-rose-500/20 via-rose-400/10 to-rose-600/20 rounded-xl flex items-center justify-center mr-4 group-hover:scale-105 transition-all duration-300 border border-gray-700/50 overflow-hidden shadow-lg">
                <img
                  src="./logos.png"
                  alt="Bridge International College Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-gray-100">
              <div className="text-xl font-bold leading-tight bg-gradient-to-r from-rose-400 via-rose-300 to-rose-500 bg-clip-text text-transparent">
                Bridge
              </div>
              <div className="text-xs leading-tight text-gray-400 font-medium tracking-wide">
                International College
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-gray-300 hover:text-rose-400 transition-all duration-300 font-medium text-sm tracking-wide group flex items-center ${
                  location.pathname === item.path ? "text-rose-400" : ""
                }`}
              >
                <item.icon className="w-4 h-4 mr-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                {item.label}
                <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-rose-500 group-hover:w-full transition-all duration-300 rounded-full"></div>
                {location.pathname === item.path && (
                  <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-rose-400 to-rose-500 rounded-full"></div>
                )}
              </Link>
            ))}

            {/* Courses Dropdown */}
            <div className="relative">
              <div
                className="h-full py-5 absolute -top-5 left-0 right-0"
                onMouseEnter={() => setIsCoursesOpen(true)}
                onMouseLeave={() => setIsCoursesOpen(false)}
              ></div>
              <button
                onMouseEnter={() => setIsCoursesOpen(true)}
                className={`relative text-gray-300 hover:text-rose-400 transition-all duration-300 font-medium text-sm tracking-wide group flex items-center ${
                  coursePages.includes(location.pathname) ? "text-rose-400" : ""
                }`}
              >
                <FaGraduationCap className="w-4 h-4 mr-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                COURSES
                <FaChevronDown
                  className={`w-3 h-3 ml-2 transition-transform duration-300 ${
                    isCoursesOpen ? "rotate-180" : ""
                  }`}
                />
                <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-rose-500 group-hover:w-full transition-all duration-300 rounded-full"></div>
                {coursePages.includes(location.pathname) && (
                  <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-rose-400 to-rose-500 rounded-full"></div>
                )}
              </button>

              {isCoursesOpen && (
                <div
                  className="absolute top-full left-0 mt-3 w-80 bg-gray-800 rounded-xl shadow-2xl border border-gray-700/50 py-3 z-50"
                  onMouseEnter={() => setIsCoursesOpen(true)}
                  onMouseLeave={() => setIsCoursesOpen(false)}
                >
                  <div className="px-4 py-2 border-b border-gray-700/50 mb-2">
                    <h3 className="text-rose-400 font-semibold text-sm">
                      Available Programs
                    </h3>
                  </div>
                  <div className="space-y-2 px-2">
                    {courses.map((course) => (
                      <Link
                        key={course.key}
                        to={course.key}
                        className={`block w-full text-left px-4 py-3 transition-all duration-200 rounded-lg mx-1 ${
                          location.pathname === course.key
                            ? "text-rose-400 bg-gray-700/50"
                            : "text-gray-300 hover:bg-gray-700/50"
                        }`}
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        <div className="font-semibold text-sm mb-1">
                          {course.label}
                        </div>
                        <div className="text-xs text-gray-400">
                          {course.desc}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Enquire Button */}
            <Link
              to="/enquire"
              className="group relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition-all duration-300 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full hover:from-rose-400 hover:to-rose-500 shadow-lg hover:shadow-xl hover:shadow-rose-500/25 border border-rose-500/30 overflow-hidden transform hover:-translate-y-0.5"
            >
              <FaEnvelope className="w-4 h-4 mr-2" />
              <span className="relative z-10">ENQUIRE</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-12 h-12 text-gray-300 focus:outline-none transition-all duration-300 hover:bg-gray-800/50 rounded-lg flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-md border-t border-gray-800/50 pb-20">
            <div className="container mx-auto px-4 py-6">
              {/* Mobile Navigation Items */}
              <div className="space-y-2 mb-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      location.pathname === item.path
                        ? "text-rose-400 bg-gray-700/50 border-l-4 border-rose-400"
                        : "text-gray-300 hover:text-rose-400 hover:bg-gray-700/30"
                    }`}
                  >
                    <item.icon className="w-4 h-4 mr-3" />
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Courses Section */}
              <div className="mb-6">
                <div className="flex items-center px-4 py-3 text-gray-300 font-semibold text-sm border-b border-gray-700/50 mb-3">
                  <FaGraduationCap className="w-4 h-4 mr-3" />
                  COURSES
                </div>
                <div className="space-y-2">
                  {courses.map((course) => (
                    <Link
                      key={course.key}
                      to={course.key}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                        location.pathname === course.key
                          ? "text-rose-400 bg-gray-700/50"
                          : "text-gray-300 hover:bg-gray-700/50"
                      }`}
                    >
                      <div className="font-medium text-sm">{course.label}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        {course.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Enquire Button */}
              <Link
                to="/enquire"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-full px-6 py-4 text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-400 hover:to-rose-500 rounded-full border border-rose-500/30 shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <FaEnvelope className="w-4 h-4 mr-2" />
                ENQUIRE
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
