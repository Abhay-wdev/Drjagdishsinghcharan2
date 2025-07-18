"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt, FaComments } from "react-icons/fa";
import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";

export default function FloatingContactIcons() {
  const [showExtraMessages, setShowExtraMessages] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [iconsVisible, setIconsVisible] = useState({ icon1: false, icon2: false });

  const handleClick = () => {
    setShowExtraMessages(!showExtraMessages);
    setIconsVisible({ icon1: false, icon2: false });
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end space-y-2 z-50">
      <AnimatePresence>
        {showExtraMessages && (
          <>
            {/* WhatsApp Icon */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              onAnimationComplete={() =>
                setIconsVisible((prev) => ({ ...prev, icon1: true }))
              }
              onMouseEnter={() =>
                iconsVisible.icon1 && setHoveredIcon("icon1")
              }
              onMouseLeave={() => setHoveredIcon(null)}
              className="relative flex items-center"
            >
              <AnimatePresence>
                {hoveredIcon === "icon1" && iconsVisible.icon1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-full mr-2 bg-gray-800 text-white px-2 py-1 rounded shadow flex items-center whitespace-nowrap"
                  >
                    WhatsApp Us for Instant Support
                  </motion.div>
                )}
              </AnimatePresence>
              <WhatsAppButton>
              <div className="bg-green-500 p-3 rounded-full shadow-lg cursor-pointer">
                <FaWhatsapp size={24} color="white" />
              </div>
              </WhatsAppButton>
            </motion.div>

            {/* Call Icon */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              onAnimationComplete={() =>
                setIconsVisible((prev) => ({ ...prev, icon2: true }))
              }
              onMouseEnter={() =>
                iconsVisible.icon2 && setHoveredIcon("icon2")
              }
              onMouseLeave={() => setHoveredIcon(null)}
              className="relative flex items-center"
            >
              <AnimatePresence>
                {hoveredIcon === "icon2" && iconsVisible.icon2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-full mr-2 bg-gray-800 text-white px-2 py-1 rounded shadow flex items-center whitespace-nowrap"
                  >
                    Call Us Now for Appointment
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="bg-blue-500 p-3 rounded-full shadow-lg cursor-pointer">
             <Link href="tel:+91 8003474733" >
             <FaPhoneAlt size={24} color="white" /></Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Click Me icon with fixed heartbeat ping */}
      <div className="relative flex items-center justify-center w-12 h-12" onClick={handleClick}>
        <span className="absolute inline-flex h-10 w-10 rounded-full border-2 border-green-400 opacity-75 animate-ping"></span>
        <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full cursor-pointer shadow-lg hover:scale-110 transition-transform">


         
        
          <FaComments size={24} color="white" />
        </div>
      </div>
    </div>
  );
}
