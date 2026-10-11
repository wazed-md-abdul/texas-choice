import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Restorative Dentistry Copperas Cove, TX | Dental Crowns | Tooth-Colored Fillings",
  description: "Repair damaged smiles with restorative dentistry in Copperas Cove, TX, including dental crowns and tooth-colored fillings from the trusted dentistry team and dentist at Cove Choice Dental.",
};

export default function RestorativeDentistryPage() {
  const contentHtml = `
<div class="why">
  <h2>Why Choose Cove Choice Dental for Restorative Dentistry?</h2>
  <ul>
    <li>High-Strength, Natural-Looking Tooth-Colored Materials</li>
    <li>Same-Day &amp; One-Visit Restorations Available</li>
    <li>Flexible Financing &amp; Direct Insurance Billing</li>
  </ul>
</div>

<div class="page-divider">
  <h2>Tooth-Colored Fillings</h2>
  <p><img alt="Dentist checking patient's tooth-colored filling" class="elem-left" src="/assets/images/broken-tooth-1.jpg" /></p>
  <p>If you've ever had a dark metal amalgam filling, you know how it can show when you smile or laugh. Thanks to modern biocompatible composite resins, we can repair cavities and minor fractures with restorations that blend seamlessly with your natural enamel. The composite material bonds directly to your tooth structure, requiring far less enamel removal and preserving more of your natural tooth.</p>
  <p><a href="/tooth-colored-fillings" class="btn">Learn More About Tooth-Colored Fillings</a></p>

  <h2>Custom Dental Crowns</h2>
  <p><img alt="Dental crown restoration resting on fingertip" class="elem-left" src="/assets/images/broken-tooth-2.jpg" /></p>
  <p>A dental crown acts as a protective, custom-shaded "cap" fitted over a compromised tooth. Crowns are ideal when extensive decay, large fractures, or severe wear weaken the tooth beyond what a filling can support, or following root canal therapy. Crafted from premium porcelain, zirconia, or ceramic, our crowns replicate the natural translucency, contours, and chewing strength of healthy teeth.</p>
  <p><a class="btn" href="/dental-crowns">Learn More About Dental Crowns</a></p>

  <h2>One-Visit Dental Restorations</h2>
  <p><img alt="Man sharing healthy smile after one-visit dental restoration" class="elem-left" src="/assets/images/broken-tooth-3.jpg" /></p>
  <p>At many traditional dental offices, getting a crown requires multiple appointments, gooey impression trays, and wearing fragile temporaries for weeks. At Cove Choice Dental, modern digital dentistry lets us evaluate, design, and place durable, beautiful restorations efficiently so you can walk out with a restored, confident smile with minimal downtime.</p>
</div>

<div class="more-to-explore">
  <span>More to Explore</span>
  <p>
    <a class="btn" href="/tooth-colored-fillings">Tooth-Colored Fillings</a>
    <a class="btn" href="/dental-crowns">Dental Crowns</a>
    <a class="btn" href="/dental-bridges">Dental Bridges</a>
    <a class="btn" href="/root-canal-therapy">Root Canal Therapy</a>
    <a class="btn" href="/dental-implants">Dental Implants</a>
    <a class="btn-alt" href="/dental-services">View All Dental Services</a>
  </p>
</div>
`;

  return (
    <ServicePageLayout
      title="Restorative Dentistry"
      subtitle="Revitalizing Damaged & Decayed Smiles in Copperas Cove, TX"
      description="There is no need to live with broken, worn, or painful teeth. At Cove Choice Dental, our caring team restores optimal function and lifelike aesthetics with advanced tooth-colored restorations."
      breadcrumbLabel="Restorative Dentistry"
      bgImage="/assets/images/banner-services.jpg"
      specialOffer={{
        title: "Restorative Special",
        price: "$59",
        description: "New Patient Exam, Full X-Ray Series & Treatment Consultation.",
        link: "/request-an-appointment",
        badge: "Special Offer",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </ServicePageLayout>
  );
}
