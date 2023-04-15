import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PlaceCard from "../../components/PlaceCard";
import Layout from "../../components/Layout";
import {
  getLatinRestaurants,
  getPlaceDetails,
} from "../../utils/google_places";
import BackButtonArrow from "../../components/BackButtonHome";

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

export default function FavoriteRestaurants({ places, type }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favorites =
      JSON.parse(localStorage.getItem(`${type}-favorites`)) || [];
    setFavorites(favorites);
  }, [type]);

  const handleToggleFavorite = (place_id) => {
    const placeIndex = favorites.findIndex((fav) => fav.place_id === place_id);

    if (placeIndex !== -1) {
      // Si el lugar ya está en los favoritos, lo eliminamos
      const newFavorites = favorites.filter((fav) => fav.place_id !== place_id);
      localStorage.setItem(`${type}-favorites`, JSON.stringify(newFavorites));
      setFavorites(newFavorites);
    } else {
      // Si el lugar no está en los favoritos, lo agregamos con una nota en blanco
      const newFavorite = { place_id, note: "" };
      const newFavorites = [...favorites, newFavorite];
      localStorage.setItem(`${type}-favorites`, JSON.stringify(newFavorites));
      setFavorites(newFavorites);
    }
  };

  const favoritePlaces = places.filter((place) =>
    favorites.some((fav) => fav.place_id === place.place_id)
  );

  return (
    <Layout title={`${type} Places`}>
      <BackButtonArrow to={"../favorites"} />
      <StyledListContainer>
        {favoritePlaces.map((place) => (
          <PlaceCard
            key={place.place_id}
            place={place}
            isFavorite={favorites.some(
              (fav) => fav.place_id === place.place_id
            )}
            onToggleFavorite={handleToggleFavorite}
            showNoteButton={false}
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
