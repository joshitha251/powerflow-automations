import Image from "next/image";

const LINKS = [
  { label: "Capabilities", href: "#" },
  { label: "Approach", href: "#approach" },
  { label: "Systems", href: "#systems" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-ink/10 py-12 sm:py-14">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/logo.png"
                alt="PrimeAgents"
                width={28}
                height={17}
                className="h-5 w-auto"
              />
              <span className="font-display font-semibold text-[15px] text-ink">
                PowerFlow Automations
              </span>
            </div>
            <p className="text-[13.5px] text-ink-muted mt-4 leading-relaxed">
              AI systems engineered around real business problems.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-4">
            <nav className="flex flex-col gap-2.5">
              {LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-[13.5px] text-ink-muted hover:text-ink transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <a
              href="mailto:studio@primeagents.ai"
              className="text-[13.5px] text-ink-muted hover:text-ink transition-colors self-start"
            >
              studio@primeagents.ai
            </a>
          </div>
        </div>

        <div className="hairline mt-10 mb-6" />

        <p className="text-[12px] text-ink-faint">
          © 2026 PowerFlow Automations. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
