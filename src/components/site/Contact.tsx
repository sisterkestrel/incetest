import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { MapPin, Mail, Phone, Send, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useI18n } from "@/lib/i18n";

const step1Schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
});
const step2Schema = z.object({
  project: z.string().trim().min(1, "Please choose an event type").max(100),
  budget: z.string().trim().max(50).optional().or(z.literal("")),
  date: z.string().trim().max(50).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a bit more (10+ chars)").max(1000),
});

const eventTypes = ["Corporate", "Wedding", "Festival", "Brand Launch", "Private", "Other"];

export function Contact() {
  const { t } = useI18n();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    budget: "",
    date: "",
    message: "",
  });
  const [done, setDone] = useState(false);

  const update = (k: keyof typeof data, v: string) => setData((d) => ({ ...d, [k]: v }));

  const next = () => {
    const parsed = step1Schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setStep(2);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = step2Schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success(t.contact.success);
      setLoading(false);
      setDone(true);
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-3 glass rounded-3xl p-8 md:p-12"
          >
            {/* Stepper */}
            {!done && (
              <div className="flex items-center gap-4 mb-10">
                {[1, 2].map((n, i) => (
                  <div key={n} className="flex items-center gap-4 flex-1">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium border transition-all ${
                        step >= n
                          ? "bg-gold text-gold-foreground border-gold"
                          : "border-border/60 text-foreground/40"
                      }`}
                    >
                      {step > n ? <Check className="w-4 h-4" /> : n}
                    </div>
                    <div className="flex-1">
                      <div className={`text-xs tracking-widest uppercase ${step >= n ? "text-foreground" : "text-foreground/40"}`}>
                        {n === 1 ? "About you" : "Your project"}
                      </div>
                      <div className={`mt-2 h-0.5 rounded-full transition-all ${step > n || (step === n && i < 1) ? "bg-gold" : "bg-border/50"}`} />
                    </div>
                  </div>
                ))}
              </div>
            )}

            <AnimatePresence mode="wait">
              {done ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/20 text-gold flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl mb-3">Thank you, {data.name.split(" ")[0]}.</h3>
                  <p className="text-foreground/60">{t.contact.success}</p>
                </motion.div>
              ) : step === 1 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground/70 text-xs tracking-widest uppercase">{t.contact.name}</Label>
                      <Input id="name" value={data.name} onChange={(e) => update("name", e.target.value)} maxLength={100} className="bg-background/40 border-border/50 h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground/70 text-xs tracking-widest uppercase">{t.contact.email}</Label>
                      <Input id="email" type="email" value={data.email} onChange={(e) => update("email", e.target.value)} maxLength={255} className="bg-background/40 border-border/50 h-12" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground/70 text-xs tracking-widest uppercase">Phone (optional)</Label>
                    <Input id="phone" value={data.phone} onChange={(e) => update("phone", e.target.value)} maxLength={40} className="bg-background/40 border-border/50 h-12" />
                  </div>

                  <Button
                    type="button"
                    onClick={next}
                    size="lg"
                    className="w-full bg-gold text-gold-foreground hover:bg-gold/90 rounded-full h-14 group"
                  >
                    Continue
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={submit}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <Label className="text-foreground/70 text-xs tracking-widest uppercase">{t.contact.project}</Label>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {eventTypes.map((et) => (
                        <button
                          key={et}
                          type="button"
                          onClick={() => update("project", et)}
                          className={`px-4 py-2 rounded-full text-sm border transition-all ${
                            data.project === et
                              ? "bg-gold text-gold-foreground border-gold"
                              : "border-border/60 text-foreground/70 hover:border-gold/40 hover:text-foreground"
                          }`}
                        >
                          {et}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-foreground/70 text-xs tracking-widest uppercase">Budget range</Label>
                      <Input id="budget" value={data.budget} onChange={(e) => update("budget", e.target.value)} placeholder="e.g. 50–100k MAD" maxLength={50} className="bg-background/40 border-border/50 h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-foreground/70 text-xs tracking-widest uppercase">Target date</Label>
                      <Input id="date" value={data.date} onChange={(e) => update("date", e.target.value)} placeholder="Month or exact date" maxLength={50} className="bg-background/40 border-border/50 h-12" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground/70 text-xs tracking-widest uppercase">{t.contact.message}</Label>
                    <Textarea id="message" value={data.message} onChange={(e) => update("message", e.target.value)} maxLength={1000} rows={4} className="bg-background/40 border-border/50 resize-none" />
                  </div>

                  <div className="flex gap-3">
                    <Button
                      type="button"
                      variant="ghost"
                      size="lg"
                      onClick={() => setStep(1)}
                      className="rounded-full h-14 px-6 text-foreground/70 hover:bg-white/5"
                    >
                      <ArrowLeft className="mr-2 w-4 h-4" />
                      Back
                    </Button>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={loading}
                      className="flex-1 bg-gold text-gold-foreground hover:bg-gold/90 rounded-full h-14 group"
                    >
                      {loading ? "Sending..." : t.contact.submit}
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
