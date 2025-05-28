import { getRestaurants } from "@/lib/firebase";
import PageContent from "./_client";

export default async function Home() {
  const restaurants = await getRestaurants();

  return <PageContent restaurants={restaurants} />;
}
