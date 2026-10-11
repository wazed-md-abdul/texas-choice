import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Frequently Asked Dentistry Questions | Cove Choice Dental",
  description: "Get the answers to frequently asked dentistry questions here or call the Cove Choice Dental team and our knowledgeable dentist in Copperas Cove, TX to learn more about our dental services.",
};

export default function FaqsPagePage() {
  const contentHtml = "\n<div class=\"accordion\">\n\t<h3>\n\t\tHow often should I visit the dentist?</h3>\n\t<p>\n\t\tRegardless of your age, two checkups and cleanings per year is usually best. That gives us plenty of chances to check for signs of tooth decay and gum disease before they reach their advanced stages. There are situations where we might ask you to come in more often for additional treatments if your oral health is already at risk.</p>\n\t<h3>\n\t\tI&rsquo;m unhappy with how my smile looks; how can you help?</h3>\n\t<p>\n\t\tThat depends on the kind of corrections you have in mind. Are you simply looking to brighten your smile with a tooth whitening procedure? Is there a small crack that can be quickly covered with dental bonding? Or are you hoping to make several corrections at once with veneers? Each smile is unique, and we&rsquo;ll need to check your teeth thoroughly before creating a cosmetic plan just for you!</p>\n\t<h3>\n\t\tWhat should I do about missing teeth?</h3>\n\t<p>\n\t\tNo matter how many teeth were lost or where they were located, they should be replaced as soon as possible. Gaps in your smile tend to lead to further tooth loss when left alone for too long. Depending on your situation, we may recommend a dental bridge, dentures, or implants to restore your grin.</p>\n\t<h3>\n\t\tCan I bring my child to Cove Choice Dental?</h3>\n\t<p>\n\t\tNaturally! Families are welcome at Cove Choice Dental, and we realize that it&rsquo;s easier to schedule everyone&rsquo;s appointments on the same day rather than having to make time to visit separate dental offices. We&rsquo;ll keep a close eye on your child&rsquo;s dental development and let you know right away if anything unusual comes up.</p>\n\t<h3>\n\t\tWhat if I&rsquo;m afraid of the dentist?</h3>\n\t<p>\n\t\tPlenty of patients need help relaxing during their appointment, so don&rsquo;t be afraid to mention any dental anxieties or phobias that you typically experience. </p>\n\t<h3>\n\t\tShould a toothache be treated as an emergency?</h3>\n\t<p>\n\t\tToothaches have a few different causes, and they should never be taken lightly &ndash; especially if you can&rsquo;t find any bits of food or debris between your teeth that might be causing the pain. Call us if the pain becomes severe or doesn&rsquo;t dissipate after a couple of days.</p>\n\t<h3>\n\t\tWill you take my insurance?</h3>\n\t<p>\n\t\tIf you have an insurance plan, chances are that we accept it. Check our insurance page to see if we&rsquo;re in-network with your current carrier; if you don&rsquo;t see their name listed, you can call to see if we take your plan. This is also a good opportunity for us to explain your benefits to you if there&rsquo;s anything you don&rsquo;t understand.</p>\n</div>\n    ";

  return (
    <>
      <PageBanner
        title={"Frequently Asked Dental Questions - Copperas Cove, TX"}
        subtitle={"Get the Answers You&rsquo;ve Been Looking For"}
        description={"We always love the chance to help our patients, and in many cases that means answering their various questions about our dental office. You&rsquo;ll find the answers to some of the most common inquiries right here on this page. Of course, our ears are always open for more, so call us and ask anything that&rsquo;s on your mind!"}
      />
      <main className="wrapper">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </main>
    </>
  );
}
