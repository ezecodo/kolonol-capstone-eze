import PlaceCard from "../../components/PlaceCard";
import React, { useState, useEffect } from "react";
import BackButtonArrow from "../../components/BackButtonHome";

function Embajadas() {
  const [embajadas, setEmbajadas] = useState([]);

  useEffect(() => {
    fetch("../api/embajadas")
      .then((response) => response.json())
      .then((data) => setEmbajadas(data));
  }, []);

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
            showNoteButton={false}
            showRating={false}
            onWebsiteClick={(url) => (window.location.href = url)}
          />
        ))}
      </div>
    </div>
  );
}

export default Embajadas;
