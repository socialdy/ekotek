import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white backdrop-blur-sm border-b border-white">
      <div className="container mx-auto px-6 md:px-12">
        <nav className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <a href="/" className="h-6 sm:h-8">
              <img
                src="/images/bautek_logo.png"  // Bautek-Logo
                alt="Bautek Logo"
                className="h-full"
              />
            </a>
            <a href="https://kuechenstudio-bergheim.at" className="h-11 sm:h-14">
    <img
      src="/images/me_logo_black.png"
      alt="Küchenstudio Bergheim Logo"
      className="h-full"
    />
  </a>
          </div>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="#produkte"
              className=""
            >
              Produkte
            </a>
            <a
              href="#ueber-bautek"
              className=""
            >
              Über Bautek
            </a>
            <a
              href="/#referenzen"
              className=""
            >
              Referenzen
            </a>
            <a href="/#beratung">
            <Button className=" text-black bg-transparent hover:bg-transparent px-[1rem] py-[1.5rem]  uppercase border-[1px] border-black/40 rounded-[4px] tracking-[0.15em] transition-all">
              Termin vereinbaren
            </Button>
          </a>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-black] hover:text-black focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white text-black mobile  shadow-md">
            <div className="flex flex-col items-start gap-4 py-4 pl-6">
              <a
                href="/#produkte"
                className=""
                onClick={toggleMobileMenu}
              >
                Produkte
              </a>
              <a
                href="/#ueber-bautek"
                className=""
                onClick={toggleMobileMenu}
              >
                Über Bautek
              </a>
              <a
                href="/#referenzen"
                className=""
                onClick={toggleMobileMenu}
              >
                Referenzen
              </a>
              <a href="/#beratung">
              <Button className=" text-black bg-transparent hover:bg-transparent px-[1rem] py-[1.5rem]  uppercase border-[1px] border-black/40 rounded-[4px] tracking-[0.15em] transition-all">
               Termin vereinbaren
            </Button>
              </a>

            </div>
          </div>
        )}
      </div>
    </header>
  );
};
