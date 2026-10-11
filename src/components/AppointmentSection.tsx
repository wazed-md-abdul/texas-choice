"use client";

import React, { useState } from "react";
import { MapPin, Clock, Phone, AlertCircle, Check, Lock } from "lucide-react";

export default function AppointmentSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "Morning",
    reason: "New Patient Special ($100 Exam & X-Rays)",
    patientStatus: "New Patient",
    insurance: "",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="appointment-booking" className="py-12 sm:py-16 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xl overflow-hidden grid lg:grid-cols-12">
          {/* Left Visual & Clinic Contact Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#16304c] via-[#204369] to-[#2d5b8c] text-white p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <span className="text-[#9c8f6d] font-bold uppercase tracking-wider text-xs bg-white/10 px-3 py-1 rounded-full border border-white/15">
                Convenient Scheduling
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4 leading-tight">
                Request an Appointment
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-8">
                Take the first step toward a healthier, more confident smile. Complete this quick request and our Copperas Cove team will reach out to confirm your visit time.
              </p>

              <div className="space-y-4 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#9c8f6d] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-white">Office Location</span>
                    <span>181 W Hwy 190 Suite 4<br />Copperas Cove, TX 76522</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#9c8f6d] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-white">Office Hours</span>
                    <span>Monday – Friday: 8:30 AM – 5:00 PM</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#9c8f6d] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-white">Call Directly</span>
                    <a href="tel:12549876777" className="text-[#e64b38] hover:text-white font-bold text-base">
                      (254) 987-6777
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Alert Callout */}
            <div className="mt-8 pt-6 border-t border-white/15 bg-rose-500/20 rounded-2xl p-4 border border-rose-400/30">
              <div className="flex items-center gap-1.5 text-xs font-bold text-rose-300 uppercase tracking-wider mb-1">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Emergency Dental Care</span>
              </div>
              <p className="text-xs text-slate-200">
                In urgent tooth pain? Don&apos;t wait—call our emergency line directly at{" "}
                <a href="tel:12549876777" className="underline font-bold text-white">
                  (254) 987-6777
                </a>{" "}
                for same-day priority treatment.
              </p>
            </div>
          </div>

          {/* Right Interactive Form Column */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-20 h-20 bg-[#204369]/10 text-[#204369] rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <Check className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#204369]">Appointment Request Received!</h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Our scheduling team has received your request for <strong>{formData.reason}</strong>. We will contact you at <strong>{formData.phone}</strong> shortly to finalize your appointment time.
                </p>
                <div className="pt-4">
                  <a
                    href="tel:12549876777"
                    className="inline-block bg-[#e64b38] hover:bg-[#c93b2a] text-white font-bold px-6 py-3 rounded-xl text-sm shadow transition-colors"
                  >
                    Need Immediate Assistance? Call (254) 987-6777
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-[#204369] focus:ring-1 focus:ring-[#204369]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(254) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-[#204369] focus:ring-1 focus:ring-[#204369]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-[#204369] focus:ring-1 focus:ring-[#204369]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Patient Status
                    </label>
                    <select
                      value={formData.patientStatus}
                      onChange={(e) => setFormData({ ...formData, patientStatus: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-[#204369] focus:ring-1 focus:ring-[#204369] bg-white"
                    >
                      <option value="New Patient">New Patient</option>
                      <option value="Returning Patient">Returning Patient</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Reason for Visit
                    </label>
                    <select
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-[#204369] focus:ring-1 focus:ring-[#204369] bg-white"
                    >
                      <option value="New Patient Special ($100 Exam & X-Rays)">New Patient Special ($100 Exam &amp; X-Rays)</option>
                      <option value="Emergency Tooth Pain / Urgent Exam ($65)">Emergency Tooth Pain / Urgent Exam ($65)</option>
                      <option value="Children's Visit ($85 Exam & Cleaning)">Children&apos;s Visit ($85 Exam &amp; Cleaning)</option>
                      <option value="General Checkup & Cleaning">General Checkup &amp; Cleaning</option>
                      <option value="Dental Implants & Tooth Replacement">Dental Implants &amp; Tooth Replacement</option>
                      <option value="Dentures Consultation">Dentures Consultation</option>
                      <option value="Cosmetic / Teeth Whitening">Cosmetic / Teeth Whitening</option>
                      <option value="Other Dental Care">Other Dental Care</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Preferred Time of Day
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-[#204369] focus:ring-1 focus:ring-[#204369] bg-white"
                    >
                      <option value="Morning (8:30 AM - 12:00 PM)">Morning (8:30 AM - 12:00 PM)</option>
                      <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                      <option value="First Available">First Available</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Dental Insurance or Notes (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Delta Dental, Medicaid, or specific tooth issue"
                    value={formData.insurance}
                    onChange={(e) => setFormData({ ...formData, insurance: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-[#204369] focus:ring-1 focus:ring-[#204369]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#e64b38] hover:bg-[#204369] text-white font-bold py-3.5 rounded-xl text-sm shadow-md hover:shadow-lg transition-all"
                  >
                    Submit Appointment Request
                  </button>
                  <p className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 mt-2">
                    <Lock className="w-3.5 h-3.5 shrink-0" />
                    <span>Your health information is kept strictly confidential and secure.</span>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
