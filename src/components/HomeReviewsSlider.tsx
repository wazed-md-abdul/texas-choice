"use client";

import React from "react";
import Link from "next/link";
import { Star, Check } from "lucide-react";

interface Review {
  text: string;
  author: string;
  location: string;
  rating: number;
  treatment: string;
  img: string;
}

const reviews: Review[] = [
  {
    text: "Dr. Alvi is a true blessing in our lives. Besides being a great dentist, he is a wonderful human being. The staff is so welcoming and both locations are beautifully decorated and clean. We had an appointment recently for our little one and we felt absolutely safe and well taken care of.",
    author: "Tatians V.",
    location: "Verified Patient • Copperas Cove",
    rating: 5,
    treatment: "Family & Pediatric Care",
    img: "/assets/images/reviews-1.png",
  },
  {
    text: "Quick response time from staff! Was amazed that they got back to me after hours and within 10 minutes of me reaching out in severe tooth pain. The staff is very polite and helpful. They offer transparent payment plans and make sure you get the care you need. Very pleased!",
    author: "Jason S.",
    location: "Verified Patient • Copperas Cove",
    rating: 5,
    treatment: "Same-Day Emergency Care",
    img: "/assets/images/reviews-3.png",
  },
  {
    text: "Everyone in this office was courteous and helpful from the front desk to the dentist. You can tell their dedication to keeping everyone comfortable and their genuine passion for pain-free visits. I'm not usually a dentist fan, but they made it quick, painless, and easy for me.",
    author: "Anisa K.",
    location: "Verified Patient • Copperas Cove",
    rating: 5,
    treatment: "Gentle Restorative Visit",
    img: "/assets/images/reviews-2.png",
  },
];

export default function HomeReviewsSlider() {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-slate-500 block mb-3">
            TESTIMONIAL
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            What Our Patients <span className="text-emerald-500">Are Saying</span>
          </h2>
        </div>

        {/* 3 Testimonials Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-16 items-start">
          {reviews.map((rev) => (
            <div
              key={rev.author}
              className="flex flex-col justify-between h-full group"
            >
              <div>
                {/* Vibrant Green Double Quotes Icon */}
                <div className="text-emerald-500 mb-6">
                  <svg
                    className="w-9 h-9 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Testimonial Quote Text */}
                <p className="italic font-semibold text-slate-800 text-sm sm:text-base leading-relaxed mb-8">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Author Row */}
              <div className="flex items-center gap-3.5 pt-4">
                <img
                  src={rev.img}
                  alt={rev.author}
                  className="w-11 h-11 rounded-full object-cover shrink-0 ring-2 ring-emerald-500/20"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-tight">
                    {rev.author}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {rev.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Badge & Link */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
            <span className="flex items-center gap-1 text-amber-500 font-bold text-sm">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> 4.9 Rating
            </span>
            <span className="text-xs text-slate-500 font-medium">• 1,200+ Google Patient Reviews</span>
          </div>

          <Link
            href="/reviews"
            className="text-xs sm:text-sm font-bold text-[#0b2545] hover:text-teal-700 transition-colors inline-flex items-center gap-1.5"
          >
            <span>Read All Verified Patient Reviews</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
