"use client";

import Banner from "../components/banner.jsx";

interface EnquirePageProps {
  language: string;
}

export default function EnquirePage({ language }: EnquirePageProps) {
  const translations = {
    en: {
      title: "Contact & Enquire",
      subtitle: "Get in Touch with Our Admissions Team",
      readyToBegin: "Ready to Begin Your Journey?",
      sendEnquiry: "Send Us Your Enquiry",
      otherWays: "Other Ways to Reach Us",
      faq: "Frequently Asked Questions",
    },
    mm: {
      title: "ဆက်သွယ်ရန်နှင့် မေးမြန်းရန်",
      subtitle: "ကျွန်ုပ်တို့၏ ဝင်ခွင့်အဖွဲ့နှင့် ဆက်သွယ်ပါ",
      readyToBegin: "သင်၏ခရီးစတင်ရန် အဆင်သင့်ဖြစ်ပြီလား?",
      sendEnquiry: "ကျွန်ုပ်တို့ထံ သင်၏မေးမြန်းချက်ကို ပေးပို့ပါ",
      otherWays: "ကျွန်ုပ်တို့ထံ ဆက်သွယ်ရန် အခြားနည်းလမ်းများ",
      faq: "မကြာခဏမေးလေ့ရှိသောမေးခွန်းများ",
    },
    th: {
      title: "ติดต่อและสอบถาม",
      subtitle: "ติดต่อทีมรับสมัครของเรา",
      readyToBegin: "พร้อมที่จะเริ่มต้นการเดินทางของคุณแล้วหรือยัง?",
      sendEnquiry: "ส่งคำถามของคุณให้เรา",
      otherWays: "วิธีอื่นในการติดต่อเรา",
      faq: "คำถามที่พบบ่อย",
    },
  };

  const t = translations[language];

  return (
    <div>
      <Banner
        images={[
          "/placeholder.svg?height=600&width=1200&text=Contact+Us",
          "/placeholder.svg?height=600&width=1200&text=Get+Information",
          "/placeholder.svg?height=600&width=1200&text=Visit+Campus",
        ]}
        title={t.title}
        subtitle={t.subtitle}
      />

      <div className="relative">
        {/* Geometric Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-red-500/10 to-rose-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-60 h-60 bg-gradient-to-br from-pink-500/10 to-red-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Hero Section */}
        <section className="py-24 px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-500 to-pink-600 mb-8 animate-gradient">
              {t.readyToBegin}
            </h2>
            <p className="text-slate-300 text-xl mb-12 leading-relaxed">
              Take the first step towards your future. Our admissions team is
              here to guide you through every step of the process.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-4 bg-black relative">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-pink-600/20 blur-xl"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-lg p-8">
                  <h3 className="text-3xl font-bold text-white mb-8">
                    {t.sendEnquiry}
                  </h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-slate-300 font-semibold mb-3">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 text-white rounded-md focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 group-hover:border-slate-600"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-slate-300 font-semibold mb-3">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 text-white rounded-md focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 group-hover:border-slate-600"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-slate-300 font-semibold mb-3">
                          Contact Phone *
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 text-white rounded-md focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 group-hover:border-slate-600"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-slate-300 font-semibold mb-3">
                          Program of Interest
                        </label>
                        <select className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 text-white rounded-md focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 group-hover:border-slate-600">
                          <option>Select a program</option>
                          <option>IGCSE</option>
                          <option>A Levels</option>
                          <option>OSSD</option>
                          <option>GED</option>
                        </select>
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-slate-300 font-semibold mb-3">
                        Message *
                      </label>
                      <textarea
                        rows={6}
                        className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 text-white rounded-md focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 group-hover:border-slate-600 resize-none"
                        placeholder="Tell us about your enquiry..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="group relative w-full bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-400 hover:to-rose-500 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-500/25"
                    >
                      <span className="relative">Send Enquiry</span>
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-400 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-white mb-8">
                  {t.otherWays}
                </h3>
                {[
                  {
                    icon: "📍",
                    title: "Visit Us",
                    details: [
                      "123 Education Street",
                      "Bangkok 10110, Thailand",
                    ],
                    color: "from-red-500 to-rose-600",
                  },
                  {
                    icon: "📞",
                    title: "Call Us",
                    details: ["+66 2 123 4567", "+66 2 123 4568"],
                    color: "from-rose-500 to-pink-600",
                  },
                  {
                    icon: "✉️",
                    title: "Email Us",
                    details: [
                      "info@bridgecollege.ac.th",
                      "admissions@bridgecollege.ac.th",
                    ],
                    color: "from-pink-500 to-red-600",
                  },
                  {
                    icon: "🕒",
                    title: "Office Hours",
                    details: [
                      "Mon-Fri: 8:00 AM - 5:00 PM",
                      "Sat: 9:00 AM - 3:00 PM",
                    ],
                    color: "from-orange-500 to-red-600",
                  },
                ].map((method, i) => (
                  <div key={i} className="group">
                    <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-6 hover:border-slate-600 transition-all duration-500 transform hover:-translate-y-2">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <span className="text-white text-2xl">
                            {method.icon}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-white mb-3">
                            {method.title}
                          </h4>
                          <div className="space-y-1">
                            {method.details.map((detail, idx) => (
                              <p key={idx} className="text-slate-300">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-500 to-pink-600 mb-6">
                {t.faq}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-600 mx-auto"></div>
            </div>
            <div className="space-y-6">
              {[
                {
                  q: "What are the admission requirements?",
                  a: "Students need to have completed their previous level of education, provide academic transcripts, English proficiency scores, and pass our entrance examination.",
                },
                {
                  q: "When does the academic year start?",
                  a: "Our academic year starts in August with orientation week. We also have a January intake for certain programs.",
                },
                {
                  q: "Are scholarships available?",
                  a: "Yes, we offer various scholarships based on academic merit, financial need, and special talents in sports or arts.",
                },
                {
                  q: "What support services are available for international students?",
                  a: "We provide comprehensive support including visa assistance, accommodation help, orientation programs, and ongoing academic support.",
                },
              ].map((faq, i) => (
                <div key={i} className="group">
                  <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-8 hover:border-slate-600 transition-all duration-500 transform hover:-translate-y-1">
                    <h4 className="text-xl font-bold text-white mb-4">
                      {faq.q}
                    </h4>
                    <p className="text-slate-300 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
