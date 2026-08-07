export default function WhyNotEnough() {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-32">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Existing Controls
          </p>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-neutral-900">
            Existing Controls Weren't Designed For Autonomous Execution.
          </h2>

          <div className="mt-12 space-y-8 text-xl leading-9 text-neutral-600">
            <p>
              Identity verifies who is making a request.
            </p>

            <p>
              Security protects systems from compromise.
            </p>

            <p>
              Monitoring tells you what has already happened.
            </p>

            <p>
              AI safety techniques aim to improve AI behaviour.
            </p>

            <p>
              Every one of these controls is important.
            </p>

            <p className="text-2xl font-semibold text-neutral-900">
              But none of them independently answers one question.
            </p>

            <p className="text-4xl font-bold leading-tight text-neutral-900">
              Should this action be allowed to execute?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}