import { Badge } from "@/components/ui/badge";
import { Place } from "@/lib/types";
import Image from "next/image";
import { badgeVariants } from "./ui/badge";

export type IPlaceCard = Omit<Place, "longitude" | "latitude" | "notes">;

export default function PlaceCard(props: IPlaceCard) {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow overflow-hidden h-content">
      <div className="max-w-96 min-w-52 min-h-60 max-h-96 relative w-full object-cover">
        <Image alt={props.title} src={props.image} fill objectFit="cover" />
        <div className="bg-gradient-to-t from-background to-transparent absolute w-full bottom-0 z-10 h-40 flex justify-between gap-2 items-end px-4">
          <h2 className="text-lg">{props.title}</h2>
          <div className="font-bold text-lg min-w-12 text-right">
            {props.rating ? "🍴" + props.rating?.toString() : "⌛️"}
          </div>
        </div>
      </div>
      <div className="pt-2 px-4 pb-4">
        <div className="text-xs mb-3">
          📍 {props.region}, {props.state}, {props.country}
        </div>
        <div className="mt-2 flex gap-2">
          <Badge className={badgeVariants({ variant: "secondary" })}>
            {props.status}
          </Badge>
          <Badge>{props.type}</Badge>
        </div>
      </div>
    </div>
  );
}
