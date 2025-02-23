import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const products = [
  {
    id: 1,
    name: "Finalmente",
    image: "/images/finalmente.jpg", // Beispielbild
    description: "Eine mobile Outdoorküche aus marinem Edelstahl (AISI 316), die sich durch ihre hohe Verarbeitungsqualität und das Design auszeichnet.",
  },
  {
    id: 2,
    name: "Insieme",
    image: "/images/insieme.jpg", // Beispielbild
    description: "Eine funktionale Outdoorküche aus marinem Edelstahl mit individuell anpassbaren Oberflächen und robuster Struktur.",
  },
  {
    id: 3,
    name: "QUI",
    image: "/images/qui.jpg", // Beispielbild
    description: "Komplexe Küchenmodule aus marinem Edelstahl, die flexibel kombinierbar sind und sich an die Bedürfnisse des Nutzers anpassen lassen.",
  },
  {
    id: 4,
    name: "Ognidove",
    image: "/images/ognidove.jpg", // Beispielbild
    description: "Freistehende, mobile Kochfelder mit modernen Funktionen und technischer Exzellenz für höchste Ansprüche.",
  },
];





export const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();
  const slidesPerView = isMobile ? 1 : 2;

  const next = () => {
    setCurrentIndex((current) => 
      (current + slidesPerView >= products.length ? 0 : current + slidesPerView)
    );
  };

  const prev = () => {
    setCurrentIndex((current) => 
      (current - slidesPerView < 0 ? Math.max(0, products.length - slidesPerView) : current - slidesPerView)
    );
  };

  return (
    <section className="py-20 bg-white" id="produkte">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className=" text-center mb-12 ">Produkte</h2>
        <div className="relative">
          <div className="flex gap-4 md:gap-8">
            {products
              .slice(currentIndex, currentIndex + slidesPerView)
              .map((product) => (
                <div key={product.id} className="flex-1 animate-fade-in">
                  <div className="bg-white shadow-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className=""
                    />
                    <div className="p-6 md:p-8 text-center">
                      <h3 className="mb-3">{product.name}</h3>
                      <p className=" mb-4">{product.description}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white p-2 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white p-2 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};