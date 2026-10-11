import type { Metadata } from "next";
import DoctorProfileLayout, { DoctorProfileData } from "@/components/DoctorProfileLayout";

export const metadata: Metadata = {
  title: "Dr. Simrat Sehmi, DDS | Family & Pediatric Dentist in Copperas Cove, TX | Cove Choice Dental",
  description:
    "Meet Dr. Simrat Sehmi, DDS at Cove Choice Dental in Copperas Cove, TX. Expert family and pediatric dental care, Invisalign, lasers, and full-arch reconstructive dentistry.",
};

const sehmiData: DoctorProfileData = {
  name: "Dr. Simrat Sehmi, DDS",
  credentials: "Doctor of Dental Surgery, VCU School of Dentistry",
  role: "Family & Pediatric Dentist",
  specialty: "Children's Dentistry & Preventive Care",
  portraitImage: "/assets/images/dr-sehmi-bio-1.png",
  introQuote:
    "A genuine smile carries immense healing power. My passion is creating a warm, anxiety-free dental home where kids, teens, and adults feel completely empowered and cared for.",
  bioIntro: [
    "According to Dr. Sehmi, being a dentist is fundamentally about developing meaningful, caring relationships with every patient—making them feel totally at ease while giving them a radiant, pain-free smile.",
    "She strives to make each dental visit as seamless and gentle as possible, ensuring that patients of all ages leave the practice smiling with pride and confidence.",
  ],
  keyHighlights: [
    "Doctor of Dental Surgery (VCU)",
    "Gentle Pediatric Dental Techniques",
    "Invisalign® Certified Provider",
    "Academy of Laser Dentistry Member",
    "Full Arch Reconstructive Dentistry",
  ],
  whyDentistry: {
    title: "Why Did You Decide to Become a Dentist?",
    text: [
      "Dr. Sehmi recognized the profound emotional importance of a healthy smile from early childhood. As a shy child, seeing a welcoming smile gave her the courage to open up and connect with others.",
      "That early realization blossomed into a lifelong passion. She decided to dedicate her career to spreading that same healing power, confidence, and comfort to families in Central Texas.",
    ],
  },
  education: {
    title: "Where Did You Study Dentistry?",
    degree: "Doctor of Dental Surgery (DDS)",
    school: "Virginia Commonwealth University School of Dentistry (Richmond, VA)",
    text: [
      "Dr. Sehmi attended Virginia Commonwealth University for her undergraduate education and earned her Doctorate of Dental Surgery from the respected VCU School of Dentistry.",
      "She consistently completes advanced master-level training to stay at the cutting edge of clinical care, including extensive certifications in Invisalign clear aligners, dental laser therapy, and complex full-arch smile restorations.",
    ],
    image: "/assets/images/dr-sehmi-bio-2.jpg",
    imageAlt: "Dr. Sehmi clinical dental education certificate",
    memberships: [
      "American Dental Association (ADA)",
      "Texas Dental Association (TDA)",
      "Academy of Laser Dentistry (ALD)",
      "American Academy of Pediatric Dentistry Affiliation",
    ],
  },
  personalLife: {
    title: "Outside of the Dental Office, What Do You Like to Do?",
    text: [
      "A former competitive swimmer and Indian classical dancer, Dr. Sehmi is happily married and loves spending her leisure time hiking scenic trails and discovering new dining spots around the Austin and Hill Country area.",
      "Back indoors, she loves to cook and bake—be sure to ask her about her newest pastry creation at your next checkup! On relaxed days off, you'll usually find her spending time with her friendly tuxedo cat, Ziggy.",
    ],
    image: "/assets/images/dr-sehmi-bio-3.jpg",
    imageAlt: "Dr. Sehmi enjoying outdoor recreation",
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
      name: "Dr. Shruti Sharma, DDS",
      role: "General & Cosmetic Dentist",
      image: "/assets/images/dr-sharma-landing.jpg",
      href: "/dr-sharma",
    },
  ],
};

export default function DrSimratSehmiPage() {
  return <DoctorProfileLayout doctor={sehmiData} />;
}
