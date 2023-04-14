import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import PacificoTitle from "../Logo";

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

const Layout = ({ children }) => {
  const [language, setLanguage] = useState("es");
  const [userName, setUserName] = useState("");

  const router = useRouter();

  useEffect(() => {
    // Retrieve the userName from localStorage when the component mounts
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
        {" "}
        {`Hola, ${userName}`}
        <PacificoTitle
          color="white"
          fontSize="45px"
          textShadow="8px 2px 2px #000"
        />
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
          <Link href="../favorites">⭐</Link>
        </StyledIcon>
      </StyledFooter>
    </>
  );
};

export default Layout;
