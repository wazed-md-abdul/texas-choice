import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "United Healthcare Dentist in Copperas Cove, TX | Dental Insurance | Cove Choice Dental",
  description: "You can achieve optimal oral health without breaking the bank by visiting your United Healthcare dentist in Copperas Cove.",
};

export default function UnitedHealthcarePagePage() {
  const contentHtml = "\n<div class=\"page-divider\">\n<h2>United Healthcare Coverage Availability &amp; Fees</h2>\n<p><img alt=\"Smiling woman in dentist’s chair\" class=\"elem-left\" src=\"/assets/images/united-1.jpg\"/></p>\n<p>United Healthcare is a leading provider of comprehensive dental plans for individuals and families. They offer coverage for preventive services and medically necessary treatments. Although every plan differs, your premiums give you access to:</p>\n<ul>\n<li>100% coverage for preventive dental services</li>\n<li>80% coverage for basic dental services</li>\n<li>50% coverage for major dental services</li>\n</ul>\n<p>You can visit your dentist every 6 months for a cleaning and checkup, as recommended by the American Dental Association. You can benefit from the power of prevention and early detection for a co-payment. United Healthcare will cover 100% of the expenses to stop common oral health issues from occurring, so you'll be less likely to need costly dental work later. Researchers have found that $1 of preventive care can save up to $50 on restorative fees.</p>\n<p>If your dentist finds anything concerning, don't worry. United Healthcare will cover some of the expenses after meeting your annual deductible. You can use your yearly allowance to lower the amount you will pay.</p>\n<p>United Healthcare recommends choosing an in-network dentist to benefit from more coverage. They have pre-negotiated rates with preferred dental practices to limit out-of-pocket expenses. You can still use your insurance on an out-of-network dentist. You'll enjoy more freedom to choose dentists, specialists, and services, but you may pay more out-of-pocket.</p>\n<p>Unfortunately, your dental insurance does not last forever. Your policy resets at the end of the calendar year. You will lose any benefits you have not used. Nothing will accumulate, and you won't be reimbursed for your premiums or deductibles. With less than 3% of Americans meeting or exceeding their annual limits, billions of dollars are lost in unused dental benefits every year.</p>\n<p>We don't want to see you throw money down the drain. We will help you invest in a healthy, beautiful smile by utilizing your dental insurance in Copperas Cove.</p>\n<h2>Speak to Our Front Desk Team</h2>\n<p><img alt=\"Dentist appointment and toothbrush on calendar \" class=\"elem-left\" src=\"/assets/images/united-2.jpg\"/></p>\n<p>A member of our dental team will work on your behalf with United Healthcare to maximize your insurance benefits. They will explain how your coverage is being used and discuss your payment options for any out-of-pocket expenses, like monthly installments with CareCredit. They will help you find flexible financial solutions to keep a healthy smile affordable.</p>\n<p><a href=\"/request-an-appointment\">Request an appointment</a> through our website or call our office at (254) 271-2882.</p>\n  \n  \n  \n</div>\n    ";

  return (
    <>
      <PageBanner
        title={"United Healthcare &ndash; Copperas Cove, TX"}
        subtitle={"Learn More About the Benefits of United Healthcare"}
        description={"Your oral health and overall wellness are connected, which means a healthy smile is important. Although brushing and flossing can lessen your risk of cavities and gum disease, they aren't enough to keep your mouth healthy. Thanks to your <a href=\"dental-insurance.html\">dental insurance</a>, you can visit your dentist regularly without worrying about a large bill. As your United Healthcare dentist in Copperas Cove, we will help you achieve optimal oral health by maximizing your dental coverage."}
      />
      <main className="wrapper">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </main>
    </>
  );
}
