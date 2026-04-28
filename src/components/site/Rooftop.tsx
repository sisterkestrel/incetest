import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import rooftop from "@/assets/rooftop-mavenue.jpg";

export function Rooftop() {
  const { t } = useI18n();
  return (
    <section id="rooftop" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden border border-border/50">
          <img
            src={rooftop}
            alt="Rooftop M Avenue Marrakech"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

          <div className="relative grid lg:grid-cols-2 gap-12 p-8 md:p-16 lg:p-24 min-h-[600px] items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-xs tracking-[0.3em] uppercase text-gold mb-6">— {t.rooftop.eyebrow}</div>
              <h2 className="text-5xl md:text-7xl mb-6 text-gradient-gold italic">{t.rooftop.title}</h2>
              <p className="text-lg text-foreground/75 mb-10 max-w-lg leading-relaxed">{t.rooftop.sub}</p>

              <div className="grid grid-cols-3 gap-6 mb-10 max-w-md">
                {[
                  { icon: MapPin, label: "Gueliz, Marrakech" },
                  { icon: Users, label: "400 pax" },
                  { icon: Sparkles, label: "Atlas view" },
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
          </div>
        </div>
      </div>
    </section>
  );
}
