import React from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import PropertyDetail from "@/components/landing/PropertyDetail";

const properties = [
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
    location: { lat: -23.5505, lng: -46.6333 },
    description:
      "Lindo apartamento moderno no coração do Cambuci, com acabamento de alto padrão, piso em porcelanato, cozinha planejada e área de serviço. Localizado próximo a estações de metrô, comércios e serviços.",
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
    location: { lat: -23.5525, lng: -46.6313 },
    description:
      "Excelente casa com quintal espaçoso no Cambuci. Possui 3 quartos amplos, sendo 1 suíte, sala de estar e jantar integradas, cozinha planejada e área de serviço. Quintal com churrasqueira e espaço gourmet.",
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
    location: { lat: -23.5485, lng: -46.6353 },
    description:
      "Sala comercial em excelente localização no Cambuci, próximo a grandes avenidas e fácil acesso. Ideal para escritórios, consultórios ou pequenas empresas. Prédio com segurança 24h e estacionamento.",
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
    location: { lat: -23.5515, lng: -46.6323 },
    description:
      "Apartamento garden com área privativa de 40m² em condomínio com completa infraestrutura de lazer. Possui 3 dormitórios sendo 1 suíte, sala ampla com 2 ambientes, cozinha planejada e área de serviço.",
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
    location: { lat: -23.5495, lng: -46.6343 },
    description:
      "Sobrado totalmente reformado no Cambuci, com 4 dormitórios sendo 2 suítes, sala ampla para 2 ambientes, cozinha planejada, área de serviço e quintal. Acabamento de alto padrão e localização privilegiada.",
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
    location: { lat: -23.5535, lng: -46.6303 },
    description:
      "Loja térrea com excelente visibilidade em avenida de grande fluxo no Cambuci. Possui vitrine ampla, espaço para estoque, banheiro e copa. Ideal para comércio ou serviços com grande circulação de pessoas.",
  },
];

const PropertyDetailPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-20">
        <Header />
        <main>
          <PropertyDetail properties={properties} />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default PropertyDetailPage;
