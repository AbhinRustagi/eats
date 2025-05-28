"use client";

import Filters from "@/components/Filters";
import { Place } from "@/lib/types";
import { useState } from "react";
import PlaceCard from "@/components/PlaceCard";
import { Header } from "@/components/Header";

interface Props {
  restaurants: Place[];
}

export default function PageContent(props: Props) {
  const [restaurants, setRestaurants] = useState<Place[]>(props.restaurants);

  return (
    <>
      <Header />
      <div>
        <Filters />
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-3 mt-8">
          {restaurants.map((place) => (
            <PlaceCard key={place.title} {...place} />
          ))}
        </div>
      </div>
    </>
  );
}
