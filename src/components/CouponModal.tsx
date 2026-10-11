"use client";

import React, { useState } from "react";
import { X, Check, Tag } from "lucide-react";

export interface CouponItem {
  id: string;
  img: string;
  title: string;
  subtitle: string;
  price?: string;
  notes?: string[];
  subject: string;
}

interface CouponModalProps {
  coupon: CouponItem | null;
  onClose: () => void;
}

export default function CouponModal({ coupon, onClose }: CouponModalProps) {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!coupon) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 relative">
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#0b2545] to-[#134074] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
          <span className="inline-block bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2 border border-teal-400/30">
            Exclusive Dental Special
          </span>
          <h3 className="text-2xl font-bold text-white">{coupon.title}</h3>
          <p className="text-slate-200 text-sm mt-1">{coupon.subtitle}</p>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-800">Coupon Claimed!</h4>
              <p className="text-sm text-slate-600">
                Show this voucher or mention code <strong className="text-[#0b2545]">TX-CHOICE-{coupon.id.toUpperCase()}</strong> when scheduling your visit.
              </p>
              <div className="bg-slate-50 border border-dashed border-teal-500 rounded-xl p-4 text-left text-xs space-y-1 text-slate-600">
                <p><strong>Patient:</strong> {formData.name}</p>
                <p><strong>Offer:</strong> {coupon.title}</p>
                <p><strong>Location:</strong> 181 W Hwy 190 Suite 4, Copperas Cove, TX</p>
                <p><strong>Phone:</strong> (254) 987-6777</p>
              </div>
              <div className="flex gap-3 pt-2">
                <a
                  href="tel:12549876777"
                  className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-xl text-sm text-center shadow"
                >
                  Call Now to Book: (254) 987-6777
                </a>
                <button
                  onClick={onClose}
                  className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-sm"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-6 flex items-center gap-4 bg-amber-50 border border-amber-200/60 p-3.5 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Tag className="w-5 h-5" />
                </div>
                <div className="text-xs text-amber-900 leading-relaxed">
                  <p className="font-bold">Claim Voucher for Instant Savings</p>
                  <p>No upfront payment required. Simply claim your special and schedule at your convenience.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(254) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="sarah@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  />
                </div>

                {coupon.notes && coupon.notes.length > 0 && (
                  <div className="text-[11px] text-slate-400 space-y-0.5 pt-1">
                    {coupon.notes.map((note, idx) => (
                      <p key={idx}>{note}</p>
                    ))}
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#0b2545] hover:bg-[#134074] text-white font-bold py-3.5 rounded-xl text-sm shadow-md transition-all"
                  >
                    Claim Special &amp; Save
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
