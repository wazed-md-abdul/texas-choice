import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Aetna Dentist Copperas Cove | In-Network Aetna Dentist | Cove Choice Dental",
  description: "Our Copperas Cove dental practice is proud to be in-network with Aetna dental insurance. Learn how we help you maximize your annual benefits and save.",
};

export default function AetnaDentistPage() {
  const contentHtml = `
<div class="why">
  <h2>Why Choose Cove Choice Dental as Your In-Network Aetna Dentist?</h2>
  <ul>
    <li>Contracted In-Network Savings on All Covered Procedures</li>
    <li>We Direct-Bill Aetna &amp; Handle All Claims &amp; Paperwork</li>
    <li>Year-End Treatment Planning to Maximize Annual Maximums</li>
  </ul>
</div>

<div class="page-divider">
  <h2>Aetna Coverage Availability &amp; Typical Benefits</h2>
  <p><img alt="Smiling patient in dental treatment chair" class="elem-left" src="/assets/images/aetna-1.jpg"/></p>
  <p>Aetna offers a variety of dental insurance plans, each with its own specific copays, deductible structures, and annual maximums. In general, Aetna PPO plans follow a helpful tiered structure:</p>
  <ul>
    <li><strong>Preventive Care (100% Covered):</strong> Routine checkups, professional cleanings, routine bitewing X-rays, and fluoride treatments often involve zero out-of-pocket costs.</li>
    <li><strong>Basic Services (Up to 80% Covered):</strong> Tooth-colored composite fillings, non-surgical gum therapy, and simple extractions.</li>
    <li><strong>Major Services (Up to 50% Covered):</strong> Dental crowns, dental bridges, dentures, and surgical oral procedures.</li>
  </ul>
  <p>Because Cove Choice Dental is contracted directly with Aetna as an in-network provider, you receive pre-negotiated discount rates that out-of-network dentists cannot offer. This allows your annual maximum benefit to stretch significantly further!</p>

  <h2>Our Team Helps You Maximize Your Aetna Benefits</h2>
  <p><img alt="Dental team member assisting patient at front desk" class="elem-left" src="/assets/images/aetna-2.jpg"/></p>
  <p>Navigating dental insurance fine print can feel confusing, but you don't have to do it alone. Our dedicated front-desk insurance specialists will gladly:</p>
  <ul>
    <li>Verify your active Aetna coverage and explain your remaining benefits before treatment starts.</li>
    <li>Submit pre-treatment authorizations so there are never any financial surprises.</li>
    <li>File all electronic claims promptly with proper diagnostic documentation and X-rays.</li>
    <li>Strategically schedule multi-stage treatments across calendar years if you are near your annual maximum.</li>
  </ul>
</div>

<div class="more-to-explore">
  <span>More to Explore</span>
  <p>
    <a class="btn" href="/dental-insurance">Dental Insurance Guide</a>
    <a class="btn" href="/preventive-dentistry">Preventive Dental Checkups</a>
    <a class="btn" href="/dental-crowns">Dental Crowns</a>
    <a class="btn" href="/medicaid-and-chip">Medicaid &amp; CHIP</a>
    <a class="btn-alt" href="/dental-services">View All Dental Services</a>
  </p>
</div>
`;

  return (
    <ServicePageLayout
      title="In-Network Aetna Dentist"
      subtitle="Maximize Your Aetna Dental Insurance Benefits in Copperas Cove, TX"
      description="Keep your smile healthy and your out-of-pocket costs predictable. We are proud to be in-network with Aetna Dental PPO plans."
      breadcrumbLabel="Aetna Dentist"
      bgImage="/assets/images/banner-services.jpg"
      sidebarType="insurance"
      specialOffer={{
        title: "Aetna In-Network",
        price: "$0 Copay",
        description: "Most preventive cleanings, exams & X-rays are 100% covered under Aetna PPO plans.",
        link: "/request-an-appointment",
        badge: "In-Network Provider",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </ServicePageLayout>
  );
}
