import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 180px;
  margin: 20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
`;

const Details = styled.div`
  padding: 20px;
`;

const Description = styled.p`
  font-size: 14px;
  margin: 0;
  margin-top: 5px;
  color: #666;
`;

const Address = styled.p`
  font-size: 14px;
  margin: 0;
  margin-top: 5px;
  color: black;
`;
const Name = styled.h2`
  margin: 0;
`;

const Phone = styled.p`
  margin: 10px 0 0 0;
`;

const Rating = styled.p`
  margin: 10px 0 0 0;
`;

const BookmarkButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const BookmarkIconEmpty = styled.span`
  color: #bbb;
  font-size: 1.2rem;
`;

const BookmarkIconFull = styled.span`
  color: #ff9900;
  font-size: 1.2rem;
`;

function PlaceCard({ place, isFavorite, onUnfavorite, onFavorite }) {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    setBookmarked(isFavorite);
  }, [isFavorite]);

  const name = place.name;
  const description = place.description || place.types.join(", ");
  const address = place.formatted_address;
  const phone = place.formatted_phone_number;
  const rating = place.rating;

  const handleBookmarkClick = (place_id) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (bookmarked) {
      // Remove place from favorites
      const index = favorites.indexOf(place_id);
      if (index > -1) {
        favorites.splice(index, 1);
      }
      localStorage.setItem("favorites", JSON.stringify(favorites));
      onUnfavorite(place_id);
    } else {
      // Add place to favorites
      favorites.push(place_id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      onFavorite(place_id);
    }

    setBookmarked(!bookmarked);
  };

  return (
    <Card>
      <BookmarkButton onClick={() => handleBookmarkClick(place.place_id)}>
        {bookmarked ? (
          <BookmarkIconFull>&#9733;</BookmarkIconFull>
        ) : (
          <BookmarkIconEmpty>&#9734;</BookmarkIconEmpty>
        )}
      </BookmarkButton>
      <Details>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <Address>{address}</Address>
        <Phone>{phone}</Phone>
        <Rating>Rating: {rating}</Rating>
      </Details>
    </Card>
  );
}

export default PlaceCard;
