"use client";

import { Link } from "react-router-dom";
import Banner from "../components/banner.jsx";

interface GEDPageProps {
  language: string;
}

export default function GEDPage({ language }: GEDPageProps) {
  const translations = {
    en: {
      title: "GED Program",
      subtitle: "General Educational Development - Alternative Path to Success",
      aboutProgram: "About GED Program",
      whyChoose: "Why Choose GED?",
      subjects: "Test Subjects",
      applyNow: "Apply Now",
    },
    mm: {
      title: "GED ပရိုဂရမ်",
      subtitle:
        "အထွေထွေ ပညာရေးဖွံ့ဖြိုးတိုးတက်မှု - အောင်မြင်မှုသို့ အခြားလမ်းကြောင်း",
      aboutProgram: "GED ပရိုဂရမ်အကြောင်း",
      whyChoose: "GED ကို ဘာကြောင့် ရွေးချယ်သင့်သလဲ?",
      subjects: "စာမေးပွဲဘာသာရပ်များ",
      applyNow: "ယခုလျှောက်ထားပါ",
    },
    th: {
      title: "โปรแกรม GED",
      subtitle: "การพัฒนาการศึกษาทั่วไป - เส้นทางทางเลือกสู่ความสำเร็จ",
      aboutProgram: "เกี่ยวกับโปรแกรม GED",
      whyChoose: "ทำไมต้องเลือก GED?",
      subjects: "วิชาสอบ",
      applyNow: "สมัครเลย",
    },
  };

  const t = translations[language];

  return (
    <div>
      <Banner
        images={[
          "/placeholder.svg?height=600&width=1200&text=GED+Program",
          "/placeholder.svg?height=600&width=1200&text=GED+Students",
          "/placeholder.svg?height=600&width=1200&text=Alternative+Education",
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
                    The General Educational Development (GED) program provides
                    an alternative pathway for students to earn their high
                    school equivalency credential. Our comprehensive preparation
                    program ensures students are fully prepared for the GED
                    test.
                  </p>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    With flexible scheduling and personalized support, students
                    can complete their GED preparation at their own pace while
                    building the skills needed for college and career success.
                  </p>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-rose-600/20 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <img
                  src="/placeholder.svg?height=500&width=700&text=GED+Preparation"
                  alt="GED Preparation"
                  className="relative rounded-lg shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose GED */}
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
                  title: "Flexible Schedule",
                  icon: "⏰",
                  desc: "Study at your own pace with flexible timing options",
                  color: "from-red-500 to-rose-600",
                },
                {
                  title: "Career Ready",
                  icon: "💼",
                  desc: "Gain skills for immediate employment opportunities",
                  color: "from-rose-500 to-pink-600",
                },
                {
                  title: "College Pathway",
                  icon: "🎓",
                  desc: "Opens doors to higher education and training programs",
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

        {/* Test Subjects */}
        <section className="py-24 px-4 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-500 to-pink-600 mb-6">
                {t.subjects}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-600 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Mathematical Reasoning",
                "Reasoning Through Language Arts",
                "Science",
                "Social Studies",
              ].map((subject, i) => (
                <div
                  key={i}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-lg hover:border-red-500/50 transition-all duration-300 text-center"
                >
                  <h4 className="text-white font-semibold text-lg">
                    {subject}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 px-4 bg-black relative">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              Ready to Achieve Your GED?
            </h2>
            <p className="text-slate-300 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Take control of your education and unlock new opportunities with
              our GED program
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
