import { Instagram, Linkedin, Facebook } from "lucide-react";
import logo from "@/assets/logo-new.png";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Incevent" width={40} height={40} className="h-10 w-10 object-contain" />
          <span className="text-xs text-foreground/40">— events and more</span>
        </div>
        <div className="flex items-center gap-6">
          {[Instagram, Linkedin, Facebook].map((I, i) => (
            <a key={i} href="#" className="text-foreground/50 hover:text-gold transition-colors" aria-label="Social">
              <I className="w-4 h-4" />
            </a>
          ))}
        </div>
        <div className="text-xs text-foreground/40">© {new Date().getFullYear()} Incevent · Marrakech</div>
      </div>
    </footer>
  );
}
