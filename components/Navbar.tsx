"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Approach", href: "#approach" },
  { label: "Systems", href: "#systems" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-[#CFE5EC]/70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#top" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/images/logo.png"
              alt="PrimeAgents"
              width={34}
              height={21}
              className="h-6 w-auto sm:h-7"
              priority
            />
            <span className="font-display font-semibold text-[15px] sm:text-[17px] tracking-tight text-ink">
              PowerFlow
            </span>
          </a>

          <div className="hidden md:flex items-center gap-9">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[14px] text-ink-soft hover:text-ink transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#consultant"
            className="hidden md:inline-flex items-center rounded-full bg-ink text-ice-50 text-[13.5px] font-medium px-5 py-2.5 hover:bg-ink-soft transition-colors"
          >
            Talk to our Consultant
          </a>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden -mr-2 p-2 text-ink"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden bg-[#CFE5EC]/95 backdrop-blur-md border-t border-ink/10"
        >
          <div className="flex flex-col px-5 py-4 gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[15px] text-ink-soft border-b border-ink/8"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#consultant"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center rounded-full bg-ink text-ice-50 text-[14px] font-medium px-5 py-3"
            >
              Talk to our Consultant
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
