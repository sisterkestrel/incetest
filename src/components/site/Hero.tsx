import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import heroImg from "@/assets/hero-event.jpg";

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background image (video placeholder) */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury event production in Marrakech"
          width={1920}
          height={1080}
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
      </div>

      <div className="absolute inset-0 grid-lines opacity-40" />

      <div className="container relative mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs tracking-[0.2em] uppercase text-foreground/80">{t.hero.eyebrow}</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
            {t.hero.title}{" "}
            <span className="text-gradient-gold italic">{t.hero.titleAccent}</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-10 leading-relaxed">
            {t.hero.sub}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="glass hover:bg-white/10 text-foreground rounded-full px-8 py-6 text-base group border-white/15"
            >
              <a href="#contact">
                {t.hero.cta}
                <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="text-foreground/80 hover:text-foreground hover:bg-white/5 rounded-full px-6"
            >
              <a href="#portfolio" className="flex items-center gap-2">
                <span className="w-9 h-9 rounded-full glass flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 fill-current" />
                </span>
                {t.hero.ctaAlt}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/40 text-xs tracking-widest"
      >
        <span>SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-foreground/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
