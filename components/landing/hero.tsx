"use client";

import { useState, FormEvent } from "react";
import { Mail, MessageSquare, Target, BookCheck, CalendarClock, Zap, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { fadeUp, fadeUpSm, staggerParent, viewport } from "@/lib/utils/animations";
import { cn } from "@/lib/utils";

const sources = [
  { name: "Gmail", icon: Mail, tone: "text-foreground" },
  { name: "Slack", icon: MessageSquare, tone: "text-foreground" },
  { name: "WhatsApp", icon: MessageSquare, tone: "text-foreground/70" },
];

const outputs = [
  {
    label: "Engagement",
    desc: "« Je t'envoie le devis vendredi »",
    icon: Target,
    tone: "text-pillar-commitment border-pillar-commitment/25 bg-pillar-commitment/[0.04]",
  },
  {
    label: "Décision",
    desc: "« Budget fixé à 15 000 € »",
    icon: BookCheck,
    tone: "text-pillar-decision border-pillar-decision/25 bg-pillar-decision/[0.04]",
  },
  {
    label: "Événement",
    desc: "« Réunion mardi 10h »",
    icon: CalendarClock,
    tone: "text-pillar-event border-pillar-event/25 bg-pillar-event/[0.04]",
  },
];

export function Hero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

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
        setMessage("Vous êtes inscrit·e ! On vous tient au courant.");
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
    <section className="relative overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: "22px 22px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerParent(0.08)}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            variants={fadeUpSm}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-soft"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Waitlist ouverte — soyez parmi les premiers
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl leading-[1.1] tracking-tight text-foreground sm:text-6xl sm:leading-[1.05] lg:text-[4rem]"
          >
            Vos conversations contiennent tout ce qui compte.
            <br className="hidden sm:inline" />
            <span className="italic font-medium text-primary">
              {" "}Sauf leur mémoire.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Flowrio lit Gmail, Slack et WhatsApp et détecte automatiquement vos{" "}
            <span className="font-medium text-pillar-commitment">engagements</span>,{" "}
            <span className="font-medium text-pillar-decision">décisions</span> et{" "}
            <span className="font-medium text-pillar-event">événements</span>. Plus rien ne se perd dans le flux.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9">
            {status === "success" ? (
              <div className="flex items-center justify-center gap-2 text-pillar-commitment">
                <Check className="h-5 w-5" />
                <span className="text-sm font-medium">{message}</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col items-center gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={cn(
                    "h-12 flex-1 rounded-lg border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/50",
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
                    "Rejoindre la waitlist"
                  )}
                </Button>
              </form>
            )}

            {status === "error" && (
              <p className="mt-4 text-center text-xs text-destructive">{message}</p>
            )}
          </motion.div>

          <motion.p variants={fadeUpSm} className="mt-5 text-xs text-muted-foreground/70">
            Sans carte bancaire · Lancé dans quelques semaines
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="relative mx-auto mt-12 max-w-5xl"
        >
          <div className="relative grid items-center gap-6 py-8 md:grid-cols-[1fr_auto_1fr] md:gap-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
                className="rounded-2xl border border-border/60 bg-card p-5 shadow-softmd"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-medium uppercase tracking-widest text-muted-foreground/70">
                    Vos canaux
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground/50">3 sources</span>
                </div>
                <ul className="space-y-2.5">
                  {sources.map((s) => (
                    <li key={s.name} className="flex items-center gap-3 rounded-lg border border-border/50 bg-background/40 px-3.5 py-2.5">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border/60 bg-card">
                        <s.icon className={`h-3.5 w-3.5 ${s.tone}`} />
                      </div>
                      <span className="text-sm font-medium text-foreground">{s.name}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                className="relative flex items-center justify-center"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-[-2.5rem] top-1/2 hidden h-px w-[6rem] -translate-y-1/2 md:block"
                  style={{ backgroundImage: "repeating-linear-gradient(to right, hsl(var(--border)) 0 3px, transparent 3px 6px)" }}
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-[3.5rem] top-1/2 hidden h-px w-[6rem] -translate-y-1/2 md:block"
                  style={{ backgroundImage: "repeating-linear-gradient(to right, hsl(var(--border)) 0 3px, transparent 3px 6px)" }}
                />

                <style>{`
                  @keyframes arrowLeft {
                    0% { left: -2.5rem; opacity: 0; }
                    4% { opacity: 1; }
                    88% { left: 3.5rem; opacity: 1; }
                    92%, 100% { left: 3.5rem; opacity: 0; }
                  }
                  @keyframes arrowRight {
                    0% { left: 3.5rem; opacity: 0; }
                    4% { opacity: 1; }
                    88% { left: 9.5rem; opacity: 1; }
                    92%, 100% { left: 9.5rem; opacity: 0; }
                  }
                `}</style>
                <span
                  aria-hidden
                  className="pointer-events-none absolute top-1/2 hidden -translate-y-1/2 text-primary md:block"
                  style={{ animation: "arrowLeft 3.5s ease-in-out 0s infinite" }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                    <path d="M2 0 L10 5 L2 10 Z" />
                  </svg>
                </span>
                <span
                  aria-hidden
                  className="pointer-events-none absolute top-1/2 hidden -translate-y-1/2 text-primary md:block"
                  style={{ animation: "arrowRight 3.5s ease-in-out -1.75s infinite" }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                    <path d="M2 0 L10 5 L2 10 Z" />
                  </svg>
                </span>
                <div className="relative">
                  <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-border/60 bg-card shadow-softmd sm:h-28 sm:w-28">
                    <img
                      src="/logos/logo-flowrio.png"
                      alt="Flowrio"
                      className="h-20 w-20 object-cover sm:h-24 sm:w-24"
                    />
                  </div>
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-border/60 bg-card px-3 py-1 text-[11px] font-medium text-foreground shadow-soft whitespace-nowrap">
                    Flowrio
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
                className="rounded-2xl border border-border/60 bg-card p-5 shadow-softmd"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-medium uppercase tracking-widest text-muted-foreground/70">
                    extrait & suivi
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground/50">3 signaux</span>
                </div>
                <ul className="space-y-2.5">
                  {outputs.map((o) => (
                    <li key={o.label} className={`flex items-start gap-2.5 rounded-lg border px-3.5 py-2.5 ${o.tone}`}>
                      <o.icon className="mt-0.5 h-4 w-4 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wider">{o.label}</p>
                        <p className="mt-0.5 truncate text-xs italic text-foreground/80">{o.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="absolute -left-2 top-8 hidden md:block"
          >
            <div className="flex items-center gap-2 rounded-full border border-pillar-commitment/30 bg-card px-3 py-1.5 text-[11px] font-medium text-pillar-commitment shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-pillar-commitment" />
              <Zap className="h-3 w-3" />
              Détection temps réel
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute -right-2 top-24 hidden md:block"
          >
            <div className="flex items-center gap-2 rounded-full border border-pillar-decision/30 bg-card px-3 py-1.5 text-[11px] font-medium text-pillar-decision shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-pillar-decision" />
              <BookCheck className="h-3 w-3" />
              Aucune saisie manuelle
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="absolute -left-4 bottom-12 hidden md:block"
          >
            <div className="flex items-center gap-2 rounded-full border border-pillar-event/30 bg-card px-3 py-1.5 text-[11px] font-medium text-pillar-event shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-pillar-event" />
              <CalendarClock className="h-3 w-3" />
              RDV implicites captés
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="absolute -right-4 bottom-16 hidden md:block"
          >
            <div className="flex items-center gap-2 rounded-full border border-border/60 bg-card px-3 py-1.5 text-[11px] font-medium text-muted-foreground shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <Target className="h-3 w-3" />
              Alertes avant deadline
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
