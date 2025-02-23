import { Check } from "lucide-react";

export const AboutSection = () => {
  const benefits = [
    "Über 40 Jahre Erfahrung in der Edelstahlverarbeitung – maßgeschneiderte Lösungen aus bester Made-in-Italy-Tradition.",
    "Einsatz modernster Technologie und hochspezialisiertem Personal für einzigartige Edelstahlprodukte.",
    "Individuelle Küchenlösungen für Industrie, Handwerk und Design, die höchste Flexibilität bieten.",
    "Weltweit unterstützender Service durch das Netzwerk der Foster Group und maßgeschneiderte Produktintegrationen.",
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/OOk5SjgKJjQ"
              title="Bautek Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="animate-fade-in">
            <h2 className="mb-6">Warum Bautek von der Foster Group?</h2>
            <p className="mb-8">
              Bautek kombiniert jahrzehntelange Erfahrung mit moderner Technologie und höchster Präzision, um maßgeschneiderte Edelstahllösungen zu schaffen, die sowohl funktional als auch ästhetisch sind.
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
