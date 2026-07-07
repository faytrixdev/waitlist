"use client";

import { motion } from "motion/react";
import { fadeUp, staggerParent, viewport } from "@/lib/utils/animations";
import { useTranslations } from "@/lib/use-translations";

export function Stats() {
  const t = useTranslations();

  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <h2 className="font-display text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
            {t.stats.title}
            <span className="italic font-medium text-primary">{t.stats.titleAccent}</span>
          </h2>
        </motion.div>

        <motion.dl
          variants={staggerParent(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-4"
        >
          {t.stats.items.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex flex-col gap-1 bg-card px-6 py-7 text-center"
            >
              <dd className="font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                {f.value}
                <span className="text-xl text-muted-foreground">{f.unit}</span>
              </dd>
              <dt className="mt-1 text-sm font-semibold text-foreground">{f.label}</dt>
              <p className="text-xs leading-relaxed text-muted-foreground">{f.sub}</p>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
