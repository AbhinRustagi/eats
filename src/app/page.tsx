"use client";

import PlaceCard, { IPlaceCard } from "@/components/PlaceCard";
import { DropdownSelect } from "@/components/Select";
import { useState } from "react";

export default function Home() {
  const [places, setPlaces] = useState<IPlaceCard[]>([]);

  return (
    <div>
      <div className="flex gap-2 flex-wrap">
        {/* Add cookies to remember preferences */}
        {/* Loads dynamically */}
        <DropdownSelect label="Country" placeholder="Country" options={[]} />
        {/* Loads dynamically */}
        <DropdownSelect label="State" placeholder="State" options={[]} />
        {/* Loads dynamically */}
        <DropdownSelect label="Region" placeholder="Region" options={[]} />
        <DropdownSelect
          label="Type"
          placeholder="Type"
          options={["All", "Bar", "Cafe", "Restaurant", "Other"]}
        />
        <DropdownSelect
          label="Status"
          placeholder="Status"
          options={["All", "Visited", "Wishlisted"]}
        />
        <DropdownSelect
          label="Cuisine"
          placeholder="Cuisine"
          options={["All"]}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-8">
        {places.map((place) => (
          <PlaceCard key={place.title} {...place} />
        ))}
      </div>
    </div>
  );
}
