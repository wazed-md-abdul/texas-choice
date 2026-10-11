import type { Metadata } from "next";
import HomeHero from "@/components/HomeHero";
import WhyChooseUs from "@/components/WhyChooseUs";
import HomeServicesSlider from "@/components/HomeServicesSlider";
import MeetDoctors from "@/components/MeetDoctors";
import InsuranceFinancingSection from "@/components/InsuranceFinancingSection";
import HomeReviewsSlider from "@/components/HomeReviewsSlider";
import OfficeTourSection from "@/components/OfficeTourSection";
import AppointmentSection from "@/components/AppointmentSection";
import GoogleMapSection from "@/components/GoogleMapSection";

export const metadata: Metadata = {
  title:
    "Dentist Copperas Cove, TX | Cove Choice Dental | Top Rated Family & Emergency Dentist",
  description:
    "Visit Cove Choice Dental in Copperas Cove, TX. Comprehensive family dentistry, same-day emergency dental care, dental implants, cosmetic dentistry, Medicaid and major insurance accepted.",
  openGraph: {
    title: "Dentist Copperas Cove, TX | Cove Choice Dental",
    description:
      "Compassionate, high-quality family and emergency dentistry in Copperas Cove, TX. Welcoming new patients with affordable specials.",
    url: "https://www.texaschoicedental.com/",
    siteName: "Cove Choice Dental",
    images: [
      {
        url: "/assets/images/header-logo.png",
        width: 800,
        height: 600,
        alt: "Cove Choice Dental",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero with Slideshow & Claimable Coupons */}
      <HomeHero />

      {/* 2. What Makes Us Unique / Value Proposition */}
      <WhyChooseUs />

      {/* 3. Comprehensive Dental Services Grid */}
      <HomeServicesSlider />

      {/* 4. Meet the Dentists */}
      <MeetDoctors />

      {/* 5. Affordable Care, Dental Insurance & Medicaid */}
      <InsuranceFinancingSection />

      {/* 6. Patient Reviews & Testimonials */}
      <HomeReviewsSlider />

      {/* 7. Comfortable State-of-the-Art Office Tour & Tech */}
      <OfficeTourSection />

      {/* 8. Online Appointment Request Form */}
      <AppointmentSection />

      {/* 9. Interactive Office Location & Google Map */}
      <GoogleMapSection />
    </main>
  );
}
