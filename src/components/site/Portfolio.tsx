import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import festival from "@/assets/portfolio-festival.jpg";
import gitex from "@/assets/portfolio-gitex.jpg";
import anniversary from "@/assets/portfolio-anniversary.jpg";
import gala from "@/assets/portfolio-gala.jpg";
import wedding from "@/assets/portfolio-wedding.jpg";
import fashion from "@/assets/portfolio-fashion.jpg";
import launch from "@/assets/portfolio-launch.jpg";

const items = [
  { img: festival, tag: "Music Festival", title: "Atlas Electronic", year: "2024" },
  { img: gitex, tag: "Tech Summit", title: "GITEX Africa", year: "2024" },
  { img: anniversary, tag: "Private", title: "Anniversary Gala", year: "2023" },
  { img: gala, tag: "Corporate", title: "ALSA Annual", year: "2024" },
  { img: wedding, tag: "Wedding", title: "Riad Ceremony", year: "2023" },
  { img: fashion, tag: "Fashion", title: "Couture Runway", year: "2024" },
  { img: launch, tag: "Brand Launch", title: "Product Reveal", year: "2024" },
  { img: festival, tag: "Festival", title: "Sahara Sessions", year: "2023" },
  { img: gala, tag: "Corporate", title: "EBF Summit", year: "2024" },
];

export function Portfolio() {
  const { t } = useI18n();
  return (
    <section id="portfolio" className="relative py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-end justify-between gap-4 mb-8"
        >
          <div className="max-w-2xl">
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-2">— Portfolio</div>
            <h2 className="text-3xl md:text-4xl mb-2">{t.portfolio.title}</h2>
            <p className="text-foreground/60 text-base">{t.portfolio.sub}</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {items.slice(0, 10).map((item, i) => (
            <motion.a
              key={i}
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 5) * 0.05, duration: 0.6 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[3/4] block"
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center justify-between mb-1">
                  <div className="text-[9px] tracking-[0.2em] uppercase text-gold/80">{item.tag}</div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-foreground/50 group-hover:text-gold transition-colors" />
                </div>
                <h3 className="text-base md:text-lg text-foreground leading-tight font-medium">{item.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
