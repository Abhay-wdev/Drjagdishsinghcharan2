 import EndoscopicSpine from '@/components/EndoscopicSpine'
import React from 'react'
 
// Static metadata
export const metadata = {
  title: "Top Endoscopic Spine & Arthroscopic Surgery in Ajmer | Dr Jagdish Singh Charan",
  description:
    "Consult Dr. Jagdish Singh Charan in Ajmer for advanced endoscopic spine and arthroscopic surgeries, offering minimally invasive treatments for faster recovery and effective orthopedic care.",
  keywords:
    "Endoscopic Spine Surgery Ajmer, Arthroscopic Surgery Ajmer, Minimally Invasive Spine Surgery, Orthopedic Surgeon Ajmer, Dr Jagdish Singh Charan, Best Spine Surgeon Ajmer, Joint Surgery Ajmer",
  openGraph: {
    title: "Endoscopic Spine & Arthroscopic Surgery in Ajmer | Dr Jagdish Singh Charan",
    description:
      "Get expert endoscopic spine and arthroscopic surgeries in Ajmer by Dr. Jagdish Singh Charan for advanced, minimally invasive orthopedic treatments.",
    images: [
      {
        url: "https://drjagdishsinghcharan.vercel.app/images/endoscopic-arthroscopic-og.jpg",
        width: 1200,
        height: 630,
        alt: "Endoscopic Spine and Arthroscopic Surgery by Dr Jagdish Singh Charan",
      },
    ],
    type: "website",
    url: "https://drjagdishsinghcharan.vercel.app/services/endoscopic-spine-orthroscopic-surgery",
  },
  alternates: {
    canonical: "https://drjagdishsinghcharan.vercel.app/services/endoscopic-spine-orthroscopic-surgery",
  },
};


 function EndoscopicSpinepage() {
   return (
     <div>
       <EndoscopicSpine/>
     </div>
   )
 }
 
 export default EndoscopicSpinepage
 