import React from "react";
import Link from "next/link";
import { Camera, Zap } from "lucide-react";

export default function OfficeTourSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-teal-700 font-bold uppercase tracking-wider text-xs sm:text-sm bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
              Modern Amenities &amp; Digital Precision
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] tracking-tight leading-tight">
              A Comfortable, State-of-the-Art Dental Environment
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We invest in the latest clinical breakthroughs so your dental visits are faster, gentler, and more accurate. From high-definition intraoral cameras to low-radiation digital imaging, experience healthcare designed entirely around your peace of mind.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <Camera className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0b2545]">Intraoral Digital Cameras</h4>
                  <p className="text-xs text-slate-500 mt-0.5">See exactly what the dentist sees in real-time.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0b2545]">Digital X-Rays</h4>
                  <p className="text-xs text-slate-500 mt-0.5">80% less radiation with instant high-res imagery.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/tour-our-office"
                className="bg-[#0b2545] hover:bg-[#134074] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow transition-all"
              >
                Tour Our Dental Office
              </Link>
              <Link
                href="/advanced-dental-technology"
                className="bg-slate-100 hover:bg-slate-200 text-[#0b2545] font-bold text-sm px-6 py-3.5 rounded-xl transition-all"
              >
                Explore Technology
              </Link>
            </div>
          </div>

          {/* Right Image / Office Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50">
              <img
                src="/assets/images/index-tour.png"
                alt="Family smiling at Cove Choice Dental modern office"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
