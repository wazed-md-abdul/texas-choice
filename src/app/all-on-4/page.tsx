import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "All-on-4 Dental Implants Copperas Cove, TX | Full Arch Teeth | Cove Choice Dental",
  description:
    "Replace an entire arch of missing teeth with just 4 strategically placed dental implants. Permanent, non-removable All-on-4 implants in Copperas Cove, TX at Cove Choice Dental.",
};

export default function AllOn4Page() {
  const contentHtml = `
<div class="why">
  <h2>Why Choose Cove Choice Dental for All-on-4?</h2>
  <ul>
    <li>Full-Arch Teeth Replacement in a Single Procedure</li>
    <li>Dental Implants Surgically Placed In-Office</li>
    <li>No Bone Grafting Needed for Most Patients</li>
    <li>Permanently Anchored Teeth That Never Slip or Click</li>
  </ul>
</div>

<div class="page-divider">
  <h2>How Do All-on-4 Implants Work?</h2>
  <p>
    <img
      alt="Illustration of All-on-4 dental implants in Copperas Cove, TX"
      class="elem-left"
      src="/assets/images/all-4-1.jpg"
    />
    The groundbreaking All-on-4 system replaces an entire upper or lower arch of missing teeth using only four strategically tilted titanium implant posts. By angling the rear implants at 45 degrees, we maximize contact with naturally dense parts of your jawbone, eliminating the need for invasive bone grafting procedures in most patients.
  </p>

  <h2>Am I a Candidate for All-on-4 Implants?</h2>
  <p>
    <img
      alt="Senior man smiling happily at dental appointment"
      class="elem-left"
      src="/assets/images/all-4-2.jpg"
    />
    All-on-4 is ideal for patients who:
  </p>
  <ul>
    <li>Are currently missing all or most of their teeth along the upper or lower arch.</li>
    <li>Struggle with loose, ill-fitting traditional dentures that slip, cause sores, or require messy pastes.</li>
    <li>Have suffered significant bone density loss in the jaw but wish to avoid bone graft surgery.</li>
    <li>Want a permanent, non-removable full arch of teeth that looks, feels, and acts like real teeth.</li>
  </ul>

  <h2>Benefits of All-on-4 Implants</h2>
  <p>
    <img
      alt="Woman showing off full smile after All-on-4 implants"
      class="elem-left"
      src="/assets/images/all-4-3.jpg"
    />
  </p>
  <ul>
    <li><strong>Permanent &amp; Non-Removable:</strong> Cleaned like natural teeth with normal brushing and flossing; no taking teeth out at night.</li>
    <li><strong>Restore 95%+ Bite Power:</strong> Enjoy hearty steaks, raw vegetables, nuts, and crisp apples without hesitation.</li>
    <li><strong>Preserves Facial Structure:</strong> Implant posts actively stimulate jawbone regeneration, preventing the sunken facial look associated with tooth loss.</li>
    <li><strong>Same-Day Transformation:</strong> Walk in with failing teeth or loose dentures and leave with a securely attached, beautiful smile.</li>
  </ul>

  <h2>All-on-4 vs. Traditional Implants</h2>
  <p>
    <img
      alt="Denture attaching to All-on-4 dental implants"
      class="elem-left"
      src="/assets/images/all-4-4.jpg"
    />
    While traditional full-arch implant restoration may require six to eight individual implant posts and extensive sinus lifts or bone grafts, All-on-4 accomplishes complete rehabilitation with fewer implants, less healing time, and lower overall treatment costs.
  </p>
</div>

<div class="more-to-explore">
  <span>More to Explore</span>
  <p>
    <a class="btn" href="/dental-implants">Dental Implants Overview</a>
    <a class="btn" href="/dentures">Modern Dentures</a>
    <a class="btn" href="/implant-dentures">Implant-Supported Dentures</a>
    <a class="btn" href="/replace-missing-teeth">Replace Missing Teeth</a>
    <a class="btn-alt" href="/dental-services">Explore All Services →</a>
  </p>
</div>
`;

  return (
    <ServicePageLayout
      title="All-on-4® Dental Implants in Copperas Cove, TX"
      subtitle="Rebuild an Entire Row of Permanent Teeth with Just 4 Implants"
      description="Tired of loose dentures or missing teeth? The revolutionary All-on-4 dental implant technique restores an entire arch of permanent, natural-looking teeth with maximum stability and minimal surgery."
      breadcrumbLabel="All-on-4"
      bgImage="/assets/images/banner-services.jpg"
      specialOffer={{
        title: "All-on-4 Implant Consultation",
        price: "Consult",
        notes: "Full 3D Digital Imaging & Comprehensive Assessment",
        href: "/request-an-appointment",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </ServicePageLayout>
  );
}
