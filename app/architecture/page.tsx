export default function ArchitectureDiagram() {
  return (
    <div className="mt-16 rounded-3xl border border-neutral-200 bg-gradient-to-b from-white to-neutral-50 p-12">

      {/* Sources */}

      <div className="grid grid-cols-4 gap-6">

        {["AI Agent", "Human", "Application", "Attacker"].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="text-lg font-semibold text-neutral-900">
              {item}
            </div>
          </div>
        ))}

      </div>

      {/* Arrow */}

      <div className="my-10 flex justify-center">
        <div className="flex flex-col items-center">
          <div className="h-12 w-px bg-neutral-300" />
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 22L4 12h16L12 22z"
              fill="#171717"
            />
          </svg>
        </div>
      </div>

      {/* Parmana */}

      <div className="mx-auto max-w-xl rounded-3xl bg-black p-10 text-center text-white shadow-2xl">

        <div className="text-3xl font-semibold">
          Parmana
        </div>

        <div className="mt-3 text-neutral-300">
          Execution Authorization Infrastructure
        </div>

      </div>

      {/* Arrow */}

      <div className="my-10 flex justify-center">
        <div className="flex flex-col items-center">
          <div className="h-12 w-px bg-neutral-300" />
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 22L4 12h16L12 22z"
              fill="#171717"
            />
          </svg>
        </div>
      </div>

      {/* Business Systems */}

      <div className="grid grid-cols-3 gap-6">

        {[
          "Payments",
          "CRM",
          "ERP",
          "Identity",
          "Infrastructure",
          "Databases",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm"
          >
            <div className="font-medium text-neutral-900">
              {item}
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}