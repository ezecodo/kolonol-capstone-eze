import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const StyledLogo = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const StyledIcon = styled.span`
  font-size: 2rem;
`;

const ButtonListItem = styled.li`
  list-style-type: none;
`;

const Layout = ({ children }) => {
  return (
    <>
      <StyledHeader>
        <StyledLogo>Latino Guide Cologne</StyledLogo>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/latin-restaurants">Latin Restaurants</Link>
            </li>
            <li>
              <Link href="/latin-music">Latin Music</Link>
            </li>
          </ul>
        </nav>
      </StyledHeader>

      <main>{children}</main>

      <StyledFooter>
        <nav>
          <ul>
            <ButtonListItem>
              <button>ES</button>
            </ButtonListItem>
            <ButtonListItem>
              <button>DE</button>
            </ButtonListItem>
          </ul>
        </nav>
        <StyledIcon>
          <Link href="/favorites">⭐</Link>
        </StyledIcon>
      </StyledFooter>
    </>
  );
};

export default Layout;
