import PlaceCard from "../../components/PlaceCard";
import React, { useState, useEffect } from "react";
import BackButtonArrow from "../../components/BackButtonHome";

function Embajadas() {
  const [embajadas, setEmbajadas] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const localData = localStorage.getItem("Latin Embassies-favorites");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    fetch("../api/embajadas")
      .then((response) => response.json())
      .then((data) => setEmbajadas(data));
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "Latin Embassies-favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const handleToggleFavorite = (place_id) => {
    const placeIndex = favorites.findIndex((fav) => fav.id === place_id);

    if (placeIndex !== -1) {
      // Si el lugar ya está en los favoritos, lo eliminamos
      const newFavorites = favorites.filter((fav) => fav.id !== place_id);
      localStorage.setItem(
        "Latin Embassies-favorites",
        JSON.stringify(newFavorites)
      );
      setFavorites(newFavorites);
    } else {
      // Si el lugar no está en los favoritos, lo agregamos con una nota en blanco
      const newFavorite = { id: place_id, note: "" };
      const newFavorites = [...favorites, newFavorite];
      localStorage.setItem(
        "Latin Embassies-favorites",
        JSON.stringify(newFavorites)
      );
      setFavorites(newFavorites);
    }
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "6rem",
  };

  const cardsContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "6rem",
  };

  return (
    <div style={containerStyle}>
      <div style={cardsContainerStyle}>
        <BackButtonArrow to={"/"} />
        {embajadas.map((embajada) => (
          <PlaceCard
            key={embajada.id}
            place={{
              place_id: embajada.id,
              name: embajada.pais,
              bandera: embajada.bandera,
              description: "Embajada",
              formatted_address: embajada.direccion,
              formatted_phone_number: embajada.telefono,
              rating: 0,
              website: embajada.pagina_web,
              bandera: embajada.bandera,
            }}
            isFavorite={favorites.some((fav) => fav.id === embajada.id)}
            onToggleFavorite={() => handleToggleFavorite(embajada.id)}
            showNoteButton={false}
            showRating={false}
            onWebsiteClick={(url) => window.open(url, "_blank")}
            showWebsite={true}
          />
        ))}
      </div>
    </div>
  );
}

export default Embajadas;
