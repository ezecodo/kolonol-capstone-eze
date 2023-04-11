import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RestaurantCard from "../../components/RestaurantCard";
import Layout from "../../components/Layout";
import {
  getLatinRestaurants,
  getRestaurantDetails,
} from "../../utils/google_places";

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
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favorites);
  }, []);

  return (
    <Layout title="Latin Restaurants">
      <StyledListContainer>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.place_id}
            restaurant={restaurant}
            isFavorite={favorites.includes(restaurant.place_id)}
          />
        ))}
      </StyledListContainer>
    </Layout>
  );
}

export async function getStaticProps() {
  const restaurants = await getLatinRestaurants();
  const restaurantDetails = await Promise.all(
    restaurants.map(async (restaurant) => {
      const details = await getRestaurantDetails(restaurant.place_id);
      return { ...restaurant, details };
    })
  );
  return { props: { restaurants: restaurantDetails } };
}
