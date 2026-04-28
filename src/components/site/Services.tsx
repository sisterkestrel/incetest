import { motion } from "framer-motion";
import { Speaker, Sofa, Wrench, Sparkles, Truck, UtensilsCrossed, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import audiovisual from "@/assets/srv-audiovisual.jpg";
import furniture from "@/assets/srv-furniture.jpg";
import structure from "@/assets/srv-structure.jpg";
import design from "@/assets/srv-design.jpg";
import logistics from "@/assets/srv-logistics.jpg";
import catering from "@/assets/srv-catering.jpg";

const services = [
  {
    icon: Speaker,
    img: audiovisual,
    title: { FR: "Audiovisuel", EN: "Audiovisual", AR: "السمعي البصري" },
    desc: { FR: "Murs LED, sonorisation pro, lumière scénique.", EN: "LED walls, pro sound, stage lighting.", AR: "شاشات LED، صوت احترافي، إضاءة مسرحية." },
    accent: "electric",
  },
  {
    icon: Sofa,
    img: furniture,
    title: { FR: "Mobilier", EN: "Furniture", AR: "أثاث" },
    desc: { FR: "Mobilier événementiel haut de gamme.", EN: "Premium event furniture rental.", AR: "تأجير أثاث فاخر." },
    accent: "gold",
  },
  {
    icon: Wrench,
    img: structure,
    title: { FR: "Structure scénique", EN: "Scenic Structure", AR: "الهياكل" },
    desc: { FR: "Scènes, podiums, structures sur-mesure.", EN: "Stages, decks, custom structures.", AR: "مسارح وهياكل مخصصة." },
    accent: "electric",
  },
  {
    icon: Sparkles,
    img: design,
    title: { FR: "Event Design", EN: "Event Design", AR: "تصميم الفعاليات" },
    desc: { FR: "Direction artistique et scénographie.", EN: "Art direction & scenography.", AR: "إخراج فني وسينوغرافيا." },
    accent: "gold",
  },
  {
    icon: Truck,
    img: logistics,
    title: { FR: "Logistique", EN: "Logistics", AR: "اللوجستيك" },
    desc: { FR: "Transport, installation, démontage.", EN: "Transport, install, teardown.", AR: "النقل والتركيب." },
    accent: "electric",
  },
  {
    icon: UtensilsCrossed,
    img: catering,
    title: { FR: "Catering", EN: "Catering", AR: "تموين" },
    desc: { FR: "Chefs étoilés et expériences culinaires.", EN: "Starred chefs & culinary experiences.", AR: "طهاة ذوو نجوم وتجارب طهي." },
    accent: "gold",
  },
];

export function Services() {
  const { t, lang } = useI18n();
  return (
    <section id="services" className="relative py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-8"
        >
          <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-2">— Services</div>
          <h2 className="text-3xl md:text-4xl mb-3">{t.services.title}</h2>
          <p className="text-foreground/60 text-base">{t.services.sub}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.06, duration: 0.6 }}
                className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm aspect-[4/5] md:aspect-[3/4] cursor-pointer transition-all duration-500 hover:border-gold/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gold/10"
              >
                {/* Hover image layer */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title[lang]}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="w-full h-full object-cover opacity-0 scale-110 group-hover:opacity-60 group-hover:scale-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30 group-hover:from-background group-hover:via-background/60 group-hover:to-background/20 transition-all duration-700" />
                </div>

                <div className="relative h-full flex flex-col justify-between p-4 md:p-5">
                  <div className="flex items-start justify-between">
                    <div className={`w-10 h-10 rounded-lg glass flex items-center justify-center ${
                      s.accent === "gold" ? "text-gold" : "text-electric"
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-medium mb-1 transition-transform duration-500 group-hover:-translate-y-1">{s.title[lang]}</h3>
                    <p className="text-foreground/60 text-[11px] leading-tight line-clamp-2 md:line-clamp-none">{s.desc[lang]}</p>
                    <ArrowUpRight className="w-4 h-4 mt-2 text-foreground/30 group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
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
