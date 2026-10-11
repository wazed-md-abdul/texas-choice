"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AlertCircle, Tag, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Top Utility & Trust Bar */}
      <div className="bg-[#204369] text-slate-100 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#f2f1ec] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#e64b38] animate-pulse"></span>
              ¡Se Habla Español!
            </span>
            <span className="text-white/40">•</span>
            <Link href="/dental-insurance" className="text-white/90 hover:text-white transition-colors">
              Medicaid &amp; Major Insurances Accepted
            </Link>
            <span className="text-white/40">•</span>
            <Link href="/emergency-dentistry" className="text-[#febb21] hover:text-amber-200 font-bold transition-colors">
              Emergency? Same-Day Visits Available
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://maps.google.com/?q=181+W+Hwy+190+Suite+4+Copperas+Cove+TX+76522"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1.5 text-white/90 transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-[#9c8f6d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              181 W Hwy 190 Suite 4, Copperas Cove, TX
            </a>
            <span className="text-white/40">•</span>
            <span className="text-white/80">Mon - Fri: 8:30 AM - 5:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2.5"
            : "bg-white border-b border-slate-100 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
            <img
              src="/assets/images/header-logo.png"
              alt="Cove Choice Dental"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 text-[15px] font-medium text-slate-700">
            <Link
              href="/"
              className="px-3.5 py-2 rounded-lg hover:text-[#0b2545] hover:bg-slate-50 transition-colors"
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div className="relative group">
              <button
                className="px-3.5 py-2 rounded-lg hover:text-[#0b2545] hover:bg-slate-50 flex items-center gap-1 transition-colors"
                aria-haspopup="true"
              >
                About Us
                <svg className="w-4 h-4 text-slate-400 group-hover:text-[#0b2545] transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                <Link href="/about-us" className="block px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-[#0b2545]">
                  What Sets Us Apart
                </Link>
                <Link href="/meet-the-dentists" className="block px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-[#204369] font-semibold">
                  Meet Our Dentists
                </Link>
                <div className="border-t border-slate-100 my-1"></div>
                <Link href="/dr-daood-alvi" className="block px-4 py-1.5 text-xs text-slate-600 hover:bg-slate-50 hover:text-[#0b2545]">
                  Dr. Daood Alvi, DDS
                </Link>
                <Link href="/dr-assemu" className="block px-4 py-1.5 text-xs text-slate-600 hover:bg-slate-50 hover:text-[#0b2545]">
                  Dr. Sileshi Assemu, DDS
                </Link>
                <Link href="/dr-sharma" className="block px-4 py-1.5 text-xs text-slate-600 hover:bg-slate-50 hover:text-[#0b2545]">
                  Dr. Shruti Sharma, DDS
                </Link>
                <Link href="/dr-simrat-sehmi" className="block px-4 py-1.5 text-xs text-slate-600 hover:bg-slate-50 hover:text-[#0b2545]">
                  Dr. Simrat Sehmi, DDS
                </Link>
                <div className="border-t border-slate-100 my-1"></div>
                <Link href="/meet-the-team" className="block px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-[#0b2545]">
                  Meet The Dental Team
                </Link>
                <Link href="/tour-our-office" className="block px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-[#0b2545]">
                  Tour Our Office
                </Link>
                <Link href="/advanced-dental-technology" className="block px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-[#0b2545]">
                  Dental Technology
                </Link>
                <Link href="/advanced-safety-protocol" className="block px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-[#0b2545]">
                  Safety & Hygiene Protocols
                </Link>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="px-3.5 py-2 rounded-lg hover:text-[#0b2545] hover:bg-slate-50 flex items-center gap-1 transition-colors"
                aria-haspopup="true"
              >
                Services
                <svg className="w-4 h-4 text-slate-400 group-hover:text-[#0b2545] transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full -left-20 w-[540px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#204369] mb-3">
                      Core Dental Care
                    </h4>
                    <div className="space-y-1">
                      <Link href="/preventive-dentistry" className="block px-2.5 py-1.5 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-[#204369] text-sm">
                        Family & Preventive Care
                      </Link>
                      <Link href="/childrens-dentistry" className="block px-2.5 py-1.5 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-[#204369] text-sm">
                        Children&apos;s Dentistry
                      </Link>
                      <Link href="/emergency-dentistry" className="px-2.5 py-1.5 rounded-lg hover:bg-rose-50 text-[#e64b38] font-semibold text-sm flex items-center gap-1.5">
                        <AlertCircle className="w-4 h-4 text-[#e64b38] shrink-0" />
                        <span>Emergency Dental Care</span>
                      </Link>
                      <Link href="/root-canal-therapy" className="block px-2.5 py-1.5 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-[#204369] text-sm">
                        Root Canal Therapy
                      </Link>
                      <Link href="/tooth-extractions" className="block px-2.5 py-1.5 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-[#204369] text-sm">
                        Tooth Extractions & Wisdom Teeth
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#204369] mb-3">
                      Restorative & Cosmetic
                    </h4>
                    <div className="space-y-1">
                      <Link href="/dental-implants" className="block px-2.5 py-1.5 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-[#204369] text-sm font-medium">
                        Dental Implants & All-on-4
                      </Link>
                      <Link href="/dentures" className="block px-2.5 py-1.5 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-[#204369] text-sm">
                        Modern Dentures & Partials
                      </Link>
                      <Link href="/dental-crowns" className="block px-2.5 py-1.5 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-[#204369] text-sm">
                        Dental Crowns & Bridges
                      </Link>
                      <Link href="/cosmetic-dentistry" className="block px-2.5 py-1.5 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-[#204369] text-sm">
                        Cosmetic Dentistry
                      </Link>
                      <Link href="/teeth-whitening" className="block px-2.5 py-1.5 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-[#204369] text-sm">
                        Professional Teeth Whitening
                      </Link>
                      <Link href="/veneers" className="block px-2.5 py-1.5 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-[#204369] text-sm">
                        Porcelain Veneers
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <Link href="/dental-services" className="text-xs font-bold text-[#e64b38] hover:text-[#c93b2a] flex items-center gap-1">
                    View All Dental Services →
                  </Link>
                  <span className="text-xs text-slate-400">Copperas Cove, TX</span>
                </div>
              </div>
            </div>

            {/* Insurance & Financing */}
            <div className="relative group">
              <button
                className="px-3.5 py-2 rounded-lg hover:text-[#0b2545] hover:bg-slate-50 flex items-center gap-1 transition-colors"
                aria-haspopup="true"
              >
                Insurance & Fees
                <svg className="w-4 h-4 text-slate-400 group-hover:text-[#0b2545] transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                <Link href="/dental-insurance" className="block px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-[#0b2545]">
                  Dental Insurance Plans
                </Link>
                <Link href="/medicaid-and-chip" className="block px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-[#0b2545]">
                  Medicaid & CHIP Dental
                </Link>
                <Link href="/for-patients" className="block px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-[#0b2545]">
                  CareCredit® Financing
                </Link>
                <Link href="/offers-promotions" className="flex items-center gap-2 px-4 py-2 hover:bg-amber-50 text-amber-700 font-semibold">
                  <Tag className="w-4 h-4 text-amber-600" />
                  <span>New Patient Specials</span>
                </Link>
              </div>
            </div>

            {/* Patient Resources */}
            <div className="relative group">
              <button
                className="px-3.5 py-2 rounded-lg hover:text-[#0b2545] hover:bg-slate-50 flex items-center gap-1 transition-colors"
                aria-haspopup="true"
              >
                Patient Info
                <svg className="w-4 h-4 text-slate-400 group-hover:text-[#0b2545] transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full right-0 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                <Link href="/for-patients" className="block px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-[#0b2545]">
                  New Patient Information
                </Link>
                <Link href="/reviews" className="block px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-[#0b2545]">
                  Patient Reviews & Testimonials
                </Link>
                <Link href="/faqs" className="block px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-[#0b2545]">
                  Frequently Asked Questions
                </Link>
                <Link href="/blog" className="block px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-[#0b2545]">
                  Dental Health Blog
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              className="px-3.5 py-2 rounded-lg hover:text-[#0b2545] hover:bg-slate-50 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            {/* Direct Call Button */}
            <a
              href="tel:12549876777"
              className="hidden sm:flex items-center gap-2 text-[#204369] hover:text-[#e64b38] font-bold px-3 py-2 rounded-xl hover:bg-[#f2f1ec] transition-colors"
              title="Call Cove Choice Dental"
            >
              <span className="w-8 h-8 rounded-full bg-[#e64b38]/10 text-[#e64b38] flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <span className="text-sm font-extrabold text-[#e64b38]">(254) 987-6777</span>
            </a>

            {/* Special Offers Tag */}
            <Link
              href="/offers-promotions"
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-[#9c8f6d]/15 text-[#204369] border border-[#9c8f6d]/30 hover:bg-[#9c8f6d]/25 transition-colors"
            >
              <Tag className="w-3.5 h-3.5 text-[#9c8f6d]" />
              <span>Specials</span>
            </Link>

            {/* Request Appointment Button (Primary Brand Red) */}
            <Link
              href="/request-an-appointment"
              className="bg-[#e64b38] hover:bg-[#204369] text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Request Appointment</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay lg:hidden">
          <div className="mobile-drawer-content">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <span className="text-white font-bold text-lg">Menu</span>
              <button
                onClick={closeMenu}
                className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-1 py-2 flex-1">
              <Link
                href="/"
                onClick={closeMenu}
                className="block px-3 py-2.5 text-white font-medium hover:bg-white/10 rounded-lg"
              >
                Home
              </Link>

              {/* Mobile About Accordion */}
              <div>
                <button
                  onClick={() => toggleDropdown("about")}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-white font-medium hover:bg-white/10 rounded-lg text-left"
                >
                  <span>About Us</span>
                  <span className="text-[#9c8f6d]">{activeDropdown === "about" ? "−" : "+"}</span>
                </button>
                {activeDropdown === "about" && (
                  <div className="pl-4 py-1 space-y-1 bg-black/20 rounded-lg my-1">
                    <Link href="/about-us" onClick={closeMenu} className="block px-3 py-1.5 text-sm text-slate-300 hover:text-white">
                      What Sets Us Apart
                    </Link>
                    <Link href="/meet-the-dentists" onClick={closeMenu} className="block px-3 py-1.5 text-sm text-white font-semibold">
                      Meet Your Dentists
                    </Link>
                    <Link href="/dr-daood-alvi" onClick={closeMenu} className="block px-3 py-1.5 text-xs text-slate-400 hover:text-white">
                      Dr. Daood Alvi, DDS
                    </Link>
                    <Link href="/dr-assemu" onClick={closeMenu} className="block px-3 py-1.5 text-xs text-slate-400 hover:text-white">
                      Dr. Sileshi Assemu, DDS
                    </Link>
                    <Link href="/dr-sharma" onClick={closeMenu} className="block px-3 py-1.5 text-xs text-slate-400 hover:text-white">
                      Dr. Shruti Sharma, DDS
                    </Link>
                    <Link href="/dr-simrat-sehmi" onClick={closeMenu} className="block px-3 py-1.5 text-xs text-slate-400 hover:text-white">
                      Dr. Simrat Sehmi, DDS
                    </Link>
                    <Link href="/meet-the-team" onClick={closeMenu} className="block px-3 py-1.5 text-sm text-slate-300 hover:text-white">
                      Meet the Team
                    </Link>
                    <Link href="/tour-our-office" onClick={closeMenu} className="block px-3 py-1.5 text-sm text-slate-300 hover:text-white">
                      Tour Our Office
                    </Link>
                    <Link href="/advanced-dental-technology" onClick={closeMenu} className="block px-3 py-1.5 text-sm text-slate-300 hover:text-white">
                      Technology
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => toggleDropdown("services")}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-white font-medium hover:bg-white/10 rounded-lg text-left"
                >
                  <span>Dental Services</span>
                  <span className="text-[#9c8f6d]">{activeDropdown === "services" ? "−" : "+"}</span>
                </button>
                {activeDropdown === "services" && (
                  <div className="pl-4 py-1 space-y-1 bg-black/20 rounded-lg my-1">
                    <Link href="/dental-services" onClick={closeMenu} className="block px-3 py-1.5 text-sm text-[#e64b38] font-semibold">
                      All Dental Services
                    </Link>
                    <Link href="/emergency-dentistry" onClick={closeMenu} className="flex items-center gap-2 px-3 py-1.5 text-sm text-[#e64b38] font-semibold">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Emergency Dental Care</span>
                    </Link>
                    <Link href="/preventive-dentistry" onClick={closeMenu} className="block px-3 py-1.5 text-sm text-slate-300 hover:text-white">
                      Preventive & Family Dentistry
                    </Link>
                    <Link href="/childrens-dentistry" onClick={closeMenu} className="block px-3 py-1.5 text-sm text-slate-300 hover:text-white">
                      Children&apos;s Dentistry
                    </Link>
                    <Link href="/dental-implants" onClick={closeMenu} className="block px-3 py-1.5 text-sm text-slate-300 hover:text-white">
                      Dental Implants
                    </Link>
                    <Link href="/dentures" onClick={closeMenu} className="block px-3 py-1.5 text-sm text-slate-300 hover:text-white">
                      Dentures & Partials
                    </Link>
                    <Link href="/dental-crowns" onClick={closeMenu} className="block px-3 py-1.5 text-sm text-slate-300 hover:text-white">
                      Dental Crowns & Bridges
                    </Link>
                    <Link href="/cosmetic-dentistry" onClick={closeMenu} className="block px-3 py-1.5 text-sm text-slate-300 hover:text-white">
                      Cosmetic Dentistry
                    </Link>
                    <Link href="/teeth-whitening" onClick={closeMenu} className="block px-3 py-1.5 text-sm text-slate-300 hover:text-white">
                      Teeth Whitening
                    </Link>
                    <Link href="/root-canal-therapy" onClick={closeMenu} className="block px-3 py-1.5 text-sm text-slate-300 hover:text-white">
                      Root Canal Therapy
                    </Link>
                    <Link href="/tooth-extractions" onClick={closeMenu} className="block px-3 py-1.5 text-sm text-slate-300 hover:text-white">
                      Tooth Extractions
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Insurance Accordion */}
              <div>
                <button
                  onClick={() => toggleDropdown("insurance")}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-white font-medium hover:bg-white/10 rounded-lg text-left"
                >
                  <span>Insurance & Financing</span>
                  <span className="text-[#9c8f6d]">{activeDropdown === "insurance" ? "−" : "+"}</span>
                </button>
                {activeDropdown === "insurance" && (
                  <div className="pl-4 py-1 space-y-1 bg-black/20 rounded-lg my-1">
                    <Link href="/dental-insurance" onClick={closeMenu} className="block px-3 py-1.5 text-sm text-slate-300 hover:text-white">
                      Dental Insurance
                    </Link>
                    <Link href="/medicaid-and-chip" onClick={closeMenu} className="block px-3 py-1.5 text-sm text-slate-300 hover:text-white">
                      Medicaid & CHIP
                    </Link>
                    <Link href="/for-patients" onClick={closeMenu} className="block px-3 py-1.5 text-sm text-slate-300 hover:text-white">
                      CareCredit® Financing
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/offers-promotions"
                onClick={closeMenu}
                className="flex items-center gap-2 px-3 py-2.5 text-amber-300 font-medium hover:bg-white/10 rounded-lg"
              >
                <Tag className="w-4 h-4 shrink-0" />
                <span>Special Offers & Coupons</span>
              </Link>
              <Link
                href="/reviews"
                onClick={closeMenu}
                className="block px-3 py-2.5 text-white font-medium hover:bg-white/10 rounded-lg"
              >
                Patient Reviews
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="block px-3 py-2.5 text-white font-medium hover:bg-white/10 rounded-lg"
              >
                Contact & Directions
              </Link>
            </div>

            {/* Mobile Drawer Footer Actions */}
            <div className="pt-4 border-t border-white/15 space-y-3">
              <a
                href="tel:12549876777"
                className="w-full bg-[#e64b38] hover:bg-[#c93b2a] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call: (254) 987-6777
              </a>
              <Link
                href="/request-an-appointment"
                onClick={closeMenu}
                className="w-full bg-[#204369] hover:bg-[#16304c] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 border border-white/20"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
