"use client";

import { Link } from "react-router-dom";
import Banner from "../components/banner.jsx";

interface AdmissionPageProps {
  language: string;
}

export default function AdmissionPage({ language }: AdmissionPageProps) {
  const translations = {
    en: {
      title: "Admissions",
      subtitle: "Join Our Community of Global Learners",
      process: "Admission Process",
      requirements: "Requirements",
      deadlines: "Important Dates",
      applyNow: "Apply Now",
    },
    mm: {
      title: "ဝင်ခွင့်",
      subtitle: "ကမ္ဘာ့လုံးဆိုင်ရာ သင်ယူသူများ၏ အသိုင်းအဝိုင်းသို့ ပါဝင်ပါ",
      process: "ဝင်ခွင့်လုပ်ငန်းစဉ်",
      requirements: "လိုအပ်ချက်များ",
      deadlines: "အရေးကြီးသောရက်စွဲများ",
      applyNow: "ယခုလျှောက်ထားပါ",
    },
    th: {
      title: "การรับสมัคร",
      subtitle: "เข้าร่วมชุมชนผู้เรียนระดับโลกของเรา",
      process: "ขั้นตอนการรับสมัคร",
      requirements: "ข้อกำหนด",
      deadlines: "วันสำคัญ",
      applyNow: "สมัครเลย",
    },
  };

  const t = translations[language];

  return (
    <div>
      <Banner
        images={[
          "/placeholder.svg?height=600&width=1200&text=Admissions",
          "/placeholder.svg?height=600&width=1200&text=Application+Process",
          "/placeholder.svg?height=600&width=1200&text=Join+Us",
        ]}
        title={t.title}
        subtitle={t.subtitle}
      />

      <div className="relative">
        {/* Admission Process */}
        <section className="py-24 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-500 to-pink-600 mb-6">
                {t.process}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-rose-600 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Submit Application",
                  desc: "Complete our online application form with required documents",
                  color: "from-red-500 to-rose-600",
                },
                {
                  step: "2",
                  title: "Assessment",
                  desc: "Take our entrance examination and attend an interview",
                  color: "from-rose-500 to-pink-600",
                },
                {
                  step: "3",
                  title: "Review",
                  desc: "Our admissions team reviews your application thoroughly",
                  color: "from-pink-500 to-red-600",
                },
                {
                  step: "4",
                  title: "Enrollment",
                  desc: "Receive your acceptance letter and complete enrollment",
                  color: "from-orange-500 to-red-600",
                },
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-lg text-center hover:border-slate-600 transition-all duration-500 transform hover:-translate-y-2">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-lg mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-white font-bold text-2xl">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
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

        {/* Requirements */}
        <section className="py-24 px-4 bg-black relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                {t.requirements}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-600 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-red-400 mb-6">
                  Academic Requirements
                </h3>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3">•</span>
                    Previous academic transcripts
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3">•</span>
                    English proficiency test scores (IELTS/TOEFL)
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3">•</span>
                    Letters of recommendation
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3">•</span>
                    Personal statement
                  </li>
                </ul>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-pink-400 mb-6">
                  Documentation
                </h3>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">•</span>
                    Passport copy
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">•</span>
                    Birth certificate
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">•</span>
                    Medical certificate
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">•</span>
                    Passport-sized photographs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Important Dates */}
        <section className="py-24 px-4 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-500 to-pink-600 mb-6">
                {t.deadlines}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-600 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Early Application",
                  date: "December 15, 2024",
                  desc: "Early decision deadline for August 2025 intake",
                  color: "from-red-500 to-rose-600",
                },
                {
                  title: "Regular Application",
                  date: "March 31, 2025",
                  desc: "Regular application deadline for August 2025 intake",
                  color: "from-rose-500 to-pink-600",
                },
                {
                  title: "Late Application",
                  date: "June 30, 2025",
                  desc: "Final deadline for August 2025 intake (subject to availability)",
                  color: "from-pink-500 to-red-600",
                },
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-lg text-center hover:border-slate-600 transition-all duration-500 transform hover:-translate-y-2">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-lg mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-white text-2xl">📅</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-red-400 font-semibold mb-4">
                      {item.date}
                    </p>
                    <p className="text-slate-300 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 px-4 bg-black relative">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              Ready to Begin Your Application?
            </h2>
            <p className="text-slate-300 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Take the first step towards your bright future at Bridge
              International College Bangkok
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
