"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, AlertCircle } from "lucide-react";

interface ServiceItem {
  id: string;
  category: "all" | "emergency" | "restorative" | "cosmetic" | "family";
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href: string;
  badge: string;
  features: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: "emergency",
    category: "emergency",
    title: "Emergency Dentistry",
    subtitle: "Same-Day Toothache & Injury Care",
    description:
      "Struggling with severe tooth pain, a knocked-out tooth, or broken restoration? Our team prioritizes same-day emergency visits to relieve pain fast.",
    image: "/assets/images/banner-emergency.jpg",
    href: "/emergency-dentistry",
    badge: "Urgent Same-Day",
    features: ["Instant Pain Relief", "Walk-Ins Welcome", "$65 Emergency Special"],
  },
  {
    id: "implants",
    category: "restorative",
    title: "Dental Implants",
    subtitle: "Permanent Tooth Replacement",
    description:
      "The gold standard for replacing missing teeth. Implants fuse with the jawbone to look, function, and feel completely natural for a lifetime.",
    image: "/assets/images/implants-1.jpg",
    href: "/dental-implants",
    badge: "Permanent Solution",
    features: ["Single & Multiple Teeth", "All-on-4 Available", "Natural Appearance"],
  },
  {
    id: "family",
    category: "family",
    title: "Family & Preventive Care",
    subtitle: "Gentle Checkups & Cleanings",
    description:
      "Comprehensive digital exams, gentle hygiene cleanings, digital X-rays, and cavity prevention for children, adults, and seniors alike.",
    image: "/assets/images/preventive-1.jpg",
    href: "/preventive-dentistry",
    badge: "Routine Wellness",
    features: ["Cavity Prevention", "Gum Health Monitoring", "Oral Cancer Screening"],
  },
  {
    id: "dentures",
    category: "restorative",
    title: "Dentures & Partials",
    subtitle: "Custom-Fitted Smile Restoration",
    description:
      "Regain the ability to eat your favorite foods and smile with confidence with our modern, comfortable full and partial denture options.",
    image: "/assets/images/dentures-1.jpg",
    href: "/dentures",
    badge: "Comfort Fit",
    features: ["Custom Crafting", "Implant-Retained Dentures", "Immediate Replacements"],
  },
  {
    id: "cosmetic",
    category: "cosmetic",
    title: "Cosmetic Dentistry",
    subtitle: "Transform Your Smile Aesthetics",
    description:
      "From dazzling in-office Zoom whitening to porcelain veneers and cosmetic bonding, we help you achieve the confident smile of your dreams.",
    image: "/assets/images/cosmetic-1.jpg",
    href: "/cosmetic-dentistry",
    badge: "Aesthetics",
    features: ["Zoom Whitening", "Porcelain Veneers", "Smile Consultations"],
  },
  {
    id: "pediatric",
    category: "family",
    title: "Children's Dentistry",
    subtitle: "Fun & Fear-Free Pediatric Visits",
    description:
      "We create a warm, welcoming environment for your little ones, ensuring their early dental visits build positive lifelong oral hygiene habits.",
    image: "/assets/images/children-1.jpg",
    href: "/childrens-dentistry",
    badge: "Ages 1 - 18",
    features: ["Fluoride & Sealants", "Tooth-Colored Fillings", "$85 Child Special"],
  },
  {
    id: "crowns",
    category: "restorative",
    title: "Dental Crowns & Bridges",
    subtitle: "Durable Tooth Protection",
    description:
      "Protect severely cracked, worn, or decayed teeth with natural-looking porcelain crowns that seamlessly match your surrounding teeth.",
    image: "/assets/images/dental-crowns-1.jpg",
    href: "/dental-crowns",
    badge: "Tooth Repair",
    features: ["Natural Tooth Shade", "High Strength Porcelain", "Same-Day Temporary"],
  },
  {
    id: "root-canal",
    category: "emergency",
    title: "Root Canal Therapy",
    subtitle: "Save Infected Natural Teeth",
    description:
      "Root canals relieve intense tooth pain by clearing deep infection from inside the tooth, preserving your natural smile and stopping infection.",
    image: "/assets/images/root-canal-1.jpg",
    href: "/root-canal-therapy",
    badge: "Pain Relieving",
    features: ["Painless Anesthesia", "Save Natural Teeth", "Prevents Extractions"],
  },
];

export default function HomeServicesSlider() {
  const [filter, setFilter] = useState<string>("all");

  const filteredServices =
    filter === "all"
      ? servicesData
      : servicesData.filter((s) => s.category === filter);

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-teal-700 font-bold uppercase tracking-wider text-xs sm:text-sm bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
              Comprehensive Dental Treatments
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] mt-3 mb-3 tracking-tight">
              Quality Dental Services Under One Roof
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Whether you need urgent toothache relief, a routine cleaning, or a complete smile reconstruction, our experienced Copperas Cove team has you covered.
            </p>
          </div>

          <Link
            href="/dental-services"
            className="inline-flex items-center gap-2 bg-[#0b2545] hover:bg-[#134074] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow transition-all self-start md:self-auto shrink-0"
          >
            <span>Explore All 20+ Services</span>
            <span>→</span>
          </Link>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {[
            { id: "all", label: "All Treatments" },
            { id: "emergency", label: "Emergencies" },
            { id: "family", label: "Family & Pediatric" },
            { id: "restorative", label: "Implants & Restorative" },
            { id: "cosmetic", label: "Cosmetic & Whitening" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                filter === tab.id
                  ? "bg-[#0b2545] text-white shadow-md"
                  : "bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredServices.map((svc) => (
            <div
              key={svc.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Service Card Image */}
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[#0b2545] text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                    {svc.id === "emergency" && <AlertCircle className="w-3.5 h-3.5 text-rose-600" />}
                    <span>{svc.badge}</span>
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0b2545] group-hover:text-teal-700 transition-colors mb-1">
                    {svc.title}
                  </h3>
                  <p className="text-xs font-semibold text-teal-700 mb-3">
                    {svc.subtitle}
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {svc.description}
                  </p>

                  <ul className="space-y-1.5 mb-2 text-xs text-slate-500 border-t border-slate-100 pt-3">
                    {svc.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <Link
                  href={svc.href}
                  className="w-full block text-center py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-[#0b2545] text-[#0b2545] group-hover:text-white font-bold text-xs transition-colors border border-slate-200 group-hover:border-[#0b2545]"
                >
                  Learn More About {svc.title} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
