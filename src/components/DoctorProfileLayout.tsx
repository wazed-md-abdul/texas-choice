"use client";

import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  Heart,
  Smile,
  Calendar,
  Phone,
  CheckCircle2,
  Award,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

export interface DoctorProfileData {
  name: string;
  credentials: string;
  role: string;
  specialty: string;
  portraitImage: string;
  introQuote: string;
  bioIntro: string[];
  keyHighlights: string[];
  whyDentistry: {
    title: string;
    text: string[];
    image?: string;
    imageAlt?: string;
  };
  education: {
    title: string;
    degree: string;
    school: string;
    text: string[];
    image?: string;
    imageAlt?: string;
    memberships?: string[];
  };
  personalLife: {
    title: string;
    text: string[];
    image?: string;
    imageAlt?: string;
  };
  otherDentists: {
    name: string;
    role: string;
    image: string;
    href: string;
  }[];
}

interface DoctorProfileLayoutProps {
  doctor: DoctorProfileData;
}

export default function DoctorProfileLayout({ doctor }: DoctorProfileLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f2f1ec] text-slate-800">
      {/* Top Breadcrumb & Hero Header */}
      <section className="relative bg-[#204369] text-white pt-8 pb-16 overflow-hidden">
        {/* Subtle ambient lighting */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#9c8f6d]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#3a97bb]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-300 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#9c8f6d] transition-colors">
              Home
            </Link>
            <span className="text-slate-500">/</span>
            <Link href="/about-us" className="hover:text-[#9c8f6d] transition-colors">
              About Us
            </Link>
            <span className="text-slate-500">/</span>
            <Link href="/meet-the-dentists" className="hover:text-[#9c8f6d] transition-colors">
              Meet Our Dentists
            </Link>
            <span className="text-slate-500">/</span>
            <span className="text-[#9c8f6d] font-semibold">{doctor.name}</span>
          </nav>

          {/* Full Wide Picture Hero Container with Right-Aligned Content */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#16304c] border border-white/15 flex flex-col lg:block min-h-[auto] lg:min-h-[580px]">
            {/* The Full Wide Doctor Picture (Left Focused) */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-auto lg:absolute lg:inset-0">
              <img
                src={doctor.portraitImage}
                alt={doctor.name}
                className="w-full h-full object-cover object-left-top sm:object-left"
              />
              {/* Gradient on Desktop: 100% transparent on left for full doctor visibility, smooth fade to #16304c on right */}
              <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-transparent via-[#16304c]/80 to-[#16304c]/95 pointer-events-none" />
              {/* Mobile Gradient subtle bottom fade */}
              <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-[#16304c] via-transparent to-black/20 pointer-events-none" />

              {/* Verified Badge on Photo */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl py-2 px-3.5 shadow-lg flex items-center gap-2 text-slate-900 border border-slate-100">
                <ShieldCheck className="w-4 h-4 text-[#e64b38]" />
                <span className="text-xs font-bold text-[#204369]">Licensed Texas Dental Provider</span>
              </div>
            </div>

            {/* Right-Aligned Content Layer Overlaid on Top of Picture */}
            <div className="relative z-10 p-6 sm:p-10 lg:p-12 lg:w-7/12 lg:ml-auto space-y-5 bg-[#16304c] lg:bg-transparent">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9c8f6d] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 mb-2.5 backdrop-blur-sm">
                  Cove Choice Dental • Clinical Leadership
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                  {doctor.name}
                </h1>
                <p className="text-base sm:text-lg font-semibold text-[#3a97bb] mt-1.5">
                  {doctor.role} &mdash; <span className="text-slate-200">{doctor.specialty}</span>
                </p>
              </div>

              {/* Intro Quote Callout */}
              <div className="bg-[#204369]/85 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 text-slate-100 text-xs sm:text-sm leading-relaxed italic shadow-md">
                &ldquo;{doctor.introQuote}&rdquo;
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-2.5 text-slate-200 text-xs sm:text-sm leading-relaxed">
                {doctor.bioIntro.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Key Clinical Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {doctor.keyHighlights.map((hl, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 bg-[#204369]/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3a97bb]" />
                    {hl}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/request-an-appointment"
                  className="bg-[#e64b38] hover:bg-[#c93b2a] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book with {doctor.name.split(",")[0]}</span>
                </Link>
                <a
                  href="tel:12549876777"
                  className="bg-white/15 hover:bg-white/25 text-white border border-white/25 font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition-all flex items-center gap-2 backdrop-blur-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>(254) 987-6777</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-12">
        {/* Section 1: Why Did You Decide to Become a Dentist? */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/80">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className={`space-y-4 ${doctor.whyDentistry.image ? "lg:col-span-7" : "lg:col-span-12"}`}>
              <div className="flex items-center gap-2 text-[#9c8f6d] font-bold text-xs uppercase tracking-wider">
                <Heart className="w-4 h-4 text-[#e64b38]" />
                <span>The Inspiration</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#204369] tracking-tight">
                {doctor.whyDentistry.title}
              </h2>
              <div className="space-y-3 text-slate-600 leading-relaxed text-sm sm:text-base">
                {doctor.whyDentistry.text.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {doctor.whyDentistry.image && (
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-slate-100">
                  <img
                    src={doctor.whyDentistry.image}
                    alt={doctor.whyDentistry.imageAlt || doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Where Did You Study Dentistry? */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/80">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {doctor.education.image && (
              <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
                <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-slate-50 p-4 flex items-center justify-center">
                  <img
                    src={doctor.education.image}
                    alt={doctor.education.imageAlt || "Dental Education"}
                    className="max-h-56 w-auto object-contain rounded-xl"
                  />
                </div>
              </div>
            )}

            <div className={`space-y-4 ${doctor.education.image ? "lg:col-span-7 order-1 lg:order-2" : "lg:col-span-12"}`}>
              <div className="flex items-center gap-2 text-[#9c8f6d] font-bold text-xs uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-[#204369]" />
                <span>Academic Background &amp; Training</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#204369] tracking-tight">
                {doctor.education.title}
              </h2>

              <div className="bg-[#f2f1ec] rounded-2xl p-4 border border-[#9c8f6d]/30">
                <p className="font-bold text-sm text-[#204369]">{doctor.education.degree}</p>
                <p className="text-xs text-slate-600">{doctor.education.school}</p>
              </div>

              <div className="space-y-3 text-slate-600 leading-relaxed text-sm sm:text-base">
                {doctor.education.text.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {doctor.education.memberships && doctor.education.memberships.length > 0 && (
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#204369] mb-2 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#e64b38]" />
                    <span>Professional Affiliations &amp; Accreditations</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {doctor.education.memberships.map((m, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-lg border border-slate-200"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Section 3: Outside of the Dental Office */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/80">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className={`space-y-4 ${doctor.personalLife.image ? "lg:col-span-7" : "lg:col-span-12"}`}>
              <div className="flex items-center gap-2 text-[#9c8f6d] font-bold text-xs uppercase tracking-wider">
                <Smile className="w-4 h-4 text-[#e64b38]" />
                <span>Life Outside The Clinic</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#204369] tracking-tight">
                {doctor.personalLife.title}
              </h2>
              <div className="space-y-3 text-slate-600 leading-relaxed text-sm sm:text-base">
                {doctor.personalLife.text.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {doctor.personalLife.image && (
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-slate-100">
                  <img
                    src={doctor.personalLife.image}
                    alt={doctor.personalLife.imageAlt || "Personal life"}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Other Dentists Section */}
        <section className="pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#9c8f6d] block mb-1">
                Collaborative Care
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#204369]">
                Meet Our Other Clinical Dentists
              </h3>
            </div>
            <Link
              href="/meet-the-dentists"
              className="text-xs sm:text-sm font-bold text-[#e64b38] hover:underline flex items-center gap-1"
            >
              <span>View All 4 Dentists</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {doctor.otherDentists.map((other) => (
              <Link
                key={other.name}
                href={other.href}
                className="group bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-stone-200 shrink-0">
                  <img
                    src={other.image}
                    alt={other.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#204369] group-hover:text-[#e64b38] transition-colors">
                    {other.name}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">{other.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Booking Callout */}
        <section className="bg-gradient-to-r from-[#204369] to-[#16304c] text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9c8f6d] block mb-2">
              Ready to Smile with Confidence?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Schedule Your Visit with {doctor.name.split(",")[0]}
            </h3>
            <p className="text-slate-300 text-sm mt-2">
              Our compassionate Copperas Cove team is ready to welcome you. Same-day emergency appointments, Medicaid, and flexible financing available.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <Link
              href="/request-an-appointment"
              className="w-full sm:w-auto text-center bg-[#e64b38] hover:bg-[#c93b2a] text-white font-bold py-3.5 px-6 rounded-xl text-sm shadow transition-all"
            >
              Book Appointment Online
            </Link>
            <a
              href="tel:12549876777"
              className="w-full sm:w-auto text-center bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-3.5 px-5 rounded-xl text-sm transition-all"
            >
              Call: (254) 987-6777
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
