export const CompanyIntro = () => {
  return (
    <section className="py-20 bg-[#333333]" id="ueber-ekotek">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <img 
            src="/images/ekotek_logo_white.png" 
            alt="Ekotek Logo" 
            className="h-16 w-auto"
          />
        </div>

        <div className="mt-6 text-center text-white">
          <p className="mb-6">
            Ekotek, Teil der Foster Group, ist auf die Verarbeitung von innovativen Materialien Materialien wie Corian, Solid Surface, Fenix und Paperstone spezialisiert. Das Unternehmen bietet maßgeschneiderte Lösungen, die nach den individuellen Anforderungen der Kunden entwickelt werden. Besonders bekannt ist Ekotek für die Produktion von speziellen Küchenarbeitsplatten und Möbeln, die höchste Ansprüche an Design, Funktionalität und Effizienz erfüllen. Mit einem Team aus Fachleuten und modernster Technologie schafft Ekotek langlebige, ästhetische und funktionale Lösungen, die den Raum über Jahre hinweg bereichern.
          </p>
        </div>
      </div>
    </section>
  );
};
