import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Root Canal Therapy Copperas Cove, TX | Gentle Tooth Relief | Cove Choice Dental",
  description:
    "Relieve toothache pain and save infected teeth with gentle root canal therapy in Copperas Cove, TX performed by the experienced dentists at Cove Choice Dental.",
};

export default function RootCanalTherapyPage() {
  const contentHtml = `
<div class="why">
  <h2>Why Choose Cove Choice Dental for Root Canal Therapy?</h2>
  <ul>
    <li>Same-Day Pain Relief & Gentle Anesthetics</li>
    <li>Advanced Digital Diagnostics & In-House Restorations</li>
    <li>Focus on Preserving Your Natural Tooth Structure</li>
    <li>Medicaid, PPOs & 0% CareCredit® Financing Accepted</li>
  </ul>
</div>

<div class="page-divider">
  <h2>The Root Canal Procedure</h2>
  <p>
    <img
      alt="Man in need of root canal holding cheek in pain"
      class="elem-left"
      src="/assets/images/root-canal-1.jpg"
    />
    At the beginning of root canal therapy, gentle local anesthetic completely numbs your mouth so you feel relaxed and pain-free. We create a tiny opening in your tooth to access the infected pulp tissue. The pulp and harmful bacteria are gently removed, and specialized micro-files thoroughly disinfect and shape the inner root canals. Because the tooth is weakened by the infection, we place a custom-crafted porcelain crown over it to restore 100% of its chewing strength and beauty.
  </p>

  <h2>Reasons for a Root Canal</h2>
  <p>
    <img
      alt="Diagram of infected tooth pulp in need of root canal therapy"
      class="elem-left"
      src="/assets/images/root-canal-2.jpg"
    />
    The pulp inside your tooth is safely sealed beneath enamel and dentin, but it can become inflamed or infected when exposed to bacteria. Common culprits include deep, untreated cavities, sudden fractures or chips, repeated dental procedures on the same tooth, or faulty crowns placed in the past. If you notice throbbing pain, sensitivity to hot and cold, or swelling around the gums, prompt root canal therapy is crucial to save the tooth from needing an extraction.
  </p>

  <h2>Understanding the Cost of Root Canals</h2>
  <p>
    <img
      alt="Tooth and stacks of coins showing affordable root canal treatment"
      class="elem-left"
      src="/assets/images/root-cost-1.jpg"
    />
    Because every patient’s tooth anatomy and degree of infection are unique, the cost of root canal therapy depends on a few straightforward factors:
  </p>

  <div class="section-toggle">
    <h3>Factors That Affect Root Canal Cost</h3>
    <img
      alt="Model teeth showing root canal anatomy"
      class="elem-left"
      src="/assets/images/root-cost-2.jpg"
    />
    <ul>
      <li><strong>Tooth Location:</strong> Front teeth have a single canal and are simpler to treat, while back molars feature three or four curved canals requiring more delicate disinfection.</li>
      <li><strong>Complexity & Infection Severity:</strong> Severe infections or prior failed treatments require meticulous care.</li>
      <li><strong>Protective Dental Crown:</strong> Placing a custom dental crown ensures your tooth doesn’t crack under everyday chewing pressure.</li>
    </ul>

    <h3>Is It Cheaper to Pull the Tooth?</h3>
    <p>
      While extracting a tooth may seem cheaper upfront, missing a natural tooth causes neighboring teeth to drift, bone to dissolve, and requires a dental bridge or dental implant down the road. Saving your natural tooth with root canal therapy is almost always more cost-effective and healthier in the long term.
    </p>

    <h3>Does Dental Insurance Cover Root Canals?</h3>
    <p>
      Most dental insurance plans classify root canal therapy as a basic or major restorative procedure, commonly covering 50% to 80% of costs after deductibles. Our Copperas Cove team files all insurance claims directly on your behalf to minimize out-of-pocket expenses.
    </p>

    <h3>Flexible Financing with CareCredit®</h3>
    <p>
      For any remaining balance or patients without insurance, we offer convenient CareCredit® 0% interest monthly payment plans so you can relieve pain immediately without financial strain.
    </p>
  </div>

  <h2>Root Canal FAQs</h2>
  <div class="accordion">
    <h3>How Long Does a Root Canal Take?</h3>
    <p>
      Most root canals can be completed in a single comfortable visit of 60 to 90 minutes. In cases of severe infection, we may place an antibacterial medication inside the tooth and seal it permanently at a second visit.
    </p>

    <h3>Are Root Canals Painful?</h3>
    <p>
      No! Root canal therapy doesn’t cause pain—it eliminates pain. With modern anesthetics and advanced dental techniques, having a root canal is no more uncomfortable than receiving a routine filling.
    </p>

    <h3>How Long Do Root Canals Last?</h3>
    <p>
      With proper oral hygiene and regular checkups, teeth restored with a root canal and dental crown can last for decades or even a lifetime.
    </p>

    <h3>Can Root Canals Be Prevented?</h3>
    <p>
      Yes! Brush twice daily, floss every night, wear a mouthguard during sports, and visit Cove Choice Dental every six months so small cavities are caught long before they reach the pulp.
    </p>
  </div>
</div>

<div class="more-to-explore">
  <span>More to Explore</span>
  <p>
    <a class="btn" href="/emergency-dentistry">Emergency Pain Relief</a>
    <a class="btn" href="/dental-crowns">Dental Crowns</a>
    <a class="btn" href="/tooth-extractions">Tooth Extractions</a>
    <a class="btn" href="/dental-implants">Dental Implants</a>
    <a class="btn" href="/preventive-dentistry">Dental Checkups &amp; Cleanings</a>
    <a class="btn-alt" href="/dental-services">Explore All Services →</a>
  </p>
</div>
`;

  return (
    <ServicePageLayout
      title="Root Canal Therapy in Copperas Cove, TX"
      subtitle="Fast, Gentle Toothache Relief & Tooth Preservation"
      description="A toothache is often a sign of an infected nerve or pulp inside your tooth. Our experienced dentists provide gentle, immediate relief with modern root canal therapy, saving your natural tooth from extraction."
      breadcrumbLabel="Root Canal Therapy"
      bgImage="/assets/images/banner-services.jpg"
      specialOffer={{
        title: "$65 Emergency Visit Special",
        price: "$65",
        notes: "Emergency Diagnostic Exam & Digital X-Ray Included",
        href: "/offers-promotions",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </ServicePageLayout>
  );
}
