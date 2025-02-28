import { Check } from "lucide-react";

export const AboutSection = () => {
  const benefits = [
    "Über 40 Jahre Erfahrung in der Verarbeitung innovativer Materialien wie Corian, Betacryl, Fenix und Paperstone.",
    "Spezialisiert auf maßgeschneiderte Lösungen mit modernen und innovativen Werkstoffen für unterschiedlichste Anwendungen.",
    "Individuelle Lösungen für Küchen, Badezimmer, Büros und viele weitere Projekte, die höchste Anforderungen an Design und Funktionalität erfüllen.",
    "Weltweite Unterstützung durch das Netzwerk der Foster Group und maßgeschneiderte Integrationen für optimale Ergebnisse.",
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
              <img 
                src="images/aboutsec.jpg" 
                alt="Ekotek Website"
                className="w-full h-auto" 
              />
          </div>
          <div className="animate-fade-in">
            <h2 className="mb-6">Warum Ekotek von der Foster Group?</h2>
            <p className="mb-8">
              Ekotek vereint jahrelange Erfahrung und innovative Materialien wie Corian, Betacryl, Fenix und Paperstone,
              um maßgeschneiderte Lösungen zu schaffen, die Design und Funktion perfekt kombinieren.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
