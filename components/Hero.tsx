"use client";

import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-24">
      <div id="consultant" className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1280px] text-center pt-4 sm:pt-6 lg:pt-8">
          <motion.p
            custom={0}
            initial="hidden"
            animate="show"
            variants={reveal}
            className="text-[12px] sm:text-[13px] font-medium tracking-[0.18em] text-ink-muted uppercase leading-none"
          >
            AI Engineering &amp; Intelligent Systems
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={reveal}
            className="font-display font-bold text-[clamp(2.8rem,8vw,110px)] leading-[0.84] text-ink tracking-[-0.06em] whitespace-nowrap mt-0"
          >
            POWERFLOW AUTOMATIONS
          </motion.h1>

          <div className="mt-13 sm:mt-14 flex flex-wrap items-baseline justify-center gap-2 sm:gap-4">
            <motion.p
              custom={2}
              initial="hidden"
              animate="show"
              variants={reveal}
              className="font-display font-medium text-[64px] sm:text-[72px] lg:text-[80px] text-ink leading-none"
            >
              We listen
            </motion.p>

            <motion.p
              custom={2.4}
              initial="hidden"
              animate="show"
              variants={reveal}
              className="text-[17px] sm:text-[20px] text-ink-muted leading-none"
            >
              to your business problems
            </motion.p>
          </div>

          <motion.p
            custom={3.2}
            initial="hidden"
            animate="show"
            variants={reveal}
            aria-hidden="true"
            className="font-display text-hero-line text-ink/45 leading-none my-1 sm:my-2"
          >
            &amp;
          </motion.p>

          <div className="mt-2 sm:mt-3 flex flex-wrap items-baseline justify-center gap-2 sm:gap-4">
            <motion.p
              custom={3}
              initial="hidden"
              animate="show"
              variants={reveal}
              className="font-display font-medium text-[64px] sm:text-[72px] lg:text-[80px] text-ink leading-none"
            >
              We build
            </motion.p>

            <motion.p
              custom={3.4}
              initial="hidden"
              animate="show"
              variants={reveal}
              className="text-[17px] sm:text-[20px] text-ink-muted leading-none"
            >
              custom AI-based solutions
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
