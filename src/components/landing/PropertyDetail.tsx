import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Bed,
  Bath,
  Maximize,
  Home,
  Heart,
  Share2,
  MapPin,
} from "lucide-react";
import { usePropertyContext } from "@/context/PropertyContext";
import PropertyMap from "./PropertyMap";

interface PropertyDetailProps {
  properties?: any[];
}

const PropertyDetail = ({ properties = [] }: PropertyDetailProps) => {
  const { id } = useParams<{ id: string }>();
  const { saveProperty, removeProperty, isSaved } = usePropertyContext();

  // Find the property with the matching ID
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Imóvel não encontrado
        </h2>
        <p className="text-gray-600 mb-6">
          O imóvel que você está procurando não existe ou foi removido.
        </p>
        <Link to="/landing">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Voltar para a página inicial
          </Button>
        </Link>
      </div>
    );
  }

  const toggleSave = () => {
    if (isSaved(property.id)) {
      removeProperty(property.id);
    } else {
      saveProperty(property);
    }
  };

  const propertyIsSaved = isSaved(property.id);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6 flex items-center justify-between">
        <Link to="/landing">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Voltar
          </Button>
        </Link>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => {
              navigator
                .share({
                  title: property.title,
                  text: `Confira este imóvel: ${property.title} - ${property.price}`,
                  url: window.location.href,
                })
                .catch((err) => console.error("Erro ao compartilhar:", err));
            }}
          >
            <Share2 size={16} />
            Compartilhar
          </Button>
          <Button
            variant={propertyIsSaved ? "default" : "outline"}
            className={`flex items-center gap-2 ${propertyIsSaved ? "bg-red-500 hover:bg-red-600" : ""}`}
            onClick={toggleSave}
          >
            <Heart
              size={16}
              className={propertyIsSaved ? "fill-current" : ""}
            />
            {propertyIsSaved ? "Salvo" : "Salvar"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative rounded-xl overflow-hidden h-[400px] mb-6">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            {property.isFeatured && (
              <Badge className="absolute top-4 left-4 bg-orange-500 hover:bg-orange-600">
                Destaque
              </Badge>
            )}
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-start mb-2">
              <h1 className="text-3xl font-bold text-gray-800">
                {property.title}
              </h1>
              <span className="text-2xl font-bold text-blue-600">
                {property.price}
              </span>
            </div>
            <p className="text-gray-600 flex items-center gap-1 mb-4">
              <MapPin size={18} className="text-gray-400" />
              {property.address}
            </p>

            <div className="flex flex-wrap gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Bed className="h-5 w-5 text-blue-500" />
                <span className="text-gray-700">
                  {property.features.bedrooms} Quartos
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="h-5 w-5 text-blue-500" />
                <span className="text-gray-700">
                  {property.features.bathrooms} Banheiros
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Maximize className="h-5 w-5 text-blue-500" />
                <span className="text-gray-700">{property.features.area}</span>
              </div>
              <div className="flex items-center gap-2">
                <Home className="h-5 w-5 text-blue-500" />
                <span className="text-gray-700">{property.features.type}</span>
              </div>
            </div>
          </div>

          <Tabs defaultValue="description" className="mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="description">Descrição</TabsTrigger>
              <TabsTrigger value="features">Características</TabsTrigger>
              <TabsTrigger value="location">Localização</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Sobre este imóvel
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {property.description ||
                    `Este ${property.features.type.toLowerCase()} está localizado em uma das melhores áreas do Cambuci, com fácil acesso a transporte público, comércio local e áreas de lazer. A propriedade oferece ${property.features.bedrooms} quartos espaçosos, ${property.features.bathrooms} banheiros e uma área total de ${property.features.area}.`}
                </p>
              </div>
            </TabsContent>
            <TabsContent value="features" className="mt-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Características
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FeatureItem text="Quartos espaçosos" />
                  <FeatureItem text="Cozinha planejada" />
                  <FeatureItem text="Sala ampla" />
                  <FeatureItem text="Área de serviço" />
                  <FeatureItem text="Vaga de garagem" />
                  <FeatureItem text="Armários embutidos" />
                  <FeatureItem text="Piso em porcelanato" />
                  <FeatureItem text="Iluminação natural" />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="location" className="mt-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Localização
                </h3>
                <div className="h-[300px] rounded-lg overflow-hidden mb-4">
                  <PropertyMap
                    location={
                      property.location || { lat: -23.5505, lng: -46.6333 }
                    }
                    address={property.address}
                  />
                </div>
                <p className="text-gray-600">
                  Localizado no bairro do Cambuci, próximo a diversos serviços e
                  facilidades como supermercados, farmácias, escolas e
                  transporte público.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Interessado neste imóvel?
            </h3>
            <p className="text-gray-600 mb-6">
              Preencha o formulário abaixo e entraremos em contato com você o
              mais breve possível.
            </p>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Olá, tenho interesse neste imóvel e gostaria de mais informações..."
                ></textarea>
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Enviar mensagem
              </Button>
            </form>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-2">
                Ou entre em contato diretamente:
              </p>
              <a
                href="tel:1134567890"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (11) 3456-7890
              </a>
              <a
                href="mailto:contato@imobiliariacambuci.com.br"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                contato@imobiliariacambuci.com.br
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-green-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
    <span className="text-gray-700">{text}</span>
  </div>
);

export default PropertyDetail;
