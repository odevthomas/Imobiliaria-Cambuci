export interface Property {
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
  location?: {
    lat: number;
    lng: number;
  };
  description?: string;
}
