import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  background-color: #15aabf;
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
  background-color: #15aabf;
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
  margin-right: 1rem;
`;
const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;
const Layout = ({ children, title }) => {
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "de" : "es");
  };

  return (
    <>
      <StyledHeader>
        <StyledTitle>{title}</StyledTitle>
        <nav>
          <ul>
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
        <ToggleButton onClick={toggleLanguage}>
          {language === "es" ? "ES" : "DE"}
        </ToggleButton>

        <StyledIcon>
          <Link href="/">🏠</Link>
        </StyledIcon>
        <StyledIcon>
          <Link href="/favorites">⭐</Link>
        </StyledIcon>
      </StyledFooter>
    </>
  );
};

export default Layout;
