import type { Metadata } from "next";
import DoctorProfileLayout, { DoctorProfileData } from "@/components/DoctorProfileLayout";

export const metadata: Metadata = {
  title: "Dr. Shruti Sharma, DDS | Cosmetic & General Dentist in Copperas Cove, TX | Cove Choice Dental",
  description:
    "Meet Dr. Shruti Sharma, DDS at Cove Choice Dental in Copperas Cove, TX. Skilled in cosmetic dentistry, endodontics, and family oral care, dedicated to patient-centered dental health.",
};

const sharmaData: DoctorProfileData = {
  name: "Dr. Shruti Sharma, DDS",
  credentials: "Doctor of Dental Surgery, University at Buffalo School of Dental Medicine",
  role: "General & Cosmetic Dentist",
  specialty: "Restorative Aesthetics & Endodontics",
  portraitImage: "/assets/images/dr-sharma-1.jpg",
  introQuote:
    "Seeing genuine smiles on my patients' faces after treatment brings me deep fulfillment. I believe in listening attentively and building warm connections with every family we serve.",
  bioIntro: [
    "Every single day, Dr. Sharma is energized by the confidence that a healthy, beautiful smile restores to her patients. She is passionate about creating positive dental experiences and truly listening to each person's unique concerns.",
    "She understands that open communication is key to exceptional healthcare. While patients learn how to optimize their oral wellness from her, she cherishes every chance to get to know her patients as individuals.",
  ],
  keyHighlights: [
    "Doctorate in Dental Surgery (UB Dental)",
    "Cosmetic Dentistry & Aesthetic Restorations",
    "Endodontic & Root Canal Therapy",
    "Preventive Dental Wellness",
    "Active ADA & TDA Member",
  ],
  whyDentistry: {
    title: "Why Did You Decide to Become a Dentist?",
    text: [
      "Growing up in a medical family (her father and sister practice internal medicine, and her mother is a radiologist), Dr. Sharma was inspired by the healing arts from an early age.",
      "After shadowing several physicians and dental surgeons, she realized that dentistry gave her the unique ability to create immediate, visible, and life-changing improvements for her community. She considers dentistry her true lifetime calling.",
    ],
    image: "/assets/images/dr-sharma-2.jpg",
    imageAlt: "Dr. Sharma discussing personalized treatment plan with dental patient",
  },
  education: {
    title: "Where Did You Study Dentistry?",
    degree: "Doctor of Dental Surgery (DDS) & Bachelor of Dental Surgery (BDS)",
    school: "University at Buffalo School of Dental Medicine (Buffalo, NY) & Himachal Dental College",
    text: [
      "Dr. Sharma earned her BDS degree at Himachal Dental College before earning her Doctorate of Dental Surgery at the world-renowned University at Buffalo School of Dental Medicine in New York.",
      "She stays at the forefront of modern dental techniques through ongoing continuing education. Through her affiliations with the American Dental Association and Texas Dental Association, she routinely pursues advanced clinical training in cosmetic smile makeovers and gentle endodontics.",
    ],
    image: "/assets/images/dr-sharma-3.jpg",
    imageAlt: "Modern dental education training facility",
    memberships: [
      "American Dental Association (ADA)",
      "Texas Dental Association (TDA)",
      "Academy of General Dentistry (AGD)",
    ],
  },
  personalLife: {
    title: "Outside of the Dental Office, What Do You Like to Do?",
    text: [
      "Dr. Sharma resides in Round Rock with her husband, an engineer, and their lively toddler boy who keeps them happily busy at all times.",
      "Outside the dental clinic, she loves spending quality family time taking long drives, watching movies, listening to music, and exploring new culinary hotspots. She is an avid home chef and is frequently in the kitchen experimenting with new recipes!",
    ],
  },
  otherDentists: [
    {
      name: "Dr. Daood Alvi, DDS",
      role: "Founder & Lead Dentist",
      image: "/assets/images/dr-alvi-landing.jpg",
      href: "/dr-daood-alvi",
    },
    {
      name: "Dr. Sileshi Assemu, DDS",
      role: "General & Family Dentist",
      image: "/assets/images/dr-assemu-landing.jpg",
      href: "/dr-assemu",
    },
    {
      name: "Dr. Simrat Sehmi, DDS",
      role: "Family & Pediatric Dentist",
      image: "/assets/images/dr-sehmi-landing.jpg",
      href: "/dr-simrat-sehmi",
    },
  ],
};

export default function DrSharmaPage() {
  return <DoctorProfileLayout doctor={sharmaData} />;
}
