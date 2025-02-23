"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export interface IPlaceCard {
  title: string;
  image: string;
  location: string;
  tags: string[];
}

export default function PlaceCard(props: IPlaceCard) {
  return (
    <Card className="w-full relative">
      <CardHeader>
        <CardTitle className="text-lg">{props.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          width={300}
          height={300}
          objectFit="cover"
          src={props.image}
          alt={props.title}
        />
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <div className="text-sm">📍 {props.location}</div>
        <div className="flex gap-2 mt-2">
          {props.tags.map((tag) => (
            <div
              key={`${props.title}-tags-${tag}`}
              className="text-xs bg-gray-200 px-2 py-1 rounded-2xl"
            >
              {tag}
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
