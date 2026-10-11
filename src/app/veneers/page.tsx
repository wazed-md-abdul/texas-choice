import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Porcelain Veneers Copperas Cove, TX | Cosmetic Smile Makeover | Cove Choice Dental",
  description:
    "Transform chipped, stained, or gapped teeth with custom porcelain veneers in Copperas Cove, TX. Lifelike, stain-resistant, and durable cosmetic dentistry at Cove Choice Dental.",
};

export default function VeneersPage() {
  const contentHtml = `
<div class="why">
  <h2>Why Choose Cove Choice Dental for Porcelain Veneers?</h2>
  <ul>
    <li>Hand-Crafted, Ultra-Thin Porcelain Shells</li>
    <li>Conceals Chips, Cracks, Gaps &amp; Deep Discoloration</li>
    <li>Stain-Resistant Materials for a Lasting Hollywood Smile</li>
    <li>Custom Smile Design with 0% Interest CareCredit® Financing</li>
  </ul>
</div>

<div class="page-divider">
  <h2>What Are Porcelain Veneers?</h2>
  <p>
    <img
      alt="Illustration of veneer being placed on tooth"
      class="elem-left"
      src="/assets/images/veneer-1.jpg"
    />
    Dental veneers are ultra-thin shells of medical-grade porcelain custom-crafted to cover the front surface of your teeth. Because porcelain mimics the light-reflecting properties and translucency of natural tooth enamel, veneers create an immaculate, symmetrical smile that looks completely real. In as few as two comfortable visits, veneers can resolve multiple cosmetic concerns all at once.
  </p>

  <h2>The Veneer Process</h2>
  <p>
    <img
      alt="Patient smiling while dentist selects shade of veneer"
      class="elem-left"
      src="/assets/images/veneer-2.jpg"
    />
  </p>
  <ul>
    <li><strong>1. Cosmetic Consultation & Smile Design:</strong> We discuss your aesthetic goals, take digital scans, and customize the ideal shape, length, and shade of your dream smile.</li>
    <li><strong>2. Gentle Enamel Preparation:</strong> A microscopic sliver of enamel (roughly the thickness of a contact lens) is gently shaped to ensure your veneers sit flush without feeling bulky. We provide temporary veneers while our master ceramists craft your permanent ones.</li>
    <li><strong>3. Final Bonding:</strong> At your second visit, we bond your permanent porcelain veneers securely in place, polish them to perfection, and send you out with a stunning new smile.</li>
  </ul>

  <h2>The Benefits of Porcelain Veneers</h2>
  <p>
    <img
      alt="Woman's smile compared with porcelain veneers shade chart"
      class="elem-left"
      src="/assets/images/veneers-1.jpg"
    />
  </p>
  <ul>
    <li><strong>Comprehensive Cosmetic Fix:</strong> Conceals chips, stubborn intrinsic stains, mild misalignments, uneven lengths, and unwanted gaps simultaneously.</li>
    <li><strong>Stain Resistance:</strong> Non-porous dental ceramic resists discoloration from coffee, red wine, and tea far better than natural enamel.</li>
    <li><strong>Long-Lasting Results:</strong> High-quality porcelain veneers routinely last 15 to 20 years with proper daily brushing, flossing, and regular cleanings.</li>
  </ul>

  <h2>Porcelain Veneers FAQs</h2>
  <div class="accordion">
    <h3>Are Porcelain Veneers Permanent?</h3>
    <p>
      Because a micro-thin layer of enamel is removed to seat the veneer flush with your gumline, the procedure is irreversible. While the restorations are permanent, the veneers themselves last 15+ years before requiring replacement or maintenance.
    </p>

    <h3>What Happens to the Teeth Underneath Veneers?</h3>
    <p>
      Your natural teeth remain healthy and fully functional underneath. Practicing good daily oral hygiene ensures that the back of the teeth and gum margins stay free from plaque and decay.
    </p>

    <h3>Can You Whiten Porcelain Veneers?</h3>
    <p>
      Porcelain does not react to teeth whitening chemicals. If you would like your entire smile to be brighter, we recommend doing a Zoom! teeth whitening treatment before your veneers are crafted so the porcelain matches your brightest desired shade!
    </p>
  </div>
</div>

<div class="more-to-explore">
  <span>More to Explore</span>
  <p>
    <a class="btn" href="/cosmetic-dentistry">Cosmetic Dentistry Overview</a>
    <a class="btn" href="/teeth-whitening">Professional Teeth Whitening</a>
    <a class="btn" href="/cosmetic-bonding">Cosmetic Bonding</a>
    <a class="btn" href="/dental-crowns">Dental Crowns</a>
    <a class="btn-alt" href="/dental-services">Explore All Services →</a>
  </p>
</div>
`;

  return (
    <ServicePageLayout
      title="Porcelain Veneers in Copperas Cove, TX"
      subtitle="Complete Cosmetic Smile Makeovers in Just Two Visits"
      description="Unhappy with chips, gaps, or dark stains on your front teeth? Custom porcelain veneers provide an instant, radiant, red-carpet smile tailored to your unique facial features."
      breadcrumbLabel="Porcelain Veneers"
      bgImage="/assets/images/banner-services.jpg"
      specialOffer={{
        title: "Cosmetic Smile Evaluation",
        price: "Consult",
        notes: "Digital Smile Analysis & Comprehensive Aesthetic Review",
        href: "/request-an-appointment",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </ServicePageLayout>
  );
}
