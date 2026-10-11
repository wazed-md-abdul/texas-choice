import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Implant-Supported Dentures Copperas Cove, TX | Stable Dentures | Cove Choice Dental",
  description:
    "End slipping dentures forever with implant-supported dentures in Copperas Cove, TX. Fixed and snap-in dentures that restore 100% stability at Cove Choice Dental.",
};

export default function ImplantDenturesPage() {
  const contentHtml = `
<div class="why">
  <h2>Why Choose Cove Choice Dental for Implant Dentures?</h2>
  <ul>
    <li>Implant Placement Surgery Performed Completely In-House</li>
    <li>Fixed (Permanent) &amp; Snap-On Removable Options</li>
    <li>Locks Securely in Place—Zero Slipping, Clicking, or Pastes</li>
    <li>Flexible Monthly Payments with 0% Interest CareCredit®</li>
  </ul>
</div>

<div class="page-divider">
  <h2>What Are Implant Dentures?</h2>
  <p>
    <img
      alt="Six implants supporting implant dentures in Copperas Cove, TX"
      class="elem-left"
      src="/assets/images/implant-dentures-1.jpg"
    />
    Traditional dentures rely solely on suction and messy adhesives along the gums, which often leads to slipping, painful rubbing, and embarrassing speech issues. Implant dentures solve this by anchoring customized full or partial dentures securely onto titanium implant posts fused into your jawbone.
  </p>

  <h2>Two Types of Implant Dentures</h2>
  <div class="section-toggle">
    <h3>1. Fixed / Permanent Implant Dentures</h3>
    <p>
      Fixed implant dentures remain permanently locked in place 24/7. Only your dentist removes them during routine checkups. They look, feel, and function just like natural teeth and are brushed in place normally.
    </p>

    <h3>2. Removable "Snap-In" Overdentures</h3>
    <p>
      Snap-in overdentures clip firmly onto two to four implant ball-and-socket attachments. They provide absolute chewing stability throughout the day, yet can be snapped off at night for effortless cleaning.
    </p>
  </div>

  <h2>The Implant Denture Process</h2>
  <p>
    <img
      alt="Senior man smiling happily with implant dentures in Copperas Cove"
      class="elem-left"
      src="/assets/images/implant-dentures-2.jpg"
    />
    From your initial 3D digital scan to surgical implant placement and final denture seating, our skilled dentists manage every step of your transformation under one roof in Copperas Cove. After the implants fuse to your jawbone during osseointegration, custom-shaded, lifelike teeth are fabricated and fastened securely into place.
  </p>

  <h2>Benefits of Combining Dentures &amp; Dental Implants</h2>
  <p>
    <img
      alt="Senior couple enjoying dinner with stable implant dentures"
      class="elem-left"
      src="/assets/images/implant-dentures-4.jpg"
    />
  </p>
  <ul>
    <li><strong>Zero Slipping:</strong> Speak, laugh, and smile with 100% confidence without fear of loose teeth.</li>
    <li><strong>Eat Whatever You Want:</strong> Bite into crisp apples, crunchy vegetables, and juicy steaks with restored bite strength.</li>
    <li><strong>Preserves Jawbone Health:</strong> Implant posts stimulate bone density, preventing premature facial sagging.</li>
    <li><strong>Superior Comfort:</strong> Eliminates painful gum sores caused by shifting traditional dentures.</li>
  </ul>
</div>

<div class="more-to-explore">
  <span>More to Explore</span>
  <p>
    <a class="btn" href="/all-on-4">All-on-4 Dental Implants</a>
    <a class="btn" href="/dentures">Traditional Dentures</a>
    <a class="btn" href="/dental-implants">Dental Implants Overview</a>
    <a class="btn" href="/replace-missing-teeth">Replace Missing Teeth</a>
    <a class="btn-alt" href="/dental-services">Explore All Services →</a>
  </p>
</div>
`;

  return (
    <ServicePageLayout
      title="Implant-Supported Dentures in Copperas Cove, TX"
      subtitle="Say Goodbye to Slipping Dentures with Rock-Solid Implant Stability"
      description="Enjoy the comfort and confidence of teeth that never slip or click. Our in-house implant-supported dentures combine the lifelike beauty of modern prosthetics with the unbreakable strength of dental implants."
      breadcrumbLabel="Implant Dentures"
      bgImage="/assets/images/banner-services.jpg"
      specialOffer={{
        title: "Implant Denture Consultation",
        price: "Consult",
        notes: "Full Digital Scan & Restorative Treatment Plan",
        href: "/request-an-appointment",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </ServicePageLayout>
  );
}
