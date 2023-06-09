import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";

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

function Home() {
  const { t } = useTranslation();
  return (
    <Layout visibleTitle={t("welcome")}>
      <Container>
        <Wrapper>
          <Link href="../restaurants">
            <StyledLink as="a">
              <Button>{t("latinFood")}</Button>
            </StyledLink>
          </Link>
          <Link href="../night-life">
            <StyledLink as="a">
              <Button>{t("latinMusic")}</Button>
            </StyledLink>
          </Link>
          <Link href="../tandem">
            <StyledLink as="a">
              <Button>{t("languageExchange")}</Button>
            </StyledLink>
          </Link>
          <Link href="./embajadas/embajadas">
            <StyledLink as="a">
              <Button>{t("embassies")}</Button>
            </StyledLink>
          </Link>
          {/* <Link href="/">
            <StyledLink>
              <Button>Random Text 2</Button>
            </StyledLink>
          </Link>
          <Link href="/">
            <StyledLink>
              <Button>Random Text 3</Button>
            </StyledLink>
          </Link> */}
        </Wrapper>
      </Container>
    </Layout>
  );
}

export default Home;
