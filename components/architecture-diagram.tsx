"use client";

import {
  AppWindow,
  Bot,
  Building2,
  CreditCard,
  Database,
  KeyRound,
  Server,
  ShieldAlert,
  ShieldCheck,
  UserRound,
  Users,
} from "lucide-react";

const sources = [
  { name: "AI Agent", icon: Bot },
  { name: "Human", icon: UserRound },
  { name: "Application", icon: AppWindow },
  { name: "Attacker", icon: ShieldAlert },
];

const systems = [
  { name: "Payments", icon: CreditCard },
  { name: "CRM", icon: Users },
  { name: "ERP", icon: Building2 },
  { name: "Identity", icon: KeyRound },
  { name: "Infrastructure", icon: Server },
  { name: "Database", icon: Database },
];

export default function ArchitectureDiagram() {
  return (
    <section className="bg-white pt-36 pb-24">
      <div className="mx-auto max-w-7xl px-8">

        {/* Header */}

        <div className="mb-20 text-center">

          <p className="label">
            ARCHITECTURE
          </p>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-neutral-900 md:text-6xl">
            Where Parmana Fits
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
            Parmana sits between every execution request and your protected
            business systems, ensuring that only organizationally authorized
            actions execute.
          </p>

        </div>

        {/* Diagram */}

        <div className="grid gap-14 lg:grid-cols-[320px_1fr_320px] lg:items-center">

          {/* LEFT */}

          <div>

            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Execution Requests
            </h3>

            <div className="space-y-4">

              {sources.map(({ name, icon: Icon }) => (

                <div
                  key={name}
                  className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-lg"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100">
                    <Icon size={24} strokeWidth={1.75} />
                  </div>

                  <div>

                    <div className="font-semibold text-neutral-900">
                      {name}
                    </div>

                    <div className="text-sm text-neutral-500">
                      Requests Execution
                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* CENTER */}

          <div className="flex justify-center">

            <div className="w-full max-w-md rounded-[32px] bg-black p-10 text-white shadow-2xl">

              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/10">

                <ShieldCheck
                  size={46}
                  strokeWidth={1.5}
                />

              </div>

              <h2 className="mt-8 text-center text-4xl font-semibold">
                Parmana
              </h2>

              <p className="mt-3 text-center text-neutral-300">
                Execution Authorization Layer
              </p>

              <div className="mt-8 rounded-xl bg-white/5 p-5">

                <div className="flex items-center justify-between py-2">

                  <span className="text-neutral-400">
                    Request
                  </span>

                  <span className="font-medium">
                    Evaluate
                  </span>

                </div>

                <div className="flex items-center justify-between py-2">

                  <span className="text-neutral-400">
                    Policy
                  </span>

                  <span className="font-medium">
                    Organizational
                  </span>

                </div>

                <div className="mt-4 rounded-lg bg-emerald-500/20 px-4 py-3 text-center font-semibold text-emerald-300">
                  ✓ Authorized to Execute
                </div>

              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-2">

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

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Protected Business Systems
            </h3>

            <div className="space-y-4">

              {systems.map(({ name, icon: Icon }) => (

                <div
                  key={name}
                  className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-lg"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>

                  <div>

                    <div className="font-semibold text-neutral-900">
                      {name}
                    </div>

                    <div className="text-sm text-neutral-500">
                      Protected Resource
                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}