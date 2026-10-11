import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Humana Dentist Copperas Cove, TX | Dental Coverage | Cove Choice Dental",
  description: "Looking for an in-network Humana dentist in Copperas Cove, TX? At Cove Choice Dental, we help you make the most of your Humana dental insurance coverage.",
};

export default function HumanaDentistPage() {
  const contentHtml = `
<div class="why">
  <h2>Why Choose Cove Choice Dental as Your Humana Dentist?</h2>
  <ul>
    <li>In-Network Savings with Humana Dental PPO Plans</li>
    <li>100% Coverage for Routine Preventive Dental Care</li>
    <li>Full Claim Submission &amp; Dedicated Benefit Coordination</li>
  </ul>
</div>

<div class="page-divider">
  <h2>Humana Coverage Availability &amp; Typical Fees</h2>
  <p><img alt="a dental patient smiling while visiting his dentist" class="elem-left" src="/assets/images/humana-1.jpg"/></p>
  <p>Patients who carry dental insurance through Humana can look forward to significantly lower out-of-pocket costs when maintaining their smiles. While individual policies differ in deductibles and copays, Humana dental plans typically provide the following breakdown:</p>
  <ul>
    <li><strong>Preventive Care (100% Covered):</strong> Routine comprehensive dental exams, cleanings, and diagnostic X-rays.</li>
    <li><strong>Minor Restorative Treatments (Up to 80% Covered):</strong> Tooth-colored composite fillings and basic dental repairs.</li>
    <li><strong>Major Restorative Procedures (Up to 50% Covered):</strong> Custom crowns, dental bridges, dentures, and tooth extractions.</li>
  </ul>
  <p>By visiting an in-network Humana dentist, you avoid unexpected balance billing and benefit from pre-established negotiated rates that protect your budget.</p>

  <h2>Speak with Our Front Desk Team</h2>
  <p><img alt="a front desk team member smiling" class="elem-left" src="/assets/images/humana-2.jpg"/></p>
  <p>Having dental insurance is wonderful, but navigating details like waiting periods, deductibles, and annual maximums can feel daunting. Our Copperas Cove front desk team does all the heavy lifting: we verify your coverage beforehand, clearly outline any anticipated patient portions, and handle all electronic claims processing directly with Humana.</p>
</div>

<div class="more-to-explore">
  <span>More to Explore</span>
  <p>
    <a class="btn" href="/dental-insurance">Dental Insurance Guide</a>
    <a class="btn" href="/preventive-dentistry">Preventive Care</a>
    <a class="btn" href="/restorative-dentistry">Restorative Dentistry</a>
    <a class="btn" href="/emergency-dentistry">Emergency Dental Care</a>
    <a class="btn-alt" href="/dental-services">View All Dental Services</a>
  </p>
</div>
`;

  return (
    <ServicePageLayout
      title="In-Network Humana Dentist"
      subtitle="Make the Most of Your Humana Dental Coverage in Copperas Cove, TX"
      description="Quality family dentistry that works with your budget. Cove Choice Dental is proud to accept and optimize Humana dental insurance plans."
      breadcrumbLabel="Humana Dentist"
      bgImage="/assets/images/banner-services.jpg"
      sidebarType="insurance"
      specialOffer={{
        title: "Humana Welcome",
        price: "$0 Copay",
        description: "Preventive cleanings, checkups & X-rays are typically 100% covered under Humana dental plans.",
        link: "/request-an-appointment",
        badge: "In-Network Provider",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </ServicePageLayout>
  );
}
