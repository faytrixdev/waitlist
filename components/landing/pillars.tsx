"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, BookCheck, CalendarClock, Target } from "lucide-react";
import { fadeUp, staggerParent, viewport } from "@/lib/utils/animations";
import { useTranslations } from "@/lib/use-translations";

export function Pillars() {
  const t = useTranslations();
  const pillars = t.pillars.items;

  return (
    <section id="pillars" className="relative py-14 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-mono font-medium uppercase tracking-widest text-muted-foreground/60">
            {t.pillars.label}
          </span>
          <h2 className="mt-5 font-display text-3xl leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {t.pillars.title}
            <span className="italic font-medium text-primary">{t.pillars.titleAccent}</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            {t.pillars.description}
          </p>
        </motion.div>

        <motion.div
          variants={staggerParent(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {pillars.map((pillar, i) => {
            const tones = [
              {
                border: "border-pillar-commitment/25 hover:border-pillar-commitment/45",
                bg: "bg-pillar-commitment/[0.04]",
                text: "text-pillar-commitment",
                ring: "ring-pillar-commitment/20",
              },
              {
                border: "border-pillar-decision/25 hover:border-pillar-decision/45",
                bg: "bg-pillar-decision/[0.04]",
                text: "text-pillar-decision",
                ring: "ring-pillar-decision/20",
              },
              {
                border: "border-pillar-event/25 hover:border-pillar-event/45",
                bg: "bg-pillar-event/[0.04]",
                text: "text-pillar-event",
                ring: "ring-pillar-event/20",
              },
            ];
            const tone = tones[i];

            const icons = [Target, BookCheck, CalendarClock];
            const Icon = icons[i];

            return (
              <motion.article
                key={pillar.title}
                variants={fadeUp}
                className={`group relative flex flex-col rounded-2xl border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-softmd ${tone.border}`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border border-current/20 ${tone.bg} ${tone.text}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span
                    className={`text-[10px] font-mono font-medium uppercase tracking-widest ${tone.text}/70`}
                  >
                    0{i + 1}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{pillar.intro}</p>

                <div className={`mt-5 rounded-lg border ${tone.border} ${tone.bg} px-3.5 py-3`}>
                  <p className="text-xs italic text-foreground/85 leading-relaxed">
                    {pillar.example}
                  </p>
                  <p className={`mt-2 text-[11px] font-medium ${tone.text}`}>
                    {pillar.meta}
                  </p>
                </div>

                <ul className="mt-6 space-y-2.5">
                  {pillar.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${tone.bg} ring-2 ${tone.ring}`}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 pt-5 border-t border-border/60">
                  <Link
                    href={`#${["commitment", "decision", "event"][i]}`}
                    className={`inline-flex items-center gap-1.5 text-sm font-medium ${tone.text} transition-opacity hover:opacity-80`}
                  >
                    {t.pillars.viewExample}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <p className="mt-10 text-center text-xs text-muted-foreground/70">
          {t.pillars.footer}
        </p>
      </div>
    </section>
  );
}
