import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Dental Blog & Patient Education | Cove Choice Dental Copperas Cove, TX",
  description:
    "Explore clinical dental guides, cavity prevention tips, dental implant advice, and cosmetic smile solutions from our doctors at Cove Choice Dental in Copperas Cove, TX.",
  openGraph: {
    title: "Dental Blog & Patient Education | Cove Choice Dental",
    description:
      "Expert oral healthcare advice, preventive tips, restorative guidance, and pediatric education from our team in Copperas Cove, TX.",
    url: "https://covechoicedental.com/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <PageBanner
        title="Dental Health Blog & Guides"
        subtitle="Clinical Insights & Oral Wellness"
        description="Expert oral health advice, cosmetic smile transformations, and restorative treatment guides from our experienced dentists in Copperas Cove, TX."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <main>
        <BlogClient />
      </main>
    </>
  );
}
