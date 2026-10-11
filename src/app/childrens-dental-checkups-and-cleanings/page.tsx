import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Children’s Dental Checkups & Cleanings Copperas Cove | Children’s Dentist",
  description: "Want to keep your little one’s smile strong and cavity-free? Make sure they don’t miss their checkups and cleanings with our children’s dentist in Copperas Cove, TX!",
};

export default function ChildrensDentalCheckupsAndCleaningsPage() {
  const contentHtml = `
<p>From their first gummy grin as a baby to their confident smile in their senior portraits, your child's teeth undergo rapid growth and transformation throughout the years. To ensure they can chew pain-free, speak clearly, and avoid early cavities, bi-yearly pediatric checkups and cleanings are essential. Our caring, kid-friendly dental team makes every visit fun, educational, and completely fear-free!</p>

<div class="why">
  <h2>Why Choose Cove Choice Dental For Children's Dental Care?</h2>
  <ul>
    <li>Friendly, Gentle &amp; Patient Pediatric-Focused Team</li>
    <li>Gentle Preventive Sealants &amp; Fluoride Treatments</li>
    <li>Medicaid &amp; CHIP Welcomed Alongside Major Insurances</li>
  </ul>
</div>

<div class="page-divider">
  <h2>What to Expect During Your Child's Dental Checkup</h2>
  <p><img alt="Closeup of child smiling during dental checkup" class="elem-left" src="/assets/images/child-checkups-1.jpg"/></p>
  <p>Whether your child is visiting us for their very first lap exam or their routine checkup, our Copperas Cove team creates a gentle, comfortable environment. We begin with gentle digital X-rays if needed to check developing teeth beneath the gums. Next, our dentist meticulously examines each tooth, their gums, and bite alignment, watching closely for early signs of decay, enamel weakness, or developmental concerns. We explain everything in fun, kid-friendly language so your child feels relaxed and proud.</p>

  <h2>What to Expect During a Refreshing Cleaning</h2>
  <p><img alt="Children's dentist providing teeth cleaning" class="elem-left" src="/assets/images/child-checkups-2.jpg"/></p>
  <p>Even with great at-home brushing, hard-to-reach spots on growing teeth can accumulate plaque and tartar. Our gentle dental hygienists carefully polish your child's teeth, remove tartar buildup, and clean below the gumline. We often finish with a pleasant-tasting fluoride treatment to strengthen tooth enamel against cavity-causing acids. Before leaving, we coach your child on fun, proper brushing and flossing techniques.</p>

  <h2>Why Six-Month Dental Checkups Are Essential</h2>
  <p><img alt="Group of children smiling while huddled in a circle" class="elem-left" src="/assets/images/child-checkups-3.jpg"/></p>
  <p>Baby teeth are critical: they hold space for incoming permanent teeth, help children chew nutritious foods, and play a pivotal role in clear speech development. Catching minor cavities early prevents painful toothaches, infections, and costly treatments down the road. Bringing your child in every six months establishes positive lifelong oral hygiene habits and keeps their smile shining brightly!</p>
</div>

<div class="more-to-explore">
  <span>More to Explore</span>
  <p>
    <a class="btn" href="/childrens-dentistry">Children's Dentistry Overview</a>
    <a class="btn" href="/childrens-tooth-colored-fillings">Tooth-Colored Fillings for Kids</a>
    <a class="btn" href="/emergency-pediatric-dentist">Emergency Pediatric Dentist</a>
    <a class="btn" href="/medicaid-and-chip">Medicaid &amp; CHIP Coverage</a>
    <a class="btn-alt" href="/dental-services">View All Dental Services</a>
  </p>
</div>
`;

  return (
    <ServicePageLayout
      title="Children’s Checkups & Cleanings"
      subtitle="Helping Growing Smiles Stay Strong, Healthy & Cavity-Free in Copperas Cove, TX"
      description="Give your child the gift of a healthy, radiant smile. Enjoy warm, compassionate, and fun dental checkups and gentle cleanings designed especially for kids."
      breadcrumbLabel="Children's Checkups & Cleanings"
      bgImage="/assets/images/banner-services.jpg"
      specialOffer={{
        title: "Children's Special",
        price: "$59",
        description: "Comprehensive Pediatric Exam, Gentle Cleaning & Digital X-Rays.",
        link: "/request-an-appointment",
        badge: "Kids & Teens",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </ServicePageLayout>
  );
}
