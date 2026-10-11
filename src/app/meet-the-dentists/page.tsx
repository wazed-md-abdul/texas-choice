import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import MeetDoctors from "@/components/MeetDoctors";

export const metadata: Metadata = {
  title: "Meet Our Dentists in Copperas Cove, TX | Cove Choice Dental",
  description:
    "Meet our team of licensed dentists in Copperas Cove, TX: Dr. Daood Alvi, Dr. Sileshi Assemu, Dr. Shruti Sharma, and Dr. Simrat Sehmi. Experienced family and emergency dental care.",
};

export default function MeetTheDentistsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageBanner
        title="Meet Our Copperas Cove Dentists"
        subtitle="A Collaborative Team of Caring Clinical Experts"
        description="Why visit a practice with only one provider when you can benefit from a collaborative team of experts? Each of our dentists brings extensive training and advanced education to give your smile the highest level of care under one roof."
        bgImage="/assets/images/banner-services.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about-us" },
          { label: "Meet Our Dentists" },
        ]}
      />

      {/* Main Doctor Grid */}
      <MeetDoctors />

      {/* More to Explore Section */}
      <section className="py-10 sm:py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[#204369] font-bold uppercase tracking-wider text-xs bg-[#f2f1ec] px-3.5 py-1.5 rounded-full border border-[#9c8f6d]/30">
            Learn More About Our Practice
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#204369] mt-3 mb-6">
            Explore Cove Choice Dental
          </h3>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            <Link
              href="/about-us"
              className="bg-slate-100 hover:bg-[#204369] hover:text-white text-slate-800 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all"
            >
              What Sets Us Apart
            </Link>
            <Link
              href="/meet-the-team"
              className="bg-slate-100 hover:bg-[#204369] hover:text-white text-slate-800 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all"
            >
              Meet Dental Staff
            </Link>
            <Link
              href="/tour-our-office"
              className="bg-slate-100 hover:bg-[#204369] hover:text-white text-slate-800 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all"
            >
              Tour Our Office
            </Link>
            <Link
              href="/advanced-safety-protocol"
              className="bg-slate-100 hover:bg-[#204369] hover:text-white text-slate-800 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all"
            >
              Safety Protocols
            </Link>
            <Link
              href="/advanced-dental-technology"
              className="bg-slate-100 hover:bg-[#204369] hover:text-white text-slate-800 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all"
            >
              Dental Technology
            </Link>
            <Link
              href="/dental-services"
              className="bg-[#e64b38] hover:bg-[#c93b2a] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow transition-all"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
