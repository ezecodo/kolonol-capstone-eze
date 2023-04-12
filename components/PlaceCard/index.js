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
  overflow: hidden;
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

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const RatingLabel = styled.span`
  margin-right: 5px;
`;

const RatingStars = styled.span`
  color: #ff9900;
  font-size: 1.2rem;
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

function PlaceCard({ place, isFavorite, onToggleFavorite }) {
  const [bookmarked, setBookmarked] = useState(false);
  const [ratingStars, setRatingStars] = useState(0);

  useEffect(() => {
    setBookmarked(isFavorite);
    setRatingStars(Math.round(place.rating));
  }, [isFavorite, place.rating]);

  const name = place.name;
  const description = place.description || place.types.join(", ");
  const address = place.formatted_address;
  const phone = place.formatted_phone_number;

  const handleBookmarkClick = () => {
    onToggleFavorite(place.place_id, !bookmarked);
    setBookmarked(!bookmarked);
  };

  return (
    <Card>
      <BookmarkButton onClick={handleBookmarkClick}>
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
        <RatingContainer>
          <RatingLabel>Rating:</RatingLabel>
          {[...Array(ratingStars)].map((star, index) => (
            <RatingStars key={index}>&#9733;</RatingStars>
          ))}
        </RatingContainer>
      </Details>
    </Card>
  );
}

export default PlaceCard;
