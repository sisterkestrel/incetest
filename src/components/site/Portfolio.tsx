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
    <section id="portfolio" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-end justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <div className="text-xs tracking-[0.3em] uppercase text-gold mb-4">— Portfolio</div>
            <h2 className="text-4xl md:text-6xl mb-4">{t.portfolio.title}</h2>
            <p className="text-foreground/60 text-lg">{t.portfolio.sub}</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {items.map((item, i) => (
            <motion.a
              key={i}
              href="#contact"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.7 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/5] block"
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-gold">{item.tag} · {item.year}</div>
                  <ArrowUpRight className="w-4 h-4 text-foreground/50 group-hover:text-gold transition-colors" />
                </div>
                <h3 className="text-lg md:text-2xl text-foreground leading-tight">{item.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
