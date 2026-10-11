import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Dental Implant Failure & Salvage, Copperas Cove | Implant Dentist | Cove Choice Dental",
  description: "Do you have any concerns about your dental implant? At Cove Choice Dental, we can help with dental implant salvage treatment!",
};

export default function DentalImplantFailureAndSalvagePagePage() {
  const contentHtml = "\n<div class=\"page-divider\">\n<h2>Why Do Dental Implants Fail?</h2>\n<p><img alt=\"Closeup of a dental implant\" class=\"elem-left\" src=\"/assets/images/salvage-1.jpg\"/><p>\n<p>The most common reason behind dental implant failure is an infection called &ldquo;peri-implantitis.&rdquo; This is an infection that develops when harmful bacteria destroy the connective tissue resent around the dental implant, weakening the surrounding jaw structure. Most of the time, this happens due to poor dental hygiene and untreated gum disease. Some other causes of failure include trauma, failed osseointegration, and medical conditions, like uncontrolled diabetes and osteoporosis.</p>\n<h2>The Symptoms of Failed Dental Implants</h2>\n<p><img alt=\"Woman with tooth pain\" class=\"elem-left\" src=\"/assets/images/salvage-2.jpg\"/><p>\n<p>Dental implant failure doesn&rsquo;t just happen after the placement procedure. It also happens many years into the future. Here are some of the most common symptoms that people with failing implants experience:</p>\n<ul>\n<li>Pain and discomfort</li>\n<li>Gum recession surrounding the implant</li>\n<li>Loose dental implant</li>\n<li>Difficulty chewing</li>\n<li>Gum inflammation surrounding the implant</li>\n</ul>\n<h2>How Dental Implant Salvage Works</h2>\n<p><img alt=\"Man smiling at the dentist\" class=\"elem-left\" src=\"/assets/images/salvage-3.jpg\"/><p>\n<p>If you are worried about your dental implants, give us a call at your earliest convenience. We&rsquo;d be more than happy to examine your smile and discuss your symptoms. After this, we can put together a treatment plan to restore your oral health. The most common treatments used to address dental implant failure include deep cleanings, antibiotic treatment, and other infection control methods. The sooner we can address the issue, the more likely we can save your dental implant!</p>\n</div>\n    ";

  return (
    <>
      <PageBanner
        title={"Dental Implant Failure &amp; Salvage &ndash; Copperas Cove"}
        subtitle={"Save Your Smile from Failure!"}
        description={"Dental implants are the pinnacle of tooth replacement! Thanks to their ability to replace the roots of the missing teeth in addition to the chewing surfaces, dental implants offer many benefits that you can&rsquo;t find elsewhere. This includes a success rate of over 95%! That being said, failure can still happen in certain circumstances, so it&rsquo;s important to be on the lookout for changes. The quicker we can address the issue, the more likely that we can save your smile from failure with dental implant salvage treatment."}
      />
      <main className="wrapper">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </main>
    </>
  );
}
