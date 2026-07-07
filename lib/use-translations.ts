import { translations, type Lang } from "./translations";
import { useLanguage } from "@/components/language-provider";

export function useTranslations() {
  const { lang } = useLanguage();
  return translations[lang as keyof typeof translations] ?? translations.en;
}

export function getTranslations(lang: Lang) {
  return translations[lang] ?? translations.en;
}
