

// Phase 4 architecture component
"use client";

import Link from "next/link";
import {
  Layers3, ChevronLeft, ShieldCheck, Bot, UserRound, AppWindow,
  ShieldAlert, CreditCard, Users, Building2, KeyRound, Server, Database
} from "lucide-react";

const sources=[
 {name:"AI Agent",sub:"Requests Execution",Icon:Bot},
 {name:"Human",sub:"Requests Execution",Icon:UserRound},
 {name:"Application",sub:"Requests Execution",Icon:AppWindow},
 {name:"Attacker",sub:"Attempts Unauthorized Execution",Icon:ShieldAlert},
];

const systems=[
 {name:"Payments",Icon:CreditCard},
 {name:"CRM",Icon:Users},
 {name:"ERP",Icon:Building2},
 {name:"Identity",Icon:KeyRound},
 {name:"Infrastructure",Icon:Server},
 {name:"Database",Icon:Database},
];

export default function ArchitectureDiagram(){
return(
<section className="bg-white pt-24 pb-24">
<div className="mx-auto max-w-7xl px-6">

<Link href="/" className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2 text-sm hover:border-black">
<ChevronLeft size={16}/>Back
</Link>

<div className="mt-12 text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2">
<Layers3 size={16}/>
<span className="text-xs font-semibold uppercase tracking-[0.2em]">Architecture</span>
</div>

<h1 className="mt-8 text-5xl font-semibold tracking-tight md:text-7xl">
Human Authority Infrastructure
<br/>
<span className="text-neutral-500">For AI Execution</span>
</h1>

<p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
Every execution request is evaluated against organizational policy before reaching business systems.
</p>
</div>

<div className="mt-20 grid gap-16 lg:grid-cols-3">

<div>
<h3 className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Execution Sources</h3>
<div className="space-y-6">
{sources.map(({name,sub,Icon})=>(
<div key={name} className="flex items-center gap-4">
<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-100"><Icon size={26}/></div>
<div><div className="font-semibold">{name}</div><div className="text-sm text-neutral-500">{sub}</div></div>
</div>
))}
</div>
</div>

<div className="relative rounded-[36px] border border-neutral-800 bg-black p-10 text-white shadow-2xl">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 h-16 w-px bg-neutral-300"></div>
<div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/10">
<ShieldCheck size={48}/>
</div>
<h2 className="mt-8 text-center text-4xl font-semibold">Parmana</h2>
<p className="mt-3 text-center text-neutral-300">Human Authority Infrastructure</p>

<div className="mt-10 space-y-4 rounded-2xl bg-white/5 p-6">
<div className="text-center">Execution Request</div>
<div className="text-center text-neutral-500">↓</div>
<div className="text-center">Evaluate Organizational Policy</div>
<div className="text-center text-neutral-500">↓</div>
<div className="text-center">Authorization Decision</div>
<div className="grid grid-cols-2 gap-3 pt-4">
<div className="rounded-xl bg-emerald-500/20 p-3 text-center font-semibold text-emerald-300">✓ Execute</div>
<div className="rounded-xl bg-red-500/20 p-3 text-center font-semibold text-red-300">✕ Block</div>
</div>
</div>

<div className="mt-8 flex flex-wrap justify-center gap-2">
{["Deterministic","Policy Driven","Independent of AI"].map(x=><span key={x} className="rounded-full border border-neutral-700 px-3 py-1 text-xs">{x}</span>)}
</div>
</div>

<div>
<h3 className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Protected Business Systems</h3>
<div className="space-y-6">
{systems.map(({name,Icon})=>(
<div key={name} className="flex items-center gap-4">
<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-100"><Icon size={24}/></div>
<div><div className="font-semibold">{name}</div><div className="text-sm text-neutral-500">Authorized Execution Endpoint</div></div>
</div>
))}
</div>
</div>

</div>

<div className="mt-20 rounded-3xl border border-neutral-200 bg-neutral-50 p-10 text-center">
<p className="text-3xl font-semibold">Execution authority never leaves your organization.</p>
<p className="mx-auto mt-4 max-w-3xl text-neutral-600">
Parmana ensures every execution request is evaluated against organizational policy before reaching business systems.
</p>
</div>

</div>
</section>
)}