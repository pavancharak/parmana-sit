export default function ArchitectureDiagram() {
  const sources = ["AI Agent", "Human", "Application", "Attacker"];

  const systems = [
    "Payments",
    "CRM",
    "ERP",
    "Identity",
    "Infrastructure",
    "Databases",
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Sources */}

        <div className="text-center">
          <p className="label mb-8">
            EXECUTION SOURCES
          </p>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {sources.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-neutral-200 bg-white py-8 text-lg font-semibold shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Connector */}

        <div className="flex flex-col items-center py-14">
          <div className="h-16 w-px bg-neutral-300" />
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            className="text-neutral-600"
          >
            <path d="M12 22L5 11h14L12 22Z" fill="currentColor" />
          </svg>
        </div>

        {/* Parmana */}

        <div className="text-center">

          <p className="label mb-8">
            AUTHORIZATION LAYER
          </p>

          <div className="mx-auto max-w-2xl rounded-[32px] bg-black px-16 py-14 text-white shadow-2xl">

            <h3 className="text-5xl font-semibold">
              Parmana
            </h3>

            <p className="mt-5 text-xl text-neutral-300">
              Execution Authorization Infrastructure
            </p>

            <div className="mt-10 flex justify-center gap-3 flex-wrap">

              <span className="rounded-full border border-neutral-700 px-4 py-2 text-sm">
                Deterministic
              </span>

              <span className="rounded-full border border-neutral-700 px-4 py-2 text-sm">
                Policy Driven
              </span>

              <span className="rounded-full border border-neutral-700 px-4 py-2 text-sm">
                Independent of AI
              </span>

            </div>

          </div>

        </div>

        {/* Connector */}

        <div className="flex flex-col items-center py-14">
          <div className="h-16 w-px bg-neutral-300" />
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            className="text-neutral-600"
          >
            <path d="M12 22L5 11h14L12 22Z" fill="currentColor" />
          </svg>
        </div>

        {/* Business Systems */}

        <div className="text-center">

          <p className="label mb-8">
            BUSINESS SYSTEMS
          </p>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            {systems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-neutral-200 bg-white py-8 text-lg font-medium shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                {item}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}