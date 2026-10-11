import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Meet Copperas Cove, TX Dentist Dr. Simrat Sehmi | Texas Choice Dental",
  description: "Dr. Simrat Sehmi is eager to help you and your loved ones feel right at home here at Texas Choice Dental.",
};

export default function DrSimratSehmiPagePage() {
  const contentHtml = "\n<p>According to Dr. Sehmi, being a dentist is all about developing a meaningful relationship with each patient, making them feel comfortable, and giving them a smile that looks and feels great. She hopes to make your trips to the dentist as easy as possible and ensure you always walk out of our office feeling satisfied. Before you meet her in person, you can learn more about Dr. Sehmi below.</p>\n<div class=\"text-center\" style=\"margin: 60px auto;\">\n<h2>Why Did You Decide to Become a Dentist?</h2>\n<p>Dr. Sehmi learned about the importance of someone&rsquo;s smile from a very early age. It was the first thing she noticed about people, and as a shy child, someone smiling gave her a lot of comfort and confidence to open up. This interest eventually turned into her passion, and she decided to focus her career on spreading the magic and power of healing of smiles by becoming a dentist.</p>\n</div>\n<div class=\"page-divider\">\n<h2>Where Did You Study Dentistry?</h2>\n<p><img alt=\"\" class=\"elem-left\" src=\"/assets/images/dr-sehmi-bio-2.jpg\"/></p>\n<p>Dr. Sehmi attended Virginia Commonwealth University and ultimately earned her dental degree from the VCU School of Dentistry. Since then, she has consistently taken classes to better herself and make sure she&rsquo;s up to date on the latest techniques and technology. To date, she has completed advanced training for Invisalign, dental implant dentistry, and full arch reconstructions.</p>\n<p>She is also an active member of the Texas Dental Association and Academy of Laser Dentistry.</p>\n<h2>Outside of the Dental Office, What Do You Like to Do?</h2>\n<p><img alt=\"\" class=\"elem-left\" src=\"/assets/images/dr-sehmi-bio-3.jpg\"/></p>\n<p>A former competitive swimmer and Indian classical dancer, Dr. Sehmi is happily married and likes to spend her free time hiking and exploring new restaurants around Austin. Back indoors, she also loves to cook and bake&mdash;be sure to ask her about the last thing she made when you see her! On lazy days, you&rsquo;ll usually find her relaxing with her tuxedo cat, Ziggy.</p>\n</div>\n<div class=\"more-to-explore\">\n\t<span>More to Explore</span>\n\t<p>\n\t\t<a class=\"btn\" href=\"/about-us\">About Us</a> <a class=\"btn\" href=\"/meet-the-dentists\">Meet the Dentists</a> <a class=\"btn\" href=\"/meet-the-team\">Meet the Team</a> <a class=\"btn\" href=\"/tour-our-office\">Tour Our Dental Office</a> <!--<a class=\"btn\" href=\"/smile-gallery\">Smile Gallery</a>--><a class=\"btn\" href=\"/advanced-safety-protocol\">Advanced Safety Protocol</a> <a class=\"btn\" href=\"/advanced-dental-technology\">Advanced Dental Technology</a> <a class=\"btn-alt\" href=\"/dental-services\">View Our Services</a></p>\n</div>\n    ";

  return (
    <>
      <PageBanner
        title={"Experienced Copperas Cove, TX Dentist"}
        subtitle={"Get to Know Dr. Simrat Sehmi"}
        description={"<img alt=\"\" class=\"main-img\" src=\"assets/images/dr-sehmi-bio-1.png\"/>"}
      />
      <main className="wrapper">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </main>
    </>
  );
}
