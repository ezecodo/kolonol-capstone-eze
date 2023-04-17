import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useHighlight } from "../HighlightProvider";
import { MdLanguage } from "react-icons/md";

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

const AddNoteButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: ${({ isOpen }) => (isOpen ? "red" : "#15aabf")};
  border: none;
  cursor: pointer;
  color: white;
  font-size: 18px;
  padding: 5px 10px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoteWindow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #15aabf;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NoteFormName = styled.h3`
  margin: 0 0 10px 0;
  text-align: center;
  width: 100%;
`;
const NoteForm = styled.form`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const NoteInput = styled.textarea`
  width: 100%;
  height: 60px;
  resize: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
`;

const SubmitNoteButton = styled.button`
  margin-top: 10px;
  background-color: #15aabf;
  color: white;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
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
const FlagImage = styled.img`
  height: 20px;
  margin-right: 10px;
`;

const Website = styled.a`
  color: #0066cc;
  text-decoration: none;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledWebsite = styled(Website)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;
const Phone = styled.p`
  margin: 10px 0 0 0;
`;

const RatingContainer = styled.div`
  display: ${({ visible }) => (visible ? "flex" : "none")};
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

function truncateUrl(url) {
  const protocolPattern = /^https?:\/\//i;
  return url ? url.replace(protocolPattern, "") : "";
}
function PlaceCard({
  place,
  isFavorite,
  onToggleFavorite,
  showNoteButton,
  favorites,
  onUpdateNote,
  showRating = true,
  onWebsiteClick,
  showWebsite = false,
}) {
  const [bookmarked, setBookmarked] = useState(false);
  const [ratingStars, setRatingStars] = useState(0);
  const [showNoteWindow, setShowNoteWindow] = useState(false);
  const [note, setNote] = useState("");
  const website = truncateUrl(place.website);
  const showFlag = place.bandera !== undefined && place.bandera !== null;
  const { setHighlightStar } = useHighlight();

  useEffect(() => {
    if (favorites) {
      const currentFavorite = favorites.find(
        (fav) => fav.place_id === place.place_id
      );
      const currentNote = currentFavorite ? currentFavorite.note : "";
      setNote(currentNote);
    }
  }, [favorites, place.place_id]);

  const bookmarkButtonRef = useRef(null);

  useEffect(() => {
    setBookmarked(isFavorite);
    setRatingStars(Math.round(place.rating));
  }, [isFavorite, place.rating]);

  const handleAddNoteClick = () => {
    setShowNoteWindow(!showNoteWindow);
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };
  const handleSubmitNote = (e) => {
    e.preventDefault();

    onUpdateNote(place.place_id, note);

    console.log("Nota enviada:", note);
    setShowNoteWindow(false);
  };

  function handleWebsiteClick(e) {
    e.preventDefault();
    onWebsiteClick(place.website);
  }

  const name = place.name;
  const description = place.description || place.types.join(", ");
  const address = place.formatted_address;
  const phone = place.formatted_phone_number;

  function handleBookmarkClick() {
    setBookmarked(!bookmarked);
    onToggleFavorite(place.place_id, !bookmarked);
    setHighlightStar(true);
    setTimeout(() => {
      setHighlightStar(false);
    }, 1000);
  }

  return (
    <Card>
      <BookmarkButton ref={bookmarkButtonRef} onClick={handleBookmarkClick}>
        {bookmarked ? (
          <BookmarkIconFull>&#9733;</BookmarkIconFull>
        ) : (
          <BookmarkIconEmpty>&#9734;</BookmarkIconEmpty>
        )}
      </BookmarkButton>
      <Details>
        <div style={{ display: "flex", alignItems: "center" }}>
          {showFlag && (
            <FlagImage src={place.bandera} alt={`${place.name} flag`} />
          )}
          <Name>{place.name}</Name>
        </div>

        <Address>{address}</Address>
        <Phone>{phone}</Phone>
        <StyledWebsite
          style={{ display: showWebsite ? "flex" : "none" }}
          className="website-icon"
          href={website}
          target="_self"
          onClick={handleWebsiteClick}
          rel="noopener noreferrer"
        >
          <MdLanguage size={24} />
        </StyledWebsite>
        {showRating && (
          <RatingContainer visible={showRating}>
            <RatingLabel>Rating:</RatingLabel>
            {[...Array(ratingStars)].map((star, index) => (
              <RatingStars key={index}>&#9733;</RatingStars>
            ))}
          </RatingContainer>
        )}
      </Details>
      {showNoteWindow && (
        <NoteWindow>
          <NoteForm onSubmit={handleSubmitNote}>
            <NoteFormName>{name}</NoteFormName>
            <NoteInput
              placeholder="Escribe una nota sobre el lugar..."
              value={note}
              onChange={handleNoteChange}
            />
            <SubmitNoteButton type="submit">Enviar nota</SubmitNoteButton>
          </NoteForm>
        </NoteWindow>
      )}
      {showNoteButton !== false && (
        <AddNoteButton onClick={handleAddNoteClick} isOpen={showNoteWindow}>
          {showNoteWindow ? "×" : note ? "EditNote" : "AddNote"}
        </AddNoteButton>
      )}
    </Card>
  );
}

export default PlaceCard;
