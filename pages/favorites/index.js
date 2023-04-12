import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #15aabf;
  color: #fff;
  font-size: 0.7rem;
  max-width: 100%;
  height: 50px;
  padding: 1rem;
  box-shadow: 0px -5px 10px 0px rgba(0, 0, 0, 0.1);
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-left: 1rem;
  margin-right: 1rem;
  cursor: pointer;
`;

const FavCategories = () => (
  <Container>
    <StyledLink href="/restaurants/FavoriteRestaurants">
      Restaurantes
    </StyledLink>
    <StyledLink href="/night-life/FavoriteClubs">Música</StyledLink>
    <StyledLink href="#">Teatro</StyledLink>
  </Container>
);

export default FavCategories;
