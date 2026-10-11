import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "All-on-4 Copperas Cove | Cove Choice Dental",
  description: "Replace an entire row of teeth with just four well-placed dental implants thanks to All-on-4 from the team at Cove Choice Dental.",
};

export default function AllOn4PagePage() {
  const contentHtml = "\n<div class=\"why\">\n<h2>Why Choose Cove Choice Dental for All-on-4?</h2>\n<ul>\n<li>Dental Implants Placed In-Office</li>\n<li>Expertly Personalized Replacement Teeth</li>\n<li>Saturday Appointment Times Available</li>\n</ul>\n</div>\n<div class=\"page-divider\">\n<h2>How Do All-on-4 Implants Work?</h2>\n<p><img alt=\"Illustration of All-on-4 in Copperas Cove, TX for upper arch\" class=\"elem-left\" src=\"/assets/images/all-4-1.jpg\"/><p>\n<p>The All-on-4 procedure involves surgically placing four dental implants into your jawbone so that they can act as the foundation for a personalized denture. The key to the treatment is to let the dental implants fuse with the parts of the jaw where the bone is the thickest. To that end, each post will be inserted at very specific angles in carefully chosen parts of the jaw.</p>\n<h2>Am I a Candidate for All-on-4 Implants?</h2>\n<p><img alt=\"Senior man leaning back in chair and smiling up at dentist\" class=\"elem-left\" src=\"/assets/images/all-4-2.jpg\"/><p>\n<p>All-on-4 is recommended for patients who are missing an entire arch of teeth. However, before you can get dental implants, our team will need to make sure that your mouth is healthy. We&rsquo;ll check for signs of gum disease and other oral health issues that will need to be treated before beginning the All-on-4 process.</p>\n<p>Note that if you have experienced bone loss in your jaw, you could still be a candidate for All-on-4 even without bone grafting. The way the dental implants are placed means less bone density is required.</p>\n<h2>Benefits of All-on-4 Implants</h2>\n<p><img alt=\"Woman standing outside and showing off smile\" class=\"elem-left\" src=\"/assets/images/all-4-3.jpg\"/><p>\n<p>One advantage of the All-on-4 procedure is that your replacement teeth will be anchored in place at all times. Not only does this prevent them from slipping out of place at awkward moments, but it also lets you brush and floss them as if they were your real teeth.</p>\n<p>Furthermore, the implant posts themselves will provide enough bite force to let you enjoy all kinds of foods without issue. On top of that, the stimulation from the implant posts makes them the only form of tooth replacement that can actively help prevent bone loss in the jaw.</p>\n<h2>All-On-4 vs. Traditional Implants</h2>\n<p><img alt=\"Illustration of dentures being attached to All-on-4 dental implants\" class=\"elem-left\" src=\"/assets/images/all-4-4.jpg\"/><p>\n<p>What makes All-on-4 different from traditional dental implant placement? For one thing, All-on-4 lets our team replace an entire row of teeth with fewer posts. With traditional dental implants, as many as eight posts might be needed to support a full denture.</p>\n<p>Additionally, All-on-4 can often be performed without bone grafting, resulting in a shorter treatment plan. And when it comes to receiving new teeth, All-on-4 often makes it possible to have a denture placed on the same day that the implant posts are surgically inserted into your jaw.</p>\n</div>\n    ";

  return (
    <>
      <PageBanner
        title={"All-on-4 &ndash; Copperas Cove, TX"}
        subtitle={"Replacing an Entire Row of Teeth at Once"}
        description={"How can you replace an entire row of teeth with <a href=\"dental-implants.html\">dental implants</a>? Some patients mistakenly believe that they&rsquo;ll need to get a separate implant post for each tooth that they lost. But with All-on-4 from Cove Choice Dental, the entire arch can be rebuilt with just four dental implant posts that have been inserted into precisely the right spots in the jaw. Give us a <a href=\"contact.html\">call</a> today if you would like to learn more about All-on-4 and how it could help you enjoy a complete smile again."}
      />
      <main className="wrapper">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </main>
    </>
  );
}
