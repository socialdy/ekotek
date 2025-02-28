import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero_bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
        <div className="max-w-7xl animate-fade-in">
          <div className="absolute top-[-50px] left-0 w-[130px] h-[7px] bg-[#cd0000]" />

          {/* Hero Title */}
          <h1 className="text-white mb-6 max-w-screen-lg break-words">
          Premium Arbeits-<wbr></wbr>platten & Küchen-<wbr></wbr>lösungen
          </h1>

          {/* Hero Description */}
          <p className="text-white">
            Erleben Sie exklusives Küchendesign im Küchenstudio Bergheim – mit maßgefertigten Arbeitsplatten aus Corian, Fenix und Edelstahl von Ekotek. Perfekte Ästhetik und höchste Funktionalität für Ihre Traumküche.
          </p>

          {/* Button */}
          <a href="/#beratung">
            <Button className="mt-6 text-white bg-transparent hover:bg-transparent px-[1rem] py-[1.5rem] uppercase border-[1px] border-white/40 rounded-[4px] tracking-[0.15em] transition-all">
              Beratungstermin buchen
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
