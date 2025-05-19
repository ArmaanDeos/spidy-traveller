"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Home,
  Info,
  Phone,
  Plane,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // Mobile nav panel
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidePanelOpen, setSidePanelOpen] = useState(false); // Desktop side panel
  const dropdownRef = useRef(null);
  const sidePanelRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
      if (
        sidePanelRef.current &&
        !sidePanelRef.current.contains(e.target) &&
        !e.target.closest("#desktop-hamburger")
      ) {
        setSidePanelOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setMenuOpen(false);
      setSidePanelOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { href: "/", label: "Home", icon: <Home className="nav-icon" /> },
    {
      href: "/flights-reservation",
      label: "Flight Reservations",
      icon: <Plane className="nav-icon" />,
    },
    {
      href: "/about-us",
      label: "About",
      icon: <Info className="nav-icon" />,
    },
    {
      href: "/contact-us",
      label: "Contact",
      icon: <Phone className="nav-icon" />,
    },
  ];

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Text Logo */}
            <Link
              href="/"
              className="text-3xl font-extrabold text-teal-700 font-lato tracking-wide select-none"
            >
              Spidy<span className="text-amber-400">Traveller</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 font-lato items-center">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center group font-semibold text-lg relative nav-link text-teal-700 hover:text-amber-400"
                >
                  {/* <span className="hidden md:inline mr-1 text-amber-400">
                    {item.icon}
                  </span> */}
                  {item.label}
                  <span className="underline-slide" />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="tel:+1-(844) 919-8610"
                className="flex items-center gap-3 bg-gradient-to-r from-teal-500 to-amber-400 hover:from-teal-600 hover:to-amber-500 text-white font-semibold px-6 py-3  shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src="/images/call-agent-icon.png"
                  alt="Call Agent Icon"
                  width={40}
                  height={24}
                  className="object-contain"
                />
                <span className="text-md font-lato">
                  Call Us For Booking <br />
                  +1-(844) 919-8610
                </span>
              </a>

              {/* Desktop Hamburger for side panel */}
              <button
                id="desktop-hamburger"
                onClick={() => setSidePanelOpen(!sidePanelOpen)}
                className="text-gray-700 hover:text-teal-600 focus:outline-none transform transition-transform duration-200 hover:scale-110"
                aria-label="Toggle Contact Panel"
              >
                {sidePanelOpen ? (
                  <X className="w-7 h-7" />
                ) : (
                  <Menu className="w-7 h-7" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-700 transform transition-transform duration-200 hover:scale-110"
              aria-label="Toggle Mobile Menu"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {menuOpen && (
            <div className="md:hidden pb-6 animate-slide-down bg-white shadow-md rounded-b-lg">
              <div className="flex flex-col space-y-3 font-lato px-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="py-3 border-b border-gray-100 hover:bg-teal-50 px-3 rounded transition duration-200 text-teal-700 font-semibold hover:text-amber-600"
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Mobile Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center py-3 px-3 border-b border-gray-100 hover:bg-teal-50 rounded transition duration-200 font-semibold text-gray-700 w-full hover:text-amber-600"
                  >
                    Flight Deals <ChevronDown className="ml-1 w-4 h-4" />
                  </button>

                  {dropdownOpen && (
                    <div className="mt-2 w-full max-h-64 overflow-y-auto bg-white rounded-md shadow-lg z-20 animate-fade-in scrollbar-thin scrollbar-thumb-teal-400 scrollbar-track-gray-100">
                      {dropdownLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-amber-600 transition duration-200"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Call Button */}
                <a
                  href="tel:+1-(844) 919-8610"
                  className="flex justify-center items-center gap-2 mt-4 bg-teal-600 hover:bg-amber-400 text-white font-semibold px-4 py-3 rounded-md transition"
                >
                  <img
                    src="/images/call-agent-icon.png"
                    alt="Phone Icon"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                  <span>Call Us : +1-(844) 919-8610</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Desktop Side Panel with contact + social */}
      <div
        ref={sidePanelRef}
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out
          ${
            sidePanelOpen ? "translate-x-0" : "translate-x-full"
          } hidden md:flex flex-col p-6`}
        aria-hidden={!sidePanelOpen}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-teal-700">Contact Info</h2>
          <button
            onClick={() => setSidePanelOpen(false)}
            aria-label="Close Contact Panel"
            className="text-gray-700 hover:text-teal-600 focus:outline-none"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="space-y-4 text-gray-700 font-lato">
          <div>
            <h3 className="font-semibold text-lg text-amber-400">Phone</h3>
            <a href="tel:+18449300173" className="hover:text-teal-600">
              +1 (844) 919-8610
            </a>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-amber-400">Email</h3>
            <a
              href="mailto:support@spidytraveller.com"
              className="hover:text-teal-600"
            >
              support@spidytraveller.com
            </a>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-amber-400">Address</h3>
            <p>660 McLeod Rd, Lucedale, MS, 39452</p>
          </div>
        </div>{" "}
        <div className="mt-auto pt-6 border-t border-gray-200 flex space-x-6">
          <a
            href="https://facebook.com/spidytraveller"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-gray-600 hover:text-teal-600"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/spidytraveller"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-gray-600 hover:text-teal-600"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/spidytraveller"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-600 hover:text-teal-600"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/company/spidytraveller"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-teal-600"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>

      <style jsx>{`
        .nav-link {
          position: relative;
          cursor: pointer;
        }
        .underline-slide {
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0%;
          height: 2px;
          background: linear-gradient(to right, #14b8a6, #fbbf24);
          transition: width 0.3s ease;
          border-radius: 2px;
        }
        .nav-link:hover .underline-slide {
          width: 100%;
        }
        /* Animate slide down for mobile nav */
        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slideDown 0.3s ease forwards;
        }
        /* Fade in for dropdown */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.2s ease forwards;
        }
      `}</style>
    </>
  );
}
