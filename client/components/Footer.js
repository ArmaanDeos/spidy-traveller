"use client";

import Link from "next/link";
import { Phone, Mail } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/faqs", label: "FAQs" },
];

const popularDeals = [
  { href: "/deals/new-york", label: "New York Flights" },
  { href: "/deals/london", label: "London Specials" },
  { href: "/deals/tokyo", label: "Tokyo Deals" },
  { href: "/deals/paris", label: "Paris Offers" },
  { href: "/deals/dubai", label: "Dubai Discounts" },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 text-white overflow-hidden pt-24 pb-14">
      {/* Top Left Abstract Shape */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-72 h-72 bg-amber-400 opacity-20 rounded-tr-[100px] blur-[80px] -z-10"
        style={{ clipPath: "ellipse(70% 80% at 30% 50%)" }}
      />

      {/* Bottom Right Abstract Shape */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400 opacity-25 rounded-bl-[150px] blur-[100px] -z-10"
        style={{ clipPath: "ellipse(60% 70% at 70% 50%)" }}
      />

      {/* Container Grid */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 z-10">
        {/* Brand & Contact */}
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold tracking-wide text-amber-400 select-none">
            Spidy Traveller
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
            Discover unbeatable airfare deals and explore the world with comfort
            and ease.
          </p>
          <div className="space-y-5 text-gray-200 text-sm">
            <div className="flex items-center gap-4 group cursor-pointer">
              <Phone className="w-6 h-6 text-amber-400 group-hover:text-amber-300 transition" />
              <a
                href="tel:+1-(844) 919-8610"
                className="underline hover:text-amber-300 transition"
              >
                +1-(844) 919-8610
              </a>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <Mail className="w-6 h-6 text-amber-400 group-hover:text-amber-300 transition" />
              <a
                href="mailto:info@spidytraveller.com"
                className="underline hover:text-amber-300 transition"
              >
                info@spidytraveller.com
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-amber-400 font-bold text-2xl mb-7 border-b border-amber-400 pb-3">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-5 text-gray-300 text-base font-medium">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-amber-400 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Popular Deals */}
        <div>
          <h3 className="text-amber-400 font-bold text-2xl mb-7 border-b border-amber-400 pb-3">
            Popular Deals
          </h3>
          <ul className="max-h-56 overflow-y-auto scrollbar-thin scrollbar-thumb-amber-400 pr-2 space-y-4 text-gray-300 text-base font-medium">
            {popularDeals.map((deal) => (
              <li key={deal.href}>
                <Link
                  href={deal.href}
                  className="hover:text-amber-400 transition"
                >
                  {deal.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-amber-400 font-bold text-2xl mb-7 border-b border-amber-400 pb-3">
            Stay Connected
          </h3>
          <p className="text-gray-300 text-base mb-6 max-w-sm">
            Join our newsletter to receive exclusive deals and travel updates.
          </p>
          <form className="flex flex-col space-y-4 max-w-sm">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              className="px-5 py-3 rounded-lg text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button
              type="submit"
              className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-3 rounded-lg transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 border-t border-amber-400 opacity-40"></div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-8 text-center text-amber-300 text-xs sm:text-sm select-none font-light">
        <p className="mb-2 leading-relaxed max-w-3xl mx-auto">
          Disclaimer: spidytraveller.com provides travel deal comparisons only.
          We are not affiliated with any airline and do not guarantee prices.
          All offers are subject to availability and change.
        </p>
        <p>© {new Date().getFullYear()} SpidyTraveller. All rights reserved.</p>
      </div>
    </footer>
  );
}
