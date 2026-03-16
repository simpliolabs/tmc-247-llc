"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tmc-247-llc", label: "Company" },
  { href: "/about-us", label: "About" },
  { href: "/work-with-us", label: "Work With Us" },
  { href: "/#contact", label: "Contact", isAnchor: true },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    if (link.isAnchor) {
      if (pathname === "/") {
        e.preventDefault();
        const element = document.getElementById("contact");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-navy-950 shadow-lg">
      <div className="bg-crimson-600 py-1.5 sm:py-2">
        <div className="container mx-auto px-4 flex justify-center sm:justify-end items-center">
          <a
            href="tel:8058895858"
            className="flex items-center gap-1.5 sm:gap-2 text-white text-xs sm:text-sm font-medium hover:text-white/90 transition-colors"
          >
            <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            (805) 889-5858
          </a>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold text-white tracking-tight font-[Oswald]">
                TMC <span className="text-crimson-600">24/7</span>
              </span>
              <span className="text-xs md:text-sm text-steel-400 uppercase tracking-[0.2em] -mt-1">
                LLC
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleContactClick(e, link)}
                className="text-steel-300 hover:text-white font-medium transition-colors duration-200 text-sm uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
              className="bg-crimson-600 hover:bg-crimson-700 text-white px-6 py-2.5 rounded font-semibold transition-colors duration-200 text-sm uppercase tracking-wide"
            >
              Request a Quote
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-navy-800 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    handleContactClick(e, link);
                    if (!link.isAnchor) setMobileMenuOpen(false);
                  }}
                  className="text-steel-300 hover:text-white font-medium transition-colors duration-200 text-sm uppercase tracking-wide py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={(e) => {
                  if (pathname === "/") {
                    e.preventDefault();
                    const element = document.getElementById("contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                  setMobileMenuOpen(false);
                }}
                className="bg-crimson-600 hover:bg-crimson-700 text-white px-6 py-3 rounded font-semibold transition-colors duration-200 text-sm uppercase tracking-wide text-center mt-2"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
