import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, Home, Building, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import { usePropertyContext } from "@/context/PropertyContext";

interface Property {
  id: string;
  image: string;
  title: string;
  price: string;
  address: string;
  features: {
    bedrooms: number;
    bathrooms: number;
    area: string;
    type: string;
  };
  isFeatured: boolean;
  propertyType: "apartment" | "house" | "commercial";
}

interface FeaturedPropertiesProps {
  title?: string;
  subtitle?: string;
  properties?: Property[];
}

const FeaturedProperties = ({
  title = "Imóveis em Destaque no Cambuci",
  subtitle = "Encontre as melhores opções de imóveis disponíveis neste charmoso bairro de São Paulo",
  properties = [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      title: "Apartamento Moderno",
      price: "R$ 450.000",
      address: "Rua Lavapés, 100 - Cambuci",
      features: {
        bedrooms: 2,
        bathrooms: 1,
        area: "75m²",
        type: "Apartamento",
      },
      isFeatured: true,
      propertyType: "apartment",
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      title: "Casa com Quintal",
      price: "R$ 780.000",
      address: "Rua Justo Azambuja, 42 - Cambuci",
      features: {
        bedrooms: 3,
        bathrooms: 2,
        area: "120m²",
        type: "Casa",
      },
      isFeatured: false,
      propertyType: "house",
    },
    {
      id: "3",
      image:
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
      title: "Sala Comercial",
      price: "R$ 320.000",
      address: "Av. Lins de Vasconcelos, 355 - Cambuci",
      features: {
        bedrooms: 0,
        bathrooms: 1,
        area: "45m²",
        type: "Comercial",
      },
      isFeatured: false,
      propertyType: "commercial",
    },
    {
      id: "4",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      title: "Apartamento Garden",
      price: "R$ 650.000",
      address: "Rua Climaco Barbosa, 77 - Cambuci",
      features: {
        bedrooms: 3,
        bathrooms: 2,
        area: "95m²",
        type: "Apartamento",
      },
      isFeatured: true,
      propertyType: "apartment",
    },
    {
      id: "5",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      title: "Sobrado Reformado",
      price: "R$ 920.000",
      address: "Rua do Lavapés, 230 - Cambuci",
      features: {
        bedrooms: 4,
        bathrooms: 3,
        area: "180m²",
        type: "Casa",
      },
      isFeatured: false,
      propertyType: "house",
    },
    {
      id: "6",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
      title: "Loja Térrea",
      price: "R$ 550.000",
      address: "Av. Lacerda Franco, 123 - Cambuci",
      features: {
        bedrooms: 0,
        bathrooms: 1,
        area: "70m²",
        type: "Comercial",
      },
      isFeatured: false,
      propertyType: "commercial",
    },
  ],
}: FeaturedPropertiesProps) => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<number[]>([300000, 1000000]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { isSaved } = usePropertyContext();

  // Filter properties based on active tab, price range and search term
  const filteredProperties = properties.filter((property) => {
    // Filter by property type
    if (activeTab !== "all" && property.propertyType !== activeTab) {
      return false;
    }

    // Filter by price (convert string price to number for comparison)
    const numericPrice = parseInt(property.price.replace(/\D/g, ""));
    if (numericPrice < priceRange[0] || numericPrice > priceRange[1]) {
      return false;
    }

    // Filter by search term
    if (
      searchTerm &&
      !(
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.address.toLowerCase().includes(searchTerm.toLowerCase())
      )
    ) {
      return false;
    }

    return true;
  });

  // Format price for display
  const formatPrice = (price: number) => {
    return `R$ ${price.toLocaleString("pt-BR")}`;
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative">
              <Input
                placeholder="Buscar por endereço ou título"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>

            <div>
              <Select
                defaultValue="all"
                onValueChange={(value) => setActiveTab(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Tipo de Imóvel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os Imóveis</SelectItem>
                  <SelectItem value="apartment">Apartamentos</SelectItem>
                  <SelectItem value="house">Casas</SelectItem>
                  <SelectItem value="commercial">Comercial</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <div className="flex flex-col space-y-2">
                <span className="text-sm text-gray-500">
                  Faixa de Preço: {formatPrice(priceRange[0])} -{" "}
                  {formatPrice(priceRange[1])}
                </span>
                <Slider
                  defaultValue={[300000, 1000000]}
                  min={100000}
                  max={2000000}
                  step={50000}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="py-4"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Property Type Tabs */}
        <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 w-full max-w-md mx-auto">
            <TabsTrigger value="all" className="flex items-center gap-2">
              <span>Todos</span>
            </TabsTrigger>
            <TabsTrigger value="apartment" className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              <span>Apartamentos</span>
            </TabsTrigger>
            <TabsTrigger value="house" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              <span>Casas</span>
            </TabsTrigger>
            <TabsTrigger value="commercial" className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              <span>Comercial</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                id={property.id}
                image={property.image}
                title={property.title}
                price={property.price}
                address={property.address}
                features={property.features}
                isFeatured={property.isFeatured}
                location={property.location || { lat: -23.5505, lng: -46.6333 }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow">
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Nenhum imóvel encontrado
            </h3>
            <p className="text-gray-500">
              Tente ajustar seus filtros para ver mais opções
            </p>
          </div>
        )}

        {/* View All Button */}
        {filteredProperties.length > 0 && (
          <div className="mt-12 text-center flex justify-center gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2">
              Ver Todos os Imóveis
            </Button>
            <Link to="/saved">
              <Button
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-2"
              >
                Ver Imóveis Salvos
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProperties;
