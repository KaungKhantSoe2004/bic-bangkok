import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-dark-primary">
      {/* Hero Section - Our Story */}
      <section className="relative w-full h-screen flex items-end justify-start overflow-hidden">
        <img
          src="https://www.bic-bangkok.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fea2tlhaw%2Fproduction%2F9597a20381ab4c36c2b1436376fe7c5d7bb5b1c5-6000x4000.jpg&w=1920&q=75"
          alt="Bridge International School Campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-brand-red/10 to-black/90"></div>

        <div className="relative z-10 max-w-2xl text-left px-6 md:px-12 pb-16 md:pb-24 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-lora leading-tight">
            <span className="text-white">Our </span>
            <span className="text-brand-red">Story</span>
          </h1>

          <div className="w-24 h-1 bg-brand-red rounded-full"></div>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed font-light font-manrope tracking-wide drop-shadow-md bg-black/30 p-4 rounded-lg">
            Bridge International is dedicated to being Asia's leading
            pre-university institution, offering globally recognized programs
            like IGCSE, A Levels, and OSSD. We empower students to excel
            academically, think critically, and secure placements at top
            universities worldwide.
          </p>
        </div>
      </section>

      {/* Full Width Image with Angled Design */}
      <section className="w-full relative overflow-hidden">
        <div className="relative h-[100vh] md:h-[100vh]">
          <img
            src="https://www.bic-bangkok.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fea2tlhaw%2Fproduction%2F3d4ec7b4bbf3b360ea52d6d7b819fda6d0a71582-5301x3534.jpg&w=1920&q=75"
            alt="Bridge International School Modern Campus"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute bottom-0 left-0 w-full h-40 md:h-48"
            style={{
              background: "#82062c",
              clipPath: "polygon(0 100%, 0 0, 100% 100%, 100% 100%)",
            }}
          ></div>
        </div>
      </section>

      {/* Founders Experience Section */}
      <section className="w-full flex flex-col lg:flex-row items-stretch min-h-screen">
        {/* Left side: Image */}
        <div className="w-full lg:w-1/2 relative">
          <img
            src="./boe.jpg"
            alt="Educational Leadership and Vision"
            className="w-full h-full object-cover min-h-[500px] lg:min-h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-red/10 to-brand-red/30"></div>
        </div>

        {/* Right side: Text content */}
        <div className="w-full lg:w-1/2 bg-dark-blue flex items-center">
          <div className="p-8 md:p-16 lg:p-20 space-y-8">
            <div className="space-y-4">
              <div className="w-16 h-1 bg-brand-red rounded-full"></div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-lora text-white leading-tight">
                Built on <span className="text-brand-red">Experience</span>
              </h2>
            </div>
            <p className="text-lg md:text-xl text-brand-beige leading-relaxed font-light font-manrope">
              With over 30 years of combined experience, our founders set out to
              build a truly transformative educational experience—one that
              prioritizes academic excellence, practical skills, personal
              growth, and global readiness. We are not just preparing students
              for exams; we are preparing them for life.
            </p>
            {/* <div className="pt-4">
              <div className="inline-flex items-center text-brand-red font-semibold hover:text-brand-beige transition-colors duration-300">
                <span>Learn about our leadership</span>
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
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="w-full flex flex-col-reverse lg:flex-row items-stretch min-h-screen">
        {/* Left side: Text content */}
        <div className="w-full lg:w-1/2 bg-gray-800 flex items-center">
          <div className="p-8 md:p-16 lg:p-20 space-y-8">
            <div className="space-y-4">
              <div className="w-16 h-1 bg-brand-beige rounded-full"></div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-lora text-white leading-tight">
                Our <span className="text-brand-red">Philosophy</span>
              </h2>
            </div>
            <p className="text-lg md:text-xl text-brand-beige leading-relaxed font-light font-manrope">
              At BI, we believe that education should be an empowering journey,
              not a one-size-fits-all process. Our commitment is to provide each
              student with the tools, mentorship, and opportunities needed to
              thrive in an ever-changing world. By blending individualized
              learning pathways with a supportive community, we cultivate
              leaders and innovators.
            </p>
          </div>
        </div>

        {/* Right side: Image */}
        <div className="w-full lg:w-1/2 relative">
          <img
            src="./pu.webp"
            alt="Students Engaged in Learning"
            className="w-full h-full object-cover min-h-[500px] lg:min-h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-brand-red/10 to-brand-red/30"></div>
        </div>
      </section>

      {/* Our History Section */}
      <section className="w-full flex flex-col lg:flex-row items-stretch min-h-screen">
        {/* Left side: Image */}
        <div className="w-full lg:w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80"
            alt="Historical Educational Foundation"
            className="w-full h-full object-cover min-h-[500px] lg:min-h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-red/25"></div>
        </div>

        {/* Right side: Text content with background */}
        <div className="w-full lg:w-1/2 relative bg-gradient-to-br from-dark-blue to-brand-red/10">
          <div className="absolute inset-0 opacity-5">
            <img
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80"
              alt="Vintage Education Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 p-8 md:p-16 lg:p-20 flex flex-col justify-center h-full space-y-8">
            <div className="space-y-4">
              <div className="w-16 h-1 bg-brand-red rounded-full"></div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-lora text-white leading-tight">
                Our <span className="text-brand-red">History</span>
              </h2>
            </div>
            <p className="text-lg md:text-xl text-brand-beige leading-relaxed font-light font-manrope">
              In 1957, a group of dedicated people with a clear vision brought
              St John Bosco's pastoral vision to Melbourne's rural Chadstone.
              This foundation of educational excellence and pastoral care has
              been the cornerstone of our institution's growth and development
              over the decades.
            </p>
            <div className="pt-4">
              <div className="inline-flex items-center text-brand-beige font-semibold hover:text-brand-red transition-colors duration-300">
                <span>Explore our timeline</span>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="w-full py-28 md:py-40 px-4 md:px-6 bg-dark-blue relative overflow-hidden">
        {/* Background decorative glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-beige/20 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          {/* Header */}
          <h2 className="text-5xl md:text-6xl font-bold font-lora text-white leading-tight tracking-tight mb-8">
            <span className="text-brand-beige">Overview</span>
          </h2>

          {/* Single Paragraph */}
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-manrope">
            At{" "}
            <span className="text-brand-red font-semibold">
              Bridge International (BIC)
            </span>
            , we provide{" "}
            <span className="text-brand-beige font-medium">
              internationally recognized education
            </span>{" "}
            at affordable prices, driven by a strong ambition to cultivate
            future leaders. Our programs are carefully designed to equip
            students with the{" "}
            <span className="text-brand-red font-semibold">
              knowledge, skills, and experience
            </span>{" "}
            necessary to succeed academically and personally. We offer{" "}
            <span className="text-brand-beige font-medium">
              comprehensive support including university counseling, extra
              academic assistance, volunteering opportunities, and
              extracurricular activities
            </span>
            , while ensuring every student benefits from{" "}
            <span className="text-brand-red font-semibold">
              enhanced facilities, services, and networking programs
            </span>{" "}
            that prepare them for top universities worldwide.
          </p>

          {/* Decorative accent */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-brand-beige to-transparent rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-20 md:py-32 px-4 md:px-6 bg-gray-900 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-24 space-y-6">
            <div className="w-20 h-1 bg-brand-red mx-auto rounded-full"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-lora text-white leading-tight">
              Our <span className="text-brand-red">Values</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-manrope">
              The core principles that guide our educational mission and shape
              our community
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
            {/* Value 1 - Academic Excellence */}
            <div className="group space-y-6">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-red rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold font-lora text-white mb-4 group-hover:text-brand-red transition-colors duration-300">
                    Academic Excellence
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-manrope">
                    We maintain the highest standards of education, ensuring our
                    students are prepared for the world's top universities and
                    future careers with rigorous academic programs.
                  </p>
                </div>
              </div>
            </div>

            {/* Value 2 - Global Community */}
            <div className="group space-y-6">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-red rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold font-lora text-white mb-4 group-hover:text-brand-red transition-colors duration-300">
                    Global Community
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-manrope">
                    We foster an inclusive environment where students from
                    diverse backgrounds come together to learn, grow, and build
                    lifelong connections across cultures.
                  </p>
                </div>
              </div>
            </div>

            {/* Value 3 - Innovation & Growth */}
            <div className="group space-y-6">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-red rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold font-lora text-white mb-4 group-hover:text-brand-red transition-colors duration-300">
                    Innovation & Growth
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-manrope">
                    We encourage creative thinking, problem-solving, and
                    continuous learning to prepare students for an ever-evolving
                    world with cutting-edge methodologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Value 4 - Pastoral Care */}
            <div className="group space-y-6">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-red rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold font-lora text-white mb-4 group-hover:text-brand-red transition-colors duration-300">
                    Pastoral Care
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-manrope">
                    We provide comprehensive support for each student's
                    emotional, social, and personal development throughout their
                    educational journey with dedicated guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="flex justify-center mt-16 md:mt-20">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent rounded-full"></div>
          </div>
        </div>
      </section>

      {/* News & Highlights Section */}
      <section className="w-full py-20 md:py-32 px-4 md:px-6 bg-black relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20 space-y-6">
            <div className="w-20 h-1 bg-brand-red mx-auto"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-lora text-white leading-tight">
              News & <span className="text-brand-red">Highlights</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-manrope">
              Stay updated with the latest achievements, events, and milestones
              from our Bridge International community
            </p>
          </div>

          {/* Blog Boxes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {/* Blog Box 1 */}
            <div className="group bg-gray-900 overflow-hidden shadow-2xl hover:shadow-brand-red/20 transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="University Acceptance Success"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-red text-white px-3 py-1 text-sm font-semibold font-manrope">
                    Achievement
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8 space-y-4">
                <h3 className="text-xl md:text-2xl font-bold font-lora text-white group-hover:text-brand-red transition-colors duration-300">
                  100% University Acceptance Rate Achieved
                </h3>
                <p className="text-gray-400 leading-relaxed font-manrope text-sm md:text-base">
                  Our Class of 2024 achieved a remarkable milestone with every
                  graduate securing placement at their preferred universities,
                  including Oxford, Cambridge, and Ivy League institutions.
                </p>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-brand-beige text-sm font-manrope">
                    December 15, 2024
                  </span>
                  <div className="w-8 h-8 bg-brand-red flex items-center justify-center group-hover:bg-brand-beige transition-colors duration-300">
                    <svg
                      className="w-4 h-4 text-white"
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
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Box 2 */}
            <div className="group bg-gray-900 overflow-hidden shadow-2xl hover:shadow-brand-red/20 transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="New Campus Facilities"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-red text-white px-3 py-1 text-sm font-semibold font-manrope">
                    Campus News
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8 space-y-4">
                <h3 className="text-xl md:text-2xl font-bold font-lora text-white group-hover:text-brand-red transition-colors duration-300">
                  State-of-the-Art Science Labs Unveiled
                </h3>
                <p className="text-gray-400 leading-relaxed font-manrope text-sm md:text-base">
                  Bridge International proudly opens its new cutting-edge
                  science laboratories, featuring advanced equipment and
                  technology to enhance our STEM education programs.
                </p>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-brand-beige text-sm font-manrope">
                    November 28, 2024
                  </span>
                  <div className="w-8 h-8 bg-brand-red flex items-center justify-center group-hover:bg-brand-beige transition-colors duration-300">
                    <svg
                      className="w-4 h-4 text-white"
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
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Box 3 */}
            <div className="group bg-gray-900 overflow-hidden shadow-2xl hover:shadow-brand-red/20 transition-all duration-500 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="International Student Exchange"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-red text-white px-3 py-1 text-sm font-semibold font-manrope">
                    Global Program
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8 space-y-4">
                <h3 className="text-xl md:text-2xl font-bold font-lora text-white group-hover:text-brand-red transition-colors duration-300">
                  International Exchange Program Expansion
                </h3>
                <p className="text-gray-400 leading-relaxed font-manrope text-sm md:text-base">
                  We're excited to announce partnerships with 15 new
                  international schools, offering our students unprecedented
                  global learning opportunities and cultural exchange
                  experiences.
                </p>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-brand-beige text-sm font-manrope">
                    October 20, 2024
                  </span>
                  <div className="w-8 h-8 bg-brand-red flex items-center justify-center group-hover:bg-brand-beige transition-colors duration-300">
                    <svg
                      className="w-4 h-4 text-white"
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* View All News Button */}
          <div className="text-center mt-12 md:mt-16">
            <button className="group inline-flex items-center px-8 md:px-12 py-4 md:py-6 bg-transparent border-2 border-brand-red hover:bg-brand-red text-brand-red hover:text-white font-bold text-lg md:text-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 rounded-lg">
              View All News
              <svg
                className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300"
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
            </button>
          </div>
        </div>
      </section>

      {/* Ready to Apply CTA Section */}
      <section className="w-full relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center">
        <img
          src="./graduation.jpg"
          alt="Graduation and Success"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-brand-red/30 to-black/90"></div>

        {/* Content */}
        <div className="relative z-10 w-full py-20 md:py-32 px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center space-y-10 md:space-y-12">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold font-lora text-white leading-tight tracking-tight">
                Ready to <span className="text-brand-red">Apply?</span>
              </h2>
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl text-brand-beige leading-relaxed max-w-4xl mx-auto font-light font-manrope">
              Become part of a community where your success comes first. With
              personalized learning, cutting-edge facilities, and a supportive
              environment, we are dedicated to unlocking each student's full
              potential.
            </p>
            <div className="pt-8">
              <Link
                to="/apply"
                className="group inline-flex items-center px-12 md:px-16 py-6 md:py-8 bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xl md:text-2xl shadow-2xl hover:shadow-brand-red/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-2 border-brand-red hover:border-brand-beige rounded-lg"
              >
                APPLY NOW
                <svg
                  className="w-8 h-8 ml-4 group-hover:translate-x-2 transition-transform duration-300"
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
    </div>
  );
}
