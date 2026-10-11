import React from "react";
import Link from "next/link";

interface PageBannerProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  bgImage?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageBanner({
  title,
  subtitle,
  description,
  bgImage = "/assets/images/banner-services.jpg",
  breadcrumbs = [{ label: "Home", href: "/" }],
}: PageBannerProps) {
  return (
    <div className="relative bg-[#204369] text-white py-14 sm:py-20 overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#204369] via-[#204369]/95 to-[#16304c]/90" />

      {/* Decorative ambient light */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#9c8f6d]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb Trail */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-xs text-slate-300 mb-4" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-[#9c8f6d] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#9c8f6d] font-medium">{crumb.label}</span>
                )}
                {idx < breadcrumbs.length - 1 && <span className="text-slate-500">/</span>}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Title & Subtitle */}
        <div className="max-w-3xl">
          {subtitle && (
            <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#9c8f6d] bg-white/10 px-3.5 py-1 rounded-full border border-white/10 mb-3">
              {subtitle}
            </span>
          )}
          {title && (
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {title}
            </h1>
          )}
          {description && (
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
