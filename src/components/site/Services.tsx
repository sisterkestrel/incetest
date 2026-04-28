import { motion } from "framer-motion";
import { Speaker, Sofa, Wrench, Sparkles, Truck, UtensilsCrossed, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const services = [
  {
    icon: Speaker,
    title: { FR: "Audiovisuel", EN: "Audiovisual", AR: "السمعي البصري" },
    desc: { FR: "Murs LED, sonorisation pro, lumière scénique.", EN: "LED walls, pro sound, stage lighting.", AR: "شاشات LED، صوت احترافي، إضاءة مسرحية." },
    span: "md:col-span-2 md:row-span-2",
    accent: "electric",
  },
  {
    icon: Sofa,
    title: { FR: "Mobilier", EN: "Furniture", AR: "أثاث" },
    desc: { FR: "Mobilier événementiel haut de gamme.", EN: "Premium event furniture rental.", AR: "تأجير أثاث فاخر." },
    span: "",
    accent: "gold",
  },
  {
    icon: Wrench,
    title: { FR: "Structure scénique", EN: "Scenic Structure", AR: "الهياكل" },
    desc: { FR: "Scènes, podiums, structures sur-mesure.", EN: "Stages, decks, custom structures.", AR: "مسارح وهياكل مخصصة." },
    span: "",
    accent: "electric",
  },
  {
    icon: Sparkles,
    title: { FR: "Event Design", EN: "Event Design", AR: "تصميم الفعاليات" },
    desc: { FR: "Direction artistique et scénographie.", EN: "Art direction & scenography.", AR: "إخراج فني وسينوغرافيا." },
    span: "md:col-span-2",
    accent: "gold",
  },
  {
    icon: Truck,
    title: { FR: "Logistique", EN: "Logistics", AR: "اللوجستيك" },
    desc: { FR: "Transport, installation, démontage.", EN: "Transport, install, teardown.", AR: "النقل والتركيب." },
    span: "",
    accent: "electric",
  },
  {
    icon: UtensilsCrossed,
    title: { FR: "Catering", EN: "Catering", AR: "تموين" },
    desc: { FR: "Chefs étoilés et expériences culinaires.", EN: "Starred chefs & culinary experiences.", AR: "طهاة ذوو نجوم وتجارب طهي." },
    span: "",
    accent: "gold",
  },
];

export function Services() {
  const { t, lang } = useI18n();
  return (
    <section id="services" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16"
        >
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-4">— Services</div>
          <h2 className="text-4xl md:text-6xl mb-6">{t.services.title}</h2>
          <p className="text-foreground/60 text-lg">{t.services.sub}</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4 auto-rows-[220px]">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-8 hover:border-gold/30 transition-all duration-500 cursor-pointer ${s.span}`}
              >
                <div
                  className={`absolute -bottom-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 ${
                    s.accent === "gold" ? "bg-gold" : "bg-electric"
                  }`}
                />

                <div className="relative h-full flex flex-col justify-between">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border border-border/50 ${
                    s.accent === "gold" ? "text-gold" : "text-electric"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-2xl md:text-3xl mb-2">{s.title[lang]}</h3>
                    <p className="text-foreground/60 text-sm leading-relaxed max-w-xs">{s.desc[lang]}</p>
                    <ArrowUpRight className="w-5 h-5 mt-4 text-foreground/30 group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
