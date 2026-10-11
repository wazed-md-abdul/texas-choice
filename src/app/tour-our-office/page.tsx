import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { 
  Sparkles, 
  Tv, 
  Coffee, 
  Wifi, 
  HeartHandshake, 
  ShieldCheck, 
  MapPin, 
  PhoneCall, 
  Calendar,
  Clock,
  CheckCircle,
  Accessibility
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tour Our Dental Office | Cove Choice Dental | Copperas Cove, TX",
  description:
    "Tour Cove Choice Dental in Copperas Cove, TX. Explore our modern reception area, state-of-the-art treatment rooms, sterilization center, and patient comfort amenities.",
};

const officeAreas = [
  {
    title: "Welcoming Reception & Family Lounge",
    subtitle: "Designed for immediate relaxation",
    description:
      "From the moment you step through our doors, you will notice a soothing, calm environment. Our reception area is designed like a comfortable living space with plush seating, warm lighting, and a friendly concierge team ready to greet you by name.",
    image: "/assets/images/index-tour.png",
    alt: "Warm and inviting patient lounge and digital dentistry showcase at Cove Choice Dental",
    highlights: ["Complimentary Beverage Station", "Comfortable Family Seating", "Paperless Check-In Options"],
  },
  {
    title: "Hospital-Grade Sterilization Center",
    subtitle: "Uncompromising clinical safety & purity",
    description:
      "Patient health is our highest priority. Our centrally located sterilization bay is equipped with medical autoclaves, high-heat pressure sterilizers, and biological monitoring systems that exceed CDC and OSHA standards.",
    image: "/assets/images/about-1.jpg",
    alt: "Sterilized clinical instrument bay and autoclaved dental equipment",
    highlights: ["CDC-Approved Heat Sterilization", "Individually Sealed Instrument Packs", "Medical Air Purifiers"],
  },
  {
    title: "Advanced Operatories & Digital Suite",
    subtitle: "High-definition chairside technology",
    description:
      "Our modern treatment suites feature ultra-comfortable ergonomic dental chairs, high-definition intraoral cameras, and chairside digital monitors. You can see your X-rays and 3D digital imaging in real time alongside your dentist.",
    image: "/assets/images/about-4.jpg",
    alt: "Smiling patient in modern dental operatory chair with handheld mirror",
    highlights: ["Ergonomic Memory-Foam Chairs", "Chairside Diagnostic Screens", "Gentle Anesthesia Delivery"],
  },
];

const amenities = [
  {
    icon: Coffee,
    title: "Refreshment Bar",
    desc: "Enjoy fresh gourmet coffee, organic teas, and bottled water while you wait.",
  },
  {
    icon: Tv,
    title: "Ceiling & Chairside TVs",
    desc: "Watch your favorite shows or relaxing nature programming during your treatment.",
  },
  {
    icon: Wifi,
    title: "High-Speed Wi-Fi",
    desc: "Stay connected throughout your visit with complimentary guest broadband.",
  },
  {
    icon: HeartHandshake,
    title: "Gentle Sedation Options",
    desc: "Nitrous oxide (laughing gas) is available to ensure a completely stress-free visit.",
  },
  {
    icon: Accessibility,
    title: "ADA Accessible",
    desc: "Spacious hallways, level entrances, and accommodating treatment rooms for all mobility needs.",
  },
  {
    icon: ShieldCheck,
    title: "Advanced Air Filtration",
    desc: "Continuous hospital-grade HEPA filtration units actively purifying clinical air.",
  },
];

export default function TourOurOfficePage() {
  return (
    <>
      <PageBanner
        title={"Tour Our Dental Office – Copperas Cove, TX"}
        subtitle={"A Welcoming, High-Tech Dental Home Designed for You"}
        description={
          "A dental office should be a place where you feel at home while remaining completely confident in the precision of your care. Take a look inside Cove Choice Dental to explore our modern amenities, pristine clinical rooms, and patient comforts."
        }
      />

      <main className="bg-slate-50/50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Hero Feature Intro */}
          <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/80">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e64b38]/10 text-[#e64b38] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  Your Dental Home in Copperas Cove
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#204369] tracking-tight leading-tight">
                  Modern Comfort Meets Uncompromising Excellence
                </h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  We designed Cove Choice Dental specifically to alleviate the anxieties commonly associated with dental appointments. From warm, inviting decor to state-of-the-art diagnostic technology, every corner of our facility has been thoughtfully curated for you and your family.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4 text-sm font-semibold text-[#204369]">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-[#e64b38]" /> All Ages Welcome
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-[#e64b38]" /> Same-Day Urgent Care
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-[#e64b38]" /> Bilingual Doctors & Staff
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 relative aspect-[16/11] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <Image
                  src="/assets/images/index-tour.png"
                  alt="Family in modern dental waiting lounge with digital dental crown 3D scan display"
                  fill
                  priority
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Office Showcase Sections */}
          <section className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#9c8f6d]">
                Behind the Scenes
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#204369]">
                Explore Our Key Practice Areas
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Discover how our office layout and clinical spaces are designed around safety, precision, and personal comfort.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {officeAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                >
                  <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={area.image}
                      alt={area.alt}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#e64b38]">
                        {area.subtitle}
                      </span>
                      <h3 className="text-xl font-bold text-[#204369] mt-1 mb-2">
                        {area.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {area.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 space-y-2">
                      {area.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle className="w-3.5 h-3.5 text-[#9c8f6d] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Patient Comforts & Amenities */}
          <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#e64b38]">
                Thoughtful Touches
              </span>
              <h2 className="text-3xl font-bold text-[#204369]">
                Patient Amenities for Relaxed Visits
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Going to the dentist should never feel stressful. We offer specialized comfort features to make every appointment a pleasant experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {amenities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:bg-slate-50/80 transition-all flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white text-[#204369] border border-slate-200/80 flex items-center justify-center shrink-0 shadow-sm">
                      <Icon className="w-6 h-6 text-[#e64b38]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#204369] text-base mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* What to Expect at Your First Visit */}
          <section className="bg-[#204369] rounded-3xl p-8 sm:p-12 text-white shadow-xl">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#9c8f6d] block mb-2">
                First Time Visiting Us?
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold">
                What to Expect on Your First Appointment
              </h2>
              <p className="text-slate-200 text-sm sm:text-base mt-2">
                We make your first visit easy, seamless, and completely transparent from start to finish.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                <span className="text-2xl font-black text-[#9c8f6d]">01</span>
                <h4 className="font-bold text-lg text-white mt-2 mb-2">Warm Welcome</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Fast, paperless digital check-in. Our team will verify your insurance and answer any initial questions.
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                <span className="text-2xl font-black text-[#9c8f6d]">02</span>
                <h4 className="font-bold text-lg text-white mt-2 mb-2">Digital Diagnostics</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Low-radiation panoramic X-rays and high-resolution intraoral imaging to inspect every tooth comfortably.
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                <span className="text-2xl font-black text-[#9c8f6d]">03</span>
                <h4 className="font-bold text-lg text-white mt-2 mb-2">Doctor Co-Diagnosis</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Your dentist discusses findings on chairside screens so you see exactly what we see before any treatment.
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                <span className="text-2xl font-black text-[#9c8f6d]">04</span>
                <h4 className="font-bold text-lg text-white mt-2 mb-2">Clear, Honest Plan</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Zero pressure, zero surprises. Transparent pricing and insurance calculations before any procedure starts.
                </p>
              </div>
            </div>
          </section>

          {/* Location & Appointment CTA */}
          <section className="bg-gradient-to-r from-slate-100 to-slate-200/60 rounded-3xl p-8 sm:p-10 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e64b38]">
                <MapPin className="w-4 h-4" /> Copperas Cove, Texas
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#204369]">
                Ready to Experience Cove Choice Dental in Person?
              </h3>
              <p className="text-slate-600 text-sm max-w-xl">
                We accept major PPO insurances, Medicaid, and CHIP, and provide same-day emergency appointments.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <a
                href="tel:2542388018"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#204369] font-bold text-sm shadow hover:bg-slate-50 transition-colors border border-slate-200"
              >
                <PhoneCall className="w-4 h-4 text-[#e64b38]" />
                (254) 238-8018
              </a>
              <Link
                href="/request-an-appointment"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#e64b38] text-white font-bold text-sm shadow hover:bg-[#d03d2b] transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Schedule Appointment
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
                About Us
              </Link>
              <Link
                href="/meet-the-dentists"
                className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:border-[#204369] hover:text-[#204369] font-semibold text-sm transition-all"
              >
                Meet the Dentists
              </Link>
              <Link
                href="/meet-the-team"
                className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:border-[#204369] hover:text-[#204369] font-semibold text-sm transition-all"
              >
                Meet the Team
              </Link>
              <Link
                href="/advanced-safety-protocol"
                className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:border-[#204369] hover:text-[#204369] font-semibold text-sm transition-all"
              >
                COVID-19 Safety Protocol
              </Link>
              <Link
                href="/advanced-dental-technology"
                className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:border-[#204369] hover:text-[#204369] font-semibold text-sm transition-all"
              >
                Advanced Dental Technology
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
