export default function Hero() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-5xl">
          <p className="text-sm font-medium tracking-widest text-neutral-500">
            EXECUTION AUTHORIZATION INFRASTRUCTURE
          </p>

          <h1 className="mt-8 text-5xl font-semibold tracking-tight text-neutral-900 md:text-6xl lg:text-7xl">
            Can you confidently say that no internal or external AI agent can
            execute an unauthorized action on your business systems—and
            ultimately put your customers at risk?
          </h1>

          <div className="mt-12 max-w-4xl space-y-6">
            <p className="text-2xl font-medium leading-10 text-neutral-900">
              If you can't, your customers can't fully trust your systems.
              And if they can't trust your systems, they can't trust your
              business.
            </p>

            <p className="text-xl leading-9 text-neutral-700">
              AI Has Intelligence. Your Institution Has Authority.
            </p>

            <p className="text-xl font-medium leading-9 text-neutral-900">
              No matter what happens to the AI, your institution's authority
              determines what gets executed—not the AI agent.
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