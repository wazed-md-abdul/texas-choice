"use client";

import React from "react";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function FixedTabs() {
  return (
    <>
      {/* Mobile Bottom Quick-Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 flex items-center justify-around md:hidden shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
        <a
          href="tel:12549876777"
          className="flex flex-col items-center text-[#204369] hover:text-[#e64b38] text-xs font-semibold"
        >
          <span className="w-8 h-8 rounded-full bg-[#204369]/10 text-[#204369] flex items-center justify-center mb-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </span>
          Call Now
        </a>

        <Link
          href="/emergency-dentistry"
          className="flex flex-col items-center text-[#e64b38] hover:text-[#d23b28] text-xs font-bold"
        >
          <span className="w-8 h-8 rounded-full bg-[#e64b38]/10 text-[#e64b38] flex items-center justify-center mb-1">
            <AlertCircle className="w-4 h-4" />
          </span>
          Emergency
        </Link>

        <Link
          href="/request-an-appointment"
          className="flex flex-col items-center text-[#e64b38] hover:text-[#204369] text-xs font-bold"
        >
          <span className="w-8 h-8 rounded-full bg-[#e64b38] text-white flex items-center justify-center mb-1 shadow">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </span>
          Book Online
        </Link>

        <a
          href="https://maps.google.com/?q=181+W+Hwy+190+Suite+4+Copperas+Cove+TX+76522"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-slate-700 hover:text-[#204369] text-xs font-semibold"
        >
          <span className="w-8 h-8 rounded-full bg-[#f2f1ec] text-[#204369] flex items-center justify-center mb-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </span>
          Directions
        </a>
      </div>

      {/* Desktop Floating Right Sticky Pill */}
      <div className="hidden lg:flex fixed right-4 bottom-8 z-40 flex-col gap-2">
        <a
          href="tel:12549876777"
          className="bg-white/95 backdrop-blur shadow-lg border border-slate-200 text-[#204369] hover:text-[#e64b38] px-4 py-2.5 rounded-full flex items-center gap-2.5 transition-all hover:scale-105 group font-bold text-sm"
        >
          <span className="w-7 h-7 rounded-full bg-[#e64b38]/10 text-[#e64b38] flex items-center justify-center group-hover:bg-[#e64b38] group-hover:text-white transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </span>
          <span>(254) 987-6777</span>
        </a>

        <Link
          href="/request-an-appointment"
          className="bg-[#e64b38] text-white hover:bg-[#204369] shadow-xl px-5 py-2.5 rounded-full flex items-center gap-2 font-bold text-sm transition-all hover:scale-105"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Book Visit</span>
        </Link>
      </div>
    </>
  );
}
