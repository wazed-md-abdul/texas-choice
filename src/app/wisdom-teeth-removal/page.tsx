import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Wisdom Teeth Removal Copperas Cove, TX | Gentle Extractions | Cove Choice Dental",
  description:
    "Comfortable, gentle wisdom teeth extractions in Copperas Cove, TX. Impacted third molar removal, sedation options, and same-day emergency relief at Cove Choice Dental.",
};

export default function WisdomTeethRemovalPage() {
  const contentHtml = `
<div class="why">
  <h2>Why Choose Cove Choice Dental for Wisdom Tooth Extractions?</h2>
  <ul>
    <li>In-House Extractions Including Impacted Wisdom Teeth</li>
    <li>Gentle Anesthetics &amp; Relaxing Patient Care</li>
    <li>Same-Day Priority Appointments for Acute Pain</li>
    <li>Transparent Pricing, Medicaid &amp; 0% CareCredit® Financing</li>
  </ul>
</div>

<div class="page-divider">
  <h2>What Are Wisdom Teeth?</h2>
  <p>
    <img
      alt="Teenager with toothache for wisdom tooth extraction in Copperas Cove"
      class="elem-left"
      src="/assets/images/wisdom-2.jpg"
    />
    Wisdom teeth are the third and final set of molars located in the very back corners of the mouth. They typically begin emerging between the ages of 16 and 25. Because modern human jaws are often too small to accommodate these extra teeth, they frequently become impacted (trapped beneath the gums and jawbone) or push against neighboring molars.
  </p>

  <h2>Why Do Wisdom Teeth Need to Be Removed?</h2>
  <p>
    <img
      alt="X-ray of wisdom tooth extraction in Copperas Cove"
      class="elem-left"
      src="/assets/images/wisdom-3.jpg"
    />
  </p>
  <ul>
    <li><strong>Severe Dental Crowding:</strong> Pushing against neighboring teeth, undoing previous orthodontic treatments.</li>
    <li><strong>Painful Infection &amp; Gum Inflammation:</strong> Partially erupted teeth create flaps where bacteria and food particles fester.</li>
    <li><strong>Damage to Adjacent Molars:</strong> Pressure resorption and cavities developing on neighboring second molars.</li>
    <li><strong>Cysts &amp; Jaw Bone Damage:</strong> Fluid-filled sacs around impacted teeth that can weaken bone structure.</li>
  </ul>

  <h2>What to Expect from the Procedure</h2>
  <p>
    <img
      alt="Illustration of problematic wisdom tooth extraction"
      class="elem-left"
      src="/assets/images/wisdom-4.jpg"
    />
    Your comfort is always our top priority. We thoroughly numb the surgical area with local anesthetics. If the teeth are fully erupted, gentle extraction instruments remove them in moments. For impacted teeth, a minor incision allows us to carefully remove the tooth in smaller sections with minimal trauma. We provide post-operative instructions, ice packs, and pain management prescriptions to ensure a smooth recovery.
  </p>

  <h2>Recovering from Wisdom Teeth Extraction</h2>
  <p>
    <img
      alt="Eating soft foods after wisdom tooth extraction in Copperas Cove"
      class="elem-left"
      src="/assets/images/wisdom-5.jpg"
    />
    Most patients recover within 3 to 5 days. Stick to soft foods like soups, yogurt, and smoothies; avoid drinking through straws and smoking for at least 72 hours; and rest with your head elevated to minimize swelling.
  </p>

  <h2>Understanding the Cost of Wisdom Tooth Extractions</h2>
  <div class="section-toggle">
    <h3>Cost Factors &amp; Insurance Coverage</h3>
    <img
      alt="Woman consulting dentist regarding wisdom tooth cost"
      class="elem-left"
      src="/assets/images/wisdom-cost-1.jpg"
    />
    <p>
      The cost depends on whether the teeth are simple, partially impacted, or fully bony impacted. Most dental insurance plans cover 50% to 80% of wisdom tooth extraction costs. We work with Medicaid and offer flexible <strong>CareCredit®</strong> financing so every patient can receive urgent care affordably.
    </p>
  </div>

  <h2>Wisdom Tooth Extractions FAQs</h2>
  <div class="accordion">
    <h3>What’s the Best Age to Get Wisdom Teeth Removed?</h3>
    <p>
      Late teens to early twenties (ages 16–22) is generally the ideal window. At this stage, the tooth roots have not fully anchored into the dense jawbone, leading to easier removals and significantly faster healing.
    </p>

    <h3>Do Wisdom Teeth Stitches Dissolve on Their Own?</h3>
    <p>
      Yes, in most cases we place self-dissolving sutures that break down naturally over 7 to 14 days without requiring a removal appointment.
    </p>

    <h3>When Can I Use a Straw After Extraction?</h3>
    <p>
      Wait at least 48 to 72 hours before using a straw. Suction can dislodge the protective blood clot and cause dry socket.
    </p>
  </div>
</div>

<div class="more-to-explore">
  <span>More to Explore</span>
  <p>
    <a class="btn" href="/tooth-extractions">Tooth Extractions</a>
    <a class="btn" href="/emergency-dentistry">Emergency Relief</a>
    <a class="btn" href="/preventive-dentistry">Exams &amp; Cleanings</a>
    <a class="btn" href="/dental-implants">Dental Implants</a>
    <a class="btn-alt" href="/dental-services">Explore All Services →</a>
  </p>
</div>
`;

  return (
    <ServicePageLayout
      title="Wisdom Teeth Removal in Copperas Cove, TX"
      subtitle="Gentle Third Molar Extractions & Rapid Recovery"
      description="Troubled by painful, impacted, or crowding wisdom teeth? Our compassionate clinical team provides safe, gentle third molar extractions designed for your comfort and quick recovery."
      breadcrumbLabel="Wisdom Teeth Removal"
      bgImage="/assets/images/banner-services.jpg"
      specialOffer={{
        title: "$65 Emergency Exam Special",
        price: "$65",
        notes: "Emergency Diagnostic Exam & Panoramic Digital X-Ray",
        href: "/offers-promotions",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </ServicePageLayout>
  );
}
