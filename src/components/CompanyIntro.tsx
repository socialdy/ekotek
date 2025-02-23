export const CompanyIntro = () => {
  return (
    <section className="py-20 bg-[#1c2628]" id="ueber-bautek">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <img 
            src="/images/bautek_logo_white.png" 
            alt="Bautek Logo" 
            className="h-16 w-auto"
          />
        </div>

        <div className="mt-6 text-center text-white">
          <p className="mb-6">
            Seit über 40 Jahren formt Bautek Edelstahl, um einzigartige und exklusive Küchenlösungen in bester Made-in-Italy-Tradition zu schaffen. Das Unternehmen nutzt modernste Technologie und hochspezialisiertes Personal, um maßgeschneiderte Produkte zu fertigen. Diese einzigartigen Edelstahlkreationen bieten sowohl höchste Qualität als auch außergewöhnliches Design. Durch die enge Zusammenarbeit mit der Foster Group und deren globalem Netzwerk garantiert Bautek maßgeschneiderte Lösungen und erstklassigen Service weltweit.
          </p>
        </div>
      </div>
    </section>
  );
};
