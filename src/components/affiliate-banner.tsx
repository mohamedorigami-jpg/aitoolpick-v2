"use client";

import { useState } from "react";
import { X } from "lucide-react";

/**
 * AffiliateBanner — fixed top disclosure banner, dismissible.
 */
export function AffiliateBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-card/95 backdrop-blur-sm border-b border-border-color">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <p className="text-xs text-muted">
          This site contains affiliate links. We may earn a commission at no
          extra cost to you.
        </p>
        <button
          onClick={() => setDismissed(true)}
          className="text-muted hover:text-foreground transition-colors ml-4 flex-shrink-0"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
