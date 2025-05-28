import { getRestaurants } from "@/lib/firebase";
import { buildConfigMap } from "@/lib/utils";
import PageContent from "./_client";

export default async function Home() {
  const restaurants = await getRestaurants();
  const configMap = buildConfigMap(restaurants);

  return <PageContent restaurants={restaurants} configMap={configMap} />;
}
