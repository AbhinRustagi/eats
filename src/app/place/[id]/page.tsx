import { getRestaurantById, getRestaurants } from "@/lib/firebase";
import { bgColors } from "@/lib/tags-colors";
import { Place } from "@/lib/types";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const ids = await getRestaurants().then((restaurants) =>
    restaurants.map((restaurant) => restaurant.id)
  );

  return ids.map((id) => ({ id }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const place = (await getRestaurantById(id)) as Place;

  if (Object.keys(place).length < 2) {
    return notFound();
  }

  return (
    <section>
      <h1 className="font-bold text-xl mb-2 flex justify-between gap-2">
        <span className="flex-1">{place.title}</span>
        <span className="font-bold text-lg">{place.rating}🍴</span>
      </h1>
      <div className="text-sm">
        📍 {place.region}, {place.state}, {place.country}
      </div>
      <div className="flex gap-2 mt-2 mb-4">
        <div
          className={`text-xs ${bgColors[place.status]} px-2 py-1 rounded-2xl`}
        >
          {place.status}
        </div>
        <div
          className={`text-xs ${bgColors[place.type]} px-2 py-1 rounded-2xl`}
        >
          {place.type}
        </div>
      </div>
      <div className="my-4">{place.notes}</div>
      <Image
        className="w-full object-cover h-full relative rounded-lg mt-4"
        src={place.image}
        alt={place.title}
        width={800}
        height={400}
      />
    </section>
  );
}
