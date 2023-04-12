import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PlaceCard from "../../components/PlaceCard";
import Layout from "../../components/Layout";
import {
  getLatinRestaurants,
  getPlaceDetails,
} from "../../utils/google_places";

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

export default function LatinRestaurants({ places, type }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favorites =
      JSON.parse(localStorage.getItem(`${type}-favorites`)) || [];
    setFavorites(favorites);
  }, []);

  const handleUnfavorite = (place_id) => {
    const newFavorites = favorites.filter((id) => id !== place_id);
    localStorage.setItem(`${type}-favorites`, JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };

  const handleFavorite = (place_id) => {
    const newFavorites = [...favorites, place_id];
    localStorage.setItem(`${type}-favorites`, JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };

  const favoritePlaces = places.filter((place) =>
    favorites.includes(place.place_id)
  );

  return (
    <Layout title={`${type} Places`}>
      <StyledListContainer>
        {favoritePlaces.map((place) => (
          <PlaceCard
            key={place.place_id}
            place={place}
            isFavorite={favorites.includes(place.place_id)}
            onFavorite={handleFavorite}
            onUnfavorite={handleUnfavorite}
          />
        ))}
      </StyledListContainer>
    </Layout>
  );
}

export async function getStaticProps() {
  const places = await getLatinRestaurants();
  const placeDetails = await Promise.all(
    places.map(async (place) => {
      const details = await getPlaceDetails(place.place_id);
      return { ...place, details };
    })
  );
  return { props: { places: placeDetails, type: "Latin Restaurant" } };
}
