import { DropdownSelect } from "@/components/Select";

export default function Home() {
  return (
    <div>
      <p className="mb-8">
        collection of places I have eaten at, and would like to eat at - with
        notes & reviews.
      </p>
      <div className="flex gap-2 flex-wrap">
        {/* Add cookies to remember preferences */}
        {/* Loads dynamically */}
        <DropdownSelect label="Country" placeholder="Country" options={[]} />
        {/* Loads dynamically */}
        <DropdownSelect label="State" placeholder="State" options={[]} />
        {/* Loads dynamically */}
        <DropdownSelect label="Region" placeholder="Region" options={[]} />
        <DropdownSelect
          label="Type"
          placeholder="Type"
          options={["All", "Bar", "Cafe", "Restaurant", "Other"]}
        />
        <DropdownSelect
          label="Visited/Wishlisted"
          placeholder="Visited/Wishlisted"
          options={["All", "Visited", "Wishlisted"]}
        />
      </div>
    </div>
  );
}
