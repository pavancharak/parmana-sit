export default function Hero() {
  return (
    <section>
      <div>
        <div>
          <span className="text-sm font-medium tracking-[0.2em] text-neutral-500">
            EXECUTION AUTHORIZATION INFRASTRUCTURE
          </span>

          <h1 className="mt-8 text-5xl font-semibold tracking-tight text-neutral-900 md:text-6xl lg:text-7xl">
            AI can execute on your systems. You remain accountable for what it
            does.
          </h1>

          <div className="mt-10 max-w-4xl">
            <p className="text-xl leading-9 text-neutral-700">
              If AI agents can execute without your authorization, you have
              accountability without authority. Parmana ensures your authority
              determines what gets executed not the AI agent.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="/why"
              className="inline-flex h-12 items-center justify-center rounded-md bg-black px-8 text-sm font-medium !text-white transition-colors duration-200 hover:bg-neutral-800"
            >
              Retain Your Authority Over AI Execution
            </a>

            <a
              href="/architecture"
              className="inline-flex h-12 items-center justify-center rounded-md border border-neutral-300 bg-white px-8 text-sm font-medium text-neutral-900 transition-colors duration-200 hover:border-black hover:bg-neutral-50"
            >
              Explore Architecture
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}