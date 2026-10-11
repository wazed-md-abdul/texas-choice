import React from "react";

export default function GoogleMapSection() {
  return (
    <section className="relative bg-white py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[#204369] font-bold uppercase tracking-wider text-xs sm:text-sm bg-[#f2f1ec] px-3.5 py-1.5 rounded-full border border-[#9c8f6d]/30">
              Convenient Copperas Cove Location
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#204369] mt-2 tracking-tight">
              Finding Our Dental Office
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Conveniently located at 181 W Hwy 190 Suite 4, near Brookview Village, Allure Nail &amp; Spa, and Seoul Garden. Serving Copperas Cove, Lampasas, and Fort Cavazos.
            </p>
          </div>
          <a
            href="https://maps.google.com/?q=181+W+Hwy+190+Suite+4+Copperas+Cove+TX+76522"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#204369] hover:bg-[#16304c] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow transition-colors shrink-0"
          >
            <span>Open in Google Maps</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      <div className="w-full h-[400px] sm:h-[450px] relative bg-slate-100 overflow-hidden shadow-inner">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3415.9116735491116!2d-97.90998008485938!3d31.1121868815065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x547e89050c3afe38!2sCove%20Choice%20Dental!5e0!3m2!1sen!2sus!4v1604528548729!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Cove Choice Dental Office Map"
        ></iframe>
      </div>
    </section>
  );
}
