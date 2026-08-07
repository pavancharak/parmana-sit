export default function Hero() {
  return (
    <section className="bg-white">
      <div className="container min-h-[90vh] flex items-center">
        <div className="max-w-5xl">

          <p className="label">
            THE AI AGENT ERA
          </p>

          <h1 className="heading-xl mt-8">
            AI Agents Are
            <br />
            Changing How
            <br />
            The Internet Executes.
          </h1>

          <div className="mt-14 max-w-3xl space-y-8">

            <p className="body">
              For decades, the internet connected people with information.
            </p>

            <p className="body">
              AI agents are transforming it into a network of autonomous execution.
            </p>

            <p className="body">
              Every execution changes the state of a business system.
            </p>

            <p className="body highlight text-2xl">
              Organizations need a way to ensure that only authorized actions execute.
            </p>

          </div>

          <div className="mt-16 flex gap-4">
            <a
              href="/why"
              className="rounded-md bg-neutral-900 px-6 py-3 text-white transition hover:bg-neutral-800"
            >
              Why It Matters
            </a>

            <a
              href="/architecture"
              className="rounded-md border border-neutral-300 px-6 py-3 transition hover:border-neutral-900"
            >
              Architecture
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}