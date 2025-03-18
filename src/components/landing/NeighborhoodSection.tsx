import React from "react";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Building,
  Palmtree,
  Coffee,
  ShoppingBag,
  Train,
} from "lucide-react";

interface NeighborhoodSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

const NeighborhoodSection = ({
  title = "Conheça o Cambuci",
  subtitle = "Um bairro tradicional com excelente localização e infraestrutura completa",
  backgroundImage = "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1200&q=80",
}: NeighborhoodSectionProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">{title}</h2>
          <p className="text-blue-700 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <img
              src={backgroundImage}
              alt="Bairro do Cambuci"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end">
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="h-5 w-5 text-orange-400 mr-2" />
                  <span className="text-white font-medium">
                    Cambuci, São Paulo
                  </span>
                </div>
                <p className="text-white/90 text-sm">
                  Um dos bairros mais tradicionais e bem localizados da cidade
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-800">
              Por que escolher o Cambuci?
            </h3>
            <p className="text-gray-600">
              O Cambuci é um bairro tradicional de São Paulo que combina
              história, excelente localização e infraestrutura completa. Próximo
              ao centro e com fácil acesso a diversas regiões da cidade, o
              bairro oferece qualidade de vida e valorização imobiliária.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <FeatureCard
                icon={<Building className="h-6 w-6 text-orange-500" />}
                title="Arquitetura"
                description="Mistura de construções históricas e empreendimentos modernos"
              />
              <FeatureCard
                icon={<Train className="h-6 w-6 text-orange-500" />}
                title="Transporte"
                description="Fácil acesso ao metrô e diversas linhas de ônibus"
              />
              <FeatureCard
                icon={<Palmtree className="h-6 w-6 text-orange-500" />}
                title="Áreas Verdes"
                description="Praças e áreas de lazer para toda a família"
              />
              <FeatureCard
                icon={<ShoppingBag className="h-6 w-6 text-orange-500" />}
                title="Comércio"
                description="Comércio local diversificado e completo"
              />
            </div>

            <Button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white">
              Conheça mais sobre o bairro
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
      <div className="flex items-start">
        <div className="mr-3 mt-1">{icon}</div>
        <div>
          <h4 className="font-medium text-blue-900">{title}</h4>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default NeighborhoodSection;
