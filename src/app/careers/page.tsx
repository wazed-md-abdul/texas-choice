import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Careers at Cove Choice Dental | Copperas Cove, TX",
  description: "Explore rewarding dental careers at Cove Choice Dental. Join our exceptional team offering high-quality dentistry in Copperas Cove, TX.",
};

export default function CareersPage() {
  const contentHtml = `
<div class="why">
  <h2>Why Join the Cove Choice Dental Team?</h2>
  <ul>
    <li>Supportive, High-Tech &amp; Collaborative Dental Practice</li>
    <li>Full Medical, Dental &amp; Optical Coverage + Paid Time Off</li>
    <li>Mentorship &amp; Continuous Continuing Education Opportunities</li>
  </ul>
</div>

<div class="page-divider">
  <h2>Employee Benefits &amp; Perks</h2>
  <p><img alt="Three dentists reviewing dental patient chart" class="elem-left" src="/assets/images/careers-1.jpg" /></p>
  <p>Looking for a dental home that values your contribution, work-life balance, and professional growth? At Cove Choice Dental, we invest in our team members with top-tier benefits, including:</p>
  <ul>
    <li>Comprehensive Medical, Dental, and Vision Coverage</li>
    <li>Competitive compensation with performance bonuses</li>
    <li>Paid holidays and generous vacation time</li>
    <li>Continuing education stipends and hands-on skill training</li>
    <li>Annual team outings, holiday parties, and positive culture</li>
  </ul>

  <h2>Current Open Positions</h2>
  <p><img alt="Three smiling dental team members" class="elem-left" src="/assets/images/careers-2.jpg" /></p>
  <p>We are always eager to welcome passionate, dedicated professionals to our growing practice in Copperas Cove, TX. Current opportunities include:</p>
  <ul>
    <li><strong>Dental Assistant (RDA):</strong> Provide chairside support, digital X-rays, and exceptional patient care.</li>
    <li><strong>Front Desk Patient Coordinator:</strong> Coordinate schedules, insurance verifications, and warm check-ins.</li>
    <li><strong>Associate General Dentist:</strong> Comprehensive restorative, preventive, and surgical care with complete clinical autonomy.</li>
    <li><strong>Registered Dental Hygienist (RDH):</strong> Provide gentle, comprehensive prophylaxis and periodontal maintenance care.</li>
  </ul>

  <h2>How to Apply</h2>
  <p>If you're ready to grow your career with a practice that feels like family, we would love to hear from you! Click below to submit your resume and tell us about yourself.</p>
  <p style="margin-top: 20px;">
    <a class="btn" href="https://forms.gle/DjqgUunnsNb4QvvV6" target="_blank" rel="noopener noreferrer">Submit Your Application Online</a>
  </p>
</div>

<div class="more-to-explore">
  <span>More to Explore</span>
  <p>
    <a class="btn" href="/about-us">About Our Practice</a>
    <a class="btn" href="/meet-the-dentists">Meet Our Doctors</a>
    <a class="btn" href="/dental-services">Explore Our Services</a>
    <a class="btn-alt" href="/contact">Contact Our Office</a>
  </p>
</div>
`;

  return (
    <ServicePageLayout
      title="Careers at Cove Choice Dental"
      subtitle="Join Our Thriving, Compassionate Dental Team in Copperas Cove, TX"
      description="We've had the honor of working alongside many talented dental professionals over the years. Explore our openings and take the next big step in your career."
      breadcrumbLabel="Careers"
      bgImage="/assets/images/banner-services.jpg"
      sidebarType="appointment"
      specialOffer={{
        title: "Join Our Team",
        price: "Apply Today",
        description: "Submit your resume online or email our office directly at info@covechoicedental.com.",
        link: "https://forms.gle/DjqgUunnsNb4QvvV6",
        badge: "We're Hiring",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </ServicePageLayout>
  );
}
