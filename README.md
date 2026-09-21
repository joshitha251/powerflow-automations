# PrimeAgents

Official PrimeAgents homepage — AI engineering agency site built with
Next.js (App Router), TypeScript, Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
cp .env.local.example .env.local
# edit .env.local and set NEXT_PUBLIC_ELEVENLABS_AGENT_ID

npm run dev
```

Open http://localhost:3000.

## AI Consultant widget

The hero's "AI Consultant" panel embeds the official
[ElevenLabs Conversational AI widget](https://elevenlabs.io/docs/conversational-ai/widget).
It loads the widget's hosted script and renders the `<elevenlabs-convai>`
custom element — there is no custom WebSocket or voice implementation.

Set your agent id in `.env.local`:

```
NEXT_PUBLIC_ELEVENLABS_AGENT_ID=your_agent_id
```

Without it, the panel shows a small placeholder instead of the widget.

## Structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           Assembles all sections
  globals.css        Icy-blue background system, tokens
components/
  Navbar.tsx
  Hero.tsx
  ElevenLabsWidget.tsx
  Foundation.tsx      "Foundation" skyscraper section (SVG, no stock images)
  Approach.tsx         01–05 process
  Results.tsx          3 expandable result cards
  Contact.tsx
  Footer.tsx
public/images/logo.png  Eagle logomark (background removed, transparent PNG)
```

## Design system

- Background: a single icy-blue (`#CFE5EC`) that never turns white, with very
  soft tonal radial gradients for depth (see `app/globals.css`).
- Type: Space Grotesk (display/headlines) + Inter (body), loaded via
  `next/font/google` for zero layout shift and offline-safe self-hosting.
- Motion: Framer Motion, used for one orchestrated hero reveal, scroll-in
  section reveals, and card expand/collapse — no ambient/looping animation.

## Performance notes

- Fonts are self-hosted at build time by `next/font` (no external font
  requests at runtime).
- The ElevenLabs widget script loads with `strategy="lazyOnload"` so it never
  blocks first paint.
- Images use `next/image`; the logo is a small transparent PNG.
