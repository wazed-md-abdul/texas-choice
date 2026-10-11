import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Meet Our Copperas Cove, TX Dentist, Sileshi Assemu, DDS | Cove Choice Dental",
  description: "Meet our Copperas Cove, TX dentist, Sileshi Assemu, DDS. At Cove Choice Dental, Dr. Assemu partners with dentistry patients to help them achieve and maintain their healthiest smiles.",
};

export default function DrAssemuPagePage() {
  const contentHtml = "\n<p>\n\tDr. Assemu joined our dental office in 2019, and he brings over a decade of dental experience to our team. As one of our talented dentists here at Cove Choice Dental, he strives to go the extra mile for each patient to help them achieve their goals while enjoying a comfortable, personalized experience along the way. He looks forward to welcoming you into our dental office, and you can learn more about him below!</p>\n<div class=\"text-center\" style=\"margin: 60px auto;\">\n\t<h2>\n\t\tWhy Did You Decide to Become a Dentist?</h2>\n\t<p>\n\t\tDr. Assemu went through multiple episodes of severe dental pain when he was younger, and, already interested in working in the medical field, these experiences caused him to consider dentistry in particular. All these years later, he&rsquo;s extremely satisfied with his chosen career, and he says it&rsquo;s extremely fulfilling to help patients like himself get out of pain and avoid more problems in the future. He also likes that the profession allows him to spend plenty of time with his family.</p>\n\t<p>\n\t\t<img alt=\"Dentist talking to laughing woman in dental chair\" src=\"/assets/images/dr-assemu-2.jpg\" /></p>\n</div>\n<div class=\"page-divider\">\n\t<h2>\n\t\tWhere Did You Study Dentistry?</h2>\n\t<p>\n\t\t<img alt=\"Outside view of dental school building\" class=\"elem-left\" src=\"/assets/images/dr-assemu-3.jpg\" /></p>\n\t<p>\n\t\tDr. Assemu began his college career at Tennessee State University, and he eventually earned his dental degree from the University of Tennessee in Memphis. Over the years, he has rigorously pursued continuing education in order to stay on top of the latest techniques and technology in oral healthcare.</p>\n\t<h2>\n\t\tOutside of the Dental Office, What Do You Like to Do?</h2>\n<!--<div class=\"elem-left meet-grid\">\n\t\t<img alt=\"\" src=\"/assets/images/dr-assemu-4.jpg\" /> <img alt=\"\" src=\"/assets/images/dr-assemu-5.jpg\" /> <img alt=\"\" src=\"/assets/images/dr-assemu-6.jpg\" /></div>\n\t<p>\n\t\tDr. Assemu comes to us all the way from Ethiopia, and after arriving in the United States without being able to speak or understand English, he&rsquo;s proud to say that he now feels right at home and can easily communicate with friends and patients alike. He, his wife, and their three boys currently live in Cedar Park, and when he isn&rsquo;t at the dental office, Dr. Assemu likes to spend his free time hiking, biking, and playing soccer.&nbsp;</p>--></div>\n<div class=\"more-to-explore\">\n\t<span>More to Explore</span>\n\t<p>\n\t\t<a class=\"btn\" href=\"/about-us\">About Us</a> <a class=\"btn\" href=\"/meet-the-dentists\">Meet the Dentists</a> <a class=\"btn\" href=\"/meet-the-team\">Meet the Team</a> <a class=\"btn\" href=\"/tour-our-office\">Tour Our Dental Office</a> <!--<a class=\"btn\" href=\"/smile-gallery\">Smile Gallery</a>--><a class=\"btn\" href=\"/advanced-safety-protocol\">Advanced Safety Protocol</a> <a class=\"btn\" href=\"/advanced-dental-technology\">Advanced Dental Technology</a> <a class=\"btn-alt\" href=\"/dental-services\">View Our Services</a></p>\n</div>\n    ";

  return (
    <>
      <PageBanner
        title={"Skilled Copperas Cove, TX Dentist"}
        subtitle={"Get to Know Dr. Sileshi Assemu"}
        description={"<img alt=\"Copperas Cove Texas dentist Sileshi Assemu D D S\" class=\"main-img\" src=\"assets/images/dr-assemu-1.jpg\" />"}
      />
      <main className="wrapper">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </main>
    </>
  );
}
