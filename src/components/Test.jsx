'use client';

import React, { useRef } from "react";

const Test = () => {
  const cardRef = useRef(null);
  const overlayRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const overlay = overlayRef.current;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // X within card
    const y = e.clientY - rect.top;  // Y within card

    overlay.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0,131,141,0.3) 0%, transparent 80%)`;
    overlay.style.opacity = 1;
  };

  const handleMouseLeave = () => {
    const overlay = overlayRef.current;
    overlay.style.opacity = 0;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="card1 relative overflow-hidden rounded-md transition-all duration-500 ease-in-out bg-[#f2f8f9] max-w-xs p-8 m-4 text-decoration-none z-0"
      >
        {/* Overlay radial effect */}
        <span
          ref={overlayRef}
          className="pointer-events-none absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out opacity-0"
        ></span>

        {/* Card content */}
        <h3 className="text-lg font-semibold mb-2 text-gray-800">AGASTYA</h3>
        <p className="text-sm text-gray-600">SPINE & ORTHO AAROGY</p>

        {/* Go corner */}
        <div className="go-corner">
          <div className="go-arrow">→</div>
        </div>

        {/* Inline CSS for Uiverse card effect */}
        <style jsx>{`
          .card1 {
            position: relative;
            background-color: #f2f8f9;
            border-radius: 4px;
            text-decoration: none;
            overflow: hidden;
          }

          .card1:before {
            content: "";
            position: absolute;
            z-index: -1;
            top: -16px;
            right: -16px;
            background: #00838d;
            height: 32px;
            width: 32px;
            border-radius: 32px;
            transform: scale(1);
            transform-origin: 50% 50%;
            transition: transform 0.25s ease-out;
          }

          .card1:hover:before {
            transform: scale(21);
          }

          .card1:hover p {
            transition: all 0.3s ease-out;
            color: rgba(255, 255, 255, 0.8);
          }

          .card1:hover h3 {
            transition: all 0.3s ease-out;
            color: #fff;
          }

          .go-corner {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            width: 32px;
            height: 32px;
            overflow: hidden;
            top: 0;
            right: 0;
            background-color: #00838d;
            border-radius: 0 4px 0 32px;
          }

          .go-arrow {
            margin-top: -4px;
            margin-right: -4px;
            color: white;
            font-family: courier, sans;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Test;
