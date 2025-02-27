import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Place } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function buildConfigMap(restaurants: Place[]) {
  const configs: {
    [country: string]: {
      [state: string]: Set<string>;
    };
  } = {};

  restaurants.forEach((restaurant) => {
    if (!configs[restaurant.country]) {
      configs[restaurant.country] = {};
    }

    if (!configs[restaurant.country][restaurant.state]) {
      configs[restaurant.country][restaurant.state] = new Set();
    }

    configs[restaurant.country][restaurant.state].add(restaurant.region);
  });

  return configs;
}
