import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Tooth Extractions Copperas Cove, TX | Gentle Extractions | Cove Choice Dental",
  description:
    "Gentle, stress-free tooth extractions in Copperas Cove, TX from Cove Choice Dental. Emergency tooth removal, wisdom teeth, and immediate restorative replacement options.",
};

export default function ToothExtractionsPage() {
  const contentHtml = `
<div class="why">
  <h2>Why Choose Cove Choice Dental for Tooth Extractions?</h2>
  <ul>
    <li>Gentle, Pain-Free Anesthetics & Sedation Options</li>
    <li>Same-Day Emergency Extractions Available</li>
    <li>Immediate Tooth Replacement Planning (Implants, Bridges & Dentures)</li>
    <li>Medicaid, Major PPOs & CareCredit® 0% Financing Accepted</li>
  </ul>
</div>

<div class="page-divider">
  <h2>Common Reasons for Tooth Extraction</h2>
  <p>
    <img
      alt="Man in need of tooth extraction holding his cheek"
      class="elem-left"
      src="/assets/images/extractions-1.jpg"
    />
    At Cove Choice Dental, preserving your natural teeth is always our top priority. However, in certain clinical situations where a tooth cannot be saved, removing it is the safest choice to protect your surrounding teeth, gums, and overall health:
  </p>
  <ul>
    <li><strong>Irreparable Physical Damage:</strong> Fractures that extend beneath the gumline where a crown cannot be anchored.</li>
    <li><strong>Severe, Deep Tooth Decay:</strong> Enamel and dentin have deteriorated beyond the restorative limits of a root canal.</li>
    <li><strong>Advanced Periodontal Disease:</strong> Gum disease has dissolved the supporting alveolar jawbone, leaving the tooth loose.</li>
    <li><strong>Crowding & Orthodontic Preparation:</strong> Creating space for dentures or aligning neighboring teeth.</li>
    <li><strong>Stubborn Primary Teeth:</strong> Baby teeth that fail to fall out on schedule and block emerging permanent teeth.</li>
  </ul>

  <h2>How Tooth Extractions Work</h2>
  <p>
    <img
      alt="Man in dental chair holding cheek before tooth extraction"
      class="elem-left"
      src="/assets/images/extractions-2.jpg"
    />
    During a simple extraction, the area is completely numbed with local anesthetic. Using specialized instruments called an elevator and forceps, the tooth is gently loosened and removed without discomfort. If a tooth is impacted beneath the gums (such as wisdom teeth), a surgical extraction is performed with precision incisions. Afterwards, we provide clear post-operative instructions, pain management guidance, and gauze to ensure a smooth, quick recovery.
  </p>

  <h2>Understanding the Cost of Tooth Extractions</h2>
  <p>
    <img
      alt="Tooth with dental instruments and money showing transparent pricing"
      class="elem-left"
      src="/assets/images/cost-extractions-1.jpg"
    />
    The cost of a tooth extraction depends on whether it is a simple or surgical procedure, the tooth's location, and how many teeth need removal. We provide upfront, transparent estimates before starting any work.
  </p>

  <div class="section-toggle">
    <h3>Insurance Coverage & Payment Options</h3>
    <img
      alt="Dental insurance information on laptop screen"
      class="elem-left"
      src="/assets/images/cost-extractions-3.jpg"
    />
    <p>
      Dental insurance plans usually cover 50% to 80% of tooth extraction costs. We gladly file claims on your behalf. Additionally, we offer a <strong>$65 Emergency Limited Exam &amp; X-Ray</strong> special for new patients, as well as zero-interest monthly payment plans through <strong>CareCredit®</strong>.
    </p>
  </div>

  <h2>Tooth Extractions FAQs</h2>
  <div class="accordion">
    <h3>Is There an Alternative to a Tooth Extraction?</h3>
    <p>
      We always explore conservative alternatives like root canal therapy or deep periodontal cleaning first. Extraction is only recommended when saving the tooth is clinically impossible or poses health risks.
    </p>

    <h3>What Are My Options for Replacing a Missing Tooth?</h3>
    <p>
      We strongly recommend replacing extracted teeth quickly to keep surrounding teeth from shifting. Options include permanent dental implants, customized dental bridges, or partial dentures.
    </p>

    <h3>Can I Smoke or Use Straws After Getting a Tooth Extracted?</h3>
    <p>
      No! Suction from smoking or drinking through straws can dislodge the healing blood clot, leading to a painful condition called "dry socket." Avoid smoking and straws for at least 72 hours.
    </p>
  </div>
</div>

<div class="more-to-explore">
  <span>More to Explore</span>
  <p>
    <a class="btn" href="/wisdom-teeth-removal">Wisdom Teeth Removal</a>
    <a class="btn" href="/dental-implants">Dental Implants</a>
    <a class="btn" href="/dentures">Modern Dentures</a>
    <a class="btn" href="/emergency-dentistry">Emergency Relief</a>
    <a class="btn" href="/root-canal-therapy">Root Canal Therapy</a>
    <a class="btn-alt" href="/dental-services">Explore All Services →</a>
  </p>
</div>
`;

  return (
    <ServicePageLayout
      title="Tooth Extractions in Copperas Cove, TX"
      subtitle="Gentle, Stress-Free Tooth Removal & Immediate Replacement"
      description="When a tooth cannot be saved due to severe infection, fractures, or overcrowding, our experienced team provides gentle, virtually painless tooth extractions with same-day emergency appointments."
      breadcrumbLabel="Tooth Extractions"
      bgImage="/assets/images/banner-services.jpg"
      specialOffer={{
        title: "$65 Emergency Exam Special",
        price: "$65",
        notes: "Includes Emergency Examination & Diagnostic Digital X-Ray",
        href: "/offers-promotions",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </ServicePageLayout>
  );
}
