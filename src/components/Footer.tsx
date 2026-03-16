import Link from "next/link";
import { Phone, MapPin, Mail, Truck, Clock } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/tmc-247-llc", label: "TMC 24/7 LLC" },
  { href: "/about-us", label: "About Us" },
  { href: "/work-with-us", label: "Work With Us" },
  { href: "/contact-us", label: "Contact Us" },
];

const services = [
  "General Freight",
  "Dry Van Transportation",
  "Full Truckload (FTL)",
  "Nationwide Delivery",
  "On-Time Service",
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-steel-300">
      <div className="bg-crimson-600 py-10 sm:py-12">
        <div className="container mx-auto px-5 sm:px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 font-[Oswald]">
            Ready to Ship With TMC 24/7 LLC?
          </h2>
          <p className="text-white/90 mb-5 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Get your freight moving with a reliable partner. Contact us today for a quote.
          </p>
          <Link
            href="/contact-us#quote"
            className="inline-block bg-white text-crimson-600 hover:bg-steel-100 px-6 sm:px-8 py-3 rounded font-semibold transition-colors duration-200 uppercase tracking-wide text-sm sm:text-base"
          >
            Request a Quote
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-5 sm:px-4 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white tracking-tight font-[Oswald]">
                  TMC <span className="text-crimson-600">24/7</span>
                </span>
                <span className="text-sm text-steel-400 uppercase tracking-[0.2em] -mt-1">
                  LLC
                </span>
              </div>
            </Link>
            <p className="text-steel-400 mb-6 leading-relaxed">
              Setting the standard of excellence in freight transportation across the United States.
            </p>
            <div className="flex items-center gap-2 text-crimson-600">
              <Truck className="h-5 w-5" />
              <span className="text-sm font-medium">Nationwide Coverage</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6 font-[Oswald] uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-steel-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6 font-[Oswald] uppercase tracking-wide">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-steel-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-crimson-600 rounded-full" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6 font-[Oswald] uppercase tracking-wide">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:8058895858"
                  className="flex items-start gap-3 text-steel-400 hover:text-white transition-colors duration-200"
                >
                  <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-crimson-600" />
                  <span>(805) 889-5858</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-steel-400">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-crimson-600" />
                  <span>
                    11012 SW 6th St
                    <br />
                    Yukon, OK 73099
                  </span>
                </div>
              </li>
              <li>
                <a
                  href="mailto:info@tmc247llc.com"
                  className="flex items-start gap-3 text-steel-400 hover:text-white transition-colors duration-200"
                >
                  <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-crimson-600" />
                  <span>info@tmc247llc.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-steel-400">
                  <Clock className="h-5 w-5 mt-0.5 flex-shrink-0 text-crimson-600" />
                  <span>24/7 Operations</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="container mx-auto px-5 sm:px-4 py-5 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p className="text-steel-500 text-xs sm:text-sm text-center md:text-left">
                &copy; 2026 TMC 24/7 LLC. All rights reserved.
              </p>
              <span className="hidden sm:inline text-steel-600">|</span>
              <Link
                href="/privacy-policy"
                className="text-steel-500 hover:text-white text-xs sm:text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </div>
            <p className="text-steel-500 text-xs sm:text-sm text-center md:text-right">
              Built with precision by{" "}
              <a
                href="https://theceocreative.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-crimson-600 hover:text-white transition-colors duration-200 font-medium"
              >
                The CEO Creative
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
