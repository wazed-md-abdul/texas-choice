"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  Sparkles,
  Smile,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Calendar,
} from "lucide-react";

interface FeaturedService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href: string;
  badge: string;
  badgeColor: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
}

const fourPillarServices: FeaturedService[] = [
  {
    id: "emergency",
    title: "Emergency Dentistry",
    subtitle: "Same-Day Toothache & Urgent Injury Care",
    description:
      "Struggling with severe tooth pain, a broken crown, or sudden dental trauma? We prioritize same-day appointments to diagnose and eliminate pain fast.",
    image: "/assets/images/banner-emergency.jpg",
    href: "/emergency-dentistry",
    badge: "Urgent Same-Day",
    badgeColor: "bg-[#e64b38]",
    icon: AlertCircle,
    features: [
      "Immediate Pain Relief & Diagnosis",
      "Walk-Ins & Emergency Calls Welcome",
      "$65 Emergency Diagnostic Exam Special",
    ],
  },
  {
    id: "implants",
    title: "Dental Implants",
    subtitle: "Permanent Lifetime Tooth Replacement",
    description:
      "The gold standard for missing teeth. Titanium posts integrate directly with the jawbone to restore complete chewing power, aesthetics, and jaw health.",
    image: "/assets/images/implants-1.jpg",
    href: "/dental-implants",
    badge: "Permanent Solution",
    badgeColor: "bg-[#204369]",
    icon: ShieldCheck,
    features: [
      "Single Tooth, Bridges & All-on-4®",
      "Prevents Bone Loss & Premature Aging",
      "Natural Look, Feel & Bite Strength",
    ],
  },
  {
    id: "family",
    title: "Family & Preventive Care",
    subtitle: "Gentle Checkups, Cleanings & Kids Care",
    description:
      "Comprehensive digital wellness exams, gentle ultrasonic cleanings, and proactive cavity defense for infants, teenagers, adults, and seniors alike.",
    image: "/assets/images/preventive-1.jpg",
    href: "/preventive-dentistry",
    badge: "Routine Wellness",
    badgeColor: "bg-[#9c8f6d]",
    icon: Smile,
    features: [
      "Low-Radiation Digital Diagnostic Imaging",
      "Gentle Pediatric & Senior Dental Visits",
      "Cavity Sealants & Fluoride Protection",
    ],
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    subtitle: "Smile Makeovers, Veneers & Whitening",
    description:
      "From in-office professional Zoom! teeth whitening to handcrafted porcelain veneers and cosmetic bonding, achieve the brilliant smile you deserve.",
    image: "/assets/images/cosmetic-1.jpg",
    href: "/cosmetic-dentistry",
    badge: "Aesthetics",
    badgeColor: "bg-[#3a97bb]",
    icon: Sparkles,
    features: [
      "Zoom!® In-Office & Take-Home Whitening",
      "Custom Handcrafted Porcelain Veneers",
      "Aesthetic Smile Design Consultations",
    ],
  },
];

export default function HomeServicesSlider() {
  const [activeId, setActiveId] = useState<string>("emergency");

  return (
    <section className="py-12 sm:py-16 bg-[#f2f1ec] relative overflow-hidden text-slate-800">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#9c8f6d]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#204369]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9c8f6d] block mb-2">
              Comprehensive Dental Treatments
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#204369] tracking-tight">
              Quality Dental Services <span className="text-[#e64b38]">Under One Roof</span>
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg leading-relaxed">
              Whether you need urgent emergency relief, permanent tooth restoration, or routine family cleanings, our 4 licensed dentists provide complete care with gentle precision.
            </p>
          </div>

          <Link
            href="/dental-services"
            className="inline-flex items-center gap-2 bg-[#204369] hover:bg-[#16304c] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow transition-all self-start md:self-auto shrink-0"
          >
            <span>Explore All 20+ Dental Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* =========================================================================
            DESKTOP INTERACTIVE HORIZONTAL EXPANDING SHOWCASE (>= lg)
            ========================================================================= */}
        <div className="hidden lg:flex gap-4 h-[580px] w-full">
          {fourPillarServices.map((service) => {
            const isActive = activeId === service.id;
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveId(service.id)}
                onClick={() => setActiveId(service.id)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out border shadow-lg ${
                  isActive
                    ? "flex-[3.2] border-[#204369]/30 shadow-2xl"
                    : "flex-[1] border-white/20 hover:border-[#9c8f6d]/60 opacity-90 hover:opacity-100"
                }`}
              >
                {/* Full-Bleed High-Res Background Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                />

                {/* Overlays */}
                {isActive ? (
                  /* Active Gradient: leaves top-left subtle, deepens toward bottom and right for rich legibility */
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1d2f]/95 via-[#0e1d2f]/70 to-black/20" />
                ) : (
                  /* Collapsed Dark Tint Overlay */
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1d2f]/90 via-[#0e1d2f]/60 to-black/30 group-hover:bg-[#0e1d2f]/50 transition-colors" />
                )}

                {/* ==================== COLLAPSED STATE CONTENT ==================== */}
                {!isActive && (
                  <div className="relative h-full flex flex-col justify-between p-6 z-10">
                    {/* Top Icon Badge */}
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-md">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Collapsed Bottom Label */}
                    <div className="space-y-2">
                      <span className={`text-[10px] font-extrabold uppercase tracking-wider text-white px-2.5 py-1 rounded-full inline-block ${service.badgeColor}`}>
                        {service.badge}
                      </span>
                      <h3 className="text-xl font-extrabold text-white leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs text-[#9c8f6d] font-semibold flex items-center gap-1">
                        <span>Hover to explore</span>
                        <ArrowRight className="w-3 h-3" />
                      </p>
                    </div>
                  </div>
                )}

                {/* ==================== EXPANDED STATE CONTENT ==================== */}
                {isActive && (
                  <div className="relative h-full flex flex-col justify-between p-8 sm:p-10 z-10 animate-fadeIn">
                    {/* Top Row: Category Badge + Icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold uppercase tracking-wider text-white px-3.5 py-1 rounded-full shadow ${service.badgeColor}`}>
                          {service.badge}
                        </span>
                        <span className="text-xs font-semibold text-slate-300">
                          {service.subtitle}
                        </span>
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-md">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Bottom Area: Title, Description, Checkmarks, Buttons */}
                    <div className="space-y-5 max-w-2xl">
                      <div>
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-slate-200 text-sm sm:text-base leading-relaxed mt-2">
                          {service.description}
                        </p>
                      </div>

                      {/* 3 Key Benefits */}
                      <div className="grid sm:grid-cols-3 gap-2.5 pt-1">
                        {service.features.map((feature, fIdx) => (
                          <div
                            key={fIdx}
                            className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/15 flex items-start gap-2 text-xs text-white"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#3a97bb] shrink-0 mt-0.5" />
                            <span className="font-medium leading-snug">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-4 pt-2">
                        <Link
                          href={service.href}
                          className="bg-[#e64b38] hover:bg-[#c93b2a] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg transition-all flex items-center gap-2"
                        >
                          <span>Explore Treatment</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                          href="/request-an-appointment"
                          className="bg-white/15 hover:bg-white/25 text-white border border-white/25 font-bold text-sm px-5 py-3 rounded-xl transition-all flex items-center gap-2 backdrop-blur-sm"
                        >
                          <Calendar className="w-4 h-4" />
                          <span>Book Visit</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* =========================================================================
            MOBILE & TABLET VERTICAL SMOOTH ACCORDION (< lg)
            ========================================================================= */}
        <div className="lg:hidden space-y-4">
          {fourPillarServices.map((service) => {
            const isExpanded = activeId === service.id;
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                onClick={() => setActiveId(isExpanded ? "" : service.id)}
                className={`relative rounded-2xl overflow-hidden transition-all duration-400 ease-out border shadow-md cursor-pointer ${
                  isExpanded
                    ? "border-[#204369] shadow-xl"
                    : "border-slate-200 bg-white"
                }`}
              >
                {/* Accordion Header / Compact Strip */}
                <div className="relative h-28 overflow-hidden flex items-center justify-between p-5">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0e1d2f]/95 via-[#0e1d2f]/80 to-[#0e1d2f]/70" />

                  <div className="relative z-10 flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/20">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className={`text-[10px] font-extrabold uppercase tracking-wider text-white px-2 py-0.5 rounded-full inline-block mb-0.5 ${service.badgeColor}`}>
                        {service.badge}
                      </span>
                      <h3 className="text-lg font-bold text-white leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <span className="relative z-10 text-white font-bold text-xl px-2">
                    {isExpanded ? "−" : "+"}
                  </span>
                </div>

                {/* Expanded Body on Mobile */}
                {isExpanded && (
                  <div className="p-5 bg-white space-y-4 border-t border-slate-100 animate-fadeIn">
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#e64b38] shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <Link
                        href={service.href}
                        className="flex-1 bg-[#204369] hover:bg-[#16304c] text-white text-center font-bold text-xs py-3 px-4 rounded-xl shadow"
                      >
                        Learn More
                      </Link>
                      <Link
                        href="/request-an-appointment"
                        className="flex-1 bg-[#e64b38] hover:bg-[#c93b2a] text-white text-center font-bold text-xs py-3 px-4 rounded-xl shadow"
                      >
                        Book Appointment
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Practice Reassurance Strip */}
        <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-600">
          <div className="flex items-center gap-2 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Accepting New Patients &amp; Same-Day Emergencies</span>
          </div>
          <div className="flex items-center gap-4 font-bold text-[#204369]">
            <span>Medicaid &amp; Major PPOs Accepted</span>
            <span>•</span>
            <Link href="/for-patients" className="hover:text-[#e64b38] underline">
              Flexible CareCredit® Financing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
