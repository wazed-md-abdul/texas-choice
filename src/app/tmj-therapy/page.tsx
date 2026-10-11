import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "TMJ Therapy Copperas Cove, TX | Jaw Pain | Occlusal Splints",
  description: "Relieve jaw pain and renew function with TMJ therapy in Copperas Cove, TX, using custom occlusal splints from the skilled dentist in Copperas Cove and the trusted dentistry at Cove Choice Dental.",
};

export default function TmjTherapyPage() {
  const contentHtml = `
<div class="why">
  <h2>Why Choose Cove Choice Dental for TMJ Treatment?</h2>
  <ul>
    <li>Custom-Engineered Occlusal Splints & Nightguards</li>
    <li>Long-Lasting Relief for Chronic Migraines & Facial Pain</li>
    <li>Convenient Appointments Including Select Saturdays</li>
  </ul>
</div>

<div class="page-divider">
  <h2>What Is TMJ Disorder (TMD)?</h2>
  <p><img alt="Woman in need of TMJ therapy holding her jaw" class="elem-left" src="/assets/images/tmj-1.jpg" /></p>
  <p>The temporomandibular joints (TMJ) connect your lower jaw to the temporal bones of your skull on both sides of your face. These joints allow your lower jaw to move smoothly up and down and side to side so you can talk, chew, and yawn. Because the TMJ is one of the most intricate joints in the human body, any misalignment in the bite, teeth grinding habit, or facial trauma can overwork the surrounding muscles, causing TMD (temporomandibular joint disorder).</p>

  <h2>Symptoms of TMJ Disorder</h2>
  <p><img alt="Illustration of the TMJ" class="elem-left" src="/assets/images/tmj-2.jpg"/></p>
  <p>TMD can manifest in subtle or painful symptoms that many patients do not realize stem from their bite. Common signs include:</p>
  <ul>
    <li><strong>Frequent Morning Headaches &amp; Migraines:</strong> Jaw muscles remain tense all night, radiating tension to the temples and neck.</li>
    <li><strong>Earaches &amp; Ringing (Tinnitus):</strong> Because the joint sits directly adjacent to the ear canal, inflammation triggers phantom ear pain.</li>
    <li><strong>Jaw Clicking, Popping, or Locking:</strong> Difficulty opening or closing the mouth smoothly without uncomfortable sounds or catches.</li>
    <li><strong>Bruxism (Teeth Grinding):</strong> Clenching or grinding while sleeping that wears down enamel and stresses facial muscles.</li>
  </ul>

  <h2>Equilibration &amp; Occlusal Adjustments</h2>
  <p><img alt="Woman with jaw pain" class="elem-left" src="/assets/images/tmj-3.jpg"/></p>
  <p>When teeth do not meet evenly, the jaw muscles constantly work in overdrive to force the teeth together. Through gentle occlusal adjustments, our dentist reshapes minute contact points of teeth to balance the bite. When the upper and lower teeth meet in harmony, your jaw muscles can finally relax into their natural resting position, resolving chronic soreness and headaches.</p>

  <h2>Custom Nightguards &amp; Splint Therapy</h2>
  <p>For patients who grind their teeth during sleep, a custom-fitted occlusal splint acts as a protective cushion. Unlike bulky store-bought guards, our custom laboratory splints are slim, comfortable, and tailored to guide the jaw into an unstrained resting posture each night.</p>
</div>

<div class="more-to-explore">
  <span>More to Explore</span>
  <p>
    <a class="btn" href="/preventive-dentistry">Preventive Care &amp; Cleanings</a>
    <a class="btn" href="/restorative-dentistry">Restorative Dentistry</a>
    <a class="btn" href="/emergency-dentistry">Emergency Relief</a>
    <a class="btn-alt" href="/dental-services">View All Dental Services</a>
  </p>
</div>
`;

  return (
    <ServicePageLayout
      title="TMJ Therapy & Jaw Pain Relief"
      subtitle="Put a Stop to Chronic Headaches & Jaw Discomfort in Copperas Cove, TX"
      description="Does your jaw pop or ache when you chew? Do you wake up with morning headaches? Get targeted, long-lasting relief with custom TMJ therapy and nightguards at Cove Choice Dental."
      breadcrumbLabel="TMJ Therapy"
      bgImage="/assets/images/banner-services.jpg"
      specialOffer={{
        title: "TMJ Consultation",
        price: "$59",
        description: "Comprehensive jaw joint evaluation, bite examination, and personalized relief plan.",
        link: "/request-an-appointment",
        badge: "Relief Starts Here",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </ServicePageLayout>
  );
}
