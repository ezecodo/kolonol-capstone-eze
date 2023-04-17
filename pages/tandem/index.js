import PlaceCard from "../../components/PlaceCard";
import React, { useState, useEffect } from "react";
import BackButtonArrow from "../../components/BackButtonHome";

function Tandems() {
  const [tandems, setTandems] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const localData = localStorage.getItem("Sprach Tandem-favorites");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    fetch("../api/tandem")
      .then((response) => response.json())
      .then((data) => setTandems(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("Sprach Tandem-favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleToggleFavorite = (place_id) => {
    const placeIndex = favorites.findIndex((fav) => fav.id === place_id);

    if (placeIndex !== -1) {
      const newFavorites = favorites.filter((fav) => fav.id !== place_id);
      localStorage.setItem(
        "Sprach Tandem-favorites",
        JSON.stringify(newFavorites)
      );
      setFavorites(newFavorites);
    } else {
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
    marginTop: "130px",
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
        {tandems.map((tandem) => (
          <PlaceCard
            key={tandem.id}
            place={{
              place_id: tandem.id,
              name: tandem.nombre,

              description: "Intercambio de Idioma",
              formatted_address: tandem.direccion,
              formatted_phone_number: tandem.telefono,
              website: tandem.pagina_web,
            }}
            isFavorite={favorites.some((fav) => fav.id === tandem.id)}
            onToggleFavorite={() => handleToggleFavorite(tandem.id)}
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

export default Tandems;
