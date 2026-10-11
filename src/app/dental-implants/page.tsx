import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Dental Implants Copperas Cove, TX | Cost & Tooth Replacement | Cove Choice Dental",
  description:
    "Restore missing teeth permanently with dental implants in Copperas Cove, TX. In-house surgery, All-on-4, implant-supported dentures, crowns, and flexible financing at Cove Choice Dental.",
};

export default function DentalImplantsPage() {
  return (
    <ServicePageLayout
      title="Dental Implants in Copperas Cove, TX"
      subtitle="Permanent, Natural-Looking Tooth Replacement"
      description="Holes in your smile can cause surrounding teeth to shift and jawbone to deteriorate. Dental implants replicate the entire structure of natural teeth from root to crown, restoring 100% of your chewing power."
      bgImage="/assets/images/banner-services.jpg"
      breadcrumbLabel="Dental Implants"
      specialOffer={{
        title: "Implant Consultation Special",
        price: "Consult",
        notes: "Comprehensive Evaluation & Digital Imaging",
        href: "/request-an-appointment",
      }}
    >
      <div className="why">
        <h2>Why Choose Cove Choice Dental for Dental Implants?</h2>
        <ul>
          <li><strong>All Steps In-House:</strong> From surgical post placement to final crown or denture, our experienced dentists perform the entire procedure right here in Copperas Cove without outside referrals.</li>
          <li><strong>Permanent &amp; Natural-Looking:</strong> Custom-shaded porcelain restorations crafted to blend seamlessly with your natural smile.</li>
          <li><strong>Restores 100% Chewing Strength:</strong> Eat steaks, apples, and crunchy foods with absolute confidence.</li>
          <li><strong>Affordable Monthly Payments:</strong> In-network dental coverage optimization plus flexible CareCredit® 0% financing plans.</li>
        </ul>
      </div>

      <h2>What Are Dental Implants?</h2>
      <p>
        <img
          src="/assets/images/implants-1.jpg"
          alt="Dental implant model showing post, abutment, and crown"
          className="elem-left"
        />
        Dental implants are the modern gold standard for tooth replacement because they replace both the root and the crown of a missing tooth. The implant itself is a biocompatible titanium post surgically inserted into the jawbone.
      </p>
      <p>
        Through a natural biological healing process known as <em>osseointegration</em>, your jawbone fuses securely to the titanium post, creating a rock-solid foundation. A custom porcelain crown, dental bridge, or full arch denture is then permanently anchored on top.
      </p>

      <h2>The 4-Step Dental Implant Process</h2>
      <p>
        <img
          src="/assets/images/implant-process-1.jpg"
          alt="Dentist explaining dental implant procedure in Copperas Cove"
          className="elem-left"
        />
        While traditional practices refer patients to distant oral surgeons, our team performs every phase of your dental implant journey in our comfortable Copperas Cove clinic:
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
          <h3 className="text-base font-bold text-[#0b2545] m-0 mb-1">
            Step 1: Comprehensive Initial Consultation &amp; 3D Imaging
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 m-0">
            We review your medical history, examine your oral health with digital X-rays, and evaluate jawbone density. If necessary, preliminary treatments such as bone grafting or periodontal therapy are arranged.
          </p>
        </div>

        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
          <h3 className="text-base font-bold text-[#0b2545] m-0 mb-1">
            Step 2: Precise In-House Implant Surgery
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 m-0">
            Using gentle local anesthesia, our dentists make precise micro-incisions and position the titanium posts into the jawbone. Protective healing caps are placed to keep the area safe.
          </p>
        </div>

        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
          <h3 className="text-base font-bold text-[#0b2545] m-0 mb-1">
            Step 3: Osseointegration &amp; Abutment Attachment
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 m-0">
            Over the next 3 to 6 months, the implant post fuses securely with the bone. Once integrated, a small connecting piece called an abutment is attached to support your final tooth.
          </p>
        </div>

        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
          <h3 className="text-base font-bold text-[#0b2545] m-0 mb-1">
            Step 4: Delivery of Custom Restorations
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 m-0">
            Your custom-crafted porcelain crown, bridge, or All-on-4 hybrid denture is securely fastened. You walk out of our office with a revitalized smile ready to chew, smile, and speak with confidence!
          </p>
        </div>
      </div>

      <h2>Outstanding Benefits of Dental Implants</h2>
      <p>
        <img
          src="/assets/images/implants-3.jpg"
          alt="Patient showing beautiful smile after dental implant restoration"
          className="elem-left"
        />
        Unlike removable dentures that slip or traditional bridges that require filing down healthy adjacent teeth, dental implants offer unmatched benefits:
      </p>

      <ul>
        <li><strong>Prevent Bone Loss:</strong> Implants stimulate the jawbone during chewing, preventing facial sagging and the premature aging appearance caused by tooth loss.</li>
        <li><strong>High 95%+ Success Rate:</strong> Titanium implants are proven to last 30+ years, often a lifetime with good oral hygiene.</li>
        <li><strong>Effortless Oral Hygiene:</strong> Brush and floss your implants just like natural teeth—no messy adhesives or nightly soaking cups required.</li>
        <li><strong>No Dietary Restrictions:</strong> Bite into crisp apples, corn on the cob, and savory meats without fear of slippage or discomfort.</li>
      </ul>

      <h2>Who Can Dental Implants Help?</h2>
      <div className="grid sm:grid-cols-3 gap-4 my-6">
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
          <h4 className="font-bold text-sm text-[#0b2545] mb-1">Single Tooth Loss</h4>
          <p className="text-xs text-slate-600">Replaced with one titanium post topped by a custom porcelain crown without altering neighboring teeth.</p>
        </div>
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
          <h4 className="font-bold text-sm text-[#0b2545] mb-1">Multiple Teeth Loss</h4>
          <p className="text-xs text-slate-600">Two or more implants securely anchor an implant bridge, bridging wide gaps seamlessly.</p>
        </div>
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
          <h4 className="font-bold text-sm text-[#0b2545] mb-1">Full Arch Loss</h4>
          <p className="text-xs text-slate-600">All-on-4 and implant dentures anchor an entire upper or lower arch on 4 to 6 strategic posts.</p>
        </div>
      </div>

      <h2>Understanding the Cost of Dental Implants</h2>
      <p>
        <img
          src="/assets/images/implant-cost-1.jpg"
          alt="Discussing dental implant cost in Copperas Cove"
          className="elem-left"
        />
        The overall cost of dental implants varies based on how many teeth you are replacing and whether preliminary procedures (such as bone grafting) are required. While initial investment is higher than traditional dentures, implants last decades longer without frequent adjustments or replacements, making them far more economical over your lifetime.
      </p>

      <ul>
        <li><strong>Dental Insurance:</strong> Many PPO plans contribute toward the restorative crown, bridge, or preliminary extractions.</li>
        <li><strong>CareCredit® Financing:</strong> Low and zero-interest monthly installment plans allow you to begin treatment immediately.</li>
      </ul>

      {/* Schedule Consultation Callout */}
      <div className="mt-10 bg-gradient-to-r from-[#0b2545] to-[#134074] text-white p-8 rounded-3xl text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Ready to Rebuild Your Smile?</h3>
        <p className="text-slate-200 text-sm max-w-xl mx-auto mb-6">
          Schedule your dental implant consultation with Cove Choice Dental today. Call us at (254) 987-6777 or request an appointment online.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:12549876777"
            className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-3.5 px-8 rounded-xl text-base shadow transition-all"
          >
            Call: (254) 987-6777
          </a>
          <Link
            href="/request-an-appointment"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-3.5 px-6 rounded-xl text-sm transition-all"
          >
            Request Implant Consult
          </Link>
        </div>
      </div>
    </ServicePageLayout>
  );
}
