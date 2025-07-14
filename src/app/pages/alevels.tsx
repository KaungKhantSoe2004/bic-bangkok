"use client";

import { Link } from "react-router-dom";
import Banner from "../components/banner.jsx";

interface ALevelsPageProps {
  language: string;
}

export default function ALevelsPage({ language }: ALevelsPageProps) {
  const translations = {
    en: {
      title: "A Levels Program",
      subtitle: "Advanced Level Qualifications for University Preparation",
      aboutProgram: "About A Levels Program",
      whyChoose: "Why Choose A Levels?",
      subjects: "Available Subjects",
      applyNow: "Apply Now",
    },
    mm: {
      title: "A Levels ပရိုဂရမ်",
      subtitle: "တက္ကသိုလ်ပြင်ဆင်မှုအတွက် အဆင့်မြင့်အရည်အချင်းများ",
      aboutProgram: "A Levels ပရိုဂရမ်အကြောင်း",
      whyChoose: "A Levels ကို ဘာကြောင့် ရွေးချယ်သင့်သလဲ?",
      subjects: "ရရှိနိုင်သော ဘာသာရပ်များ",
      applyNow: "ယခုလျှောက်ထားပါ",
    },
    th: {
      title: "โปรแกรม A Levels",
      subtitle: "คุณวุฒิระดับสูงเพื่อเตรียมความพร้อมสู่มหาวิทยาลัย",
      aboutProgram: "เกี่ยวกับโปรแกรม A Levels",
      whyChoose: "ทำไมต้องเลือก A Levels?",
      subjects: "วิชาที่เปิดสอน",
      applyNow: "สมัครเลย",
    },
  };

  const t = translations[language];

  return (
    <div>
      <Banner
        images={[
          "/placeholder.svg?height=600&width=1200&text=A+Levels+Program",
          "/placeholder.svg?height=600&width=1200&text=A+Levels+Students",
          "/placeholder.svg?height=600&width=1200&text=A+Levels+Laboratory",
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
                    A Levels (Advanced Level) qualifications are internationally
                    recognized and provide excellent preparation for university
                    study. Our A Levels program allows students to specialize in
                    3-4 subjects of their choice, developing deep knowledge and
                    analytical skills.
                  </p>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    With small class sizes and expert teachers, students receive
                    personalized attention and support to achieve their academic
                    goals and gain admission to top universities worldwide.
                  </p>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-rose-600/20 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <img
                  src="/placeholder.svg?height=500&width=700&text=A+Levels+Study"
                  alt="A Levels Study"
                  className="relative rounded-lg shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose A Levels */}
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
                  title: "University Recognition",
                  icon: "🎓",
                  desc: "Accepted by universities worldwide including UK, US, Canada",
                  color: "from-red-500 to-rose-600",
                },
                {
                  title: "Subject Specialization",
                  icon: "🔬",
                  desc: "Focus on subjects you're passionate about",
                  color: "from-rose-500 to-pink-600",
                },
                {
                  title: "Critical Thinking",
                  icon: "🧠",
                  desc: "Develop analytical and research skills",
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

        {/* Subjects */}
        <section className="py-24 px-4 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-500 to-pink-600 mb-6">
                {t.subjects}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-600 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Mathematics",
                "Further Mathematics",
                "Physics",
                "Chemistry",
                "Biology",
                "English Literature",
                "Economics",
                "Business Studies",
                "Psychology",
                "Geography",
                "History",
                "Art & Design",
                "Computer Science",
                "French",
                "Spanish",
                "Philosophy",
              ].map((subject, i) => (
                <div
                  key={i}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-lg hover:border-red-500/50 transition-all duration-300"
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
              Ready for A Levels Excellence?
            </h2>
            <p className="text-slate-300 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Take your education to the next level with our comprehensive A
              Levels program
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
