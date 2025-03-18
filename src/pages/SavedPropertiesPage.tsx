import React from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { usePropertyContext } from "@/context/PropertyContext";
import PropertyCard from "@/components/landing/PropertyCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SavedPropertiesPage = () => {
  const { savedProperties } = usePropertyContext();

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-20">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-blue-800 mb-2">
                Imóveis Salvos
              </h1>
              <p className="text-gray-600">
                {savedProperties.length > 0
                  ? `Você tem ${savedProperties.length} imóveis salvos`
                  : "Você ainda não salvou nenhum imóvel"}
              </p>
            </div>
            <Link to="/landing">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Voltar
              </Button>
            </Link>
          </div>

          {savedProperties.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {savedProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  image={property.image}
                  title={property.title}
                  price={property.price}
                  address={property.address}
                  features={property.features}
                  isFeatured={property.isFeatured}
                  id={property.id}
                  location={property.location}
                  showRemoveButton
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-lg shadow">
              <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Nenhum imóvel salvo
              </h3>
              <p className="text-gray-500 mb-6">
                Você ainda não salvou nenhum imóvel. Explore nossos imóveis e
                clique no coração para salvar seus favoritos.
              </p>
              <Link to="/landing">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Explorar Imóveis
                </Button>
              </Link>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default SavedPropertiesPage;
