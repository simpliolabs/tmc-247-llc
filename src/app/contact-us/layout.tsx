import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact TMC 24/7 LLC for freight transportation quotes and inquiries. Available 24/7 at (805) 889-5858 or visit our Yukon, Oklahoma office.",
  alternates: {
    canonical: "https://tmcllc.theceo.store/contact-us",
  },
  openGraph: {
    title: "Contact TMC 24/7 LLC",
    description:
      "Get a freight transportation quote or contact our team. Available 24/7 at (805) 889-5858.",
    url: "https://tmcllc.theceo.store/contact-us",
    images: ["/images/og-image.jpg"],
  },
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
