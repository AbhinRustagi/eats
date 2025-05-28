"use client";

import { Header } from "@/components/Header";
import PlaceCard from "@/components/PlaceCard";
import { DropdownSelect } from "@/components/Select";
import { Configs, Filters as FiltersType, Place, SortBy } from "@/lib/types";
import { useState } from "react";

interface Props {
  restaurants: Place[];
  configMap: Configs;
}

export default function PageContent(props: Props) {
  const restaurants = props.restaurants || [];
  const [filteredRestaurants, setFilteredRestaurants] = useState<Place[]>(
    props.restaurants
  );
  const [sortBy, setSortBy] = useState<SortBy>("name");
  const [filters, setFilters] = useState<FiltersType>({
    country: "all",
    state: "all",
    region: "all",
    type: "all",
    status: "all",
  });

  const updateFilter = (key: keyof FiltersType, value: string) => {
    const _filters = { ...filters, [key]: value };

    if (key === "country") {
      _filters.state = "all";
      _filters.region = "all";
    }

    if (key === "state") {
      _filters.region = "all";
    }

    const filteredRestaurants = restaurants.filter((restaurant) =>
      Object.keys(filters).every(
        (filterKey) =>
          _filters[filterKey as keyof FiltersType] === "all" ||
          restaurant[filterKey as keyof Place] ===
            _filters[filterKey as keyof FiltersType]
      )
    );

    setFilters(_filters);
    setFilteredRestaurants(filteredRestaurants);
  };

  const updateSortBy = (sortBy: SortBy) => {
    const _filteredRestaurants = filteredRestaurants.sort((a, b) => {
      if (sortBy === "name") {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === "rating") {
        return (b.rating || 0) - (a.rating || 0);
      }
      return 0;
    });

    setSortBy(sortBy);
    setFilteredRestaurants(_filteredRestaurants);
  };

  return (
    <>
      <Header />
      <div>
        <div className="flex gap-2 flex-wrap">
          <DropdownSelect
            label="Country"
            placeholder="Country"
            options={["all", ...Object.keys(props.configMap)]}
            name="country"
            updateFilter={updateFilter}
            defaultValue="all"
            value={filters.country}
          />
          {filters.country !== "all" && (
            <DropdownSelect
              label="State"
              placeholder="State"
              options={(() => {
                if (filters.country === "all") {
                  return ["all"];
                }
                return [
                  "all",
                  ...Object.keys(props.configMap[filters.country]),
                ];
              })()}
              updateFilter={updateFilter}
              defaultValue="all"
              name="state"
              value={filters.state}
            />
          )}
          {filters.country !== "all" && filters.state !== "all" && (
            <DropdownSelect
              name="region"
              label="Region"
              placeholder="Region"
              options={(() => {
                if (filters.state === "all") {
                  return ["all"];
                }

                const regions = Array.from(
                  props.configMap[filters.country][filters.state]
                );

                return ["all", ...regions];
              })()}
              updateFilter={updateFilter}
              defaultValue="all"
              value={filters.region}
            />
          )}
          <DropdownSelect
            label="Type"
            placeholder="Type"
            options={["all", "bar", "cafe", "restaurant", "other"]}
            updateFilter={updateFilter}
            defaultValue="all"
            name="type"
            value={filters.type}
          />
          <DropdownSelect
            label="Status"
            placeholder="Status"
            updateFilter={updateFilter}
            defaultValue="all"
            options={["all", "visited", "wishlisted"]}
            name="status"
            value={filters.status}
          />
          <DropdownSelect
            label="Sort By"
            placeholder="Sort By"
            options={["name", "rating"]}
            updateFilter={(_, value: string) => updateSortBy(value as SortBy)}
            defaultValue={sortBy}
            name="sortBy"
            value={sortBy}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-3 mt-8">
          {filteredRestaurants.map((place) => (
            <PlaceCard key={place.title} {...place} />
          ))}
        </div>
      </div>
    </>
  );
}
