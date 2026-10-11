"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { safetyProtocols, SafetyProtocol } from "./protocols";
import { 
  ShieldCheck, 
  Sparkles, 
  Search, 
  CheckCircle2, 
  PhoneCall, 
  Calendar, 
  ArrowRight,
  Filter
} from "lucide-react";

export default function SafetyProtocolsClient() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "All Protocols (23)" },
    { id: "arrival", label: "Arrival & Reception" },
    { id: "sterilization", label: "Sterilization & Air" },
    { id: "team", label: "Staff PPE & Health" },
    { id: "appointments", label: "Appointments & Visits" },
  ];

  const filteredProtocols = useMemo(() => {
    return safetyProtocols.filter((p) => {
      const matchesTab = activeTab === "all" || p.category === activeTab;
      const matchesSearch =
        searchQuery.trim() === "" ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="py-12 bg-white">
      {/* Inline styles for original SVG stroke & color mapping */}
      <style jsx global>{`
        .covid-svg-container svg {
          width: 100% !important;
          height: 100% !important;
          max-width: 72px;
          max-height: 72px;
          display: block;
        }
        .covid-svg-container .cls-1 {
          stroke: #252525 !important;
          stroke-miterlimit: 10;
          stroke-width: 0.75px !important;
          fill: none !important;
        }
        .covid-svg-container .cls-2,
        .covid-svg-container .cls-3,
        .covid-svg-container .cls-4 {
          stroke: #e64b38 !important;
          stroke-miterlimit: 10;
          stroke-width: 0.75px !important;
          fill: none !important;
        }
        .covid-svg-container .filler {
          fill: #ffffff !important;
        }
        .covid-svg-container .thinner .cls-1 {
          stroke-width: 0.25px !important;
          fill: #252525 !important;
        }
        .covid-svg-container .thinner .cls-2 {
          stroke-width: 0.25px !important;
          fill: #e64b38 !important;
        }
        .covid-svg-container .thinner .cls-2,
        .covid-svg-container .thinner .cls-3 {
          stroke-width: 0.5px !important;
        }
        .covid-svg-container .stroker .cls-2,
        .covid-svg-container .stroker .cls-3 {
          stroke-width: 0.4px !important;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Reassurance Banner */}
        <div className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-6 sm:p-8 mb-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#e64b38]/10 text-[#e64b38] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[#204369] text-base">CDC & ADA Compliant</h4>
                <p className="text-xs text-slate-500">Exceeding state & federal dental safety standards</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
              <div className="w-12 h-12 rounded-xl bg-[#204369]/10 text-[#204369] flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[#204369] text-base">Hospital-Grade Sterilization</h4>
                <p className="text-xs text-slate-500">Medical autoclaves & HEPA air filtration in each operatory</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
              <div className="w-12 h-12 rounded-xl bg-[#9c8f6d]/15 text-[#9c8f6d] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[#204369] text-base">100% Team Protection</h4>
                <p className="text-xs text-slate-500">N95 & ASTM Level 3 double masking and daily screenings</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Search Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === cat.id
                    ? "bg-[#204369] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search safety protocols..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#e64b38] focus:bg-white transition-all text-slate-800 placeholder-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6 font-medium uppercase tracking-wider">
          <span>Showing {filteredProtocols.length} of {safetyProtocols.length} Safety Protocols</span>
          {searchQuery && <span>Filtering by: &ldquo;{searchQuery}&rdquo;</span>}
        </div>

        {/* Protocols Grid / List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
          {filteredProtocols.map((protocol) => (
            <div
              key={protocol.id}
              className="flex items-start gap-5 sm:gap-6 group p-4 rounded-xl transition-colors hover:bg-slate-50/80"
            >
              {/* Red-Bordered Square Icon Box */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 border-2 border-[#e64b38] bg-white flex items-center justify-center p-3 shadow-sm group-hover:shadow-md transition-all">
                <div
                  className="covid-svg-container w-full h-full flex items-center justify-center"
                  dangerouslySetInnerHTML={{ __html: protocol.svg }}
                />
              </div>

              {/* Text Description */}
              <div className="flex-1 min-w-0 pt-0.5">
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-[#e64b38] leading-tight">
                  {protocol.title}
                </h3>
                <div className="w-12 h-0.5 bg-[#e64b38] mt-2 mb-2.5" />
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                  {protocol.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredProtocols.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <p className="text-slate-600 font-medium">No safety protocols found matching your criteria.</p>
            <button
              onClick={() => {
                setActiveTab("all");
                setSearchQuery("");
              }}
              className="mt-3 text-[#e64b38] hover:underline font-semibold text-sm"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Bottom CTA / Reassurance Box */}
        <div className="mt-16 bg-gradient-to-br from-[#204369] to-[#162f4a] rounded-2xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9c8f6d] block mb-2">
              Your Peace of Mind Matters
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              Have Questions About Our Safety Standards?
            </h3>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              We welcome you to contact our clinical team prior to your visit. We will gladly walk you through any step of your appointment or arrange car check-in.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              href="tel:2542388018"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#204369] font-bold text-sm shadow hover:bg-slate-100 transition-colors"
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
        </div>

        {/* More to Explore Section */}
        <div className="mt-16 pt-12 border-t border-slate-200 text-center">
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
              href="/meet-the-team"
              className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:border-[#204369] hover:text-[#204369] font-semibold text-sm transition-all"
            >
              Meet the Team
            </Link>
            <Link
              href="/tour-our-office"
              className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:border-[#204369] hover:text-[#204369] font-semibold text-sm transition-all"
            >
              Tour Our Dental Office
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
    </div>
  );
}
