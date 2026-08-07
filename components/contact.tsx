"use client";

import {
  Mail,
  Building2,
  Handshake,
  FlaskConical,
  ArrowRight,
} from "lucide-react";

const sections = [
  {
    icon: Building2,
    title: "Enterprise",
    description:
      "Discuss enterprise deployments, architecture, governance, compliance, and production adoption.",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    description:
      "Explore technology partnerships, integrations, and strategic collaborations.",
  },
  {
    icon: FlaskConical,
    title: "Research",
    description:
      "Exchange ideas on authorization, governance, institutional trust, execution infrastructure, and emerging technologies.",
  },
];

export default function Contact() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="max-w-4xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Contact
          </span>

          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
            Let's Start the Conversation
          </h1>

          <p className="mt-8 text-xl leading-9 text-gray-600">
            Whether you're exploring institutional authorization,
            evaluating execution governance, discussing research,
            or interested in working with Parmana, we'd love to hear from you.
          </p>
        </div>

        {/* Focus Areas */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {sections.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon className="h-8 w-8 text-blue-600" />

                <h3 className="mt-6 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Contact Methods */}

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-10">
            <Mail className="h-8 w-8 text-blue-600" />

            <h3 className="mt-6 text-3xl font-semibold">
              Email
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Reach out for enterprise discussions, partnerships,
              technical questions, or general inquiries.
            </p>

            <a
              href="mailto:hello@parmanasystems.com"
              className="mt-8 inline-flex items-center gap-2 text-xl font-semibold hover:text-blue-600 transition"
            >
              hello@parmanasystems.com
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-10">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A66C2] text-lg font-bold text-white">
              in
            </div>

            <h3 className="mt-6 text-3xl font-semibold">
              LinkedIn
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Connect for product updates, research,
              and discussions around authority infrastructure.
            </p>

            <a
              href="https://www.linkedin.com/in/pavancharak/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-xl font-semibold hover:text-blue-600 transition"
            >
              linkedin.com/in/pavancharak
              <ArrowRight className="h-5 w-5" />
            </a>

          </div>

        </div>

        {/* CTA */}

        <div className="mt-24 rounded-3xl bg-black px-10 py-16 text-center text-white">

          <h2 className="text-4xl font-bold md:text-5xl">
            Building Authority Infrastructure
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
            Parmana provides the infrastructure that connects institutional
            authority to execution through deterministic, transparent,
            and verifiable decisions.
          </p>

          <a
            href="mailto:hello@parmanasystems.com"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-black transition hover:bg-gray-100"
          >
            Contact Us
            <ArrowRight className="h-5 w-5" />
          </a>

        </div>

      </div>
    </section>
  );
}