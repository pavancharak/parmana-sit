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
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-10">

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
                  <Icon size={28} strokeWidth={1.6} />
                  <span className="text-lg font-semibold">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Parmana */}

          <div className="flex flex-col items-center">

            <ArrowRight
              size={36}
              strokeWidth={1.5}
              className="mb-8 text-neutral-400"
            />

            <div className="w-[420px] rounded-[32px] bg-black px-10 py-12 text-center text-white shadow-2xl">

              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
                <div className="text-4xl font-bold">P</div>
              </div>

              <h2 className="text-4xl font-semibold">
                Parmana
              </h2>

              <p className="mt-3 text-neutral-300">
                Execution Authorization Infrastructure
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-2">

                <span className="rounded-full border border-neutral-700 px-3 py-2 text-xs">
                  Deterministic
                </span>

                <span className="rounded-full border border-neutral-700 px-3 py-2 text-xs">
                  Policy Driven
                </span>

                <span className="rounded-full border border-neutral-700 px-3 py-2 text-xs">
                  Independent of AI
                </span>

              </div>

            </div>

            <ArrowRight
              size={36}
              strokeWidth={1.5}
              className="mt-8 text-neutral-400"
            />

          </div>

          {/* Business Systems */}

          <div>
            <p className="label mb-6">
              BUSINESS SYSTEMS
            </p>

            <div className="space-y-4">
              {systems.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <Icon size={28} strokeWidth={1.6} />
                  <span className="text-lg font-medium">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}