import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Cove Choice Dental | Copperas Cove, TX",
  description: "Review our website privacy notice to learn how Cove Choice Dental in Copperas Cove, Texas protects your online privacy and data.",
};

export default function PrivacyPolicyPage() {
  const contentHtml = `
<div class="page-divider">
  <p>Please note that this Privacy Notice applies to information collected when you visit our website.</p>

  <h2>1. What Data We Collect and How We Use It</h2>
  <p>We may collect the following categories of information on our website:</p>
  <ul>
    <li><strong>Website Activity:</strong> Data regarding pages visited, duration, and user interaction patterns.</li>
    <li><strong>Device &amp; Browser Information:</strong> Technical details such as IP address, operating system, and browser version.</li>
    <li><strong>Contact Information:</strong> Names, phone numbers, and email addresses voluntarily submitted via appointment request forms.</li>
    <li><strong>Customer Service Records:</strong> Inquiries submitted regarding dental care, insurance, or general questions.</li>
  </ul>
  <p>We use this data solely to enhance user experience, optimize site performance, process appointment requests, and communicate important dental health updates.</p>

  <h2>2. Data Protection &amp; Sharing</h2>
  <p>We treat all patient data with the utmost confidentiality. We do not sell your personal or healthcare information to third parties. Data is only shared with HIPAA-compliant service vendors who assist in operational systems like appointment scheduling, digital forms, and secure communication.</p>

  <h2>3. Cookies and Tracking Technologies</h2>
  <p>This website utilizes standard cookies and analytics tags to measure web traffic and ensure seamless site navigation. You can adjust your browser settings at any time to block or delete cookies.</p>

  <h2>4. Data Security</h2>
  <p>We implement stringent technical, administrative, and physical safeguards to prevent unauthorized access, disclosure, or alteration of personal data collected through our website.</p>

  <h2>5. Contact Us Regarding Your Privacy</h2>
  <p>If you have any questions or concerns regarding our privacy practices, please contact our office directly at <a href="tel:2542712882">(254) 271-2882</a> or visit our <a href="/contact">contact page</a>.</p>
</div>
`;

  return (
    <ServicePageLayout
      title="Website Privacy Policy"
      subtitle="How Cove Choice Dental Protects Your Personal Information"
      description="We have prepared this Privacy Notice to explain how, why, and when we collect data from you on our website."
      breadcrumbLabel="Privacy Policy"
      bgImage="/assets/images/banner-services.jpg"
      sidebarType="appointment"
    >
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </ServicePageLayout>
  );
}
