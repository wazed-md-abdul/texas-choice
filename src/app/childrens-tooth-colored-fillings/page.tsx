import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Tooth-Colored Fillings for Kids Copperas Cove TX | Cavity Treatment for Kids | Cove Choice Dental",
  description: "Tooth-colored fillings for kids in Copperas Cove present a quick and seamless way to treat cavities with natural-looking composite resin.",
};

export default function ChildrensToothColoredFillingsPage() {
  const contentHtml = `
<div class="why">
  <h2>Why Choose Cove Choice Dental for Kids' Tooth-Colored Fillings?</h2>
  <ul>
    <li>Skilled, Gentle &amp; Kid-Friendly Dental Team</li>
    <li>100% Metal-Free &amp; Mercury-Free Biocompatible Composite</li>
    <li>Dental Insurance, Medicaid &amp; CHIP Welcomed</li>
  </ul>
</div>

<div class="page-divider">
  <h2>What Are Tooth-Colored Fillings for Kids?</h2>
  <p><img alt="Happy, smiling little girl in dental treatment chair" class="elem-left" src="/assets/images/tooth-colored-2.jpg" /></p>
  <p>When oral bacteria produce acids that erode tooth enamel, small cavities form. To keep decay from spreading deeper into the tooth's sensitive nerve or neighboring teeth, cavities must be promptly cleaned and sealed. In contrast to dark metal silver fillings of the past, modern tooth-colored fillings are composed of biocompatible composite resin made from ultra-fine glass and ceramic particles. We custom-tint the resin to perfectly match the exact shade of your child's natural tooth enamel.</p>

  <h2>The Process of Placing a Tooth-Colored Filling</h2>
  <p><img alt="Curing light being used to harden a child’s tooth-colored filling" class="elem-left" src="/assets/images/tooth-colored-3.jpg" /></p>
  <p>Placing a composite filling is quick, painless, and typically completed in a single comfortable visit:</p>
  <ul>
    <li><strong>Gentle Comfort:</strong> If needed, we numb the surrounding area with gentle local anesthesia so your child stays completely comfortable. For very shallow cavities, anesthesia is often not even needed!</li>
    <li><strong>Decay Removal:</strong> Our dentist precisely removes any infected or weakened tooth structure while keeping as much healthy enamel intact as possible.</li>
    <li><strong>Direct Bonding:</strong> We apply the shade-matched composite in layers, using a specialized blue curing light that hardens the material in seconds.</li>
    <li><strong>Finishing &amp; Polish:</strong> We shape and polish the filling to match your child's natural bite so it feels completely natural and smooth to their tongue.</li>
  </ul>

  <h2>Key Benefits of Composite Fillings for Children</h2>
  <p><img alt="Laughing young girl wearing white t-shirt" class="elem-left" src="/assets/images/tooth-colored-4.jpg" /></p>
  <ul>
    <li><strong>Natural Appearance:</strong> Your child can laugh and smile without unsightly dark metal marks showing.</li>
    <li><strong>Mercury-Free &amp; Biocompatible:</strong> Made without any mercury or metallic compounds.</li>
    <li><strong>Conserves Natural Tooth Structure:</strong> Composite resin bonds directly to enamel, requiring significantly less drilling than metal fillings.</li>
    <li><strong>Reduced Temperature Sensitivity:</strong> Composite resin insulates the tooth against sudden hot and cold food shocks.</li>
  </ul>
</div>

<div class="more-to-explore">
  <span>More to Explore</span>
  <p>
    <a class="btn" href="/childrens-dentistry">Children's Dentistry</a>
    <a class="btn" href="/childrens-dental-checkups-and-cleanings">Checkups &amp; Cleanings</a>
    <a class="btn" href="/emergency-pediatric-dentist">Emergency Pediatric Dentist</a>
    <a class="btn" href="/medicaid-and-chip">Medicaid &amp; CHIP</a>
    <a class="btn-alt" href="/dental-services">View All Dental Services</a>
  </p>
</div>
`;

  return (
    <ServicePageLayout
      title="Tooth-Colored Fillings for Kids"
      subtitle="Seamless, Gentle Cavity Repair for Young Smiles in Copperas Cove, TX"
      description="Protect your child's dental health and preserve their natural smile with fast, comfortable, and metal-free tooth-colored fillings at Cove Choice Dental."
      breadcrumbLabel="Kids Tooth-Colored Fillings"
      bgImage="/assets/images/banner-services.jpg"
      specialOffer={{
        title: "Children's Dental Exam",
        price: "$59",
        description: "Pediatric Examination, Digital X-Rays & Preventive Fluoride Treatment.",
        link: "/request-an-appointment",
        badge: "Kids & Teens",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </ServicePageLayout>
  );
}
