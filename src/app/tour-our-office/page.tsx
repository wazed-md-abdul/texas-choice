import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Tour Our Copperas Cove, TX Dental Office | Cove Choice Dental",
  description: "Tour our Copperas Cove, TX dental office from the comfort of home before calling to schedule an appointment with our Cove Choice Dental team and trusted dentist in Copperas Cove.",
};

export default function TourOurOfficePagePage() {
  const contentHtml = "\n<div class=\"more-to-explore\">\n\t<span>More to Explore</span>\n\t<p>\n\t\t<a class=\"btn\" href=\"/about-us\">About Us</a> <a class=\"btn\" href=\"/meet-the-dentists\">Meet the Dentists</a> <a class=\"btn\" href=\"/meet-the-team\">Meet the Team</a> <!--<a class=\"btn\" href=\"/smile-gallery\">Smile Gallery</a>--><a class=\"btn\" href=\"/advanced-safety-protocol\">Advanced Safety Protocol</a> <a class=\"btn\" href=\"/advanced-dental-technology\">Advanced Dental Technology</a> <a class=\"btn-alt\" href=\"/dental-services\">View Our Services</a></p>\n</div>\n           <!--  <section id=\"office-tour\">\n          <div class=\"contain\">\n            <div id=\"tour\" class=\"cycle-slideshow\" data-cycle-auto-height=container data-cycle-slides=\">div\" data-cycle-prev=\"#office-tour .prev\" data-cycle-pager=\"#tour-controls .pager\" data-cycle-next=\"#office-tour .next\" data-cycle-pager-template=\"<span></span>\">\n              <div><img src=\"/assets/images/office-1.jpg\" alt=\"\"> <p>External View of Cove Choice Dental</p></div>\n             <div><img src=\"/assets/images/office-2.jpg\" alt=\"\"> <p>Front Desk at Cove Choice Dental</p></div> \n              <div><img src=\"/assets/images/office-3.jpg\" alt=\"\"> <p>Hallway at Cove Choice Dental</p></div>\n              <span class=\"prev\"><i class=\"icon-angle-double-left\"></i></span>\n              <span class=\"next\"><i class=\"icon-angle-double-right\"></i></span>\n            </div>\n            <div id=\"tour-controls\">\n              <span class=\"pager\"></span>\n            </div>\n          </div>\n        </section> --> \n    ";

  return (
    <>
      <PageBanner
        title={"Dental Office Tour - Copperas Cove, TX"}
        subtitle={"Check Out Your New Dental Home"}
        description={"A dental office should be a place where you feel at home while remaining confident that you are receiving state-of-the-art treatment from true professionals. We have done everything we can to help our patients feel welcome at our Copperas Cove dental office. For those who feel nervous about visiting our dental office for the first time, we invite you to take a brief &ldquo;tour&rdquo; using the photos below to get a feel for what you can expect."}
      />
      <main className="wrapper">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </main>
    </>
  );
}
