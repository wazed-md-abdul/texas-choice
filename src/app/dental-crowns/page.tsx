import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Dental Crowns Copperas Cove, TX | Same-Day Restorations | Cove Choice Dental",
  description:
    "Repair chipped, cracked, or broken teeth with custom porcelain dental crowns in Copperas Cove, TX from the experienced dentists at Cove Choice Dental.",
};

export default function DentalCrownsPage() {
  const contentHtml = `
<div class="why">
  <h2>Why Choose Cove Choice Dental for Dental Crowns?</h2>
  <ul>
    <li>Lifelike, Custom-Shaded Ceramic & Porcelain Materials</li>
    <li>Same-Day Diagnostics & Precision Fitting</li>
    <li>Protects Cracked, Broken, or Root-Canaled Teeth</li>
    <li>In-Network with Major Dental PPOs, Medicaid & 0% CareCredit®</li>
  </ul>
</div>

<div class="page-divider">
  <h2>What Is a Dental Crown?</h2>
  <p>
    <img
      alt="Dental crown being placed over tooth in Copperas Cove"
      class="elem-left"
      src="/assets/images/dental-crowns-1.jpg"
    />
    A dental crown is a custom-fitted cap that covers the entire visible portion of a compromised tooth down to the gumline. While historic crowns relied heavily on visible dark metals, we craft beautiful, tooth-colored porcelain and ceramic crowns that match the translucency and color of your natural teeth.
  </p>
  <p>
    Our Copperas Cove dentists commonly recommend a dental crown to:
  </p>
  <ul>
    <li>Hold fractured or severely broken teeth together.</li>
    <li>Shield weak teeth with large fillings from cracking.</li>
    <li>Protect a tooth following root canal therapy.</li>
    <li>Anchor a traditional dental bridge across missing teeth.</li>
    <li>Complete and restore a permanent single dental implant post.</li>
    <li>Improve cosmetic appearance of severely misshapen or stained teeth.</li>
  </ul>

  <h2>The Dental Crown Process</h2>
  <p>
    <img
      alt="Dentist in Copperas Cove showing patient digital crown scan"
      class="elem-left"
      src="/assets/images/dental-crowns-2.jpg"
    />
    First, our dentist gently removes any decay and shapes the tooth so the crown fits naturally along your bite. High-definition digital impressions are captured without messy putty trays. A temporary crown protects your tooth while the lab crafts your custom porcelain restoration. Once your permanent crown is ready, we bond it securely into place and make micro-adjustments for an effortless bite.
  </p>

  <h2>The Benefits of Getting a Dental Crown</h2>
  <p>
    <img
      alt="Woman smiling after getting custom dental crown"
      class="elem-left"
      src="/assets/images/dental-crowns-3.jpg"
    />
  </p>
  <ul>
    <li><strong>Full Chewing Power:</strong> Bite into steaks, crunchy vegetables, and apples without pain or sensitivity.</li>
    <li><strong>100% Natural Appearance:</strong> Seamlessly blended to match the exact shade and contour of neighboring teeth.</li>
    <li><strong>Saves Natural Teeth:</strong> Prevents fractures from reaching the roots, avoiding costly tooth extractions.</li>
    <li><strong>Long-Lasting Durability:</strong> With proper brushing, flossing, and regular cleanings, crowns typically last 15+ years.</li>
  </ul>

  <h2>Understanding the Cost of Dental Crowns</h2>
  <div class="section-toggle">
    <h3>Insurance &amp; Financing Options</h3>
    <img
      alt="Dental crowns financing options"
      class="elem-left"
      src="/assets/images/cost-crown-1.jpg"
    />
    <p>
      Dental insurance plans typically cover dental crowns at 50% to 80% as a major restorative procedure. We review your benefits in detail and file all paperwork for you. For uninsured patients or remaining balances, <strong>CareCredit®</strong> flexible financing allows you to spread out payments into affordable monthly installments.
    </p>
  </div>

  <h2>Dental Crowns FAQs</h2>
  <div class="accordion">
    <h3>What Are Dental Crowns Made Of?</h3>
    <p>
      We use advanced biocompatible dental porcelain, zirconia, and ceramic materials that mimic natural tooth enamel in both strength and optical appearance.
    </p>

    <h3>Do Dental Crowns Get Cavities?</h3>
    <p>
      The porcelain crown itself cannot decay, but the natural tooth structure underneath and around the gumline can still develop cavities. Good daily brushing and flossing are essential to keep the margin clean and healthy.
    </p>

    <h3>How Long Do Dental Crowns Last?</h3>
    <p>
      Most crowns last between 10 and 15 years, and many last even longer with good oral hygiene and avoiding habits like chewing ice or clenching without a nightguard.
    </p>
  </div>
</div>

<div class="more-to-explore">
  <span>More to Explore</span>
  <p>
    <a class="btn" href="/dental-bridges">Dental Bridges</a>
    <a class="btn" href="/root-canal-therapy">Root Canal Therapy</a>
    <a class="btn" href="/dental-implants">Dental Implants</a>
    <a class="btn" href="/tooth-colored-fillings">Tooth-Colored Fillings</a>
    <a class="btn" href="/cosmetic-dentistry">Cosmetic Dentistry</a>
    <a class="btn-alt" href="/dental-services">Explore All Services →</a>
  </p>
</div>
`;

  return (
    <ServicePageLayout
      title="Dental Crowns in Copperas Cove, TX"
      subtitle="Restorative & Cosmetic Tooth Caps for Cracked or Broken Teeth"
      description="Tooth enamel is strong, but teeth can still wear down, crack, or break over time. Our custom porcelain crowns restore natural beauty, reinforce structural strength, and let you smile and chew with ease."
      breadcrumbLabel="Dental Crowns"
      bgImage="/assets/images/banner-services.jpg"
      specialOffer={{
        title: "Free Dental Restorative Consult",
        price: "Consult",
        notes: "Comprehensive Evaluation & Digital Imaging Included",
        href: "/request-an-appointment",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </ServicePageLayout>
  );
}
