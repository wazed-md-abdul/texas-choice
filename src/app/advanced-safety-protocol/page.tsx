import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import SafetyProtocolsClient from "./SafetyProtocolsClient";

export const metadata: Metadata = {
  title: "COVID-19 Dental Office Safety Protocol | Cove Choice Dental",
  description:
    "Explore our comprehensive COVID-19 dental office safety protocol. Learn how the Cove Choice Dental team in Copperas Cove, TX keeps patients safe with hospital-grade sanitization, PPE, and distancing.",
};

export default function AdvancedSafetyProtocolPage() {
  return (
    <>
      <PageBanner
        title={"COVID-19 Dental Office Safety Protocol – Copperas Cove, TX"}
        subtitle={"Our Commitment to Your Health & Protection"}
        description={
          "Nothing matters more to us than the health and safety of our patients. To protect both you and our clinical team, we have implemented 23 rigorous safety measures across our dental office. If you have questions about how we make your visit a safe experience, our team is always here for you."
        }
      />
      <main>
        <SafetyProtocolsClient />
      </main>
    </>
  );
}
