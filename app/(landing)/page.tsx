import { Hero } from "@/components/landing/hero";
import { Pillars } from "@/components/landing/pillars";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Features } from "@/components/landing/features";
import { Stats } from "@/components/landing/stats";
import { Comparison } from "@/components/landing/comparison";
import { FAQ } from "@/components/landing/faq";
import { CTA } from "@/components/landing/cta";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Pillars />
      <HowItWorks />
      <Features />
      <Stats />
      <Comparison />
      <FAQ />
      <CTA />
    </>
  );
}
