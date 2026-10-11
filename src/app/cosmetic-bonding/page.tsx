import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Cosmetic Bonding Copperas Cove, TX | Quick Smile Fixes | Cove Choice Dental",
  description:
    "Repair minor tooth chips, cracks, and gaps in just 1 hour with affordable composite bonding in Copperas Cove, TX at Cove Choice Dental.",
};

export default function CosmeticBondingPage() {
  const contentHtml = `
<div class="why">
  <h2>Why Choose Cove Choice Dental for Cosmetic Bonding?</h2>
  <ul>
    <li>Completed in Just One Single 60-Minute Visit</li>
    <li>Budget-Friendly Alternative to Porcelain Veneers</li>
    <li>No Enamel Shaving or Painful Injections Required</li>
    <li>Natural Composite Shading That Blends Seamlessly</li>
  </ul>
</div>

<div class="page-divider">
  <h2>Who Is a Good Candidate for Cosmetic Bonding?</h2>
  <p>
    <img
      alt="Dentist and shade guide for cosmetic bonding in Copperas Cove"
      class="elem-left"
      src="/assets/images/cosmetic-bonding-1.jpg"
    />
    Do you have a small chip on your front tooth, an annoying gap, or an uneven edge that catches your eye in photos? Cosmetic bonding is a fast, conservative, and affordable treatment ideal for correcting minor aesthetic flaws without reshaping your natural tooth enamel.
  </p>
  <ul>
    <li>Chipped or cracked tooth corners</li>
    <li>Small gaps or spacing between front teeth</li>
    <li>Stubborn isolated spots and discoloration</li>
    <li>Misshapen or unusually short teeth</li>
    <li>Exposed tooth roots caused by gum recession</li>
  </ul>

  <h2>How Does Cosmetic Bonding Work?</h2>
  <p>
    <img
      alt="Composite resin bonding procedure in Copperas Cove"
      class="elem-left"
      src="/assets/images/cosmetic-bonding-2.jpg"
    />
    In just one quick visit, our skilled cosmetic dentists can transform your smile:
  </p>
  <ul>
    <li><strong>Shade Matching:</strong> We select a composite resin hue that flawlessly matches your neighboring enamel.</li>
    <li><strong>Surface Conditioning:</strong> A gentle conditioning liquid prepares the tooth surface—no drilling required in most cases!</li>
    <li><strong>Artistic Sculpting:</strong> Our dentist applies malleable composite resin, sculpting it into the ideal anatomical tooth shape.</li>
    <li><strong>Light Curing &amp; Polish:</strong> A high-intensity curing light hardens the resin in seconds, followed by a high-gloss polish that looks identical to natural enamel.</li>
  </ul>

  <h2>Benefits of Cosmetic Dental Bonding</h2>
  <p>
    <img
      alt="Woman smiling after cosmetic bonding in Copperas Cove"
      class="elem-left"
      src="/assets/images/cosmetic-bonding-3.jpg"
    />
  </p>
  <ul>
    <li><strong>Instant Results:</strong> Walk in with a chip, walk out an hour later with a flawless smile.</li>
    <li><strong>Highly Affordable:</strong> Far more budget-friendly than lab-fabricated porcelain crowns or veneers.</li>
    <li><strong>Minimally Invasive:</strong> Preserves 100% of your healthy natural tooth structure.</li>
    <li><strong>Long-Lasting:</strong> With routine oral hygiene and cleanings, bonded teeth easily last 5 to 10 years.</li>
  </ul>
</div>

<div class="more-to-explore">
  <span>More to Explore</span>
  <p>
    <a class="btn" href="/veneers">Porcelain Veneers</a>
    <a class="btn" href="/teeth-whitening">Teeth Whitening</a>
    <a class="btn" href="/cosmetic-dentistry">Cosmetic Dentistry Overview</a>
    <a class="btn" href="/tooth-colored-fillings">Tooth-Colored Fillings</a>
    <a class="btn-alt" href="/dental-services">Explore All Services →</a>
  </p>
</div>
`;

  return (
    <ServicePageLayout
      title="Cosmetic Dental Bonding in Copperas Cove, TX"
      subtitle="Fast, One-Visit Smile Enhancements for Chips, Cracks &amp; Gaps"
      description="Looking for an affordable, non-invasive way to repair a chipped or gapped tooth? Direct composite bonding restores beautiful symmetry and natural aesthetics in under an hour."
      breadcrumbLabel="Cosmetic Bonding"
      bgImage="/assets/images/banner-services.jpg"
      specialOffer={{
        title: "Cosmetic Consultation Special",
        price: "Consult",
        notes: "Detailed Smile Evaluation & Treatment Planning",
        href: "/request-an-appointment",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </ServicePageLayout>
  );
}
