import { getLatinRestaurants } from "../../utils/google_places";
import RestaurantCard from "../../components/RestaurantCard";
import styled from "styled-components";
import Layout from "../../components/Layout";

const Title = styled.h1`
  margin-top: 100px; /* ajusta el margen superior según sea necesario */
`;

export default function LatinRestaurants({ restaurants }) {
  return (
    <Layout title="Latin Restaurants">
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.place_id} restaurant={restaurant} />
        ))}
      </div>
    </Layout>
  );
}
export async function getStaticProps() {
  const restaurants = await getLatinRestaurants();
  return { props: { restaurants } };
}
