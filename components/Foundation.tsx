"use client";

import { motion } from "framer-motion";

function StructureGraphic() {
  return (
    <figure className="mx-auto w-full max-w-[430px]">
      <svg viewBox="0 0 420 520" fill="none" className="w-full h-auto" aria-hidden="true">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={`h-${i}`} x1="0" y1={i * 72} x2="420" y2={i * 72} stroke="#101820" strokeOpacity="0.1" />
        ))}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <line key={`v-${i}`} x1={i * 70} y1="0" x2={i * 70} y2="520" stroke="#101820" strokeOpacity="0.1" />
        ))}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.line
            key={`beam-${i}`}
            x1={168 + i * 44}
            y1="118"
            x2={168 + i * 44}
            y2="422"
            stroke="#47798a"
            strokeOpacity="0.68"
            strokeWidth="1.2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: i * 0.08 }}
          />
        ))}
        {[1, 2, 3, 4].map((i) => (
          <line key={`floor-${i}`} x1="152" y1={118 + i * 58} x2="330" y2={118 + i * 58} stroke="#47798a" strokeOpacity="0.28" />
        ))}
        <motion.rect x="142" y="412" width="220" height="18" stroke="#101820" strokeOpacity="0.8" strokeWidth="1.4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} />
        <motion.rect x="128" y="430" width="248" height="18" stroke="#101820" strokeOpacity="0.85" strokeWidth="1.4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} />
        <motion.rect x="110" y="448" width="284" height="27" fill="#364049" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.6 }} />
      </svg>
      <figcaption className="font-display text-[30px] sm:text-[38px] text-ink text-center mt-2">
      
      </figcaption>
    </figure>
  );
}

export default function Foundation() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-semibold text-section-head text-ink text-balance"
            >
              An AI agent is only as strong as its foundation.
            </motion.h2>

            <div className="mt-9 space-y-5 max-w-lg">
              {[
                "Think of an AI agent like a skyscraper. The chat window or voice you interact with is just the beautiful glass exterior.",
                "But without a deep, steel-reinforced foundation, a heavy gust of wind will knock it over.",
                "In AI, that foundation is backend engineering.",
                "Anyone can plug a basic AI tool into a website. We build the invisible, heavy-duty engine underneath it.",
              ].map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[16px] sm:text-[18px] leading-relaxed text-ink-soft"
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <motion.a
              href="#consultant"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="inline-flex items-center gap-1.5 mt-8 text-[15px] font-medium text-ink border-b border-ink/40 pb-0.5 hover:border-ink transition-colors"
            >
              Talk to our Consultant
              <span aria-hidden="true">→</span>
            </motion.a>
          </div>

          <div className="order-1 lg:order-2">
            <StructureGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
