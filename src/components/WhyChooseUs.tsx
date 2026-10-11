import React from "react";
import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            What Sets Our Dental Practice <br />
            <span className="text-[#22c55e]">Apart From Others</span>
          </h2>
        </div>

        {/* 3-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {/* Column 1: Top Text Box + Bottom Image */}
          <div className="flex flex-col gap-6 sm:gap-7">
            {/* Top Text Card */}
            <div className="bg-[#F8F7F4] rounded-[2.25rem] p-8 sm:p-9 flex flex-col justify-center flex-1 transition-all duration-300 hover:shadow-md">
              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                Commitment to Safety
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We prioritize patient health through rigorous daily sanitation, hospital-grade sterilization, and advanced PPE protocols without exception.
              </p>
              <div className="pt-4">
                <Link
                  href="/advanced-safety-protocol"
                  className="text-xs font-bold text-[#0b2545] hover:text-emerald-600 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Read Safety Protocols</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Bottom Image Card */}
            <div className="relative rounded-[2.25rem] overflow-hidden aspect-[4/3] flex-1 bg-slate-100 shadow-sm group">
              <img
                src="/assets/images/index-banner-2.jpg"
                alt="Modern, sanitized dental clinic operatory in Copperas Cove"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

          {/* Column 2: Top Image + Bottom Text Box */}
          <div className="flex flex-col gap-6 sm:gap-7">
            {/* Top Image Card */}
            <div className="relative rounded-[2.25rem] overflow-hidden aspect-[4/3] flex-1 bg-slate-100 shadow-sm group">
              <img
                src="/assets/images/index-banner-3a.jpg"
                alt="Happy patient with a healthy, confident smile"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Bottom Text Card */}
            <div className="bg-[#F8F7F4] rounded-[2.25rem] p-8 sm:p-9 flex flex-col justify-center flex-1 transition-all duration-300 hover:shadow-md">
              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                State-of-the-Art Technology
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                From high-definition digital X-rays to handheld intraoral cameras, we use cutting-edge dental technology for faster, gentler, and more accurate treatments.
              </p>
              <div className="pt-4">
                <Link
                  href="/advanced-dental-technology"
                  className="text-xs font-bold text-[#0b2545] hover:text-emerald-600 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Explore Dental Tech</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Column 3: Full Height Vibrant Green Hero Feature Card */}
          <div className="bg-[#22c55e] rounded-[2.25rem] p-8 sm:p-10 flex flex-col justify-between text-[#073017] shadow-lg relative overflow-hidden h-full min-h-[480px]">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#073017] mb-5 leading-snug tracking-tight">
                Gentle &amp; Affordable Care
              </h3>
              <div className="space-y-4 text-[#0a381b] text-sm sm:text-base leading-relaxed font-medium">
                <p>
                  We believe everyone deserves genuinely affordable oral healthcare without financial obstacles. Our office proudly accepts Medicaid, CHIP, major PPO insurances, and CareCredit® financing.
                </p>
                <p>
                  Whether you need emergency same-day pain relief or routine family checkups, our compassionate clinical team partners with you every step of the way in a pressure-free environment.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <Link
                href="/dental-insurance"
                className="bg-black hover:bg-slate-900 text-white font-semibold text-sm px-7 py-3.5 rounded-full inline-flex items-center gap-2 transition-all shadow-md hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Learn More</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
