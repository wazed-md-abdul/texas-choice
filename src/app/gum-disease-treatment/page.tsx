import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Periodontal Therapy Copperas Cove, TX | Gum Disease | Oral Health",
  description: "Renew oral health following gum disease with periodontal therapy in Copperas Cove, TX performed by the skilled dentist in Copperas Cove and the experienced dentistry team at Cove Choice Dental.",
};

export default function GumDiseaseTreatmentPage() {
  const contentHtml = `
<p>When you don't brush and floss as thoroughly and regularly as you should, the resulting plaque and tartar buildup can lead to gum disease. At its earliest stages, only the gums are affected, meaning the issue can easily be reversed if treated properly. However, advanced gum disease can penetrate your oral tissues and eventually destroy the bone and membrane supporting the teeth. Cove Choice Dental offers a number of solutions for gum disease so that we can save your smile and stop further damage. <a href="/contact">Call us</a> to learn more about gum disease treatment in Copperas Cove, TX.</p>

<div class="why">
  <h2>Why Choose Cove Choice Dental for Gum Disease Treatment?</h2>
  <ul>
    <li>Minimally Invasive Alternatives & Deep Cleanings</li>
    <li>Dental Insurance Welcome & Flexible Payment Options</li>
    <li>Compassionate, High Quality Periodontal Care</li>
  </ul>
</div>

<div class="page-divider">
  <h2>What is Gum Disease?</h2>
  <p><img alt="Woman pulling her lip back to reveal red gums" class="elem-left" src="/assets/images/gum-disease-1.jpg"/></p>
  <p>Gum disease is more or less a bacterial infection that starts in the mouth. Oral bacteria produce acid that eats away at the gums, causing irritation, swelling, and even recession. Over time, the bacteria can harden into plaque and tartar, which are more difficult to remove with a simple toothbrush. If a case of gum disease reaches this advanced stage, you'll need professional treatment in order to restore your oral health.</p>

  <h2>Symptoms of Gum Disease</h2>
  <p><img alt="Man pulling his lip back to check his teeth in mirror" class="elem-left" src="/assets/images/gum-disease-2.jpg"/></p>
  <p>The best way to know whether you have gum disease is to schedule a checkup with your dentist in Copperas Cove. That said, there are noticeable symptoms that could indicate you need treatment, such as:</p>
  <ul>
    <li>Red, puffy, or tender gums</li>
    <li>Small amounts of blood when you brush or floss</li>
    <li>Teeth that appear longer than normal due to receding gums</li>
    <li>Persistent bad breath or bad taste in your mouth</li>
    <li>Increased dental sensitivity to hot or cold foods</li>
    <li>Teeth that feel loose or have shifted position</li>
  </ul>

  <h2>How Do We Treat Gum Disease?</h2>
  <p><img alt="Dentist showing a patient their X-ray" class="elem-left" src="/assets/images/gum-disease-3.jpg"/></p>
  <p>The treatment we recommend will ultimately depend on the severity of your case. After performing a thorough periodontal exam with gentle measurement of pocket depths, we'll have a clear roadmap to restore healthy gum tissue.</p>

  <h2>Scaling &amp; Root Planing</h2>
  <p><img alt="Patient receiving scaling and root planing periodontal therapy" class="elem-left" src="/assets/images/periodontal-1.jpg" /></p>
  <p>While gingivitis can usually be reversed with improved oral hygiene if caught early, advanced periodontitis must be addressed with professional deep cleanings like scaling and root planing. This procedure removes infectious bacteria, tartar, and diseased deposits from beneath the gumline and root surfaces, encouraging tissues to reattach securely.</p>

  <div class="section-toggle" style="display: block;">
    <h3>Do You Need Scaling &amp; Root Planing?</h3>
    <img alt="Lady shows inflamed gum tissue" class="elem-left" src="/assets/images/planing-1.jpg"/>
    <p>Periodontitis, the advanced stage of gum disease that causes permanent bone damage, often shows itself through symptoms like bleeding during brushing, receding gums, persistent halitosis, and swollen pockets around the teeth.</p>

    <h3>The Process of Scaling &amp; Root Planing</h3>
    <img alt="Illustration of teeth receiving scaling and root planing" class="elem-left" src="/assets/images/planing-2.jpg"/>
    <p>The deep cleaning process is typically broken into comfortable visits focused on quadrants of the mouth:</p>
    <ul>
      <li><strong>Scaling:</strong> Our dental team uses ultrasonic and specialized instruments to meticulously clear plaque and calculus from tooth surfaces and below the gumline.</li>
      <li><strong>Root Planing:</strong> Our dentist smooths the tooth roots, removing microscopic bacterial toxins and rough spots so gums can reattach snugly to clean teeth.</li>
    </ul>

    <h3>Aftercare Tips for Scaling &amp; Root Planing</h3>
    <img alt="Lady prepares to take pill" class="elem-left" src="/assets/images/planing-3.jpg"/>
    <p>Mild sensitivity may occur while your tissues heal. Keep these helpful tips in mind to ensure rapid comfort:</p>
    <ul>
      <li>Rinse gently with warm salt water after meals (1/4 teaspoon salt in 8 oz water).</li>
      <li>Use a soft-bristled toothbrush with gentle circular motions.</li>
      <li>Avoid crunchy, spicy, overly acidic, or hot foods for the first 48 hours.</li>
      <li>Stay on track with recommended 3-4 month periodontal maintenance cleanings.</li>
    </ul>
  </div>

  <h2>Antibiotic Therapy</h2>
  <p><img alt="Patient holding antibiotic therapy pills" class="elem-left" src="/assets/images/periodontal-3.jpg" /></p>
  <p>As periodontal disease progresses, bacteria hide deep within microscopic pockets. Even thorough scaling and root planing benefits from adjunctive antibiotic therapy. Targeted localized antimicrobial therapy attacks stubborn bacteria, keeping periodontal pockets sanitized while your gums heal.</p>
</div>

<div class="more-to-explore">
  <span>More to Explore</span>
  <p>
    <a class="btn" href="/preventive-dentistry">Dental Checkups &amp; Cleanings</a>
    <a class="btn" href="/childrens-dentistry">Children's Dentistry</a>
    <a class="btn" href="/restorative-dentistry">Tooth Repair &amp; Fillings</a>
    <a class="btn" href="/replace-missing-teeth">Replace Missing Teeth</a>
    <a class="btn" href="/emergency-dentistry">Emergency Dental Care</a>
    <a class="btn-alt" href="/dental-services">View All Dental Services</a>
  </p>
</div>
`;

  return (
    <ServicePageLayout
      title="Gum Disease Treatment"
      subtitle="Stopping Periodontal Disease in Its Tracks in Copperas Cove, TX"
      description="Protect your smile from tooth loss and chronic infection with gentle, effective gum disease treatment and periodontal deep cleanings at Cove Choice Dental."
      breadcrumbLabel="Gum Disease Treatment"
      bgImage="/assets/images/banner-services.jpg"
      specialOffer={{
        title: "New Patient Special",
        price: "$59",
        description: "Includes Comprehensive Exam, X-Rays & Periodontal Health Screening.",
        link: "/request-an-appointment",
        badge: "Limited Time Offer",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </ServicePageLayout>
  );
}
