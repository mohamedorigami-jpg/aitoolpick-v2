"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

/**
 * EmailCapture — newsletter signup form.
 * Shows a success message on submit (no real backend).
 */
export function EmailCapture() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-card border border-border-color rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto">
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
          <Mail className="w-6 h-6 text-accent" />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-foreground mb-2">
        Get our free weekly AI tool picks
      </h3>
      <p className="text-muted mb-6">
        Every Friday, we send one hand-picked AI tool worth trying — no spam,
        unsubscribe anytime.
      </p>

      {submitted ? (
        <div className="text-success font-semibold text-lg py-3">
          Thanks! Check your inbox 🎉
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-background border border-border-color rounded-lg px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            type="submit"
            className="bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
