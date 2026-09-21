"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <div className="panel rounded-[32px] sm:rounded-[40px] p-8 sm:p-14 lg:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-display font-semibold text-[30px] sm:text-[40px] lg:text-[44px] leading-[1.14] text-ink text-balance max-w-xl">
                Not sure where AI fits in your business?
              </h2>
              <p className="text-[16px] sm:text-[17px] leading-relaxed text-ink-muted mt-6 max-w-xl">
                Tell our AI consultant what you&rsquo;re dealing with. If there&rsquo;s a
                meaningful opportunity, we&rsquo;ll help identify what kind of system
                could make sense.
              </p>
              <a
                href="#consultant"
                className="inline-flex items-center gap-2 mt-8 rounded-[3px] bg-ink text-ice-50 text-[14.5px] font-medium px-7 py-4 hover:bg-ink-soft transition-colors"
              >
                Talk to our Consultant
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="md:pl-6 md:border-l border-ink/10"
            >
              <h2 className="font-display font-semibold text-[30px] sm:text-[40px] lg:text-[44px] leading-[1.14] text-ink">
                Prefer to talk directly?
              </h2>
              <a
                href="mailto:studio@primeagents.ai"
                className="mt-8 inline-block font-mono text-[20px] sm:text-[25px] text-ink underline decoration-ink/35 underline-offset-4 hover:text-ink-soft transition-colors break-all"
              >
                studio@primeagents.ai
              </a>
              <p className="text-[16px] sm:text-[17px] leading-relaxed text-ink-muted mt-7 max-w-xl">
                Tell us what you&rsquo;re building, what&rsquo;s slowing you down, or
                what you&rsquo;d like to improve.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
