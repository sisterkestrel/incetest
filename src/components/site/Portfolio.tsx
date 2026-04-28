import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import festival from "@/assets/portfolio-festival.jpg";
import gitex from "@/assets/portfolio-gitex.jpg";
import anniversary from "@/assets/portfolio-anniversary.jpg";
import gala from "@/assets/portfolio-gala.jpg";
import wedding from "@/assets/portfolio-wedding.jpg";

const items = [
  { img: festival, tag: "Music Festival", title: "Atlas Electronic", year: "2024" },
  { img: gitex, tag: "Tech Summit", title: "GITEX Africa", year: "2024" },
  { img: anniversary, tag: "Private", title: "Anniversary Gala", year: "2023" },
  { img: gala, tag: "Corporate", title: "ALSA Annual", year: "2024" },
  { img: wedding, tag: "Wedding", title: "Riad Ceremony", year: "2023" },
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

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.7 }}
              className="break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-2">{item.tag} · {item.year}</div>
                <h3 className="text-2xl text-foreground">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
