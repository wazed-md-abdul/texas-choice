import React from "react";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";

interface ServicePageLayoutProps {
  title: string;
  subtitle?: string;
  description?: string;
  bgImage?: string;
  breadcrumbLabel: string;
  children: React.ReactNode;
  sidebarType?: string;
  specialOffer?: {
    title: string;
    price: string;
    notes?: string;
    description?: string;
    href?: string;
    link?: string;
    badge?: string;
  };
}

export default function ServicePageLayout({
  title,
  subtitle = "Cove Choice Dental • Copperas Cove, TX",
  description,
  bgImage = "/assets/images/banner-services.jpg",
  breadcrumbLabel,
  children,
  specialOffer = {
    title: "New Dental Patient Special",
    price: "$100",
    notes: "Includes Comprehensive Exam & X-Rays",
    href: "/offers-promotions",
  },
}: ServicePageLayoutProps) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header Banner */}
      <PageBanner
        title={title}
        subtitle={subtitle}
        description={description}
        bgImage={bgImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/dental-services" },
          { label: breadcrumbLabel },
        ]}
      />

      {/* Main Content + Sidebar Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Main Article Content */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 dental-content">
              {children}
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Booking Widget */}
            <div className="bg-[#204369] text-white rounded-3xl p-6 sm:p-8 shadow-xl sticky top-24">
              <span className="text-[#9c8f6d] font-bold uppercase tracking-wider text-xs block mb-1">
                Schedule Your Visit
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Need Dental Care?
              </h3>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-6">
                Our Copperas Cove team is ready to welcome you. Same-day emergency appointments and flexible scheduling available.
              </p>

              <div className="space-y-3">
                <a
                  href="tel:12549876777"
                  className="w-full bg-[#e64b38] hover:bg-[#c93b2a] text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call: (254) 987-6777
                </a>

                <Link
                  href="/request-an-appointment"
                  className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm transition-colors text-center"
                >
                  Book Appointment Online
                </Link>
              </div>

              {/* Special Offer Card */}
              {specialOffer && (
                <div className="mt-6 pt-5 border-t border-white/15 bg-white/5 rounded-2xl p-4 border border-white/10">
                  <span className="text-[11px] font-bold text-[#febb21] uppercase tracking-wider block mb-1">
                    {specialOffer.badge || "Special Offer"}
                  </span>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-sm text-white">{specialOffer.title}</h4>
                    <span className="text-[#febb21] font-extrabold text-base">{specialOffer.price}</span>
                  </div>
                  <p className="text-xs text-slate-300 mb-3">{specialOffer.notes || specialOffer.description}</p>
                  <Link
                    href={specialOffer.href || specialOffer.link || "/offers-promotions"}
                    className="text-xs text-[#9c8f6d] hover:text-white font-bold flex items-center gap-1"
                  >
                    View All Specials →
                  </Link>
                </div>
              )}

              {/* Hours Box */}
              <div className="mt-6 pt-5 border-t border-white/15 text-xs text-slate-300 space-y-1.5">
                <div className="flex justify-between">
                  <span>Mon – Fri:</span>
                  <span className="text-white font-semibold">8:30 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>By Appointment</span>
                </div>
                <div className="flex justify-between">
                  <span>Medicaid &amp; PPO:</span>
                  <span className="text-[#3a97bb] font-semibold">Accepted</span>
                </div>
              </div>
            </div>

            {/* Related Quick Links */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm">
              <h4 className="font-bold text-sm text-[#204369] uppercase tracking-wider mb-3">
                Related Dental Care
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <Link href="/emergency-dentistry" className="hover:text-[#e64b38] flex items-center justify-between transition-colors">
                    <span>Emergency Dentistry</span>
                    <span className="text-slate-400">→</span>
                  </Link>
                </li>
                <li>
                  <Link href="/dental-implants" className="hover:text-[#204369] flex items-center justify-between transition-colors">
                    <span>Dental Implants</span>
                    <span className="text-slate-400">→</span>
                  </Link>
                </li>
                <li>
                  <Link href="/dentures" className="hover:text-[#204369] flex items-center justify-between transition-colors">
                    <span>Modern Dentures</span>
                    <span className="text-slate-400">→</span>
                  </Link>
                </li>
                <li>
                  <Link href="/preventive-dentistry" className="hover:text-[#204369] flex items-center justify-between transition-colors">
                    <span>Family Dental Care</span>
                    <span className="text-slate-400">→</span>
                  </Link>
                </li>
                <li>
                  <Link href="/dental-insurance" className="hover:text-[#204369] flex items-center justify-between transition-colors">
                    <span>Insurance &amp; Financing</span>
                    <span className="text-slate-400">→</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
