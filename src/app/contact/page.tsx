import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import GoogleMapSection from "@/components/GoogleMapSection";
import AppointmentSection from "@/components/AppointmentSection";
import { Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Cove Choice Dental | (254) 987-6777 | Copperas Cove, TX",
  description:
    "Contact Cove Choice Dental at 181 W Hwy 190 Suite 4, Copperas Cove, TX 76522. Call (254) 987-6777 for office hours, directions, and emergency dental appointments.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageBanner
        title="Contact Our Dental Office"
        subtitle="Cove Choice Dental • Copperas Cove, TX"
        description="Whether you have questions about your dental insurance, need directions to our office, or are experiencing urgent tooth pain, we’re always here to help."
        bgImage="/assets/images/banner-services.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      {/* Contact Cards Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mx-auto mb-5">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0b2545] mb-2">Give Us a Call</h3>
            <p className="text-xs text-slate-500 mb-4">
              Speak directly with our front desk coordinators.
            </p>
            <a
              href="tel:12549876777"
              className="inline-block bg-[#0b2545] hover:bg-[#134074] text-white font-bold text-base px-6 py-3 rounded-xl shadow transition-colors"
            >
              (254) 987-6777
            </a>
            <p className="text-[11px] text-rose-600 font-semibold mt-3">
              *Same-day emergency calls prioritized
            </p>
          </div>

          {/* Location Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mx-auto mb-5">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0b2545] mb-2">Visit Our Clinic</h3>
            <p className="text-xs text-slate-500 mb-2">
              Near Brookview Village, Allure Nail &amp; Spa, and Seoul Garden.
            </p>
            <address className="not-italic text-sm font-semibold text-slate-800 leading-relaxed mb-4">
              181 W Hwy 190 Suite 4<br />
              Copperas Cove, TX 76522
            </address>
            <a
              href="https://maps.google.com/?q=181+W+Hwy+190+Suite+4+Copperas+Cove+TX+76522"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow transition-colors"
            >
              Get Driving Directions
            </a>
          </div>

          {/* Office Hours Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mx-auto mb-5">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0b2545] mb-2">Hours of Operation</h3>
            <div className="text-xs space-y-2 text-slate-600 mt-4 text-left max-w-[240px] mx-auto">
              <div className="flex justify-between border-b border-slate-100 pb-1">
                <span>Monday – Friday:</span>
                <span className="font-bold text-[#0b2545]">8:30 AM – 5:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-1">
                <span>Saturday:</span>
                <span className="font-semibold text-slate-500">By Appointment</span>
              </div>
              <div className="flex justify-between pb-1">
                <span>Sunday:</span>
                <span className="text-slate-400">Closed</span>
              </div>
            </div>
            <span className="inline-block mt-4 text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              ¡Se Habla Español!
            </span>
          </div>
        </div>
      </section>

      {/* Online Request Form */}
      <AppointmentSection />

      {/* Google Maps Section */}
      <GoogleMapSection />
    </main>
  );
}
