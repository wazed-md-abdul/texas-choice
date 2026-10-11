import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Teeth Whitening Copperas Cove, TX | Zoom! Whitening | Cove Choice Dental",
  description:
    "Brighten your smile up to 8 shades in just 1 hour with professional Zoom! teeth whitening in Copperas Cove, TX at Cove Choice Dental. Fast, safe, and effective.",
};

export default function TeethWhiteningPage() {
  const contentHtml = `
<div class="why">
  <h2>Why Choose Cove Choice Dental for Teeth Whitening?</h2>
  <ul>
    <li>In-Office Zoom! Power Whitening &amp; Custom Take-Home Kits</li>
    <li>Lightens Coffee, Tea, Tobacco &amp; Aging Stains up to 8 Shades</li>
    <li>Clinically Proven, Safe for Sensitive Teeth &amp; Enamel</li>
    <li>Free Whitening Pen Included with New Patient Specials</li>
  </ul>
</div>

<div class="page-divider">
  <h2>Who Is a Good Candidate for Teeth Whitening?</h2>
  <p>
    <img
      alt="Dental patient with dazzling white smile in Copperas Cove"
      class="elem-left"
      src="/assets/images/whitening-1.jpg"
    />
    Even if you brush and floss diligently, tooth enamel naturally absorbs pigments over time from coffee, tea, red wine, dark sauces, and biological aging. Almost any patient with healthy teeth and gums looking to boost confidence for weddings, interviews, or daily life is an ideal candidate for professional whitening.
  </p>

  <h2>In-Office Zoom! vs. Take-Home Whitening</h2>
  <p>
    <img
      alt="Woman receiving in-office Zoom teeth whitening treatment"
      class="elem-left"
      src="/assets/images/whitening-2.jpg"
    />
  </p>
  <ul>
    <li><strong>In-Office Zoom! Whitening (1 Hour):</strong> Our dental team applies professional-strength whitening gel and activates it with a specialized LED light. In just 60 minutes, stubborn surface and deep stains disappear, leaving your smile up to 8 shades lighter.</li>
    <li><strong>Custom Take-Home Whitening Kits:</strong> We craft customized dental trays that fit your teeth like a glove, providing prescription-grade bleaching gel you can apply comfortably in your own home over 10 to 14 days.</li>
  </ul>

  <h2>Tips for Maintaining Your Whiter Smile</h2>
  <p>
    <img
      alt="Woman with bright white smile in Copperas Cove"
      class="elem-left"
      src="/assets/images/whitening-3.jpg"
    />
  </p>
  <ul>
    <li><strong>Consistent Hygiene:</strong> Brush twice a day with non-abrasive fluoride toothpaste and floss daily.</li>
    <li><strong>Rinse After Staining Foods:</strong> Drink water or rinse after dark coffee, colas, red wine, or berries.</li>
    <li><strong>Periodic Touch-Ups:</strong> Use your custom trays with a refill gel syringe every few months to keep your smile shining like new.</li>
  </ul>

  <h2>Understanding the Cost of Teeth Whitening</h2>
  <div class="section-toggle">
    <h3>Professional Care vs. Over-the-Counter Strips</h3>
    <img
      alt="Woman smiling after professional teeth whitening"
      class="elem-left"
      src="/assets/images/1-cost-teeth-whitening.jpg"
    />
    <p>
      Drugstore whitening strips and charcoal pastes often contain diluted gels or abrasive particles that can strip enamel and irritate sensitive gums. In contrast, professional dentist-administered treatments protect your gums with dental dams, yield dramatic results immediately, and save money over time by doing the job right.
    </p>
    <p>
      At Cove Choice Dental, we accept flexible 0% interest monthly payment options through <strong>CareCredit®</strong> and <strong>Sunbit</strong>, making cosmetic smile makeovers budget-friendly for everyone.
    </p>
  </div>

  <h2>Teeth Whitening FAQs</h2>
  <div class="accordion">
    <h3>Does Teeth Whitening Cause Tooth Sensitivity?</h3>
    <p>
      Some patients experience minor, temporary sensitivity that resolves within 24 to 48 hours. Our advanced Zoom! formula includes desensitizing agents that protect enamel and soothe nerve endings.
    </p>

    <h3>How Long Does Professional Whitening Last?</h3>
    <p>
      With good oral hygiene and mindful dietary habits, your bright new shade can last anywhere from one to three years before requiring a brief touch-up.
    </p>

    <h3>Can You Whiten Crowns or Veneers?</h3>
    <p>
      Whitening gel only lightens natural enamel. If you plan to get crowns or veneers, we recommend whitening your natural teeth first so restorations can be color-matched to your brightest smile!
    </p>
  </div>
</div>

<div class="more-to-explore">
  <span>More to Explore</span>
  <p>
    <a class="btn" href="/veneers">Porcelain Veneers</a>
    <a class="btn" href="/cosmetic-bonding">Cosmetic Bonding</a>
    <a class="btn" href="/cosmetic-dentistry">Cosmetic Smile Makeover</a>
    <a class="btn" href="/preventive-dentistry">Dental Checkups &amp; Cleanings</a>
    <a class="btn-alt" href="/dental-services">Explore All Services →</a>
  </p>
</div>
`;

  return (
    <ServicePageLayout
      title="Professional Teeth Whitening in Copperas Cove, TX"
      subtitle="Zoom! In-Office Power Whitening & Custom Take-Home Trays"
      description="Erase years of coffee, tea, and age-related stains in just one hour. Our professional Zoom! teeth whitening delivers fast, safe, and brilliant results that drugstore strips simply can’t match."
      breadcrumbLabel="Teeth Whitening"
      bgImage="/assets/images/banner-services.jpg"
      specialOffer={{
        title: "Free Whitening Pen with New Patient Special",
        price: "$100",
        notes: "Includes Comprehensive Exam, X-Rays & Whitening Pen",
        href: "/offers-promotions",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </ServicePageLayout>
  );
}
