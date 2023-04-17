import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import Layout from "../../components/Layout";

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
  const [hasLatinTandems, setHasLatinTandemss] = useState(false);
  const [hasFavorites, setHasFavorites] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
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
    const latinTandemsFavorites =
      JSON.parse(localStorage.getItem("Sprach Tandem-favorites")) || [];
    if (latinTandemsFavorites.length > 0) {
      setHasLatinTandemss(true);
    }

    if (
      hasLatinRestaurants ||
      hasLatinClubs ||
      hasLatinEmbassies ||
      hasLatinTandems
    ) {
      setHasFavorites(true);
    }
    setLoading(false);
  }, [hasLatinRestaurants, hasLatinClubs, hasLatinEmbassies, hasLatinTandems]);

  useEffect(() => {
    return () => {
      setIsMounted(false);
    };
  }, []);

  return (
    <Layout visibleTitle="Estos son tus Favoritos">
      <Container>
        {!isMounted ? (
          <div>Loading...</div>
        ) : loading ? (
          // Puedes agregar un componente de carga aquí o simplemente dejarlo vacío
          <div>Loading...</div>
        ) : hasFavorites ? (
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
            {hasLatinTandems && (
              <Link href="/tandem/FavoriteTandem">
                <StyledLink>
                  <Button>Intercambio de Idiomas</Button>
                </StyledLink>
              </Link>
            )}
          </Wrapper>
        ) : (
          <h2>Todavía no tienes favoritos</h2>
        )}
      </Container>
    </Layout>
  );
}

export default FavCategories;
