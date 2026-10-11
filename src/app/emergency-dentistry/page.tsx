import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";
import { AlertCircle, Zap, Activity, ShieldAlert, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Emergency Dentist Copperas Cove, TX | Same-Day Dental Relief | (254) 987-6777",
  description:
    "Suffering from a toothache or dental injury? Contact emergency dentists in Copperas Cove, TX at Cove Choice Dental. Same-day emergency appointments & $65 emergency special.",
};

export default function EmergencyDentistryPage() {
  return (
    <ServicePageLayout
      title="Same-Day Emergency Dentistry"
      subtitle="Urgent Toothache & Dental Injury Care in Copperas Cove"
      description="Don't suffer through severe tooth pain. Our compassionate dental team provides fast, gentle, same-day relief for toothaches, chipped teeth, knocked-out teeth, and oral infections."
      bgImage="/assets/images/banner-emergency.jpg"
      breadcrumbLabel="Emergency Dentistry"
      specialOffer={{
        title: "$65 Emergency Visit Special",
        price: "$65",
        notes: "Includes Emergency Diagnostic Exam & X-Ray",
        href: "/offers-promotions",
      }}
    >
      {/* Urgent Emergency Alert */}
      <div className="bg-rose-50 border-l-4 border-rose-500 p-5 rounded-2xl mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-rose-900 font-bold text-lg m-0 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" /> Experiencing Severe Pain or Dental Injury?
          </h3>
          <p className="text-rose-800 text-xs sm:text-sm m-0 mt-1">
            Same-day appointments and walk-ins are welcomed. Call our emergency triage line now:
          </p>
        </div>
        <a
          href="tel:12549876777"
          className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-6 rounded-xl text-sm shadow transition-colors text-center shrink-0"
        >
          Call: (254) 987-6777
        </a>
      </div>

      <img
        src="/assets/images/banner-emergency.jpg"
        alt="Man in need of emergency dental relief in Copperas Cove"
        className="main-img"
      />

      <div className="why">
        <h2>Why Choose Cove Choice Dental for Emergency Care?</h2>
        <ul>
          <li><strong>Experienced Dental Team:</strong> Decades of clinical experience managing urgent trauma and infections.</li>
          <li><strong>Same-Day Priority Appointments:</strong> We leave room in our daily schedule for emergency patients.</li>
          <li><strong>$65 Limited Emergency Special:</strong> Includes emergency visual exam and diagnostic digital X-rays.</li>
          <li><strong>Medicaid, PPOs &amp; CareCredit® Accepted:</strong> Affordable payment options to relieve your pain without financial stress.</li>
        </ul>
      </div>

      <h2>How We Treat Dental Emergencies</h2>
      <p>
        <img
          src="/assets/images/emergency-1.jpg"
          alt="Emergency dental patient receiving treatment in Copperas Cove"
          className="elem-left"
        />
        The term &ldquo;dental emergency&rdquo; covers many urgent situations, from deep infections and abscesses to sudden sports injuries or fractured teeth. When you contact Cove Choice Dental with an emergency, here is our proven step-by-step approach:
      </p>

      <ul>
        <li>
          <strong>1. Immediate Phone Triage:</strong> We&apos;ll schedule your same-day visit immediately and provide step-by-step first-aid instructions over the phone to protect your tooth before you arrive.
        </li>
        <li>
          <strong>2. Rapid Pain Relief &amp; Diagnostic Exam:</strong> One of our experienced dentists will examine the tooth with low-radiation digital imaging and immediately administer gentle anesthetic to stop your pain.
        </li>
        <li>
          <strong>3. Transparent Treatment Plan:</strong> We will review our clinical findings, present your treatment options clearly, and provide upfront pricing before any procedure begins.
        </li>
        <li>
          <strong>4. Immediate Treatment:</strong> Whether your tooth requires root canal therapy, an emergency repair, temporary crown, or gentle extraction, we get to work right away to restore your oral health.
        </li>
      </ul>

      <h2>The Most Common Dental Emergencies We Treat</h2>
      <p>
        If you experience any of the following symptoms, do not hesitate to contact our Copperas Cove office immediately:
      </p>

      <div className="grid sm:grid-cols-2 gap-4 my-6">
        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
          <h3 className="text-base font-bold text-[#0b2545] m-0 mb-1 flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-500 shrink-0" /> Severe Toothaches
          </h3>
          <p className="text-xs text-slate-600 m-0">
            Persistent throbbing or sharp pain often signals deep decay or infection reaching the dental nerve.
          </p>
        </div>

        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
          <h3 className="text-base font-bold text-[#0b2545] m-0 mb-1 flex items-center gap-2">
            <Activity className="w-4 h-4 text-teal-600 shrink-0" /> Chipped or Cracked Teeth
          </h3>
          <p className="text-xs text-slate-600 m-0">
            Cracks expose inner pulp to harmful bacteria. Immediate bonding or dental crowns prevent structural tooth loss.
          </p>
        </div>

        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
          <h3 className="text-base font-bold text-[#0b2545] m-0 mb-1 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-rose-500 shrink-0" /> Knocked-Out Tooth
          </h3>
          <p className="text-xs text-slate-600 m-0">
            Keep the tooth moist in milk or saliva and reach our office within 1 hour for the highest chance of re-implantation.
          </p>
        </div>

        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
          <h3 className="text-base font-bold text-[#0b2545] m-0 mb-1 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-500 shrink-0" /> Lost Filling or Dental Crown
          </h3>
          <p className="text-xs text-slate-600 m-0">
            Exposed tooth structure can be extremely sensitive to hot or cold. We clean and securely re-cement your restoration.
          </p>
        </div>
      </div>

      <h2>Understanding the Cost of Emergency Dental Care</h2>
      <p>
        <img
          src="/assets/images/emergency-2.jpg"
          alt="Dental tools representing emergency dental cost"
          className="elem-left"
        />
        Visiting an emergency dentist does not have to be expensive. Many emergencies can be treated with minor restorations, while others may require root canal therapy or dental crowns.
      </p>
      <p>
        At Cove Choice Dental, we believe in 100% financial transparency. We provide cost estimates upfront before initiating care so there are never any unexpected surprises.
      </p>

      <ul>
        <li><strong>Dental Insurance Coverage:</strong> Most dental PPO policies cover emergency diagnostic exams at 80% to 100%, and procedures at 50% to 80%.</li>
        <li><strong>Medicaid &amp; CHIP:</strong> We gladly help eligible patients utilize their emergency dental benefits.</li>
        <li><strong>CareCredit® 0% Financing:</strong> Flexible monthly payment plans are available to spread out treatment costs.</li>
        <li><strong>$65 Emergency Special:</strong> For patients without insurance, take advantage of our $65 exam and X-ray special offer.</li>
      </ul>

      <h2>How to Prevent Dental Emergencies</h2>
      <p>
        <img
          src="/assets/images/emergency-3.jpg"
          alt="Smiling patient after pain relief"
          className="elem-left"
        />
        While accidents happen, the vast majority of dental emergencies stem from unchecked cavities or gum disease. Maintaining routine checkups every 6 months allows our team to detect micro-cavities before they turn into excruciating middle-of-the-night toothaches.
      </p>
      <p>
        Always wear a protective athletic mouthguard when playing contact sports, and avoid chewing on ice, popcorn kernels, or non-food objects.
      </p>

      {/* Final Emergency Action Box */}
      <div className="mt-10 bg-gradient-to-r from-[#0b2545] to-[#134074] text-white p-8 rounded-3xl text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Need Immediate Dental Relief in Copperas Cove?</h3>
        <p className="text-slate-200 text-sm max-w-xl mx-auto mb-6">
          Call Cove Choice Dental right away. Our team will get you into a dental chair promptly and relieve your pain.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:12549876777"
            className="bg-white hover:bg-slate-100 text-[#0b2545] font-bold py-3.5 px-8 rounded-xl text-base shadow transition-all"
          >
            Call: (254) 987-6777
          </a>
          <Link
            href="/request-an-appointment"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-3.5 px-6 rounded-xl text-sm transition-all"
          >
            Request Appointment Online
          </Link>
        </div>
      </div>
    </ServicePageLayout>
  );
}
