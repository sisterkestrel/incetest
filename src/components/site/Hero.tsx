import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, Play, Star } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import heroImg from "@/assets/hero-event.jpg";

export function Hero() {
  const { t } = useI18n();

  // Mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const bgX = useTransform(sx, (v) => v * -20);
  const bgY = useTransform(sy, (v) => v * -20);
  const orbX = useTransform(sx, (v) => v * 40);
  const orbY = useTransform(sy, (v) => v * 40);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const titleWords = t.hero.title.split(" ");

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ x: bgX, y: bgY, scale: 1.1 }}>
        <img
          src={heroImg}
          alt="Luxury event production in Marrakech"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/55 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/20 to-transparent" />
      </motion.div>

      {/* Animated gradient orbs */}
      <motion.div
        style={{ x: orbX, y: orbY }}
        className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full bg-electric/30 blur-[120px] pointer-events-none"
      />
      <motion.div
        style={{ x: orbX, y: orbY }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/20 blur-[120px] pointer-events-none"
      />

      <div className="absolute inset-0 grid-lines opacity-30" />

      {/* Vertical side label */}
      <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center items-center gap-3 text-xs tracking-[0.4em] uppercase text-foreground/40 z-10">
        <span className="w-12 h-px bg-foreground/30" />
        Marrakech · Est. 2018
      </div>

      {/* Floating stat badge */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        className="hidden md:block absolute top-1/3 right-10 lg:right-20 z-10"
      >
        <div className="glass rounded-2xl p-5 w-56">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-gold text-gold" />
            ))}
          </div>
          <div className="text-3xl font-display text-gradient-gold">4.98</div>
          <div className="text-xs text-foreground/60 mt-1">Average client rating · 200+ events</div>
        </div>
      </motion.div>

      <div className="container relative mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
            </span>
            <span className="text-xs tracking-[0.25em] uppercase text-foreground/80">{t.hero.eyebrow}</span>
            <span className="w-px h-3 bg-foreground/20" />
            <span className="text-xs text-gold">Booking 2026</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
            {titleWords.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, rotateX: -30 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block mr-[0.25em]"
              >
                {w}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + titleWords.length * 0.08, duration: 0.8 }}
              className="inline-block text-gradient-gold italic relative"
            >
              {t.hero.titleAccent}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent origin-left"
              />
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-10 leading-relaxed"
          >
            {t.hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-gold text-gold-foreground hover:bg-gold/90 rounded-full px-8 py-6 text-base group shadow-gold"
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
          </motion.div>

          {/* Inline trusted-by row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-foreground/40"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase">Trusted by</span>
            {["ALSA", "M Avenue", "GITEX Africa", "EBF"].map((b) => (
              <span key={b} className="text-sm font-display tracking-wide hover:text-gold transition-colors cursor-default">
                {b}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee strip at bottom */}
      <div className="absolute bottom-0 inset-x-0 border-t border-border/50 glass-strong py-4 overflow-hidden z-10">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap text-sm text-foreground/50"
        >
          {[...Array(2)].flatMap((_, j) =>
            ["✦ Audiovisual Production", "✦ Scenic Design", "✦ Catering & Hospitality", "✦ Logistics", "✦ Talent Booking", "✦ Brand Activation"].map((it, i) => (
              <span key={`${j}-${i}`} className="inline-flex items-center gap-12">
                <span className="font-display tracking-wide">{it}</span>
              </span>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
}
