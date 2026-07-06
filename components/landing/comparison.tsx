"use client";

import { motion } from "motion/react";
import { Bell, Search, Clock, Check, X } from "lucide-react";
import { fadeUp, staggerParent, viewport } from "@/lib/utils/animations";

const contrasts = [
  {
    icon: Clock,
    title: "Avant un rendez-vous client",
    before:
      "Vous rouvrez 4 emails et 2 threads Slack pour retrouver ce que vous aviez promis la dernière fois.",
    after:
      "Vous ouvrez Flowrio : la liste des engagements en cours avec ce client est devant vous.",
  },
  {
    icon: Search,
    title: "Quelqu'un demande « qu'avait-on décidé ? »",
    before:
      "Recherche Gmail, Slack et WhatsApp croisée, on finit par retrouver le thread... ou pas.",
    after:
      "Une recherche full-text dans le journal des décisions ramène le contexte et les participants en 2 secondes.",
  },
  {
    icon: Bell,
    title: "Un engagement arrive à échéance aujourd'hui",
    before:
      "Le client vous relance en fin de journée. Vous découvrez l'oubli — la relation prend une entaille.",
    after:
      "Flowrio vous a alerté le matin. Vous avez traité l'action à temps, sans qu'on vous le demande.",
  },
];

export function Comparison() {
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
            Avant · Après
          </span>
          <h2 className="mt-5 font-display text-3xl leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            La différence se voit{" "}
            <span className="italic font-medium text-primary">au quotidien.</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            Flowrio n'ajoute pas un outil de plus à surveiller. Il remplace le silence de
            votre boîte de réception par une mémoire qui vous parle.
          </p>
        </motion.div>

        <motion.div
          variants={staggerParent(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {contrasts.map((c) => (
            <motion.article
              key={c.title}
              variants={fadeUp}
              className="flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft"
            >
              <div className="flex items-center gap-2.5 border-b border-border/60 bg-background/40 px-6 py-4">
                <c.icon className="h-4 w-4 text-muted-foreground" />
                <h3 className="text-sm font-semibold text-foreground">{c.title}</h3>
              </div>
              <div className="flex flex-1 flex-col gap-px">
                <div className="flex gap-3 px-6 py-4">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-destructive/30 text-destructive">
                    <X className="h-3.5 w-3.5" />
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {c.before}
                  </p>
                </div>
                <div className="flex gap-3 border-t border-border/50 bg-pillar-commitment/[0.03] px-6 py-4">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-pillar-commitment/30 bg-pillar-commitment/10 text-pillar-commitment">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <p className="text-sm leading-relaxed text-foreground">{c.after}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
