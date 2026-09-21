"use client";

import { useEffect, useState } from "react";

// Official ElevenLabs Conversational AI widget.
// Docs: https://elevenlabs.io/docs/conversational-ai/widget
// Load it only on the client to avoid server-side render issues from the
// external script while keeping the real voice agent available on the page.
export default function ElevenLabsWidget() {
  const [mounted, setMounted] = useState(false);
  const agentId = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID;

  useEffect(() => {
    setMounted(true);

    const existingScript = document.getElementById("elevenlabs-convai-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "elevenlabs-convai-script";
      script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="convai-shell">
      {mounted && agentId ? (
        // @ts-ignore -- custom element provided by the ElevenLabs script
        <elevenlabs-convai agent-id={agentId} />
      ) : (
        <div className="rounded-2xl border border-dashed border-ink/25 px-5 py-6 text-[13px] text-ink-muted">
          Set <code className="font-medium text-ink">NEXT_PUBLIC_ELEVENLABS_AGENT_ID</code> in
          your environment to activate the AI Consultant.
        </div>
      )}

      <style jsx global>{`
        .convai-shell elevenlabs-convai {
          display: block;
          width: 100%;
        }

        .convai-shell {
          width: 100%;
        }
      `}</style>
    </div>
  );
}
