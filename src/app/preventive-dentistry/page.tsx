import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Preventive Dentistry Copperas Cove, TX | Exams & Cleanings | Cove Choice Dental",
  description:
    "Keep your oral health strong with preventive dentistry in Copperas Cove, TX, including dental checkups, teeth cleanings, fluoride, and nightguards at Cove Choice Dental.",
};

export default function PreventiveDentistryPage() {
  const contentHtml = `
<div class="why">
  <h2>Why Choose Cove Choice Dental for Preventive Dentistry?</h2>
  <ul>
    <li>Discounts for Paying in Cash</li>
    <li>Convenient Appointment Times & Saturday Visits</li>
    <li>Caring, Patient, Bilingual Dental Staff</li>
    <li>Comprehensive Family Checkups & Cleanings</li>
  </ul>
</div>

<div class="page-divider">
  <h2>Dental Checkups &amp; Teeth Cleanings</h2>
  <p>
    <img
      alt="Woman sharing healthy smile after preventive dentistry"
      class="elem-left"
      src="/assets/images/preventive-1.jpg"
    />
    Some people think they can get away with not seeing the dentist unless a serious issue occurs. However, in many cases, gum disease and cavities can start to develop without you even realizing it. We can catch these problems in their earliest stages during a routine checkup and deal with them appropriately. Biannual dental visits also allow us to remove plaque that has built up in the areas that you haven’t been able to clean effectively by yourself.
  </p>

  <h2>Nightguards for Bruxism</h2>
  <p>
    <img
      alt="Clear nightguard for bruxism on metal tray"
      class="elem-left"
      src="/assets/images/preventive-2.jpg"
    />
    Do you keep waking up with pain in your jaw? It might mean that you’re grinding and clenching your teeth at night. This is a condition called bruxism, which is often linked to stress, an abnormal bite, or crooked teeth. The root of the problem is often unknown, but there’s a simple way to prevent further damage: a customized nightguard that protects your enamel from being worn down over time. The nightguards we provide are tear-resistant, comfortable, and fitted for each unique mouth.
  </p>

  <h2>Fluoride Treatments</h2>
  <p>
    <img
      alt="Closeup of healthy smile after fluoride treatment"
      class="elem-left"
      src="/assets/images/preventive-3.jpg"
    />
    Fluoride is an essential mineral that helps prevent cavities and tooth decay by strengthening the enamel and reducing plaque buildup. You normally ingest fluoride through the public water supply and certain foods. However, we can also apply it topically to your teeth in order to give them extra protection. Fluoride treatments can be completed in just a few minutes; you’ll need to avoid rinsing, eating, or drinking for a short while afterwards while your teeth absorb the minerals.
  </p>

  <h2>Oral Cancer Screenings</h2>
  <p>
    <img
      alt="Dentist performing oral cancer screening"
      class="elem-left"
      src="/assets/images/preventive-4.jpg"
    />
    Oral cancer can easily be life-threatening if it isn’t diagnosed and treated early on. We can check for symptoms of oral cancer as well as pre-cancerous conditions during your regular visits. Common symptoms include discolored spots anywhere in the mouth, sores that bleed easily, unusual lumps or rough spots, oral pain or tenderness, and general difficulty chewing. If we find abnormalities that make us suspect the presence of cancer, we can perform simple tests to help you figure out your next step in seeking care.
  </p>
</div>

<div class="more-to-explore">
  <span>More to Explore</span>
  <p>
    <a class="btn" href="/childrens-dentistry">Children's Dentistry</a>
    <a class="btn" href="/gum-disease-treatment">Bleeding Gums Care</a>
    <a class="btn" href="/restorative-dentistry">Restorative Dentistry</a>
    <a class="btn" href="/replace-missing-teeth">Replace Missing Teeth</a>
    <a class="btn" href="/cosmetic-dentistry">Cosmetic Dentistry</a>
    <a class="btn" href="/emergency-dentistry">Emergency Relief</a>
    <a class="btn" href="/wisdom-teeth-removal">Wisdom Teeth Removal</a>
    <a class="btn" href="/tmj-therapy">TMJ / Jaw Pain</a>
    <a class="btn-alt" href="/dental-services">View All 20+ Services →</a>
  </p>
</div>
`;

  return (
    <ServicePageLayout
      title="Preventive Dentistry in Copperas Cove, TX"
      subtitle="Preventing Cavities and Gum Disease"
      description="A healthy smile takes consistent care to maintain. At Cove Choice Dental, we encourage all patients and their families to visit us at least twice a year for comprehensive checkups, cleanings, and oral cancer screenings."
      breadcrumbLabel="Preventive Dentistry"
      bgImage="/assets/images/banner-services.jpg"
      specialOffer={{
        title: "$100 New Patient Special",
        price: "$100",
        notes: "Includes Comprehensive Exam, Digital X-Rays & Whitening Pen",
        href: "/offers-promotions",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </ServicePageLayout>
  );
}
