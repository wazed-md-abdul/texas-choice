import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import AppointmentSection from "@/components/AppointmentSection";

export const metadata: Metadata = {
  title: "Request a Dental Appointment | Cove Choice Dental | Copperas Cove, TX",
  description:
    "Request an appointment at Cove Choice Dental in Copperas Cove, TX. Convenient scheduling, same-day emergency visits, and new patient specials available.",
};

export default function RequestAnAppointmentPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageBanner
        title="Request a Dental Appointment"
        subtitle="Copperas Cove, TX • Easy Online Scheduling"
        description="Scheduling your visit with our compassionate dental team is simple. Fill out our online request form or call our office directly at (254) 987-6777 for same-day assistance."
        bgImage="/assets/images/banner-services.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Request an Appointment" },
        ]}
      />

      {/* Interactive Appointment Component */}
      <AppointmentSection />
    </main>
  );
}
