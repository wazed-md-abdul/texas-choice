import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "About Us | Cove Choice Dental | Copperas Cove, TX",
  description:
    "Learn about Cove Choice Dental in Copperas Cove, TX. Our commitment to patient safety, same-day emergency dental care, bilingual team, insurance, and modern technology.",
};

const pillars = [
  {
    id: "safety",
    title: "Committed to Patient Safety",
    subtitle: "Hospital-Grade Sterilization Protocols",
    description:
      "Your health is our utmost priority. We maintain hospital-grade sanitation, rigorous sterilization of all clinical tools, daily staff screenings, and advanced filtration to ensure a clean, safe dental home.",
    image: "/assets/images/about-1.jpg",
    action: { label: "Learn About Safety Protocol", href: "/advanced-safety-protocol" },
  },
  {
    id: "emergency",
    title: "Dental Emergencies Always Welcome",
    subtitle: "Same-Day Tooth Pain Relief",
    description:
      "Whether you are an established patient or calling for the very first time, we leave room in our daily schedule to treat urgent toothaches, knocked-out teeth, and broken crowns immediately.",
    image: "/assets/images/about-2.jpg",
    action: { label: "Emergency Dental Services", href: "/emergency-dentistry" },
  },
  {
    id: "insurance",
    title: "Affordable Care, Insurance & Medicaid",
    subtitle: "Making Dentistry Accessible for Every Family",
    description:
      "We believe everyone deserves access to great oral healthcare. We accept major PPOs, Medicaid, and CHIP, and provide transparent cost estimates before any procedure begins.",
    image: "/assets/images/about-3.jpg",
    action: { label: "Dental Insurance Information", href: "/dental-insurance" },
  },
  {
    id: "technology",
    title: "State-of-the-Art Dentistry",
    subtitle: "High-Definition Digital Precision",
    description:
      "Our office features low-radiation digital X-rays and intraoral cameras, helping you see what our doctors see and making visits faster, more informative, and more comfortable.",
    image: "/assets/images/about-4.jpg",
    action: { label: "See Our Dental Technology", href: "/advanced-dental-technology" },
  },
  {
    id: "bilingual",
    title: "Proudly Bilingual Team",
    subtitle: "¡Se Habla Español!",
    description:
      "Cove Choice Dental is proud to have staff and dentists fluent in both English and Spanish, ensuring clear communication, comfort, and exceptional care for all members of our community.",
    image: "/assets/images/about-5.jpg",
    action: { label: "Meet Our Team", href: "/meet-the-team" },
  },
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageBanner
        title="About Cove Choice Dental"
        subtitle="Your Trusted Home for Superior Family Dentistry"
        description="Our goal is simple: deliver high-quality, comfortable dental care for Copperas Cove and Fort Cavazos families with a personalized touch and genuine compassion."
        bgImage="/assets/images/banner-services.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="space-y-12">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.id}
              className={`bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full lg:w-1/2 aspect-[16/10] rounded-2xl overflow-hidden shadow-md">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full lg:w-1/2 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                  {pillar.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0b2545]">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {pillar.description}
                </p>
                <div className="pt-2">
                  <Link
                    href={pillar.action.href}
                    className="inline-flex items-center gap-2 bg-[#0b2545] hover:bg-[#134074] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow transition-colors"
                  >
                    <span>{pillar.action.label}</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Practice Grid */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 text-center shadow-sm">
          <span className="text-teal-700 font-bold uppercase tracking-wider text-xs bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
            Learn More
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0b2545] mt-3 mb-6">
            Explore More of Cove Choice Dental
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            <Link
              href="/meet-the-dentists"
              className="bg-slate-100 hover:bg-[#0b2545] hover:text-white text-slate-800 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all"
            >
              Meet Your Dentists
            </Link>
            <Link
              href="/meet-the-team"
              className="bg-slate-100 hover:bg-[#0b2545] hover:text-white text-slate-800 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all"
            >
              Meet Dental Team
            </Link>
            <Link
              href="/tour-our-office"
              className="bg-slate-100 hover:bg-[#0b2545] hover:text-white text-slate-800 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all"
            >
              Tour Our Dental Office
            </Link>
            <Link
              href="/dental-services"
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow transition-all"
            >
              Explore Dental Services →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
