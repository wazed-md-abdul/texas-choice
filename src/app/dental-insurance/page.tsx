import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Dental Insurance Copperas Cove, TX | In-Network PPO & Medicaid Dentist",
  description:
    "Maximize your dental insurance benefits at Cove Choice Dental in Copperas Cove, TX. In-network with Delta Dental, Aetna, Humana, United Concordia, Medicaid, and CHIP.",
};

const providers = [
  { name: "Delta Dental", href: "/delta-dental-dentist" },
  { name: "Aetna", href: "/aetna-dentist" },
  { name: "Humana", href: "/humana-dentist" },
  { name: "United Concordia", href: "/united-concordia-dentist" },
  { name: "United Healthcare", href: "/united-healthcare" },
  { name: "Medicaid & CHIP", href: "/medicaid-and-chip" },
  { name: "Blue Cross Blue Shield", href: "/contact" },
  { name: "Cigna", href: "/contact" },
  { name: "MetLife", href: "/contact" },
  { name: "Ameritas", href: "/contact" },
  { name: "Guardian", href: "/contact" },
  { name: "CareCredit® Financing", href: "/for-patients" },
];

export default function DentalInsurancePage() {
  return (
    <ServicePageLayout
      title="Dental Insurance &amp; Coverage"
      subtitle="In-Network Maximization • Medicaid &amp; CHIP Accepted"
      description="We believe finances should never keep you from having a healthy smile. Cove Choice Dental is in-network with many major PPO providers and happily files claims on your behalf."
      bgImage="/assets/images/banner-services.jpg"
      breadcrumbLabel="Dental Insurance"
      specialOffer={{
        title: "No Insurance? No Problem!",
        price: "$100",
        notes: "$100 New Patient Exam & X-Rays Special",
        href: "/offers-promotions",
      }}
    >
      <div className="why">
        <h2>How We Maximize Your Dental Insurance</h2>
        <ul>
          <li><strong>Direct Insurance Billing:</strong> We file and track all paperwork directly with your carrier.</li>
          <li><strong>In-Network Savings:</strong> Pre-negotiated fee discounts ensure the lowest possible out-of-pocket costs.</li>
          <li><strong>Transparent Benefit Estimates:</strong> We verify your coverage and explain your copays before treatment begins.</li>
          <li><strong>Medicaid &amp; CHIP Friendly:</strong> Dedicated support for eligible children and adult Medicaid recipients.</li>
        </ul>
      </div>

      <h2>Understanding How Dental Insurance Works</h2>
      <p>
        <img
          src="/assets/images/insurance-1.jpg"
          alt="Hands holding dental tooth under an umbrella representing dental insurance"
          className="elem-left"
        />
        Dental insurance is designed to emphasize prevention. By encouraging routine cleanings and diagnostics twice a year, your insurer helps you catch minor dental concerns before they require costly, complex procedures.
      </p>

      <div className="grid sm:grid-cols-3 gap-4 my-6">
        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center">
          <span className="text-2xl font-black text-[#204369] block mb-1">100%</span>
          <h4 className="font-bold text-sm text-[#0b2545] mb-1">Preventive Care</h4>
          <p className="text-xs text-slate-600">Biannual checkups, cleanings, and diagnostic X-rays typically covered completely.</p>
        </div>

        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center">
          <span className="text-2xl font-black text-[#204369] block mb-1">70% – 80%</span>
          <h4 className="font-bold text-sm text-[#0b2545] mb-1">Basic Restorative</h4>
          <p className="text-xs text-slate-600">Tooth-colored fillings, basic extractions, and periodontal cleanings.</p>
        </div>

        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center">
          <span className="text-2xl font-black text-[#204369] block mb-1">50%</span>
          <h4 className="font-bold text-sm text-[#0b2545] mb-1">Major Services</h4>
          <p className="text-xs text-slate-600">Porcelain dental crowns, bridges, dentures, and root canals.</p>
        </div>
      </div>

      <h2>In-Network Dental Plans We Accept</h2>
      <p>
        <img
          src="/assets/images/insurance-3.jpg"
          alt="Patient checking in at Cove Choice Dental reception desk"
          className="elem-left"
        />
        Being in-network with an insurance company means we have contractually agreed to pre-discounted fees, maximizing the money saved on your dental treatment.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6">
        {providers.map((p) => (
          <Link
            key={p.name}
            href={p.href}
            className="p-3 bg-slate-50 hover:bg-[#0b2545] text-slate-800 hover:text-white rounded-xl border border-slate-200 text-xs font-bold transition-all flex items-center justify-between group"
          >
            <span>{p.name}</span>
            <Check className="w-4 h-4 text-[#204369] group-hover:text-white transition-colors" />
          </Link>
        ))}
      </div>

      <div className="bg-amber-50 border border-amber-200 p-5 rounded-2xl my-6">
        <h4 className="text-amber-900 font-bold text-sm mb-1">Don&apos;t See Your Insurance Provider?</h4>
        <p className="text-xs text-amber-800 leading-relaxed">
          We accept and file claims for almost all PPO dental plans even if out-of-network! Call our financial coordinator at{" "}
          <a href="tel:12549876777" className="font-bold underline">
            (254) 987-6777
          </a>{" "}
          and we will gladly look up your benefits right over the phone.
        </p>
      </div>
    </ServicePageLayout>
  );
}
