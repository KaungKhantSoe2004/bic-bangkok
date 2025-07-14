"use client";

import { Link } from "react-router-dom";
import Banner from "../components/banner.jsx";

interface AboutPageProps {
  language: string;
}

export default function AboutPage({ language }: AboutPageProps) {
  const translations = {
    en: {
      title: "About Bridge International College",
      subtitle: "Excellence in Education Since 2010",
      ourStory: "Our Story",
      missionVision: "Mission & Vision",
      ourMission: "Our Mission",
      ourVision: "Our Vision",
      ourFaculty: "Our Faculty",
      coreValues: "Our Core Values",
      visitCampus: "Visit Our Campus",
      scheduleVisit: "Schedule a Visit",
    },
    mm: {
      title: "ဘရစ်ချ် အပြည်ပြည်ဆိုင်ရာ ကောလိပ်အကြောင်း",
      subtitle: "၂၀၁၀ ခုနှစ်မှစ၍ ပညာရေးထူးချွန်မှု",
      ourStory: "ကျွန်ုပ်တို့၏ ဇာတ်လမ်း",
      missionVision: "မစ်ရှင်နှင့် ရူပါရုံ",
      ourMission: "ကျွန်ုပ်တို့၏ မစ်ရှင်",
      ourVision: "ကျွန်ုပ်တို့၏ ရူပါရုံ",
      ourFaculty: "ကျွန်ုပ်တို့၏ ဆရာများ",
      coreValues: "ကျွန်ုပ်တို့၏ အခြေခံတန်ဖိုးများ",
      visitCampus: "ကျွန်ုပ်တို့၏ ကျောင်းဝင်းကို လာရောက်ကြည့်ရှုပါ",
      scheduleVisit: "လာရောက်ကြည့်ရှုရန် အချိန်ဇယားချပါ",
    },
    th: {
      title: "เกี่ยวกับ Bridge International College",
      subtitle: "ความเป็นเลิศในการศึกษาตั้งแต่ปี 2010",
      ourStory: "เรื่องราวของเรา",
      missionVision: "พันธกิจและวิสัยทัศน์",
      ourMission: "พันธกิจของเรา",
      ourVision: "วิสัยทัศน์ของเรา",
      ourFaculty: "คณาจารย์ของเรา",
      coreValues: "ค่านิยมหลักของเรา",
      visitCampus: "เยี่ยมชมวิทยาเขตของเรา",
      scheduleVisit: "นัดหมายการเยี่ยมชม",
    },
  };

  const t = translations[language];

  return (
    <div>
      <Banner
        images={[
          "/placeholder.svg?height=600&width=1200&text=About+Campus",
          "/placeholder.svg?height=600&width=1200&text=Our+History",
          "/placeholder.svg?height=600&width=1200&text=Faculty+Team",
        ]}
        title={t.title}
        subtitle={t.subtitle}
      />

      {/* About Sections */}
      <div className="relative">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/20 to-rose-600/20 transform rotate-45 animate-float"></div>
          <div className="absolute top-1/2 -left-20 w-40 h-40 bg-gradient-to-br from-pink-500/20 to-red-600/20 transform rotate-12 animate-float-delayed"></div>
          <div className="absolute bottom-20 right-1/4 w-60 h-60 bg-gradient-to-br from-orange-500/20 to-red-600/20 transform -rotate-12 animate-pulse"></div>
        </div>

        {/* Our Story Section */}
        <section className="py-24 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-500 to-pink-600 mb-6 animate-gradient">
                {t.ourStory}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-rose-600 mx-auto"></div>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-rose-600/20 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <img
                  src="/placeholder.svg?height=500&width=700&text=School+History"
                  alt="School History"
                  className="relative rounded-lg shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="space-y-8">
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-lg hover:bg-slate-900/70 transition-all duration-300">
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    Founded in 2010, Bridge International College Bangkok has
                    been at the forefront of international education in
                    Thailand. Our mission is to provide students with a
                    world-class education that prepares them for success in an
                    increasingly globalized world.
                  </p>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    We bridge the gap between local and international education
                    standards, offering internationally recognized curricula
                    while maintaining strong connections to Thai culture and
                    values.
                  </p>
                </div>
                <div className="flex space-x-4">
                  <div className="bg-gradient-to-r from-red-500 to-rose-600 p-4 rounded-lg text-center flex-1">
                    <div className="text-2xl font-bold text-white">15+</div>
                    <div className="text-red-100 text-sm">Years Excellence</div>
                  </div>
                  <div className="bg-gradient-to-r from-pink-500 to-red-600 p-4 rounded-lg text-center flex-1">
                    <div className="text-2xl font-bold text-white">2500+</div>
                    <div className="text-pink-100 text-sm">Graduates</div>
                  </div>
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-lg text-center flex-1">
                    <div className="text-2xl font-bold text-white">50+</div>
                    <div className="text-orange-100 text-sm">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision - Black Background */}
        <section className="py-24 px-4 bg-black relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900/50 to-black"></div>
            <div className="absolute top-20 right-20 w-32 h-32 bg-red-500/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-48 h-48 bg-pink-500/10 rounded-full animate-pulse delay-1000"></div>
          </div>
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                {t.missionVision}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-600 mx-auto"></div>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="group">
                <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700 p-10 rounded-lg hover:border-red-500/50 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">🎯</span>
                  </div>
                  <h3 className="text-3xl font-bold text-red-400 mb-6">
                    {t.ourMission}
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    To provide exceptional international education that empowers
                    students to become global citizens, critical thinkers, and
                    compassionate leaders who contribute positively to society.
                  </p>
                </div>
              </div>
              <div className="group">
                <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700 p-10 rounded-lg hover:border-pink-500/50 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">🚀</span>
                  </div>
                  <h3 className="text-3xl font-bold text-pink-400 mb-6">
                    {t.ourVision}
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    To be the leading international college in Southeast Asia,
                    recognized for academic excellence, innovative teaching
                    methods, and producing graduates who excel globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-500 to-pink-600 mb-6">
                {t.ourFaculty}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-rose-600 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="group">
                  <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-red-500/20">
                    <div className="relative overflow-hidden">
                      <img
                        src={`/placeholder.svg?height=300&width=300&text=Faculty+${i}`}
                        alt={`Faculty ${i}`}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-8">
                      <h4 className="text-2xl font-bold text-white mb-2">
                        Dr. Faculty Member {i}
                      </h4>
                      <p className="text-red-400 font-semibold mb-3">
                        Department Head
                      </p>
                      <p className="text-slate-300 leading-relaxed">
                        Expert in international curriculum with 15+ years
                        experience in educational excellence.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section - Black Background */}
        <section className="py-24 px-4 bg-black relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-red-500/10 to-rose-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-500/10 to-red-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                {t.coreValues}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-600 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Excellence",
                  icon: "⭐",
                  color: "from-red-500 to-rose-600",
                },
                {
                  title: "Integrity",
                  icon: "🛡️",
                  color: "from-rose-500 to-pink-600",
                },
                {
                  title: "Innovation",
                  icon: "💡",
                  color: "from-pink-500 to-red-600",
                },
                {
                  title: "Inclusivity",
                  icon: "🤝",
                  color: "from-orange-500 to-red-600",
                },
              ].map((value, i) => (
                <div key={i} className="group">
                  <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-lg text-center hover:border-slate-600 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-lg mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-white text-3xl">{value.icon}</span>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">
                      {value.title}
                    </h4>
                    <p className="text-slate-300 leading-relaxed">
                      Core principle guiding our educational approach and
                      institutional culture.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-24 px-4 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-500 to-pink-600 mb-8">
              {t.visitCampus}
            </h2>
            <p className="text-slate-300 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience our world-class facilities and meet our dedicated
              faculty members who are committed to your success.
            </p>
            <Link
              to="/enquire"
              className="group relative inline-flex items-center justify-center px-12 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-red-500 to-rose-600 rounded-lg hover:from-red-400 hover:to-rose-500 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-500/25"
            >
              <span className="relative">{t.scheduleVisit}</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-400 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
