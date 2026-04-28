import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useI18n } from "@/lib/i18n";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [inView, to, count]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function Stats() {
  const { t } = useI18n();
  const items = [
    { value: 100, suffix: "+", label: t.stats.events },
    { value: 50, suffix: "+", label: t.stats.partners },
    { value: 100000, suffix: "+", label: t.stats.guests },
    { value: 95, suffix: "%", label: t.stats.satisfaction },
  ];

  return (
    <section className="relative py-24 border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/50 rounded-2xl overflow-hidden">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-background p-8 md:p-12 text-center group hover:bg-card/50 transition-colors"
            >
              <div className="text-4xl md:text-6xl font-display text-gradient-gold mb-3">
                <Counter to={item.value} suffix={item.suffix} />
              </div>
              <div className="text-xs md:text-sm tracking-[0.2em] uppercase text-foreground/50">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
