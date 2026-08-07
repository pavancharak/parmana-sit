import Link from "next/link";
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
  ArrowRight,
  ChevronLeft,
  ShieldCheck,
} from "lucide-react";

export default function ArchitectureDiagram() {
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
    { name: "Databases", icon: Database },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Back */}

        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition hover:text-black"
        >
          <ChevronLeft size={16} />
          Back to Home
        </Link>

        {/* Header */}

        <div className="mb-16 text-center">

          <p className="label">
            ARCHITECTURE
          </p>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-6xl">
            Where Parmana Fits
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
            Parmana sits between every execution request and your systems of
record, ensuring that only institutionally authorized actions
execute.
          </p>

        </div>

        {/* Diagram */}

        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-12">

          {/* Sources */}

          <div>

            <p className="label mb-6">
              EXECUTION SOURCES
            </p>

            <div className="space-y-4">

              {sources.map(({ name, icon: Icon }) => (

                <div
                  key={name}
                  className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100">
                    <Icon size={24} />
                  </div>

                  <div>

                    <div className="font-semibold">
                      {name}
                    </div>

                    <div className="text-sm text-neutral-500">
                      Initiates Execution Request
                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Parmana */}

          <div className="flex flex-col items-center">

            <ArrowRight
              size={36}
              className="mb-8 text-neutral-300"
            />

            <div className="w-[440px] rounded-[36px] bg-black px-10 py-12 text-white shadow-2xl">

              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/10">

                <ShieldCheck size={46} />

              </div>

              <h2 className="mt-8 text-center text-4xl font-semibold">
                Parmana
              </h2>

              <p className="mt-3 text-center text-neutral-300">
                Human Authority Infrastructure
              </p>

              <div className="mt-8 rounded-2xl bg-white/5 p-6">

                <div className="flex justify-between py-2">
  <span className="text-neutral-400">
    Execution Request
  </span>

  <span>
    Receive
  </span>
</div>

<div className="flex justify-between py-2">
  <span className="text-neutral-400">
    Organizational Authority
  </span>

  <span>
    Evaluate
  </span>
</div>

<div className="mt-4 rounded-xl bg-emerald-500/20 px-4 py-3 text-center font-semibold text-emerald-300">
  ✓ Authorized to Execute
</div>

              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-2">

                               <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs">
                  Authority Driven
                </span>

                <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs">
                  Vendor & Model Agnostic
                </span>

              </div>

            </div>

            <ArrowRight
              size={36}
              className="mt-8 text-neutral-300"
            />

          </div>

          {/* SYSTEMS OF RECORD */}

          <div>

            <p className="label mb-6">
              SYSTEMS OF RECORD
            </p>

            <div className="space-y-4">

              {systems.map(({ name, icon: Icon }) => (

                <div
                  key={name}
                  className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100">
                    <Icon size={24} />
                  </div>

                  <div>

                    <div className="font-semibold">
                      {name}
                    </div>

                    <div className="text-sm text-neutral-500">
                      Authority Enforcement Point
                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="mt-20 rounded-3xl border border-neutral-200 bg-neutral-50 p-10 text-center">

          <h3 className="text-3xl font-semibold">
            Authority remains with the institution.
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-neutral-600">
Execution requests may originate from AI agents, people, applications,
or attackers. Parmana ensures organizational authority determines
what is actually allowed to execute before any action reaches systems
of record.
          </p>

        </div>

      </div>
    </section>
  );
}