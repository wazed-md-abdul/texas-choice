import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dental Blog | Cove Choice Dental | Copperas Cove, TX",
  description: "Read helpful dental tips, news, and insights from our experienced team at Cove Choice Dental in Copperas Cove, TX.",
};

export default function BlogPage() {
  return (
    <>
      <PageBanner
        title="Dental Health Blog"
        subtitle="Insights, Tips, and Education"
        description="Stay up to date with the latest dental health tips, treatments, and advice from our dental team."
      />
      <main className="wrapper" style={{ padding: "40px 15px", maxWidth: "1000px" }}>
        <h2>Welcome to Our Dental Blog</h2>
        <p style={{ marginTop: "20px", fontSize: "18px", lineHeight: "1.7" }}>
          Welcome to the Cove Choice Dental blog! Here you will find valuable information regarding preventive oral hygiene, restorative dentistry, cosmetic smile transformations, and modern technologies.
        </p>
        <div style={{ marginTop: "40px", display: "grid", gap: "25px", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          <div style={{ background: "#fff", padding: "25px", border: "1px solid #e2e8f0", borderRadius: "8px" }}>
            <h3 style={{ color: "#204369", fontSize: "22px" }}>5 Tips for Healthier Teeth</h3>
            <p style={{ margin: "15px 0", color: "#4a5568" }}>Discover simple daily habits you can incorporate to maintain a cleaner, brighter smile between cleanings.</p>
            <Link href="/preventive-dentistry" className="btn btn-small" style={{ display: "inline-block" }}>Learn More</Link>
          </div>
          <div style={{ background: "#fff", padding: "25px", border: "1px solid #e2e8f0", borderRadius: "8px" }}>
            <h3 style={{ color: "#204369", fontSize: "22px" }}>Understanding Dental Implants</h3>
            <p style={{ margin: "15px 0", color: "#4a5568" }}>How modern dental implants provide the most natural, permanent solution for missing teeth.</p>
            <Link href="/dental-implants" className="btn btn-small" style={{ display: "inline-block" }}>Learn More</Link>
          </div>
          <div style={{ background: "#fff", padding: "25px", border: "1px solid #e2e8f0", borderRadius: "8px" }}>
            <h3 style={{ color: "#204369", fontSize: "22px" }}>Dental Emergencies: What to Do</h3>
            <p style={{ margin: "15px 0", color: "#4a5568" }}>Steps to take immediately when experiencing acute tooth pain or a broken tooth in Copperas Cove.</p>
            <Link href="/emergency-dentistry" className="btn btn-small" style={{ display: "inline-block" }}>Learn More</Link>
          </div>
        </div>
      </main>
    </>
  );
}
