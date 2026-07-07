"use client";

import { motion } from "motion/react";
import { Bell, Search, Clock, Check, X } from "lucide-react";
import { fadeUp, staggerParent, viewport } from "@/lib/utils/animations";
import { useTranslations } from "@/lib/use-translations";

const icons = [Clock, Search, Bell] as const;

export function Comparison() {
  const t = useTranslations();

  return (
    <section className="relative bg-secondary/40 py-14 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-mono font-medium uppercase tracking-widest text-muted-foreground/60">
            {t.comparison.label}
          </span>
          <h2 className="mt-5 font-display text-3xl leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {t.comparison.title}
            <span className="italic font-medium text-primary">{t.comparison.titleAccent}</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            {t.comparison.description}
          </p>
        </motion.div>

        <motion.div
          variants={staggerParent(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {t.comparison.items.map((c, i) => {
            const Icon = icons[i];
            return (
              <motion.article
                key={c.title}
                variants={fadeUp}
                className="flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft"
              >
                <div className="flex items-center gap-2.5 border-b border-border/60 bg-background/40 px-6 py-4">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                  <h3 className="text-sm font-semibold text-foreground">{c.title}</h3>
                </div>
                <div className="flex flex-1 flex-col gap-px">
                  <div className="flex gap-3 px-6 py-4">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-destructive/30 text-destructive">
                      <X className="h-3.5 w-3.5" />
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{c.before}</p>
                  </div>
                  <div className="flex gap-3 border-t border-border/50 bg-pillar-commitment/[0.03] px-6 py-4">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-pillar-commitment/30 bg-pillar-commitment/10 text-pillar-commitment">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <p className="text-sm leading-relaxed text-foreground">{c.after}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
