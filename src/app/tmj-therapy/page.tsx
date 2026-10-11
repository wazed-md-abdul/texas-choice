import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "TMJ Therapy Copperas Cove, TX | Jaw Pain | Occlusal Splints",
  description: "Relieve jaw pain and renew function with TMJ therapy in Copperas Cove, TX, using custom occlusal splints from the skilled dentist in Copperas Cove and the trusted dentistry at Cove Choice Dental.",
};

export default function TmjTherapyPagePage() {
  const contentHtml = "\n<div class=\"why\">\n<h2>Why Choose Cover Choice Dental for TMJ Treatment?</h2>\n<ul>\n<li>Specially Designed Treatment</li>\n<li>Open on Some Saturdays</li>\n<li>Can Stop Chronic Migraines</li>\n</ul>\n</div>\n<div class=\"page-divider\">\n<h2>What Is TMJ Disorder?</h2>\n<p><img alt=\"Woman in need of T M J therapy holding her jaw\" class=\"elem-left\" src=\"/assets/images/tmj-1.jpg\" /></p>\n<p>The temporomandibular joint is a set of small hinges that are located in the front of the ears. This joint allows your lower jawbone to move up and down when you speak, laugh, and talk. The TMJ is one of the most complex joints in the whole body, so it can be easily disturbed by misaligned bite, teeth grinding, and other factors. When it happens, you have TMD.</p>\n<h2>Symptoms of TMJ Disorder</h2>\n<p><img alt=\"Illustration of the TMJ\" class=\"elem-left\" src=\"/assets/images/tmj-2.jpg\"/><p>\n<p>There are many symptoms that can become apparent from TMD. Here are some of the most common ones:</p>\n<ul>\n<li><strong>Headaches:</strong> One of the most underdiagnosed causes of frequent headaches is TMD. The jaw muscles become tense, strained, and overworked, so it is easy for this to affect the nearby muscles in the head.</li>\n<li><strong>Ear Pain:</strong> The TMJ is so close to the ears, so having a dysfunctional joint can result in ear pain. It can also cause ringing of the ears, called &ldquo;tinnitus.&rdquo;</li>\n<li><strong>Face/Jaw Pain:</strong> Jaw stiffness and pain are the most common symptoms of TMD. It can be hard to chew comfortably, and lockjaw is common.</li>\n<li><strong>Bruxism:</strong> Teeth clenching and grinding can be caused by daily stress, a misaligned bite, and TMD. This usually occurs during sleep and can overwork the jaw muscles, leading to additional pain.</li>\n</ul>\n<h2>Equilibration/Occlusal Adjustments</h2>\n<p><img alt=\"Woman with jaw pain\" class=\"elem-left\" src=\"/assets/images/tmj-3.jpg\"/><p>\n<p>TMD can often be caused by a misaligned bite, which prevents the muscles of the jaw from reaching their true resting position and relaxing. As a result, they overwork, tire, and become sore. With an equilibration/occlusal adjustment, we can rebalance the bite by either building up or reshaping a few key teeth. In the end, the teeth will come together correctly, the jaw muscles will relax, and TMD symptoms will go and stay away.</p>\n</div>\n<div class=\"more-to-explore\">\n\t<span>More to Explore</span>\n\t<p>\n\t\t<a class=\"btn\" href=\"/preventive-dentistry\">I Need a Dental Checkup &amp; Cleaning</a> <a class=\"btn\" href=\"/childrens-dentistry\">I Need a Dentist for My Child</a> <a class=\"btn\" href=\"/gum-disease-treatment\">I am Worried About Bleeding Gums</a> <a class=\"btn\" href=\"/restorative-dentistry\">I Have a Cavity or Broken Tooth</a> <a class=\"btn\" href=\"/replace-missing-teeth\">I am Missing One or More Teeth</a> <a class=\"btn\" href=\"/cosmetic-dentistry\">I am Unhappy with My Smile</a> <a class=\"btn\" href=\"/emergency-dentistry\">I am in Pain &amp; Need Help</a> <a class=\"btn-alt\" href=\"/dental-services\">View Our Services</a></p>\n</div>\n    ";

  return (
    <>
      <PageBanner
        title={"TMJ Treatment &ndash; Copperas Cove"}
        subtitle={"Put a Stop to Chronic Jaw &amp; Head Pain"}
        description={"Does your jaw feel sore all the time? Are you greeted by a headache almost every morning? Do you consistently hear popping and clicking whenever you move your jaw? If so, then you may have temporomandibular joint disorder, or TMD. This means that your jaw joint, or temporomandibular joint (TMJ), isn&rsquo;t functioning properly. Our team can determine exactly what is causing your problem and then provide a long-term solution with TMJ treatment in Copperas Cove to give you the lasting relief you deserve."}
      />
      <main className="wrapper">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </main>
    </>
  );
}
