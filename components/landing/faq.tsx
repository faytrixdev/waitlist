"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Link } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { viewport } from "@/lib/utils/animations";
import { useTranslations } from "@/lib/use-translations";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const t = useTranslations();

  return (
    <section id="faq" className="relative py-14 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-mono font-medium uppercase tracking-widest text-muted-foreground/60">
              {t.faq.label}
            </span>
            <h2 className="mt-5 font-display text-3xl leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {t.faq.title}
              <span className="italic font-medium text-primary">{t.faq.titleAccent}</span>
            </h2>
            <p className="mt-5 text-sm text-muted-foreground">
              {t.faq.description}
            </p>
            <a
              href="mailto:contact@flowrio.com"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "mt-5 w-fit gap-2"
              )}
            >
              <Link className="h-3.5 w-3.5" />
              {t.faq.writeUs}
            </a>
          </motion.div>

          <div className="space-y-3">
            {t.faq.items.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className={cn(
                  "rounded-xl border transition-colors",
                  openIndex === i
                    ? "border-border/80 bg-card"
                    : "border-border/40 bg-card/30 hover:bg-card/60"
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={openIndex === i}
                >
                  <span
                    className={cn(
                      "text-sm font-medium transition-colors",
                      openIndex === i ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={cn(
                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-muted-foreground transition-transform",
                      openIndex === i && "rotate-45 border-primary/30 text-primary"
                    )}
                  >
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        <div className="mb-3 h-px w-full bg-gradient-to-r from-primary/15 to-transparent" />
                        <p className="text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
