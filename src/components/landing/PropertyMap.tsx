import React from "react";
import { MapPin } from "lucide-react";

interface PropertyMapProps {
  location: {
    lat: number;
    lng: number;
  };
  address: string;
}

const PropertyMap = ({ location, address }: PropertyMapProps) => {
  // In a real implementation, this would be an actual map component using Google Maps, Mapbox, etc.
  // For now, we'll create a placeholder that simulates a map
  return (
    <div className="h-full w-full bg-blue-50 flex flex-col items-center justify-center">
      <div className="relative w-full h-full">
        {/* Placeholder map background */}
        <div className="absolute inset-0 bg-blue-100 opacity-50">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url(https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${location.lng},${location.lat},14,0/800x600?access_token=pk.eyJ1IjoiZXhhbXBsZXVzZXIiLCJhIjoiY2xhYmVsIn0.ZXhhbWxsZQ)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        {/* Map grid lines */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="border border-blue-200 opacity-30"></div>
          ))}
        </div>

        {/* Center pin */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="animate-bounce">
            <MapPin size={32} className="text-red-500" />
          </div>
          <div className="mt-2 bg-white px-3 py-1 rounded-full shadow-md text-sm">
            {address}
          </div>
        </div>

        {/* Map controls */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <button className="bg-white w-8 h-8 rounded-md shadow flex items-center justify-center hover:bg-gray-100">
            <span className="text-gray-700 font-bold">+</span>
          </button>
          <button className="bg-white w-8 h-8 rounded-md shadow flex items-center justify-center hover:bg-gray-100">
            <span className="text-gray-700 font-bold">-</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyMap;
