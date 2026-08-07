"use client";

import { ShieldCheck, LoaderCircle, ShieldX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Status = "checking" | "authorized" | "blocked";

interface Props {
  status: Status;
}

export default function ParmanaCard({ status }: Props) {
  return (
    <motion.div
      layout
      className="w-[420px] rounded-[36px] bg-black px-12 py-12 text-center text-white shadow-2xl"
    >
      <motion.div
        animate={{
          scale: status === "checking" ? [1, 1.08, 1] : 1,
        }}
        transition={{
          duration: 1,
          repeat: status === "checking" ? Infinity : 0,
        }}
        className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/5"
      >
        {status === "checking" && (
          <LoaderCircle
            size={48}
            className="animate-spin"
            strokeWidth={1.5}
          />
        )}

        {status === "authorized" && (
          <ShieldCheck
            size={48}
            strokeWidth={1.5}
          />
        )}

        {status === "blocked" && (
          <ShieldX
            size={48}
            strokeWidth={1.5}
          />
        )}
      </motion.div>

      <h2 className="mt-8 text-4xl font-semibold">
        Parmana
      </h2>

      <p className="mt-3 text-lg text-neutral-300">
        Execution Authorization Infrastructure
      </p>

      <AnimatePresence mode="wait">

        {status === "checking" && (

          <motion.div
            key="checking"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-8 inline-flex rounded-full bg-white/10 px-5 py-2 text-sm"
          >
            Checking Policy...
          </motion.div>

        )}

        {status === "authorized" && (

          <motion.div
            key="authorized"
            initial={{ scale: .8 }}
            animate={{ scale: 1 }}
            exit={{ opacity: 0 }}
            className="mt-8 inline-flex rounded-full bg-emerald-600 px-5 py-2 text-sm font-medium"
          >
            ✓ Authorized
          </motion.div>

        )}

        {status === "blocked" && (

          <motion.div
            key="blocked"
            initial={{ scale: .8 }}
            animate={{ scale: 1 }}
            exit={{ opacity: 0 }}
            className="mt-8 inline-flex rounded-full bg-red-600 px-5 py-2 text-sm font-medium"
          >
            ✕ Blocked
          </motion.div>

        )}

      </AnimatePresence>

      <div className="mt-10 flex flex-wrap justify-center gap-2">

        <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs">
          Deterministic
        </span>

        <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs">
          Policy Driven
        </span>

        <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs">
          Independent of AI
        </span>

      </div>
    </motion.div>
  );
}