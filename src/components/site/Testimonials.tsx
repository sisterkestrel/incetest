import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const items = [
  {
    quote: "Incevent a transformé notre vision en une expérience inoubliable. Précision, créativité, exécution parfaite.",
    author: "Direction Marketing",
    company: "ALSA",
  },
  {
    quote: "The most reliable production partner in Marrakech. They handle complexity with effortless elegance.",
    author: "Events Manager",
    company: "M Avenue",
  },
  {
    quote: "Une équipe rare, capable de livrer du sur-mesure haut de gamme à grande échelle.",
    author: "Founder",
    company: "Emerging Business Factory",
  },
];

export function Testimonials() {
  const { t } = useI18n();
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % items.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative py-32 border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-xs tracking-[0.3em] uppercase text-gold mb-4 text-center">— {t.testimonials.title}</div>

        <div className="max-w-4xl mx-auto text-center min-h-[280px] flex flex-col justify-center">
          <Quote className="w-10 h-10 text-gold/40 mx-auto mb-8" />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-2xl md:text-4xl font-display italic leading-relaxed mb-8 text-foreground/90">
                "{items[i].quote}"
              </p>
              <div className="text-sm tracking-widest uppercase text-foreground/50">
                {items[i].author} · <span className="text-gold">{items[i].company}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1 rounded-full transition-all ${idx === i ? "w-10 bg-gold" : "w-4 bg-border"}`}
              aria-label={`Testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
