export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex min-h-[80vh] max-w-6xl items-center px-6">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            The AI Agent Era
          </p>

          <h1 className="mt-6 text-6xl font-bold tracking-tight text-neutral-900 md:text-7xl">
            AI Agents Are Changing
            <br />
            How The Internet Works.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-600">
            For decades, the internet connected people with information.
          </p>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-neutral-600">
            AI agents are transforming it into a network where software can
            autonomously execute business actions.
          </p>

          <p className="mt-6 max-w-3xl text-xl leading-9 font-medium text-neutral-900">
            That changes everything.
          </p>

          <div className="mt-12 flex gap-4">
            <a
              href="/why"
              className="rounded-md bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
            >
              Why It Matters
            </a>

            <a
              href="/execution"
              className="rounded-md border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 hover:border-neutral-900"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}