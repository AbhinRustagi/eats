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

export interface Configs {
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
