"use client";

import Link from "next/link";
import {
  Mail,
  Building2,
  Handshake,
  FlaskConical,
  ArrowRight,
  ArrowLeft,
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

const leaders = [
  {
    initials: "PC",
    name: "Pavan Charak",
    role: "Founder & CEO",
    url: "https://www.linkedin.com/in/pavancharak/",
  },
  {
    initials: "MC",
    name: "Mohinder Singh Charak",
    role: "Co-Founder & Director",
    url: "https://www.linkedin.com/in/mohinder-singh-charak-b246bb346/",
  },
  {
    initials: "KA",
    name: "K. Venkata Abhigna",
    role: "Head of Partnerships",
    url: "https://www.linkedin.com/in/k-venkata-abhigna-87630831a/",
  },
];

export default function Contact() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <Link href="/" className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:border-[#2563EB] hover:text-[#2563EB]">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="max-w-4xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">Contact</span>
          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">Let's Start the Conversation</h1>
          <p className="mt-8 text-xl leading-9 text-gray-600">
            Whether you're exploring institutional authorization, evaluating execution governance,
            discussing research, or interested in working with Parmana, we'd love to hear from you.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {sections.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-lg">
                <Icon className="h-8 w-8 text-blue-600" />
                <h3 className="mt-6 text-2xl font-semibold">{s.title}</h3>
                <p className="mt-4 leading-7 text-gray-600">{s.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-10">
            <Mail className="h-8 w-8 text-blue-600" />
            <h3 className="mt-6 text-3xl font-semibold">Email</h3>
            <p className="mt-4 text-gray-600">Reach out for enterprise discussions, partnerships, technical questions, or general inquiries.</p>
            <a href="mailto:founder@parmanasystems.com" className="mt-8 inline-flex items-center gap-2 text-xl font-semibold hover:text-blue-600">
              founder@parmanasystems.com <ArrowRight className="h-5 w-5"/>
            </a>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A66C2] text-white font-bold">in</div>
            <h3 className="mt-6 text-3xl font-semibold">LinkedIn</h3>
            <p className="mt-4 text-gray-600">Connect for product updates, research and company news.</p>
            <a href="https://www.linkedin.com/in/pavancharak/" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-xl font-semibold hover:text-blue-600">
              linkedin.com/in/pavancharak <ArrowRight className="h-5 w-5"/>
            </a>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-4xl font-bold">Leadership</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {leaders.map((l)=>(
              <div key={l.name} className="rounded-3xl border border-gray-200 p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2563EB] text-white font-bold text-2xl">{l.initials}</div>
                <h3 className="mt-6 text-2xl font-semibold">{l.name}</h3>
                <p className="mt-2 text-[#2563EB] font-medium">{l.role}</p>
                <a href={l.url} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-[#2563EB] font-semibold">
                  View LinkedIn <ArrowRight className="h-4 w-4"/>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 rounded-3xl bg-black px-10 py-16 text-center text-white">
          <h2 className="text-4xl font-bold md:text-5xl">Building Authority Infrastructure</h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
            Parmana provides the infrastructure that connects institutional authority to execution through deterministic, transparent, and verifiable decisions.
          </p>
          <a href="mailto:founder@parmanasystems.com" className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[#2563EB] px-8 py-4 text-lg font-semibold text-white hover:bg-[#1D4ED8]">
            Contact Us <ArrowRight className="h-5 w-5"/>
          </a>
        </div>
      </div>
    </section>
  );
}