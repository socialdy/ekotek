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
      name: "Andreas Hofmann",
      role: "Innenarchitekt",
      quote: "Die Finalmente-Outdoorküche hat mich wirklich überzeugt. Der marinem Edelstahl macht nicht nur optisch was her, sondern hält auch allen Bedingungen im Freien stand. Sie ist gut durchdacht, hat viel Stauraum und ist für meine Kunden genau das, was sie sich gewünscht haben – modern und gleichzeitig funktional.",
    },
    {
      id: 2,
      name: "Sabine Keller",
      role: "Privatkunde",
      quote: "Wir haben uns für die Insieme-Outdoorküche entschieden und ich kann sie nur empfehlen. Die Anpassungsfähigkeit der Oberflächen hat mir geholfen, die Küche perfekt in unseren Garten einzufügen. Das Material fühlt sich hochwertig an, und die Funktionalität ist einfach top – genau, was wir uns gewünscht haben.",
    },
    {
      id: 3,
      name: "Johannes Meier",
      role: "Schreinermeister",
      quote: "Die QUI-Küchenmodule sind wirklich ein Highlight in meinen Projekten. Sie lassen sich so flexibel kombinieren, dass sie in jede noch so anspruchsvolle Küche passen. Der Edelstahl ist robust und die Module lassen sich einfach montieren – für mich als Handwerker eine wahre Freude.",
    },
    {
      id: 4,
      name: "Katrin Lehmann",
      role: "Möbeldesignerin",
      quote: "Die Ognidove Kochfelder sind absolut genial. Sie sind nicht nur funktional, sondern haben auch einen besonderen ästhetischen Wert. Das Design ist modern und lässt sich hervorragend in hochwertige Küchen integrieren. Genau das, was ich für meine Kunden suche – eine perfekte Kombination aus Technik und Stil.",
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
