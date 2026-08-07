import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Section from "@/components/section";

export default function DeterministicPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-white">
          <div className="container section">
            <div className="max-w-5xl">
              <p className="label">
                Deterministic Authorization
              </p>

              <h1 className="heading-xl mt-6">
                Execution Requires
                <br />
                Deterministic Decisions.
              </h1>

              <p className="body mt-12">
                As AI agents become capable of autonomous execution,
                organizations need more than confidence.
              </p>

              <p className="body">
                They need deterministic authorization before business actions
                execute.
              </p>

              <p className="body highlight">
                Every execution request must produce a definitive decision.
              </p>
            </div>
          </div>
        </section>

        <Section
          label="AI"
          title="AI Behavior Is Probabilistic."
        >
          <p className="body">
            AI models generate outputs based on probabilities.
          </p>

          <p className="body">
            Their responses improve with better models, prompts, context,
            and training.
          </p>

          <p className="body">
            This makes AI extremely capable.
          </p>

          <p className="body highlight">
            It does not make every execution decision deterministic.
          </p>
        </Section>

        <Section
          background="gray"
          label="Authorization"
          title="Execution Requires Deterministic Authorization."
        >
          <p className="body">
            Every execution request should produce one outcome.
          </p>

          <p className="body">
            Authorized.
          </p>

          <p className="body">
            Or unauthorized.
          </p>

          <p className="body highlight">
            Nothing in between.
          </p>
        </Section>

        <Section
          label="Independent"
          title="Independent Of AI Intelligence."
        >
          <p className="body">
            Authorization should not depend on which AI model generated the
            request.
          </p>

          <p className="body">
            It should not depend on prompts, reasoning quality, or model
            capability.
          </p>

          <p className="body highlight">
            Authorization should depend on organizational policy.
          </p>
        </Section>

        <Section
          background="gray"
          label="The Principle"
          title="One Request. One Deterministic Decision."
        >
          <h3 className="text-4xl font-semibold tracking-tight">
            Authorized → Execute
          </h3>

          <h3 className="mt-6 text-4xl font-semibold tracking-tight">
            Unauthorized → Block
          </h3>
        </Section>
      </main>

      <Footer />
    </>
  );
}