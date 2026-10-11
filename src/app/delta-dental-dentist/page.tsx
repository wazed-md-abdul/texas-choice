import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Delta Dental Dentist Copperas Cove TX | In-Network Dental Benefits | Cove Choice Dental",
  description: "Cove Choice Dental in Copperas Cove, TX, is proud to be an in-network Delta Dental dentist. Discover how we help you maximize your benefits.",
};

export default function DeltaDentalDentistPage() {
  const contentHtml = `
<div class="why">
  <h2>Why Choose Cove Choice Dental as Your Delta Dental Dentist?</h2>
  <ul>
    <li>Contracted In-Network Savings with Delta Dental Premier &amp; PPO</li>
    <li>Up to 100% Coverage for Routine Cleanings, Exams &amp; Digital X-Rays</li>
    <li>Dedicated Team Files All Claims &amp; Maximizes Annual Maximums</li>
  </ul>
</div>

<div class="page-divider">
  <h2>Delta Dental Coverage Availability &amp; Typical Fees</h2>
  <p><img alt="smiling female patient interacting with dentist" class="elem-left" src="/assets/images/delta-1.jpg"/></p>
  <p>Delta Dental is one of the largest and most widely recognized dental insurance carriers in the nation. While individual employer policies vary, Delta Dental PPO plans generally follow a standard framework:</p>
  <ul>
    <li><strong>Preventive Services (Often 100% Covered):</strong> Routine checkups, bi-annual hygiene cleanings, bitewing X-rays, and fluoride treatments.</li>
    <li><strong>Basic Services (Up to 80% Covered):</strong> Tooth-colored composite fillings and simple tooth extractions.</li>
    <li><strong>Major Restorative Services (Up to 50% Covered):</strong> Root canal therapy, dental crowns, bridgework, and deep gum treatments.</li>
  </ul>
  <p>By choosing an in-network Delta Dental dentist like Cove Choice Dental, you pay discounted, contracted rates for all covered care, helping your annual benefit maximum (typically $1,000 to $2,000) go much further.</p>

  <h2>Speak with Our Knowledgeable Front Desk Team</h2>
  <p><img alt="smiling dental team member standing behind front desk" class="elem-left" src="/assets/images/delta-2.jpg"/></p>
  <p>Our front office team makes dealing with insurance seamless. Simply provide your member ID and group number when scheduling your appointment. We will verify your active benefits, explain coverage details before treatment starts, and submit all claims electronically on your behalf so you receive the full benefits you deserve.</p>
</div>

<div class="more-to-explore">
  <span>More to Explore</span>
  <p>
    <a class="btn" href="/dental-insurance">Dental Insurance Overview</a>
    <a class="btn" href="/preventive-dentistry">Preventive Care</a>
    <a class="btn" href="/dental-crowns">Dental Crowns</a>
    <a class="btn" href="/restorative-dentistry">Restorative Dentistry</a>
    <a class="btn-alt" href="/dental-services">View All Dental Services</a>
  </p>
</div>
`;

  return (
    <ServicePageLayout
      title="In-Network Delta Dental Dentist"
      subtitle="Maximize Your Delta Dental Benefits in Copperas Cove, TX"
      description="Enjoy maximum savings and exceptional family dental care. Cove Choice Dental is proudly in-network with Delta Dental plans."
      breadcrumbLabel="Delta Dental"
      bgImage="/assets/images/banner-services.jpg"
      sidebarType="insurance"
      specialOffer={{
        title: "Delta Dental Welcome",
        price: "$0 Copay",
        description: "Routine checkups, exams, and cleanings are typically 100% covered for Delta Dental PPO members.",
        link: "/request-an-appointment",
        badge: "In-Network Provider",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </ServicePageLayout>
  );
}
