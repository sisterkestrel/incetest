import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { I18nContext, translations, type Lang } from "@/lib/i18n";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { Rooftop } from "@/components/site/Rooftop";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Incevent — The Art of Organization · Event Agency Marrakech" },
      {
        name: "description",
        content:
          "Premium event management agency in Marrakech. Audiovisual, scenography, design, catering & exclusive Rooftop M Avenue venue.",
      },
      { property: "og:title", content: "Incevent — Luxury Event Agency in Marrakech" },
      { property: "og:description", content: "Bespoke experiences. Audiovisual, design, catering, logistics — orchestrated to perfection." },
    ],
  }),
  component: Index,
});

function Index() {
  const [lang, setLang] = useState<Lang>("EN");

  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.dir = lang === "AR" ? "rtl" : "ltr";
    document.documentElement.lang = lang.toLowerCase();
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <Stats />
          <Services />
          <Portfolio />
          <Rooftop />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <Toaster theme="dark" />
      </div>
    </I18nContext.Provider>
  );
}
