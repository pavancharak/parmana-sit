export default function Hero() {
  return (
    <section className="bg-white">
      <div className="container min-h-[90vh] flex items-center">
        <div className="max-w-4xl">

          <p className="label">
            EXECUTION AUTHORIZATION INFRASTRUCTURE
          </p>

          <h1 className="heading-xl mt-8">
            Unauthorized
            <br />
            Execution Is Becoming
            <br />
            The Internet's Next Risk.
          </h1>

          <div className="mt-12 max-w-2xl space-y-6">

            <p className="body">
              AI agents are transforming the internet from a network of information into a network of autonomous execution.
            </p>

            <p className="body">
              Every execution request has the potential to change a business system.
            </p>

            <p className="body highlight">
              Organizations need a way to ensure that only authorized actions execute.
            </p>

          </div>

          <div className="mt-14 flex gap-4">
            <a
              href="/why"
              className="rounded-md bg-neutral-900 px-6 py-3 text-white hover:bg-neutral-800 transition"
            >
              Why It Matters
            </a>

            <a
              href="/architecture"
              className="rounded-md border border-neutral-300 px-6 py-3 hover:border-neutral-900 transition"
            >
              Architecture
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}