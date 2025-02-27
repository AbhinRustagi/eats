"use client";

import PlaceCard from "@/components/PlaceCard";
import { DropdownSelect } from "@/components/Select";
import { getRestaurants } from "@/lib/firebase";
import { useRestaurantsStore } from "@/lib/zustand";
import { useEffect } from "react";

export default function Home() {
  const {
    configs,
    updateRestaurants,
    filteredRestaurants,
    filters,
    updateFilter,
  } = useRestaurantsStore((state) => state);

  useEffect(() => {
    // Fetch restaurants
    getRestaurants().then((restaurants) => {
      updateRestaurants(restaurants);
    });
  }, []);

  return (
    <div>
      <div className="flex gap-2 flex-wrap">
        {/* Add cookies to remember preferences */}
        <DropdownSelect
          label="Country"
          placeholder="Country"
          options={["all", ...Object.keys(configs)]}
          name="country"
          updateFilter={updateFilter}
          defaultValue="all"
        />
        {filters.country !== "all" && (
          <>
            <DropdownSelect
              label="State"
              placeholder="State"
              options={(() => {
                if (filters.country === "all") {
                  return ["all"];
                }
                return ["all", ...Object.keys(configs[filters.country])];
              })()}
              updateFilter={updateFilter}
              defaultValue="all"
              name="state"
            />
            <DropdownSelect
              name="region"
              label="Region"
              placeholder="Region"
              options={(() => {
                if (filters.state === "all") {
                  return ["all"];
                }

                const regions = Array.from(
                  configs[filters.country][filters.state]
                );

                return ["all", ...regions];
              })()}
              updateFilter={updateFilter}
              defaultValue="all"
            />
          </>
        )}
        <DropdownSelect
          label="Type"
          placeholder="Type"
          options={["all", "bar", "cafe", "restaurant", "other"]}
          updateFilter={updateFilter}
          defaultValue="all"
          name="type"
        />
        <DropdownSelect
          label="Status"
          placeholder="Status"
          updateFilter={updateFilter}
          defaultValue="all"
          options={["all", "visited", "wishlisted"]}
          name="status"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-8">
        {filteredRestaurants.map((place) => (
          <PlaceCard key={place.title} {...place} />
        ))}
      </div>
    </div>
  );
}
