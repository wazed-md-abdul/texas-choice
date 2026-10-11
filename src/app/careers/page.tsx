import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Careers at Cove Choice Dental",
  description: "Explore careers at Cove Choice Dental and join our dental team and skilled dentist in Copperas Cove, TX, offering exceptional dentistry services for residents of Copperas Cove and nearby communities.",
};

export default function CareersPagePage() {
  const contentHtml = "\n<div class=\"page-divider\">\n\t<h2>\n\t\tOur Benefits</h2>\n\t<p>\n\t\t<img alt=\"Three dentists reviewing dental patient chart\" class=\"elem-left\" src=\"/assets/images/careers-1.jpg\" /></p>\n\t<p>\n\t\tLooking for advantages beyond the paycheck? Below are just a few of the benefits we offer:</p>\n\t<ul>\n\t\t<li>\n\t\t\tFull Medical, Dental, &amp; Optical insurance</li>\n\t\t<li>\n\t\t\tCompany Holiday party</li>\n\t\t<li>\n\t\t\tPaid holidays</li>\n\t\t<li>\n\t\t\tVacation pay</li>\n\t</ul>\n\t<h2>\n\t\tOur Open Positions</h2>\n\t<p>\n\t\t<img alt=\"Three smiling dental team members\" class=\"elem-left\" src=\"/assets/images/careers-2.jpg\" /></p>\n\t<p>\n\t\tWe&#39;re always open to welcoming another stellar team member to our staff. Below are some of the openings we have. If you think you&#39;d be a great fit, we look forward to hearing from you!</p>\n\t<ul>\n\t\t<li>\n\t\t\tFront Desk Receptionist</li>\n\t\t<li>\n\t\t\tDental Assistant</li>\n\t\t<li>\n\t\t\tGeneral Dentist</li>\n\t</ul>\n\t<h2>\n\t\tApply Now</h2>\n\t<p>\n\t\tIf you&#39;re ready to apply, simply click the button below where you will be able to submit your contact details and a resume!</p>\n\t<p style=\"text-align: center;\">\n\t\t<a class=\"btn\" href=\"https://forms.gle/DjqgUunnsNb4QvvV6\" target=\"_blank\">Apply Now</a> <!--<p>\n\t\t<iframe frameborder=\"0\" height=\"520\" marginheight=\"0\" marginwidth=\"0\" src=\"https://docs.google.com/forms/d/e/1FAIpQLSeHQUJV-We8W7gfskieebLKqElAczqenDJkojIFqz0CLE7dBw/viewform?embedded=true\" width=\"700\">Loading&hellip;</iframe></p></div>--></p>\n</div>\n    ";

  return (
    <>
      <PageBanner
        title={"Careers - Copperas Cove, TX"}
        subtitle={"Interested in Joining<br /> Our Dental Team?"}
        description={"We&rsquo;ve had the honor of working alongside many talented individuals over the years, and we&rsquo;d be pleased to know that we helped you take a large step forward in your own dental career. Are you interested in applying for a position at our dental office? We invite you to go over the available openings and reach out to us with the necessary documents and information; we can&rsquo;t wait to meet you and find out what you can bring to our team."}
      />
      <main className="wrapper">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </main>
    </>
  );
}
