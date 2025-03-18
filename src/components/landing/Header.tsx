import React from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  logo?: string;
  navLinks?: Array<{ label: string; href: string }>;
  contactNumber?: string;
}

const Header = ({
  logo = "/vite.svg",
  navLinks = [
    { label: "Início", href: "/landing" },
    { label: "Imóveis", href: "/imoveis" },
    { label: "Cambuci", href: "/cambuci" },
    { label: "Salvos", href: "/saved" },
    { label: "Sobre Nós", href: "/sobre" },
    { label: "Contato", href: "/contato" },
  ],
  contactNumber = "(11) 3456-7890",
}: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-blue-800 text-white z-50 shadow-md">
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Imobiliária Cambuci" className="h-10 mr-3" />
            <span className="text-xl font-bold">Imobiliária Cambuci</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="text-white hover:text-yellow-300 transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <Button
            variant="outline"
            className="bg-orange-500 hover:bg-orange-600 text-white border-none flex items-center gap-2"
          >
            <Phone size={18} />
            <span className="hidden sm:inline">{contactNumber}</span>
          </Button>
          <button className="ml-4 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
