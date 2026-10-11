"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Search, 
  Sparkles, 
  ShieldCheck, 
  Smile, 
  AlertCircle, 
  HeartHandshake,
  Cpu,
  Phone
} from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    id: "implants-guide",
    title: "The Complete Guide to Dental Implants: Restoring 100% Bite Strength & Confidence",
    slug: "/dental-implants",
    category: "Restorative & Implants",
    excerpt:
      "Missing teeth lead to jawbone deterioration and premature facial aging. Learn how modern titanium implants replicate the root-to-crown structure to last a lifetime.",
    image: "/assets/images/implants-3.jpg",
    date: "October 8, 2026",
    readTime: "6 min read",
    author: "Dr. Daood Alvi, DDS",
    authorRole: "Implant & Restorative Dentist",
    featured: true,
  },
  {
    id: "preventive-habits",
    title: "5 Simple Daily Habits for Stronger Enamel & Long-Term Cavity Prevention",
    slug: "/preventive-dentistry",
    category: "Preventive Care",
    excerpt:
      "Beyond daily brushing and flossing, discover fluoride rinses, dietary modifications, and hydration habits that shield enamel against acid attacks.",
    image: "/assets/images/preventive-1.jpg",
    date: "September 28, 2026",
    readTime: "4 min read",
    author: "Dr. Simrat Sehmi, DDS",
    authorRole: "Family & General Dentist",
  },
  {
    id: "teeth-whitening-vs-otc",
    title: "Professional In-Office Teeth Whitening vs. Store-Bought Strips: What Actually Works?",
    slug: "/teeth-whitening",
    category: "Cosmetic Dentistry",
    excerpt:
      "Compare medical-grade peroxide gels and custom LED trays against drug store whitening strips to achieve radiant results without tooth sensitivity.",
    image: "/assets/images/whitening-1.jpg",
    date: "September 20, 2026",
    readTime: "5 min read",
    author: "Dr. Rohit Sharma, DDS",
    authorRole: "Cosmetic & Restorative Dentist",
  },
  {
    id: "emergency-dental-guide",
    title: "What to Do During a Dental Emergency Before Reaching Our Copperas Cove Clinic",
    slug: "/emergency-dentistry",
    category: "Emergency Care",
    excerpt:
      "From knocked-out adult teeth to excruciating toothache flare-ups, here is your step-by-step first-aid protocol to preserve natural teeth and manage acute pain.",
    image: "/assets/images/emer-intro.jpg",
    date: "September 12, 2026",
    readTime: "4 min read",
    author: "Dr. Rohit Sharma, DDS",
    authorRole: "Emergency Dental Director",
  },
  {
    id: "dentures-vs-implants",
    title: "Modern Dentures vs. Dental Implants: Finding the Right Smile Restoration for Your Budget",
    slug: "/dentures",
    category: "Restorative & Implants",
    excerpt:
      "We break down full, partial, and implant-retained All-on-4 dentures, including insurance coverage rates and flexible 0% interest monthly financing options.",
    image: "/assets/images/dentures-cost-1.jpg",
    date: "August 30, 2026",
    readTime: "5 min read",
    author: "Dr. Daood Alvi, DDS",
    authorRole: "Implant & Restorative Dentist",
  },
  {
    id: "kids-first-dental-visit",
    title: "Making Pediatric Dental Visits Fun & Fear-Free: A Parent's Guide to Happy Checkups",
    slug: "/childrens-dentistry",
    category: "Pediatric Care",
    excerpt:
      "How early visits starting at age one, kid-friendly dental education, and dental sealants stop childhood cavities before they start.",
    image: "/assets/images/child-checkups-1.jpg",
    date: "August 18, 2026",
    readTime: "4 min read",
    author: "Dr. Bethlehem Assemu, DDS",
    authorRole: "Pediatric & Family Dentist",
  },
  {
    id: "porcelain-veneers-smile-makeover",
    title: "Transforming Chipped, Stained, or Misaligned Smiles with Custom Porcelain Veneers",
    slug: "/veneers",
    category: "Cosmetic Dentistry",
    excerpt:
      "Ultra-thin ceramic porcelain veneers offer lifelike translucency and stain resistance for patients seeking comprehensive cosmetic smile rejuvenation.",
    image: "/assets/images/veneers-1.jpg",
    date: "August 5, 2026",
    readTime: "5 min read",
    author: "Dr. Simrat Sehmi, DDS",
    authorRole: "Cosmetic & General Dentist",
  },
  {
    id: "dental-insurance-maximization",
    title: "Maximizing Your Annual Dental Insurance Benefits Before They Expire on December 31st",
    slug: "/dental-insurance",
    category: "Insurance & Savings",
    excerpt:
      "Most PPO dental plans do not roll over unused benefits. Learn how scheduling preventive care, fillings, or crowns early saves hundreds in out-of-pocket expenses.",
    image: "/assets/images/index-insurance.jpg",
    date: "July 24, 2026",
    readTime: "4 min read",
    author: "Cove Choice Patient Team",
    authorRole: "Financial Coordinators",
  },
  {
    id: "advanced-digital-technology",
    title: "How Low-Radiation Digital X-Rays & Intraoral Cameras Revolutionize Dental Care",
    slug: "/advanced-dental-technology",
    category: "Dental Tech",
    excerpt:
      "Experience faster diagnoses, 80% reduced radiation, and interactive chairside imaging that lets you see exactly what the dentist sees in real-time.",
    image: "/assets/images/technology-1.jpg",
    date: "July 15, 2026",
    readTime: "4 min read",
    author: "Dr. Rohit Sharma, DDS",
    authorRole: "Clinical Director",
  },
];

const CATEGORIES = [
  "All Articles",
  "Restorative & Implants",
  "Preventive Care",
  "Cosmetic Dentistry",
  "Emergency Care",
  "Pediatric Care",
  "Insurance & Savings",
];

export default function BlogClient() {
  const [selectedCategory, setSelectedCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return ALL_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "All Articles" || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = ALL_POSTS.find((p) => p.featured) || ALL_POSTS[0];

  return (
    <div className="bg-[#f8fafc] py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Featured Post Card (When viewing all or relevant category and no active search) */}
        {selectedCategory === "All Articles" && searchQuery.trim() === "" && (
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-[#e64b38] bg-[#e64b38]/10 px-3 py-1 rounded-full border border-[#e64b38]/20">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Clinical Guide
              </span>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 grid lg:grid-cols-12 transition-all hover:shadow-xl">
              {/* Image side */}
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden group">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#204369]/60 via-transparent to-transparent lg:hidden" />
                <span className="absolute top-4 left-4 bg-[#204369] text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md">
                  {featuredPost.category}
                </span>
              </div>

              {/* Text content side */}
              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#9c8f6d]" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#9c8f6d]" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#204369] leading-tight mb-4 hover:text-[#e64b38] transition-colors">
                    <Link href={featuredPost.slug}>{featuredPost.title}</Link>
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#204369]/10 text-[#204369] flex items-center justify-center font-bold text-sm">
                      <User className="w-5 h-5 text-[#204369]" />
                    </div>
                    <div>
                      <span className="block font-bold text-sm text-slate-800">
                        {featuredPost.author}
                      </span>
                      <span className="text-xs text-slate-500">
                        {featuredPost.authorRole}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={featuredPost.slug}
                    className="inline-flex items-center gap-2 bg-[#204369] hover:bg-[#e64b38] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-sm"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter Controls & Search Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-slate-200/80 mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search dental topics, symptoms, treatments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#204369] focus:ring-1 focus:ring-[#204369] transition-all bg-slate-50/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Results Counter */}
            <div className="text-xs font-semibold text-slate-500">
              Showing <span className="text-[#204369] font-bold">{filteredPosts.length}</span> articles
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-3 border-t border-slate-100 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-bold px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-[#204369] text-white shadow-sm"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 max-w-lg mx-auto my-10">
            <AlertCircle className="w-12 h-12 text-[#9c8f6d] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#204369] mb-2">No Articles Found</h3>
            <p className="text-sm text-slate-600 mb-6">
              We couldn&apos;t find any articles matching &ldquo;{searchQuery}&rdquo;. Try another search term or reset the category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Articles");
              }}
              className="bg-[#204369] text-white text-xs font-bold px-6 py-3 rounded-xl hover:bg-[#e64b38] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Card Thumbnail */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 bg-[#204369]/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                      {post.category}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#9c8f6d]" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#9c8f6d]" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#204369] group-hover:text-[#e64b38] transition-colors leading-snug mb-3">
                      <Link href={post.slug}>{post.title}</Link>
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer / Author Bar */}
                <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <span className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center font-bold text-[11px] text-[#204369]">
                      <User className="w-3.5 h-3.5" />
                    </span>
                    <span className="font-semibold truncate max-w-[130px]">
                      {post.author}
                    </span>
                  </div>

                  <Link
                    href={post.slug}
                    className="text-[#204369] group-hover:text-[#e64b38] font-bold inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Conversion Banner at bottom */}
        <div className="bg-gradient-to-r from-[#0b2545] to-[#134074] text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#9c8f6d]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-[#9c8f6d] font-extrabold uppercase tracking-widest text-xs block mb-2">
              Copperas Cove, TX Dental Care
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
              Have Questions About Your Oral Health?
            </h3>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-8">
              Whether you are looking for gentle preventive cleanings, toothache relief, or a complete cosmetic smile makeover, our doctors are ready to help.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:12549876777"
                className="bg-white hover:bg-slate-100 text-[#0b2545] font-bold py-3.5 px-8 rounded-xl text-sm sm:text-base shadow transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#e64b38]" />
                <span>Call: (254) 987-6777</span>
              </a>
              <Link
                href="/request-an-appointment"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold py-3.5 px-6 rounded-xl text-sm transition-all"
              >
                Book Appointment Online
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
