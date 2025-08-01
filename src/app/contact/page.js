 import Contact from '@/components/Contact'
import React from 'react'
 // Static metadata
export const metadata = {
  title: "Contact Dr Jagdish Singh Charan | Orthopedic & Spine Surgeon in Ajmer",
  description:
    "Contact Dr. Jagdish Singh Charan, leading Orthopedic and Spine Surgeon in Ajmer. Book appointments or inquire about advanced bone, joint, and spine treatments today.",
  keywords:
    "Contact Dr Jagdish Singh Charan, Orthopedic Surgeon Ajmer, Spine Surgeon Ajmer, Book Appointment Ajmer, Bone Specialist Contact Ajmer, Best Orthopedic Doctor Ajmer",
  openGraph: {
    title: "Contact Dr Jagdish Singh Charan | Orthopedic & Spine Surgeon in Ajmer",
    description:
      "Reach out to Dr. Jagdish Singh Charan for appointments and consultations regarding orthopedic and spine treatments in Ajmer.",
    images: [
      {
        url: "https://drjagdishsinghcharan.vercel.app/images/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Dr Jagdish Singh Charan Orthopedic and Spine Surgeon",
      },
    ],
    type: "website",
    url: "https://drjagdishsinghcharan.vercel.app/contact",
  },
  alternates: {
    canonical: "https://drjagdishsinghcharan.vercel.app/contact",
  },
};

 function Contactpage() {
   return (
     <div>
       <Contact/>
     </div>
   )
 }
 
 export default Contactpage
 