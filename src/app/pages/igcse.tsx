"use client";

import { Link } from "react-router-dom";
import Banner from "../components/banner.jsx";

interface IGCSEPageProps {
  language: string;
}

export default function IGCSEPage({ language }: IGCSEPageProps) {
  const translations = {
    en: {
      title: "IGCSE Program",
      subtitle: "International General Certificate of Secondary Education",
      aboutProgram: "About IGCSE Program",
      whyChoose: "Why Choose IGCSE?",
      subjects: "Available Subjects",
      assessment: "Assessment & Grading",
      pathways: "University Pathways",
      applyNow: "Apply Now",
    },
    mm: {
      title: "IGCSE ပရိုဂရမ်",
      subtitle: "အပြည်ပြည်ဆိုင်ရာ အထွေထွေ အလယ်တန်းပညာ လက်မှတ်",
      aboutProgram: "IGCSE ပရိုဂရမ်အကြောင်း",
      whyChoose: "IGCSE ကို ဘာကြောင့် ရွေးချယ်သင့်သလဲ?",
      subjects: "ရရှိနိုင်သော ဘာသာရပ်များ",
      assessment: "အကဲဖြတ်ခြင်းနှင့် အဆင့်သတ်မှတ်ခြင်း",
      pathways: "တက္ကသိုလ်လမ်းကြောင်းများ",
      applyNow: "ယခုလျှောက်ထားပါ",
    },
    th: {
      title: "โปรแกรม IGCSE",
      subtitle: "ใบรับรองการศึกษาขั้นมัธยมศึกษาระดับนานาชาติ",
      aboutProgram: "เกี่ยวกับโปรแกรม IGCSE",
      whyChoose: "ทำไมต้องเลือก IGCSE?",
      subjects: "วิชาที่เปิดสอน",
      assessment: "การประเมินและการให้คะแนน",
      pathways: "เส้นทางสู่มหาวิทยาลัย",
      applyNow: "สมัครเลย",
    },
  };

  const t = translations[language];

  return (
    <div>
      <Banner
        images={[
          "/placeholder.svg?height=600&width=1200&text=IGCSE+Program",
          "/placeholder.svg?height=600&width=1200&text=IGCSE+Students",
          "/placeholder.svg?height=600&width=1200&text=IGCSE+Classroom",
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
                    The International General Certificate of Secondary Education
                    (IGCSE) is a globally recognized qualification for students
                    aged 14-16. Our IGCSE program provides a solid foundation
                    for further academic study and prepares students for A
                    Levels, IB, or other advanced programs.
                  </p>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    With a curriculum that emphasizes critical thinking,
                    problem-solving, and practical application, IGCSE students
                    develop the skills and knowledge needed for success in
                    higher education and beyond.
                  </p>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-rose-600/20 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <img
                  src="/placeholder.svg?height=500&width=700&text=IGCSE+Learning"
                  alt="IGCSE Learning"
                  className="relative rounded-lg shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose IGCSE */}
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
                  title: "Global Recognition",
                  icon: "🌍",
                  desc: "Recognized by universities and employers worldwide",
                  color: "from-red-500 to-rose-600",
                },
                {
                  title: "Flexible Curriculum",
                  icon: "📚",
                  desc: "Wide range of subjects to match student interests",
                  color: "from-rose-500 to-pink-600",
                },
                {
                  title: "Excellent Preparation",
                  icon: "🎯",
                  desc: "Perfect foundation for A Levels and university",
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
                "English Language",
                "English Literature",
                "Mathematics",
                "Physics",
                "Chemistry",
                "Biology",
                "Business Studies",
                "Economics",
                "Geography",
                "History",
                "Art & Design",
                "Computer Science",
                "French",
                "Spanish",
                "Mandarin",
                "Psychology",
                "Sociology",
                "Drama",
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
              Ready to Start Your IGCSE Journey?
            </h2>
            <p className="text-slate-300 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Join our IGCSE program and build a strong foundation for your
              academic future
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
