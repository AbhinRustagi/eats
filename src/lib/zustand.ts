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
    isFetching: false,
    updateFetching: (isFetching) => set(() => ({ isFetching })),
    updateRestaurants: (restaurants) =>
      set(() => {
        const configs = buildConfigMap(restaurants);
        return {
          restaurants,
          filteredRestaurants: restaurants,
          configs,
        };
      }),
    updateConfigs: (configs) => set(() => ({ configs: configs })),
    updateFilter: (key, value) =>
      set((state) => {
        const filters = { ...state.filters, [key]: value };

        if (key === "country") {
          filters.state = "all";
          filters.region = "all";
        }

        const filteredRestaurants = state.restaurants.filter((restaurant) =>
          Object.keys(filters).every(
            (filterKey) =>
              filters[filterKey as keyof Filters] === "all" ||
              restaurant[filterKey as keyof Place] ===
                filters[filterKey as keyof Filters]
          )
        );

        console.log(filters);

        return {
          filters,
          filteredRestaurants,
        };
      }),
  })
);
