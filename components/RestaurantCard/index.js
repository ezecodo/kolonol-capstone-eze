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

const Name = styled.h2`
  margin: 0;
`;

const Description = styled.p`
  margin: 10px 0 0 0;
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

function RestaurantCard({ restaurant, isFavorite }) {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    setBookmarked(isFavorite);
  }, [isFavorite]);

  const name = restaurant.name;
  const description = restaurant.formatted_address;
  const phone = restaurant.formatted_phone_number;
  const rating = restaurant.rating;

  const handleBookmarkClick = (place_id) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (bookmarked) {
      // Remove restaurant from favorites
      const index = favorites.indexOf(place_id);
      if (index > -1) {
        favorites.splice(index, 1);
      }
    } else {
      // Add restaurant to favorites
      favorites.push(place_id);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setBookmarked(!bookmarked);
  };

  return (
    <Card>
      <BookmarkButton onClick={() => handleBookmarkClick(restaurant.place_id)}>
        {bookmarked ? (
          <BookmarkIconFull>&#9733;</BookmarkIconFull>
        ) : (
          <BookmarkIconEmpty>&#9734;</BookmarkIconEmpty>
        )}
      </BookmarkButton>
      <Details>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <Phone>{phone}</Phone>
        <Rating>Rating: {rating}</Rating>
      </Details>
    </Card>
  );
}

export default RestaurantCard;
