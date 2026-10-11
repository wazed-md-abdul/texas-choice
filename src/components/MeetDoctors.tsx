import React from "react";
import Link from "next/link";

interface Doctor {
  name: string;
  role: string;
  specialty: string;
  image: string;
  href: string;
  staggerClass: string;
}

const doctors: Doctor[] = [
  {
    name: "Dr. Daood Alvi, DDS",
    role: "Founder & Lead Dentist",
    specialty: "Implant & Full Mouth Rehabilitation",
    image: "/assets/images/dr-alvi-landing.jpg",
    href: "/dr-daood-alvi",
    staggerClass: "lg:translate-y-28 sm:translate-y-8",
  },
  {
    name: "Dr. Shruti Sharma, DDS",
    role: "General & Cosmetic Dentist",
    specialty: "Restorative Aesthetics & Endodontics",
    image: "/assets/images/dr-sharma-landing.jpg",
    href: "/dr-sharma",
    staggerClass: "lg:translate-y-10 sm:translate-y-0",
  },
  {
    name: "Dr. Simrat Sehmi, DDS",
    role: "Family & Pediatric Dentist",
    specialty: "Children's Dental & Preventive Care",
    image: "/assets/images/dr-sehmi-landing.jpg",
    href: "/dr-simrat-sehmi",
    staggerClass: "lg:translate-y-0 sm:translate-y-8",
  },
  {
    name: "Dr. Sileshi Assemu, DDS",
    role: "General & Family Dentist",
    specialty: "Gentle Care & Emergency Treatments",
    image: "/assets/images/dr-assemu-landing.jpg",
    href: "/dr-assemu",
    staggerClass: "lg:translate-y-24 sm:translate-y-0",
  },
];

export default function MeetDoctors() {
  return (
    <section className="py-24 sm:py-32 bg-[#f2f1ec] text-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9c8f6d] block mb-3">
            Cove Choice Dental • Clinical Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#204369] tracking-tight uppercase">
            Meet Our <span className="text-[#e64b38]">Team</span>
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Experienced, compassionate dentists dedicated to your family&apos;s comfort and lifelong oral health in Copperas Cove.
          </p>
        </div>

        {/* 4 Staggered Undulating Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 pb-12 sm:pb-24 lg:pb-36 items-start">
          {doctors.map((doc, idx) => (
            <Link
              key={doc.name}
              href={doc.href}
              className={`group block focus:outline-none transition-transform duration-500 ease-out ${doc.staggerClass}`}
            >
              {/* Doctor Portrait Photo */}
              <div className="relative aspect-[3/4] w-full bg-stone-200 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-2xl transition-all duration-500">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Name & Role Text Block */}
              <div className="pt-4 text-left">
                <h3 className="text-base sm:text-lg font-bold text-[#204369] group-hover:text-[#e64b38] transition-colors tracking-tight">
                  {doc.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">
                  {doc.role}
                </p>
                <p className="text-[11px] text-[#9c8f6d] font-semibold mt-1">
                  {doc.specialty}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Editorial Accent & Action */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
            Our 4 licensed dentists provide compassionate, same-day and family dentistry in Copperas Cove, TX.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/meet-the-dentists"
              className="text-xs sm:text-sm font-bold text-[#204369] hover:text-[#e64b38] transition-colors inline-flex items-center gap-1.5"
            >
              <span>Explore All Doctor Bios</span>
              <span>→</span>
            </Link>
            <Link
              href="/request-an-appointment"
              className="bg-[#e64b38] hover:bg-[#c93b2a] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
