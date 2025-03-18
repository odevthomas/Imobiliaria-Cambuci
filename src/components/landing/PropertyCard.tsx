import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Bed, Bath, Maximize, Heart, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { usePropertyContext } from "@/context/PropertyContext";

interface PropertyFeature {
  icon: React.ReactNode;
  label: string;
}

interface PropertyCardProps {
  id?: string;
  image?: string;
  title?: string;
  price?: string;
  address?: string;
  features?: {
    bedrooms?: number;
    bathrooms?: number;
    area?: string;
    type?: string;
  };
  isFeatured?: boolean;
  location?: {
    lat: number;
    lng: number;
  };
  showRemoveButton?: boolean;
}

const PropertyCard = ({
  id = "1",
  image = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
  title = "Apartamento Moderno",
  price = "R$ 450.000",
  address = "Rua Lavapés, 100 - Cambuci",
  features = {
    bedrooms: 2,
    bathrooms: 1,
    area: "75m²",
    type: "Apartamento",
  },
  isFeatured = false,
  location = { lat: -23.5505, lng: -46.6333 },
  showRemoveButton = false,
}: PropertyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { saveProperty, removeProperty, isSaved } = usePropertyContext();
  const isFavorite = isSaved(id);

  const handleSaveProperty = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isFavorite) {
      removeProperty(id);
    } else {
      saveProperty({
        id,
        image,
        title,
        price,
        address,
        features,
        isFeatured,
        propertyType:
          features.type === "Apartamento"
            ? "apartment"
            : features.type === "Casa"
              ? "house"
              : "commercial",
        location,
      });
    }
  };

  const propertyFeatures: PropertyFeature[] = [
    {
      icon: <Bed className="h-4 w-4" />,
      label: `${features.bedrooms} Quartos`,
    },
    {
      icon: <Bath className="h-4 w-4" />,
      label: `${features.bathrooms} Banheiros`,
    },
    { icon: <Maximize className="h-4 w-4" />, label: features.area },
    { icon: <Home className="h-4 w-4" />, label: features.type },
  ];

  return (
    <Card
      className="w-full max-w-[350px] overflow-hidden transition-all duration-300 bg-white hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/property/${id}`} className="block">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="h-[220px] w-full object-cover transition-transform duration-500"
            style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          />
          {isFeatured && (
            <Badge className="absolute top-3 left-3 bg-orange-500 hover:bg-orange-600">
              Destaque
            </Badge>
          )}
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-3 right-3 rounded-full bg-white/80 hover:bg-white ${isFavorite ? "text-red-500" : "text-gray-500"}`}
            onClick={handleSaveProperty}
          >
            <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
          </Button>
          {showRemoveButton && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-3 right-14 rounded-full bg-white/80 hover:bg-white text-gray-500 hover:text-red-500"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                removeProperty(id);
              }}
            >
              <Trash2 className="h-5 w-5" />
            </Button>
          )}
        </div>

        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl font-bold text-gray-800">
              {title}
            </CardTitle>
            <span className="text-lg font-bold text-blue-600">{price}</span>
          </div>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <span className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
            {address}
          </p>
        </CardHeader>
      </Link>

      <CardContent>
        <div className="grid grid-cols-2 gap-y-2 gap-x-4">
          {propertyFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm text-gray-600"
            >
              {feature.icon}
              <span>{feature.label}</span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-2 pb-4">
        <Link to={`/property/${id}`} className="w-full">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Ver Detalhes
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
