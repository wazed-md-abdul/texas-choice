import type { Metadata } from "next";
import DoctorProfileLayout, { DoctorProfileData } from "@/components/DoctorProfileLayout";

export const metadata: Metadata = {
  title: "Dr. Sileshi Assemu, DDS | General & Emergency Dentist in Copperas Cove, TX | Cove Choice Dental",
  description:
    "Meet Dr. Sileshi Assemu, DDS at Cove Choice Dental in Copperas Cove, TX. Over a decade of dental experience providing compassionate, gentle family dentistry and immediate emergency tooth pain relief.",
};

const assemuData: DoctorProfileData = {
  name: "Dr. Sileshi Assemu, DDS",
  credentials: "Doctor of Dental Surgery, University of Tennessee in Memphis",
  role: "General & Family Dentist",
  specialty: "Gentle Dental Care & Emergency Pain Relief",
  portraitImage: "/assets/images/dr-assemu-1.jpg",
  introQuote:
    "Having experienced severe dental pain in my youth, I know firsthand what patients feel. My mission every day is to relieve pain, restore oral health, and create a genuinely comforting dental experience.",
  bioIntro: [
    "Dr. Assemu joined Cove Choice Dental in 2019, bringing over a decade of hands-on dental experience to the Copperas Cove community.",
    "As one of our dedicated dentists, he strives to go the extra mile for every single patient, helping them achieve their smile goals while enjoying a comfortable, personalized, and stress-free appointment.",
  ],
  keyHighlights: [
    "Over 10 Years Clinical Experience",
    "Emergency Tooth Pain Relief",
    "Gentle Restorative Treatments",
    "Crowns, Bridges & Extractions",
    "Bilingual & Compassionate Provider",
  ],
  whyDentistry: {
    title: "Why Did You Decide to Become a Dentist?",
    text: [
      "When Dr. Assemu was younger, he endured multiple episodes of severe dental pain. Having always felt a draw toward medicine, those challenging experiences sparked his deep interest in oral healthcare.",
      "Today, he finds immense fulfillment in helping patients relieve urgent tooth pain and preventing future dental complications. He also values that dentistry allows him to maintain strong, lasting bonds with local families.",
    ],
    image: "/assets/images/dr-assemu-2.jpg",
    imageAlt: "Dr. Assemu sharing a laugh with patient during dental care",
  },
  education: {
    title: "Where Did You Study Dentistry?",
    degree: "Doctor of Dental Surgery (DDS)",
    school: "University of Tennessee College of Dentistry (Memphis, TN)",
    text: [
      "Dr. Assemu completed his undergraduate coursework at Tennessee State University before earning his DDS degree from the prestigious University of Tennessee in Memphis.",
      "Over the years, he has rigorously pursued continuing education courses to remain at the leading edge of modern clinical techniques, dental technology, and restorative procedures.",
    ],
    image: "/assets/images/dr-assemu-3.jpg",
    imageAlt: "University of Tennessee College of Dentistry",
    memberships: [
      "American Dental Association (ADA)",
      "Texas Dental Association (TDA)",
      "Central Texas Dental Society",
    ],
  },
  personalLife: {
    title: "Outside of the Dental Office, What Do You Like to Do?",
    text: [
      "Originally from Ethiopia, Dr. Assemu arrived in the United States and worked diligently to build his career. He is proud to now call Texas home, where he easily connects with patients and friends across the region.",
      "He and his wife live with their three active boys in Cedar Park. During his free time away from the dental chair, Dr. Assemu loves hiking, biking, and playing soccer with his sons.",
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
      name: "Dr. Shruti Sharma, DDS",
      role: "General & Cosmetic Dentist",
      image: "/assets/images/dr-sharma-landing.jpg",
      href: "/dr-sharma",
    },
    {
      name: "Dr. Simrat Sehmi, DDS",
      role: "Family & Pediatric Dentist",
      image: "/assets/images/dr-sehmi-landing.jpg",
      href: "/dr-simrat-sehmi",
    },
  ],
};

export default function DrAssemuPage() {
  return <DoctorProfileLayout doctor={assemuData} />;
}
