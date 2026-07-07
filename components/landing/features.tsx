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
import { useTranslations } from "@/lib/use-translations";

const ids = ["commitment", "decision", "event", "alerts"] as const;
const icons = [Target, BookCheck, CalendarClock, Bell] as const;

function CommitmentVisual() {
  const items = [
    { label: "Send revised quote (Dupont)", due: "Friday", status: "Today", tone: "text-pillar-commitment", done: false },
    { label: "Send back signed contract", due: "Tomorrow 5pm", status: "In progress", tone: "text-pillar-decision", done: false },
    { label: "Confirm call date", due: "Overdue · 2 d", status: "Overdue", tone: "text-destructive", done: false },
    { label: "Monthly report", due: "Completed yesterday", status: "Done", tone: "text-muted-foreground", done: true },
  ];

  return (
    <div className="flex h-full flex-col rounded-2xl border border-border/60 bg-card p-5 shadow-soft">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">My commitments</h3>
        <span className="text-[11px] font-mono text-muted-foreground/60">4 total</span>
      </div>
      <div className="space-y-2.5">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3 rounded-lg border border-border/50 bg-background/40 px-3.5 py-3">
            <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${item.done ? "border-muted-foreground/40 bg-muted-foreground/10" : "border-muted-foreground/30"}`}>
              {item.done && <Check className="h-3 w-3 text-muted-foreground" />}
            </div>
            <div className="min-w-0 flex-1">
              <p className={`truncate text-sm font-medium ${item.done ? "text-muted-foreground line-through" : "text-foreground"}`}>{item.label}</p>
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
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border/60 bg-card p-5 shadow-soft">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">Decision journal</h3>
        <span className="text-[11px] font-mono text-muted-foreground/60">3 recent</span>
      </div>
      <ul className="space-y-3">
        {[
          { label: "Q1 campaign budget set at €15,000", source: "Marie Lambert · Gmail", when: "Yesterday" },
          { label: "Retail price set at €249 incl. VAT", source: "L. Mercier · Slack #marketing", when: "2 d" },
          { label: "Going with in-house redesign", source: "Acme · Email", when: "5 d" },
        ].map((d) => (
          <li key={d.label} className="border-l-2 border-pillar-decision/40 pl-3">
            <p className="text-sm font-medium leading-snug text-foreground">{d.label}</p>
            <p className="mt-0.5 text-[11px] text-muted-foreground">{d.source}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function EventVisual() {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border/60 bg-card p-5 shadow-soft">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">Upcoming events</h3>
        <span className="text-[11px] font-mono text-muted-foreground/60">This week</span>
      </div>
      <ul className="space-y-3">
        {[
          { title: "Acme kick-off", when: "Tue Mar 14 · 10:00", where: "Video call" },
          { title: "Design v2 review", when: "Thu Mar 16 · 14:30", where: "Office" },
          { title: "Weekly recruiting sync", when: "Mon Mar 20 · 11:00", where: "Slack huddle" },
        ].map((e) => (
          <li key={e.title} className="flex items-start gap-3">
            <div className="mt-1 flex h-8 w-8 shrink-0 flex-col items-center justify-center rounded-md border border-pillar-event/25 bg-pillar-event/[0.05] text-pillar-event">
              <CalendarClock className="h-3.5 w-3.5" />
            </div>
            <div>
              <p className="text-sm font-medium leading-snug text-foreground">{e.title}</p>
              <p className="text-[11px] text-muted-foreground">{e.when} · {e.where}</p>
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
            <p className="text-sm font-semibold text-destructive">Due today</p>
            <p className="mt-0.5 text-sm text-foreground/80">You promised to send the quote to Sophie Lambert.</p>
            <p className="mt-1.5 text-[11px] text-muted-foreground">Source message · Gmail · 3 d ago</p>
          </div>
        </div>
      </div>
      <div className="mt-3 rounded-lg border border-pillar-commitment/25 bg-pillar-commitment/[0.04] px-4 py-3">
        <div className="flex items-center gap-2 text-xs">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-pillar-commitment" />
          <span className="font-medium text-pillar-commitment">Daily reminder sent</span>
        </div>
        <p className="mt-1 pl-3.5 text-[11px] text-muted-foreground">3 commitments today · 1 overdue</p>
      </div>
    </div>
  );
}

function FeatureSection({ feature, index, Icon, id }: {
  feature: { eyebrow: string; title: string; description: string; bullets: readonly string[] };
  index: number;
  Icon: typeof Target;
  id: string;
}) {
  const isEven = index % 2 === 0;

  const Visual = () => {
    switch (id) {
      case "commitment": return <CommitmentVisual />;
      case "decision": return <DecisionVisual />;
      case "event": return <EventVisual />;
      case "alerts": return <AlertsVisual />;
    }
  };

  return (
    <section id={id} className="relative py-20 sm:py-24">
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
              <Icon className="h-4 w-4 text-primary" />
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
  const t = useTranslations();

  return (
    <section id="features" className="relative py-12">
      {t.features.items.map((feature, i) => (
        <FeatureSection key={ids[i]} feature={feature} index={i} Icon={icons[i]} id={ids[i]} />
      ))}
    </section>
  );
}
