import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Modern Dentures Copperas Cove, TX | Full, Partial & Implant Dentures",
  description:
    "Replace missing teeth with comfortable, natural-looking dentures in Copperas Cove, TX. Full, partial, and implant-supported dentures at Cove Choice Dental. Flexible financing available.",
};

export default function DenturesPage() {
  return (
    <ServicePageLayout
      title="Dentures in Copperas Cove, TX"
      subtitle="Comfortable, Natural-Looking Full & Partial Dentures"
      description="Extensive tooth loss can make eating, speaking, and smiling difficult. Modern dentures at Cove Choice Dental are custom-crafted to fit your unique oral contours comfortably and securely."
      bgImage="/assets/images/banner-services.jpg"
      breadcrumbLabel="Dentures"
      specialOffer={{
        title: "Denture Consultation",
        price: "Consult",
        notes: "Full, Partial & Implant Options Discussed",
        href: "/request-an-appointment",
      }}
    >
      <div className="why">
        <h2>Why Choose Cove Choice Dental for Dentures?</h2>
        <ul>
          <li><strong>Natural-Looking Aesthetics:</strong> Custom tooth-shading and realistic gum-colored acrylics that look like your real smile.</li>
          <li><strong>Full, Partial &amp; Implant-Retained:</strong> Options tailored to your exact number of missing teeth and budget.</li>
          <li><strong>Comfort-First Precision:</strong> Detailed impressions and adjustments ensure a snug, comfortable, suction-locked fit.</li>
          <li><strong>Discounts &amp; Flexible Financing:</strong> We accept major dental PPOs, Medicaid, and CareCredit® monthly payment plans.</li>
        </ul>
      </div>

      <h2>What Are Dentures?</h2>
      <p>
        <img
          src="/assets/images/dentures-1.jpg"
          alt="Hand holding modern natural looking dentures"
          className="elem-left"
        />
        Dentures are removable prosthetic appliances designed to replace missing natural teeth and restore oral function. Modern dental materials ensure today&apos;s restorations look exceptionally natural, feel lightweight, and provide reliable chewing support.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 my-6">
        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
          <h3 className="text-base font-bold text-[#0b2545] m-0 mb-1">Full Dentures</h3>
          <p className="text-xs sm:text-sm text-slate-600 m-0">
            Replaces an entire arch of missing teeth (upper, lower, or both). Held securely in place by natural suction and specialized denture adhesive if desired.
          </p>
        </div>

        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
          <h3 className="text-base font-bold text-[#0b2545] m-0 mb-1">Partial Dentures</h3>
          <p className="text-xs sm:text-sm text-slate-600 m-0">
            Fills scattered gaps when some natural teeth remain. Features an acrylic base with discrete, strong metal clasps that anchor onto neighboring teeth.
          </p>
        </div>
      </div>

      <h2>Implant-Retained Dentures: The Ultimate Stability</h2>
      <p>
        <img
          src="/assets/images/dentures-5.jpg"
          alt="Dentist discussing implant retained dentures"
          className="elem-left"
        />
        If you are tired of dentures that slip, click, or require messy pastes, implant-retained dentures offer a revolutionary upgrade. By placing 4 to 6 titanium implant posts in your jawbone, your denture snaps firmly onto the implants.
      </p>
      <ul>
        <li><strong>No Slipping or Clicking:</strong> Speak, laugh, and eat without fear of embarrassing movement.</li>
        <li><strong>Preserves Jawbone Density:</strong> Implants stimulate bone tissue, preventing facial collapse and premature wrinkling.</li>
        <li><strong>Maximum Chewing Power:</strong> Enjoy hearty foods, nuts, and meats without discomfort.</li>
      </ul>

      <h2>Benefits of Replacing Missing Teeth with Dentures</h2>
      <p>
        <img
          src="/assets/images/dentures-3.jpg"
          alt="Smiling woman with complete dentures"
          className="elem-left"
        />
        Restoring your smile provides transformative psychological and health benefits:
      </p>
      <ul>
        <li><strong>Clearer Speech &amp; Pronunciation:</strong> Restores proper tongue-to-tooth contact for crisp enunciation.</li>
        <li><strong>Expanded Diet &amp; Nutrition:</strong> Thoroughly chew wholesome fruits, vegetables, and proteins for better digestion.</li>
        <li><strong>Youthful Facial Support:</strong> Prevents sunken cheeks and sagging lips by maintaining natural facial dimensions.</li>
        <li><strong>Boosted Confidence:</strong> Smile proudly in family photos, social events, and job interviews.</li>
      </ul>

      <h2>Understanding the Cost &amp; Insurance Coverage for Dentures</h2>
      <p>
        <img
          src="/assets/images/dentures-cost-1.jpg"
          alt="Discussing cost of dentures in Copperas Cove"
          className="elem-left"
        />
        At Cove Choice Dental, we ensure affordable tooth replacement solutions for every budget. Most dental insurance plans classify dentures as a major procedure and cover up to 50% of the cost.
      </p>
      <ul>
        <li><strong>Insurance Claim Assistance:</strong> Our front desk team files all insurance claims on your behalf to maximize coverage.</li>
        <li><strong>Medicaid &amp; CHIP:</strong> We help eligible patients take full advantage of their dental coverage.</li>
        <li><strong>CareCredit® Financing:</strong> Low and no-interest monthly installments allow you to receive your new teeth without upfront stress.</li>
      </ul>

      {/* Conversion Banner */}
      <div className="mt-10 bg-gradient-to-r from-[#0b2545] to-[#134074] text-white p-8 rounded-3xl text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Schedule Your Denture Consultation Today</h3>
        <p className="text-slate-200 text-sm max-w-xl mx-auto mb-6">
          Ready to regain your smile and chew with ease? Contact Cove Choice Dental in Copperas Cove to discuss custom full, partial, and implant dentures.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:12549876777"
            className="bg-white hover:bg-slate-100 text-[#0b2545] font-bold py-3.5 px-8 rounded-xl text-base shadow transition-all"
          >
            Call: (254) 987-6777
          </a>
          <Link
            href="/request-an-appointment"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-3.5 px-6 rounded-xl text-sm transition-all"
          >
            Book Consultation Online
          </Link>
        </div>
      </div>
    </ServicePageLayout>
  );
}
