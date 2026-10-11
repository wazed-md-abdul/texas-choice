import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { 
  Camera, 
  Scan, 
  Sparkles, 
  Activity, 
  CheckCircle2, 
  ShieldCheck, 
  PhoneCall, 
  Calendar,
  Zap,
  Eye,
  Smile
} from "lucide-react";

export const metadata: Metadata = {
  title: "Advanced Dental Technology | Cove Choice Dental | Copperas Cove, TX",
  description:
    "Discover the advanced dental technology at Cove Choice Dental in Copperas Cove, TX. Learn about our intraoral cameras, digital X-rays, The Wand syringe-free anesthesia, and cavity detection.",
};

const technologies = [
  {
    id: "intraoral-cameras",
    title: "Intraoral Cameras",
    badge: "Patient-Centered Visualization",
    subtitle: "See Exactly What Your Dentist Sees on Chairside Screens",
    description:
      "Obviously, it is very difficult for you to take a detailed look inside your own mouth, which can make it hard to picture what your dentist is talking about when describing oral health concerns. Our high-definition intraoral cameras eliminate the guesswork. The wand captures crystal-clear, magnified pictures of individual teeth and gums, displaying them live on a chairside monitor. This empowers you to co-diagnose problem areas alongside your doctor and make fully informed decisions about your smile.",
    image: "/assets/images/technology-1.jpg",
    alt: "Dentist using high-definition intraoral camera to capture detailed images of teeth",
    features: [
      "Pen-sized handheld wand for effortless comfort",
      "Instant live display on chairside digital monitors",
      "Magnifies hairline cracks, early enamel wear, and hidden decay",
      "Enables transparent co-diagnosis and clear insurance documentation",
    ],
    align: "left",
  },
  {
    id: "digital-xrays",
    title: "All-Digital X-Rays",
    badge: "Safer & Instant Diagnostics",
    subtitle: "Up to 90% Less Radiation with Instant High-Resolution Imaging",
    description:
      "X-rays have long been an essential diagnostic tool for identifying bone loss, hidden cavities between teeth, and root infections. With state-of-the-art digital radiography, traditional darkroom chemical development is a thing of the past. Our digital sensors capture high-resolution images in seconds, projecting them immediately onto computer monitors where they can be zoomed, contrasted, and examined in detail. Best of all, digital X-rays emit up to 90% less radiation than conventional dental film, ensuring maximum safety for children and adults alike.",
    image: "/assets/images/technology-2.jpg",
    alt: "Patient receiving low-radiation digital panoramic x-ray scan comfortably",
    features: [
      "Up to 90% reduction in radiation exposure compared to traditional film",
      "Immediate results with zero wait time for chemical film development",
      "Eco-friendly technology requiring no toxic processing chemicals",
      "Sharper, zoomable digital files easily shared with dental specialists",
    ],
    align: "right",
  },
  {
    id: "the-wand",
    title: "The Wand™ Computerized Anesthesia",
    badge: "Syringe-Free Comfort",
    subtitle: "Gentle, Controlled Single-Tooth Numbing Without Fear",
    description:
      "Anesthesia is essential for keeping dental procedures completely pain-free, but many patients feel intense anxiety when facing traditional dental syringes. The Wand® Single Tooth Anesthesia (STA) System revolutionizes how numbing medicine is administered. Rather than an intimidating needle, The Wand uses a tiny, pen-like applicator connected to a microprocessor that continuously regulates the flow rate and pressure of the anesthesia. The injection happens at a comfortable, soothing velocity below your body's pain threshold, numbing just the single tooth needing treatment without collateral numbness in your tongue or cheek.",
    image: "/assets/images/technology-4.jpg",
    alt: "The Wand STA Single Tooth Anesthesia System by Milestone Scientific",
    features: [
      "Eliminates fear and anxiety caused by large traditional dental syringes",
      "Computer-regulated flow rate stays below the human pain threshold",
      "Numbs only the isolated tooth—no awkward hours of numb cheeks or lips",
      "Faster onset of numbness so your appointment proceeds smoothly",
    ],
    align: "left",
  },
  {
    id: "cavity-detection",
    title: "Advanced Cavity Detection System",
    badge: "Early Micro-Decay Detection",
    subtitle: "Catch Tooth Decay in Its Earliest, Most Treatable Stages",
    description:
      "While visual exams and traditional dental explorers remain fundamental, microscopic cavities can easily hide deep within the grooves and pits of your teeth. Our advanced cavity detection technology utilizes specialized fluorescent wavelengths to identify decay long before it becomes visible to the naked eye or shows on standard X-rays. Catching cavities at the micro-level allows our dentists to perform conservative, minimally invasive treatments, preserving more of your natural tooth structure and preventing costly root canals or crowns down the road.",
    image: "/assets/images/technology-5.jpg",
    alt: "Dental team member using advanced cavity detection system and 3D digital scanner",
    features: [
      "Illuminates microscopic decay beneath enamel surfaces",
      "Completely non-invasive, painless optical wavelength inspection",
      "Preserves healthy natural tooth structure through early intervention",
      "Eliminates subjective guesswork for definitive diagnostic accuracy",
    ],
    align: "right",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Faster Appointments",
    desc: "Digital workflows eliminate manual film processing, impression mess, and lengthy delays.",
  },
  {
    icon: ShieldCheck,
    title: "Safer & Less Radiation",
    desc: "Advanced digital sensors reduce your radiation exposure by up to 90% for complete safety.",
  },
  {
    icon: Smile,
    title: "Pain-Free Comfort",
    desc: "Micro-regulated computerized numbing and gentle ultrasonic scalers reduce procedure stress.",
  },
  {
    icon: Eye,
    title: "Complete Transparency",
    desc: "Chairside HD monitors let you see your teeth and diagnostic scans with total clarity.",
  },
];

export default function AdvancedDentalTechnologyPage() {
  return (
    <>
      <PageBanner
        title={"Advanced Dental Technology – Copperas Cove, TX"}
        subtitle={"State-of-the-Art Precision Meets Superior Patient Comfort"}
        description={
          "At Cove Choice Dental, modern dental technology is not just about fancy equipment—it is about making your visits gentler, faster, and remarkably comfortable. Discover how our digital tools provide accurate diagnostics and peaceful dental experiences."
        }
      />

      <main className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

          {/* Quick Pillars Overview */}
          <section className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#e64b38]">
                Why Technology Matters
              </span>
              <h2 className="text-3xl font-bold text-[#204369]">
                How Advanced Technology Improves Your Care
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Investing in cutting-edge equipment allows our Copperas Cove dental team to deliver higher accuracy, greater comfort, and longer-lasting dental results.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b, idx) => {
                const Icon = b.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between hover:border-[#204369]/30 transition-all"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#204369]/10 text-[#204369] flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#e64b38]" />
                      </div>
                      <h4 className="font-bold text-[#204369] text-base mb-1.5">{b.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Detailed Technology Showcases */}
          <section className="space-y-20">
            {technologies.map((tech) => (
              <div
                key={tech.id}
                id={tech.id}
                className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-3xl border border-slate-200/80 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-5 relative aspect-[4/5] sm:aspect-square w-full rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-100 ${
                    tech.align === "right" ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={tech.image}
                    alt={tech.alt}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-7 space-y-5 ${
                    tech.align === "right" ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e64b38]/10 text-[#e64b38] text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    {tech.badge}
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#204369] tracking-tight">
                      {tech.title}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-[#9c8f6d] mt-1">
                      {tech.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {tech.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100 space-y-2.5">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Key Clinical Advantages:
                    </h5>
                    <div className="grid grid-cols-1 gap-2">
                      {tech.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#e64b38] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Additional Advanced Features Banner */}
          <section className="bg-gradient-to-br from-[#204369] to-[#162f4a] rounded-3xl p-8 sm:p-12 text-white shadow-xl">
            <div className="max-w-3xl mb-8 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#9c8f6d]">
                Comprehensive Infrastructure
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold">
                More Advanced Capabilities in Our Office
              </h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Beyond diagnostic imaging, our entire clinical environment is engineered to guarantee clinical purity, biological safety, and maximum efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <Activity className="w-6 h-6 text-[#9c8f6d] mb-3" />
                <h4 className="font-bold text-lg text-white mb-1.5">Ultrasonic Scalers</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Gentle Cavitron ultrasonic scalers vibrate away tough calculus and stains rapidly with cooling water mists, ensuring a smoother cleaning without scraping.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <ShieldCheck className="w-6 h-6 text-[#9c8f6d] mb-3" />
                <h4 className="font-bold text-lg text-white mb-1.5">HEPA & Aerosol Evacuation</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  High-speed chairside evacuators paired with multi-stage HEPA filtration units actively remove airborne particulate matter, protecting your respiratory wellness.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <Sparkles className="w-6 h-6 text-[#9c8f6d] mb-3" />
                <h4 className="font-bold text-lg text-white mb-1.5">Paperless Charting</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Fully encrypted, digital dental records ensure seamless coordination, fast insurance approvals, and immediate transmission of treatment documentation.
                </p>
              </div>
            </div>
          </section>

          {/* Book Appointment CTA */}
          <section className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#e64b38]">
                Schedule Your Next Visit
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#204369]">
                Experience Modern, High-Tech Dental Care Today
              </h3>
              <p className="text-slate-600 text-sm max-w-xl">
                Call our Copperas Cove team or request an appointment online to see how our dental technology makes every visit comfortable and efficient.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <a
                href="tel:2542388018"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#204369] font-bold text-sm shadow hover:bg-slate-100 transition-colors border border-slate-200"
              >
                <PhoneCall className="w-4 h-4 text-[#e64b38]" />
                (254) 238-8018
              </a>
              <Link
                href="/request-an-appointment"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#e64b38] text-white font-bold text-sm shadow hover:bg-[#d03d2b] transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </Link>
            </div>
          </section>

          {/* More to Explore */}
          <div className="pt-8 border-t border-slate-200 text-center">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
              More to Explore
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/about-us"
                className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:border-[#204369] hover:text-[#204369] font-semibold text-sm transition-all"
              >
                About Our Office
              </Link>
              <Link
                href="/meet-the-dentists"
                className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:border-[#204369] hover:text-[#204369] font-semibold text-sm transition-all"
              >
                Meet the Dentists
              </Link>
              <Link
                href="/tour-our-office"
                className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:border-[#204369] hover:text-[#204369] font-semibold text-sm transition-all"
              >
                Tour Our Office
              </Link>
              <Link
                href="/advanced-safety-protocol"
                className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:border-[#204369] hover:text-[#204369] font-semibold text-sm transition-all"
              >
                COVID-19 Safety Protocol
              </Link>
              <Link
                href="/dental-services"
                className="px-5 py-2.5 rounded-lg bg-[#204369] text-white hover:bg-[#162f4a] font-semibold text-sm transition-all shadow-sm"
              >
                View Our Services
              </Link>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
