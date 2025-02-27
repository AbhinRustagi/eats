import { create } from "zustand";
import { ContextAction, ContextState, Filters, Place } from "./types";
import { buildConfigMap } from "./utils";

export const useRestaurantsStore = create<ContextState & ContextAction>(
  (set) => ({
    restaurants: [],
    filters: {
      country: "all",
      state: "all",
      region: "all",
      type: "all",
      status: "all",
    },
    filteredRestaurants: [],
    configs: {},
    updateRestaurants: (restaurants) =>
      set(() => {
        const configs = buildConfigMap(restaurants);
        return {
          restaurants,
          filteredRestaurants: restaurants,
          configs,
        };
      }),
    updateConfig: (config) => set(() => ({ configs: config })),
    updateFilter: (key, value) =>
      set((state) => {
        const filters = { ...state.filters, [key]: value };

        const filteredRestaurants = state.restaurants.filter((restaurant) =>
          Object.keys(filters).every(
            (filterKey) =>
              filters[filterKey as keyof Filters] === "all" ||
              restaurant[filterKey as keyof Place] ===
                filters[filterKey as keyof Filters]
          )
        );

        return {
          filters,
          filteredRestaurants,
        };
      }),
  })
);
