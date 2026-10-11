import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Cosmetic Dentistry Copperas Cove, TX | Veneers & Teeth Whitening",
  description:
    "Transform your smile with cosmetic dentistry in Copperas Cove, TX at Cove Choice Dental. Porcelain veneers, Zoom teeth whitening, dental bonding, and metal-free crowns.",
};

export default function CosmeticDentistryPage() {
  return (
    <ServicePageLayout
      title="Cosmetic Dentistry in Copperas Cove, TX"
      subtitle="Smile Makeovers • Veneers • Teeth Whitening"
      description="A radiant, confident smile opens doors in both personal and professional life. At Cove Choice Dental, we combine artistic design with cutting-edge dental ceramics to erase discoloration, chips, gaps, and misalignment."
      bgImage="/assets/images/banner-services.jpg"
      breadcrumbLabel="Cosmetic Dentistry"
      specialOffer={{
        title: "Free Cosmetic Consultation",
        price: "Consult",
        notes: "Digital Smile Analysis & Treatment Options",
        href: "/request-an-appointment",
      }}
    >
      <div className="why">
        <h2>Why Choose Cove Choice Dental for Cosmetic Dentistry?</h2>
        <ul>
          <li><strong>Artistic &amp; Natural Aesthetics:</strong> Custom tooth shading designed to harmonize with your facial features and skin tone.</li>
          <li><strong>Comprehensive Options:</strong> From 1-hour Zoom whitening to full porcelain veneer smile makeovers.</li>
          <li><strong>Conservative Approach:</strong> Minimal enamel reduction techniques that preserve natural tooth integrity.</li>
          <li><strong>0% Interest Financing:</strong> CareCredit® flexible payment plans to fit your monthly budget.</li>
        </ul>
      </div>

      <h2>Popular Cosmetic Dental Treatments</h2>

      {/* Porcelain Veneers */}
      <div className="my-8">
        <h3>Porcelain Veneers</h3>
        <p>
          <img
            src="/assets/images/cosmetic-1.jpg"
            alt="Patient reviewing shade guide for porcelain veneers"
            className="elem-left"
          />
          Porcelain veneers are ultra-thin shells of durable medical-grade ceramic permanently bonded to the front surface of your teeth. Veneers can instantly correct chips, severe discoloration, gaps, and misshapen teeth in as few as two visits.
        </p>
        <p>
          <Link href="/veneers" className="text-[#204369] font-bold hover:text-[#e64b38] hover:underline">
            Learn More About Porcelain Veneers →
          </Link>
        </p>
      </div>

      {/* Teeth Whitening */}
      <div className="my-8">
        <h3>Professional Teeth Whitening</h3>
        <p>
          <img
            src="/assets/images/cosmetic-4.jpg"
            alt="Before and after teeth whitening transformation"
            className="elem-left"
          />
          Store-bought strips only remove surface stains. Our professional in-office and take-home Zoom whitening kits break up deep intrinsic stains from coffee, tea, wine, and aging, brightening your teeth up to 8 shades in a single session.
        </p>
        <p>
          <Link href="/teeth-whitening" className="text-[#204369] font-bold hover:text-[#e64b38] hover:underline">
            Learn More About Teeth Whitening →
          </Link>
        </p>
      </div>

      {/* Cosmetic Dental Bonding */}
      <div className="my-8">
        <h3>Cosmetic Dental Bonding</h3>
        <p>
          <img
            src="/assets/images/cosmetic-3.jpg"
            alt="Dentist applying composite resin for dental bonding"
            className="elem-left"
          />
          For minor chips, small gaps, or localized discoloration, cosmetic bonding offers a fast, affordable fix in just one visit. We sculpt composite resin directly onto the tooth and cure it with high-intensity light for an unnoticeable seamless match.
        </p>
        <p>
          <Link href="/cosmetic-bonding" className="text-[#204369] font-bold hover:text-[#e64b38] hover:underline">
            Learn More About Cosmetic Bonding →
          </Link>
        </p>
      </div>

      {/* Metal-Free Ceramic Crowns */}
      <div className="my-8">
        <h3>Metal-Free Ceramic Dental Crowns</h3>
        <p>
          <img
            src="/assets/images/cosmetic-2.jpg"
            alt="Metal free ceramic dental crown"
            className="elem-left"
          />
          Gone are the days of unsightly dark metal lines near the gums. We craft 100% metal-free porcelain crowns that replicate natural translucency while providing exceptional bite strength.
        </p>
      </div>

      <h2>Understanding the Cost &amp; Financing of Cosmetic Dentistry</h2>
      <p>
        <img
          src="/assets/images/cosmetic-faq-1.jpg"
          alt="Smiling patient discussing cosmetic dental options in Copperas Cove"
          className="elem-left"
        />
        Cosmetic dentistry is a personalized investment in your quality of life, self-esteem, and social confidence. Because every smile is unique, cost depends on the specific treatments selected.
      </p>
      <p>
        While elective cosmetic treatments are typically not covered by insurance, restorations that also provide structural protection (such as dental crowns or bonding) may qualify for partial coverage. We also offer 0% interest monthly payment options through CareCredit®.
      </p>

      {/* Schedule Consultation Callout */}
      <div className="mt-10 bg-gradient-to-r from-[#0b2545] to-[#134074] text-white p-8 rounded-3xl text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Ready to Design Your Dream Smile?</h3>
        <p className="text-slate-200 text-sm max-w-xl mx-auto mb-6">
          Schedule your cosmetic dental consultation with Cove Choice Dental today. Call us at (254) 987-6777 or book online.
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
            Request Cosmetic Consult
          </Link>
        </div>
      </div>
    </ServicePageLayout>
  );
}
