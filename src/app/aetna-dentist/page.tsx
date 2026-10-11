import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Aetna Dentist Copperas Cove | In-Network Aetna Dentist | Cove Choice Dental",
  description: "Our Copperas Cove dental practice is proud to be in-network with Aetna insurance. Learn how we can help you maximize your benefits.",
};

export default function AetnaDentistPagePage() {
  const contentHtml = "\n<div class=\"page-divider\">\n<h2>Aetna Coverage Availability &amp; Fees</h2>\n<p><img alt=\"Smiling patient in dental treatment chair\" class=\"elem-left\" src=\"/assets/images/aetna-1.jpg\"/></p>\n<p>Aetna offers a few different dental plans, each of which has its own set of fees, coverage levels, and stipulations. We recommend that you set aside a bit of time to get to know the ins and outs of your unique policy. In the meantime, here is a bit of general information about the coverage that might be available with Aetna PPO plans:</p>\n<ul>\n<li><strong>Preventive care, </strong>often including exams, cleanings, and X-rays, may be up to 100% covered.</li>\n<li><strong>Basic services, </strong>such as fillings, are typically around 80% covered.</li>\n<li><strong>Major services, </strong>like crowns and dentures, might be around 50% covered.</li>\n</ul>\n<p>Keep in mind that not all plans cover all services, and you may have to account for a deductible, waiting periods, and your annual maximum when you are trying to calculate out-of-pocket costs. Our team would be happy to help you with this.</p>\n<p>Plus, since we are in-network with Aetna, we have a contract that manages fees. That means you may be able to get more out of your annual maximum (yearly benefits limit) than you would when visiting an out-of-network practice. In some cases, we can even schedule major treatments across calendar years, which could enable you to use two annual maximums instead of just one.</p>\n<h2>Meet Our Team</h2>\n<p><img alt=\"Dental team member assisting patient at front desk\" class=\"elem-left\" src=\"/assets/images/aetna-2.jpg\"/></p>\n<p>At Cove Choice Dental, our team is committed to helping you get the most out of your Aetna insurance plan. We will be happy to assist you with:</p>\n<ul>\n<li>Verifying your benefits and understanding how they apply to different treatments.</li>\n<li>Acquiring preauthorization when necessary.</li>\n<li>Filing your claims in a timely manner.</li>\n<li>Following-up with Aetna to make sure you get the benefits that your plan entitles you to.</li>\n</ul>\n<p>We have lots of experience in navigating the ins and outs of insurance, and we want to put our expertise to work for you! To learn more about how we may be able to serve you, <a href=\"/contact\">contact our office</a> today.</p>\n</div>\n    ";

  return (
    <>
      <PageBanner
        title={"Aetna Dentist Copperas Cove"}
        subtitle={"Learn More About the Benefits of Aetna"}
        description={"If you have a <a href=\"dental-insurance.html\">dental insurance</a> plan from Aetna, you can view it as a precious asset. It can grant you access to low-cost preventive services, <em>and </em>it may reduce the financial strain of those times when your teeth need a bit of restorative treatment. But how can you get the greatest value out of your plan? As an in-network Aetna dentist in Copperas Cove, our team is ready and eager to assist you. Continue reading below to learn more about how we can do so."}
      />
      <main className="wrapper">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </main>
    </>
  );
}
