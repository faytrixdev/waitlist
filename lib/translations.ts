export const translations = {
  en: {
    hero: {
      badge: "Waitlist open — be among the first",
      title1: "Your conversations hold everything that matters.",
      title2: "Except their memory.",
      description:
        "Flowrio reads Gmail, Slack and WhatsApp and automatically detects your commitments, decisions and events. Nothing gets lost in the flow.",
      placeholder: "your@email.com",
      button: "Join the waitlist",
      subtitle: "No credit card · Launching in a few weeks",
      success: "You're signed up! We'll keep you posted.",
      sourcesLabel: "Your channels",
      sourcesCount: "3 sources",
      outputLabel: "extracted & tracked",
      outputCount: "3 signals",
      badges: {
        realtime: "Real-time detection",
        noEntry: "No manual entry",
        implicit: "Implicit meetings captured",
        alerts: "Alerts before deadlines",
      },
      outputs: [
        { label: "Commitment", desc: '"I\'ll send you the revised quote on Friday"' },
        { label: "Decision", desc: '"Budget set at €15,000"' },
        { label: "Event", desc: '"Meeting Tuesday 10am"' },
      ],
    },
    pillars: {
      label: "Three signals · one memory",
      title: "Three things unfold in ",
      titleAccent: "every message.",
      description:
        "Flowrio distinguishes promises from decisions and appointments. Each element finds its place without any manual entry.",
      viewExample: "See a concrete example",
      footer: "All three pillars share the same source: your inbox. No third-party tool to install.",
      items: [
        {
          title: "Commitments",
          intro: "Promises you make in your messages",
          example: '"I\'ll send you the revised quote on Friday"',
          meta: "Auto-attributed · deadline extracted · alerted before due",
          bullets: [
            'Detection of commitment phrases ("I\'ll handle it", "I\'ll send you", "I\'ll check")',
            'Deadline calculated from context ("Friday", "tomorrow morning", "before the 15th")',
            "Proactive reminder before the deadline",
          ],
        },
        {
          title: "Decisions",
          intro: "Choices and trade-offs you make together",
          example: '"We decided to set the budget at €15,000"',
          meta: "Participant preserved · source citation included",
          bullets: [
            'Recognition of decision phrases ("we decided", "approved", "we\'re going with", "GO for")',
            "Attribution of participants mentioned in the conversation",
            "Searchable journal: find the decision and its context, even months later",
          ],
        },
        {
          title: "Events",
          intro: "Implicit meetings and calendar deadlines",
          example: '"See you Tuesday March 14 at 10am for the kick-off"',
          meta: "Date + time extracted · source message preserved",
          bullets: [
            "Detection of meetings, calls and calendar deadlines",
            "Automatic distinction between a commitment date and an event date",
            "Indexed for quick search (\"all calls with Acme\")",
          ],
        },
      ],
    },
    howItWorks: {
      label: "How it works",
      title: "Three steps",
      titleAccent: "without friction.",
      steps: [
        {
          num: "01",
          title: "Connect your channels",
          description:
            "Connect Gmail, Slack and WhatsApp via OAuth. No migration, no import — Flowrio reads the rest.",
          detail: "Setup in under 2 minutes. You choose what to activate.",
        },
        {
          num: "02",
          title: "AI reads and structures",
          description:
            "Every incoming message is analyzed. The AI isolates commitments, decisions and events, with confidence scores and context.",
          detail: "Everything is traceable: each item links to the source message.",
        },
        {
          num: "03",
          title: "You act at the right time",
          description:
            "Open Flowrio in the morning: your commitment list is ready, sorted by urgency. Alerts arrive before deadlines.",
          detail: "Optional: a daily email summary and an afternoon Slack digest.",
        },
      ],
    },
    features: {
      items: [
        {
          eyebrow: "Commitments",
          title: "Every promise becomes a tracked action",
          description:
            'The AI recognizes even implicit commitment phrases — "I\'ll take care of it", "I\'ll get back to you" — and assigns a calculated deadline.',
          bullets: [
            "Confidence score per commitment",
            "Snooze, complete, dismiss — without leaving the view",
            "Follow-up attributed to the commitment owner, not a generic reminder",
          ],
        },
        {
          eyebrow: "Decisions",
          title: "A decision journal you'll actually find",
          description:
            'Every "we validated", "we\'re going with" and "it\'s confirmed" is captured with its context, participants and exact quote. Find the decision and the why, even months later.',
          bullets: [
            "Automatic capture from Slack, Gmail, WhatsApp exchanges",
            "Participants and source context preserved",
            "Full-text search even months later",
          ],
        },
        {
          eyebrow: "Events",
          title: "Implicit appointments no longer slip through",
          description:
            '"See you Tuesday morning", "I\'ll call you back later today": Flowrio detects implicit meetings and deadlines mentioned in the flow, and keeps them with their source so you never have to improvise when planning the week.',
          bullets: [
            "Detection of implicit dates, times and deadlines",
            "Distinguishes a meeting from a commitment deadline",
            "Indexed by participant and topic",
          ],
        },
        {
          eyebrow: "Alerts",
          title: "You're warned before things slip",
          description:
            "Flowrio doesn't just detect — it alerts you in time to act. No more client follow-ups missed, no more Friday evening discoveries.",
          bullets: [
            "Alert before deadline (D-1, D-3 configurable)",
            "Optional daily reminder by email or Slack",
            "Real-time late commitment alerts",
          ],
        },
      ],
    },
    featuresVisuals: {
      commitment: {
        title: "My commitments",
        count: "4 total",
        items: [
          { label: "Send revised quote (Dupont)", due: "Friday", status: "Today", done: false },
          { label: "Send back signed contract", due: "Tomorrow 5pm", status: "In progress", done: false },
          { label: "Confirm call date", due: "Overdue · 2 d", status: "Overdue", done: false },
          { label: "Monthly report", due: "Completed yesterday", status: "Done", done: true },
        ],
      },
      decision: {
        title: "Decision journal",
        count: "3 recent",
        items: [
          { label: "Q1 campaign budget set at €15,000", source: "Marie Lambert · Gmail", when: "Yesterday" },
          { label: "Retail price set at €249 incl. VAT", source: "L. Mercier · Slack #marketing", when: "2 d" },
          { label: "Going with in-house redesign", source: "Acme · Email", when: "5 d" },
        ],
      },
      event: {
        title: "Upcoming events",
        count: "This week",
        items: [
          { title: "Acme kick-off", when: "Tue Mar 14 · 10:00", where: "Video call" },
          { title: "Design v2 review", when: "Thu Mar 16 · 14:30", where: "Office" },
          { title: "Weekly recruiting sync", when: "Mon Mar 20 · 11:00", where: "Slack huddle" },
        ],
      },
      alerts: {
        dueTitle: "Due today",
        desc: "You promised to send the quote to Sophie Lambert.",
        meta: "Source message · Gmail · 3 d ago",
        reminderTitle: "Daily reminder sent",
        reminderCount: "3 commitments today · 1 overdue",
      },
    },
    stats: {
      title: "What Flowrio ",
      titleAccent: "changes for you.",
      items: [
        { value: "3", unit: "", label: "Signals extracted", sub: "Commitments, decisions, events" },
        { value: "2", unit: " min", label: "To get started", sub: "OAuth Gmail, Slack or WhatsApp — no import" },
        { value: "0", unit: "", label: "Fields to fill", sub: "AI reads, you write nothing" },
        { value: "2", unit: "", label: "Connected channels", sub: "Gmail · Slack — WhatsApp coming soon" },
      ],
    },
    comparison: {
      label: "Before · After",
      title: "The difference shows ",
      titleAccent: "every day.",
      description:
        "Flowrio doesn't add another tool to monitor. It replaces your inbox's silence with a memory that speaks to you.",
      items: [
        {
          title: "Before a client meeting",
          before: "You reopen 4 emails and 2 Slack threads to find what you promised last time.",
          after: "You open Flowrio: the list of current commitments with this client is right in front of you.",
        },
        {
          title: "Someone asks \"what did we decide?\"",
          before: "Cross-search Gmail, Slack and WhatsApp, you eventually find the thread... or not.",
          after: "A full-text search in the decision journal brings up the context and participants in 2 seconds.",
        },
        {
          title: "A commitment is due today",
          before: "The client follows up at the end of the day. You discover the oversight — the relationship takes a hit.",
          after: "Flowrio alerted you in the morning. You handled the action on time, without being asked.",
        },
      ],
    },
    faq: {
      label: "Frequently asked questions",
      title: "Everything you want to know ",
      titleAccent: "before trying.",
      description: "Another question? Write to us, we reply within 2 hours on weekdays.",
      writeUs: "Write to us",
      items: [
        {
          q: "What exactly is Flowrio?",
          a: "An operational memory for your messaging apps. Flowrio reads your Gmail, Slack and WhatsApp messages, identifies commitments, decisions and events exchanged within them, and gives them back to you tracked — without you having to enter anything.",
        },
        {
          q: "Does the AI really distinguish a commitment from casual chat?",
          a: "Yes. The AI is trained on professional French and English commitment and decision phrases. Politeness, general thoughts and noise are filtered out. Each item has a confidence score — doubtful items are flagged and you can dismiss them with one click.",
        },
        {
          q: "Who reads my data?",
          a: "Only Flowrio's AI reads it to extract signals. Your messages are never resold, never used to train public models. You can export all your data at any time, and delete everything with one click.",
        },
        {
          q: "How is this different from ChatGPT or Copilot?",
          a: "A generative AI waits for a question. Flowrio is proactive: it monitors your communications continuously and alerts you before a commitment is forgotten — without you having to ask.",
        },
        {
          q: "When will Flowrio be available?",
          a: "Flowrio is in advanced development. Join the waitlist to be notified at launch and get early access. First subscribers get priority access.",
        },
      ],
    },
    cta: {
      title: "Be among the first to ",
      titleAccent: "try Flowrio.",
      description: "Join the waitlist. Priority access at launch.",
      placeholder: "your@email.com",
      button: "Join the waitlist",
      success: "You're signed up! We'll keep you posted.",
      footnote: "No spam. 1 email to notify you of the launch.",
    },
    footer: {
      description:
        "The operational memory for your messaging apps. Flowrio detects your commitments, decisions and events from Gmail, Slack and WhatsApp — so nothing gets lost.",
      product: "Product",
      features: "Features",
      waitlist: "Waitlist",
      legal: "Legal",
      privacy: "Privacy",
      tos: "Terms of Service",
      rights: "All rights reserved.",
    },
    header: {
      features: "Features",
      howItWorks: "How it works",
      faq: "FAQ",
      join: "Join the waitlist",
    },
  },
  fr: {
    hero: {
      badge: "Waitlist ouverte — soyez parmi les premiers",
      title1: "Vos conversations contiennent tout ce qui compte.",
      title2: "Sauf leur mémoire.",
      description:
        "Flowrio lit Gmail, Slack et WhatsApp et détecte automatiquement vos engagements, décisions et événements. Plus rien ne se perd dans le flux.",
      placeholder: "votre@email.com",
      button: "Rejoindre la waitlist",
      subtitle: "Sans carte bancaire · Lancé dans quelques semaines",
      success: "Vous êtes inscrit·e ! On vous tient au courant.",
      sourcesLabel: "Vos canaux",
      sourcesCount: "3 sources",
      outputLabel: "extrait & suivi",
      outputCount: "3 signaux",
      badges: {
        realtime: "Détection temps réel",
        noEntry: "Aucune saisie manuelle",
        implicit: "RDV implicites captés",
        alerts: "Alertes avant deadline",
      },
      outputs: [
        { label: "Engagement", desc: "« Je t'envoie le devis vendredi »" },
        { label: "Décision", desc: "« Budget fixé à 15 000 € »" },
        { label: "Événement", desc: "« Réunion mardi 10h »" },
      ],
    },
    pillars: {
      label: "Trois signaux · une mémoire",
      title: "Trois choses se jouent dans ",
      titleAccent: "chaque message.",
      description:
        "Flowrio distingue ce qui est promesse, ce qui est décision et ce qui est rendez-vous. Chaque élément trouve sa place sans aucune saisie manuelle.",
      viewExample: "Voir un exemple concret",
      footer: "Les trois piliers partagent la même source : votre boîte de réception. Aucun outil tiers à installer.",
      items: [
        {
          title: "Engagements",
          intro: "Les promesses que vous prenez dans vos messages",
          example: "« Je t'envoie le devis révisé vendredi »",
          meta: "Auto-attribué · deadline extraite · alerté avant échéance",
          bullets: [
            'Détection des formulations d\'engagement (« je m\'en occupe », « je t\'envoie », « je vérifie »)',
            'Deadline calculée à partir du contexte (« vendredi », « demain matin », « avant le 15 »)',
            "Rappel proactif avant la date limite",
          ],
        },
        {
          title: "Décisions",
          intro: "Les choix et arbitrages que vous actez ensemble",
          example: "« On a décidé de fixer le budget à 15 000 € »",
          meta: "Participant conservé · citation source incluse",
          bullets: [
            'Reconnaissance des formulations de décision (« on a décidé », « validé », « on part sur », « GO pour »)',
            "Attribution des participants cités dans la conversation",
            "Journal consultable : retrouvez la décision et son contexte, même des mois plus tard",
          ],
        },
        {
          title: "Événements",
          intro: "Les rendez-vous et deadlines calendaires implicites",
          example: "« On se voit mardi 14 mars à 10h pour le kick-off »",
          meta: "Date + heure extraites · source du message conservée",
          bullets: [
            "Détection des rendez-vous, réunions, calls et deadlines calendaires",
            "Distinction automatique entre une date d'engagement et une date d'événement",
            "Indexé pour recherche rapide (« tous les calls avec Acme »)",
          ],
        },
      ],
    },
    howItWorks: {
      label: "Comment ça marche",
      title: "Trois étapes ",
      titleAccent: "sans friction.",
      steps: [
        {
          num: "01",
          title: "Connectez vos canaux",
          description:
            "Branchez Gmail, Slack et WhatsApp en OAuth. Aucune migration, aucun import — Flowrio lit la suite.",
          detail: "Configuration en moins de 2 minutes. Vous choisissez ce que vous activez.",
        },
        {
          num: "02",
          title: "L'IA lit et structure",
          description:
            "Chaque message entrant passe au crible. L'IA isole les engagements, les décisions et les événements, avec score de confiance et contexte.",
          detail: "Tout est traçable : chaque item pointe vers le message source.",
        },
        {
          num: "03",
          title: "Vous agissez au bon moment",
          description:
            "Vous ouvrez Flowrio le matin : votre liste d'engagements vous attend, classée par urgence. Les alertes arrivent avant les deadlines.",
          detail: "Optionnel : un résumé quotidien par email et un digest Slack l'après-midi.",
        },
      ],
    },
    features: {
      items: [
        {
          eyebrow: "Engagements",
          title: "Chaque promesse devient une action suivie",
          description:
            "L'IA reconnaît les formulations d'engagement même implicites — « je m'en occupe », « je te renvoie ça » — et leur associe une deadline calculée.",
          bullets: [
            "Score de confiance par engagement",
            "Snooze, complétion, ignorer — sans quitter la vue",
            "Relance attribuée au propriétaire de l'engagement, pas à un rappel générique",
          ],
        },
        {
          eyebrow: "Décisions",
          title: "Un journal des décisions que vous retrouverez",
          description:
            "Chaque « on a validé », « on part sur » et « c'est acté » est capturé avec son contexte, ses participants et la citation exacte. Vous retrouvez la décision et le pourquoi, même des mois plus tard.",
          bullets: [
            "Capture automatique lors des échanges Slack, Gmail, WhatsApp",
            "Participants et contexte source préservés",
            "Recherche full-text même des mois plus tard",
          ],
        },
        {
          eyebrow: "Événements",
          title: "Les rendez-vous implicites ne passent plus à la trappe",
          description:
            "« On se voit mardi matin », « je te rappelle en fin de journée » : Flowrio détecte les rendez-vous et deadlines implicites cités dans le flux, et les conserve avec leur source pour ne plus jamais improviser au moment d'organiser la semaine.",
          bullets: [
            "Détection de dates, horaires et deadlines implicites",
            "Distingue un rendez-vous d'un engagement à échéance",
            "Indexé par participant et par sujet",
          ],
        },
        {
          eyebrow: "Alertes",
          title: "Vous êtes prévenu·e avant que ça ne se perde",
          description:
            "Flowrio ne se contente pas de détecter — il vous alerte à temps pour agir. Plus de relances de clients, plus d'oubli découverte le vendredi soir.",
          bullets: [
            "Alerte avant échéance (J-1, J-3 configurable)",
            "Rappel quotidien optionnel par email ou Slack",
            "Alertes d'engagements en retard en temps réel",
          ],
        },
      ],
    },
    featuresVisuals: {
      commitment: {
        title: "Mes engagements",
        count: "4 au total",
        items: [
          { label: "Envoyer le devis révisé (Dupont)", due: "Vendredi", status: "Aujourd'hui", done: false },
          { label: "Retourner le contrat signé", due: "Demain 17h", status: "En cours", done: false },
          { label: "Confirmer la date d'appel", due: "En retard · 2 j", status: "En retard", done: false },
          { label: "Rapport mensuel", due: "Terminé hier", status: "Fait", done: true },
        ],
      },
      decision: {
        title: "Journal des décisions",
        count: "3 récents",
        items: [
          { label: "Budget campagne Q1 fixé à 15 000 €", source: "Marie Lambert · Gmail", when: "Hier" },
          { label: "Prix de vente fixé à 249 € TTC", source: "L. Mercier · Slack #marketing", when: "2 j" },
          { label: "On part sur une refonte en interne", source: "Acme · Email", when: "5 j" },
        ],
      },
      event: {
        title: "Événements à venir",
        count: "Cette semaine",
        items: [
          { title: "Kick-off Acme", when: "Mar 14 · 10:00", where: "Visio" },
          { title: "Revue Design v2", when: "Jeu 16 · 14:30", where: "Bureau" },
          { title: "Sync recrutement hebdo", when: "Lun 20 · 11:00", where: "Slack huddle" },
        ],
      },
      alerts: {
        dueTitle: "À faire aujourd'hui",
        desc: "Vous avez promis d'envoyer le devis à Sophie Lambert.",
        meta: "Message source · Gmail · il y a 3 j",
        reminderTitle: "Rappel quotidien envoyé",
        reminderCount: "3 engagements aujourd'hui · 1 en retard",
      },
    },
    stats: {
      title: "Ce que Flowrio vous ",
      titleAccent: "change.",
      items: [
        { value: "3", unit: "", label: "Signaux extraits", sub: "Engagements, décisions, événements" },
        { value: "2", unit: " min", label: "Pour démarrer", sub: "OAuth Gmail, Slack ou WhatsApp — aucun import" },
        { value: "0", unit: "", label: "Champ à remplir", sub: "L'IA lit, vous n'écrivez rien" },
        { value: "2", unit: "", label: "Canaux connectés", sub: "Gmail · Slack — WhatsApp bientôt" },
      ],
    },
    comparison: {
      label: "Avant · Après",
      title: "La différence se voit ",
      titleAccent: "au quotidien.",
      description:
        "Flowrio n'ajoute pas un outil de plus à surveiller. Il remplace le silence de votre boîte de réception par une mémoire qui vous parle.",
      items: [
        {
          title: "Avant un rendez-vous client",
          before: "Vous rouvrez 4 emails et 2 threads Slack pour retrouver ce que vous aviez promis la dernière fois.",
          after: "Vous ouvrez Flowrio : la liste des engagements en cours avec ce client est devant vous.",
        },
        {
          title: "Quelqu'un demande « qu'avait-on décidé ? »",
          before: "Recherche Gmail, Slack et WhatsApp croisée, on finit par retrouver le thread... ou pas.",
          after: "Une recherche full-text dans le journal des décisions ramène le contexte et les participants en 2 secondes.",
        },
        {
          title: "Un engagement arrive à échéance aujourd'hui",
          before: "Le client vous relance en fin de journée. Vous découvrez l'oubli — la relation prend une entaille.",
          after: "Flowrio vous a alerté le matin. Vous avez traité l'action à temps, sans qu'on vous le demande.",
        },
      ],
    },
    faq: {
      label: "Questions fréquentes",
      title: "Tout ce que vous voulez savoir ",
      titleAccent: "avant d'essayer.",
      description: "Une autre question ? Écrivez-nous, on répond en moins de 2 h en semaine.",
      writeUs: "Nous écrire",
      items: [
        {
          q: "C'est quoi exactement Flowrio ?",
          a: "Une mémoire opérationnelle pour vos messageries. Flowrio lit vos messages Gmail, Slack et WhatsApp, identifie les engagements, les décisions et les événements qui s'y échangent, et vous les restitue suivis — sans que vous ayez à saisir quoi que ce soit.",
        },
        {
          q: "L'IA distingue vraiment un engagement d'une simple discussion ?",
          a: "Oui. L'IA est entraînée sur des formulations d'engagement et de décision en français professionnel. Les politesses, réflexions générales et bruit sont filtrés. Chaque item a un score de confiance — les éléments douteux sont signalés et vous pouvez les ignorer d'un clic.",
        },
        {
          q: "Mes données sont lues par qui ?",
          a: "Uniquement par l'IA de Flowrio pour extraire les signaux. Vos messages ne sont jamais revendus, jamais utilisés pour entraîner des modèles publics. Vous pouvez exporter toutes vos données à tout moment, et tout supprimer en un clic.",
        },
        {
          q: "En quoi c'est différent de ChatGPT ou Copilot ?",
          a: "Un assistant génératif attend une question. Flowrio est proactif : il surveille vos communications en continu et vous alerte avant qu'un engagement ne soit oublié — sans que vous ayez à lui demander.",
        },
        {
          q: "Quand est-ce que Flowrio sera disponible ?",
          a: "Flowrio est en phase de développement avancé. Rejoignez la waitlist pour être informé·e dès le lancement et bénéficier d'un accès prioritaire. Les premiers inscrits auront un accès anticipé.",
        },
      ],
    },
    cta: {
      title: "Soyez parmi les premiers à ",
      titleAccent: "essayer Flowrio.",
      description: "Inscrivez-vous à la waitlist. Accès prioritaire au lancement.",
      placeholder: "votre@email.com",
      button: "Rejoindre la waitlist",
      success: "Vous êtes inscrit·e ! On vous tient au courant.",
      footnote: "Aucun spam. 1 email pour vous prévenir du lancement.",
    },
    footer: {
      description:
        "La mémoire opérationnelle de vos messageries. Flowrio détecte vos engagements, décisions et événements Gmail, Slack et WhatsApp — pour que rien ne se perde.",
      product: "Produit",
      features: "Fonctionnalités",
      waitlist: "Waitlist",
      legal: "Légal",
      privacy: "Confidentialité",
      tos: "CGU",
      rights: "Tous droits réservés.",
    },
    header: {
      features: "Fonctionnalités",
      howItWorks: "Comment ça marche",
      faq: "FAQ",
      join: "Rejoindre la waitlist",
    },
  },
} as const;

export type Lang = keyof typeof translations;
export type TranslationSection = keyof typeof translations.en;
