export default function Hero() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="container py-28">
        <div className="max-w-5xl">
          <p className="label">
            EXECUTION AUTHORIZATION INFRASTRUCTURE
          </p>

          <h1 className="mt-8 text-6xl font-semibold tracking-tight text-neutral-900 md:text-7xl">
            Unauthorized
            <br />
            Execution Is Becoming
            <br />
            The Internet&apos;s Next Risk.
          </h1>

          <div className="mt-12 max-w-2xl space-y-6">
            <p className="body">
              AI agents are transforming the internet from a network of
              information into a network of autonomous execution.
            </p>

            <p className="body">
              Every execution request has the potential to change the state of
              a business system.
            </p>

            <p className="text-xl font-semibold leading-9 text-neutral-900">
              Organizations need a way to ensure that only authorized actions
              execute.
            </p>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-4">
            <a
              href="/why"
              className="inline-flex h-12 items-center justify-center rounded-md px-8 text-sm font-medium transition-colors duration-200"
              style={{
                backgroundColor: "#000",
                color: "#fff",
              }}
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