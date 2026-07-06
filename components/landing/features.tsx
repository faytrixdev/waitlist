"use client";

import { motion } from "motion/react";
import {
  Target,
  BookCheck,
  CalendarClock,
  Bell,
  Check,
} from "lucide-react";
import { fadeUp, viewport } from "@/lib/utils/animations";

type Feature = {
  id: "commitment" | "decision" | "event" | "alerts";
  icon: typeof Target;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  visual: "commitment" | "decision" | "event" | "alerts";
};

const features: Feature[] = [
  {
    id: "commitment",
    icon: Target,
    eyebrow: "Engagements",
    title: "Chaque promesse devient une action suivie",
    description:
      "L'IA reconnaît les formulations d'engagement même implicites — « je m'en occupe », « je te renvoie ça » — et leur associe une deadline calculée.",
    bullets: [
      "Score de confiance par engagement",
      "Snooze, complétion, ignorer — sans quitter la vue",
      "Relance attribuée au propriétaire de l'engagement, pas à un rappel générique",
    ],
    visual: "commitment",
  },
  {
    id: "decision",
    icon: BookCheck,
    eyebrow: "Décisions",
    title: "Un journal des décisions que vous retrouverez",
    description:
      "Chaque « on a validé », « on part sur » et « c'est acté » est capturé avec son contexte, ses participants et la citation exacte. Vous retrouvez la décision et le pourquoi, même des mois plus tard.",
    bullets: [
      "Capture automatique lors des échanges Slack, Gmail, WhatsApp",
      "Participants et contexte source préservés",
      "Recherche full-text même des mois plus tard",
    ],
    visual: "decision",
  },
  {
    id: "event",
    icon: CalendarClock,
    eyebrow: "Événements",
    title: "Les rendez-vous implicites ne passent plus à la trappe",
    description:
      "« On se voit mardi matin », « je te rappelle en fin de journée » : Flowrio détecte les rendez-vous et deadlines implicites cités dans le flux, et les conserve avec leur source pour ne plus jamais improviser au moment d'organiser la semaine.",
    bullets: [
      "Détection de dates, horaires et deadlines implicites",
      "Distingue un rendez-vous d'un engagement à échéance",
      "Indexé par participant et par sujet",
    ],
    visual: "event",
  },
  {
    id: "alerts",
    icon: Bell,
    eyebrow: "Alertes",
    title: "Vous êtes prévenu·e avant que ça ne se perde",
    description:
      "Flowrio ne se contente pas de détecter — il vous alerte à temps pour agir. Plus de relances de clients, plus d'oubli découverte le vendredi soir.",
    bullets: [
      "Alerte avant échéance (J-1, J-3 configurable)",
      "Rappel quotidien optionnel par email ou Slack",
      "Alertes d'engagements en retard en temps réel",
    ],
    visual: "alerts",
  },
];

function CommitmentVisual() {
  const items = [
    {
      label: "Envoyer devis révisé (Dupont)",
      due: "Vendredi",
      status: "Aujourd'hui",
      tone: "text-pillar-commitment",
      done: false,
    },
    {
      label: "Renvoyer le contrat signé",
      due: "Demain 17h",
      status: "En cours",
      tone: "text-pillar-decision",
      done: false,
    },
    {
      label: "Confirmer la date du call",
      due: "En retard · 2 j",
      status: "En retard",
      tone: "text-destructive",
      done: false,
    },
    {
      label: "Compte rendu mensuel",
      due: "Terminé hier",
      status: "Complet",
      tone: "text-muted-foreground",
      done: true,
    },
  ];

  return (
    <div className="flex h-full flex-col rounded-2xl border border-border/60 bg-card p-5 shadow-soft">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">Mes engagements</h3>
        <span className="text-[11px] font-mono text-muted-foreground/60">4 au total</span>
      </div>
      <div className="space-y-2.5">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 rounded-lg border border-border/50 bg-background/40 px-3.5 py-3"
          >
            <div
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                item.done
                  ? "border-muted-foreground/40 bg-muted-foreground/10"
                  : "border-muted-foreground/30"
              }`}
            >
              {item.done && <Check className="h-3 w-3 text-muted-foreground" />}
            </div>
            <div className="min-w-0 flex-1">
              <p
                className={`truncate text-sm font-medium ${
                  item.done ? "text-muted-foreground line-through" : "text-foreground"
                }`}
              >
                {item.label}
              </p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">{item.due}</p>
            </div>
            <span className={`text-[11px] font-medium ${item.tone}`}>{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DecisionVisual() {
  const decisions = [
    {
      label: "Budget campagne Q1 fixé à 15 000 €",
      source: "Marie Lambert · Gmail",
      when: "Hier",
    },
    {
      label: "Prix public TTC repris à 249 €",
      source: "L. Mercier · Slack #marketing",
      when: "2 j",
    },
    {
      label: "On part sur la refonte en interne",
      source: "Acme · Email",
      when: "5 j",
    },
  ];
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border/60 bg-card p-5 shadow-soft">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">Journal des décisions</h3>
        <span className="text-[11px] font-mono text-muted-foreground/60">{decisions.length} récentes</span>
      </div>
      <ul className="space-y-3">
        {decisions.map((d) => (
          <li
            key={d.label}
            className="border-l-2 border-pillar-decision/40 pl-3"
          >
            <p className="text-sm font-medium leading-snug text-foreground">{d.label}</p>
            <p className="mt-0.5 text-[11px] text-muted-foreground">{d.source}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function EventVisual() {
  const events = [
    { title: "Kick-off Acme", when: "Mar 14 mars · 10h00", where: "Visio" },
    { title: "Review design v2", when: "Jeu 16 mars · 14h30", where: "Bureau" },
    { title: "Point hebdo recrutement", when: "Lun 20 mars · 11h", where: "Slack huddle" },
  ];
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border/60 bg-card p-5 shadow-soft">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">Prochains événements</h3>
        <span className="text-[11px] font-mono text-muted-foreground/60">Cette semaine</span>
      </div>
      <ul className="space-y-3">
        {events.map((e) => (
          <li key={e.title} className="flex items-start gap-3">
            <div className="mt-1 flex h-8 w-8 shrink-0 flex-col items-center justify-center rounded-md border border-pillar-event/25 bg-pillar-event/[0.05] text-pillar-event">
              <CalendarClock className="h-3.5 w-3.5" />
            </div>
            <div>
              <p className="text-sm font-medium leading-snug text-foreground">{e.title}</p>
              <p className="text-[11px] text-muted-foreground">
                {e.when} · {e.where}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AlertsVisual() {
  return (
    <div className="flex h-full flex-col justify-center rounded-2xl border border-border/60 bg-card p-6 shadow-soft">
      <div className="rounded-lg border border-destructive/25 bg-destructive/[0.05] px-4 py-3.5">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-destructive/15 text-destructive">
            <Bell className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-destructive">Échéance aujourd'hui</p>
            <p className="mt-0.5 text-sm text-foreground/80">
              Vous aviez promis d'envoyer le devis à Sophie Lambert.
            </p>
            <p className="mt-1.5 text-[11px] text-muted-foreground">
              Message source · Gmail · il y a 3 j
            </p>
          </div>
        </div>
      </div>

      <div className="mt-3 rounded-lg border border-pillar-commitment/25 bg-pillar-commitment/[0.04] px-4 py-3">
        <div className="flex items-center gap-2 text-xs">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-pillar-commitment" />
          <span className="font-medium text-pillar-commitment">Rappel quotidien envoyé</span>
        </div>
        <p className="mt-1 pl-3.5 text-[11px] text-muted-foreground">
          3 engagements aujourd'hui · 1 en retard
        </p>
      </div>
    </div>
  );
}

function FeatureSection({ feature, index }: { feature: Feature; index: number }) {
  const isEven = index % 2 === 0;

  const Visual = () => {
    switch (feature.visual) {
      case "commitment":
        return <CommitmentVisual />;
      case "decision":
        return <DecisionVisual />;
      case "event":
        return <EventVisual />;
      case "alerts":
        return <AlertsVisual />;
    }
  };

  return (
    <section id={feature.id} className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={isEven ? "lg:order-1" : "lg:order-2"}
          >
            <div className="flex items-center gap-2">
              <feature.icon className="h-4 w-4 text-primary" />
              <span className="text-xs font-mono font-medium uppercase tracking-widest text-muted-foreground/70">
                {feature.eyebrow}
              </span>
            </div>
            <h3 className="mt-4 font-display text-3xl font-medium leading-snug tracking-tight text-foreground sm:text-4xl">
              {feature.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
            <ul className="mt-7 space-y-3">
              {feature.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-muted-foreground leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className={isEven ? "lg:order-2" : "lg:order-1"}
          >
            <Visual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Features() {
  return (
    <section id="features" className="relative py-12">
      {features.map((feature, i) => (
        <FeatureSection key={feature.id} feature={feature} index={i} />
      ))}
    </section>
  );
}
