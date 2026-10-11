import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Tooth-Colored Fillings Copperas Cove, TX | Composite Restorations | Cove Choice Dental",
  description:
    "Repair cavities seamlessly with metal-free, tooth-colored composite fillings in Copperas Cove, TX at Cove Choice Dental. Natural, safe, and biocompatible.",
};

export default function ToothColoredFillingsPage() {
  const contentHtml = `
<div class="why">
  <h2>Why Choose Cove Choice Dental for Tooth-Colored Fillings?</h2>
  <ul>
    <li>100% Metal-Free &amp; Biocompatible Composite Resin</li>
    <li>Matched to Your Exact Natural Enamel Shade</li>
    <li>Preserves More Healthy Tooth Structure Than Silver Amalgams</li>
    <li>Gentle, One-Visit Cavity Treatment with Local Anesthetics</li>
  </ul>
</div>

<div class="page-divider">
  <h2>What Are Tooth-Colored Fillings?</h2>
  <p>
    <img
      alt="Tooth-colored filling illustration in Copperas Cove"
      class="elem-left"
      src="/assets/images/fillings-1.jpg"
    />
    For decades, dark gray amalgam fillings containing mercury and silver were the standard for cavity repair. While durable, metal amalgams expand and contract with temperature changes, causing micro-fractures in surrounding teeth over time.
  </p>
  <p>
    Today, Cove Choice Dental uses advanced composite resin fillings made of biocompatible glass particles and high-grade resin. They bond directly to your natural enamel, sealing out harmful bacteria and blending invisibly with your smile.
  </p>

  <h2>The Process of Getting a Tooth-Colored Filling</h2>
  <p>
    <img
      alt="Patient smiling after getting tooth-colored fillings in Copperas Cove"
      class="elem-left"
      src="/assets/images/fillings-2.jpg"
    />
    Receiving a composite filling is quick, painless, and completed in just one comfortable appointment:
  </p>
  <ul>
    <li><strong>Gentle Numbing:</strong> Local anesthetic completely desensitizes the tooth so you don't feel a thing.</li>
    <li><strong>Decay Removal &amp; Sanitization:</strong> The decayed area is meticulously cleaned and sterilized.</li>
    <li><strong>Layering &amp; Bonding:</strong> Shaded composite resin is applied in micro-layers, precisely filling the cavity.</li>
    <li><strong>UV Light Curing:</strong> A specialized curing light hardens the material in seconds.</li>
    <li><strong>Bite Alignment &amp; Polish:</strong> We polish the restoration to a silky smooth sheen and confirm your bite feels 100% natural.</li>
  </ul>

  <h2>Benefits of Composite Resin Fillings</h2>
  <p>
    <img
      alt="Woman smiling with tooth-colored fillings"
      class="elem-left"
      src="/assets/images/fillings-3.jpg"
    />
  </p>
  <ul>
    <li><strong>Invisible Aesthetics:</strong> No one can tell where your natural tooth ends and the filling begins.</li>
    <li><strong>Temperature Insulation:</strong> Shields tooth nerves from extreme hot and cold sensations.</li>
    <li><strong>Conservative Dentistry:</strong> Bonds directly to enamel, requiring less drilling than metal fillings.</li>
    <li><strong>Safe for Everyone:</strong> Mercury-free and hypoallergenic for patients with metal sensitivities.</li>
  </ul>
</div>

<div class="more-to-explore">
  <span>More to Explore</span>
  <p>
    <a class="btn" href="/dental-crowns">Dental Crowns</a>
    <a class="btn" href="/root-canal-therapy">Root Canal Therapy</a>
    <a class="btn" href="/preventive-dentistry">Dental Checkups &amp; Cleanings</a>
    <a class="btn" href="/childrens-dentistry">Children's Dentistry</a>
    <a class="btn-alt" href="/dental-services">Explore All Services →</a>
  </p>
</div>
`;

  return (
    <ServicePageLayout
      title="Tooth-Colored Fillings in Copperas Cove, TX"
      subtitle="Modern, Mercury-Free Composite Cavity Restorations"
      description="Cavities are common, but they shouldn't compromise your smile. Our tooth-colored composite resin fillings repair decay seamlessly, restoring dental strength while preserving your natural aesthetics."
      breadcrumbLabel="Tooth-Colored Fillings"
      bgImage="/assets/images/banner-services.jpg"
      specialOffer={{
        title: "$100 New Patient Exam Special",
        price: "$100",
        notes: "Includes Comprehensive Exam, Digital X-Rays & Whitening Pen",
        href: "/offers-promotions",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </ServicePageLayout>
  );
}
