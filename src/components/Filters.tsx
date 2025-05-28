import { SortBy } from "@/lib/types";
import { useRestaurantsStore } from "@/lib/zustand";
import { DropdownSelect } from "./Select";

export default function Filters() {
  const { configs, filters, updateFilter, updateSortBy } = useRestaurantsStore(
    (state) => state
  );

  return (
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
      <DropdownSelect
        label="Sort By"
        placeholder="Sort By"
        options={["name", "rating"]}
        updateFilter={(_, value: string) => updateSortBy(value as SortBy)}
        defaultValue="name"
        name="sortBy"
      />
    </div>
  );
}
