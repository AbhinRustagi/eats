export interface Place {
  id: string;
  title: string;
  image: string;
  country: string;
  state: string;
  region: string;
  type: "bar" | "cafe" | "restaurant" | "other";
  status: "wishlisted" | "visited";
  rating: number;
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

export interface ContextState {
  isFetching: boolean;
  restaurants: Place[];
  filters: Filters;
  filteredRestaurants: Place[];
  configs: Configs;
}

export interface ContextAction {
  updateFetching: (isFetching: boolean) => void;
  updateFilter: (key: keyof Filters, value: string) => void;
  updateRestaurants: (restaurants: ContextState["restaurants"]) => void;
  updateConfig: (config: ContextState["config"]) => void;
}
