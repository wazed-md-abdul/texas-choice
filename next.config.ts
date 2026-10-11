import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async rewrites() {
    return [
      { source: "/about", destination: "/about-us" },
      { source: "/dentists", destination: "/meet-the-dentists" },
      { source: "/services", destination: "/dental-services" },
      { source: "/services/family-dentistry", destination: "/preventive-dentistry" },
      { source: "/services/pediatric-dentistry", destination: "/childrens-dentistry" },
      { source: "/services/emergency-dentistry", destination: "/emergency-dentistry" },
      { source: "/services/cosmetic-dentistry", destination: "/cosmetic-dentistry" },
      { source: "/services/restorative-dentistry", destination: "/restorative-dentistry" },
      { source: "/services/dental-implants", destination: "/dental-implants" },
      { source: "/services/dentures", destination: "/dentures" },
      { source: "/services/dental-crowns", destination: "/dental-crowns" },
      { source: "/services/dental-bridges", destination: "/dental-bridges" },
      { source: "/services/root-canal", destination: "/root-canal-therapy" },
      { source: "/services/tooth-extraction", destination: "/tooth-extractions" },
      { source: "/services/teeth-whitening", destination: "/teeth-whitening" },
      { source: "/services/veneers", destination: "/veneers" },
      { source: "/services/wisdom-teeth", destination: "/wisdom-teeth-removal" },
      { source: "/insurance", destination: "/dental-insurance" },
      { source: "/financing", destination: "/for-patients" },
      { source: "/patient-information", destination: "/for-patients" },
      { source: "/new-patients", destination: "/for-patients" },
      { source: "/appointment", destination: "/request-an-appointment" },
      { source: "/offers", destination: "/offers-promotions" },
    ];
  },
};

export default nextConfig;
