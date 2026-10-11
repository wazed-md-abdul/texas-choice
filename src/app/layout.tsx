import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Roboto, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import FixedTabs from "@/components/FixedTabs";
import Footer from "@/components/Footer";
import ClientInteractivity from "@/components/ClientInteractivity";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.texaschoicedental.com"),
  title:
    "Dentist Copperas Cove, TX | Top Rated Family & Emergency Dental | Cove Choice Dental",
  description:
    "Visit Cove Choice Dental in Copperas Cove, TX. Comprehensive family dentistry, same-day emergency dental relief, dental implants, cosmetic dentistry, Medicaid, and major PPO insurance accepted.",
  icons: {
    icon: "/assets/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    url: "https://www.texaschoicedental.com/",
    logo: "https://www.texaschoicedental.com/assets/images/header-logo.png",
    image: "https://www.texaschoicedental.com/assets/images/dr-alvi-1.jpg",
    priceRange: "$$",
    hasMap: "https://g.page/DentistCopperasCove?share",
    email: "appointments@texaschoicedental.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Copperas Cove",
      addressRegion: "TX",
      postalCode: "76522",
      streetAddress: "181 W Hwy 190 Suite 4",
      addressCountry: "US",
    },
    description: "Top-Rated Family, Cosmetic & Emergency Dentist in Copperas Cove, TX",
    name: "Cove Choice Dental",
    telephone: "(254) 987-6777",
    openingHours: ["Mo,Tu,We,Th,Fr 08:30-17:00"],
    geo: {
      "@type": "GeoCoordinates",
      latitude: "31.112187",
      longitude: "-97.907791",
    },
    sameAs: [
      "https://www.facebook.com/Dentistcopperascove/",
      "https://www.yelp.com/biz/cove-choice-dental-copperas-cove",
      "https://twitter.com/CoveChoice",
      "https://www.instagram.com/cove_choice_dental/",
    ],
    founder: ["Dr. Daood Alvi, DDS", "Dr. Yousif Bolus"],
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${roboto.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/assets/images/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="font-sans antialiased bg-slate-50 text-slate-800">
        <ClientInteractivity />
        <FixedTabs />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
