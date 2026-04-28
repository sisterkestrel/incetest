import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useI18n } from "@/lib/i18n";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  project: z.string().trim().max(100).optional(),
  message: z.string().trim().min(10).max(1000),
});

export function Contact() {
  const { t } = useI18n();
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success(t.contact.success);
      (e.target as HTMLFormElement).reset();
      setLoading(false);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="text-xs tracking-[0.3em] uppercase text-gold mb-4">— Contact</div>
            <h2 className="text-4xl md:text-6xl mb-6">{t.contact.title}</h2>
            <p className="text-foreground/60 text-lg mb-12">{t.contact.sub}</p>

            <div className="space-y-6">
              {[
                { icon: MapPin, title: "M Tech, M Avenue", sub: "Gueliz, Marrakech 40000" },
                { icon: Mail, title: "hello@incevent.ma", sub: "Réponse sous 24h" },
                { icon: Phone, title: "+212 5 24 00 00 00", sub: "Lun–Ven · 9h–19h" },
              ].map((it, i) => {
                const Icon = it.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl glass flex items-center justify-center text-gold shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-foreground font-medium">{it.title}</div>
                      <div className="text-sm text-foreground/50">{it.sub}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            onSubmit={onSubmit}
            className="lg:col-span-3 glass rounded-3xl p-8 md:p-12 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground/70 text-xs tracking-widest uppercase">{t.contact.name}</Label>
                <Input id="name" name="name" required maxLength={100} className="bg-background/40 border-border/50 h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground/70 text-xs tracking-widest uppercase">{t.contact.email}</Label>
                <Input id="email" name="email" type="email" required maxLength={255} className="bg-background/40 border-border/50 h-12" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="project" className="text-foreground/70 text-xs tracking-widest uppercase">{t.contact.project}</Label>
              <Input id="project" name="project" maxLength={100} placeholder="Corporate · Wedding · Festival..." className="bg-background/40 border-border/50 h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground/70 text-xs tracking-widest uppercase">{t.contact.message}</Label>
              <Textarea id="message" name="message" required maxLength={1000} rows={5} className="bg-background/40 border-border/50 resize-none" />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full bg-gold text-gold-foreground hover:bg-gold/90 rounded-full h-14 group"
            >
              {loading ? "..." : t.contact.submit}
              <Send className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
