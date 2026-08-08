export default function Hero() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-5xl">
          <p className="text-sm font-medium tracking-widest text-neutral-500">
            EXECUTION AUTHORIZATION INFRASTRUCTURE
          </p>

          <h1 className="mt-8 text-5xl font-semibold tracking-tight text-neutral-900 md:text-6xl lg:text-7xl">
            If you can't control what AI agents can execute on your systems,
            you risk losing your customers.
          </h1>

          <div className="mt-10 max-w-3xl">
            <p className="text-xl leading-9 text-neutral-700">
              Parmana ensures your authority determines what gets
              executed—not the AI agent.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="/why"
              className="inline-flex h-12 items-center justify-center rounded-md bg-black px-8 text-sm font-medium !text-white transition-colors duration-200 hover:bg-neutral-800"
            >
              See How Parmana Works
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