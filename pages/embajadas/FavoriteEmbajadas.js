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

function FavoriteEmbajadas() {
  const [embajadas, setEmbajadas] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("../api/embajadas")
      .then((response) => response.json())
      .then((data) => setEmbajadas(data));
  }, []);

  useEffect(() => {
    const favorites =
      JSON.parse(localStorage.getItem("Latin Embassies-favorites")) || [];
    setFavorites(favorites);
  }, []);

  const handleToggleFavorite = (place_id) => {
    const placeIndex = favorites.findIndex((fav) => fav.place_id === place_id);

    if (placeIndex !== -1) {
      const newFavorites = favorites.filter((fav) => fav.place_id !== place_id);
      localStorage.setItem(
        "Latin Embassies-favorites",
        JSON.stringify(newFavorites)
      );
      setFavorites(newFavorites);
    }
  };

  const handleUpdateNote = (place_id, note) => {
    const favoritePlaceIndex = favorites.findIndex(
      (fav) => fav.place_id === place_id
    );

    if (favoritePlaceIndex !== -1) {
      const updatedFavorites = [...favorites];
      updatedFavorites[favoritePlaceIndex] = {
        ...updatedFavorites[favoritePlaceIndex],
        note: note,
      };

      localStorage.setItem(
        "Latin Embassies-favorites",
        JSON.stringify(updatedFavorites)
      );
      setFavorites(updatedFavorites);
    }
  };

  const favoriteEmbajadas = embajadas.filter((embajada) =>
    favorites.some((fav) => fav.place_id === embajada.place_id)
  );

  return (
    <Layout title="Favorite Embassies">
      <BackButtonArrow to={"/favorites"} />
      <StyledListContainer>
        {favoriteEmbajadas.map((embajada) => (
          <PlaceCard
            key={embajada.place_id}
            place={{
              place_id: embajada.place_id,
              name: embajada.pais,
              bandera: embajada.bandera,
              description: "Embajada",
              formatted_address: embajada.direccion,
              formatted_phone_number: embajada.telefono,
              rating: 0,
              website: embajada.pagina_web,
              bandera: embajada.bandera,
            }}
            isFavorite={favorites.some(
              (fav) => fav.place_id === embajada.place_id
            )}
            onToggleFavorite={() => handleToggleFavorite(embajada.place_id)}
            showNoteButton={true}
            favorites={favorites}
            type={"Latin Embassies"}
            onUpdateNote={handleUpdateNote} //
            showRating={false}
            onWebsiteClick={(url) => window.open(url, "_blank")}
            showWebsite={true}
          />
        ))}
      </StyledListContainer>
    </Layout>
  );
}

export default FavoriteEmbajadas;
