"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Truck,
  Shield,
  Clock,
  MapPin,
  CheckCircle,
  ArrowRight,
  Users,
  Phone,
  Mail,
  Send,
  Headphones,
  Globe,
  Package,
} from "lucide-react";

const services = [
  {
    icon: Package,
    title: "General Freight Transportation",
    description:
      "Safe and efficient hauling of freight across the United States.",
  },
  {
    icon: Globe,
    title: "Nationwide Coverage",
    description:
      "Reliable transportation solutions serving businesses coast to coast.",
  },
  {
    icon: Clock,
    title: "Reliable Delivery",
    description:
      "Consistent on-time performance and dependable logistics support.",
  },
  {
    icon: Headphones,
    title: "Dedicated Customer Service",
    description:
      "Clear communication and dependable support from pickup to delivery.",
  },
];

const whyChooseUs = [
  "Reliable freight transportation",
  "Nationwide delivery capability",
  "Professional service standards",
  "On-time performance",
  "Long-term logistics partnerships",
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const form = e.currentTarget;
      const formDataObj = new FormData(form);

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataObj as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (err) {
      setError("There was an error submitting your message. Please try again or call us directly at (805) 889-5858.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-truck-highway.jpg"
            alt="Semi truck on highway"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 hero-overlay" />

        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-crimson-600/20 backdrop-blur-sm border border-crimson-600/30 rounded-full px-4 py-2 mb-6">
              <Truck className="h-4 w-4 text-crimson-600" />
              <span className="text-sm font-medium text-white">
                Nationwide Freight Transportation
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-[Oswald]">
              Setting the Standard of{" "}
              <span className="text-crimson-600">Excellence</span> in Freight
              Transportation
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-steel-300 mb-8 leading-relaxed max-w-3xl">
              TMC 24/7 LLC delivers general freight across the United States
              with reliability, speed, and professional service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center justify-center gap-2 bg-crimson-600 hover:bg-crimson-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold transition-all duration-200 text-base sm:text-lg uppercase tracking-wide group"
              >
                Request Transportation Quote
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold transition-all duration-200 text-base sm:text-lg uppercase tracking-wide"
              >
                Contact Our Team
              </Link>
            </div>

            <div className="mt-8 sm:mt-12 grid grid-cols-1 xs:grid-cols-3 gap-3 sm:gap-6 md:flex md:flex-wrap md:gap-8 items-center">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                <span className="text-steel-300 text-xs sm:text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                <span className="text-steel-300 text-xs sm:text-sm">24/7 Operations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                <span className="text-steel-300 text-xs sm:text-sm">Nationwide Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-crimson-600 font-semibold uppercase tracking-wider text-sm">
              About Our Company
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy-950 mt-3 mb-6 font-[Oswald]">
              Reliable Nationwide Freight Transportation
            </h2>
            <p className="text-steel-500 text-base sm:text-lg leading-relaxed mb-6">
              Whenever you need a shipment delivered safely, quickly, on-time,
              and cost effectively, choose TMC 24/7 LLC. Our team is committed
              to delivering dependable transportation services that businesses
              across the country can rely on.
            </p>
            <p className="text-steel-500 text-base sm:text-lg leading-relaxed">
              We focus on providing professional service, clear communication,
              and dependable delivery standards that exceed expectations.
            </p>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "48", label: "States Covered" },
              { value: "24/7", label: "Operations" },
              { value: "100%", label: "Commitment" },
              { value: "On-Time", label: "Delivery Focus" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 sm:p-6 bg-steel-100 rounded-lg"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-crimson-600 font-[Oswald]">
                  {stat.value}
                </div>
                <div className="text-steel-500 text-xs sm:text-sm uppercase tracking-wide mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-steel-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-crimson-600 font-semibold uppercase tracking-wider text-sm">
              What We Offer
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy-950 mt-3 mb-4 font-[Oswald]">
              Transportation Services
            </h2>
            <p className="text-steel-500 max-w-2xl mx-auto text-base sm:text-lg">
              TMC 24/7 LLC provides comprehensive freight transportation
              services tailored to meet your shipping needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border-b-4 border-transparent hover:border-crimson-600"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-crimson-600/10 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-crimson-600 transition-colors duration-300">
                  <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-crimson-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-navy-950 mb-2 sm:mb-3 font-[Oswald]">
                  {service.title}
                </h3>
                <p className="text-steel-500 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="text-crimson-600 font-semibold uppercase tracking-wider text-sm">
                The TMC Difference
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-6 font-[Oswald]">
                Why Businesses Trust TMC 24/7 LLC
              </h2>
              <p className="text-steel-300 text-base sm:text-lg leading-relaxed mb-8">
                Our commitment to reliability and customer satisfaction sets us
                apart. We build lasting partnerships with businesses who need
                dependable freight transportation.
              </p>

              <ul className="space-y-4 mb-8">
                {whyChooseUs.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-crimson-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-steel-300 text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center gap-2 text-crimson-600 hover:text-white font-semibold transition-colors duration-200 group text-sm sm:text-base"
              >
                Get Started Today
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative order-first lg:order-last mb-8 lg:mb-0">
              <div className="aspect-[4/3] rounded-xl overflow-hidden relative ml-4 sm:ml-6 lg:ml-0">
                <Image
                  src="/images/why-choose-warehouse.jpg"
                  alt="Logistics warehouse with freight"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute bottom-4 left-0 sm:bottom-4 sm:left-0 lg:-bottom-6 lg:-left-6 bg-crimson-600 text-white p-3 sm:p-4 lg:p-6 rounded-lg shadow-xl">
                <p className="text-xl sm:text-2xl lg:text-4xl font-bold font-[Oswald]">24/7</p>
                <p className="text-xs sm:text-sm uppercase tracking-wide">
                  Always Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
                <Image
                  src="/images/customer-truck-mountain.jpg"
                  alt="Truck on mountain road"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div>
              <span className="text-crimson-600 font-semibold uppercase tracking-wider text-sm">
                Our Promise
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-950 mt-3 mb-6 font-[Oswald]">
                Committed to Our Customers
              </h2>
              <p className="text-steel-500 text-base sm:text-lg leading-relaxed mb-6">
                Customer satisfaction drives everything we do at TMC 24/7 LLC.
                Our mission is to provide dependable freight transportation
                that supports the success of our clients and their businesses.
              </p>
              <p className="text-steel-500 text-base sm:text-lg leading-relaxed mb-8">
                We believe every customer deserves consistent, high-quality
                service and dependable logistics support.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Professional Service",
                  "On-Time Performance",
                  "Clear Communication",
                  "Dependable Support",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-crimson-600 flex-shrink-0" />
                    <span className="text-navy-950 font-medium text-sm sm:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-crimson-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cta-truck.jpg"
            alt="Fleet of trucks"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-[Oswald]">
            Ready to Move Your Freight?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-base sm:text-lg">
            Whether your shipment is local or nationwide, TMC 24/7 LLC is ready
            to deliver dependable transportation services.
          </p>
          <Link
            href="/#contact"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center justify-center gap-2 bg-white text-crimson-600 hover:bg-steel-100 px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold transition-colors duration-200 uppercase tracking-wide text-sm sm:text-base group"
          >
            Contact Us Today
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 bg-navy-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-crimson-600 font-semibold uppercase tracking-wider text-sm">
              Get In Touch
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4 font-[Oswald]">
              Contact TMC 24/7 LLC
            </h2>
            <p className="text-steel-300 max-w-2xl mx-auto text-base sm:text-lg">
              Contact us today to discuss how we can provide the experience,
              service, and reliability that you and your customers deserve.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-navy-900 rounded-xl p-6 sm:p-8 md:p-10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 font-[Oswald]">
                Send Us a Message
              </h3>

              {isSubmitted ? (
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 sm:p-8 text-center">
                  <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 font-[Oswald]">
                    Thank You!
                  </h4>
                  <p className="text-steel-300">
                    Your message has been received. We'll get back to you
                    shortly.
                  </p>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don't fill this out: <input name="bot-field" />
                    </label>
                  </p>

                  {error && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400 text-sm">
                      {error}
                    </div>
                  )}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white font-medium mb-2 text-sm sm:text-base"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-navy-800 border border-navy-700 text-white placeholder-steel-500 focus:border-crimson-600 focus:ring-2 focus:ring-crimson-600/20 outline-none transition-all text-sm sm:text-base"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white font-medium mb-2 text-sm sm:text-base"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-navy-800 border border-navy-700 text-white placeholder-steel-500 focus:border-crimson-600 focus:ring-2 focus:ring-crimson-600/20 outline-none transition-all text-sm sm:text-base"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-white font-medium mb-2 text-sm sm:text-base"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-navy-800 border border-navy-700 text-white placeholder-steel-500 focus:border-crimson-600 focus:ring-2 focus:ring-crimson-600/20 outline-none transition-all text-sm sm:text-base"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-white font-medium mb-2 text-sm sm:text-base"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-navy-800 border border-navy-700 text-white placeholder-steel-500 focus:border-crimson-600 focus:ring-2 focus:ring-crimson-600/20 outline-none transition-all resize-none text-sm sm:text-base"
                      placeholder="Tell us about your transportation needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-crimson-600 hover:bg-crimson-700 disabled:bg-steel-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors duration-200 uppercase tracking-wide text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 font-[Oswald]">
                  Contact Information
                </h3>
                <p className="text-steel-300 mb-8 text-sm sm:text-base">
                  Reach out to us directly or send a message through our form.
                  We're here to help with your freight transportation needs.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-crimson-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <a
                      href="tel:8058895858"
                      className="text-steel-300 hover:text-white transition-colors text-sm sm:text-base"
                    >
                      (805) 889-5858
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-crimson-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:earl@tmc24seven.com"
                      className="text-steel-300 hover:text-white transition-colors text-sm sm:text-base"
                    >
                      earl@tmc24seven.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-crimson-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Address</h4>
                    <p className="text-steel-300 text-sm sm:text-base">
                      11012 SW 6th St
                      <br />
                      Yukon, OK 73099
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-crimson-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Operations</h4>
                    <p className="text-steel-300 text-sm sm:text-base">24 Hours / 7 Days a Week</p>
                  </div>
                </div>
              </div>

              <div className="bg-navy-800 rounded-xl overflow-hidden h-48 sm:h-64 mt-6 sm:mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.0419376449595!2d-97.76547!3d35.4874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b21b37a5c9c3a7%3A0x0!2sYukon%2C%20OK%2073099!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TMC 24/7 LLC Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
