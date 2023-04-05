import { getLatinRestaurants } from "../../utils/google_places";
import Link from "next/link";

export default function LatinRestaurants({ restaurants }) {
  return (
    <div>
      <h1>Latin food in Köln / Comida latina en Colonia</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.place_id}>
            <Link href={`../restaurants/${restaurant.place_id}`}>
              {restaurant.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export async function getStaticProps() {
  const restaurants = await getLatinRestaurants();
  return { props: { restaurants } };
}
