import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Children’s Dentistry Copperas Cove, TX | Pediatric Dentist | Cove Choice Dental",
  description:
    "Gentle, patient, and fun pediatric dental care in Copperas Cove, TX. Child checkups, cleanings, sealants, tooth-colored fillings, and Medicaid/CHIP accepted at Cove Choice Dental.",
};

export default function ChildrensDentistryPage() {
  const contentHtml = `
<img
  alt="Mother teaching son to ride bike after children's dentistry visit"
  class="main-img"
  src="/assets/images/banner-children.jpg"
/>

<div class="why">
  <h2>Why Choose Cove Choice Dental for Children’s Dentistry?</h2>
  <ul>
    <li>Caring, Patient, Bilingual Dental Team</li>
    <li>Gentle, Child-Friendly Amenities & Treatments</li>
    <li>Medicaid, CHIP & Major PPO Insurances Welcomed</li>
    <li>Discounts for Paying in Cash & Flexible Financing</li>
  </ul>
</div>

<div class="page-divider">
  <h2>Dental Checkups &amp; Teeth Cleanings</h2>
  <p>
    <img
      alt="Young girl smiling at dentist during dental checkup and teeth cleaning visit"
      class="elem-left"
      src="/assets/images/children-1.jpg"
    />
    Even though your child’s baby teeth will fall out eventually, they still need to be taken care of in order to protect your little one’s long-term oral health. You should bring your child to the dentist for a checkup and cleaning every six months. While we look for cavities and remove plaque, we teach children the basics of good oral health care and show them how to brush and floss well so that they carry those habits into the future.
  </p>
  <p>
    <a class="btn" href="/childrens-dental-checkups-and-cleanings">Learn More About Kids Checkups</a>
  </p>

  <h2>Dental Sealants</h2>
  <p>
    <img
      alt="Child receiving dental sealants"
      class="elem-left"
      src="/assets/images/children-2.jpg"
    />
    Children often have a harder time brushing than adults, especially when it comes to the molars near the back of the mouth filled with deep grooves where tooth decay can hide. To keep these vulnerable teeth safe, we can apply a thin protective layer of BPA-free composite resin known as a dental sealant, providing robust protection against cavities for three to five years.
  </p>

  <h2>Fluoride Treatments</h2>
  <p>
    <img
      alt="Child receiving fluoride treatment"
      class="elem-left"
      src="/assets/images/children-3.jpg"
    />
    Is your child getting enough fluoride to keep their enamel healthy and resilient? In addition to fluoridated water and toothpaste, our team can apply concentrated topical fluoride during routine cleanings in just a few minutes, drastically lowering the risk of tooth decay.
  </p>

  <h2>Tooth-Colored Fillings</h2>
  <p>
    <img
      alt="Dentist checking child's tooth colored fillings"
      class="elem-left"
      src="/assets/images/children-4.jpg"
    />
    If your child develops a cavity, we can gently restore the tooth with safe, biocompatible composite resin. These fillings are shaded to match their natural tooth color, keeping their smile bright and confident.
  </p>
  <p>
    <a class="btn" href="/childrens-tooth-colored-fillings">Learn More About Tooth-Colored Fillings</a>
  </p>

  <h2>Athletic Mouthguards</h2>
  <p>
    <img
      alt="Child playing football with athletic mouthguard"
      class="elem-left"
      src="/assets/images/children-5.jpg"
    />
    Athletes face a high risk of facial and dental injuries. A custom-fabricated athletic mouthguard from our clinic cushions impacts, prevents knocked-out teeth, and protects delicate oral tissues far better than bulky over-the-counter guards.
  </p>

  <h2>Emergency Pediatric Dentist</h2>
  <p>
    <img
      alt="Young boy with dental emergency in Copperas Cove"
      class="elem-left"
      src="/assets/images/emer-intro.jpg"
    />
    Accidents happen when you least expect them. If your child chips a tooth, has an unbearable toothache, or knocks out a tooth, call our Copperas Cove office immediately. We prioritize pediatric emergencies for same-day relief.
  </p>
  <p>
    <a class="btn" href="/emergency-pediatric-dentist">Learn More About Emergency Pediatric Dentistry</a>
  </p>
</div>

<div class="more-to-explore">
  <span>More to Explore</span>
  <p>
    <a class="btn" href="/preventive-dentistry">Dental Checkup &amp; Cleaning</a>
    <a class="btn" href="/gum-disease-treatment">Bleeding Gums Care</a>
    <a class="btn" href="/restorative-dentistry">Cavity &amp; Broken Tooth Care</a>
    <a class="btn" href="/emergency-dentistry">Emergency Pain Relief</a>
    <a class="btn" href="/wisdom-teeth-removal">Wisdom Teeth Removal</a>
    <a class="btn" href="/medicaid-and-chip">Medicaid &amp; CHIP Information</a>
    <a class="btn-alt" href="/dental-services">View All Dental Services →</a>
  </p>
</div>
`;

  return (
    <ServicePageLayout
      title="Children’s Dentistry in Copperas Cove, TX"
      subtitle="Gentle, Compassionate Dental Care for Kids & Teens"
      description="It’s generally recommended to bring your child to the dentist by their first birthday. Our caring, bilingual team at Cove Choice Dental goes the extra mile to make every pediatric visit fun, relaxed, and completely fear-free."
      breadcrumbLabel="Children's Dentistry"
      bgImage="/assets/images/banner-children.jpg"
      specialOffer={{
        title: "$85 Children's Visit Special",
        price: "$85",
        notes: "Ages 13 & Under • Includes Exam, X-Rays & Cleaning",
        href: "/offers-promotions",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </ServicePageLayout>
  );
}
