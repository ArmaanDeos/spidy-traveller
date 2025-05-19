import { Montserrat, Lato } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: "SpidyTraveller | Cheap Flight Booking ",
  description:
    "Book cheap airline tickets online with SpidyTraveller. 24/7 customer support at (844) 919-8610. Enjoy great deals on domestic and international flights.",
  keywords: [
    "Airline Reservation",
    "Flight Reservation",
    "cheap flight tickets",
    "airline phone number",
    "flight booking",
    "airlines tickets",
    "airline tickets booking",
    "cheap flights tickets",
    "flight ticket",
    "plane tickets Deals",
    "flight ticket booking",
    "cheap airline tickets",
    "air ticket booking",
    "booking com flights",
    "cheap plane tickets",
    "flight ticket booking online",
    "airline Customer Care Number",
    "international flights tickets",
  ].join(", "),
  siteUrl: "https://spidytraveller.com",
  phoneNumber: "(844) 919-8610",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href={metadata.siteUrl} />

        {/* ✅ Favicon */}
        <link rel="icon" href="/images/logo.png" type="image/x-icon" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.siteUrl} />
        <meta
          property="og:image"
          content={`${metadata.siteUrl}/images/banner.webp`}
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content={`${metadata.siteUrl}/images/banner.webp`}
        />

        {/* JSON-LD: Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "Spidy Traveller",
              url: metadata.siteUrl,
              logo: `${metadata.siteUrl}/logo.png`,
              image: `${metadata.siteUrl}/images/banner.webp`,
              description: metadata.description,
              telephone: metadata.phoneNumber,
              sameAs: [],
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Youth Avenue",
                addressLocality: "Los Angeles",
                addressRegion: "CA",
                postalCode: "90001",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: metadata.phoneNumber,
                contactType: "Customer Support",
                availableLanguage: ["English"],
              },
            }),
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${lato.variable} antialiased`}>
        <Providers> {children}</Providers>
      </body>
    </html>
  );
}
