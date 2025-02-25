export interface Place {
  title: string;
  image: string;
  country: string;
  state: string;
  region: string;
  type: "bar" | "cafe" | "restaurant" | "other";
  status: "visited" | "wishlisted";
  cuisine?: string;
  rating: number;
  tags?: string[];
  notes: string;
  longitude: number;
  latitude: number;
}
