"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, BookCheck, CalendarClock, Target } from "lucide-react";
import { fadeUp, staggerParent, viewport } from "@/lib/utils/animations";

type Pillar = {
  key: "commitment" | "decision" | "event";
  icon: typeof Target;
  title: string;
  intro: string;
  example: string;
  meta: string;
  bullets: string[];
  tone: {
    border: string;
    bg: string;
    text: string;
    ring: string;
  };
};

const pillars: Pillar[] = [
  {
    key: "commitment",
    icon: Target,
    title: "Engagements",
    intro: "Les promesses que vous prenez dans vos messages",
    example: "« Je t'envoie le devis révisé vendredi »",
    meta: "Auto-attribué · deadline extraite · alerté avant échéance",
    bullets: [
      "Détection des formulations d'engagement (« je m'en occupe », « je t'envoie », « je vérifie »)",
      "Deadline calculée à partir du contexte (« vendredi », « demain matin », « avant le 15 »)",
      "Rappel proactif avant la date limite",
    ],
    tone: {
      border: "border-pillar-commitment/25 hover:border-pillar-commitment/45",
      bg: "bg-pillar-commitment/[0.04]",
      text: "text-pillar-commitment",
      ring: "ring-pillar-commitment/20",
    },
  },
  {
    key: "decision",
    icon: BookCheck,
    title: "Décisions",
    intro: "Les choix et arbitrages que vous actez ensemble",
    example: "« On a décidé de fixer le budget à 15 000 € »",
    meta: "Participant conservé · citation source incluse",
    bullets: [
      "Reconnaissance des formulations de décision (« on a décidé », « validé », « on part sur », « GO pour »)",
      "Attribution des participants cités dans la conversation",
      "Journal consultable : retrouvez la décision et son contexte, même des mois plus tard",
    ],
    tone: {
      border: "border-pillar-decision/25 hover:border-pillar-decision/45",
      bg: "bg-pillar-decision/[0.04]",
      text: "text-pillar-decision",
      ring: "ring-pillar-decision/20",
    },
  },
  {
    key: "event",
    icon: CalendarClock,
    title: "Événements",
    intro: "Les rendez-vous et deadlines calendaires implicites",
    example: "« On se voit mardi 14 mars à 10h pour le kick-off »",
    meta: "Date + heure extraites · source du message conservée",
    bullets: [
      "Détection des rendez-vous, réunions, calls et deadlines calendaires",
      "Distinction automatique entre une date d'engagement et une date d'événement",
      "Indexé pour recherche rapide (« tous les calls avec Acme »)",
    ],
    tone: {
      border: "border-pillar-event/25 hover:border-pillar-event/45",
      bg: "bg-pillar-event/[0.04]",
      text: "text-pillar-event",
      ring: "ring-pillar-event/20",
    },
  },
];

export function Pillars() {
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
            Trois signaux · une mémoire
          </span>
          <h2 className="mt-5 font-display text-3xl leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Trois choses se jouent dans{" "}
            <span className="italic font-medium text-primary">chaque message.</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            Flowrio distingue ce qui est promesse, ce qui est décision et ce qui est rendez-vous.
            Chaque élément trouve sa place sans aucune saisie manuelle.
          </p>
        </motion.div>

        <motion.div
          variants={staggerParent(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {pillars.map((pillar) => (
            <motion.article
              key={pillar.key}
              variants={fadeUp}
              className={`group relative flex flex-col rounded-2xl border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-softmd ${pillar.tone.border}`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border border-current/20 ${pillar.tone.bg} ${pillar.tone.text}`}
                >
                  <pillar.icon className="h-5 w-5" />
                </div>
                <span
                  className={`text-[10px] font-mono font-medium uppercase tracking-widest ${pillar.tone.text}/70`}
                >
                  0{pillars.indexOf(pillar) + 1}
                </span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{pillar.intro}</p>

              <div className={`mt-5 rounded-lg border ${pillar.tone.border} ${pillar.tone.bg} px-3.5 py-3`}>
                <p className="text-xs italic text-foreground/85 leading-relaxed">
                  {pillar.example}
                </p>
                <p className={`mt-2 text-[11px] font-medium ${pillar.tone.text}`}>
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
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${pillar.tone.bg} ring-2 ${pillar.tone.ring}`}
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 pt-5 border-t border-border/60">
                <Link
                  href={`#${pillar.key}`}
                  className={`inline-flex items-center gap-1.5 text-sm font-medium ${pillar.tone.text} transition-opacity hover:opacity-80`}
                >
                  Voir un exemple concret
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <p className="mt-10 text-center text-xs text-muted-foreground/70">
          Les trois piliers partagent la même source : votre boîte de réception. Aucun outil tiers à installer.
        </p>
      </div>
    </section>
  );
}
