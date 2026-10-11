import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Dental Bridges Copperas Cove, TX | Missing Tooth Replacement | Cove Choice Dental",
  description:
    "Replace one or more consecutive missing teeth with custom porcelain dental bridges in Copperas Cove, TX. Traditional and implant-supported bridges at Cove Choice Dental.",
};

export default function DentalBridgesPage() {
  const contentHtml = `
<div class="why">
  <h2>Why Choose Cove Choice Dental for Dental Bridges?</h2>
  <ul>
    <li>Traditional &amp; Implant-Supported Bridges Placed In-House</li>
    <li>Custom-Shaded Porcelain for Seamless Esthetics</li>
    <li>Restores Chewing Ability &amp; Prevents Teeth from Shifting</li>
    <li>Medicaid, PPOs &amp; Low-Interest Financing Available</li>
  </ul>
</div>

<div class="page-divider">
  <h2>What Is a Dental Bridge?</h2>
  <p>
    <img
      alt="Dental bridge in Copperas Cove replacing missing tooth"
      class="elem-left"
      src="/assets/images/dental-bridges-1.jpg"
    />
    A dental bridge is a fixed dental prosthetic that literally "bridges" the space created by one or more missing teeth. It consists of artificial teeth (pontics) suspended between two custom dental crowns anchored to either healthy neighboring teeth or titanium dental implants.
  </p>

  <h2>Types of Dental Bridges</h2>
  <p>
    <img
      alt="Three-unit porcelain dental bridge"
      class="elem-left"
      src="/assets/images/dental-bridges-2.jpg"
    />
  </p>
  <div class="section-toggle">
    <h3>1. Traditional Dental Bridges</h3>
    <img
      alt="Dental bridge replacing single tooth"
      class="elem-sm"
      src="/assets/images/dental-bridges-3.jpg"
    />
    <p>
      In a traditional bridge, the teeth on either side of the gap are gently shaped to receive supporting crowns. The prosthetic is permanently cemented in place, requiring no surgery and restoring your smile quickly and affordably.
    </p>

    <h3>2. Implant-Supported Bridges</h3>
    <img
      alt="Dental bridge anchored to dental implants"
      class="elem-sm"
      src="/assets/images/dental-bridges-4.jpg"
    />
    <p>
      If you are missing three or four teeth in a row, an implant bridge is anchored onto two sturdy dental implant posts rather than natural teeth. This preserves your healthy neighboring enamel and prevents bone loss in the jaw.
    </p>
  </div>

  <h2>The Benefits of Getting a Dental Bridge</h2>
  <p>
    <img
      alt="Smiling woman enjoying healthy meal after dental bridge"
      class="elem-left"
      src="/assets/images/dental-bridges-5.jpg"
    />
  </p>
  <ul>
    <li><strong>Prevents Dental Drift:</strong> Stops remaining teeth from tilting and throwing off your bite alignment.</li>
    <li><strong>Effortless Chewing:</strong> Restores full ability to chew meats, vegetables, and crunchy foods comfortably.</li>
    <li><strong>Natural Appearance:</strong> Hand-crafted ceramic matches the color and shine of your natural teeth.</li>
    <li><strong>Durable Longevity:</strong> Traditional bridges last 10+ years, while implant bridges can last a lifetime with good hygiene.</li>
  </ul>
</div>

<div class="more-to-explore">
  <span>More to Explore</span>
  <p>
    <a class="btn" href="/dental-implants">Dental Implants</a>
    <a class="btn" href="/dental-crowns">Dental Crowns</a>
    <a class="btn" href="/dentures">Modern Dentures</a>
    <a class="btn" href="/replace-missing-teeth">Replace Missing Teeth</a>
    <a class="btn" href="/preventive-dentistry">Checkups &amp; Cleanings</a>
    <a class="btn-alt" href="/dental-services">Explore All Services →</a>
  </p>
</div>
`;

  return (
    <ServicePageLayout
      title="Dental Bridges in Copperas Cove, TX"
      subtitle="Complete Your Smile &amp; Restore Missing Teeth"
      description="Missing teeth can cause neighboring teeth to drift, alter your bite, and make chewing difficult. Our custom porcelain dental bridges restore full dental function and natural beauty with precision."
      breadcrumbLabel="Dental Bridges"
      bgImage="/assets/images/banner-services.jpg"
      specialOffer={{
        title: "Tooth Replacement Consultation",
        price: "Consult",
        notes: "Detailed Exam & Restorative Options Review",
        href: "/request-an-appointment",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </ServicePageLayout>
  );
}
