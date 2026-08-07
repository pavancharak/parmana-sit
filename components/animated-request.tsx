"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedRequest() {
  const [status, setStatus] = useState("Checking Policy...");

  useEffect(() => {
    const cycle = () => {
      setStatus("Checking Policy...");

      setTimeout(() => {
        setStatus("✓ Authorized");
      }, 1200);
    };

    cycle();

    const timer = setInterval(cycle, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Request Packet */}

      <motion.div
        className="absolute left-[22%] top-1/2 z-30 h-4 w-4 -translate-y-1/2 rounded-full bg-black shadow-xl"
        animate={{
          x: [0, 320, 650],
        }}
        transition={{
          duration: 4,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      {/* Parmana Status */}

      <motion.div
        className="absolute left-1/2 top-1/2 z-40 -translate-x-1/2 translate-y-24 rounded-full bg-white px-5 py-2 text-sm font-medium shadow-lg"
        key={status}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {status}
      </motion.div>
    </>
  );
}