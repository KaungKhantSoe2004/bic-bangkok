"use client";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Banner from "../components/banner";
import { FiArrowRight, FiAward, FiBook, FiGlobe } from "react-icons/fi";
import { FaGlobeAsia } from "react-icons/fa";

const homeImages = [
  "./1.jpg",
  "./2.jpg",
  "./3.jpg",
  "./4.jpg",
  "./5.jpg",
  "./6.jpg",
  "./7.jpg",
  "./8.jpg",
];

function PlayIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
      />
    </svg>
  );
}

export default function HomePage() {
  const [activeLifeSection, setActiveLifeSection] = useState(0);
  const sectionRefs = useRef([]);

  const lifeSections = [
    {
      title: "Cultural Immersion",
      description:
        "Immerse yourself in Thai culture while maintaining your global perspective. Our students experience the rich traditions, festivals, and customs of Thailand through organized cultural activities and community engagement.",
      image: "./cultural.webp",
      details: [
        "Traditional Thai festivals and celebrations",
        "Cultural exchange programs with local communities",
        "Language immersion opportunities",
        "Historical site visits and cultural tours",
      ],
    },
    {
      title: "Extracurricular Activities",
      description:
        "From sports teams to academic clubs, drama productions to community service projects. Our diverse range of activities ensures every student finds their passion and develops leadership skills.",
      image: "./extra.webp",
      details: [
        "Sports teams and fitness programs",
        "Academic clubs and competitions",
        "Drama and arts productions",
        "Community service initiatives",
      ],
    },
    {
      title: "Build Lifelong Memories",
      description:
        "Create unforgettable experiences with classmates from around the world. Our campus events, international trips, and graduation celebrations become cherished memories that last a lifetime.",
      image: "./memories.webp",
      details: [
        "International student exchange programs",
        "Campus events and celebrations",
        "Graduation ceremonies and achievements",
        "Alumni network connections",
      ],
    },
    {
      title: "Accommodation",
      description:
        "We offer a variety of safe and modern living options, including on-campus residences and off-campus housing with trusted partners. All accommodations are equipped with the amenities needed to create a comfortable and productive living environment.",
      image: "./accomodation.webp",
      details: [
        "On-campus residences with 24/7 security",
        "Off-campus housing with trusted partners",
        "Modern amenities and comfortable furnishings",
        "Study spaces and recreational facilities",
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionElements = sectionRefs.current;

      sectionElements.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const isVisible =
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2;

          if (isVisible) {
            setActiveLifeSection(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen font-lora">
      <Banner
        title="Welcome to Bridge International  Bangkok"
        subtitle="Discover an unparalleled educational experience in the heart of Bangkok."
      />

      <section className="w-full flex flex-col md:flex-row items-stretch ">
        {/* Left side: just an image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.C4y-ifG4Ft1ZZwi0vEepVgHaFD?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="What we offer"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right side: background image + overlay + text */}
        <div
          className="w-full md:w-1/2 relative bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://tse4.mm.bing.net/th/id/OIP.vk03m39fWEWmlTN6t7XH1gHaFX?rs=1&pid=ImgDetMain&o=7&rm=3')",
          }}
        >
          {/* Darker overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
          {/* Text content */}
          <div className="relative z-10 p-6 md:p-10 flex flex-col justify-center h-full space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-4xl font-lora-semibold leading-tight text-brand-beige">
              What We Offer
            </h2>
            <p className="text-base md:text-lg font-manrope text-gray-300 max-w-xl">
              We provide comprehensive, tailored solutions designed to help your
              business thrive. From custom software development to automation
              and cloud services, our expertise ensures scalable and efficient
              outcomes.
            </p>
            <ul className="list-disc list-inside font-manrope text-gray-400 max-w-xl space-y-1 text-sm md:text-base">
              <li>Custom software development</li>
              <li>Automation and process optimization</li>
              <li>Scalable cloud deployments</li>
              <li>Real-time analytics and dashboards</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
              <button
                className="px-4 md:px-6 py-2 md:py-3 bg-brand-red hover:bg-red-700 text-white font-semibold rounded-xl shadow-md transition hover-lift font-manrope text-sm md:text-base"
                type="button"
              >
                Get Started
              </button>
              <button
                className="px-4 md:px-6 py-2 md:py-3 bg-transparent border border-brand-beige hover:bg-brand-beige hover:text-dark-primary text-brand-beige font-semibold rounded-xl transition hover-lift font-manrope text-sm md:text-base"
                type="button"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-wrap">
        {[
          { alt: "IGCSE", src: "/IGCSE.jpg" },
          { alt: "A Levels", src: "/alevels.jpg" },
          { alt: "OSSD", src: "/ossd.jpg" },
          { alt: "GED", src: "/ged.jpg" },
        ].map(({ alt, src }) => (
          <div
            key={alt}
            className="w-1/2 md:w-1/4 p-2 bg-black flex justify-center items-center filter grayscale hover:grayscale-0 transition duration-300"
          >
            <img
              src={src || "/placeholder.svg"}
              alt={alt}
              className="max-w-full max-h-33 object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </section>

      <section className="w-full flex flex-col md:flex-row items-stretch">
        {/* Left side: just an image */}
        <div className="w-full md:w-1/2">
          <img
            src="./bginternational.webp"
            alt="What we offer"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right side: background image + overlay + text */}
        <div
          className="w-full md:w-1/2 relative bg-cover bg-center"
          style={{
            backgroundImage: "url('./llion.jpg')",
          }}
        >
          {/* Darker overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
          {/* Text content */}
          <div className="relative z-10 p-6 md:p-10 flex flex-col justify-center h-full space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-4xl font-lora font-semibold leading-tight text-brand-beige">
              University Preparation at BI
            </h2>
            <p className="text-base md:text-lg font-manrope text-gray-300 max-w-xl">
              At BI, we are committed to fostering academic excellence through
              our rigorous University preparation programmes:{" "}
              <strong>GED</strong>, <strong>IGCSE</strong>, and
              <strong> A Levels</strong> — all tailored for students aiming to
              get into top international universities.
            </p>
            <p className="text-base md:text-lg font-manrope text-gray-300 max-w-xl">
              Our vibrant campus, expert faculty, and cultural immersion
              opportunities make BI the perfect place to achieve your academic
              goals and prepare for a global future.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col md:flex-row items-stretch">
        {/* Left side: background image + overlay + text */}
        <div
          className="w-full md:w-1/2 relative bg-cover bg-center"
          style={{
            backgroundImage: "url('./reversellion.jpg')",
          }}
        >
          {/* Darker overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
          {/* Text content */}
          <div className="relative z-10 p-6 md:p-10 flex flex-col justify-center h-full space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-4xl font-lora font-semibold leading-tight text-brand-beige">
              Second One I Just Created
            </h2>
            <p className="text-base md:text-lg font-manrope text-gray-300 max-w-xl">
              At BIC, we are committed to fostering academic excellence through
              our rigorous University preparation programmes:{" "}
              <strong>GED</strong>, <strong>IGCSE</strong>, and
              <strong> A Levels</strong>, tailored for students who are aiming
              to get into top international universities.
            </p>
            <p className="text-base md:text-lg font-manrope text-gray-300 max-w-xl">
              Our vibrant campus, expert faculty, and cultural immersion
              opportunities make BI the perfect place to achieve your academic
              goals and prepare for a global future.
            </p>
          </div>
        </div>
        {/* Right side: just an image */}
        <div className="w-full md:w-1/2">
          <img
            src="./bgstudent.webp"
            alt="What we offer"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="w-full flex flex-col md:flex-row items-start py-8 md:py-14 px-4 md:px-6 gap-8 md:gap-12 relative overflow-hidden">
        <div className="w-full md:w-1/2 flex flex-col mt-4 justify-start">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-lora font-semibold text-brand-beige mb-6 md:mb-8">
            Why Choose Us
          </h2>
          <h3 className="text-xl md:text-2xl font-lora text-brand-beige font-semibold mb-4">
            Bridge International Bangkok
          </h3>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed font-manrope mb-4 md:mb-6">
            We offer more than just education — we offer transformation. With an
            internationally aligned curriculum and a strong emphasis on global
            citizenship, BI Bangkok empowers students with the knowledge,
            skills, and confidence to thrive in an ever-changing world.
          </p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed font-manrope">
            Our expert educators and inclusive community foster critical
            thinking, innovation, and a lifelong passion for learning. Choosing
            BI means choosing a future where every student's potential is
            unlocked.
          </p>
          {/* Full-width Button on mobile, fit on desktop */}
          <Link
            to="/about"
            className="w-full md:w-auto inline-flex justify-center items-center px-4 md:px-6 py-2 md:py-3 bg-brand-red hover:bg-brand-red/90 text-white font-manrope font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-brand-red/30 mt-6 md:mt-8 hover-lift text-sm md:text-base"
          >
            Learn More About Us
            <svg
              className="w-4 h-4 md:w-5 md:h-5 ml-2"
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
        {/* Right Side - Video only, NO BOX */}
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          {/* Main Video */}
          <div className="aspect-video rounded-xl overflow-hidden bg-dark-primary">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/lRbBGBDqFsI"
              title="BI Welcoming Message"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </div>
          {/* Thumbnails */}
          <div className="grid grid-cols-3 gap-2 md:gap-3">
            {["lRbBGBDqFsI", "i4fJI-_zbqs", "86CzKrRi8hE"].map((id, index) => (
              <button
                key={id}
                onClick={() =>
                  (document.querySelector(
                    "iframe"
                  ).src = `https://www.youtube.com/embed/${id}?autoplay=1`)
                }
                className="relative aspect-video rounded-lg overflow-hidden border-2 border-white/20 hover:border-brand-beige transition-all group"
              >
                <img
                  src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                  alt={`Video ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-dark-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayIcon className="w-4 h-4 md:w-6 md:h-6 text-brand-beige" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* IGCSE Program Section */}
      <section className="w-full flex flex-col md:flex-row items-stretch">
        {/* Left side: just an image */}
        <div className="w-full md:w-1/2">
          <img
            src="/IGCSE.jpg"
            alt="IGCSE Program"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right side: background image + overlay + text */}
        <div
          className="w-full md:w-1/2 relative bg-cover bg-center"
          style={{
            backgroundImage: "url('./igcse-bg.jpg')",
          }}
        >
          {/* Darker overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
          {/* Text content */}
          <div className="relative z-10 p-6 md:p-10 flex flex-col justify-center h-full space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-4xl font-lora font-semibold leading-tight text-brand-beige">
              IGCSE
            </h2>
            <p className="text-base md:text-lg font-manrope text-gray-300 max-w-xl">
              Engaging students through discussions, group projects, and
              practical applications. Our IGCSE program provides a solid
              foundation for advanced studies with internationally recognized
              qualifications.
            </p>
            <p className="text-base md:text-lg font-manrope text-gray-300 max-w-xl">
              Students develop critical thinking skills and gain comprehensive
              knowledge across multiple subjects, preparing them for A Levels
              and university entrance.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/programs/igcse"
                className="px-4 md:px-6 py-2 md:py-3 bg-brand-red hover:bg-red-700 text-white font-semibold rounded-xl shadow-md transition hover-lift font-manrope text-sm md:text-base"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OSSD Program Section */}
      <section className="w-full flex flex-col-reverse md:flex-row items-stretch">
        {/* Left side: background image + overlay + text */}
        <div
          className="w-full md:w-1/2 relative bg-cover bg-center"
          style={{
            backgroundImage: "url('./ossd-bg.jpg')",
          }}
        >
          {/* Darker overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
          {/* Text content */}
          <div className="relative z-10 p-6 md:p-10 flex flex-col justify-center h-full space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-4xl font-lora font-semibold leading-tight text-brand-beige">
              OSSD
            </h2>
            <p className="text-base md:text-lg font-manrope text-gray-300 max-w-xl">
              With small class sizes, our teachers focus on the unique needs of
              each student. The Ontario Secondary School Diploma offers a
              flexible pathway to Canadian and international universities.
            </p>
            <p className="text-base md:text-lg font-manrope text-gray-300 max-w-xl">
              Students benefit from personalized attention and a curriculum that
              emphasizes both academic excellence and practical skills
              development.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/programs/ossd"
                className="px-4 md:px-6 py-2 md:py-3 bg-brand-red hover:bg-red-700 text-white font-semibold rounded-xl shadow-md transition hover-lift font-manrope text-sm md:text-base"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        {/* Right side: just an image */}
        <div className="w-full md:w-1/2">
          <img
            src="/ossd.jpg"
            alt="OSSD Program"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* A Levels Program Section */}
      <section className="w-full flex flex-col md:flex-row items-stretch">
        {/* Left side: just an image */}
        <div className="w-full md:w-1/2">
          <img
            src="/alevels.jpg"
            alt="A Levels Program"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right side: background image + overlay + text */}
        <div
          className="w-full md:w-1/2 relative bg-cover bg-center"
          style={{
            backgroundImage: "url('./alevels-bg.jpg')",
          }}
        >
          {/* Darker overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
          {/* Text content */}
          <div className="relative z-10 p-6 md:p-10 flex flex-col justify-center h-full space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-4xl font-lora font-semibold leading-tight text-brand-beige">
              A Levels
            </h2>
            <p className="text-base md:text-lg font-manrope text-gray-300 max-w-xl">
              Read about the achievements of our students who have gone on to
              study at prestigious universities around the world. Our A Levels
              program is the gold standard for university preparation.
            </p>
            <p className="text-base md:text-lg font-manrope text-gray-300 max-w-xl">
              Students pursue in-depth study in their chosen subjects,
              developing the analytical and research skills essential for
              university success.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/programs/a-levels"
                className="px-4 md:px-6 py-2 md:py-3 bg-brand-red hover:bg-red-700 text-white font-semibold rounded-xl shadow-md transition hover-lift font-manrope text-sm md:text-base"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GED Program Section */}
      <section className="w-full flex flex-col-reverse md:flex-row items-stretch">
        {/* Left side: background image + overlay + text */}
        <div
          className="w-full md:w-1/2 relative bg-cover bg-center"
          style={{
            backgroundImage: "url('./ged-bg.jpg')",
          }}
        >
          {/* Darker overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
          {/* Text content */}
          <div className="relative z-10 p-6 md:p-10 flex flex-col justify-center h-full space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-4xl font-lora font-semibold leading-tight text-brand-beige">
              GED
            </h2>
            <p className="text-base md:text-lg font-manrope text-gray-300 max-w-xl">
              Flexible pathway for adult learners seeking to complete their high
              school equivalency and advance to higher education. Our GED
              program accommodates working professionals and non-traditional
              students.
            </p>
            <p className="text-base md:text-lg font-manrope text-gray-300 max-w-xl">
              With flexible scheduling and comprehensive support, students can
              achieve their educational goals while balancing other life
              commitments.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/programs/ged"
                className="px-4 md:px-6 py-2 md:py-3 bg-brand-red hover:bg-red-700 text-white font-semibold rounded-xl shadow-md transition hover-lift font-manrope text-sm md:text-base"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        {/* Right side: just an image */}
        <div className="w-full md:w-1/2">
          <img
            src="/ged.jpg"
            alt="GED Program"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* LEARN FROM THE BEST AT BI - Modern Card Layout */}
      <section
        className="w-full py-12 md:py-20 px-4 md:px-6 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('./learn.webp')" }}
      >
        {/* Gray overlay scoped only inside this section */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

        {/* Actual content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header + Text */}
          <div className="text-left mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-lora font-bold text-brand-beige mb-4 md:mb-6">
              LEARN FROM THE BEST AT BI
            </h2>
            <p className="text-base md:text-xl font-manrope text-gray-300 max-w-4xl leading-relaxed">
              Our faculty consists of internationally experienced educators who
              are passionate about student success. They bring a wealth of
              knowledge and a commitment to providing high-quality education
              that prepares students for the challenges of higher education and
              beyond.
            </p>
          </div>

          {/* Teacher Profiles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {/* Profile 1 */}
            <div className="group bg-black/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-brand-beige/50 transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 md:mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-700 overflow-hidden mb-3 sm:mb-0 sm:mr-4 flex-shrink-0">
                  <img
                    src="./teacher1.jpg"
                    alt="Dr. Sarah Johnson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg md:text-2xl font-lora font-semibold text-brand-beige">
                    Dr. Sarah Johnson
                  </h3>
                  <p className="text-gray-400 font-manrope text-sm md:text-base">
                    Mathematics
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 md:gap-3 mb-3 md:mb-4">
                <div className="flex items-center text-gray-400">
                  <FiAward className="mr-1 md:mr-2 text-sm md:text-base" />
                  <span className="text-xs md:text-sm">Cambridge</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <FaGlobeAsia className="mr-1 md:mr-2 text-sm md:text-base" />
                  <span className="text-xs md:text-sm">12 years</span>
                </div>
              </div>
              <p className="text-gray-300 font-manrope leading-relaxed text-sm md:text-base text-center sm:text-left">
                Specializes in advanced calculus with research published in 5
                international journals. Passionate about making math accessible.
              </p>
            </div>

            {/* Profile 2 */}
            <div className="group bg-black/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-brand-beige/50 transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 md:mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-700 overflow-hidden mb-3 sm:mb-0 sm:mr-4 flex-shrink-0">
                  <img
                    src="./teacher2.jpg"
                    alt="Prof. David Chen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg md:text-2xl font-lora font-semibold text-brand-beige">
                    Prof. David Chen
                  </h3>
                  <p className="text-gray-400 font-manrope text-sm md:text-base">
                    Physics
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 md:gap-3 mb-3 md:mb-4">
                <div className="flex items-center text-gray-400">
                  <FiAward className="mr-1 md:mr-2 text-sm md:text-base" />
                  <span className="text-xs md:text-sm">Oxford</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <FiGlobe className="mr-1 md:mr-2 text-sm md:text-base" />
                  <span className="text-xs md:text-sm">8 countries</span>
                </div>
              </div>
              <p className="text-gray-300 font-manrope leading-relaxed text-sm md:text-base text-center sm:text-left">
                Experimental physicist with industry experience at CERN. Focuses
                on connecting theory with real-world applications.
              </p>
            </div>

            {/* Profile 3 */}
            <div className="group bg-black/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-brand-beige/50 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 md:mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-700 overflow-hidden mb-3 sm:mb-0 sm:mr-4 flex-shrink-0">
                  <img
                    src="./teacher3.jpg"
                    alt="Dr. Amina Rahman"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg md:text-2xl font-lora font-semibold text-brand-beige">
                    Dr. Amina Rahman
                  </h3>
                  <p className="text-gray-400 font-manrope text-sm md:text-base">
                    Literature
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 md:gap-3 mb-3 md:mb-4">
                <div className="flex items-center text-gray-400">
                  <FiAward className="mr-1 md:mr-2 text-sm md:text-base" />
                  <span className="text-xs md:text-sm">Harvard</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <FiBook className="mr-1 md:mr-2 text-sm md:text-base" />
                  <span className="text-xs md:text-sm">3 publications</span>
                </div>
              </div>
              <p className="text-gray-300 font-manrope leading-relaxed text-sm md:text-base text-center sm:text-left">
                Expert in post-colonial literature and creative writing. Leads
                the school's award-winning debate team.
              </p>
            </div>
          </div>

          {/* CTA button */}
          <div className="text-center md:text-left">
            <Link
              to="/faculty"
              className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-brand-red hover:bg-red-700 text-white font-manrope font-semibold rounded-xl shadow-lg hover:shadow-brand-red/30 transition-all duration-300 hover-lift text-base md:text-lg"
            >
              Meet Our Faculty
              <FiArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust in Our Expertise - Stats Showcase */}
      <section className="w-full flex flex-col md:flex-row items-stretch">
        {/* Left side: background image + gray overlay + text */}
        <div
          className="w-full md:w-1/2 relative bg-cover bg-center"
          style={{
            backgroundImage: "url('./memories.webp')",
          }}
        >
          {/* Gray overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>

          {/* Text content */}
          <div className="relative z-10 p-6 md:p-10 flex flex-col justify-center h-full space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-4xl font-lora font-semibold leading-tight text-brand-beige">
              Trust in Our Expertise
            </h2>
            <p className="text-base md:text-lg font-manrope text-gray-300 max-w-xl">
              Our teaching methodology is designed to build confidence,
              encourage critical thinking, and foster a love of learning. At BI,
              your success is our mission.
            </p>
          </div>
        </div>

        {/* Right side: just an image */}
        <div className="w-full md:w-1/2">
          <img
            src="./trust.webp"
            alt="Trust Image"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section
        className="w-full bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('./shirt.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 pointer-events-none z-0"></div>

        {/* Content wrapper */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-screen">
            {/* LEFT: Scrollable Sections */}
            <div className="space-y-0">
              {lifeSections.map((section, index) => (
                <div
                  key={section.title}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  className="min-h-screen flex items-center px-4 md:px-6 lg:px-12 py-8 md:py-10"
                >
                  <div
                    className={`w-full transition-all duration-700 transform ${
                      index === activeLifeSection
                        ? "opacity-100 translate-x-0 scale-100"
                        : "opacity-60 translate-x-4 scale-95"
                    }`}
                  >
                    {/* Image */}
                    <div className="mb-6 md:mb-8">
                      <div className="w-full h-48 md:h-64 rounded-2xl overflow-hidden shadow-2xl">
                        <img
                          src={section.image || "/placeholder.svg"}
                          alt={section.title}
                          className={`w-full h-full object-cover transition-all duration-700 ${
                            index === activeLifeSection
                              ? "scale-100"
                              : "scale-110"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="space-y-4 md:space-y-6">
                      <h3
                        className={`text-2xl md:text-4xl lg:text-5xl font-lora font-bold transition-colors duration-500 ${
                          index === activeLifeSection
                            ? "text-brand-red"
                            : "text-brand-beige"
                        }`}
                      >
                        {section.title}
                      </h3>

                      <p className="text-base md:text-lg font-manrope text-gray-300 leading-relaxed">
                        {section.description}
                      </p>

                      {/* Details */}
                      <div className="space-y-2 md:space-y-3">
                        {section.details.map((detail, detailIndex) => (
                          <div
                            key={detailIndex}
                            className={`flex items-center space-x-3 transition-all duration-500 delay-${
                              detailIndex * 100
                            } ${
                              index === activeLifeSection
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 translate-x-8"
                            }`}
                          >
                            <div className="w-2 h-2 bg-brand-red rounded-full flex-shrink-0"></div>
                            <span className="text-gray-300 font-manrope text-sm md:text-base">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Progress Dots */}
                      <div className="flex space-x-2 pt-4 md:pt-6">
                        {lifeSections.map((_, dotIndex) => (
                          <div
                            key={dotIndex}
                            className={`h-1 rounded-full transition-all duration-300 ${
                              dotIndex === activeLifeSection
                                ? "w-8 md:w-12 bg-brand-red"
                                : dotIndex < activeLifeSection
                                ? "w-6 md:w-8 bg-brand-red/50"
                                : "w-3 md:w-4 bg-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT: Text + Video + Preview */}
            <div className="lg:sticky lg:top-0 lg:h-screen flex items-center justify-center p-4 md:p-6 lg:p-12">
              <div className="w-full max-w-lg space-y-6 md:space-y-10">
                {/* Text Header */}
                <div className="text-center lg:text-left">
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-lora font-bold text-brand-beige mb-3">
                    Experience Life at BI
                  </h2>
                  <p className="text-base md:text-xl font-manrope text-gray-300 leading-relaxed">
                    Discover what makes BI special through our vibrant campus
                    community, comfortable accommodations, and enriching
                    experiences that shape your future.
                  </p>
                </div>

                {/* Video */}
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/ajR1zf0h8AQ"
                    title="BI Student Accommodation"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>

                {/* Preview Box */}
                <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10">
                  <h4 className="text-lg md:text-xl font-lora font-semibold text-brand-beige mb-2 md:mb-3">
                    Currently Viewing
                  </h4>
                  <p className="text-brand-red font-manrope font-semibold text-base md:text-lg">
                    {lifeSections[activeLifeSection].title}
                  </p>
                  <p className="text-gray-300 font-manrope text-xs md:text-sm mt-2">
                    Scroll to explore more aspects of campus life
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-screen relative">
        {/* Full background image */}
        <img
          src="./cstu.jpg"
          alt="Trust us to guide your academic journey"
          className="w-screen h-auto object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Text content */}
        <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6">
          <div className="text-center max-w-4xl space-y-6 md:space-y-8 z-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-lora font-extrabold text-gray-300 leading-tight drop-shadow-lg">
              Trust Us to Guide Your Academic Journey
            </h2>
            <p className="text-lg md:text-2xl lg:text-3xl font-manrope font-bold text-brand-beige leading-relaxed drop-shadow-md">
              Join a community where your success is our priority. We offer
              personalized learning, state-of-the-art facilities, and a
              supportive environment that nurtures every student's potential.
            </p>

            <Link
              to="/apply"
              className="inline-block bg-brand-red hover:bg-red-700 text-white font-manrope font-extrabold text-lg md:text-xl px-8 md:px-10 py-4 md:py-5 shadow-lg transition-all hover-lift rounded-xl"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      <div className="relative z-10"></div>
    </div>
  );
}
