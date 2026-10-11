import React from "react";
import Link from "next/link";
import { FileText, HeartHandshake, CreditCard, Check } from "lucide-react";

export default function InsuranceFinancingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-slate-900 via-[#0b2545] to-[#134074] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          {/* Ambient Accent Light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-teal-300 font-bold uppercase tracking-wider text-xs sm:text-sm bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
                Dental Insurance • CareCredit® • Medicaid
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                How We Make High-Quality Dental Care Affordable
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                We believe that finances should never stand in the way of a healthy smile. Our knowledgeable financial coordinators will help you navigate your benefits, maximize insurance claims, and find flexible monthly payment plans.
              </p>

              {/* 3 Pillars Grid */}
              <div className="grid sm:grid-cols-3 gap-6 pt-2">
                <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-teal-400/20 text-teal-300 flex items-center justify-center mb-3">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white text-base mb-1">In-Network PPOs</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    We accept major plans like Delta Dental, Aetna, Humana, and United Concordia.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-teal-400/20 text-teal-300 flex items-center justify-center mb-3">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white text-base mb-1">Medicaid &amp; CHIP</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Helping families and children access vital preventative and restorative care with zero stress.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-teal-400/20 text-teal-300 flex items-center justify-center mb-3">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white text-base mb-1">CareCredit® Plans</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    No-interest and low-interest monthly financing options to fit your family budget.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/dental-insurance"
                  className="bg-teal-500 hover:bg-teal-400 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all"
                >
                  Verify Your Insurance Plan
                </Link>
                <Link
                  href="/medicaid-and-chip"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm px-6 py-3.5 rounded-xl transition-all"
                >
                  Medicaid &amp; CHIP Info
                </Link>
              </div>
            </div>

            {/* Right Image / Insurance Illustration */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
                <img
                  src="/assets/images/index-insurance.jpg"
                  alt="Patient discussing dental insurance options in Copperas Cove"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white text-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                  <Check className="w-5 h-5" />
                </span>
                <div>
                  <span className="block font-bold text-sm text-[#0b2545]">Transparent Pricing</span>
                  <span className="text-xs text-slate-500">Estimates provided in advance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
