import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Medicaid and CHIP Copperas Cove, TX | Affordable Dentistry | Cove Choice Dental",
  description: "Looking for a Medicaid dentist in Copperas Cove? Feel confident choosing Cove Choice Dental for high-quality, compassionate pediatric dental care with Medicaid & CHIP.",
};

export default function MedicaidAndChipPage() {
  const contentHtml = `
<p>Do you have Medicaid or CHIP to cover your child's dental care? If so, you may be wondering if you'll find a trusted dental practice that welcomes your plan with warmth and open arms. At Cove Choice Dental, we proudly accept both Texas Medicaid and CHIP! We are committed to ensuring your child receives top-tier dental care while keeping your out-of-pocket costs at zero or near zero. Contact us today to find out how easily your child can receive checkups, cleanings, and restorative treatments.</p>

<div class="why">
  <h2>Why Choose Cove Choice Dental for Medicaid &amp; CHIP?</h2>
  <ul>
    <li>Proudly In-Network with Texas Medicaid &amp; CHIP Plans</li>
    <li>Comprehensive Preventive, Pediatric &amp; Emergency Care</li>
    <li>Zero Judgment, Warm, Compassionate Family Environment</li>
  </ul>
</div>

<div class="page-divider">
  <h2>What is Medicaid Dental Coverage?</h2>
  <p><img alt="A little girl holding a teddy bear and giving her dental hygienist a high-five" class="elem-left" src="/assets/images/chip-1.jpg"/></p>
  <p>Texas Medicaid is a state and federal healthcare program designed to help eligible families access essential medical and dental care. For enrolled children and teens, Medicaid typically covers 100% of preventive and medically necessary dental care, including routine six-month checkups, cleanings, X-rays, fluoride treatments, sealants, fillings, and emergency dentistry.</p>

  <h2>What is the CHIP Program?</h2>
  <p><img alt="A dentist and dental assistant showing a young boy how to properly brush his teeth" class="elem-left" src="/assets/images/chip-2.jpg"/></p>
  <p>For families who earn too much to qualify for Medicaid but cannot afford private dental insurance, CHIP (Children's Health Insurance Program) provides an affordable solution. CHIP covers dental care for children under age 19, requiring only nominal co-pays or low enrollment fees while ensuring your child receives comprehensive dental checkups and treatments.</p>

  <h2>Dental Services Covered by Medicaid &amp; CHIP</h2>
  <p><img alt="A young boy smiling after receiving a positive report from his dentist" class="elem-left" src="/assets/images/chip-3.jpg"/></p>
  <p>When you visit Cove Choice Dental with your Medicaid or CHIP plan, covered services generally include:</p>
  <ul>
    <li>Bi-annual dental cleanings and comprehensive exams</li>
    <li>Digital diagnostic X-rays</li>
    <li>Protective fluoride varnishes and tooth sealants</li>
    <li>Tooth-colored fillings for cavities</li>
    <li>Pediatric crowns and pulp therapy</li>
    <li>Tooth extractions and emergency dental exams</li>
  </ul>

  <h2>Why Preventive Care Matters for Children</h2>
  <p><img alt="An up-close view of a little girl having her teeth cleaned by her dentist in Copperas Cove" class="elem-left" src="/assets/images/chip-4.jpg"/></p>
  <p>Young teeth are especially susceptible to decay. By bringing your child in every six months for their covered checkups and cleanings, we can stop cavities before they cause toothaches and missed school days. Our friendly staff takes care of all billing paperwork so you can relax and focus on your child's radiant smile!</p>
</div>

<div class="more-to-explore">
  <span>More to Explore</span>
  <p>
    <a class="btn" href="/childrens-dentistry">Children's Dentistry</a>
    <a class="btn" href="/childrens-dental-checkups-and-cleanings">Kids Checkups &amp; Cleanings</a>
    <a class="btn" href="/childrens-tooth-colored-fillings">Tooth-Colored Fillings</a>
    <a class="btn" href="/dental-insurance">Dental Insurance &amp; Financing</a>
    <a class="btn-alt" href="/dental-services">View All Dental Services</a>
  </p>
</div>
`;

  return (
    <ServicePageLayout
      title="Medicaid & CHIP Dental Coverage"
      subtitle="Affordable, High-Quality Dental Care for Children in Copperas Cove, TX"
      description="We proudly accept Texas Medicaid and CHIP! Give your children healthy smiles without financial stress at Cove Choice Dental."
      breadcrumbLabel="Medicaid & CHIP"
      bgImage="/assets/images/banner-services.jpg"
      sidebarType="insurance"
      specialOffer={{
        title: "Medicaid & CHIP Welcome",
        price: "$0",
        description: "100% covered preventive checkups, cleanings & exams for eligible children.",
        link: "/request-an-appointment",
        badge: "Texas Medicaid",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </ServicePageLayout>
  );
}
