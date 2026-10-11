import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Dental Services Copperas Cove, TX | Cove Choice Dental | Family & Cosmetic",
  description:
    "Explore comprehensive dental services in Copperas Cove, TX at Cove Choice Dental. Emergency dentistry, dental implants, dentures, crowns, root canals, and pediatric care.",
};

const serviceHubs = [
  {
    title: "Checkups & Cleanings",
    problem: "I Need a Checkup or Cleaning",
    image: "/assets/images/services-1.jpg",
    mainHref: "/preventive-dentistry",
    subLinks: [
      { label: "Dental Exams & Cleanings", href: "/preventive-dentistry" },
      { label: "Fluoride Treatments", href: "/preventive-dentistry" },
      { label: "Oral Cancer Screenings", href: "/preventive-dentistry" },
    ],
  },
  {
    title: "Children's Dentistry",
    problem: "I Need a Dentist for My Child",
    image: "/assets/images/services-2.jpg",
    mainHref: "/childrens-dentistry",
    subLinks: [
      { label: "Checkups & Cleanings for Kids", href: "/childrens-dental-checkups-and-cleanings" },
      { label: "Dental Sealants", href: "/childrens-dentistry" },
      { label: "Tooth-Colored Fillings", href: "/childrens-tooth-colored-fillings" },
    ],
  },
  {
    title: "Cosmetic Dentistry",
    problem: "I Am Unhappy With My Smile",
    image: "/assets/images/services-3.jpg",
    mainHref: "/cosmetic-dentistry",
    subLinks: [
      { label: "Porcelain Veneers", href: "/veneers" },
      { label: "Zoom Teeth Whitening", href: "/teeth-whitening" },
      { label: "Cosmetic Bonding", href: "/cosmetic-bonding" },
    ],
  },
  {
    title: "Periodontal Care",
    problem: "I Am Concerned About Bleeding Gums",
    image: "/assets/images/services-4.jpg",
    mainHref: "/gum-disease-treatment",
    subLinks: [
      { label: "Scaling & Root Planing", href: "/gum-disease-treatment" },
      { label: "Antibiotic Gum Therapy", href: "/gum-disease-treatment" },
    ],
  },
  {
    title: "Emergency Dentistry",
    problem: "I Am In Pain & Need Help ASAP",
    image: "/assets/images/services-5.jpg",
    mainHref: "/emergency-dentistry",
    highlight: true,
    subLinks: [
      { label: "Same-Day Emergency Visits", href: "/emergency-dentistry" },
      { label: "Gentle Root Canal Therapy", href: "/root-canal-therapy" },
      { label: "Tooth Extractions", href: "/tooth-extractions" },
    ],
  },
  {
    title: "Restorative Dentistry",
    problem: "I Have a Cavity or Broken Tooth",
    image: "/assets/images/services-6.jpg",
    mainHref: "/restorative-dentistry",
    subLinks: [
      { label: "Custom Dental Crowns", href: "/dental-crowns" },
      { label: "Tooth-Colored Fillings", href: "/tooth-colored-fillings" },
      { label: "Restorative Bridges", href: "/dental-bridges" },
    ],
  },
  {
    title: "Tooth Replacement",
    problem: "I Am Missing One or More Teeth",
    image: "/assets/images/services-7.jpg",
    mainHref: "/replace-missing-teeth",
    subLinks: [
      { label: "Permanent Dental Implants", href: "/dental-implants" },
      { label: "Modern Dentures & Partials", href: "/dentures" },
      { label: "All-on-4 Implants", href: "/all-on-4" },
    ],
  },
  {
    title: "Wisdom Teeth Removal",
    problem: "I Need Wisdom Teeth Removed",
    image: "/assets/images/services-9.jpg",
    mainHref: "/wisdom-teeth-removal",
    subLinks: [
      { label: "Wisdom Tooth Extraction", href: "/wisdom-teeth-removal" },
      { label: "Comfort & Sedation Info", href: "/wisdom-teeth-removal" },
    ],
  },
  {
    title: "TMJ & Jaw Therapy",
    problem: "I Have Head, Neck or Jaw Pain",
    image: "/assets/images/services-11.jpg",
    mainHref: "/tmj-therapy",
    subLinks: [
      { label: "TMJ Therapy & Relief", href: "/tmj-therapy" },
      { label: "Occlusal Adjustments", href: "/tmj-therapy" },
    ],
  },
];

export default function DentalServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageBanner
        title="Comprehensive Dental Services"
        subtitle="Cove Choice Dental • Copperas Cove, TX"
        description="Here at Cove Choice Dental, you’re treated like family. Explore our complete range of preventive, cosmetic, restorative, and same-day emergency dental services."
        bgImage="/assets/images/banner-services.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Dental Services" },
        ]}
      />

      <section className="py-10 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceHubs.map((hub) => (
            <div
              key={hub.title}
              className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 hover:shadow-xl flex flex-col justify-between ${
                hub.highlight
                  ? "border-rose-400 ring-2 ring-rose-400/20 shadow-md"
                  : "border-slate-200/80 shadow-sm"
              }`}
            >
              <div>
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                  <img
                    src={hub.image}
                    alt={hub.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0b2545]/85 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full">
                    {hub.problem}
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-[#0b2545] mb-4">
                    {hub.title}
                  </h3>

                  <ul className="space-y-2 text-sm text-slate-600 mb-6">
                    {hub.subLinks.map((sub, idx) => (
                      <li key={idx}>
                        <Link
                          href={sub.href}
                          className="hover:text-teal-700 flex items-center gap-2 group transition-colors"
                        >
                          <span className="text-teal-600 font-bold group-hover:translate-x-0.5 transition-transform">
                            →
                          </span>
                          <span>{sub.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                <Link
                  href={hub.mainHref}
                  className="w-full block text-center py-3 px-4 rounded-xl bg-slate-50 hover:bg-[#0b2545] text-[#0b2545] hover:text-white font-bold text-xs transition-colors border border-slate-200"
                >
                  View Details &amp; Options →
                </Link>
              </div>
            </div>
          ))}

          {/* Quick Schedule Conversion Card */}
          <div className="bg-gradient-to-br from-[#0b2545] to-[#134074] text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-[#9c8f6d] font-bold uppercase tracking-wider text-xs block mb-2">
                Ready to Get Started?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Schedule Your Next Visit
              </h3>
              <p className="text-slate-200 text-sm leading-relaxed mb-6">
                Our friendly staff is happy to answer your insurance questions and find a time that fits your schedule.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="tel:12549876777"
                className="w-full bg-white hover:bg-slate-100 text-[#0b2545] font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow transition-colors text-center"
              >
                Call: (254) 987-6777
              </a>
              <Link
                href="/request-an-appointment"
                className="w-full block bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-3 px-4 rounded-xl text-sm transition-colors text-center"
              >
                Book Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
