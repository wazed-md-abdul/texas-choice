import type { Metadata } from "next";
import DoctorProfileLayout, { DoctorProfileData } from "@/components/DoctorProfileLayout";

export const metadata: Metadata = {
  title: "Dr. Daood Alvi, DDS | Lead Dentist in Copperas Cove, TX | Cove Choice Dental",
  description:
    "Meet Dr. Daood Alvi, DDS at Cove Choice Dental in Copperas Cove, TX. With over 10 years of dental experience, Dr. Alvi specializes in dental implants, full mouth restorations, and personalized family dentistry.",
};

const alviData: DoctorProfileData = {
  name: "Dr. Daood Alvi, DDS",
  credentials: "Biomedical Engineering & DDS, University of Minnesota",
  role: "Founder & Lead Dentist",
  specialty: "Dental Implants & Full Mouth Rehabilitation",
  portraitImage: "/assets/images/dr-alvi-1.jpg",
  introQuote:
    "Developing trusting relationships with my patients is my top priority. With individualized care, we don't just improve your oral health—we help you enjoy a better quality of life.",
  bioIntro: [
    "Dr. Alvi has over a decade of comprehensive dental experience. Throughout his entire career, he has made developing trusting, long-term relationships with patients his highest priority.",
    "With him, you can look forward to thoughtful, individualized care tailored to your unique goals. Whether you are seeking relief from tooth pain or a full smile transformation, Dr. Alvi is dedicated to your complete comfort.",
  ],
  keyHighlights: [
    "10+ Years Clinical Experience",
    "Biomedical Engineering Background",
    "Dental Implant Specialist",
    "Endodontics & Root Canal Therapy",
    "Cosmetic Dentistry & Smile Makeovers",
  ],
  whyDentistry: {
    title: "Why Did You Decide to Become a Dentist?",
    text: [
      "Dr. Alvi was fascinated with healthcare from a very young age. After completing his undergraduate engineering degree, he realized he wanted a career where he could combine advanced medical problem-solving with hands-on precision craftsmanship every single day.",
      "This passion led him to shadow experienced dentists, and he immediately recognized that dentistry was the perfect calling. Helping individuals find confidence through a healthy, functional smile remains his greatest joy.",
    ],
    image: "/assets/images/dr-alvi-2.jpg",
    imageAlt: "Dr. Alvi patient care consultation in dental chair",
  },
  education: {
    title: "Where Did You Study Dentistry?",
    degree: "Doctor of Dental Surgery (DDS) & B.S. in Biomedical Engineering",
    school: "University of Minnesota School of Dentistry",
    text: [
      "Dr. Alvi earned his undergraduate degree in Biomedical Engineering and his doctorate at the prestigious University of Minnesota School of Dentistry.",
      "Dedicated to clinical excellence, he routinely completes rigorous continuing education courses to refine his skills in advanced endodontics, surgical implant placement, restorative dentistry, and pediatric dental care.",
    ],
    image: "/assets/images/dr-alvi-3.jpg",
    imageAlt: "University of Minnesota Dental School",
    memberships: [
      "American Dental Association (ADA)",
      "Texas Dental Association (TDA)",
      "Academy of General Dentistry (AGD)",
      "International Congress of Oral Implantologists (ICOI)",
    ],
  },
  personalLife: {
    title: "Outside of the Dental Office, What Do You Like to Do?",
    text: [
      "At home, Dr. Alvi and his wonderful wife, Ayesha, stay very busy raising their two energetic young boys.",
      "When not helping patients at the clinic, he stays active through outdoor running and long-distance cycling. On the creative side, he has a true passion for baking gourmet desserts—applying the exact same meticulous attention to detail and care that he brings to clinical dentistry!",
    ],
  },
  otherDentists: [
    {
      name: "Dr. Sileshi Assemu, DDS",
      role: "General & Family Dentist",
      image: "/assets/images/dr-assemu-landing.jpg",
      href: "/dr-assemu",
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

export default function DrDaoodAlviPage() {
  return <DoctorProfileLayout doctor={alviData} />;
}
