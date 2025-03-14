export interface Place {
  id: string;
  title: string;
  image: string;
  country: string;
  state: string;
  region: string;
  type: "bar" | "cafe" | "restaurant" | "other";
  status: "wishlisted" | "visited";
  rating?: number;
  tags?: string[];
  notes: string;
  longitude: number;
  latitude: number;
}

interface Configs {
  [country: string]: {
    [state: string]: Set<string>;
  };
}

export interface Filters {
  country: string;
  state: string;
  region: string;
  type: string;
  status: string;
}

export type SortBy = "name" | "rating";

export interface ContextState {
  isFetching: boolean;
  restaurants: Place[];
  filters: Filters;
  filteredRestaurants: Place[];
  configs: Configs;
  sortBy: SortBy;
}

export interface ContextAction {
  updateFetching: (isFetching: boolean) => void;
  updateFilter: (key: keyof Filters | SortBy, value: string) => void;
  updateRestaurants: (restaurants: ContextState["restaurants"]) => void;
  updateConfigs: (configs: ContextState["configs"]) => void;
  updateSortBy: (sortBy: SortBy) => void;
}
