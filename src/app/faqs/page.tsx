import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Frequently Asked Dental Questions | Cove Choice Dental Copperas Cove, TX",
  description: "Get answers to frequently asked dental questions about appointments, insurance, emergencies, children's care, and treatments at Cove Choice Dental in Copperas Cove, TX.",
};

export default function FaqsPage() {
  const contentHtml = `
<div class="why">
  <h2>Have Questions About Your Dental Visit?</h2>
  <ul>
    <li>Answers to Common Questions About Checkups, Costs &amp; Procedures</li>
    <li>Dedicated to Transparent, Compassionate Patient Communication</li>
    <li>Our Friendly Team Is Always Just a Phone Call Away</li>
  </ul>
</div>

<div class="page-divider">
  <div class="accordion">
    <h3>How often should I visit the dentist?</h3>
    <p>For most patients of all ages, two checkups and cleanings per year (every six months) is the gold standard recommended by the American Dental Association. Routine visits allow us to detect microscopic enamel decay, monitor gum health, and remove tartar before issues become severe or painful. Patients managing periodontal disease may benefit from 3-4 month maintenance cleanings.</p>

    <h3>I'm unhappy with how my smile looks. How can you help?</h3>
    <p>We offer customized cosmetic dental solutions tailored to your unique goals. Options range from quick in-office professional teeth whitening to eliminate deep coffee or tobacco stains, cosmetic bonding to repair chips and minor gaps, and custom porcelain veneers for a total, celebrity-grade smile transformation. During a cosmetic consultation, we discuss your goals and preview your new smile!</p>

    <h3>What should I do if I have missing teeth?</h3>
    <p>Missing teeth should be replaced promptly. When a gap is left untreated, adjacent teeth drift into the empty space, altering your bite alignment and causing jawbone deterioration. We provide state-of-the-art permanent dental implants, durable fixed bridges, and modern lightweight partial or full dentures to restore complete chewing ability and beauty.</p>

    <h3>Can I bring my children to Cove Choice Dental?</h3>
    <p>Absolutely! We are a full-family dental practice and love welcoming patients of all ages, from toddlers getting their first lap exams to teenagers needing sports mouthguards or fillings. Scheduling the whole family on the same day saves you time and establishes positive, fearless dental habits early.</p>

    <h3>What if I feel anxious or nervous about visiting the dentist?</h3>
    <p>Dental anxiety is very common, and you will never be judged at Cove Choice Dental. Our compassionate doctors and hygienists explain every step before proceeding, work at your pace, and provide gentle local anesthesia. Please let our team know if you feel nervous so we can take extra measures to ensure your total relaxation.</p>

    <h3>Should a toothache be treated as a dental emergency?</h3>
    <p>Yes. Tooth pain is your body's signal that bacteria or inflammation have reached the inner nerve of the tooth. Toothaches rarely resolve on their own and can escalate into dangerous abscesses. If you have severe, throbbing pain or facial swelling, call us right away at <a href="tel:2542712882">(254) 271-2882</a> for same-day emergency relief.</p>

    <h3>Will you take my dental insurance?</h3>
    <p>We are proud to be in-network with a wide range of leading dental insurance carriers, including Aetna, Delta Dental, Humana, United Concordia, United Healthcare, Cigna, MetLife, as well as Texas Medicaid and CHIP. We file all electronic claims directly on your behalf to help you maximize your benefits.</p>
  </div>
</div>

<div class="more-to-explore">
  <span>More to Explore</span>
  <p>
    <a class="btn" href="/for-patients">New Patient Information</a>
    <a class="btn" href="/dental-insurance">Dental Insurance &amp; Financing</a>
    <a class="btn" href="/emergency-dentistry">Emergency Dental Care</a>
    <a class="btn-alt" href="/dental-services">View All Dental Services</a>
  </p>
</div>
`;

  return (
    <ServicePageLayout
      title="Frequently Asked Dental Questions"
      subtitle="Find Clear Answers to Your Common Dental Questions in Copperas Cove, TX"
      description="We love helping our patients feel confident and informed. Here are answers to the most common questions about dental care, insurance, emergencies, and procedures."
      breadcrumbLabel="Dental FAQs"
      bgImage="/assets/images/banner-services.jpg"
      sidebarType="appointment"
      specialOffer={{
        title: "Have a Question?",
        price: "Call Us",
        description: "Our friendly team is always here to answer your dental questions: (254) 271-2882.",
        link: "/contact",
        badge: "We're Here to Help",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </ServicePageLayout>
  );
}
