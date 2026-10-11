"use client";

import React, { useState } from "react";
import PageBanner from "@/components/PageBanner";
import CouponModal, { CouponItem } from "@/components/CouponModal";
import { Phone } from "lucide-react";

const allCoupons: CouponItem[] = [
  {
    id: "np",
    img: "/assets/images/special-icon-laurel.png",
    title: "$100 New Dental Patient Visit",
    subtitle: "Includes Exam & X-Rays",
    price: "$100",
    notes: [
      "Free Zoom Teeth Whitening Pen W/ New Patient Visit**",
      "*For patients without dental insurance",
      "**Whitening pen available for a limited time",
    ],
    subject: "New Dental Patient Special",
  },
  {
    id: "emer",
    img: "/assets/images/special-icon-emergency.png",
    title: "$65 Limited Dental Emergency Visit",
    subtitle: "Includes Exam & X-Rays",
    price: "$65",
    notes: [
      "Same-day toothache pain relief",
      "Valid for new emergency patients",
    ],
    subject: "Emergency Visit Special",
  },
  {
    id: "child",
    img: "/assets/images/special-icon-family.png",
    title: "$85 Children’s New Patient Visit (13 & Under)",
    subtitle: "Includes Exam, X-Rays & Cleaning",
    price: "$85",
    notes: [
      "Gentle, fear-free pediatric dental visit",
      "Valid for uninsured child patients",
    ],
    subject: "New Child Patient special",
  },
  {
    id: "teen",
    img: "/assets/images/special-icon-tooth.png",
    title: "$95 Teen New Patient Visit (13-18)",
    subtitle: "Includes Exam, X-Rays & Cleaning",
    price: "$95",
    notes: [
      "Comprehensive teen oral wellness visit",
      "Valid for uninsured teen patients",
    ],
    subject: "New Teen Patient special",
  },
];

export default function OffersPromotionsPage() {
  const [selectedCoupon, setSelectedCoupon] = useState<CouponItem | null>(null);

  return (
    <main className="min-h-screen bg-[#f2f1ec]">
      <PageBanner
        title="Special Dental Offers &amp; Promotions"
        subtitle="Cove Choice Dental • Copperas Cove, TX"
        description="Everyone enjoys saving on essential healthcare! Our special promotions make it easy to access premium dentistry without breaking your budget. Click any offer below to claim your digital voucher."
        bgImage="/assets/images/banner-services.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Special Offers" },
        ]}
      />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allCoupons.map((coupon) => (
            <div
              key={coupon.id}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#f2f1ec] border border-[#9c8f6d]/30 flex items-center justify-center p-2 shrink-0">
                      <img
                        src={coupon.img}
                        alt={coupon.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-3xl font-extrabold text-[#204369]">
                      {coupon.price}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#e64b38] bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">
                    Instant Voucher
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#204369] mb-1">
                  {coupon.title}
                </h3>
                <p className="text-sm font-semibold text-[#9c8f6d] mb-4">
                  {coupon.subtitle}
                </p>

                {coupon.notes && coupon.notes.length > 0 && (
                  <ul className="space-y-1.5 text-xs text-slate-600 mb-6 bg-[#f2f1ec]/60 p-4 rounded-xl border border-slate-200/60">
                    {coupon.notes.map((note, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#e64b38] font-bold">•</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedCoupon(coupon)}
                  className="flex-1 bg-[#e64b38] hover:bg-[#c93b2a] text-white font-bold py-3.5 px-6 rounded-xl text-sm shadow transition-all text-center"
                >
                  Claim This Special Offer
                </button>
                <a
                  href="tel:12549876777"
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold p-3.5 rounded-xl text-sm transition-colors flex items-center justify-center"
                  title="Call to schedule"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Insurance Note */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm text-center max-w-3xl mx-auto">
          <h4 className="text-lg font-bold text-[#0b2545] mb-2">
            Have Dental Insurance or Medicaid?
          </h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Most preventative checkups and pediatric visits are covered at 100% under in-network dental insurance and Medicaid! Contact our front desk at{" "}
            <a href="tel:12549876777" className="text-teal-700 font-bold underline">
              (254) 987-6777
            </a>{" "}
            to verify your coverage prior to your visit.
          </p>
        </div>
      </section>

      {/* Interactive Claim Modal */}
      <CouponModal
        coupon={selectedCoupon}
        onClose={() => setSelectedCoupon(null)}
      />
    </main>
  );
}
