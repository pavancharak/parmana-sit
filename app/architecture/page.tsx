import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Section from "@/components/section";

export default function ArchitecturePage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-white">
          <div className="container section">
            <div className="max-w-5xl">
              <p className="label">
                Architecture
              </p>

              <h1 className="heading-xl mt-6">
                The Missing Layer
                <br />
                Between AI Agents And Business Systems.
              </h1>

              <p className="body mt-12">
                AI agents can initiate execution requests.
              </p>

              <p className="body">
                Business systems execute those requests.
              </p>

              <p className="body highlight">
                Every execution request should be authorized before it reaches a
                business system.
              </p>
            </div>
          </div>
        </section>

        <Section
          label="The Architecture"
          title="Where Parmana Fits."
        >
          <pre className="overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-50 p-8 text-lg leading-8 text-neutral-800">
{`AI Agent
Human
Application
      │
      ▼
   Parmana
Execution Authorization
      │
      ▼
Business Systems`}
          </pre>
        </Section>

        <Section
          background="gray"
          label="Independent"
          title="Independent Of AI."
        >
          <p className="body">
            Parmana does not depend on a specific AI model.
          </p>

          <p className="body">
            It does not depend on a specific AI agent.
          </p>

          <p className="body">
            It does not depend on a specific application.
          </p>

          <p className="body highlight">
            It evaluates every execution request against organizational policy.
          </p>
        </Section>

        <Section
          label="Deterministic"
          title="One Request. One Decision."
        >
          <p className="body">
            Every execution request produces one deterministic outcome.
          </p>

          <div className="mt-12 rounded-xl border border-neutral-200 p-8">
            <div className="space-y-6">
              <div className="text-3xl font-semibold">
                ✓ Authorized → Execute
              </div>

              <div className="text-3xl font-semibold">
                ✕ Unauthorized → Block
              </div>
            </div>
          </div>
        </Section>

        <Section
          background="gray"
          label="Result"
          title="Execution Authority Remains With The Organization."
        >
          <p className="body">
            AI agents determine what they want to execute.
          </p>

          <p className="body">
            Organizational policy determines what is allowed to execute.
          </p>

          <p className="body highlight">
            Parmana ensures every execution request is evaluated before reaching
            your business systems.
          </p>
        </Section>
      </main>

      <Footer />
    </>
  );
}