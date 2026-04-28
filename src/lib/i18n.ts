import { createContext, useContext } from "react";

export type Lang = "FR" | "EN" | "AR";

type Dict = {
  nav: { services: string; portfolio: string; rooftop: string; contact: string };
  hero: { eyebrow: string; title: string; titleAccent: string; sub: string; cta: string; ctaAlt: string };
  stats: { events: string; partners: string; guests: string; satisfaction: string };
  services: { title: string; sub: string };
  portfolio: { title: string; sub: string };
  rooftop: { eyebrow: string; title: string; sub: string; cta: string };
  testimonials: { title: string };
  contact: { title: string; sub: string; name: string; email: string; project: string; message: string; submit: string; success: string };
};

export const translations: Record<Lang, Dict> = {
  FR: {
    nav: { services: "Services", portfolio: "Réalisations", rooftop: "Rooftop", contact: "Contact" },
    hero: {
      eyebrow: "Agence événementielle · Marrakech",
      title: "L'Art de",
      titleAccent: "l'Organisation",
      sub: "Concepteurs d'expériences sur-mesure pour marques d'exception. De la scénographie à la production technique, nous orchestrons chaque détail.",
      cta: "Démarrer un projet",
      ctaAlt: "Voir nos réalisations",
    },
    stats: { events: "Événements", partners: "Partenaires", guests: "Invités", satisfaction: "Satisfaction" },
    services: {
      title: "Un savoir-faire 360°",
      sub: "Six pôles d'expertise. Une exécution sans compromis.",
    },
    portfolio: { title: "Nos réalisations", sub: "Une sélection de moments inoubliables." },
    rooftop: {
      eyebrow: "Lieu exclusif",
      title: "Rooftop M Avenue",
      sub: "Un écrin urbain au cœur de Marrakech. Vue panoramique sur l'Atlas, ambiance signature, capacité modulable jusqu'à 400 invités.",
      cta: "Réserver le lieu",
    },
    testimonials: { title: "Ils nous font confiance" },
    contact: {
      title: "Parlons de votre projet",
      sub: "Réponse sous 24h ouvrées.",
      name: "Nom complet",
      email: "Email",
      project: "Type d'événement",
      message: "Votre vision",
      submit: "Envoyer la demande",
      success: "Merci ! Nous revenons vers vous très vite.",
    },
  },
  EN: {
    nav: { services: "Services", portfolio: "Portfolio", rooftop: "Rooftop", contact: "Contact" },
    hero: {
      eyebrow: "Event agency · Marrakech",
      title: "The Art of",
      titleAccent: "Organization",
      sub: "Bespoke experience designers for exceptional brands. From scenography to technical production, we orchestrate every detail.",
      cta: "Start your project",
      ctaAlt: "Our work",
    },
    stats: { events: "Events", partners: "Partners", guests: "Guests", satisfaction: "Satisfaction" },
    services: { title: "A 360° expertise", sub: "Six pillars. One uncompromising execution." },
    portfolio: { title: "Selected work", sub: "A curated selection of unforgettable moments." },
    rooftop: {
      eyebrow: "Exclusive venue",
      title: "Rooftop M Avenue",
      sub: "An urban jewel in the heart of Marrakech. Panoramic Atlas views, signature atmosphere, modular capacity up to 400 guests.",
      cta: "Book the venue",
    },
    testimonials: { title: "Trusted by leaders" },
    contact: {
      title: "Let's talk",
      sub: "We reply within 24 business hours.",
      name: "Full name",
      email: "Email",
      project: "Event type",
      message: "Your vision",
      submit: "Send request",
      success: "Thank you! We'll be in touch shortly.",
    },
  },
  AR: {
    nav: { services: "خدمات", portfolio: "أعمالنا", rooftop: "روفتوب", contact: "اتصل" },
    hero: {
      eyebrow: "وكالة فعاليات · مراكش",
      title: "فن",
      titleAccent: "التنظيم",
      sub: "مصممو تجارب حصرية للعلامات التجارية الاستثنائية. من السينوغرافيا إلى الإنتاج التقني، نحن ندير كل التفاصيل.",
      cta: "ابدأ مشروعك",
      ctaAlt: "شاهد أعمالنا",
    },
    stats: { events: "فعالية", partners: "شريك", guests: "ضيف", satisfaction: "رضا" },
    services: { title: "خبرة شاملة 360°", sub: "ست تخصصات. تنفيذ بلا تنازلات." },
    portfolio: { title: "أعمالنا المختارة", sub: "لحظات لا تُنسى." },
    rooftop: {
      eyebrow: "مكان حصري",
      title: "روفتوب M Avenue",
      sub: "جوهرة حضرية في قلب مراكش. إطلالة بانورامية على الأطلس، أجواء مميزة، سعة حتى 400 ضيف.",
      cta: "احجز المكان",
    },
    testimonials: { title: "يثقون بنا" },
    contact: {
      title: "لنتحدث عن مشروعك",
      sub: "نرد خلال 24 ساعة عمل.",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      project: "نوع الفعالية",
      message: "رؤيتك",
      submit: "إرسال الطلب",
      success: "شكراً! سنتواصل معك قريباً.",
    },
  },
};

export const I18nContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict }>({
  lang: "EN",
  setLang: () => {},
  t: translations.EN,
});

export const useI18n = () => useContext(I18nContext);
