"use client";

import { motion } from "framer-motion";

export default function ConnectionLines() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1400 600"
      preserveAspectRatio="none"
    >
      {/* ---------- Incoming ---------- */}

      <path
        d="M280 110 C430 110 500 220 650 300"
        stroke="#d4d4d4"
        strokeWidth="2"
        fill="none"
      />

      <path
        d="M280 220 C430 220 500 260 650 300"
        stroke="#d4d4d4"
        strokeWidth="2"
        fill="none"
      />

      <path
        d="M280 330 C430 330 500 340 650 300"
        stroke="#d4d4d4"
        strokeWidth="2"
        fill="none"
      />

      <path
        d="M280 440 C430 440 500 380 650 300"
        stroke="#d4d4d4"
        strokeWidth="2"
        fill="none"
      />

      {/* ---------- Outgoing ---------- */}

      <path
        d="M750 300 C900 220 980 110 1120 110"
        stroke="#d4d4d4"
        strokeWidth="2"
        fill="none"
      />

      <path
        d="M750 300 C900 260 980 220 1120 220"
        stroke="#d4d4d4"
        strokeWidth="2"
        fill="none"
      />

      <path
        d="M750 300 C900 340 980 330 1120 330"
        stroke="#d4d4d4"
        strokeWidth="2"
        fill="none"
      />

      <path
        d="M750 300 C900 420 980 440 1120 440"
        stroke="#d4d4d4"
        strokeWidth="2"
        fill="none"
      />

      {/* ---------- Animated Packet ---------- */}

      <motion.circle
        r="7"
        fill="#000"
      >
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          path="M280 110 C430 110 500 220 650 300 C900 220 980 110 1120 110"
        />
      </motion.circle>

      {/* ---------- Glow ---------- */}

      <motion.circle
        r="14"
        fill="rgba(0,0,0,.12)"
      >
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          path="M280 110 C430 110 500 220 650 300 C900 220 980 110 1120 110"
        />
      </motion.circle>
    </svg>
  );
}