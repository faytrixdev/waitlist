"use client";

import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { viewport } from "@/lib/utils/animations";
import { cn } from "@/lib/utils";
import { useTranslations } from "@/lib/use-translations";

export function CTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const t = useTranslations();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setMessage(t.cta.success);
        setEmail("");
      } else {
        const data = await res.json();
        setStatus("error");
        setMessage(data.error || "Une erreur est survenue.");
      }
    } catch {
      setStatus("error");
      setMessage("Erreur réseau. Réessayez.");
    }
  }

  return (
    <section id="waitlist" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-border/60 bg-card px-5 py-10 text-center shadow-soft sm:px-8 sm:py-12 md:px-16 md:py-14"
        >
          <h2 className="mx-auto max-w-2xl font-display text-3xl leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl md:leading-[1.05]">
            {t.cta.title}
            <span className="italic font-medium text-primary">{t.cta.titleAccent}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base text-muted-foreground">
            {t.cta.description}
          </p>

          {status === "success" ? (
            <div className="mt-10 flex items-center justify-center gap-2 text-pillar-commitment">
              <Check className="h-5 w-5" />
              <span className="text-sm font-medium">{message}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto mt-10 flex max-w-md flex-col items-center gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder={t.cta.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={cn(
                  "h-12 w-full sm:flex-1 rounded-lg border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/50",
                  "transition-colors duration-200 outline-none",
                  "border-border/60 focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                )}
              />
              <Button
                type="submit"
                size="lg"
                disabled={status === "loading"}
                className="h-12 w-full shrink-0 px-6 text-base font-medium shadow-soft sm:w-auto"
              >
                {status === "loading" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  t.cta.button
                )}
              </Button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-4 text-xs text-destructive">{message}</p>
          )}

          <p className="mt-7 text-xs text-muted-foreground/70">
            {t.cta.footnote}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
