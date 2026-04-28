import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n, type Lang } from "@/lib/i18n";
import logo from "@/assets/incevent-logo.png";

const langs: Lang[] = ["FR", "EN", "AR"];

export function Header() {
  const { lang, setLang, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#rooftop", label: t.nav.rooftop },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Incevent" width={140} height={40} className="h-9 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 text-xs tracking-widest text-foreground/70 hover:text-foreground transition-colors px-3 py-2 rounded-full border border-border/50"
            >
              <Globe className="w-3.5 h-3.5" />
              {lang}
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute right-0 mt-2 glass rounded-xl overflow-hidden min-w-[80px]"
                >
                  {langs.map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        setLang(l);
                        setLangOpen(false);
                      }}
                      className={`block w-full px-4 py-2 text-xs tracking-widest text-left hover:bg-white/5 transition-colors ${
                        l === lang ? "text-gold" : "text-foreground/70"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Button asChild variant="default" size="sm" className="hidden md:inline-flex bg-gold text-gold-foreground hover:bg-gold/90 rounded-full font-medium">
            <a href="#contact">{t.hero.cta}</a>
          </Button>

          <button onClick={() => setOpen(true)} className="md:hidden text-foreground p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 glass-strong md:hidden"
          >
            <div className="flex justify-end p-6">
              <button onClick={() => setOpen(false)} className="text-foreground p-2">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-8 mt-12">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-display text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <Button asChild className="bg-gold text-gold-foreground rounded-full mt-6">
                <a href="#contact" onClick={() => setOpen(false)}>{t.hero.cta}</a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
