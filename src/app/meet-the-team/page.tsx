import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { Users, Heart, Sparkles, Phone, Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Meet Our Dental Team in Copperas Cove, TX | Cove Choice Dental",
  description:
    "Meet the caring dental assistants, hygienists, and administrative team at Cove Choice Dental in Copperas Cove, TX. Dedicated to making every patient visit comfortable and stress-free.",
};

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  bio: string;
  personal: string;
  specialties: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: "Farah",
    role: "Operations Manager",
    image: "/assets/images/team-farah.jpg",
    bio: "Farah brings over a decade of extensive experience in healthcare office management, patient advocacy, human resources, and operational leadership to Cove Choice Dental. She oversees daily clinic operations to ensure every patient receives exceptional care from the moment they step through our doors.",
    personal: "When not managing clinic operations, Farah enjoys relaxing with her husband and daughter, exploring the Texas Hill Country, and spending quality family time together.",
    specialties: ["Practice Operations", "Patient Financing", "Insurance Coordination", "Care Quality"],
  },
  {
    name: "Ashley",
    role: "Registered Dental Assistant",
    image: "/assets/images/team-ashley.jpg",
    bio: "For Ashley, dental assisting is all about genuine service—supporting our dentists and ensuring every patient feels relaxed in the chair. After completing her dental assisting training, she completed specialized certifications in dental sealants and preventive clinical care.",
    personal: "Originally from Burnet, TX, Ashley comes from a close-knit family with five siblings. On weekends she enjoys outdoor BBQs, kayaking, hiking, and spending time with her son.",
    specialties: ["Chairside Assisting", "Dental Sealants", "Patient Comfort", "Sterilization Protocols"],
  },
  {
    name: "Taylor",
    role: "Patient Coordinator & Receptionist",
    image: "/assets/images/team-ashley.jpg",
    bio: "Taylor studied dental assisting in Austin and brings years of hands-on clinical knowledge directly to our front desk. She loves greeting patients by name, walking them through appointment scheduling, and demystifying dental insurance coverage.",
    personal: "Taylor enjoys spending her free time shopping, trying new local recipes, and making memories with her daughter.",
    specialties: ["Appointment Scheduling", "Insurance Clarification", "New Patient Onboarding"],
  },
  {
    name: "Allison",
    role: "Patient Care Receptionist",
    bio: "A native of Fort Hood, Allison attended Vista College for dental assisting and has clinical experience across general dentistry, orthodontics, oral surgery, and prosthodontics. Her multifaceted background helps her answer complex clinical questions with ease.",
    personal: "Allison loves spending weekends cooking, baking, and playing the piano with her family.",
    specialties: ["Clinical Triage", "Treatment Estimates", "Patient Advocacy", "Bilingual Support"],
  },
  {
    name: "Erin",
    role: "Registered Dental Assistant (RDA)",
    bio: "Erin is from Copperas Cove and graduated from Dental Genius Assisting School. Holding certifications in diagnostic digital radiography (X-rays) and BLS, she takes tremendous pride in restoring oral health and seeing patients leave with healthy smiles.",
    personal: "Erin loves spending quality time with her blended family, watching her husband golf, and enjoying live country music.",
    specialties: ["Digital Radiography", "BLS Certified", "Restorative Assisting", "Gentle Care"],
  },
];

export default function MeetTheTeamPage() {
  return (
    <main className="min-h-screen bg-[#f2f1ec] text-slate-800">
      <PageBanner
        title="Meet Our Caring Dental Team"
        subtitle="Cove Choice Dental • Copperas Cove, TX"
        description="Behind every healthy smile is an entire team of compassionate dental professionals. Our skilled dental assistants, patient coordinators, and managers are here to ensure your family's visit is gentle, transparent, and completely comfortable."
        bgImage="/assets/images/banner-services.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about-us" },
          { label: "Meet the Team" },
        ]}
      />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Intro Highlight */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9c8f6d] block mb-2">
            Compassionate Patient Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#204369] tracking-tight">
            The Friendly Faces Behind Your <span className="text-[#e64b38]">Smile</span>
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            From seamless check-ins to gentle chairside assistance, our staff goes above and beyond to make you feel right at home.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo or Initials Avatar */}
                <div className="flex items-center gap-4 mb-6">
                  {member.image ? (
                    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 border-2 border-[#9c8f6d]/30 shrink-0 shadow-sm">
                      <img
                        src={member.image}
                        alt={`${member.name}, ${member.role}`}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 rounded-2xl bg-[#204369] text-white flex items-center justify-center shrink-0 text-2xl font-bold shadow-sm">
                      {member.name.charAt(0)}
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-[#204369]">{member.name}</h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#e64b38]">{member.role}</p>
                    <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 mt-1">
                      <Heart className="w-3 h-3 text-[#e64b38]" />
                      <span>Dedicated Care</span>
                    </span>
                  </div>
                </div>

                {/* Professional Bio */}
                <div className="space-y-3 text-sm text-slate-600 leading-relaxed mb-6">
                  <p>{member.bio}</p>
                  <div className="bg-[#f2f1ec] p-3.5 rounded-2xl border border-[#9c8f6d]/20 text-xs text-slate-700">
                    <strong className="text-[#204369] block mb-0.5">Life Outside the Clinic:</strong>
                    {member.personal}
                  </div>
                </div>
              </div>

              {/* Specialties Tags */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex flex-wrap gap-1.5">
                  {member.specialties.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="bg-slate-50 text-slate-600 text-[11px] font-medium px-2.5 py-1 rounded-lg border border-slate-100"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Doctors Callout Banner */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9c8f6d]">
              Clinical Leadership
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#204369]">
              Looking to Meet Our Licensed Dentists?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Learn about Dr. Daood Alvi, Dr. Sileshi Assemu, Dr. Shruti Sharma, and Dr. Simrat Sehmi, their clinical backgrounds, and advanced dental specialties.
            </p>
          </div>

          <Link
            href="/meet-the-dentists"
            className="shrink-0 bg-[#204369] hover:bg-[#16304c] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow flex items-center gap-2"
          >
            <span>Meet All 4 Dentists</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
