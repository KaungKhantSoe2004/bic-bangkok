"use client";

import { Link } from "react-router-dom";
import Banner from "../components/banner.jsx";

interface OSSDPageProps {
  language: string;
}

export default function OSSDPage({ language }: OSSDPageProps) {
  const translations = {
    en: {
      title: "OSSD Program",
      subtitle: "Ontario Secondary School Diploma - Canadian Curriculum",
      aboutProgram: "About OSSD Program",
      whyChoose: "Why Choose OSSD?",
      subjects: "Available Subjects",
      applyNow: "Apply Now",
    },
    mm: {
      title: "OSSD ပရိုဂရမ်",
      subtitle:
        "အွန်တေးရီယို အလယ်တန်းကျောင်း ဒီပလိုမာ - ကနေဒါ သင်ရိုးညွှန်းတမ်း",
      aboutProgram: "OSSD ပရိုဂရမ်အကြောင်း",
      whyChoose: "OSSD ကို ဘာကြောင့် ရွေးချယ်သင့်သလဲ?",
      subjects: "ရရှိနိုင်သော ဘာသာရပ်များ",
      applyNow: "ယခုလျှောက်ထားပါ",
    },
    th: {
      title: "โปรแกรม OSSD",
      subtitle: "ประกาศนียบัตรมัธยมศึกษาออนแทรีโอ - หลักสูตรแคนาดา",
      aboutProgram: "เกี่ยวกับโปรแกรม OSSD",
      whyChoose: "ทำไมต้องเลือก OSSD?",
      subjects: "วิชาที่เปิดสอน",
      applyNow: "สมัครเลย",
    },
  };

  const t = translations[language];

  return (
    <div>
      <Banner
        images={[
          "/placeholder.svg?height=600&width=1200&text=OSSD+Program",
          "/placeholder.svg?height=600&width=1200&text=OSSD+Students",
          "/placeholder.svg?height=600&width=1200&text=Canadian+Education",
        ]}
        title={t.title}
        subtitle={t.subtitle}
      />

      <div className="relative">
        {/* About Program Section */}
        <section className="py-24 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-500 to-pink-600 mb-6">
                {t.aboutProgram}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-rose-600 mx-auto"></div>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-lg">
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    The Ontario Secondary School Diploma (OSSD) is a prestigious
                    Canadian qualification that provides students with access to
                    top universities in Canada, the US, UK, and around the
                    world.
                  </p>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Our OSSD program follows the Ontario Ministry of Education
                    curriculum, emphasizing critical thinking, creativity, and
                    practical application of knowledge across all subject areas.
                  </p>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-rose-600/20 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <img
                  src="/placeholder.svg?height=500&width=700&text=OSSD+Learning"
                  alt="OSSD Learning"
                  className="relative rounded-lg shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose OSSD */}
        <section className="py-24 px-4 bg-black relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                {t.whyChoose}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-600 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Canadian Advantage",
                  icon: "🍁",
                  desc: "Direct pathway to Canadian universities with preferential admission",
                  color: "from-red-500 to-rose-600",
                },
                {
                  title: "Flexible Learning",
                  icon: "📖",
                  desc: "Credit-based system allowing personalized learning paths",
                  color: "from-rose-500 to-pink-600",
                },
                {
                  title: "Global Recognition",
                  icon: "🌎",
                  desc: "Recognized by universities worldwide",
                  color: "from-pink-500 to-red-600",
                },
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-lg text-center hover:border-slate-600 transition-all duration-500 transform hover:-translate-y-2">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-lg mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-white text-3xl">{item.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 px-4 bg-gradient-to-br from-slate-950 to-slate-900 relative">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-500 to-pink-600 mb-8">
              Start Your Canadian Education Journey
            </h2>
            <p className="text-slate-300 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience world-class Canadian education with our comprehensive
              OSSD program
            </p>
            <Link
              to="/enquire"
              className="group relative inline-flex items-center justify-center px-12 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-red-500 to-rose-600 rounded-lg hover:from-red-400 hover:to-rose-500 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-500/25"
            >
              <span className="relative">{t.applyNow}</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-400 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
