import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Meet Our Copperas Cove, TX Dentist, Shruti Sharma, DDS | Cove Choice Dental",
  description: "Meet our Copperas Cove, TX dentist, Shruti Sharma, DDS. At Cove Choice Dental, Dr. Sharma partners with dentistry patients to help them achieve and maintain their healthiest smiles.",
};

export default function DrSharmaPagePage() {
  const contentHtml = "\n<p>\n\tEvery single day, Dr. Sharma is filled with a sense of deep satisfaction after seeing smiles on her patients&rsquo; faces. She is dedicated to building connections with her patients and taking the time to understand their needs. While she understands that patients can learn a lot from her, she relishes all opportunities to learn from her patients as well, so she&rsquo;s always ready to listen. You can learn more about Dr. Sharma and her background below.</p>\n<div class=\"text-center\" style=\"margin: 60px auto;\">\n\t<h2>\n\t\tWhy Did You Decide to Become a Dentist?</h2>\n\t<p>\n\t\tComing from a family of doctors (her father and sister practice internal medicine, and her mother is a radiologist), Dr. Sharma always knew she wanted to be in the medical profession. After shadowing multiple doctors and dentists, she decided that dentistry would give her the best opportunity to help and serve her community. She&rsquo;s proud to say that she considers it her true calling.</p>\n\t<p>\n\t\t<img alt=\"Dentist talking to man in dental chair\" src=\"/assets/images/dr-sharma-2.jpg\" /></p>\n</div>\n<div class=\"page-divider\">\n\t<h2>\n\t\tWhere Did You Study Dentistry?</h2>\n\t<p>\n\t\t<img alt=\"Interior of a dental school building\" class=\"elem-left\" src=\"/assets/images/dr-sharma-3.jpg\" /></p>\n\t<p>\n\t\tDr. Sharma earned her Bachelor of Dental Surgery degree at&nbsp;Himachal Dental College in India and her Doctorate of Dental Surgery degree at the&nbsp;University at Buffalo School of Dental Medicine&nbsp;in Buffalo, New York. These days, Dr. Sharma keeps up with the current trends and advancements in dentistry by regularly completing continuing education. Through her affiliations with the American Dental Association and Texas Dental Association, she routinely undergoes training in various fields of dentistry, particularly cosmetic dentistry and endodontics.</p>\n\t<h2>\n\t\tOutside of the Dental Office, What Do You Like to Do?</h2>\n<!--<div class=\"elem-left meet-grid\">\n\t\t<img alt=\"\" src=\"/assets/images/dr-sharma-4.jpg\" /> <img alt=\"\" src=\"/assets/images/dr-sharma-5.jpg\" /> <img alt=\"\" src=\"/assets/images/dr-sharma-6.jpg\" /></div>-->\t<p>\n\t\tDr. Sharma lives in Round Rock with her husband, an engineer, and a toddler boy who keeps her on her toes at all times. When she is not working, she loves spending time with her family and enjoys going for long drives, watching movies, trying new foods, and listening to music. Passionate about cooking, Dr. Sharma is often in the kitchen creating new dishes.</p>\n</div>\n<div class=\"more-to-explore\">\n\t<span>More to Explore</span>\n\t<p>\n\t\t<a class=\"btn\" href=\"/about-us\">About Us</a> <a class=\"btn\" href=\"/meet-the-dentists\">Meet the Dentists</a> <a class=\"btn\" href=\"/meet-the-team\">Meet the Team</a> <a class=\"btn\" href=\"/tour-our-office\">Tour Our Dental Office</a> <!--<a class=\"btn\" href=\"/smile-gallery\">Smile Gallery</a>--><a class=\"btn\" href=\"/advanced-safety-protocol\">Advanced Safety Protocol</a> <a class=\"btn\" href=\"/advanced-dental-technology\">Advanced Dental Technology</a> <a class=\"btn-alt\" href=\"/dental-services\">View Our Services</a></p>\n</div>\n    ";

  return (
    <>
      <PageBanner
        title={"Caring Copperas Cove, TX Dentist"}
        subtitle={"Get to Know Dr. Shruti Sharma"}
        description={"<img alt=\"Copperas Cove Texas Shruti Sharma D D S\" class=\"main-img\" src=\"assets/images/dr-sharma-1.jpg\" />"}
      />
      <main className="wrapper">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </main>
    </>
  );
}
