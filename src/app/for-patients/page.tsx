import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "New Patients | Dental Insurance | Cove Choice Dental Copperas Cove, TX",
  description: "Prepare for your first dental visit with new patient information, dental insurance details, and financing options at Cove Choice Dental in Copperas Cove, TX.",
};

export default function ForPatientsPage() {
  const contentHtml = `
<div class="why">
  <h2>What to Expect at Cove Choice Dental</h2>
  <ul>
    <li>Warm, Welcoming &amp; Caring Dental Team</li>
    <li>Wide Range of Dental Insurance Plans Accepted + Medicaid &amp; CHIP</li>
    <li>Flexible Monthly Financing with CareCredit &amp; Sunbit</li>
  </ul>
</div>

<div class="page-divider">
  <h2>Your First Dental Visit</h2>
  <p>From the moment you walk through our doors, our front desk team greets you with a warm welcome. If you haven't filled out your new patient registration forms beforehand, we will provide them upon arrival. Once checked in, one of our gentle assistants will escort you to your treatment suite. We take the time to listen to your health history, dental goals, and concerns before performing a thorough, gentle cleaning and examination.</p>

  <h2>Dental Insurance Welcomed</h2>
  <p>Quality dental care should be affordable and accessible for every family. We are proud to accept a wide variety of dental insurance policies. Our team will verify your benefits, explain your coverage, and submit all claims directly on your behalf to minimize your out-of-pocket costs.</p>

  <h3>We Proudly Work with Leading Dental Insurance Providers:</h3>
  <ul class="two-col">
    <li>Aetna PPO</li>
    <li>Ameritas</li>
    <li>Blue Cross Blue Shield</li>
    <li>Cigna Dental</li>
    <li>Delta Dental Premier &amp; PPO</li>
    <li>Guardian</li>
    <li>Humana Dental</li>
    <li>MetLife</li>
    <li>Texas Medicaid &amp; CHIP</li>
    <li>United Concordia (Military &amp; Civilian)</li>
    <li>United Healthcare</li>
    <li>...and many more!</li>
  </ul>
  <p>Don't see your carrier listed? Give our friendly team a call at <a href="tel:2542712882">(254) 271-2882</a> — chances are we accept your plan!</p>
  <p><a class="btn" href="/dental-insurance">Explore Dental Insurance Details</a></p>

  <h2>Sunbit &amp; CareCredit Flexible Financing</h2>
  <p>Even with insurance, copays for major dental restorations can be tough on a monthly budget. With third-party healthcare financing from CareCredit and Sunbit, you can break your treatment costs into convenient, low-interest or interest-free monthly installments. Applications take just minutes with instant approval decisions.</p>
  <p><a class="btn" href="https://www.carecredit.com/doctor-locator/General-Dentist-in-COPPERAS-COVE-TX-76522/Cove-Choice-Dental/" target="_blank" rel="noopener noreferrer">Apply for CareCredit Online</a></p>

  <h2>Medicaid &amp; CHIP Welcome</h2>
  <p>To ensure all children and teens in Copperas Cove have access to pristine oral healthcare, Cove Choice Dental proudly welcomes Texas Medicaid and CHIP. Checkups, cleanings, X-rays, and cavity restorations are 100% covered for eligible children.</p>
  <p><a class="btn" href="/medicaid-and-chip">Learn More About Medicaid &amp; CHIP</a></p>
</div>

<div class="more-to-explore">
  <span>More to Explore</span>
  <p>
    <a class="btn" href="/faqs">Frequently Asked Questions</a>
    <a class="btn" href="/dental-insurance">Insurance &amp; Financing</a>
    <a class="btn" href="/preventive-dentistry">Preventive Dental Care</a>
    <a class="btn-alt" href="/dental-services">View All Dental Services</a>
  </p>
</div>
`;

  return (
    <ServicePageLayout
      title="Dental Patient Information"
      subtitle="Dedicated to Making Your Visit Comfortable & Smooth in Copperas Cove, TX"
      description="Welcome to Cove Choice Dental! Learn about your first visit, insurances accepted, financing options, and what to expect during your appointment."
      breadcrumbLabel="Patient Information"
      bgImage="/assets/images/banner-services.jpg"
      sidebarType="appointment"
      specialOffer={{
        title: "New Patient Special",
        price: "$59",
        description: "Includes Comprehensive Examination, Digital X-Rays & Consultation.",
        link: "/request-an-appointment",
        badge: "Welcome Offer",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </ServicePageLayout>
  );
}
