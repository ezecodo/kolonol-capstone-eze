import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PlaceCard from "../../components/PlaceCard";
import Layout from "../../components/Layout";
import {
  getLatinMusicPlaces,
  getPlaceDetails,
} from "../../utils/google_places";
import BackButtonArrow from "../../components/BackButtonHome";

const StyledListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 130px;
  margin-bottom: 110px;
  justify-content: center;
`;

export default function LatinClubs({ places, type }) {
  const [favorites, setFavorites] = useState([]);

  const updateFavorites = () => {
    const favorites =
      JSON.parse(localStorage.getItem(`${type}-favorites`)) || [];
    setFavorites(favorites);
    console.log("Favorites:", favorites);
  };

  useEffect(() => {
    updateFavorites();
  }, []);

  const handleToggleFavorite = (place_id) => {
    const placeIndex = favorites.findIndex((fav) => fav.place_id === place_id);

    if (placeIndex !== -1) {
      const newFavorites = favorites.filter((fav) => fav.place_id !== place_id);
      localStorage.setItem(`${type}-favorites`, JSON.stringify(newFavorites));
      setFavorites(newFavorites);
    } else {
      const newFavorite = { place_id, note: "" };
      const newFavorites = [...favorites, newFavorite];
      localStorage.setItem(`${type}-favorites`, JSON.stringify(newFavorites));
      setFavorites(newFavorites);
    }
  };

  return (
    <Layout title={`${type} Places`} visibleTitle="Clubs con música latina">
      <BackButtonArrow to={"/"} />
      <StyledListContainer>
        {places.map((place) => (
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
  const places = await getLatinMusicPlaces();
  const placeDetails = await Promise.all(
    places.map(async (place) => {
      const details = await getPlaceDetails(place.place_id);
      return { ...place, details };
    })
  );
  return { props: { places: placeDetails, type: "Latin Club" } };
}
