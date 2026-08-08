export default function Hero() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="container py-28">
        <div className="max-w-5xl">
          <p className="label">
            EXECUTION AUTHORIZATION INFRASTRUCTURE
          </p>

          <h1 className="mt-8 text-6xl font-semibold tracking-tight text-neutral-900 md:text-7xl">
            AI Has Intelligence.
            <br />
            Your Institution Has Authority.
          </h1>

          <div className="mt-12 max-w-3xl space-y-6">
            <p className="text-2xl leading-10 text-neutral-700">
              Parmana ensures your institution does not lose authority to AI
              agents.
            </p>

            <p className="text-xl font-medium leading-9 text-neutral-900">
              No matter what happens to the AI, your institution's
              authority determines what gets executed not the AI agent.
            </p>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-4">
            <a
              href="/why"
              className="inline-flex h-12 items-center justify-center rounded-md bg-black px-8 text-sm font-medium !text-white transition-colors duration-200 hover:bg-neutral-800"
            >
              Why It Matters
            </a>

            <a
              href="/architecture"
              className="inline-flex h-12 items-center justify-center rounded-md border border-neutral-300 bg-white px-8 text-sm font-medium text-neutral-900 transition-colors duration-200 hover:border-black hover:bg-neutral-50"
            >
              Architecture
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}