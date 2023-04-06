import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  background-color: cyan;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  height: 50px;
`;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: cyan;
  color: #fff;
  font-size: 0.7rem;
  max-width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  min-height: 50px;
  box-shadow: 0px -5px 10px 0px rgba(0, 0, 0, 0.1);
`;

const StyledTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const StyledIcon = styled.span`
  font-size: 2rem;
`;

const ButtonListItem = styled.li`
  list-style-type: none;
`;

const Layout = ({ children, title }) => {
  return (
    <>
      <StyledHeader>
        <StyledTitle>{title}</StyledTitle>
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
