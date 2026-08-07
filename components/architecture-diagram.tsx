"use client";

import {
  Bot,
  UserRound,
  AppWindow,
  ShieldAlert,
  CreditCard,
  Users,
  Building2,
  KeyRound,
  Server,
  Database,
  ShieldCheck,
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
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="label">
            EXECUTION AUTHORIZATION FLOW
          </p>

          <h2 className="heading-lg mt-6">
            Every Execution Request
            <br />
            Passes Through Parmana
          </h2>

          <p className="body mx-auto mt-8 max-w-3xl">
            Every execution request is evaluated against organizational policy
            before it reaches protected business systems.
          </p>
        </div>

        <div className="grid grid-cols-[300px_1fr_300px] items-center gap-16">

          {/* Sources */}

          <div className="space-y-4">

            <p className="label mb-4">
              EXECUTION REQUESTS
            </p>

            {sources.map(({ name, icon: Icon }) => (

              <div
                key={name}
                className="flex h-20 items-center gap-4 rounded-2xl border border-neutral-200 bg-white px-6 shadow-sm transition hover:-translate-y-1 hover:border-black hover:shadow-lg"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100">
                  <Icon size={24} strokeWidth={1.75} />
                </div>

                <div>
                  <div className="font-semibold text-neutral-900">
                    {name}
                  </div>

                  <div className="text-sm text-neutral-500">
                    Execution Request
                  </div>
                </div>

              </div>

            ))}

          </div>

          {/* Parmana */}

          <div className="flex justify-center">

            <div className="w-full max-w-md rounded-[36px] bg-black px-12 py-12 text-center text-white shadow-2xl">

              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/10">

                <ShieldCheck
                  size={48}
                  strokeWidth={1.5}
                />

              </div>

              <h3 className="mt-8 text-4xl font-semibold">
                Parmana
              </h3>

              <p className="mt-3 text-neutral-300">
                Execution Authorization Layer
              </p>

              <div className="mt-8 inline-flex rounded-full bg-white/10 px-5 py-2 text-sm">
                Evaluating Organizational Policy
              </div>

              <div className="mt-10 space-y-3 text-left">

                <div className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3">
                  <span className="text-neutral-300">
                    Request
                  </span>

                  <span className="font-medium">
                    Evaluate
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3">
                  <span className="text-neutral-300">
                    Policy
                  </span>

                  <span className="font-medium">
                    Organizational
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-emerald-600/20 px-4 py-3">
                  <span>
                    Decision
                  </span>

                  <span className="font-semibold text-emerald-300">
                    Authorized
                  </span>
                </div>

              </div>

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

            </div>

          </div>

          {/* Business Systems */}

          <div className="space-y-4">

            <p className="label mb-4">
              PROTECTED BUSINESS SYSTEMS
            </p>

            {systems.map(({ name, icon: Icon }) => (

              <div
                key={name}
                className="flex h-20 items-center gap-4 rounded-2xl border border-neutral-200 bg-white px-6 shadow-sm transition hover:-translate-y-1 hover:border-black hover:shadow-lg"
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
    </section>
  );
}