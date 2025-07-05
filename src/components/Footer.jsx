"use client";

import {
  BsFacebook,
  BsInstagram,
  BsTwitter
} from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { FaMap, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdWatchLater } from "react-icons/md";

const services = [
  { name: "Spine Surgery", href: "/services/spine-surgery" },
  { name: "Disc Replacement", href: "/services/disc-replacement" },
  { name: "Minimally Invasive Spine Surgery", href: "/services/minimally-invasive" },
  { name: "Back & Neck Pain Management", href: "/services/pain-management" },
  { name: "Physiotherapy", href: "/services/physiotherapy" },
  { name: "Orthopedic Surgery", href: "/services/orthopedic-surgery" },
  { name: "Sports Injury Treatment", href: "/services/sports-injury" },
  { name: "Joint Replacement", href: "/services/joint-replacement" }
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
  { name: "Book Appointment", href: "/appointment" }
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms" }
];

export default function Footer() {
  return (
    <footer className=" bg-[#003153]  text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[2.5fr_1.2fr_1fr_1fr]">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/images/home/logo.png" width={40} height={40} alt="Agastya Logo" />
              <span className="text-xl font-semibold dark:text-green">
                AGASTYA <span className="hindi">(अगस्त्य)</span> SPINE & ORTHO AAROGYAM
              </span>
            </Link>
            <p className="text-sm">
              Providing expert orthopedic and spine care with advanced technology, personalized treatment, and compassionate support to help you move pain-free and live better.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-baseline gap-2">
                <FaMap /> <span>1/9, PNB Marg, B Block, housing board, Panchsheel Nagar, Ajmer, Rajasthan 305004</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt /> <Link href="tel:+919876543210">+91 8003474733</Link>
              </li>
              <li className="flex items-center gap-2">
                <MdEmail /> <Link href="mailto:info@mayurspinecare.com">info@Jagdishspinecare.com</Link>
              </li>
              <li className="flex items-center gap-2">
                <MdWatchLater /> <span>Mon-Sat: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase text-white">Services</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm marker:text-lg marker:text-white">
  {services.map(service => (
    <li key={service.name}>
      <Link href={service.href} className="hover:underline">
        {service.name}
      </Link>
    </li>
  ))}
</ul>

          </div>

          {/* Quick Links */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase   text-white">Quick Links</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm marker:text-lg marker:text-white">
  {quickLinks.map(link => (
    <li key={link.name}>
      <Link href={link.href} className="hover:underline">
        {link.name}
      </Link>
    </li>
  ))}
</ul>

          </div>

          {/* Legal */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase text-white">Legal</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm marker:text-lg marker:text-white">
  {legalLinks.map(link => (
    <li key={link.name}>
      <Link href={link.href} className="hover:underline">
        {link.name}
      </Link>
    </li>
  ))}
</ul>

           
          </div>
        </div>
        <div className="w-full h-[350px] my-8 rounded-lg overflow-hidden shadow-lg">
        <iframe
  title="Custom Location"
  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3557.3753805200045!2d75.75136958947722!3d26.897749455694516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719746260000!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

    </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <span className="text-gray-500 dark:text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} <Link href="/" className="hover:underline">Agastya Spine & Ortho Aarogy</Link>. All Rights Reserved.
          </span>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-blue-600"><BsFacebook size={20} /></Link>
            <Link href="#" className="hover:text-pink-600"><BsInstagram size={20} /></Link>
            <Link href="#" className="hover:text-sky-500"><BsTwitter size={20} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
