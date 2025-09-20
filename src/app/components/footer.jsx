import bridgeLogo from "../../assets/Bridge.jpg";

export default function Footer({ language }) {
  const translations = {
    en: {
      contact: "CONTACT INFORMATION",
      address: "ADDRESS",
      phone: "PHONE",
      email: "EMAIL",
      quickLinks: "QUICK LINKS",
      programs: "PROGRAMS",
      followUs: "FOLLOW US",
      copyright:
        "© 2024 BRIDGE INTERNATIONAL COLLEGE BANGKOK. ALL RIGHTS RESERVED.",
      addressText: "123 Education Street, Bangkok 10110, Thailand",
      phoneText: "+66 2 123 4567",
      emailText: "info@bridgecollege.ac.th",
    },
    mm: {
      contact: "ဆက်သွယ်ရန်အချက်အလက်များ",
      address: "လိပ်စာ",
      phone: "ဖုန်း",
      email: "အီးမေးလ်",
      quickLinks: "လျင်မြန်သောလင့်များ",
      programs: "သင်တန်းများ",
      followUs: "ကျွန်ုပ်တို့ကို လိုက်ပါ",
      copyright:
        "© ၂၀၂၄ ဘရစ်ချ် အပြည်ပြည်ဆိုင်ရာ ကောလိပ် ဘန်ကောက်။ မူပိုင်ခွင့်များ လုံးဝ ကြေးမုံရှိသည်။",
      addressText: "၁၂၃ ပညာရေးလမ်း၊ ဘန်ကောက် ၁၀၁၁၀၊ ထိုင်းနိုင်ငံ",
      phoneText: "+၆၆ ၂ ၁၂၃ ၄၅၆၇",
      emailText: "info@bridgecollege.ac.th",
    },
    th: {
      contact: "ข้อมูลการติดต่อ",
      address: "ที่อยู่",
      phone: "โทรศัพท์",
      email: "อีเมล",
      quickLinks: "ลิงก์ด่วน",
      programs: "หลักสูตร",
      followUs: "ติดตามเรา",
      copyright: "© 2024 BRIDGE INTERNATIONAL COLLEGE BANGKOK สงวนลิขสิทธิ์",
      addressText: "123 ถนนการศึกษา กรุงเทพฯ 10110 ประเทศไทย",
      phoneText: "+66 2 123 4567",
      emailText: "info@bridgecollege.ac.th",
    },
  };

  const t = translations[language];

  return (
    <footer className="bg-slate-900 border-t border-red-900/30 relative overflow-hidden">
      {/* Lion Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-red-800/20 to-red-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-br from-red-700/20 to-red-800/20 rounded-full blur-3xl"></div>

        {/* Lion Silhouettes */}
        <div className="absolute top-1/4 right-1/4 opacity-10">
          <svg
            width="150"
            height="150"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-red-800"
          >
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 13L13.5 7.5C13.1 6.8 12.4 6.3 11.7 6.3H12.3C11.6 6.3 10.9 6.8 10.5 7.5L9 13L3 7V9L9 15L10.4 9.4L12 15L13.6 9.4L15 15L21 9Z" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <img
                src={bridgeLogo || "/placeholder.svg"}
                alt="Bridge International College"
                className="w-16 h-16 mr-4 rounded-lg"
              />
              <div className="text-white">
                <div className="text-2xl font-black leading-tight bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent azonix-bold">
                  BRIDGE
                </div>
                <div className="text-sm leading-tight text-slate-300 font-semibold azonix-font">
                  INTERNATIONAL COLLEGE
                </div>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 azonix-font">
              EXCELLENCE IN INTERNATIONAL EDUCATION, BRIDGING CULTURES AND
              OPENING DOORS TO GLOBAL OPPORTUNITIES THROUGH INNOVATIVE LEARNING
              EXPERIENCES.
            </p>
            <div className="flex space-x-4">
              {["F", "I", "T", "L", "Y"].map((social, i) => (
                <button
                  key={i}
                  className="w-10 h-10 bg-slate-800/50 hover:bg-gradient-to-br hover:from-red-800 hover:to-red-900 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="text-slate-400 hover:text-white text-sm font-bold azonix-font">
                    {social}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent azonix-bold">
              {t.contact}
            </h3>
            <div className="space-y-4">
              <div className="group">
                <div className="font-semibold text-red-400 mb-1 azonix-font">
                  {t.address}
                </div>
                <div className="text-slate-400 group-hover:text-slate-300 transition-colors azonix-font">
                  {t.addressText}
                </div>
              </div>
              <div className="group">
                <div className="font-semibold text-red-400 mb-1 azonix-font">
                  {t.phone}
                </div>
                <div className="text-slate-400 group-hover:text-slate-300 transition-colors azonix-font">
                  {t.phoneText}
                </div>
              </div>
              <div className="group">
                <div className="font-semibold text-red-400 mb-1 azonix-font">
                  {t.email}
                </div>
                <div className="text-slate-400 group-hover:text-slate-300 transition-colors azonix-font">
                  {t.emailText}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent azonix-bold">
              {t.quickLinks}
            </h3>
            <div className="space-y-3">
              {[
                { label: "HOME", href: "/" },
                { label: "ABOUT", href: "/about" },
                { label: "ADMISSION", href: "/admission" },
                { label: "ENQUIRE", href: "/enquire" },
                { label: "IGCSE", href: "/igcse" },
                { label: "ALEVELS", href: "/alevels" },
                { label: "GED", href: "/ged" },
                { label: "OSSD", href: "/ossd" },
              ].map((link, i) => (
                <div key={i}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-red-400 transition-colors duration-300 block py-1 hover:translate-x-2 transform transition-transform azonix-font"
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent azonix-bold">
              {t.programs}
            </h3>
            <div className="space-y-3">
              {[
                { label: "IGCSE", href: "/igcse" },
                { label: "A LEVELS", href: "/alevels" },
                { label: "OSSD", href: "/ossd" },
                { label: "GED", href: "/ged" },
              ].map((program, i) => (
                <div key={i}>
                  <a
                    href={program.href}
                    className="text-slate-400 hover:text-red-400 transition-colors duration-300 block py-1 hover:translate-x-2 transform transition-transform azonix-font"
                  >
                    {program.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-900/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 mb-4 md:mb-0 azonix-font">
              {t.copyright}
            </div>
            <div className="flex space-x-6">
              {["PRIVACY POLICY", "TERMS OF SERVICE", "SITEMAP"].map(
                (link, i) => (
                  <button
                    key={i}
                    className="text-slate-400 hover:text-red-400 transition-colors duration-300 text-sm azonix-font"
                  >
                    {link}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
