import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PlaceCard from "../../components/PlaceCard";
import Layout from "../../components/Layout";
import { getRestaurantDetails } from "../../utils/google_places";

const Title = styled.h1`
  margin-top: 100px;
`;

const StyledListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 90px;
  margin-bottom: 110px;
  justify-content: center;
`;

export default function FavoriteRestaurants({ type }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favorites =
      JSON.parse(localStorage.getItem(`${type}-favorites`)) || [];
    setFavorites(favorites);
  }, [type]);

  const handleUnfavorite = (place_id) => {
    const newFavorites = favorites.filter((id) => id !== place_id);
    localStorage.setItem(`${type}-favorites`, JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };

  return (
    <Layout title="Favorite Restaurants">
      <StyledListContainer>
        {favorites.map((place_id) => (
          <PlaceCard
            key={place_id}
            place_id={place_id}
            isFavorite={true}
            onUnfavorite={handleUnfavorite}
          />
        ))}
      </StyledListContainer>
    </Layout>
  );
}
