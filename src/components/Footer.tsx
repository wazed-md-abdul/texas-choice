import React from "react";
import Link from "next/link";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoCall,
  IoLocationSharp,
} from "react-icons/io5";
import { FaYelp, FaGoogle } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-[#204369] text-slate-200 rounded-t-[2.5rem] md:rounded-t-[3.5rem] mt-6 md:mt-10 px-6 sm:px-12 py-10 md:py-12 max-w-[1440px] mx-auto border-t border-white/10 shadow-2xl flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
      {/* Brand & Clinic Info (Left) */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-sm">
        <Link href="/" className="inline-block mb-3">
          <img
            src="/assets/images/footer-logo.png"
            alt="Cove Choice Dental logo"
            className="h-12 sm:h-14 w-auto object-contain brightness-110"
          />
        </Link>
        <p className="font-sans text-xs sm:text-sm text-slate-300/80 leading-relaxed">
          Elevating family, cosmetic, and same-day emergency dental care in Copperas Cove, Lampasas, and Fort Cavazos with personalized compassion.
        </p>

        {/* Quick Location & Phone */}
        <div className="mt-4 space-y-1.5 text-xs text-slate-300/90">
          <a
            href="https://maps.google.com/?q=181+W+Hwy+190+Suite+4+Copperas+Cove+TX+76522"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start gap-2 hover:text-[#9c8f6d] transition-colors"
          >
            <IoLocationSharp className="text-[#9c8f6d] shrink-0 text-sm" />
            <span>181 W Hwy 190 Suite 4, Copperas Cove, TX 76522</span>
          </a>
          <a
            href="tel:12549876777"
            className="flex items-center justify-center md:justify-start gap-2 hover:text-[#e64b38] font-bold transition-colors"
          >
            <IoCall className="text-[#e64b38] shrink-0 text-sm" />
            <span>(254) 987-6777</span>
          </a>
        </div>
      </div>

      {/* Navigation, Social Links & Legal (Right) */}
      <div className="flex flex-col items-center md:items-end gap-6 w-full md:w-auto">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-slate-300">
          <Link href="/about-us" className="hover:text-[#9c8f6d] transition-colors">
            About Us
          </Link>
          <Link href="/dental-services" className="hover:text-[#9c8f6d] transition-colors">
            Services
          </Link>
          <Link href="/emergency-dentistry" className="text-[#e64b38] hover:text-white font-bold transition-colors">
            Emergency Care
          </Link>
          <Link href="/dental-insurance" className="hover:text-[#9c8f6d] transition-colors">
            Insurance &amp; Medicaid
          </Link>
          <Link href="/offers-promotions" className="hover:text-[#febb21] transition-colors">
            Special Offers
          </Link>
          <Link href="/reviews" className="hover:text-[#9c8f6d] transition-colors">
            Reviews
          </Link>
          <Link href="/contact" className="hover:text-[#9c8f6d] transition-colors">
            Contact
          </Link>
          <Link href="/privacy-policy" className="hover:text-[#9c8f6d] transition-colors">
            Privacy Policy
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-2.5">
          <a
            href="https://www.facebook.com/Dentistcopperascove/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/15 text-white hover:bg-[#e64b38] hover:text-white hover:scale-105 transition-all shadow-sm"
          >
            <IoLogoFacebook className="text-base" />
          </a>

          <a
            href="https://g.page/DentistCopperasCove?share"
            target="_blank"
            rel="noreferrer"
            aria-label="Google Reviews"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/15 text-white hover:bg-[#e64b38] hover:text-white hover:scale-105 transition-all shadow-sm"
          >
            <FaGoogle className="text-sm" />
          </a>

          <a
            href="https://www.yelp.com/biz/cove-choice-dental-copperas-cove"
            target="_blank"
            rel="noreferrer"
            aria-label="Yelp"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/15 text-white hover:bg-[#e64b38] hover:text-white hover:scale-105 transition-all shadow-sm"
          >
            <FaYelp className="text-sm" />
          </a>

          <a
            href="https://www.instagram.com/cove_choice_dental/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/15 text-white hover:bg-[#e64b38] hover:text-white hover:scale-105 transition-all shadow-sm"
          >
            <IoLogoInstagram className="text-base" />
          </a>

          <a
            href="https://twitter.com/CoveChoice"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter / X"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/15 text-white hover:bg-[#e64b38] hover:text-white hover:scale-105 transition-all shadow-sm"
          >
            <IoLogoTwitter className="text-base" />
          </a>
        </div>

        {/* Copyright */}
        <div className="font-sans text-xs text-slate-400 text-center md:text-right">
          © 2026 Cove Choice Dental. All rights reserved. Part of the Texas Choice Dental Network.
        </div>
      </div>
    </footer>
  );
}
