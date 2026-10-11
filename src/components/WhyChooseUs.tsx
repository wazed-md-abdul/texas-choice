import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  AlertCircle,
  CreditCard,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Phone,
  Calendar,
} from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32 bg-[#f2f1ec]/60 relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#204369]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#e64b38]/5 rounded-full blur-3xl pointer-events-none translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-[#9c8f6d]/30 shadow-xs mb-5">
            <span className="w-2 h-2 rounded-full bg-[#e64b38] animate-pulse" />
            <span className="text-[#204369] font-bold tracking-wider text-xs uppercase">
              The Cove Choice Promise
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#204369] tracking-tight leading-tight mb-5">
            What Sets Our Dental Practice <br className="hidden sm:inline" />
            <span className="text-[#e64b38]">Apart From Others</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From hospital-grade sterilization to same-day pain relief, our four foundational pillars ensure every visit is comfortable, transparent, and tailored to your whole family.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-8 items-stretch">
          {/* Bento Cell 1: Commitment to Safety (col-span-7) */}
          <div className="lg:col-span-7 group relative bg-white rounded-[2.25rem] border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden p-7 sm:p-9 flex flex-col justify-between">
            {/* Subtle Ambient Hover Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#3a97bb]/10 rounded-full blur-3xl group-hover:bg-[#3a97bb]/15 transition-colors pointer-events-none" />

            <div>
              {/* Header: Icon & Badge */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="text-xs font-bold px-3 py-1.5 rounded-full border bg-[#3a97bb]/10 text-[#204369] border-[#3a97bb]/30">
                  Hospital-Grade Protocols
                </span>
                <div className="w-12 h-12 rounded-2xl bg-[#204369]/10 text-[#204369] border border-[#204369]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xs">
                  <ShieldCheck className="w-6 h-6" />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#204369] tracking-tight mb-3 group-hover:text-[#3a97bb] transition-colors">
                Commitment to Safety
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Your family&apos;s health is our utmost priority. We uphold rigorous daily clinical sanitation, hospital-grade autoclave sterilization, and strict infection-control protocols without exception.
              </p>

              {/* Split Content: Highlights + Operatory Image */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center mb-6">
                <ul className="space-y-2.5">
                  <li className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-[#3a97bb]" />
                    <span>Autoclave Sterilization Monitoring</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-[#3a97bb]" />
                    <span>Medical-Grade HEPA Air Purification</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-[#3a97bb]" />
                    <span>Single-Use Sterile Disposables &amp; PPE</span>
                  </li>
                </ul>

                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-xs">
                  <img
                    src="/assets/images/index-banner-2.jpg"
                    alt="Sanitized dental clinic operatory at Cove Choice Dental"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-[11px] font-semibold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                    CDC &amp; OSHA Compliant
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                Pristine Clinical Environment
              </span>
              <Link
                href="/advanced-safety-protocol"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#204369] hover:text-[#e64b38] transition-colors"
              >
                <span>Read Safety Protocols</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Bento Cell 2: Dental Insurance & Medicaid (col-span-5) - Brand Coral Red Hero Card */}
          <div className="lg:col-span-5 bg-[#e64b38] rounded-[2.25rem] p-7 sm:p-9 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-white flex flex-col justify-between relative overflow-hidden">
            <div>
              {/* Header: Icon & Badge */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-white/20 text-white border border-white/25">
                  Affordable Care
                </span>
                <div className="w-12 h-12 rounded-2xl bg-white/20 text-white flex items-center justify-center shadow-xs">
                  <CreditCard className="w-6 h-6" />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                Dental Insurance &amp; Medicaid
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                We believe everyone deserves genuinely affordable oral healthcare without financial barriers. Our office proudly welcomes Texas Medicaid, CHIP, major PPO plans, and flexible financing.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-white">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-white" />
                  <span>Texas Medicaid &amp; CHIP Accepted</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-white">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-white" />
                  <span>In-Network with Top Dental PPO Plans</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-white">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-white" />
                  <span>Flexible 0% CareCredit® Financing</span>
                </li>
              </ul>
            </div>

            {/* Deep Navy Pill Button */}
            <div className="pt-4 border-t border-white/20 flex items-center justify-between">
              <span className="text-xs font-bold text-white/80">
                Transparent Pricing
              </span>
              <Link
                href="/dental-insurance"
                className="bg-[#204369] hover:bg-[#16304c] text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all shadow-md hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Bento Cell 3: Dental Emergencies Welcome (col-span-5) */}
          <div className="lg:col-span-5 group relative bg-white rounded-[2.25rem] border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden p-7 sm:p-9 flex flex-col justify-between">
            {/* Subtle Ambient Hover Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#e64b38]/5 rounded-full blur-3xl group-hover:bg-[#e64b38]/10 transition-colors pointer-events-none" />

            <div>
              {/* Header: Icon & Badge */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="text-xs font-bold px-3 py-1.5 rounded-full border bg-[#e64b38]/10 text-[#e64b38] border-[#e64b38]/20">
                  Same-Day Relief
                </span>
                <div className="w-12 h-12 rounded-2xl bg-[#e64b38]/10 text-[#e64b38] border border-[#e64b38]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xs">
                  <AlertCircle className="w-6 h-6" />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#204369] tracking-tight mb-3 group-hover:text-[#e64b38] transition-colors">
                Dental Emergencies Welcome
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                Struggling with severe tooth pain, a knocked-out tooth, or a broken crown? We reserve dedicated same-day emergency slots to alleviate acute discomfort ASAP.
              </p>

              {/* Embedded Emergency Photo */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/7] bg-slate-100 shadow-xs mb-5">
                <img
                  src="/assets/images/banner-emergency.jpg"
                  alt="Urgent dental care and emergency tooth relief"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-2.5 text-[11px] font-semibold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                  Walk-Ins &amp; Same-Day Calls
                </span>
              </div>

              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-[#e64b38]" />
                  <span>Same-Day Emergency Appointments</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-[#e64b38]" />
                  <span>Immediate Toothache &amp; Swelling Relief</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-[#e64b38]" />
                  <span>Broken Tooth, Chip &amp; Crown Repair</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                Urgent Assistance
              </span>
              <Link
                href="/emergency-dentistry"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#204369] hover:text-[#e64b38] transition-colors"
              >
                <span>Emergency Care</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Bento Cell 4: State-of-the-Art Technology (col-span-7) */}
          <div className="lg:col-span-7 group relative bg-white rounded-[2.25rem] border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden p-7 sm:p-9 flex flex-col justify-between">
            {/* Subtle Ambient Hover Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#9c8f6d]/10 rounded-full blur-3xl group-hover:bg-[#9c8f6d]/15 transition-colors pointer-events-none" />

            <div>
              {/* Header: Icon & Badge */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="text-xs font-bold px-3 py-1.5 rounded-full border bg-[#9c8f6d]/15 text-[#204369] border-[#9c8f6d]/30">
                  Modern Equipment
                </span>
                <div className="w-12 h-12 rounded-2xl bg-[#9c8f6d]/15 text-[#9c8f6d] border border-[#9c8f6d]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xs">
                  <Sparkles className="w-6 h-6" />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#204369] tracking-tight mb-3 group-hover:text-[#9c8f6d] transition-colors">
                State-of-the-Art Technology
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Experience faster, gentler, and more precise dentistry. From ultra-low radiation digital X-rays to handheld intraoral cameras, our modern diagnostics keep treatments comfortable with quicker recovery.
              </p>

              {/* Split Content: Highlights + Tech Image */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center mb-6">
                <ul className="space-y-2.5">
                  <li className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-[#9c8f6d]" />
                    <span>Ultra-Low Dose HD Digital X-Rays</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-[#9c8f6d]" />
                    <span>High-Definition Intraoral Cameras</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-[#9c8f6d]" />
                    <span>Comfortable Digital Treatment Planning</span>
                  </li>
                </ul>

                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-xs">
                  <img
                    src="/assets/images/technology-1.jpg"
                    alt="Advanced digital dental scanner and diagnostics"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-[11px] font-semibold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                    Digital Accuracy
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                Precision &amp; Comfort
              </span>
              <Link
                href="/advanced-dental-technology"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#204369] hover:text-[#9c8f6d] transition-colors"
              >
                <span>Explore Dental Tech</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Practice Action & Reassurance Strip */}
        <div className="mt-14 sm:mt-16 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="max-w-2xl">
            <h4 className="text-lg sm:text-xl font-bold text-[#204369] mb-1">
              Ready to experience modern, family-first dentistry?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              We welcome new patients, walk-in emergencies, Medicaid, CHIP, and all major dental insurance plans.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="tel:12549876777"
              className="inline-flex items-center gap-2 bg-[#f2f1ec] hover:bg-[#e7e5df] text-[#204369] text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition-all"
            >
              <Phone className="w-4 h-4 text-[#e64b38]" />
              <span>Call (254) 987-6777</span>
            </a>
            <Link
              href="/request-an-appointment"
              className="inline-flex items-center gap-2 bg-[#e64b38] hover:bg-[#204369] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

