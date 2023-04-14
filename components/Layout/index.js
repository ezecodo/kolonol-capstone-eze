import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import PacificoTitle from "../Logo";
import { useHighlight } from "../HighlightProvider";

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
  z-index: 1;
`;

const Greeting = styled.div`
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  margin-left: 1rem;
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
  font-size: 50px;
  margin-right: 1rem;
`;

const StyledIconFavorites = styled.div`
  font-size: 50px;
  text-align: center;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }

  &.favorite-btn-flash {
    animation: favorite-btn-flash 1s;
  }

  @keyframes favorite-btn-flash {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
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

const Layout = ({ children }) => {
  const [language, setLanguage] = useState("es");
  const [userName, setUserName] = useState("");

  const router = useRouter();
  const { highlightStar } = useHighlight();

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "de" : "es");
  };

  return (
    <>
      <StyledHeader>
        <Greeting>{`Hola, ${userName}`}</Greeting>
        <StyledTitle>
          <PacificoTitle
            color="white"
            fontSize="45px"
            textShadow="8px 2px 2px #000"
          />
        </StyledTitle>
      </StyledHeader>

      <main>{children}</main>

      <StyledFooter>
        <ToggleButton onClick={toggleLanguage}>
          {language === "es" ? "ES" : "DE"}
        </ToggleButton>

        <StyledIcon>
          <Link href="/">🏠</Link>
        </StyledIcon>
        <StyledIconFavorites
          id="favorite-btn"
          className={highlightStar ? "favorite-btn-flash" : ""}
        >
          <Link href="../favorites">⭐</Link>
        </StyledIconFavorites>
      </StyledFooter>
    </>
  );
};

export default Layout;
