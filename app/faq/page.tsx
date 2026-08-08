import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const faqs = [
  {
    question: "What is Parmana?",
    answer:
      "Parmana is execution authorization infrastructure that ensures institutions don't lose authority to AI agents. It evaluates execution requests against institutional authority and policies before they reach business systems.",
  },
  {
    question: "Does Parmana control what an AI agent thinks or decides?",
    answer:
      "No. Parmana does not control the AI's reasoning. An AI agent can reason, make recommendations, and request actions. Parmana determines whether a requested action is authorized to execute.",
  },
  {
    question: "Why can't an AI agent simply follow its instructions?",
    answer:
      "Instructions are not the same as enforceable authority. An AI system can be misconfigured, manipulated, compromised, or behave unexpectedly. Parmana provides an independent authorization boundary so institutional authority does not depend on the AI behaving correctly.",
  },
  {
    question: "Does Parmana give AI agents authority?",
    answer:
      "No. AI agents can initiate execution requests, but initiating a request does not create authority. Institutional authority determines what gets executed—not the AI agent.",
  },
  {
    question: "What happens if an AI agent is compromised?",
    answer:
      "A compromised or manipulated AI agent can still request an action, but the request must satisfy the institution's authorization requirements before execution.",
  },
  {
    question: "What if the AI agent ignores its instructions?",
    answer:
      "Parmana does not rely on the AI agent obeying instructions to preserve institutional authority. Authorization is evaluated independently against the institution's defined authority and policies.",
  },
  {
    question: "Is Parmana an AI safety product?",
    answer:
      "No. AI safety focuses on improving AI behavior. Parmana addresses a different question: is this action authorized by the institution?",
  },
  {
    question: "Does Parmana replace existing security?",
    answer:
      "No. Identity, access control, security, monitoring, and AI safety remain important. Parmana addresses authorization of the actual execution request against institutional authority and policy.",
  },
  {
    question: "Who actually executes the action?",
    answer:
      "The relevant business system remains the execution system. Parmana evaluates whether the requested action is authorized before it reaches that system.",
  },
  {
    question: "What types of actions can Parmana govern?",
    answer:
      "Parmana can govern consequential actions where an institution needs to determine whether execution is authorized, including transactions, payments, customer-record changes, infrastructure changes, approvals, and business workflows.",
  },
  {
    question: "Why is this becoming important now?",
    answer:
      "AI agents can increasingly interact directly with business systems and initiate actions. Institutions therefore need to retain authority over execution even when AI initiates the request.",
  },
  {
    question: "What is the core principle behind Parmana?",
    answer:
      "AI has intelligence. Your institution has authority. No matter what happens to the AI, institutional authority determines what gets executed—not the AI agent.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-white">
          <div className="container section">
            <div className="max-w-5xl">
              <p className="label">FAQ</p>

              <h1 className="heading-xl mt-6">
                Questions About
                <br />
                Institutional Authority.
              </h1>

              <p className="body mt-12 max-w-3xl">
                Understand how Parmana preserves institutional authority when
                AI agents initiate execution.
              </p>
            </div>

            <div className="mt-20 max-w-4xl divide-y divide-neutral-200">
              {faqs.map((faq) => (
                <div key={faq.question} className="py-10">
                  <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
                    {faq.question}
                  </h2>

                  <p className="mt-5 text-lg leading-8 text-neutral-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}