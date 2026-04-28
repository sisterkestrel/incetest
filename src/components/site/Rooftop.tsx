import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin, Users, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import rooftop from "@/assets/rooftop-mavenue.jpg";
import pool from "@/assets/venue-pool.jpg";
import riad from "@/assets/venue-riad.jpg";
import desert from "@/assets/venue-desert.jpg";
import grove from "@/assets/venue-grove.jpg";

type Venue = {
  img: string;
  name: string;
  tagline: { FR: string; EN: string; AR: string };
  location: string;
  capacity: string;
  feature: string;
};

const venues: Venue[] = [
  {
    img: rooftop,
    name: "Rooftop M Avenue",
    tagline: {
      FR: "Un écrin urbain au cœur de Marrakech. Vue panoramique sur l'Atlas.",
      EN: "An urban jewel in the heart of Marrakech. Panoramic Atlas views.",
      AR: "جوهرة حضرية في قلب مراكش. إطلالة بانورامية على الأطلس.",
    },
    location: "Gueliz, Marrakech",
    capacity: "400 pax",
    feature: "Atlas view",
  },
  {
    img: pool,
    name: "Sky Pool Lounge",
    tagline: {
      FR: "Piscine à débordement et lounge premium au coucher du soleil.",
      EN: "Infinity pool and premium lounge under the sunset.",
      AR: "حمام سباحة لا متناهي وصالة فاخرة عند الغروب.",
    },
    location: "Hivernage, Marrakech",
    capacity: "250 pax",
    feature: "Infinity pool",
  },
  {
    img: riad,
    name: "Palais Riad Andalous",
    tagline: {
      FR: "Cour intérieure, lustres et arches sculptées pour soirées de prestige.",
      EN: "Carved arches and chandeliers for prestige evenings.",
      AR: "قوس منحوتة وثريات لأمسيات راقية.",
    },
    location: "Médina, Marrakech",
    capacity: "180 pax",
    feature: "Heritage palace",
  },
  {
    img: desert,
    name: "Sahara Private Camp",
    tagline: {
      FR: "Camp berbère exclusif sur dunes pour expériences inoubliables.",
      EN: "Exclusive Berber camp on the dunes for unforgettable nights.",
      AR: "مخيم بربري حصري على الكثبان الرملية.",
    },
    location: "Agafay Desert",
    capacity: "300 pax",
    feature: "Dune setting",
  },
  {
    img: grove,
    name: "Olive Grove Estate",
    tagline: {
      FR: "Domaine privé avec oliveraie centenaire pour dîners romantiques.",
      EN: "Private estate with century-old olive grove for romantic dinners.",
      AR: "ضيعة خاصة مع بستان زيتون لعشاء رومانسي.",
    },
    location: "Route de l'Ourika",
    capacity: "150 pax",
    feature: "Olive grove",
  },
];

export function Rooftop() {
  const { t, lang } = useI18n();
  const [idx, setIdx] = useState(0);

  const go = (dir: 1 | -1) => setIdx((i) => (i + dir + venues.length) % venues.length);

  // autoplay
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % venues.length), 6000);
    return () => clearInterval(id);
  }, []);

  const v = venues[idx];

  return (
    <section id="rooftop" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap items-end justify-between gap-6 mb-10"
        >
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-gold mb-4">— {t.rooftop.eyebrow}</div>
            <h2 className="text-4xl md:text-6xl">Exclusive <span className="text-gradient-gold italic">Venues</span></h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => go(-1)}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Previous venue"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm text-foreground/60 tabular-nums">
              {String(idx + 1).padStart(2, "0")} <span className="text-foreground/30">/ {String(venues.length).padStart(2, "0")}</span>
            </span>
            <button
              onClick={() => go(1)}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Next venue"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <div className="relative rounded-3xl overflow-hidden border border-border/50 min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <img
                src={v.img}
                alt={v.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>

          <div className="relative grid lg:grid-cols-2 gap-12 p-8 md:p-16 lg:p-24 min-h-[600px] items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="text-xs tracking-[0.3em] uppercase text-gold mb-6">— {v.location}</div>
                <h3 className="text-5xl md:text-7xl mb-6 text-gradient-gold italic">{v.name}</h3>
                <p className="text-lg text-foreground/75 mb-10 max-w-lg leading-relaxed">{v.tagline[lang]}</p>

                <div className="grid grid-cols-3 gap-4 mb-10 max-w-md">
                  {[
                    { icon: MapPin, label: v.location },
                    { icon: Users, label: v.capacity },
                    { icon: Sparkles, label: v.feature },
                  ].map((it, i) => {
                    const Icon = it.icon;
                    return (
                      <div key={i} className="glass rounded-xl p-4 text-center">
                        <Icon className="w-4 h-4 mx-auto mb-2 text-gold" />
                        <div className="text-xs text-foreground/70">{it.label}</div>
                      </div>
                    );
                  })}
                </div>

                <Button
                  asChild
                  size="lg"
                  className="bg-gold text-gold-foreground hover:bg-gold/90 rounded-full px-8 py-6 group"
                >
                  <a href="#contact">
                    {t.rooftop.cta}
                    <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* progress dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
            {venues.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Venue ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx ? "w-10 bg-gold" : "w-4 bg-foreground/30 hover:bg-foreground/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
