"use client";
import { Link } from "react-router-dom";
import Banner from "../components/banner";

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
  return (
    <div className="relative min-h-screen font-lora">
      {/* Global Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-primary via-dark-blue to-dark-primary"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(130,6,44,0.1)_0%,transparent_50%)] opacity-60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(216,190,156,0.08)_0%,transparent_50%)] opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Banner
          // images={homeImages}
          title="Welcome to Bridge International College Bangkok"
          subtitle="Discover an unparalleled educational experience in the heart of Bangkok."
        />

        {/* Why Choose Us Section */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-blue/20 to-transparent"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 font-lora">
                  Why Choose Us
                </h2>
                <div className="h-1 bg-gradient-to-r from-transparent via-brand-beige to-transparent rounded-full"></div>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Text Content */}
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-all duration-500">
                  <p className="text-white/90 text-lg leading-relaxed mb-8 font-lora">
                    Bridge International College Bangkok stands as a beacon of
                    educational excellence, providing world-class education that
                    bridges cultures and opens doors to global opportunities.
                    Our commitment to holistic development ensures every student
                    thrives.
                  </p>
                  <Link
                    to="/about"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-red to-brand-red/80 text-white font-semibold rounded-xl hover:from-brand-red/90 hover:to-brand-red transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-brand-red/25"
                  >
                    <span className="font-lora">Learn More About Us</span>
                    <svg
                      className="w-5 h-5 ml-2"
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
              {/* Video Gallery */}
              <div className="relative">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-all duration-500">
                  <div className="aspect-video rounded-xl overflow-hidden bg-dark-primary">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/lRbBGBDqFsI"
                      title="BIC Welcoming Message"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-full rounded-lg"
                    />
                  </div>
                  {/* Video Selection */}
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    {["lRbBGBDqFsI", "i4fJI-_zbqs", "86CzKrRi8hE"].map(
                      (id, index) => (
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
                            <PlayIcon className="w-6 h-6 text-brand-beige" />
                          </div>
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer - Programs Section */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-blue/30 via-transparent to-dark-blue/30"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 font-lora">
                What We Offer
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-red to-brand-beige mx-auto rounded-full"></div>
              <p className="text-white/80 text-lg mt-6 max-w-3xl mx-auto font-lora">
                Explore Our Programs
              </p>
            </div>

            {/* IGCSE - Image Right, Text Left */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-all duration-500">
                  <h3 className="text-3xl font-semibold text-white mb-6 font-lora">
                    IGCSE
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed mb-6 font-lora">
                    International General Certificate of Secondary Education - A
                    globally recognized qualification that provides excellent
                    preparation for A Levels, university, and employment. Our
                    IGCSE program offers a broad and balanced curriculum with
                    academic rigor.
                  </p>
                  <ul className="space-y-3 text-white/80 mb-8">
                    <li className="flex items-center">
                      <span className="text-brand-beige mr-3">●</span>
                      Internationally recognized qualification
                    </li>
                    <li className="flex items-center">
                      <span className="text-brand-beige mr-3">●</span>
                      Flexible subject combinations
                    </li>
                    <li className="flex items-center">
                      <span className="text-brand-beige mr-3">●</span>
                      Expert teaching and support
                    </li>
                  </ul>
                  <Link
                    to="/igcse"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-red to-brand-red/80 text-white font-semibold rounded-xl hover:from-brand-red/90 hover:to-brand-red transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-brand-red/25"
                  >
                    <span className="font-lora">Learn More</span>
                    <svg
                      className="w-5 h-5 ml-2"
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
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-red/20 to-brand-beige/20 blur-xl group-hover:blur-2xl transition-all duration-500 rounded-2xl"></div>
                <img
                  src="https://th.bing.com/th/id/R.6a25518123daca841c366a810b1108ba?rik=H6chJMajcUyJiQ&riu=http%3a%2f%2fwww.icrsp.org%2fIMAGES-APOSTOLATS%2fBruxelles%2fclasse-01-GRDE.jpg&ehk=cQcLimLV5CvKrmO1hLOQu5ZworHdY%2fTsTbu%2fxy07IcE%3d&risl=&pid=ImgRaw&r=0"
                  alt="IGCSE Program"
                  className="relative rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500 w-full h-96 object-cover"
                />
              </div>
            </div>

            {/* A Levels - Text Right, Image Left */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="relative group order-2 lg:order-1">
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-beige/20 to-brand-red/20 blur-xl group-hover:blur-2xl transition-all duration-500 rounded-2xl"></div>
                <img
                  src="
                  https://th.bing.com/th/id/R.6a25518123daca841c366a810b1108ba?rik=H6chJMajcUyJiQ&riu=http%3a%2f%2fwww.icrsp.org%2fIMAGES-APOSTOLATS%2fBruxelles%2fclasse-01-GRDE.jpg&ehk=cQcLimLV5CvKrmO1hLOQu5ZworHdY%2fTsTbu%2fxy07IcE%3d&risl=&pid=ImgRaw&r=0"
                  alt="A Levels Program"
                  className="relative rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500 w-full h-96 object-cover"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-all duration-500">
                  <h3 className="text-3xl font-semibold text-white mb-6 font-lora">
                    A LEVELS
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed mb-6 font-lora">
                    Advanced Level Qualifications for university entry - The
                    gold standard for university preparation. Our A Level
                    program provides in-depth study in chosen subjects,
                    developing critical thinking and analytical skills essential
                    for higher education success.
                  </p>
                  <ul className="space-y-3 text-white/80 mb-8">
                    <li className="flex items-center">
                      <span className="text-brand-beige mr-3">●</span>
                      University entrance qualification
                    </li>
                    <li className="flex items-center">
                      <span className="text-brand-beige mr-3">●</span>
                      Specialized subject focus
                    </li>
                    <li className="flex items-center">
                      <span className="text-brand-beige mr-3">●</span>
                      Excellent university placement record
                    </li>
                  </ul>
                  <Link
                    to="/alevels"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-beige to-brand-beige/80 text-dark-primary font-semibold rounded-xl hover:from-brand-beige/90 hover:to-brand-beige transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-brand-beige/25"
                  >
                    <span className="font-lora">Learn More</span>
                    <svg
                      className="w-5 h-5 ml-2"
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

            {/* OSSD - Image Right, Text Left */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-all duration-500">
                  <h3 className="text-3xl font-semibold text-white mb-6 font-lora">
                    OSSD
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed mb-6 font-lora">
                    Ontario Secondary School Diploma - A globally recognized
                    Canadian high school diploma. Our OSSD program offers a
                    pathway to top universities worldwide with its credit-based
                    system and comprehensive curriculum.
                  </p>
                  <ul className="space-y-3 text-white/80 mb-8">
                    <li className="flex items-center">
                      <span className="text-brand-beige mr-3">●</span>
                      Canadian high school diploma
                    </li>
                    <li className="flex items-center">
                      <span className="text-brand-beige mr-3">●</span>
                      Credit-based flexible system
                    </li>
                    <li className="flex items-center">
                      <span className="text-brand-beige mr-3">●</span>
                      Global university recognition
                    </li>
                  </ul>
                  <Link
                    to="/ossd"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-red to-brand-red/80 text-white font-semibold rounded-xl hover:from-brand-red/90 hover:to-brand-red transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-brand-red/25"
                  >
                    <span className="font-lora">Learn More</span>
                    <svg
                      className="w-5 h-5 ml-2"
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
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-red/20 to-brand-beige/20 blur-xl group-hover:blur-2xl transition-all duration-500 rounded-2xl"></div>
                <img
                  src="https://th.bing.com/th/id/R.6a25518123daca841c366a810b1108ba?rik=H6chJMajcUyJiQ&riu=http%3a%2f%2fwww.icrsp.org%2fIMAGES-APOSTOLATS%2fBruxelles%2fclasse-01-GRDE.jpg&ehk=cQcLimLV5CvKrmO1hLOQu5ZworHdY%2fTsTbu%2fxy07IcE%3d&risl=&pid=ImgRaw&r=0"
                  alt="OSSD Program"
                  className="relative rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500 w-full h-96 object-cover"
                />
              </div>
            </div>

            {/* GED - Text Right, Image Left */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative group order-2 lg:order-1">
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-beige/20 to-brand-red/20 blur-xl group-hover:blur-2xl transition-all duration-500 rounded-2xl"></div>
                <img
                  src="https://th.bing.com/th/id/R.6a25518123daca841c366a810b1108ba?rik=H6chJMajcUyJiQ&riu=http%3a%2f%2fwww.icrsp.org%2fIMAGES-APOSTOLATS%2fBruxelles%2fclasse-01-GRDE.jpg&ehk=cQcLimLV5CvKrmO1hLOQu5ZworHdY%2fTsTbu%2fxy07IcE%3d&risl=&pid=ImgRaw&r=0"
                  alt="GED Program"
                  className="relative rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500 w-full h-96 object-cover"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-all duration-500">
                  <h3 className="text-3xl font-semibold text-white mb-6 font-lora">
                    GED
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed mb-6 font-lora">
                    General Educational Development - An alternative diploma
                    program that provides a second chance for education. Our GED
                    program offers comprehensive preparation for the official
                    GED test, opening doors to higher education and career
                    opportunities.
                  </p>
                  <ul className="space-y-3 text-white/80 mb-8">
                    <li className="flex items-center">
                      <span className="text-brand-beige mr-3">●</span>
                      Alternative high school diploma
                    </li>
                    <li className="flex items-center">
                      <span className="text-brand-beige mr-3">●</span>
                      Flexible study schedule
                    </li>
                    <li className="flex items-center">
                      <span className="text-brand-beige mr-3">●</span>
                      Pathway to higher education
                    </li>
                  </ul>
                  <Link
                    to="/ged"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-beige to-brand-beige/80 text-dark-primary font-semibold rounded-xl hover:from-brand-beige/90 hover:to-brand-beige transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-brand-beige/25"
                  >
                    <span className="font-lora">Learn More</span>
                    <svg
                      className="w-5 h-5 ml-2"
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
          </div>
        </section>

        {/* Why Choose Bridge International College */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://th.bing.com/th/id/R.6a25518123daca841c366a810b1108ba?rik=H6chJMajcUyJiQ&riu=http%3a%2f%2fwww.icrsp.org%2fIMAGES-APOSTOLATS%2fBruxelles%2fclasse-01-GRDE.jpg&ehk=cQcLimLV5CvKrmO1hLOQu5ZworHdY%2fTsTbu%2fxy07IcE%3d&risl=&pid=ImgRaw&r=0"
              alt="Why choose us background"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-dark-primary/90 via-dark-primary/70 to-dark-primary/90"></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 font-lora">
                Why Choose Bridge International College?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-red to-brand-beige mx-auto rounded-full"></div>
            </div>

            {/* Learn From The Best At BIC */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-all duration-500">
                  <h3 className="text-3xl font-semibold text-white mb-6 font-lora">
                    LEARN FROM THE BEST AT BIC
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed mb-6 font-lora">
                    Our faculty comprises experienced educators and industry
                    experts dedicated to nurturing future leaders. With advanced
                    degrees from prestigious universities and years of practical
                    experience, our teachers provide world-class education that
                    prepares students for global success.
                  </p>
                  <ul className="space-y-3 text-white/80 mb-8">
                    <li className="flex items-center">
                      <span className="text-brand-beige mr-3">●</span>
                      PhD and Masters qualified faculty
                    </li>
                    <li className="flex items-center">
                      <span className="text-brand-beige mr-3">●</span>
                      Industry experience and expertise
                    </li>
                    <li className="flex items-center">
                      <span className="text-brand-beige mr-3">●</span>
                      Personalized attention and mentorship
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-red/20 to-brand-beige/20 blur-xl group-hover:blur-2xl transition-all duration-500 rounded-2xl"></div>
                <img
                  src="./5.jpg"
                  alt="Expert Faculty"
                  className="relative rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500 w-full h-96 object-cover"
                />
              </div>
            </div>

            {/* Trust in Our Expertise */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative group order-2 lg:order-1">
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-beige/20 to-brand-red/20 blur-xl group-hover:blur-2xl transition-all duration-500 rounded-2xl"></div>
                <img
                  src="./6.jpg"
                  alt="Trust and Expertise"
                  className="relative rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500 w-full h-96 object-cover"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-all duration-500">
                  <h3 className="text-3xl font-semibold text-white mb-6 font-lora">
                    Trust in Our Expertise
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed mb-6 font-lora">
                    With over 15 years of educational excellence, Bridge
                    International College has established itself as a trusted
                    institution in Bangkok. Our proven track record of student
                    success, university placements, and industry partnerships
                    demonstrates our commitment to quality education.
                  </p>
                  <ul className="space-y-3 text-white/80 mb-8">
                    <li className="flex items-center">
                      <span className="text-brand-beige mr-3">●</span>
                      15+ years of educational excellence
                    </li>
                    <li className="flex items-center">
                      <span className="text-brand-beige mr-3">●</span>
                      98% university acceptance rate
                    </li>
                    <li className="flex items-center">
                      <span className="text-brand-beige mr-3">●</span>
                      Strong industry partnerships
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Life at BIC */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-blue/20 to-transparent"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Main Header */}
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-lora tracking-tight">
                EXPERIENCE
                <br />
                <span className="bg-gradient-to-r from-brand-beige via-yellow-200 to-brand-beige bg-clip-text text-transparent">
                  LIFE AT BIC
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-brand-red to-brand-beige mx-auto rounded-full mb-8"></div>
              <p className="text-white/90 text-xl max-w-4xl mx-auto leading-relaxed font-lora">
                At BIC, student life is as enriching as our academic programs.
                We provide a supportive and dynamic environment where students
                can thrive both in and out of the classroom. From comfortable
                accommodations to a wide range of extracurricular activities, we
                ensure that every student enjoys a balanced and fulfilling
                experience.
              </p>
            </div>

            <div className="space-y-32">
              {/* Accommodation */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:bg-white/8 transition-all duration-500">
                    <div className="inline-block bg-gradient-to-r from-brand-red/20 to-brand-beige/20 rounded-2xl p-4 mb-6">
                      <h3 className="text-4xl font-bold text-white font-lora">
                        ACCOMMODATION
                      </h3>
                    </div>
                    <p className="text-white/90 text-lg leading-relaxed mb-8 font-lora">
                      Our modern accommodation facilities provide a safe,
                      comfortable, and conducive environment for learning and
                      personal growth. With 24/7 security, high-speed internet,
                      and recreational facilities, students enjoy a home away
                      from home experience in the heart of Bangkok.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                        <div className="text-2xl mb-3">🏠</div>
                        <h4 className="text-white font-semibold mb-2">
                          Modern Facilities
                        </h4>
                        <p className="text-white/70 text-sm">
                          Fully furnished rooms with AC, WiFi, and study areas
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                        <div className="text-2xl mb-3">🔒</div>
                        <h4 className="text-white font-semibold mb-2">
                          24/7 Security
                        </h4>
                        <p className="text-white/70 text-sm">
                          Round-the-clock security and support staff
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-6 bg-gradient-to-r from-brand-red/30 to-brand-beige/30 blur-2xl group-hover:blur-3xl transition-all duration-700 rounded-3xl"></div>
                  <img
                    src="./7.jpg"
                    alt="Student Accommodation"
                    className="relative rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-700 w-full h-[500px] object-cover border border-white/20"
                  />
                </div>
              </div>

              {/* Cultural Immersion */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative group order-2 lg:order-1">
                  <div className="absolute -inset-6 bg-gradient-to-r from-brand-beige/30 to-brand-red/30 blur-2xl group-hover:blur-3xl transition-all duration-700 rounded-3xl"></div>
                  <img
                    src="./8.jpg"
                    alt="Cultural Immersion"
                    className="relative rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-700 w-full h-[500px] object-cover border border-white/20"
                  />
                </div>
                <div className="space-y-8 order-1 lg:order-2">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:bg-white/8 transition-all duration-500">
                    <div className="inline-block bg-gradient-to-r from-brand-beige/20 to-brand-red/20 rounded-2xl p-4 mb-6">
                      <h3 className="text-4xl font-bold text-white font-lora">
                        CULTURAL IMMERSION
                      </h3>
                    </div>
                    <p className="text-white/90 text-lg leading-relaxed mb-8 font-lora">
                      Experience the rich Thai culture while being part of our
                      diverse international community. Our cultural immersion
                      programs, local excursions, and cultural festivals provide
                      students with authentic experiences that broaden their
                      global perspective.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                        <div className="text-2xl mb-3">🇹🇭</div>
                        <h4 className="text-white font-semibold mb-2">
                          Thai Culture
                        </h4>
                        <p className="text-white/70 text-sm">
                          Language classes and cultural workshops
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                        <div className="text-2xl mb-3">🌍</div>
                        <h4 className="text-white font-semibold mb-2">
                          Global Community
                        </h4>
                        <p className="text-white/70 text-sm">
                          Students from 50+ countries worldwide
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Extracurricular Activities */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:bg-white/8 transition-all duration-500">
                    <div className="inline-block bg-gradient-to-r from-brand-red/20 to-brand-beige/20 rounded-2xl p-4 mb-6">
                      <h3 className="text-4xl font-bold text-white font-lora">
                        EXTRACURRICULAR ACTIVITIES
                      </h3>
                    </div>
                    <p className="text-white/90 text-lg leading-relaxed mb-8 font-lora">
                      Whether you're interested in sports, arts, or student
                      organizations, BIC offers something for everyone. Our
                      extracurricular programs are designed to complement
                      academic learning, helping students develop leadership
                      skills, creativity, and lifelong friendships.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                        <div className="text-2xl mb-3">⚽</div>
                        <h4 className="text-white font-semibold mb-2">
                          Sports Teams
                        </h4>
                        <p className="text-white/70 text-sm">
                          Football, basketball, swimming, and more
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                        <div className="text-2xl mb-3">🎭</div>
                        <h4 className="text-white font-semibold mb-2">
                          Arts & Drama
                        </h4>
                        <p className="text-white/70 text-sm">
                          Theater, music, and visual arts programs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-6 bg-gradient-to-r from-brand-red/30 to-brand-beige/30 blur-2xl group-hover:blur-3xl transition-all duration-700 rounded-3xl"></div>
                  <img
                    src="/images/classroom-scene.png"
                    alt="Extracurricular Activities"
                    className="relative rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-700 w-full h-[500px] object-cover border border-white/20"
                  />
                </div>
              </div>

              {/* Build Lifelong Memories */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative group order-2 lg:order-1">
                  <div className="absolute -inset-6 bg-gradient-to-r from-brand-beige/30 to-brand-red/30 blur-2xl group-hover:blur-3xl transition-all duration-700 rounded-3xl"></div>
                  <img
                    src="./2.jpg"
                    alt="Lifelong Memories"
                    className="relative rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-700 w-full h-[500px] object-cover border border-white/20"
                  />
                </div>
                <div className="space-y-8 order-1 lg:order-2">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:bg-white/8 transition-all duration-500">
                    <div className="inline-block bg-gradient-to-r from-brand-beige/20 to-brand-red/20 rounded-2xl p-4 mb-6">
                      <h3 className="text-4xl font-bold text-white font-lora">
                        BUILD LIFELONG MEMORIES
                      </h3>
                    </div>
                    <p className="text-white/90 text-lg leading-relaxed mb-8 font-lora">
                      Your time at BIC will be filled with unforgettable
                      experiences, lasting friendships, and personal growth.
                      From graduation ceremonies to international trips, campus
                      events to academic achievements, every moment contributes
                      to your unique BIC story that you'll cherish forever.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                        <div className="text-2xl mb-3">🎓</div>
                        <h4 className="text-white font-semibold mb-2">
                          Achievements
                        </h4>
                        <p className="text-white/70 text-sm">
                          Academic excellence and personal milestones
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                        <div className="text-2xl mb-3">🤝</div>
                        <h4 className="text-white font-semibold mb-2">
                          Friendships
                        </h4>
                        <p className="text-white/70 text-sm">
                          Connections that last a lifetime
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Apply Now Section */}
        <section className="py-32 px-4 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="./int.jpg"
              alt="Apply now background"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-dark-primary/80 via-dark-primary/60 to-dark-primary/80"></div>
          </div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-8 font-lora">
                Ready to Start Your Journey?
              </h2>
              <p className="text-white/80 text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-lora">
                Join Bridge International College Bangkok and unlock your
                potential with world-class education. Take the first step
                towards your bright future today.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500">
                  <div className="text-4xl mb-4">🎓</div>
                  <h3 className="text-2xl font-semibold text-white mb-4 font-lora">
                    Apply Today
                  </h3>
                  <p className="text-white/80 font-lora">
                    Start your application process and join our community of
                    global learners
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500">
                  <div className="text-4xl mb-4">💬</div>
                  <h3 className="text-2xl font-semibold text-white mb-4 font-lora">
                    Get Guidance
                  </h3>
                  <p className="text-white/80 font-lora">
                    Speak with our admissions team for personalized guidance and
                    support
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500">
                  <div className="text-4xl mb-4">🌟</div>
                  <h3 className="text-2xl font-semibold text-white mb-4 font-lora">
                    Begin Your Future
                  </h3>
                  <p className="text-white/80 font-lora">
                    Embark on a transformative educational journey that shapes
                    your tomorrow
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/enquire"
                  className="group relative inline-flex items-center justify-center px-12 py-5 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-brand-red to-brand-red/80 rounded-2xl hover:from-brand-red/90 hover:to-brand-red transform hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-brand-red/25 overflow-hidden"
                >
                  <span className="relative z-10 font-lora">Apply Now</span>
                  <svg
                    className="w-6 h-6 ml-3 relative z-10"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>
                <Link
                  to="/admission"
                  className="group relative inline-flex items-center justify-center px-12 py-5 text-lg font-semibold text-dark-primary transition-all duration-300 bg-gradient-to-r from-brand-beige to-brand-beige/80 rounded-2xl hover:from-brand-beige/90 hover:to-brand-beige transform hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-brand-beige/25 overflow-hidden"
                >
                  <span className="relative z-10 font-lora">Contact Us</span>
                  <svg
                    className="w-6 h-6 ml-3 relative z-10"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="relative min-h-screen bg-gray-900">
          {/* Dark Background with Subtle Patterns */}
          <div className="fixed inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,63,94,0.1)_0%,transparent_50%)] opacity-60"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(244,63,94,0.05)_0%,transparent_50%)] opacity-40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Hero Section */}
            <section className="relative py-32 bg-gray-900">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 font-serif leading-tight">
                  Bridge International College
                </h1>
                <div className="w-24 h-1 bg-rose-500 mx-auto mb-8"></div>
                <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                  Discover an unparalleled educational experience in the heart
                  of Bangkok
                </p>
              </div>
            </section>

            {/* Apply for Admission Section */}
            <section className="relative py-20 bg-gray-900">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-0 items-stretch min-h-[600px]">
                  {/* Left Side - Clear Image */}
                  <div className="relative">
                    <img
                      src="./1.jpg"
                      alt="Apply for Admission - Graduates in caps and gowns celebrating"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Right Side - Text with Background and Dark Overlay */}
                  <div className="relative flex items-center justify-center bg-gray-800">
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/70"></div>
                    {/* Content */}
                    <div className="relative z-10 p-12 text-center">
                      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-serif leading-tight">
                        Apply for Admission
                      </h2>
                      <div className="w-20 h-1 bg-rose-500 mx-auto mb-8"></div>
                      <p className="text-rose-400 text-xl font-semibold mb-8">
                        Fall 2024 applications are now open
                      </p>
                      <p className="text-gray-200 text-lg leading-relaxed mb-10 max-w-md mx-auto">
                        We don't just give students an education and experiences
                        that set them up for success in a career. We help them
                        succeed in their career—to discover a field they're
                        passionate about and dare to lead it.
                      </p>
                      <Link
                        to="/enquire"
                        className="inline-block bg-rose-600 hover:bg-rose-500 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section className="relative py-20 bg-gray-900">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-0 items-stretch min-h-[600px]">
                  {/* Left Side - Text with Background and Dark Overlay */}
                  <div className="relative flex items-center justify-center bg-gray-800">
                    <div className="absolute inset-0 bg-black/70"></div>
                    <div className="relative z-10 p-12 text-center">
                      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-serif leading-tight">
                        Why Choose Bridge International College?
                      </h2>
                      <div className="w-20 h-1 bg-rose-500 mx-auto mb-8"></div>
                      <p className="text-gray-200 text-lg leading-relaxed mb-10 max-w-md mx-auto">
                        Excellence in education, innovation in learning, and
                        commitment to student success. Join students from over
                        50 countries in our diverse, multicultural learning
                        environment.
                      </p>
                      <div className="grid grid-cols-3 gap-6 mb-8">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-rose-400 mb-2">
                            98%
                          </div>
                          <div className="text-gray-300 text-xs">
                            Success Rate
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-rose-400 mb-2">
                            50+
                          </div>
                          <div className="text-gray-300 text-xs">Countries</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-rose-400 mb-2">
                            15+
                          </div>
                          <div className="text-gray-300 text-xs">
                            Years Experience
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Right Side - Clear Image */}
                  <div className="relative">
                    <img
                      src="./2.jpg"
                      alt="Why Choose BIC"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Programs Section */}
            <section className="relative py-20 bg-gray-900">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-0 items-stretch min-h-[600px]">
                  {/* Left Side - Clear Image */}
                  <div className="relative">
                    <img
                      src="./3.jpg"
                      alt="Academic Programs"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Right Side - Text with Background and Dark Overlay */}
                  <div className="relative flex items-center justify-center bg-gray-800">
                    <div className="absolute inset-0 bg-black/70"></div>
                    <div className="relative z-10 p-12">
                      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-serif leading-tight">
                        Our Academic Programs
                      </h2>
                      <div className="w-20 h-1 bg-rose-500 mb-8"></div>
                      <p className="text-gray-200 text-lg leading-relaxed mb-10">
                        Choose from our comprehensive range of internationally
                        recognized programs designed to prepare you for global
                        success.
                      </p>
                      <div className="space-y-6">
                        {[
                          {
                            name: "IGCSE",
                            desc: "International General Certificate",
                            age: "Ages 14-16",
                          },
                          {
                            name: "A LEVELS",
                            desc: "Advanced Level Qualifications",
                            age: "Ages 16-18",
                          },
                          {
                            name: "OSSD",
                            desc: "Ontario Secondary School Diploma",
                            age: "Canadian System",
                          },
                          {
                            name: "GED",
                            desc: "General Educational Development",
                            age: "Flexible Schedule",
                          },
                        ].map((program, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-4 bg-black/30 rounded-lg backdrop-blur-sm border border-rose-500/20"
                          >
                            <div>
                              <h3 className="text-xl font-bold text-white mb-1">
                                {program.name}
                              </h3>
                              <p className="text-gray-300 text-sm">
                                {program.desc}
                              </p>
                            </div>
                            <div className="text-rose-400 text-sm font-semibold">
                              {program.age}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Faculty Section */}
            <section className="relative py-20 bg-gray-900">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-0 items-stretch min-h-[600px]">
                  {/* Left Side - Text with Background and Dark Overlay */}
                  <div className="relative flex items-center justify-center bg-gray-800">
                    <div className="absolute inset-0 bg-black/70"></div>
                    <div className="relative z-10 p-12 text-center">
                      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-serif leading-tight">
                        Learn From The Best Faculty
                      </h2>
                      <div className="w-20 h-1 bg-rose-500 mx-auto mb-8"></div>
                      <p className="text-gray-200 text-lg leading-relaxed mb-10 max-w-md mx-auto">
                        Our faculty comprises experienced educators and industry
                        experts dedicated to nurturing future leaders with
                        world-class education.
                      </p>
                      <div className="grid grid-cols-3 gap-6 mb-8">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-rose-400 mb-2">
                            95%
                          </div>
                          <div className="text-gray-300 text-xs">
                            PhD Qualified
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-rose-400 mb-2">
                            15+
                          </div>
                          <div className="text-gray-300 text-xs">
                            Years Experience
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-rose-400 mb-2">
                            1:8
                          </div>
                          <div className="text-gray-300 text-xs">
                            Teacher Ratio
                          </div>
                        </div>
                      </div>
                      <Link
                        to="/faculty"
                        className="inline-block bg-rose-600 hover:bg-rose-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        Meet Our Faculty
                      </Link>
                    </div>
                  </div>
                  {/* Right Side - Clear Image */}
                  <div className="relative">
                    <img
                      src="./4.jpg"
                      alt="Expert Faculty"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Campus Life Section */}
            <section className="relative py-20 bg-gray-900">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-0 items-stretch min-h-[600px]">
                  {/* Left Side - Clear Image */}
                  <div className="relative">
                    <img
                      src="./5.jpg"
                      alt="Campus Life"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Right Side - Text with Background and Dark Overlay */}
                  <div className="relative flex items-center justify-center bg-gray-800">
                    <div className="absolute inset-0 bg-black/70"></div>
                    <div className="relative z-10 p-12">
                      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-serif leading-tight">
                        Experience Life at BIC
                      </h2>
                      <div className="w-20 h-1 bg-rose-500 mb-8"></div>
                      <p className="text-gray-200 text-lg leading-relaxed mb-10">
                        At BIC, student life is as enriching as our academic
                        programs with dynamic environments where students
                        thrive.
                      </p>
                      <div className="space-y-4">
                        {[
                          {
                            icon: "🏠",
                            title: "Modern Accommodation",
                            desc: "Safe, comfortable living spaces",
                          },
                          {
                            icon: "🌏",
                            title: "Cultural Immersion",
                            desc: "Experience rich Thai culture",
                          },
                          {
                            icon: "⚽",
                            title: "Sports & Activities",
                            desc: "Comprehensive extracurricular programs",
                          },
                          {
                            icon: "🎭",
                            title: "Arts & Culture",
                            desc: "Creative expression opportunities",
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center p-4 bg-black/30 rounded-lg backdrop-blur-sm border border-rose-500/20"
                          >
                            <span className="text-2xl mr-4">{item.icon}</span>
                            <div>
                              <h3 className="text-lg font-bold text-white mb-1">
                                {item.title}
                              </h3>
                              <p className="text-gray-300 text-sm">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20 bg-gray-800">
              <div className="absolute inset-0 bg-black/80"></div>
              <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 font-serif leading-tight">
                  Ready to Start Your Journey?
                </h2>
                <div className="w-24 h-1 bg-rose-500 mx-auto mb-8"></div>
                <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12">
                  Join Bridge International College Bangkok and unlock your
                  potential with world-class education. Take the first step
                  towards your bright future today.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    to="/enquire"
                    className="inline-flex items-center justify-center px-12 py-4 text-lg font-bold text-white bg-rose-600 hover:bg-rose-500 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                  >
                    <span className="mr-3">Apply Now</span>
                    <svg
                      className="w-6 h-6"
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
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-12 py-4 text-lg font-bold text-white border-2 border-rose-500 hover:bg-rose-500 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="mr-3">Contact Us</span>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section className="w-full py-20 bg-white">
          {/* Full-width container with 2-column split */}
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
            {/* Left side - Full-height image (50% width) */}
            <div className="w-full lg:w-1/2 h-[600px] lg:h-auto relative">
              <img
                src="https://tse1.explicit.bing.net/th/id/OIP.QJMqFOlHEg4zOZxaj-sbJQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3" // Replace with your image
                alt="IGCSE students in class"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-lg text-lg font-bold shadow-lg">
                  IGCSE Program
                </span>
              </div>
            </div>

            {/* Right side - Text + secondary image (50% width) */}
            <div className="w-full lg:w-1/2 p-10 flex flex-col justify-between bg-gray-50">
              {/* Text content */}
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Cambridge IGCSE Curriculum
                </h2>
                <div className="w-20 h-1 bg-blue-600 mb-8"></div>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Our IGCSE program emphasizes active learning through:
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span>Interactive classroom discussions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span>Collaborative group projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span>Real-world practical applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span>Critical thinking development</span>
                  </li>
                </ul>
                <Link
                  href="/programs/igcse"
                  className="inline-block px-10 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Explore IGCSE Program →
                </Link>
              </div>

              {/* Secondary image with gray overlay (appears below text) */}
              <div className="mt-16 relative h-64 w-full rounded-xl overflow-hidden">
                <img
                  src="https://th.bing.com/th/id/R.6a25518123daca841c366a810b1108ba?rik=H6chJMajcUyJiQ&riu=http%3a%2f%2fwww.icrsp.org%2fIMAGES-APOSTOLATS%2fBruxelles%2fclasse-01-GRDE.jpg&ehk=cQcLimLV5CvKrmO1hLOQu5ZworHdY%2fTsTbu%2fxy07IcE%3d&risl=&pid=ImgRaw&r=0" // Replace with your image
                  alt="Students in science lab"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gray-900/40 flex items-center justify-center">
                  <span className="text-white text-xl font-medium bg-blue-600/90 px-6 py-3 rounded-lg shadow-md">
                    Hands-on Laboratory Sessions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
