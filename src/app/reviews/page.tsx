import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import HomeReviewsSlider from "@/components/HomeReviewsSlider";

export const metadata: Metadata = {
  title: "Patient Reviews & Testimonials | Cove Choice Dental | Copperas Cove, TX",
  description:
    "Read 5-star patient reviews for Cove Choice Dental in Copperas Cove, TX. Top-rated family, cosmetic, and emergency dental care from Dr. Daood Alvi and team.",
};

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageBanner
        title="Patient Reviews &amp; Testimonials"
        subtitle="Trusted by Over 1,200+ Copperas Cove Families"
        description="We’ve had the privilege of serving wonderful patients over the years. Read firsthand feedback from our community, or share your own experience on Google!"
        bgImage="/assets/images/banner-services.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Patient Reviews" },
        ]}
      />

      {/* Interactive Reviews Slider */}
      <HomeReviewsSlider />

      {/* Review Actions Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <div>
            <span className="text-teal-700 font-bold uppercase tracking-wider text-xs bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
              Your Voice Matters
            </span>
            <h3 className="text-3xl font-extrabold text-[#0b2545] mt-3 mb-3">
              Leave a Review on Google
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Did our team help relieve tooth pain or give you a brighter smile? We would be honored if you took a minute to share your feedback with your Copperas Cove neighbors.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.google.com/maps/place/Cove+Choice+Dental/@31.1121869,-97.9099801,17z/data=!3m1!4b1!4m7!3m6!1s0x0:0x547e89050c3afe38!8m2!3d31.1121869!4d-97.9077914!9m1!1b1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0b2545] hover:bg-[#134074] text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow transition-all flex items-center gap-2"
            >
              <span>Write a Google Review</span>
              <span>↗</span>
            </a>

            <a
              href="https://www.facebook.com/Dentistcopperascove/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2"
            >
              <span>Facebook Reviews</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
