import Section from "./section";

export default function Problem() {
  return (
    <Section
      label="The Problem"
      title="Every AI Agent Can Become An Execution Endpoint."
    >
      <p className="body">
        AI agents no longer stop at generating information.
      </p>

      <p className="body">
        They can initiate payments, deploy software,
        modify customer records, provision infrastructure,
        and execute business workflows.
      </p>

      <p className="body">
        Every execution request has the potential to
        change the state of a business system.
      </p>

      <p className="body">
        It doesn't matter whether the request originates
        from an AI agent, a human, an application, or
        a malicious attacker.
      </p>

      <p className="body highlight">
        The question is always the same.
      </p>

      <h3 className="text-4xl font-semibold tracking-tight">
        Should this action be allowed to execute?
      </h3>
    </Section>
  );
}