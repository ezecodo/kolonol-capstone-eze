import React, { useState, useEffect } from "react";
import RestaurantCard from "../../components/RestaurantCard";
import styled from "styled-components";
import { getRestaurantDetails } from "../../utils/google_places";

const StyledListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 90px;
  margin-bottom: 110px;
  justify-content: center;
`;

const FavoriteRestaurantList = ({ favorites }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      if (favorites) {
        const restaurantPromises = favorites.map((place_id) =>
          getRestaurantDetails(place_id)
        );
        const restaurantDetails = await Promise.all(restaurantPromises);
        setRestaurants(restaurantDetails);
      }
    };
    fetchRestaurants();
  }, [favorites]);
  return (
    <StyledListContainer>
      {restaurants?.map((restaurant) => (
        <RestaurantCard
          key={restaurant.place_id}
          restaurant={restaurant}
          isFavorite={true}
        />
      ))}
    </StyledListContainer>
  );
};

export default FavoriteRestaurantList;
