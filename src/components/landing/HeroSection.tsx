import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface HeroSectionProps {
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage = "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80",
  title = "Descubra o Melhor do Cambuci",
  subtitle = "Um bairro histórico com localização privilegiada e excelente infraestrutura para você e sua família",
  ctaText = "Encontre seu imóvel",
}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="relative h-[600px] w-full bg-blue-900">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col items-start justify-center px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mb-8 text-lg text-white/90 md:text-xl">{subtitle}</p>

          {/* CTA Button with Dialog */}
          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg transition-all duration-300 text-base md:text-lg px-8 py-6 h-auto"
              >
                {ctaText}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Encontre o imóvel ideal para você</DialogTitle>
                <DialogDescription>
                  Preencha o formulário abaixo para encontrarmos as melhores
                  opções no Cambuci.
                </DialogDescription>
              </DialogHeader>
              {/* Placeholder for PropertySearchForm */}
              <div className="p-6 space-y-4 border rounded-md bg-gray-50">
                <h3 className="text-lg font-medium">
                  Formulário de Busca de Imóveis
                </h3>
                <p className="text-sm text-gray-500">
                  Este é um espaço reservado para o componente
                  PropertySearchForm.
                </p>
              </div>
            </DialogContent>
          </Dialog>

          {/* Decorative Element */}
          <div className="mt-12 flex items-center">
            <div className="h-1 w-12 bg-yellow-400"></div>
            <span className="ml-4 text-sm font-medium text-yellow-400">
              IMÓVEIS EXCLUSIVOS NO CAMBUCI
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute bottom-0 right-0 h-24 w-24 bg-orange-500 opacity-80"></div>
      <div className="absolute bottom-24 right-24 h-16 w-16 bg-yellow-400 opacity-70"></div>
    </div>
  );
};

export default HeroSection;
