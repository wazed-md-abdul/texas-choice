"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import CouponModal, { CouponItem } from "@/components/CouponModal";
import { Star } from "lucide-react";

const couponsData: CouponItem[] = [
  {
    id: "cpn1",
    img: "/assets/images/cpn-np.png",
    title: "$100 New Dental Patient Special",
    subtitle: "Includes Comprehensive Exam & X-Rays",
    price: "$100",
    notes: [
      "Free Zoom Teeth Whitening Pen with New Patient Visit**",
      "*For patients without dental insurance",
    ],
    subject: "New Dental Patient Special",
  },
  {
    id: "cpn2",
    img: "/assets/images/cpn-emer.png",
    title: "$65 Limited Dental Emergency Visit",
    subtitle: "Includes Emergency Exam & Diagnostic X-Ray",
    price: "$65",
    notes: ["Same-day emergency tooth pain relief"],
    subject: "Emergency Visit Special",
  },
  {
    id: "cpn3",
    img: "/assets/images/cpn-child.png",
    title: "$85 Children's Visit (13 & Under)",
    subtitle: "Includes Exam, Cleaning & X-Rays",
    price: "$85",
    subject: "New Child Patient special",
  },
  {
    id: "cpn4",
    img: "/assets/images/cpn-teen.png",
    title: "$95 Teen Visit (13 - 18)",
    subtitle: "Includes Exam, Cleaning & X-Rays",
    price: "$95",
    subject: "New Teen Patient special",
  },
];

const heroBackgrounds = [
  "/assets/images/index-banner-1.jpg",
  "/assets/images/index-banner-2.jpg",
  "/assets/images/index-banner-3a.jpg",
  "/assets/images/index-banner-4.jpg",
];

export default function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCoupon, setSelectedCoupon] = useState<CouponItem | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBackgrounds.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative min-h-[640px] lg:min-h-[720px] bg-slate-900 text-white overflow-hidden flex items-center">
        {/* Background Slideshow with high visibility */}
        {heroBackgrounds.map((bg, idx) => (
          <div
            key={bg}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              currentSlide === idx ? "opacity-90 scale-100" : "opacity-0 scale-105"
            } transform transition-transform duration-10000`}
            style={{ backgroundImage: `url(${bg})` }}
          />
        ))}

        {/* Subtle, soft contrast layer - keeps photo vivid while ensuring text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/50 to-slate-900/30 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-medium">
                <span className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </span>
                <span className="text-slate-200">
                  <strong>4.9 Rating</strong> from 1,200+ Patient Reviews
                </span>
                <span className="hidden sm:inline text-teal-300 font-semibold">• Copperas Cove, TX</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] drop-shadow-md">
                Trustworthy Dental Care That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-300 to-teal-200">
                  Inspires Healthy Smiles
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-100 max-w-xl leading-relaxed drop-shadow-sm font-medium">
                Welcome to Cove Choice Dental. Our experienced dentists combine personalized compassion with state-of-the-art technology to give your whole family healthy, beautiful smiles that last a lifetime.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/request-an-appointment"
                  className="bg-teal-500 hover:bg-teal-400 text-white font-bold text-base px-7 py-4 rounded-xl shadow-lg hover:shadow-teal-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2.5"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Request Appointment</span>
                </Link>

                <a
                  href="tel:12549876777"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold text-base px-6 py-4 rounded-xl backdrop-blur-md transition-all flex items-center gap-2.5"
                >
                  <svg className="w-5 h-5 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call (254) 987-6777</span>
                </a>
              </div>

              {/* Emergency Callout */}
              <div className="pt-2">
                <Link
                  href="/emergency-dentistry"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm text-rose-300 hover:text-rose-200 transition-colors bg-rose-500/15 border border-rose-500/30 px-3.5 py-1.5 rounded-lg"
                >
                  <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
                  <strong>Dental Emergency?</strong> Same-day emergency appointments are available!
                </Link>
              </div>

              {/* 4 Trust Counters */}
              <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-left">
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white">Same-Day</span>
                  <span className="text-xs text-slate-300 font-medium">Emergency Care</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white">Medicaid</span>
                  <span className="text-xs text-slate-300 font-medium">&amp; Major PPOs</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white">4 Expert</span>
                  <span className="text-xs text-slate-300 font-medium">Licensed Dentists</span>
                </div>
                <div>
                  <span className="flex items-center gap-1 text-2xl sm:text-3xl font-extrabold text-white">
                    4.9 <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  </span>
                  <span className="text-xs text-slate-300 font-medium">Top Rated Office</span>
                </div>
              </div>
            </div>

            {/* Right Specials Card Deck */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-8 rounded-3xl shadow-2xl">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/15">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                      Limited Time Offers
                    </span>
                    <h3 className="text-xl font-bold text-white">Patient Specials</h3>
                  </div>
                  <span className="px-3 py-1 bg-amber-400/20 text-amber-300 border border-amber-300/30 rounded-full text-xs font-semibold">
                    Instant Voucher
                  </span>
                </div>

                <div className="space-y-3">
                  {couponsData.map((cpn) => (
                    <div
                      key={cpn.id}
                      onClick={() => setSelectedCoupon(cpn)}
                      className="group cursor-pointer bg-white/10 hover:bg-white/20 border border-white/15 hover:border-teal-400/60 p-4 rounded-2xl transition-all transform hover:-translate-y-0.5 duration-200 flex items-center justify-between"
                    >
                      <div className="space-y-0.5 pr-2">
                        <div className="flex items-center gap-2">
                          <span className="text-teal-300 font-extrabold text-base sm:text-lg">
                            {cpn.price}
                          </span>
                          <h4 className="text-sm font-bold text-white group-hover:text-teal-200 transition-colors">
                            {cpn.title.replace(/\$\d+\s*/, "")}
                          </h4>
                        </div>
                        <p className="text-xs text-slate-300">{cpn.subtitle}</p>
                      </div>
                      <button
                        type="button"
                        className="shrink-0 bg-teal-500 group-hover:bg-teal-400 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition-colors shadow"
                      >
                        Claim
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-slate-300">
                  <span>*No insurance needed for specials</span>
                  <Link href="/offers-promotions" className="text-teal-300 hover:text-teal-200 font-semibold">
                    All Promotions →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Coupon Modal */}
      <CouponModal
        coupon={selectedCoupon}
        onClose={() => setSelectedCoupon(null)}
      />
    </>
  );
}
