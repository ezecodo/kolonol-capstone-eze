import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import styled from "styled-components";
import PacificoTitle from "../Logo";
import { useHighlight } from "../../components/HighlightProvider";
import { useTranslation } from "react-i18next";
import { i18n } from "../../config/i18n";

const StyledHeader = styled.header`
  background-color: #15aabf;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  height: 80px;
  z-index: 1;
`;

const Greeting = styled.div`
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding-left: 0;
  padding-top: 20px;
  margin-left: 0;
  border-color: blue;
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
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const PageTitle = styled.h2`
  position: fixed;
  top: 110px;
  left: 50%;
  width: 100%;
  align-items: center;
  text-align: center;
  transform: translateX(-50%);
  white-space: nowrap;
  margin: 0;
  padding: 5px 10px;
  background-color: #15aabf;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  font-family: "Monospace", monospace;
  font-size: 16px;
  color: white;
  border-radius: 5px;
  z-index: 10;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 17px;
`;
const StyledSubtitle = styled.div`
  font-family: monospace;
  font-size: 20px;
  margin-left: 10px;
  margin-top: -10px;
  color: black;
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

const Main = styled.main`
  position: relative; // Agregar posición relativa
`;
const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = useCallback(() => {
    const newLanguage = i18n.language === "es" ? "de" : "es";
    i18n.changeLanguage(newLanguage);
  }, [i18n]);

  return (
    <ToggleButton onClick={toggleLanguage}>
      {i18n.language === "es" ? "ES" : "DE"}
    </ToggleButton>
  );
};

const Layout = ({ children, title, visibleTitle, subtitlekey }) => {
  const [language, setLanguage] = useState("es");
  const [userName, setUserName] = useState("");
  const pageTitle = visibleTitle;

  const { highlightStar } = useHighlight();
  const { i18n, t } = useTranslation();
  const translatedSubtitle = t(subtitlekey);

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  return (
    <>
      <StyledHeader>
        <Greeting>
          {t("saludo")} <br />{" "}
          <span
            style={{
              color: "black",
              borderRadius: "5px",
              padding: "2px 6px",
              display: "inline-block",
            }}
          >
            {userName}
          </span>
        </Greeting>
        <StyledTitle>
          <TitleContainer>
            <PacificoTitle
              color="white"
              fontSize="40px"
              textShadow="8px 2px 2px #000"
              marginBottom="25px"
            />
            <StyledSubtitle>{t("subtitleHeader")} </StyledSubtitle>
          </TitleContainer>
        </StyledTitle>
      </StyledHeader>

      <Main>
        <PageTitle>{pageTitle}</PageTitle>
        {children}
      </Main>

      <StyledFooter>
        <LanguageSelector />

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
