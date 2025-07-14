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
export default function HomePage({ language }) {
  const translations = {
    en: {
      welcome: "Welcome to Bridge International College Bangkok",
      subtitle:
        "Discover an unparalleled educational experience in the heart of Bangkok.",
      aboutTitle: "About Our Institution",
      aboutText:
        "Bridge International College Bangkok stands as a beacon of educational excellence, providing world-class education that bridges cultures and opens doors to global opportunities. Our commitment to holistic development ensures every student thrives.",
      whyChooseTitle: "Why Choose Bridge International College?",
      academicTitle: "Academic Excellence",
      academicDesc:
        "World-class curriculum with internationally recognized qualifications and a focus on critical thinking.",
      facilitiesTitle: "World-Class Facilities",
      facilitiesDesc:
        "Modern facilities equipped with the latest technology and resources for an optimal learning environment.",
      supportTitle: "Student Support Services",
      supportDesc:
        "Comprehensive support system for academic and personal development, including counseling and career guidance.",
      achievementsTitle: "Our Achievements",
      testimonialsTitle: "What Our Students Say",
      learnMore: "Learn More About Us",
      explorePrograms: "Explore Our Programs",
      facultyTitle: "Meet Our Esteemed Faculty",
      facultyDesc:
        "Our faculty comprises experienced educators and industry experts dedicated to nurturing future leaders.",
      campusLifeTitle: "Vibrant Campus Life",
      campusLifeDesc:
        "Engage in a diverse range of extracurricular activities, clubs, and events that enrich your college experience.",
      admissionsTitle: "Admissions Process",
      admissionsDesc:
        "A step-by-step guide to our straightforward admissions process, designed to welcome students from around the globe.",
      scholarshipsTitle: "Scholarships & Financial Aid",
      scholarshipsDesc:
        "Opportunities for scholarships and financial assistance to support deserving students in their educational journey.",
      globalPartnershipsTitle: "Global Partnerships",
      globalPartnershipsDesc:
        "Collaborations with leading universities and organizations worldwide, offering unique opportunities for our students.",
      researchTitle: "Research & Innovation",
      researchDesc:
        "Fostering a culture of inquiry and discovery, our students and faculty engage in impactful research projects.",
      alumniTitle: "Our Global Alumni Network",
      alumniDesc:
        "Join a thriving community of successful graduates making a difference across various fields worldwide.",
      careerServicesTitle: "Career Services & Placement",
      careerServicesDesc:
        "Dedicated support for career planning, internships, and job placement, ensuring a smooth transition to professional life.",
      eventsTitle: "Upcoming Events & Workshops",
      eventsDesc:
        "Stay informed about our academic workshops, cultural festivals, and community engagement events.",
      newsTitle: "Latest News & Updates",
      newsDesc:
        "Catch up on the latest happenings, achievements, and announcements from Bridge International College.",
      faqTitle: "Frequently Asked Questions",
      faqDesc:
        "Find answers to common questions about admissions, programs, campus life, and more.",
      ctaTitle: "Ready to Start Your Journey?",
      ctaSubtitle:
        "Join Bridge International College Bangkok and unlock your potential with world-class education.",
      applyNow: "Apply Now",
      contactUs: "Contact Us",
    },
    mm: {
      welcome: "ဘရစ်ချ် အပြည်ပြည်ဆိုင်ရာ ကောလိပ် ဘန်ကောက်သို့ ကြိုဆိုပါသည်",
      subtitle: "ဘန်ကောက်မြို့လယ်တွင် မတူညီသော ပညာရေးအတွေ့အကြုံကို ရှာဖွေပါ။",
      aboutTitle: "ကျွန်ုပ်တို့အင်စတီကျူးအကြောင်း",
      aboutText:
        "ဘရစ်ချ် အပြည်ပြည်ဆိုင်ရာ ကောလိပ် ဘန်ကောက်သည် ပညာရေးထူးချွန်မှုတစ်ခုအဖြစ် ရပ်တည်နေပြီး ယဉ်ကျေးမှုများကို ချိတ်ဆက်ပေးသော ကမ္ဘာ့အဆင့်မီ ပညာရေးကို ပေးဆောင်သည်။ ကျွန်ုပ်တို့၏ ဘက်စုံဖွံ့ဖြိုးတိုးတက်ရေးအတွက် ကတိကဝတ်ပြုမှုသည် ကျောင်းသားတိုင်း အောင်မြင်စေရန် သေချာစေသည်။",
      whyChooseTitle:
        "ဘရစ်ချ် အပြည်ပြည်ဆိုင်ရာ ကောလိပ်ကို ဘာကြောင့် ရွေးချယ်သင့်သလဲ?",
      academicTitle: "ပညာရေးထူးချွန်မှု",
      academicDesc:
        "နိုင်ငံတကာအသိအမှတ်ပြု အရည်အချင်းများနှင့် ဝေဖန်ပိုင်းခြားတွေးခေါ်မှုကို အလေးထားသော ကမ္ဘာ့အဆင့်မီ သင်ရိုးညွှန်းတမ်း။",
      facilitiesTitle: "ကမ္ဘာ့အဆင့်မီ အဆောက်အအုံများ",
      facilitiesDesc:
        "အကောင်းဆုံး သင်ယူမှုပတ်ဝန်းကျင်အတွက် နောက်ဆုံးပေါ် နည်းပညာနှင့် အရင်းအမြစ်များ တပ်ဆင်ထားသော ခေတ်မီအဆောက်အအုံများ။",
      supportTitle: "ကျောင်းသားများအတွက် ပံ့ပိုးမှုဝန်ဆောင်မှုများ",
      supportDesc:
        "ပညာရေးနှင့် ကိုယ်ရေးကိုယ်တာ ဖွံ့ဖြိုးတိုးတက်မှုအတွက် ဘက်စုံပံ့ပိုးမှုစနစ်၊ အကြံပေးခြင်းနှင့် အသက်မွေးဝမ်းကြောင်း လမ်းညွှန်မှုများ ပါဝင်သည်။",
      achievementsTitle: "ကျွန်ုပ်တို့၏ အောင်မြင်မှုများ",
      testimonialsTitle: "ကျွန်ုပ်တို့ကျောင်းသားများ ပြောသည်များ",
      learnMore: "ကျွန်ုပ်တို့အကြောင်း ပိုမိုလေ့လာပါ",
      explorePrograms: "ကျွန်ုပ်တို့၏ ပရိုဂရမ်များကို ရှ��ဖွေပါ",
      facultyTitle: "ကျွန်ုပ်တို့၏ ဂုဏ်ထူးဆောင် ဆရာများ",
      facultyDesc:
        "ကျွန်ုပ်တို့၏ ဆရာများသည် အနာဂတ်ခေါင်းဆောင်များကို ပြုစုပျိုးထောင်ရန် ရည်ရွယ်ထားသော အတွေ့အကြုံရှိ ပညာရှင်များနှင့် စက်မှုလုပ်ငန်း ကျွမ်းကျင်သူများ ပါဝင်သည်။",
      campusLifeTitle: "တက်ကြွသော ကျောင်းဝင်းဘဝ",
      campusLifeDesc:
        "သင်၏ ကောလိပ်အတွေ့အကြုံကို ကြွယ်ဝစေမည့် ပြင်ပလှုပ်ရှားမှုများ၊ ကလပ်များနှင့် ပွဲလမ်းသဘင်များစွာတွင် ပါဝင်ပါ။",
      admissionsTitle: "ဝင်ခွင့်လုပ်ငန်းစဉ်",
      admissionsDesc:
        "ကမ္ဘာတစ်ဝှမ်းမှ ကျောင်းသားများကို ကြိုဆိုရန် ဒီဇိုင်းထုတ်ထားသော ကျွန်ုပ်တို့၏ ရိုးရှင်းသော ဝင်ခွင့်လုပ်ငန်းစဉ်အတွက် အဆင့်ဆင့် လမ်းညွှန်ချက်။",
      scholarshipsTitle: "ပညာသင်ဆုများနှင့် ငွေကြေးအကူအညီ",
      scholarshipsDesc:
        "ထိုက်တန်သော ကျောင်းသားများ၏ ပညာရေးခရီးကို ပံ့ပိုးရန် ပညာသင်ဆုများနှင့် ငွေကြေးအကူအညီများအတွက် အခွင့်အလမ်းများ။",
      globalPartnershipsTitle: "ကမ္ဘာလုံးဆိုင်ရာ ပူးပေါင်းဆောင်ရွက်မှုများ",
      globalPartnershipsDesc:
        "ကျွန်ုပ်တို့၏ ကျောင်းသားများအတွက် ထူးခြားသော အခွင့်အလမ်းများကို ပေးဆောင်သည့် ကမ္ဘာတစ်ဝှမ်းရှိ ထိပ်တန်းတက္ကသိုလ်များနှင့် အဖွဲ့အစည်းများနှင့် ပူးပေါင်းဆောင်ရွက်မှုများ။",
      researchTitle: "သုတေသနနှင့် ဆန်းသစ်တီထွင်မှု",
      researchDesc:
        "စုံစမ်းမေးမြန်းမှုနှင့် ရှာဖွေတွေ့ရှိမှု ယဉ်ကျေးမှုကို မြှင့်တင်ပေးခြင်း၊ ကျွန်ုပ်တို့၏ ကျောင်းသားများနှင့် ဆရာများသည် အကျိုးသက်ရောက်မှုရှိသော သုတေသန ပရောဂျက်များတွင် ပါဝင်ကြသည်။",
      alumniTitle:
        "ကျွန်ုပ်တို့၏ ကမ္ဘာလုံးဆိုင်ရာ ကျောင်းသားဟောင်းများ ကွန်ရက်",
      alumniDesc:
        "ကမ္ဘာတစ်ဝှမ်းရှိ နယ်ပယ်အသီးသီးတွင် အောင်မြင်မှုများ ရရှိနေသော ဘွဲ့ရကျောင်းသားဟောင်းများ၏ တက်ကြွသော အသိုင်းအဝိုင်းတွင် ပါဝင်ပါ။",
      careerServicesTitle:
        "အသက်မွေးဝမ်းကြောင်း ဝန်ဆောင်မှုများနှင့် အလုပ်အကိုင်",
      careerServicesDesc:
        "အသက်မွေးဝမ်းကြောင်း စီမံကိန်း၊ အလုပ်သင်နှင့် အလုပ်အကိုင်နေရာချထားမှုအတွက် အထူးပံ့ပိုးမှု၊ ပရော်ဖက်ရှင်နယ်ဘဝသို့ ချောမွေ့စွာ ကူးပြောင်းနိုင်စေရန် သေချာစေသည်။",
      eventsTitle: "လာမည့် ပွဲလမ်းသဘင်များနှင့် အလုပ်ရုံဆွေးနွေးပွဲများ",
      eventsDesc:
        "ကျွန်ုပ်တို့၏ ပညာရေးဆိုင်ရာ အလုပ်ရုံဆွေးနွေးပွဲများ၊ ယဉ်ကျေးမှုပွဲတော်များနှင့် ရပ်ရွာလူထု ပူးပေါင်းပါဝင်မှု ပွဲလမ်းသဘင်များအကြောင်း အသိပေးပါ။",
      newsTitle: "နောက်ဆုံးရ သတင်းများနှင့် အပ်ဒိတ်များ",
      newsDesc:
        "ဘရစ်ချ် အပြည်ပြည်ဆိုင်ရာ ကောလိပ်မှ နောက်ဆုံးရ သတင်းများ၊ အောင်မြင်မှုများနှင့် ကြေညာချက်များကို ကြည့်ရှုပါ။",
      faqTitle: "မကြာခဏမေးလေ့ရှိသောမေးခွန်းများ",
      faqDesc:
        "ဝင်ခွင့်၊ ပရိုဂရမ်များ၊ ကျောင်းဝင်းဘဝနှင့် အခြားအရာများအကြောင်း အဖြစ်များသော မေးခွန်းများအတွက် အဖြေများကို ရှာဖွေပါ။",
      ctaTitle: "သင်၏ ခရီးကို စတင်ရန် အသင့်ဖြစ်ပြီလား?",
      ctaSubtitle:
        "Join Bridge International College Bangkok and unlock your potential with world-class education.",
      applyNow: "ယခုလျှောက်ထားပါ",
      contactUs: "ကျွန်ုပ်တို့ကို ဆက်သွယ်ပါ",
    },
    th: {
      welcome: "ยินดีต้อนรับสู่ Bridge International College Bangkok",
      subtitle: "ค้นพบประสบการณ์การศึกษาที่ไม่เหมือนใครในใจกลางกรุงเทพฯ",
      aboutTitle: "เกี่ยวกับสถาบันของเรา",
      aboutText:
        "Bridge International College Bangkok ยืนหยัดเป็นประภาคารแห่งความเป็นเลิศทางการศึกษา ให้การศึกษาระดับโลกที่เชื่อมโยงวัฒนธรรมและเปิดประตูสู่โอกาสระดับโลก ความมุ่งมั่นของเราในการพัฒนาแบบองค์รวมทำให้มั่นใจว่านักเรียนทุกคนจะเติบโตอย่างเต็มที่",
      whyChooseTitle: "ทำไมต้องเลือก Bridge International College?",
      academicTitle: "ความเป็นเลิศทางวิชาการ",
      academicDesc:
        "หลักสูตรระดับโลกพร้อมคุณวุฒิที่ได้รับการยอมรับในระดับสากลและเน้นการคิดเชิงวิพากษ์",
      facilitiesTitle: "สิ่งอำนวยความสะดวกระดับโลก",
      facilitiesDesc:
        "สิ่งอำนวยความสะดวกที่ทันสมัยพร้อมเทคโนโลยีและทรัพยากรล่าสุดเพื่อสภาพแวดล้อมการเรียนรู้ที่ดีที่สุด",
      supportTitle: "บริการสนับสนุนนักเรียน",
      supportDesc:
        "ระบบสนับสนุนที่ครอบคลุมสำหรับการพัฒนาด้านวิชาการและส่วนบุคคล รวมถึงการให้คำปรึกษาและการแนะแนวอาชีพ",
      achievementsTitle: "ความสำเร็จของเรา",
      testimonialsTitle: "นักเรียนของเราพูดว่าอย่างไร",
      learnMore: "เรียนรู้เพิ่มเติมเกี่ยวกับเรา",
      explorePrograms: "สำรวจหลักสูตรของเรา",
      facultyTitle: "พบกับคณาจารย์ผู้ทรงคุณวุฒิของเรา",
      facultyDesc:
        "คณาจารย์ของเราประกอบด้วยนักการศึกษาที่มีประสบการณ์และผู้เชี่ยวชาญในอุตสาหกรรมที่ทุ่มเทเพื่อบ่มเพาะผู้นำในอนาคต",
      campusLifeTitle: "ชีวิตในมหาวิทยาลัยที่มีชีวิตชีวา",
      campusLifeDesc:
        "เข้าร่วมกิจกรรมนอกหลักสูตร ชมรม และกิจกรรมที่หลากหลายซึ่งจะช่วยเสริมสร้างประสบการณ์ในวิทยาลัยของคุณ",
      admissionsTitle: "ขั้นตอนการรับสมัคร",
      admissionsDesc:
        "คำแนะนำทีละขั้นตอนสำหรับขั้นตอนการรับสมัครที่ตรงไปตรงมาของเรา ซึ่งออกแบบมาเพื่อต้อนรับนักเรียนจากทั่วโลก",
      scholarshipsTitle: "ทุนการศึกษาและความช่วยเหลือทางการเงิน",
      scholarshipsDesc:
        "โอกาสสำหรับทุนการศึกษาและความช่วยเหลือทางการเงินเพื่อสนับสนุนนักเรียนที่สมควรได้รับในการเดินทางด้านการศึกษา",
      globalPartnershipsTitle: "ความร่วมมือระดับโลก",
      globalPartnershipsDesc:
        "ความร่วมมือกับมหาวิทยาลัยและองค์กรชั้นนำทั่วโลก มอบโอกาสพิเศษสำหรับนักเรียนของเรา",
      researchTitle: "การวิจัยและนวัตกรรม",
      researchDesc:
        "ส่งเสริมวัฒนธรรมของการสอบถามและการค้นพบ นักเรียนและคณาจารย์ของเรามีส่วนร่วมในโครงการวิจัยที่มีผลกระทบ",
      alumniTitle: "เครือข่ายศิษย์เก่าทั่วโลกของเรา",
      alumniDesc:
        "เข้าร่วมชุมชนที่เจริญรุ่งเรืองของศิษย์เก่าที่ประสบความสำเร็จซึ่งสร้างความแตกต่างในสาขาต่างๆ ทั่วโลก",
      careerServicesTitle: "บริการอาชีพและการจัดหางาน",
      careerServicesDesc:
        "การสนับสนุนเฉพาะสำหรับการวางแผนอาชีพ การฝึกงาน และการจัดหางาน เพื่อให้มั่นใจว่าการเปลี่ยนผ่านสู่ชีวิตการทำงานเป็นไปอย่างราบรื่น",
      eventsTitle: "กิจกรรมและการประชุมเชิงปฏิบัติการที่กำลังจะมาถึง",
      eventsDesc:
        "ติดตามข่าวสารเกี่ยวกับเวิร์คช็อปทางวิชาการ เทศกาลวัฒนธรรม และกิจกรรมการมีส่วนร่วมของชุมชนของเรา",
      newsTitle: "ข่าวสารล่าสุดและการอัปเดต",
      newsDesc:
        "ติดตามข่าวสารล่าสุด ความสำเร็จ และประกาศจาก Bridge International College",
      faqTitle: "คำถามที่พบบ่อย",
      faqDesc:
        "ค้นหาคำตอบสำหรับคำถามทั่วไปเกี่ยวกับการรับสมัคร หลักสูตร ชีวิตในมหาวิทยาลัย และอื่นๆ",
      ctaTitle: "พร้อมที่จะเริ่มต้นการเดินทางของคุณแล้วหรือยัง?",
      ctaSubtitle:
        "เข้าร่วม Bridge International College Bangkok และปลดล็อกศักยภาพของคุณด้วยการศึกษาระดับโลก",
      applyNow: "สมัครเลย",
      contactUs: "ติดต่อเรา",
    },
  };

  const t = translations[language];

  return (
    <div className="font-electro relative">
      {/* Three-Color Gradient Background - Fixed and Blurred */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 opacity-190"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, rgba(220, 38, 127, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 40%, rgba(239, 68, 68, 0.12) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(251, 113, 133, 0.10) 0%, transparent 50%),
              linear-gradient(135deg, 
                rgba(15, 23, 42, 0.95) 0%, 
                rgba(30, 41, 59, 0.92) 35%, 
                rgba(51, 65, 85, 0.90) 65%, 
                rgba(15, 23, 42, 0.95) 100%
              )
            `,
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              conic-gradient(from 0deg at 50% 50%, 
                rgba(220, 38, 127, 0.08) 0deg,
                rgba(239, 68, 68, 0.06) 120deg,
                rgba(251, 113, 133, 0.04) 240deg,
                rgba(220, 38, 127, 0.08) 360deg
              )
            `,
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Content Layer - Removed background from this wrapper */}
      <div className="relative z-10">
        <Banner images={homeImages} title={t.welcome} subtitle={t.subtitle} />
        <div className="relative">
          {/* Animated Red Lines - Top */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-800 to-transparent animate-line-move-x z-0"></div>
          <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-red-900 to-transparent animate-line-move-x delay-1000 z-0"></div>

          {/* About Section */}
          <section className="py-28 px-4 relative bg-black">
            {/* Background Elements - Darker with Red Gradient */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Dark overlay that allows lines to show through */}
              <div className="absolute inset-0 bg-black/90"></div>

              {/* Lined Background - now more visible against dark bg */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-[linear-gradient(20deg,transparent_64%,#ef4444_64%,#ef4444_66%,transparent_66%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(140deg,transparent_64%,#4b5563_64%,#4b5563_66%,transparent_66%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(260deg,transparent_64%,#fdba74_64%,#fdba74_66%,transparent_66%)]"></div>
              </div>

              {/* Gradient Blobs - adjusted for better visibility on dark */}
              <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-red-900/20 to-rose-900/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-1/2 left-20 w-80 h-80 bg-gradient-to-br from-pink-900/20 to-red-900/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute bottom-40 right-1/3 w-60 h-60 bg-gradient-to-br from-amber-900/20 to-red-900/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
              {/* Section Header */}
              <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-500 to-pink-600 mb-6 animate-text-gradient uppercase tracking-tight">
                  {t.aboutTitle}
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-red-800 to-pink-900 mx-auto rounded-full animate-line-expand"></div>
              </div>

              {/* Content Grid */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-8 relative">
                  <div className="relative">
                    <div className="absolute -inset-3 bg-gradient-to-r from-red-900/30 to-pink-900/30 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative bg-gray-900/95 backdrop-blur-md border border-gray-800 p-8 rounded-lg hover:bg-gray-900 transition-all duration-300 shadow-xl hover:shadow-rose-900/10">
                      <p className="text-gray-300 text-lg leading-relaxed mb-8 font-medium">
                        {t.aboutText}
                      </p>
                      <Link
                        to="/about"
                        className="group relative inline-flex items-center justify-center px-8 py-3.5 text-lg font-bold tracking-wide text-white transition-all duration-300 bg-gradient-to-r from-red-800 to-rose-900 border-2 border-transparent rounded-lg hover:from-red-900 hover:to-rose-800 hover:shadow-lg hover:shadow-rose-900/30 transform hover:-translate-y-0.5"
                      >
                        <span className="relative uppercase tracking-wider">
                          {t.learnMore}
                          <span className="absolute -right-4 group-hover:right-0 transition-all duration-300">
                            →
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Premium Video Gallery */}
                <div className="relative group">
                  {/* Main Video Container */}
                  <div className="relative rounded-xl overflow-hidden border border-gray-700 shadow-2xl">
                    <div className="aspect-video bg-black">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/lRbBGBDqFsI"
                        title="BIC Welcoming Message"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>

                    {/* Video Navigation Dots */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                      {["lRbBGBDqFsI", "i4fJI-_zbqs", "86CzKrRi8hE"].map(
                        (id, index) => (
                          <button
                            key={id}
                            onClick={() =>
                              (document.querySelector(
                                "iframe"
                              ).src = `https://www.youtube.com/embed/${id}?autoplay=1`)
                            }
                            className={`w-3 h-3 rounded-full transition-all ${
                              index === 0
                                ? "bg-rose-500"
                                : "bg-gray-500 hover:bg-rose-400"
                            }`}
                            aria-label={`Video ${index + 1}`}
                          />
                        )
                      )}
                    </div>
                  </div>

                  {/* Video Selection Grid */}
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    <button
                      onClick={() =>
                        (document.querySelector("iframe").src =
                          "https://www.youtube.com/embed/lRbBGBDqFsI?autoplay=1")
                      }
                      className="relative aspect-video rounded-md overflow-hidden border-2 border-rose-500/80 group-hover:border-rose-500 transition-all"
                    >
                      <img
                        src="https://img.youtube.com/vi/lRbBGBDqFsI/mqdefault.jpg"
                        alt="Welcome Message"
                        className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                        <PlayIcon className="w-8 h-8 text-rose-400" />
                      </div>
                    </button>

                    <button
                      onClick={() =>
                        (document.querySelector("iframe").src =
                          "https://www.youtube.com/embed/i4fJI-_zbqs?autoplay=1")
                      }
                      className="relative aspect-video rounded-md overflow-hidden border-2 border-gray-600 hover:border-rose-500 transition-all"
                    >
                      <img
                        src="https://img.youtube.com/vi/i4fJI-_zbqs/mqdefault.jpg"
                        alt="Company Overview"
                        className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                        <PlayIcon className="w-8 h-8 text-rose-400" />
                      </div>
                    </button>

                    <button
                      onClick={() =>
                        (document.querySelector("iframe").src =
                          "https://www.youtube.com/embed/86CzKrRi8hE?autoplay=1")
                      }
                      className="relative aspect-video rounded-md overflow-hidden border-2 border-gray-600 hover:border-rose-500 transition-all"
                    >
                      <img
                        src="https://img.youtube.com/vi/86CzKrRi8hE/mqdefault.jpg"
                        alt="Our Mission"
                        className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                        <PlayIcon className="w-8 h-8 text-rose-400" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Play Icon Component */}

          {/* Why Choose Us */}
          <section className="py-28 px-4 bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-sm relative overflow-hidden">
            {/* Background gradient elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-red-900/30 to-rose-900/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-rose-900/30 to-red-900/20 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-red-800/20 to-rose-800/20 rounded-full blur-3xl"></div>
            </div>
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTIwIDIwVjBINHYxNnYxNkgwdjIwaDIwdi0xNmgxNnYtMTZIMjB6IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')]"></div>
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight">
                  <span className="bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">
                    {t.whyChooseTitle}
                  </span>
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-rose-700 mx-auto rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: t.academicTitle,
                    icon: "🎓",
                    desc: t.academicDesc,
                    color: "from-red-800 to-rose-900",
                  },
                  {
                    title: t.facilitiesTitle,
                    icon: "🏢",
                    desc: t.facilitiesDesc,
                    color: "from-rose-800 to-pink-900",
                  },
                  {
                    title: t.supportTitle,
                    icon: "🤝",
                    desc: t.supportDesc,
                    color: "from-pink-800 to-red-900",
                  },
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-10 rounded-lg text-center hover:border-slate-600 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl">
                      <div
                        className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-lg mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <span className="text-white text-3xl">{item.icon}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-6 uppercase">
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

          {/* Programs */}
          <section className="py-24 px-4 relative overflow-hidden">
            {/* Enhanced Background with Focused Overlay */}
            <div className="absolute inset-0">
              <img
                src="./int.jpg"
                alt="Classroom background"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay - darker at edges, lighter in center */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
              {/* Additional center vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.7)_80%)]"></div>
            </div>

            {/* Lion Icon - More Visible */}
            <div className="absolute top-1/2 left-1/4 w-20 h-20 opacity-30 animate-pop-in-float delay-500 z-0">
              <img
                src="../../assets/bridge-logo.jpg"
                alt="Lion Icon"
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-500 to-pink-600 mb-6 uppercase drop-shadow-lg">
                  {t.explorePrograms}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-red-800 to-pink-900 mx-auto shadow-lg"></div>
              </div>

              {/* Program Cards - Enhanced Visibility */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    name: "IGCSE",
                    desc: "International General Certificate of Secondary Education",
                    path: "/igcse",
                    color: "from-red-800 to-rose-900",
                  },
                  {
                    name: "A Levels",
                    desc: "Advanced Level Qualifications for university entry",
                    path: "/alevels",
                    color: "from-rose-800 to-pink-900",
                  },
                  {
                    name: "OSSD",
                    desc: "Ontario Secondary School Diploma, a globally recognized high school diploma",
                    path: "/ossd",
                    color: "from-pink-800 to-red-900",
                  },
                  {
                    name: "GED",
                    desc: "General Educational Development, an alternative to a high school diploma",
                    path: "/ged",
                    color: "from-amber-800 to-red-900",
                  },
                ].map((program, i) => (
                  <Link key={i} to={program.path} className="group">
                    <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-lg p-8 text-center hover:border-slate-600 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-lg mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <span className="text-white font-bold text-xl uppercase">
                          {program.name[0]}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 uppercase">
                        {program.name}
                      </h3>
                      <p className="text-slate-200 mb-6 leading-relaxed">
                        {program.desc}
                      </p>
                      <span
                        className={`text-transparent bg-clip-text bg-gradient-to-r ${program.color} font-semibold hover:underline transition-all duration-300 uppercase text-sm`}
                      >
                        Learn More →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Academic Excellence */}
          <section className="py-28 px-4 bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-sm relative overflow-hidden">
            {/* Background gradient elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-red-900/30 to-rose-900/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-rose-900/30 to-red-900/20 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-red-800/20 to-rose-800/20 rounded-full blur-3xl"></div>
            </div>
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTIwIDIwVjBINHYxNnYxNkgwdjIwaDIwdi0xNmgxNnYtMTZIMjB6IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')]"></div>
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight">
                  <span className="bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">
                    {t.academicTitle}
                  </span>
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-rose-700 mx-auto rounded-full"></div>
              </div>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-red-800/20 to-rose-900/20 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <img
                    src="./int.jpg"
                    alt="Academic Excellence"
                    className="relative rounded-lg shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="space-y-8">
                  <p className="text-slate-300/90 text-lg md:text-xl leading-relaxed">
                    {t.academicDesc}
                  </p>
                  <ul className="space-y-4 text-slate-300 text-lg">
                    <li className="flex items-center">
                      <span className="text-red-400 mr-3">✔</span> Rigorous
                      curriculum
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-400 mr-3">✔</span> Experienced
                      educators
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-400 mr-3">✔</span> Personalized
                      learning paths
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-400 mr-3">✔</span> Focus on
                      critical thinking and problem-solving
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* World-Class Faculty */}
          <section className="py-24 px-4 relative overflow-hidden">
            {/* Lined Background like Research & Innovation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/80"></div>

              {/* Extreme Top Edge Blur (100px tall) */}
              <div
                className="absolute top-0 left-0 right-0 h-[100px] 
                bg-gradient-to-b from-red-900/70 to-transparent 
                blur-[100px] opacity-80"
              ></div>
              {/* Extreme Bottom Edge Blur (100px tall) */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[100px] 
                bg-gradient-to-t from-amber-900/60 to-transparent 
                blur-[120px] opacity-90"
              ></div>
              {/* Original Tri-Lines (now clean in center) */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(20deg,transparent_64%,#ef4444_64%,#ef4444_66%,transparent_66%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(140deg,transparent_64%,#4b5563_64%,#4b5563_66%,transparent_66%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(260deg,transparent_64%,#fdba74_64%,#fdba74_66%,transparent_66%)]"></div>
              </div>
            </div>

            {/* Animated Lion Icon */}
            <div className="absolute top-1/3 right-1/4 w-24 h-24 opacity-10 animate-pop-in-float z-0">
              <img
                src="/src/assets/bridge-logo.jpg"
                alt="Lion Icon"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-500 to-pink-600 mb-6 uppercase">
                  {t.facultyTitle}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-red-800 to-pink-900 mx-auto"></div>
              </div>
              <p className="text-slate-300 text-xl text-center max-w-3xl mx-auto mb-12">
                {t.facultyDesc}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="group">
                    <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-800 rounded-lg p-6 text-center hover:border-slate-700 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
                      <img
                        src={`/placeholder.svg?height=150&width=150&text=Faculty+${i}`}
                        alt={`Faculty Member ${i}`}
                        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-red-800 group-hover:scale-105 transition-transform duration-300"
                      />
                      <h3 className="text-xl font-bold text-white mb-2">
                        Professor Name {i}
                      </h3>
                      <p className="text-red-400 font-semibold">
                        Department of {i % 2 === 0 ? "Science" : "Arts"}
                      </p>
                      <p className="text-slate-400 text-sm mt-2">
                        Specialization in Modern{" "}
                        {i % 2 === 0 ? "Physics" : "Literature"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Cutting-Edge Facilities */}
          <section className="py-28 px-4 bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-sm relative overflow-hidden">
            {/* Background gradient elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-red-900/30 to-rose-900/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-rose-900/30 to-red-900/20 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-red-800/20 to-rose-800/20 rounded-full blur-3xl"></div>
            </div>
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTIwIDIwVjBINHYxNnYxNkgwdjIwaDIwdi0xNmgxNnYtMTZIMjB6IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')]"></div>
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight">
                  <span className="bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">
                    {t.facilitiesTitle}
                  </span>
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-rose-700 mx-auto rounded-full"></div>
              </div>
              <p className="text-slate-300/90 text-lg md:text-xl text-center max-w-4xl mx-auto mb-16 leading-relaxed">
                {t.facilitiesDesc}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: "🔬", title: "Advanced Labs" },
                  { icon: "📚", title: "Modern Library" },
                  { icon: "💻", title: "Tech Hubs" },
                  { icon: "🏀", title: "Sports Complex" },
                  { icon: "🎭", title: "Arts Studios" },
                  { icon: "🍽️", title: "Dining Halls" },
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="h-full bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 p-8 rounded-xl text-center hover:border-rose-600/30 transition-all duration-500 hover:shadow-xl hover:shadow-rose-900/10">
                      <div className="text-5xl mb-4">{item.icon}</div>
                      <h3 className="text-2xl font-bold text-white uppercase">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Student Life & Campus Culture */}
          <section className="py-24 px-4 relative overflow-hidden">
            {/* Enhanced Background with Focused Overlay (like Programs) */}
            <div className="absolute inset-0">
              <img
                src="./int.jpg"
                alt="Campus life background"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay - darker at edges, lighter in center */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
              {/* Additional center vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.7)_80%)]"></div>
            </div>

            {/* Lion Icon - More Visible (like Programs) */}
            <div className="absolute bottom-1/4 left-1/4 w-28 h-28 opacity-30 animate-pop-in-float delay-1000 z-0">
              <img
                src="/src/assets/bridge-logo.jpg"
                alt="Lion Icon"
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>

            {/* Content Container - Removed backdrop-blur-sm */}
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-500 to-pink-600 mb-6 uppercase drop-shadow-lg">
                  {t.campusLifeTitle}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-red-800 to-pink-900 mx-auto shadow-lg"></div>
              </div>

              <p className="text-slate-200 text-xl text-center max-w-3xl mx-auto mb-12">
                {t.campusLifeDesc}
              </p>

              {/* Activity Cards - Enhanced Visibility */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: "🎉", title: "Festivals" },
                  { icon: "⚽", title: "Sports" },
                  { icon: "🎨", title: "Arts & Culture" },
                  { icon: "🤝", title: "Community Service" },
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-lg p-8 text-center hover:border-rose-500/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl">
                      <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white uppercase mb-2">
                        {item.title}
                      </h3>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-red-700 to-pink-800 mx-auto my-4 opacity-70 group-hover:opacity-100 transition-opacity"></div>
                      <p className="text-slate-300 text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Explore our {item.title.toLowerCase()} activities
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Admissions Process */}
          <section className="py-28 px-4 bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-sm relative overflow-hidden">
            {/* Background gradient elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-red-900/30 to-rose-900/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-rose-900/30 to-red-900/20 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-red-800/20 to-rose-800/20 rounded-full blur-3xl"></div>
            </div>
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTIwIDIwVjBINHYxNnYxNkgwdjIwaDIwdi0xNmgxNnYtMTZIMjB6IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')]"></div>
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight">
                  <span className="bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">
                    {t.admissionsTitle}
                  </span>
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-rose-700 mx-auto rounded-full"></div>
              </div>
              <p className="text-slate-300/90 text-lg md:text-xl text-center max-w-4xl mx-auto mb-16 leading-relaxed">
                {t.admissionsDesc}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { step: "1", title: "Inquire & Apply" },
                  { step: "2", title: "Submit Documents" },
                  { step: "3", title: "Interview & Assessment" },
                  { step: "4", title: "Receive Offer" },
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="h-full bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 p-8 rounded-xl text-center hover:border-rose-600/30 transition-all duration-500 hover:shadow-xl hover:shadow-rose-900/10">
                      <div className="text-6xl font-bold text-red-400 mb-4">
                        {item.step}
                      </div>
                      <h3 className="text-2xl font-bold text-white uppercase">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-12">
                <Link
                  to="/admission"
                  className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-red-800 transition-all duration-300 bg-transparent border-2 border-red-800 rounded-lg hover:bg-red-800 hover:text-white transform hover:-translate-y-1 hover:shadow-xl hover:shadow-red-800/25"
                >
                  <span className="relative uppercase">View Full Process</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Scholarships & Financial Aid */}
          <section className="py-24 px-4 relative bg-black overflow-hidden">
            {/* Lined Background like Research & Innovation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Dark overlay that preserves background elements */}
              <div className="absolute inset-0 bg-black/90"></div>

              {/* Extreme Top Edge Blur (100px tall) */}
              <div
                className="absolute top-0 left-0 right-0 h-[100px] 
                bg-gradient-to-b from-red-900/70 to-transparent 
                blur-[100px] opacity-80"
              ></div>
              {/* Extreme Bottom Edge Blur (100px tall) */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[100px] 
                bg-gradient-to-t from-amber-900/60 to-transparent 
                blur-[120px] opacity-90"
              ></div>
              {/* Original Tri-Lines (now more visible) */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-[linear-gradient(20deg,transparent_64%,#ef4444_64%,#ef4444_66%,transparent_66%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(140deg,transparent_64%,#4b5563_64%,#4b5563_66%,transparent_66%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(260deg,transparent_64%,#fdba74_64%,#fdba74_66%,transparent_66%)]"></div>
              </div>
            </div>

            {/* Animated Lion Icon */}
            <div className="absolute top-1/4 left-1/3 w-20 h-20 opacity-10 animate-pop-in-float z-0">
              <img
                src="/src/assets/bridge-logo.jpg"
                alt="Lion Icon"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-500 to-pink-600 mb-6 uppercase">
                  {t.scholarshipsTitle}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-red-800 to-pink-900 mx-auto"></div>
              </div>
              <p className="text-slate-300 text-xl text-center max-w-3xl mx-auto mb-12">
                {t.scholarshipsDesc}
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-800 rounded-lg p-8 text-center hover:border-slate-700 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-white mb-4 uppercase">
                    Merit-Based Scholarships
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Recognizing academic excellence and outstanding
                    achievements.
                  </p>
                </div>
                <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-800 rounded-lg p-8 text-center hover:border-slate-700 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-white mb-4 uppercase">
                    Need-Based Financial Aid
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Supporting students with demonstrated financial need to
                    access quality education.
                  </p>
                </div>
              </div>

              <div className="text-center mt-12">
                <Link
                  to="/admission"
                  className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-red-800 transition-all duration-300 bg-transparent border-2 border-red-800 rounded-lg hover:bg-red-800 hover:text-white transform hover:-translate-y-1 hover:shadow-xl hover:shadow-red-800/25"
                >
                  <span className="relative uppercase">Apply for Aid</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Global Partnerships */}
          <section className="py-28 px-4 bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-sm relative overflow-hidden">
            {/* Background gradient elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-red-900/30 to-rose-900/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-rose-900/30 to-red-900/20 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-red-800/20 to-rose-800/20 rounded-full blur-3xl"></div>
            </div>
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTIwIDIwVjBINHYxNnYxNkgwdjIwaDIwdi0xNmgxNnYtMTZIMjB6IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')]"></div>
            <div className="max-w-7xl mx-auto relative z-10">
              {/* Section header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight">
                  <span className="bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">
                    {t.globalPartnershipsTitle}
                  </span>
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-rose-700 mx-auto rounded-full"></div>
              </div>
              {/* Description text */}
              <p className="text-slate-300/90 text-lg md:text-xl text-center max-w-4xl mx-auto mb-16 leading-relaxed">
                {t.globalPartnershipsDesc}
              </p>
              {/* Partner cards grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    img: "/placeholder.svg?height=100&width=200&text=Partner+1",
                    name: "University of Global Studies",
                    description:
                      "World-leading research institution with 150+ years of academic excellence",
                  },
                  {
                    img: "/placeholder.svg?height=100&width=200&text=Partner+2",
                    name: "Tech Innovations Inc.",
                    description:
                      "Cutting-edge technology partner for STEM education programs",
                  },
                  {
                    img: "/placeholder.svg?height=100&width=200&text=Partner+3",
                    name: "International Education Org.",
                    description:
                      "Global network connecting students with international opportunities",
                  },
                ].map((partner, i) => (
                  <div key={i} className="group">
                    <div className="h-full bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 p-8 rounded-xl text-center hover:border-rose-600/30 transition-all duration-500 hover:shadow-xl hover:shadow-rose-900/10">
                      <div className="relative w-full h-24 mb-6 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <img
                          src={partner.img || "/placeholder.svg"}
                          alt={partner.name}
                          className="relative z-10 h-full w-auto object-contain mx-auto group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">
                        {partner.name}
                      </h3>
                      <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                        {partner.description}
                      </p>
                      <div className="mt-4">
                        <span className="inline-block text-sm font-medium bg-gradient-to-r from-rose-500 to-red-600 bg-clip-text text-transparent group-hover:translate-x-1 transition-transform duration-300">
                          Learn more →
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* CTA at bottom */}
              <div className="mt-16 text-center">
                <Link
                  to="/partnerships"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-rose-600 to-red-700 rounded-xl hover:from-rose-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-rose-900/20"
                >
                  Explore All Partnerships
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </section>

          {/* Research & Innovation */}
          <section className="py-24 px-4 relative bg-black overflow-hidden">
            {/* === EDGE BLUR EFFECTS ONLY === */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Dark overlay that preserves background elements */}
              <div className="absolute inset-0 bg-black/90"></div>

              {/* Extreme Top Edge Blur (100px tall) */}
              <div
                className="absolute top-0 left-0 right-0 h-[100px] 
                bg-gradient-to-b from-red-900/70 to-transparent 
                blur-[100px] opacity-80"
              ></div>

              {/* Extreme Bottom Edge Blur (100px tall) */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[100px] 
                bg-gradient-to-t from-amber-900/60 to-transparent 
                blur-[120px] opacity-90"
              ></div>

              {/* Original Tri-Lines (now more visible) */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-[linear-gradient(20deg,transparent_64%,#ef4444_64%,#ef4444_66%,transparent_66%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(140deg,transparent_64%,#4b5563_64%,#4b5563_66%,transparent_66%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(260deg,transparent_64%,#fdba74_64%,#fdba74_66%,transparent_66%)]"></div>
              </div>
            </div>

            {/* Rest of your content remains unchanged */}
            <div className="max-w-7xl mx-auto relative z-10">
              {/* Lion icon */}
              {/* <div className="absolute bottom-1/3 right-1/3 w-24 h-24 opacity-10 animate-pop-in-float delay-700 z-0">
                <img
                  src="./3.jpg"
                  alt="Lion Icon"
                  className="w-full h-full object-contain"
                />
              </div> */}

              {/* Content */}
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-500 to-pink-600 mb-6 animate-gradient uppercase">
                  {t.researchTitle}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-red-800 to-pink-900 mx-auto"></div>
              </div>

              <p className="text-slate-300 text-xl text-center max-w-3xl mx-auto mb-12">
                {t.researchDesc}
              </p>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-red-800/30 to-rose-900/30 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <img
                    src="./3.jpg"
                    alt="Research Lab"
                    className="relative rounded-lg shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                <div className="space-y-8">
                  <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-800 p-8 rounded-lg hover:bg-slate-900 transition-all duration-300">
                    <h3 className="text-3xl font-bold text-white mb-4 uppercase">
                      Key Research Areas
                    </h3>
                    <ul className="space-y-3 text-slate-300 text-lg">
                      <li className="flex items-center">
                        <span className="text-amber-400 mr-3">●</span>
                        Sustainable Technologies
                      </li>
                      <li className="flex items-center">
                        <span className="text-amber-400 mr-3">●</span>
                        Artificial Intelligence
                      </li>
                      <li className="flex items-center">
                        <span className="text-amber-400 mr-3">●</span>
                        Global Health Initiatives
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Alumni Network */}
          <section className="py-28 px-4 bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-sm relative overflow-hidden">
            {/* Background gradient elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-red-900/30 to-rose-900/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-rose-900/30 to-red-900/20 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-red-800/20 to-rose-800/20 rounded-full blur-3xl"></div>
            </div>
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI gdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTIwIDIwVjBINHYxNnYxNkgwdjIwaDIwdi0xNmgxNnYtMTZIMjB6IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')]"></div>
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight">
                  <span className="bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">
                    {t.alumniTitle}
                  </span>
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-rose-700 mx-auto rounded-full"></div>
              </div>
              <p className="text-slate-300/90 text-lg md:text-xl text-center max-w-4xl mx-auto mb-16 leading-relaxed">
                {t.alumniDesc}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="group">
                    <div className="h-full bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 p-8 rounded-xl text-center hover:border-rose-600/30 transition-all duration-500 hover:shadow-xl hover:shadow-rose-900/10">
                      <img
                        src={`/placeholder.svg?height=100&width=100&text=Alumni+${i}`}
                        alt={`Alumni ${i}`}
                        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-amber-500 group-hover:scale-105 transition-transform duration-300"
                      />
                      <h3 className="text-xl font-bold text-white mb-2">
                        Alumni Name {i}
                      </h3>
                      <p className="text-amber-400 font-semibold">
                        Class of 20{20 + i}
                      </p>
                      <p className="text-slate-400 text-sm mt-2">
                        Leading {i % 2 === 0 ? "Tech Company" : "Non-Profit"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Career Services */}
          <section className="py-24 px-4 relative bg-black overflow-hidden">
            {/* Lined Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Dark overlay that preserves background elements */}
              <div className="absolute inset-0 bg-black/90"></div>

              {/* Extreme Top Edge Blur */}
              <div
                className="absolute top-0 left-0 right-0 h-[100px] 
                bg-gradient-to-b from-red-900/70 to-transparent 
                blur-[100px] opacity-80"
              ></div>

              {/* Extreme Bottom Edge Blur */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[100px] 
                bg-gradient-to-t from-amber-900/60 to-transparent 
                blur-[120px] opacity-90"
              ></div>

              {/* Tri-Lines (more visible against dark bg) */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-[linear-gradient(20deg,transparent_64%,#ef4444_64%,#ef4444_66%,transparent_66%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(140deg,transparent_64%,#4b5563_64%,#4b5563_66%,transparent_66%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(260deg,transparent_64%,#fdba74_64%,#fdba74_66%,transparent_66%)]"></div>
              </div>
            </div>

            {/* Animated Lion Icon */}
            <div className="absolute top-1/4 right-1/4 w-20 h-20 opacity-10 animate-pop-in-float z-0">
              <img
                src="/src/assets/bridge-logo.jpg"
                alt="Lion Icon"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-500 to-pink-600 mb-6 uppercase">
                  {t.careerServicesTitle}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-red-800 to-pink-900 mx-auto"></div>
              </div>

              <p className="text-slate-300 text-xl text-center max-w-3xl mx-auto mb-12">
                {t.careerServicesDesc}
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-800 rounded-lg p-8 text-center hover:border-slate-700 transition-all duration-300 hover:bg-slate-900">
                  <h3 className="text-3xl font-bold text-white mb-4 uppercase">
                    Internship Opportunities
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Gain real-world experience through our extensive network of
                    industry partners.
                  </p>
                </div>

                <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-800 rounded-lg p-8 text-center hover:border-slate-700 transition-all duration-300 hover:bg-slate-900">
                  <h3 className="text-3xl font-bold text-white mb-4 uppercase">
                    Job Placement Assistance
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Support with resume building, interview preparation, and
                    connecting with employers.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Events & Workshops */}
          <section className="py-28 px-4 bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-sm relative overflow-hidden">
            {/* Background gradient elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-red-900/30 to-rose-900/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-rose-900/30 to-red-900/20 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-red-800/20 to-rose-800/20 rounded-full blur-3xl"></div>
            </div>
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTIwIDIwVjBINHYxNnYxNkgwdjIwaDIwdi0xNmgxNnYtMTZIMjB6IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')]"></div>
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight">
                  <span className="bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">
                    {t.eventsTitle}
                  </span>
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-rose-700 mx-auto rounded-full"></div>
              </div>
              <p className="text-slate-300/90 text-lg md:text-xl text-center max-w-4xl mx-auto mb-16 leading-relaxed">
                {t.eventsDesc}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="group">
                    <div className="h-full bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-rose-600/30 transition-all duration-500 hover:shadow-xl hover:shadow-rose-900/10">
                      <h3 className="text-2xl font-bold text-white mb-4 uppercase">
                        Event Title {i}
                      </h3>
                      <p className="text-slate-400 mb-2">
                        Date: July {15 + i}, 2025
                      </p>
                      <p className="text-slate-300 leading-relaxed">
                        Join us for an insightful workshop on{" "}
                        {i % 2 === 0 ? "AI in Education" : "Global Leadership"}.
                      </p>
                      <Link
                        to="#"
                        className="inline-flex items-center mt-4 text-red-400 hover:text-red-500 transition-colors uppercase"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* News & Updates */}
          <section className="py-24 px-4 relative overflow-hidden">
            {/* Enhanced Background with Focused Overlay (like Programs) */}
            <div className="absolute inset-0">
              <img
                src="./int.jpg"
                alt="Campus background"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay - darker at edges, lighter in center */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
              {/* Additional center vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.7)_80%)]"></div>
            </div>

            {/* Lion Logo (like Programs) */}
            <div className="absolute bottom-1/4 left-1/4 w-20 h-20 opacity-30 z-0">
              <img
                src="/src/assets/bridge-logo.jpg"
                alt="Lion Icon"
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>

            {/* Content Container - Removed backdrop-blur-sm */}
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-500 to-pink-600 mb-6 uppercase">
                  {t.newsTitle}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-red-800 to-pink-900 mx-auto"></div>
              </div>

              <p className="text-slate-100 text-xl text-center max-w-3xl mx-auto mb-12">
                {t.newsDesc}
              </p>

              {/* News Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="group">
                    <div className="bg-slate-900/80 rounded-lg overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl">
                      {/* Image Container with Focused Overlay */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={`/placeholder.svg?height=200&width=300&text=News+${i}`}
                          alt={`News ${i}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Image-specific overlay (not whole card) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                      </div>

                      {/* Text Content */}
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-2xl font-bold text-white">
                            News Headline {i}
                          </h3>
                          <span className="text-sm text-slate-300 bg-slate-800/80 px-2 py-1 rounded">
                            July {10 + i}, 2025
                          </span>
                        </div>
                        <p className="text-slate-200 mb-4 line-clamp-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                        <Link
                          to="#"
                          className="inline-flex items-center text-rose-400 hover:text-rose-300 font-medium transition-colors"
                        >
                          Read More
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section className="py-28 px-4 bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-sm relative overflow-hidden">
            {/* Background gradient elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-red-900/30 to-rose-900/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-rose-900/30 to-red-900/20 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-red-800/20 to-rose-800/20 rounded-full blur-3xl"></div>
            </div>
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTIwIDIwVjBINHYxNnYxNkgwdjIwaDIwdi0xNmgxNnYtMTZIMjB6IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')]"></div>
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight">
                  <span className="bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">
                    {t.achievementsTitle}
                  </span>
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-rose-700 mx-auto rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    number: "2500+",
                    label: "Graduates",
                    color: "from-red-800 to-rose-900",
                  },
                  {
                    number: "98%",
                    label: "University Acceptance",
                    color: "from-rose-800 to-pink-900",
                  },
                  {
                    number: "50+",
                    label: "Countries Represented",
                    color: "from-pink-800 to-red-900",
                  },
                  {
                    number: "15+",
                    label: "Years of Excellence",
                    color: "from-amber-800 to-red-900",
                  },
                ].map((stat, i) => (
                  <div key={i} className="group">
                    <div className="h-full bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 p-8 rounded-xl text-center hover:border-rose-600/30 transition-all duration-500 hover:shadow-xl hover:shadow-rose-900/10">
                      <div
                        className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {stat.number}
                      </div>
                      <div className="text-slate-300 font-semibold text-lg uppercase">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-24 px-4 relative bg-black overflow-hidden">
            {/* Lined Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Dark overlay that preserves background elements */}
              <div className="absolute inset-0 bg-black/90"></div>

              {/* Extreme Top Edge Blur */}
              <div
                className="absolute top-0 left-0 right-0 h-[100px] 
                bg-gradient-to-b from-red-900/70 to-transparent 
                blur-[100px] opacity-80"
              ></div>

              {/* Extreme Bottom Edge Blur */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[100px] 
                bg-gradient-to-t from-amber-900/60 to-transparent 
                blur-[120px] opacity-90"
              ></div>

              {/* Tri-Lines (more visible against dark bg) */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-[linear-gradient(20deg,transparent_64%,#ef4444_64%,#ef4444_66%,transparent_66%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(140deg,transparent_64%,#4b5563_64%,#4b5563_66%,transparent_66%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(260deg,transparent_64%,#fdba74_64%,#fdba74_66%,transparent_66%)]"></div>
              </div>
            </div>

            {/* Animated Lion Icon */}
            <div className="absolute top-1/3 left-1/4 w-24 h-24 opacity-10 animate-pop-in-float z-0">
              <img
                src="/src/assets/bridge-logo.jpg"
                alt="Lion Icon"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-500 to-pink-600 mb-6 uppercase">
                  {t.testimonialsTitle}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-red-800 to-pink-900 mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="group">
                    <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-800 rounded-lg p-8 hover:border-slate-700 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-rose-900/20">
                      <div className="flex items-center mb-6">
                        <div className="relative">
                          <img
                            src={`/placeholder.svg?height=60&width=60&text=Student+${i}`}
                            alt={`Student ${i}`}
                            className="w-16 h-16 rounded-full mr-4 relative z-10"
                          />
                          <div className="absolute -inset-1 bg-gradient-to-r from-red-800 to-rose-900 rounded-full opacity-75 blur-sm z-0"></div>
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg uppercase">
                            Student Name {i}
                          </h4>
                          <p className="text-red-400 font-semibold uppercase">
                            Class of 2023
                          </p>
                        </div>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        "Bridge International College provided me with excellent
                        education and prepared me for university success. The
                        faculty support was exceptional."
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-28 px-4 bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-sm relative overflow-hidden">
            {/* Background gradient elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-red-900/30 to-rose-900/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-rose-900/30 to-red-900/20 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-red-800/20 to-rose-800/20 rounded-full blur-3xl"></div>
            </div>
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBdPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTIwIDIwVjBINHYxNnYxNkgwdjIwaDIwdi0xNmgxNnYtMTZIMjB6IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')]"></div>
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight">
                  <span className="bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">
                    {t.faqTitle}
                  </span>
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-rose-700 mx-auto rounded-full"></div>
              </div>
              <p className="text-slate-300/90 text-lg md:text-xl text-center max-w-4xl mx-auto mb-16 leading-relaxed">
                {t.faqDesc}
              </p>
              <div className="space-y-6">
                {[
                  {
                    question: "What are the admission requirements?",
                    answer:
                      "Admission requirements vary by program. Please visit our admissions page for detailed information.",
                  },
                  {
                    question:
                      "Do you offer scholarships for international students?",
                    answer:
                      "Yes, we offer a range of scholarships and financial aid options for both domestic and international students.",
                  },
                  {
                    question: "What extracurricular activities are available?",
                    answer:
                      "Our campus offers a wide array of clubs, sports, and cultural activities to enrich student life.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-rose-600/30 transition-all duration-500 hover:shadow-xl hover:shadow-rose-900/10"
                  >
                    <h3 className="text-xl font-bold text-white mb-2 uppercase">
                      {item.question}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-24 px-4 relative overflow-hidden">
            {/* Enhanced Background with Focused Overlay (like Programs) */}
            <div className="absolute inset-0">
              <img
                src="./int.jpg"
                alt="Call to action background"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay - darker at edges, lighter in center */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
              {/* Additional center vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.7)_80%)]"></div>
            </div>

            {/* Content Container - Removed backdrop-blur-sm */}
            <div className="max-w-7xl mx-auto text-center relative z-10">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase drop-shadow-lg">
                {t.ctaTitle}
              </h2>
              <p className="text-slate-300 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
                {t.ctaSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/enquire"
                  className="group relative inline-flex items-center justify-center px-12 py-4 text-lg font-bold text-red-800 transition-all duration-300 bg-transparent border-2 border-red-800 rounded-lg hover:bg-red-800 hover:text-white transform hover:-translate-y-1 hover:shadow-xl hover:shadow-red-800/25"
                >
                  <span className="relative uppercase">{t.applyNow}</span>
                </Link>
                <Link
                  to="/admission"
                  className="group relative inline-flex items-center justify-center px-12 py-4 text-lg font-bold text-red-800 transition-all duration-300 bg-transparent border-2 border-red-800 rounded-lg hover:bg-red-800 hover:text-white transform hover:-translate-y-1 hover:shadow-xl hover:shadow-red-800/25"
                >
                  <span className="relative uppercase">{t.contactUs}</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Animated Red Lines - Bottom */}
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-800 to-transparent animate-line-move-x z-0"></div>
          <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-red-900 to-transparent animate-line-move-x delay-1000 z-0"></div>
        </div>
      </div>
    </div>
  );
}
