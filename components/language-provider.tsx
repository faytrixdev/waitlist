"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { Lang } from "@/lib/translations";

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("flowrio-lang") as Lang | null;
    if (stored === "en" || stored === "fr") {
      setLang(stored);
    }
  }, []);

  const setAndStore = (l: Lang) => {
    setLang(l);
    localStorage.setItem("flowrio-lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: setAndStore }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
