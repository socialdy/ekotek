import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Markus Weber",
      role: "Innenarchitekt",
      quote: "Die Verwendung von Corian für die Arbeitsplatte in meiner neuesten Küche war eine großartige Entscheidung. Das Material ist nicht nur optisch ansprechend, sondern auch extrem widerstandsfähig. Es vereint Design und Funktionalität perfekt und erfüllt die Erwartungen meiner anspruchsvollen Kunden.",
    },
    {
      id: 2,
      name: "Claudia Müller",
      role: "Privatkunde",
      quote: "Ich habe mich für Betacryl entschieden, um die Arbeitsplatte meiner Küche zu gestalten. Es fühlt sich hochwertig an und ist unglaublich pflegeleicht. Ich bin begeistert von der Widerstandsfähigkeit des Materials und wie gut es sich in das moderne Design meiner Küche einfügt.",
    },
    {
      id: 3,
      name: "Tom Becker",
      role: "Schreinermeister",
      quote: "Fenix ist für mich als Handwerker eine ideale Wahl. Es lässt sich leicht verarbeiten und ist äußerst widerstandsfähig. Meine Kunden lieben das matte Finish und die Langlebigkeit dieses Materials – es bringt jede Küche auf ein neues Level.",
    },
    {
      id: 4,
      name: "Laura Schmidt",
      role: "Möbeldesignerin",
      quote: "Paperstone war die perfekte Wahl für ein nachhaltiges Designprojekt, das ich kürzlich abgeschlossen habe. Es kombiniert Umweltfreundlichkeit mit einem modernen, robusten Design. Meine Kunden sind begeistert von der Mischung aus Ästhetik und Funktionalität.",
    },
  ];

  return (
    <section className="py-20 bg-[#F2F2F2] text-black" id="referenzen">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-center mb-16">Referenzen</h2>
        <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-5xl mx-auto relative">
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-white p-8 h-full animate-fade-in">
                  <div className="flex flex-col h-full justify-between">
                    <p className="mb-8">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 -left-12 z-10 hover:bg-white/20 text-black" />
          <CarouselNext className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 -right-12 z-10 hover:bg-white/20 text-black" />
        </Carousel>
      </div>
    </section>
  );
};
