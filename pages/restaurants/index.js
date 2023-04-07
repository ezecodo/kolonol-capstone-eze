import { getLatinRestaurants } from "../../utils/google_places";
import RestaurantCard from "../../components/RestaurantCard";
import styled from "styled-components";
import Layout from "../../components/Layout";

const Title = styled.h1`
  margin-top: 100px; /* ajusta el margen superior según sea necesario */
`;

const StyledListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 90px;
  margin-bottom: 110px;
  justify-content: center;
`;

export default function LatinRestaurants({ restaurants }) {
  return (
    <Layout title="Latin Restaurants">
      <StyledListContainer>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.place_id} restaurant={restaurant} />
        ))}
      </StyledListContainer>
    </Layout>
  );
}
export async function getStaticProps() {
  const restaurants = await getLatinRestaurants();
  return { props: { restaurants } };
}
