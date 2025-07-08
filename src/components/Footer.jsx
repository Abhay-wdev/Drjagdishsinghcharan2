"use client";
import { SiSocialblade } from "react-icons/si";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter
} from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { FaMap, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdWatchLater } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

const services = [
  { name: "Spine Surgery", href: "/services/endoscopic-spine-surgery" },
  { name: "Fracture & Trauma Care", href: "/services/fracture-trauma-care" },
  { name: "Disc Replacement", href: "/services/disc-replacement-surgery" },
  { name: "Endoscopic Spine & Arthroscopic Surgery", href: "/services/endoscopic-spine-orthroscopic-surgery" },
  { name: "Minimally Invasive Spine Surgery", href: "/services/minimally-invasive-spine-surgery" },
  { name: "Sports Injury Treatment", href: "/services/arthroscopy-Sports-injury-care" },
  { name: "Spinal Deformity Correction", href: "/services/spinal-deformity-correction" },
  { name: "Joint Replacement", href: "/services/joint-replacement-surgery" }
];


const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  
  { name: "Blogs", href: "/blogs" },
  { name: "Contact Us", href: "/contact" },
  { name: "Book Appointment", href: "/book-appointment" }
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
              <span className='flex justify-center items-center'><MdLocationPin /></span><span>  1/9, PNB Marg, B Block, housing board, Panchsheel Nagar, Ajmer, Rajasthan 305004</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt /> <Link href="tel:+919876543210">+91 8003474733</Link>
              </li>
              <li className="flex items-center gap-2">
                <MdEmail /> <Link href="mailto:info@mayurspinecare.com">jaggi.spine1104@gmail.com</Link>
              </li>
              <li className="flex items-center gap-2">
                <MdWatchLater /> <span>Mon-Sat: 10:00 AM - 5:00 PM  </span>
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
  title="Clinic Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3082.143465907961!2d74.62990707465741!3d26.511576777215556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be74ffeab5ef9%3A0x4c479259f48baf1e!2zRHIuIEphZ2Rpc2ggU2luZ2ggQ2hhcmFuICjwnZWK8J2VofCdlZrwnZWf8J2VliDwnZWK8J2VpvCdlaPwnZWY8J2VlvCdlaDwnZWfKV8gQWdhc3R5YSAo4KSF4KSX4KS44KWN4KSk4KWN4KSvICkgU3BpbmUgYW5kIE9ydGhvIEFhcm9neWFt!5e1!3m2!1sen!2sin!4v1751885874907!5m2!1sen!2sin" 
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
 
 
 
    </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        {/* Bottom Row */}
        <div className="flex  gap-2 flex-col md:flex-row items-center justify-between  text-sm">
          <span className="text-gray-500  dark:text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} <Link href="/" className="hover:underline">Agastya Spine & Ortho Aarogy</Link>. All Rights Reserved.
          </span>
<span className='lg:pr-50 sm:pl-0'> <a href='https://seocialmedia.in/' target='_blank' className='flex gap-1.5'><SiSocialblade className='size-[20px]' /> Powered by <span className='font-bold text-green-400 underline'> SEOcial Media Solutions</span></a></span>
          <span className="flex space-x-4">
            <Link href="#" className="hover:text-blue-600"><BsFacebook size={20} /></Link>
            <Link href="#" className="hover:text-pink-600"><BsInstagram size={20} /></Link>
             
          </span>
        </div>
      </div>
    </footer>
  );
}
