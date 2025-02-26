"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Place } from "@/lib/types";
import Link from "next/link";
import { bgColors } from "@/lib/tags-colors";

export type IPlaceCard = Omit<Place, "longitude" | "latitude" | "notes">;

export default function PlaceCard(props: IPlaceCard) {
  return (
    <Card className="w-full relative overflow-hidden">
      <Link
        className="inset absolute h-full w-full z-10 top-0 left-0"
        href={`/place/${props.id}`}
      ></Link>
      <CardHeader className="py-3 px-3 flex flex-row gap-1 justify-between space-y-0 items-start">
        <CardTitle className="text-lg font-bold flex-1">
          {props.title}
        </CardTitle>
        <div className="font-bold text-lg">{props.rating}🍴</div>
      </CardHeader>
      <CardContent className="px-3 pb-0">
        <Image
          width={500}
          height={150}
          className="max-h-60 md:max-h-40 rounded"
          objectFit="cover"
          src={props.image}
          alt={props.title}
        />
      </CardContent>
      <CardFooter className="py-3 px-3 flex flex-col items-start">
        <div className="text-sm">
          📍 {props.region}, {props.state}, {props.country}
        </div>
        <div className="flex gap-2 mt-2">
          <div
            className={`text-xs ${
              bgColors[props.status]
            } px-2 py-1 rounded-2xl`}
          >
            {props.status}
          </div>
          <div
            className={`text-xs ${bgColors[props.type]} px-2 py-1 rounded-2xl`}
          >
            {props.type}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
