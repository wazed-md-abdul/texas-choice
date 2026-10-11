import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Meet Our Copperas Cove, TX Dentist, Daood Alvi, DDS | Cove Choice Dental",
  description: "Meet our Copperas Cove, TX dentist, Daood Alvi, DDS. At Cove Choice Dental, Dr. Alvi partners with dentistry patients to help them achieve and maintain their healthiest, happiest smiles.",
};

export default function DrDaoodAlviPagePage() {
  const contentHtml = "\n<p>\n\tDr. Alvi has over 10 years of dental experience, and throughout his entire career, he has made developing trusting relationships with his patients his top priority. With him, you can look forward to individualized care that not only leads to improved oral health, but a better quality of life as well. Before you come to see us here at Cove Choice Dental, you can learn more about him below.</p>\n<div class=\"text-center\" style=\"margin: 60px auto;\">\n\t<h2>\n\t\tWhy Did You Decide to Become a Dentist?</h2>\n\t<p>\n\t\tDr. Alvi was interested in working in healthcare from a very young age, and after graduating from college, he decided that he wanted to have a job that would give him the opportunity to use his hands to fix things on a daily basis. This led him to shadow a dentist for a couple of weeks to learn more about the profession, and he eventually decided it would be the perfect fit for him.</p>\n\t<p>\n\t\t<img alt=\"Woman in dental chair smiling at dentist\" src=\"/assets/images/dr-alvi-2.jpg\" /></p>\n</div>\n<div class=\"page-divider\">\n\t<h2>\n\t\tWhere Did You Study Dentistry?</h2>\n\t<p>\n\t\t<img alt=\"University of Minnesota dental school logo\" class=\"elem-left\" src=\"/assets/images/dr-alvi-3.jpg\" /></p>\n\t<p>\n\t\tDr. Alvi earned a bachelor&rsquo;s degree in Biomedical Engineering as well as his dental degree at the University of Minnesota. Today, he frequently completes continuing education to refine and grow his clinical skills, including courses covering endodontics (root canals), dental implant restorations, children&rsquo;s dentistry, and cosmetic dentistry. </p>\n\t<h2>\n\t\tOutside of the Dental Office, What Do You Like to Do?</h2>\n<!--<div class=\"elem-left meet-grid\">\n\t\t<img alt=\"\" src=\"/assets/images/dr-alvi-4.jpg\" /> <img alt=\"\" src=\"/assets/images/dr-alvi-5.jpg\" /> <img alt=\"\" src=\"/assets/images/dr-alvi-6.jpg\" /></div>-->\t<p>\n\t\tDr. Alvi and his wonderful wife, Ayesha, stay very busy at home thanks to their two boisterous boys. When not helping patients, he likes to stay active by running and cycling. On the flip side, he also has a passion for baking desserts&mdash;his attention to detail and creativity can be seen in the various treats he creates just like his dentistry.</p>\n</div>\n<div class=\"more-to-explore\">\n\t<span>More to Explore</span>\n\t<p>\n\t\t<a class=\"btn\" href=\"/about-us\">About Us</a> <a class=\"btn\" href=\"/meet-the-dentists\">Meet the Dentists</a> <a class=\"btn\" href=\"/meet-the-team\">Meet the Team</a> <a class=\"btn\" href=\"/tour-our-office\">Tour Our Dental Office</a> <!--<a class=\"btn\" href=\"/smile-gallery\">Smile Gallery</a>--><a class=\"btn\" href=\"/advanced-safety-protocol\">Advanced Safety Protocol</a> <a class=\"btn\" href=\"/advanced-dental-technology\">Advanced Dental Technology</a> <a class=\"btn-alt\" href=\"/dental-services\">View Our Services</a></p>\n</div>\n    ";

  return (
    <>
      <PageBanner
        title={"Trusted Copperas Cove, TX Dentist"}
        subtitle={"Get to Know Dr. Daood Alvi"}
        description={"<img alt=\"Copperas Cove Texas dentist Daood Alvi D D S\" class=\"main-img\" src=\"assets/images/dr-alvi-1.jpg\" />"}
      />
      <main className="wrapper">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </main>
    </>
  );
}
