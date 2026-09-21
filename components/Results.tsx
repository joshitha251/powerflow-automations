"use client";

import { motion } from "framer-motion";

const SYSTEMS = [
  { code: "SYS.01", title: "AI Agent Systems", text: "Agents that understand context, use tools, access knowledge and take action on a business's behalf." },
  { code: "SYS.02", title: "Multi-Agent Orchestration", text: "Multiple specialized agents working together under a single coordinated system." },
  { code: "SYS.03", title: "Backend Engineering", text: "APIs, databases, authentication, business logic, integrations and infrastructure that give AI systems a reliable foundation." },
  { code: "SYS.04", title: "Intelligent Workflow Automation", text: "AI where reasoning is valuable, deterministic automation where predictable execution is better." },
  { code: "SYS.05", title: "Conversational & Voice AI", text: "Voice and conversational systems that understand requests, access knowledge and trigger backend actions." },
  { code: "SYS.06", title: "AI Integrations", text: "Connecting AI systems with CRMs, databases, internal tools, APIs and existing business software." },
];

export default function Results() {
  return (
    <section id="systems" className="relative py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-semibold text-[clamp(2.3rem,5vw,4.5rem)] leading-none text-ink"
        >
          What we build
        </motion.h2>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 border-t border-ink/10">
          {SYSTEMS.map((system, index) => (
            <motion.article
              key={system.code}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="min-h-[175px] border-b border-ink/10 py-8 sm:py-9 md:odd:border-r md:odd:pr-10 md:even:pl-9 lg:even:pl-10"
            >
              <p className="font-mono text-[10px] tracking-[0.18em] text-ink-muted">{system.code}</p>
              <h3 className="font-display font-medium text-[19px] sm:text-[21px] text-ink mt-4">{system.title}</h3>
              <p className="text-[16px] sm:text-[17px] leading-relaxed text-ink-muted mt-3 max-w-lg">{system.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
