"use client";

import { motion } from "framer-motion";

const STEPS = [
  { n: "01", label: "Understand", text: "We start inside your business, not the tech." },
  { n: "02", label: "Identify", text: "We name the exact bottleneck worth solving." },
  { n: "03", label: "Architect", text: "We design the system before writing a line of code." },
  { n: "04", label: "Engineer", text: "We build the backend, agents and integrations." },
  { n: "05", label: "Deploy", text: "We ship it into your business and keep it running." },
];

export default function Approach() {
  return (
    <section id="approach" className="relative py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-semibold text-[clamp(2.35rem,4.8vw,4.6rem)] leading-[1.05] text-ink text-balance"
          >
            We don&rsquo;t automate for the sake of automation.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-3xl text-[18px] sm:text-[21px] leading-relaxed text-ink-soft"
          >
            Some problems need an AI agent. Some need a backend system. Some
            need a workflow. Some need all three.
          </motion.p>
        </div>

        <div className="mt-18 sm:mt-24 relative">
          {/* connecting line */}
          <div className="hidden md:block absolute top-[24px] left-0 right-0 h-px">
            <motion.div
              className="h-full bg-ink/20 origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 lg:gap-x-10 gap-y-14">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative w-12 h-12 rounded-full panel flex items-center justify-center">
                  <span className="font-display text-[14px] font-semibold text-ink">
                    {s.n}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-[19px] sm:text-[21px] text-ink mt-5">
                  {s.label}
                </h3>
                <p className="text-[15px] sm:text-[16px] text-ink-muted mt-2 leading-relaxed">
                  {s.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
