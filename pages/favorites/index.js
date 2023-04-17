import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color: #15aabf;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  font-size: 15px;
  color: white;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: none;
  }
`;

const Container = styled.div`
  display: flex;
  margin-top: 45px;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px);
  overflow: auto;
`;

function FavCategories() {
  const [hasLatinRestaurants, setHasLatinRestaurants] = useState(false);
  const [hasLatinClubs, setHasLatinClubs] = useState(false);
  const [hasLatinEmbassies, setHasLatinEmbassies] = useState(false);

  useEffect(() => {
    const latinRestaurantFavorites =
      JSON.parse(localStorage.getItem("Latin Restaurant-favorites")) || [];
    if (latinRestaurantFavorites.length > 0) {
      setHasLatinRestaurants(true);
    }

    const latinClubFavorites =
      JSON.parse(localStorage.getItem("Latin Club-favorites")) || [];
    if (latinClubFavorites.length > 0) {
      setHasLatinClubs(true);
    }
    const latinEmbassiesFavorites =
      JSON.parse(localStorage.getItem("Latin Embassies-favorites")) || [];
    if (latinEmbassiesFavorites.length > 0) {
      setHasLatinEmbassies(true);
    }
  }, []);

  return (
    <Container>
      <Wrapper>
        {hasLatinRestaurants && (
          <Link href="/restaurants/FavoriteRestaurants">
            <StyledLink>
              <Button>Latin Restaurants</Button>
            </StyledLink>
          </Link>
        )}
        {hasLatinClubs && (
          <Link href="/night-life/FavoriteClubs">
            <StyledLink>
              <Button>Latin Clubs</Button>
            </StyledLink>
          </Link>
        )}
        {hasLatinEmbassies && (
          <Link href="/embajadas/FavoriteEmbajadas">
            <StyledLink>
              <Button>Embajadas</Button>
            </StyledLink>
          </Link>
        )}

        <Link href="/tandem/FavoriteTandem">
          <StyledLink>
            <Button>Intercambio de Idiomas</Button>
          </StyledLink>
        </Link>
        <Link href="/">
          <StyledLink>
            <Button>Random Text 2</Button>
          </StyledLink>
        </Link>
        <Link href="/">
          <StyledLink>
            <Button>Random Text 3</Button>
          </StyledLink>
        </Link>
      </Wrapper>
    </Container>
  );
}

export default FavCategories;
