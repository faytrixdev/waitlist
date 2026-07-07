"use client";

import React from "react";
import { motion } from "motion/react";
import { Plug, ScanLine, Bell } from "lucide-react";
import { fadeUp, staggerParent, viewport } from "@/lib/utils/animations";
import { useTranslations } from "@/lib/use-translations";

const icons = [Plug, ScanLine, Bell];

export function HowItWorks() {
  const t = useTranslations();

  return (
    <section id="how-it-works" className="relative bg-secondary/40 py-14 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-mono font-medium uppercase tracking-widest text-muted-foreground/60">
            {t.howItWorks.label}
          </span>
          <h2 className="mt-5 font-display text-3xl leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {t.howItWorks.title}
            <span className="italic font-medium text-primary">{t.howItWorks.titleAccent}</span>
          </h2>
        </motion.div>

        <motion.ol
          variants={staggerParent(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative mt-16 grid gap-8 md:grid-cols-3"
        >
          <div className="absolute left-1/2 top-12 hidden h-px w-[calc(100%-12rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent md:block" aria-hidden />

          {t.howItWorks.steps.map((step, i) => (
            <motion.li
              key={step.num}
              variants={fadeUp}
              className="relative rounded-2xl border border-border/60 bg-card p-6 shadow-soft"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-background text-foreground">
                  {React.createElement(icons[i], { className: "h-5 w-5" })}
                </div>
                <span className="font-mono text-xs font-medium text-muted-foreground/70">
                  {t.howItWorks.label} {step.num}
                </span>
              </div>

              <h3 className="mt-5 font-display text-xl font-medium text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
              <p className="mt-4 border-t border-border/60 pt-4 text-xs text-muted-foreground/70">
                {step.detail}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
