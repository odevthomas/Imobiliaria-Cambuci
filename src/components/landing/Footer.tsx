import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-orange-400 flex-shrink-0 mt-1" />
                <span>
                  Rua Lavapés, 1025 - Cambuci, São Paulo - SP, 01519-000
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-orange-400" />
                <span>(11) 3333-4444</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-orange-400" />
                <span>contato@imobiliariacambuci.com.br</span>
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-orange-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-orange-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-orange-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-orange-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Neighborhood Map */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">
              Mapa do Bairro
            </h3>
            <div className="bg-blue-800 rounded-lg overflow-hidden h-48 w-full">
              {/* Placeholder for map - in a real implementation, this would be an actual map component */}
              <div className="h-full w-full flex items-center justify-center bg-blue-800 border border-blue-700">
                <MapPin className="h-8 w-8 text-orange-400" />
                <span className="ml-2">Mapa do Cambuci</span>
              </div>
            </div>
            <p className="mt-3 text-sm">
              O Cambuci é um bairro tradicional com excelente localização e
              infraestrutura completa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Imóveis à Venda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Imóveis para Alugar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Sobre o Cambuci
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Contact Form */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">
              Fale Conosco
            </h3>
            <form className="space-y-3">
              <div>
                <Input
                  type="text"
                  placeholder="Nome"
                  className="bg-blue-800 border-blue-700 text-white placeholder:text-blue-400"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-blue-800 border-blue-700 text-white placeholder:text-blue-400"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Mensagem"
                  className="bg-blue-800 border-blue-700 text-white placeholder:text-blue-400 min-h-[80px]"
                />
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-6 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Imobiliária Cambuci. Todos os direitos
            reservados.
          </p>
          <p className="mt-2 text-blue-300">
            Desenvolvido com ❤️ para o bairro do Cambuci
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
