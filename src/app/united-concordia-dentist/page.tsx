import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "United Concordia Dentist Copperas Cove TX | In-Network Dentist | Cove Choice Dental",
  description: "As an in-network United Concordia dentist in Copperas Cove, TX, our team is pleased to help patients maximize their dental insurance benefits.",
};

export default function UnitedConcordiaDentistPage() {
  const contentHtml = `
<div class="why">
  <h2>Why Choose Cove Choice Dental as Your United Concordia Dentist?</h2>
  <ul>
    <li>Contracted In-Network Provider for United Concordia Plans</li>
    <li>100% Coverage for Routine Preventive Cleanings &amp; Exams</li>
    <li>Full Claim Submission, Transparent Estimates &amp; Military-Friendly Care</li>
  </ul>
</div>

<div class="page-divider">
  <h2>United Concordia Coverage Availability &amp; Typical Fees</h2>
  <p><img alt="dental patient holding mirror smiling at her reflection" class="elem-left" src="/assets/images/united-1.jpg"/></p>
  <p>United Concordia provides trusted dental benefits to individuals, families, and military families nationwide. Most United Concordia PPO policies feature a helpful tiered benefit design:</p>
  <ul>
    <li><strong>Preventive Services (Often 100% Covered):</strong> Comprehensive oral evaluations, bi-annual cleanings, bitewing X-rays, and fluoride treatments.</li>
    <li><strong>Basic Services (Up to 80% Covered):</strong> Composite fillings, tooth extractions, and non-surgical treatments.</li>
    <li><strong>Major Services (Up to 50% Covered):</strong> Porcelain crowns, bridges, dentures, and periodontal deep cleanings.</li>
  </ul>
  <p>Visiting an in-network United Concordia dentist guarantees you receive pre-established, contracted rates, ensuring you keep more money in your pocket while receiving top-tier dental care.</p>

  <h2>Speak with Our Copperas Cove Front Desk Team</h2>
  <p><img alt="patient and dental team member standing at dental office front desk" class="elem-left" src="/assets/images/united-2.jpg"/></p>
  <p>Our team is dedicated to helping you maximize your annual benefits before they expire on December 31st. We verify your coverage, handle all electronic claim filings, and help plan your treatment timeline so you get the most out of your dental plan. Contact our Copperas Cove team today to schedule your visit!</p>
</div>

<div class="more-to-explore">
  <span>More to Explore</span>
  <p>
    <a class="btn" href="/dental-insurance">Dental Insurance Guide</a>
    <a class="btn" href="/preventive-dentistry">Preventive Care</a>
    <a class="btn" href="/dental-crowns">Dental Crowns</a>
    <a class="btn" href="/restorative-dentistry">Restorative Dentistry</a>
    <a class="btn-alt" href="/dental-services">View All Dental Services</a>
  </p>
</div>
`;

  return (
    <ServicePageLayout
      title="In-Network United Concordia Dentist"
      subtitle="Maximize Your United Concordia Dental Benefits in Copperas Cove, TX"
      description="Proudly serving civilian and military families. Cove Choice Dental is an in-network United Concordia dental provider."
      breadcrumbLabel="United Concordia"
      bgImage="/assets/images/banner-services.jpg"
      sidebarType="insurance"
      specialOffer={{
        title: "United Concordia Welcome",
        price: "$0 Copay",
        description: "Routine checkups, exams, and cleanings are typically 100% covered under United Concordia PPO plans.",
        link: "/request-an-appointment",
        badge: "In-Network Provider",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </ServicePageLayout>
  );
}
