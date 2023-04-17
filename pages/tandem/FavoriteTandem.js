import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PlaceCard from "../../components/PlaceCard";
import Layout from "../../components/Layout";
import BackButtonArrow from "../../components/BackButtonHome";

const Title = styled.h1`
  margin-top: 100px;
`;

const StyledListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 130px;
  margin-bottom: 110px;
  justify-content: center;
`;

function FavoriteTandems() {
  const [tandems, setTandems] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("../api/tandem")
      .then((response) => response.json())
      .then((data) => setTandems(data));
  }, []);

  useEffect(() => {
    const favorites =
      JSON.parse(localStorage.getItem("Sprach Tandem-favorites")) || [];
    setFavorites(favorites);
  }, []);

  const handleToggleFavorite = (place_id) => {
    const placeIndex = favorites.findIndex((fav) => fav.id === place_id);

    if (placeIndex !== -1) {
      const newFavorites = favorites.filter((fav) => fav.id !== place_id);
      localStorage.setItem(
        "Sprach Tandem-favorites",
        JSON.stringify(newFavorites)
      );
      setFavorites(newFavorites);
    }
  };

  const handleUpdateNote = (place_id, note) => {
    const favoritePlaceIndex = favorites.findIndex(
      (fav) => fav.id === place_id
    );

    if (favoritePlaceIndex !== -1) {
      const updatedFavorites = [...favorites];
      updatedFavorites[favoritePlaceIndex] = {
        ...updatedFavorites[favoritePlaceIndex],
        note: note,
      };

      localStorage.setItem(
        "Sprach Tandem-favorites",
        JSON.stringify(updatedFavorites)
      );
      setFavorites(updatedFavorites);
    }
  };

  const FavoriteTandems = tandems.filter((tandem) =>
    favorites.some((fav) => fav.id === tandem.id)
  );

  return (
    <Layout title="Favorite Tandems">
      <BackButtonArrow to={"/favorites"} />
      <StyledListContainer>
        {FavoriteTandems.map((tandem) => (
          <PlaceCard
            key={tandem.id}
            place={{
              place_id: tandem.id,
              name: tandem.nombre,
              description: "Intercambio de Idiomas",
              formatted_address: tandem.direccion,
              formatted_phone_number: tandem.telefono,
              rating: 0,
              website: tandem.pagina_web,
            }}
            isFavorite={favorites.some((fav) => fav.id === tandem.id)}
            onToggleFavorite={() => handleToggleFavorite(tandem.id)}
            showNoteButton={true}
            favorites={favorites}
            type={"Sprach Tandem"}
            onUpdateNote={handleUpdateNote}
            showRating={false}
            onWebsiteClick={(url) => window.open(url, "_blank")}
            showWebsite={true}
          />
        ))}
      </StyledListContainer>
    </Layout>
  );
}

export default FavoriteTandems;
