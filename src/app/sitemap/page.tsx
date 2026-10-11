import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Sitemap | Cove Choice Dental Copperas Cove, TX",
  description: "Explore the comprehensive sitemap for Cove Choice Dental in Copperas Cove, TX for easy navigation to all dental services and patient resources.",
};

export default function SitemapPage() {
  const contentHtml = `
<div class="page-divider">
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; margin-top: 10px;">
    
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
      <h3 style="color: #0f3d4c; margin-top: 0; margin-bottom: 16px; border-bottom: 2px solid #38bdf8; padding-bottom: 8px;">Main Pages</h3>
      <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px;">
        <li><a href="/" style="color: #0284c7; text-decoration: none; font-weight: 500;">Home</a></li>
        <li><a href="/about-us" style="color: #0284c7; text-decoration: none; font-weight: 500;">About Our Practice</a></li>
        <li><a href="/meet-the-dentists" style="color: #0284c7; text-decoration: none; font-weight: 500;">Meet Our Dentists</a></li>
        <li><a href="/tour-our-office" style="color: #0284c7; text-decoration: none; font-weight: 500;">Tour Our Office</a></li>
        <li><a href="/advanced-dental-technology" style="color: #0284c7; text-decoration: none; font-weight: 500;">Advanced Technology</a></li>
        <li><a href="/reviews" style="color: #0284c7; text-decoration: none; font-weight: 500;">Patient Reviews</a></li>
        <li><a href="/contact" style="color: #0284c7; text-decoration: none; font-weight: 500;">Contact Us</a></li>
        <li><a href="/request-an-appointment" style="color: #0284c7; text-decoration: none; font-weight: 500;">Request an Appointment</a></li>
      </ul>
    </div>

    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
      <h3 style="color: #0f3d4c; margin-top: 0; margin-bottom: 16px; border-bottom: 2px solid #38bdf8; padding-bottom: 8px;">Core Dental Care</h3>
      <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px;">
        <li><a href="/preventive-dentistry" style="color: #0284c7; text-decoration: none; font-weight: 500;">Preventive Care &amp; Cleanings</a></li>
        <li><a href="/childrens-dentistry" style="color: #0284c7; text-decoration: none; font-weight: 500;">Children's Dentistry</a></li>
        <li><a href="/childrens-dental-checkups-and-cleanings" style="color: #0284c7; text-decoration: none; font-weight: 500;">Kids Checkups &amp; Cleanings</a></li>
        <li><a href="/childrens-tooth-colored-fillings" style="color: #0284c7; text-decoration: none; font-weight: 500;">Kids Tooth-Colored Fillings</a></li>
        <li><a href="/emergency-pediatric-dentist" style="color: #0284c7; text-decoration: none; font-weight: 500;">Emergency Pediatric Dentist</a></li>
        <li><a href="/emergency-dentistry" style="color: #0284c7; text-decoration: none; font-weight: 500;">Emergency Dental Care</a></li>
        <li><a href="/root-canal-therapy" style="color: #0284c7; text-decoration: none; font-weight: 500;">Root Canal Therapy</a></li>
        <li><a href="/tooth-extractions" style="color: #0284c7; text-decoration: none; font-weight: 500;">Tooth Extractions</a></li>
        <li><a href="/wisdom-teeth-removal" style="color: #0284c7; text-decoration: none; font-weight: 500;">Wisdom Teeth Removal</a></li>
        <li><a href="/gum-disease-treatment" style="color: #0284c7; text-decoration: none; font-weight: 500;">Gum Disease Treatment</a></li>
        <li><a href="/tmj-therapy" style="color: #0284c7; text-decoration: none; font-weight: 500;">TMJ Therapy &amp; Splints</a></li>
      </ul>
    </div>

    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
      <h3 style="color: #0f3d4c; margin-top: 0; margin-bottom: 16px; border-bottom: 2px solid #38bdf8; padding-bottom: 8px;">Restorative &amp; Cosmetic</h3>
      <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px;">
        <li><a href="/restorative-dentistry" style="color: #0284c7; text-decoration: none; font-weight: 500;">Restorative Dentistry</a></li>
        <li><a href="/replace-missing-teeth" style="color: #0284c7; text-decoration: none; font-weight: 500;">Replace Missing Teeth</a></li>
        <li><a href="/tooth-colored-fillings" style="color: #0284c7; text-decoration: none; font-weight: 500;">Tooth-Colored Fillings</a></li>
        <li><a href="/dental-crowns" style="color: #0284c7; text-decoration: none; font-weight: 500;">Dental Crowns</a></li>
        <li><a href="/dental-bridges" style="color: #0284c7; text-decoration: none; font-weight: 500;">Dental Bridges</a></li>
        <li><a href="/dentures" style="color: #0284c7; text-decoration: none; font-weight: 500;">Modern Dentures &amp; Partials</a></li>
        <li><a href="/dental-implants" style="color: #0284c7; text-decoration: none; font-weight: 500;">Dental Implants</a></li>
        <li><a href="/all-on-4" style="color: #0284c7; text-decoration: none; font-weight: 500;">All-on-4 Implants</a></li>
        <li><a href="/implant-dentures" style="color: #0284c7; text-decoration: none; font-weight: 500;">Implant-Supported Dentures</a></li>
        <li><a href="/dental-implant-failure-and-salvage" style="color: #0284c7; text-decoration: none; font-weight: 500;">Dental Implant Salvage</a></li>
        <li><a href="/cosmetic-dentistry" style="color: #0284c7; text-decoration: none; font-weight: 500;">Cosmetic Dentistry</a></li>
        <li><a href="/teeth-whitening" style="color: #0284c7; text-decoration: none; font-weight: 500;">Teeth Whitening</a></li>
        <li><a href="/veneers" style="color: #0284c7; text-decoration: none; font-weight: 500;">Porcelain Veneers</a></li>
        <li><a href="/cosmetic-bonding" style="color: #0284c7; text-decoration: none; font-weight: 500;">Cosmetic Bonding</a></li>
      </ul>
    </div>

    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
      <h3 style="color: #0f3d4c; margin-top: 0; margin-bottom: 16px; border-bottom: 2px solid #38bdf8; padding-bottom: 8px;">Insurance &amp; Resources</h3>
      <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px;">
        <li><a href="/dental-insurance" style="color: #0284c7; text-decoration: none; font-weight: 500;">Dental Insurance Overview</a></li>
        <li><a href="/medicaid-and-chip" style="color: #0284c7; text-decoration: none; font-weight: 500;">Medicaid &amp; CHIP</a></li>
        <li><a href="/aetna-dentist" style="color: #0284c7; text-decoration: none; font-weight: 500;">Aetna Dentist</a></li>
        <li><a href="/delta-dental-dentist" style="color: #0284c7; text-decoration: none; font-weight: 500;">Delta Dental Dentist</a></li>
        <li><a href="/humana-dentist" style="color: #0284c7; text-decoration: none; font-weight: 500;">Humana Dentist</a></li>
        <li><a href="/united-concordia-dentist" style="color: #0284c7; text-decoration: none; font-weight: 500;">United Concordia Dentist</a></li>
        <li><a href="/united-healthcare" style="color: #0284c7; text-decoration: none; font-weight: 500;">United Healthcare Dentist</a></li>
        <li><a href="/for-patients" style="color: #0284c7; text-decoration: none; font-weight: 500;">Patient Information</a></li>
        <li><a href="/faqs" style="color: #0284c7; text-decoration: none; font-weight: 500;">Frequently Asked Questions</a></li>
        <li><a href="/careers" style="color: #0284c7; text-decoration: none; font-weight: 500;">Careers</a></li>
        <li><a href="/privacy-policy" style="color: #0284c7; text-decoration: none; font-weight: 500;">Privacy Policy</a></li>
      </ul>
    </div>

  </div>
</div>
`;

  return (
    <ServicePageLayout
      title="Website Sitemap"
      subtitle="Complete Directory of Cove Choice Dental Services & Patient Resources"
      description="Easily navigate to any service, insurance guide, or patient information page on the Cove Choice Dental website."
      breadcrumbLabel="Sitemap"
      bgImage="/assets/images/banner-services.jpg"
      sidebarType="appointment"
    >
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </ServicePageLayout>
  );
}
