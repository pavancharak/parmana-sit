"use client";

import { useEffect, useState } from "react";

const scenarios = [
  {
    source: "AI Agent",
    target: "Payments",
    status: "Authorized",
    allowed: true,
  },
  {
    source: "Human",
    target: "CRM",
    status: "Authorized",
    allowed: true,
  },
  {
    source: "Application",
    target: "ERP",
    status: "Authorized",
    allowed: true,
  },
  {
    source: "Attacker",
    target: "",
    status: "Blocked",
    allowed: false,
  },
];

export default function useExecutionSimulator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % scenarios.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return scenarios[index];
}