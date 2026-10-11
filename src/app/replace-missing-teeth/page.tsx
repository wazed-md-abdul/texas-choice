import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Missing Teeth Copperas Cove, TX | Dental Implants | Dentures",
  description: "Replace missing teeth in Copperas Cove, TX, using dental implants, dentures, and fixed bridges crafted by the skilled cosmetic dentist in Copperas Cove and the dentistry team at Cove Choice Dental.",
};

export default function ReplaceMissingTeethPage() {
  const contentHtml = `
<div class="why">
  <h2>Why Choose Cove Choice Dental for Replacing Missing Teeth?</h2>
  <ul>
    <li>Full Spectrum of Replacement: Implants, Bridges &amp; Dentures</li>
    <li>State-of-the-Art 3D Planning &amp; Custom Aesthetics</li>
    <li>Flexible Financing &amp; Direct Insurance Billing</li>
  </ul>
</div>

<div class="page-divider">
  <h2>Dental Bridges</h2>
  <p><img alt="Model smile with dental bridge restoration" class="elem-left" src="/assets/images/missing-teeth-1.jpg" /></p>
  <p>Dental bridges are a time-tested, reliable solution for replacing one tooth or a row of consecutive missing teeth. An artificial replacement tooth (pontic) is fused between two custom dental crowns anchored onto the natural teeth on either side of the gap. Once bonded, your bridge remains permanently fixed in place, restoring natural chewing capability and preventing neighboring teeth from drifting out of alignment.</p>
  <p><a class="btn" href="/dental-bridges">Learn More About Dental Bridges</a></p>

  <h2>Custom Dentures &amp; Partials</h2>
  <p><img alt="Full denture on smile model" class="elem-left" src="/assets/images/missing-teeth-2.jpg" /></p>
  <p>Over 40 million Americans have lost all or most of their teeth, but today's modern dentures are lighter, more natural-looking, and more secure than ever before. Custom partial dentures fill scattered gaps by clasping to your remaining teeth, while full dentures comfortably replace complete upper or lower arches. Each prosthesis is custom-sculpted to match your facial profile and skin tone.</p>
  <p><a class="btn" href="/dentures">Learn More About Modern Dentures</a></p>

  <h2>Dental Implants: The Gold Standard</h2>
  <p><img alt="Animated dental implant supported dental crown" class="elem-left" src="/assets/images/missing-teeth-3.jpg" /></p>
  <p>While bridges and traditional dentures only replace the crown portion of teeth, dental implants replace the root structure beneath the gumline. Made of biocompatible titanium, the implant post fuses directly with your jawbone through osseointegration. This prevents bone resorption, preserves facial structure, and delivers unmatched biting strength that can last a lifetime with proper care.</p>
  <p><a class="btn" href="/dental-implants">Learn More About Dental Implants</a></p>
</div>

<div class="more-to-explore">
  <span>More to Explore</span>
  <p>
    <a class="btn" href="/dental-implants">Dental Implants</a>
    <a class="btn" href="/all-on-4">All-on-4 Implants</a>
    <a class="btn" href="/dentures">Modern Dentures</a>
    <a class="btn" href="/dental-bridges">Fixed Bridges</a>
    <a class="btn-alt" href="/dental-services">View All Dental Services</a>
  </p>
</div>
`;

  return (
    <ServicePageLayout
      title="Replacing Missing Teeth"
      subtitle="Rebuild Your Smile from the Roots Up in Copperas Cove, TX"
      description="Even one missing tooth can weaken your bite, shift adjacent teeth, and diminish your confidence. Discover our personalized missing tooth replacement solutions."
      breadcrumbLabel="Replace Missing Teeth"
      bgImage="/assets/images/banner-services.jpg"
      specialOffer={{
        title: "Implant Consultation",
        price: "$59",
        description: "Comprehensive Implant Exam & Digital Diagnostic Evaluation.",
        link: "/request-an-appointment",
        badge: "Start Your Smile Journey",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </ServicePageLayout>
  );
}
