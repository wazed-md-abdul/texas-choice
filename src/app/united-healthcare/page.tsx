import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "United Healthcare Dentist in Copperas Cove, TX | Dental Insurance | Cove Choice Dental",
  description: "Achieve optimal oral health without breaking the bank by visiting your United Healthcare dentist in Copperas Cove, TX. Learn how we maximize your benefits.",
};

export default function UnitedHealthcarePage() {
  const contentHtml = `
<div class="why">
  <h2>Why Choose Cove Choice Dental for United Healthcare?</h2>
  <ul>
    <li>Contracted Savings for United Healthcare Dental Members</li>
    <li>100% Coverage for Preventive Dental Exams &amp; Cleanings</li>
    <li>We Direct-Bill United Healthcare &amp; Assist with Claims</li>
  </ul>
</div>

<div class="page-divider">
  <h2>United Healthcare Coverage Availability &amp; Typical Fees</h2>
  <p><img alt="Smiling woman in dentist’s chair" class="elem-left" src="/assets/images/united-1.jpg"/></p>
  <p>United Healthcare is a leading provider of comprehensive dental coverage for individuals and employers. While policies vary, most United Healthcare PPO plans provide generous tiered coverage:</p>
  <ul>
    <li><strong>Preventive Care (100% Covered):</strong> Bi-annual checkups, cleanings, and diagnostic X-rays are typically fully covered without out-of-pocket costs.</li>
    <li><strong>Basic Dental Services (Up to 80% Covered):</strong> Cavity fillings, simple extractions, and non-surgical procedures.</li>
    <li><strong>Major Dental Services (Up to 50% Covered):</strong> Crowns, bridges, dentures, and surgical extractions.</li>
  </ul>
  <p>Did you know that dental research reveals every $1 spent on preventive care saves up to $50 on future restorative treatments? Taking advantage of your bi-annual covered checkups keeps your teeth strong and stops small concerns before they turn into major problems.</p>

  <h2>Speak with Our Front Desk Team</h2>
  <p><img alt="Dentist appointment and toothbrush on calendar" class="elem-left" src="/assets/images/united-2.jpg"/></p>
  <p>Unused dental insurance benefits reset every year on December 31st — whatever remains does not roll over. Our team at Cove Choice Dental helps ensure you make the most of every dollar in your annual maximum before it expires. We explain your benefits clearly and offer flexible third-party financing through CareCredit for any remaining copays.</p>
</div>

<div class="more-to-explore">
  <span>More to Explore</span>
  <p>
    <a class="btn" href="/dental-insurance">Dental Insurance Guide</a>
    <a class="btn" href="/preventive-dentistry">Preventive Care</a>
    <a class="btn" href="/restorative-dentistry">Restorative Dentistry</a>
    <a class="btn" href="/dental-crowns">Dental Crowns</a>
    <a class="btn-alt" href="/dental-services">View All Dental Services</a>
  </p>
</div>
`;

  return (
    <ServicePageLayout
      title="United Healthcare Dentist"
      subtitle="Maximize Your United Healthcare Dental Benefits in Copperas Cove, TX"
      description="Protect your oral health and budget with your United Healthcare dental benefits at Cove Choice Dental."
      breadcrumbLabel="United Healthcare"
      bgImage="/assets/images/banner-services.jpg"
      sidebarType="insurance"
      specialOffer={{
        title: "United Healthcare Welcome",
        price: "$0 Copay",
        description: "Routine checkups, exams, and cleanings are typically 100% covered under United Healthcare dental plans.",
        link: "/request-an-appointment",
        badge: "In-Network Provider",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </ServicePageLayout>
  );
}
