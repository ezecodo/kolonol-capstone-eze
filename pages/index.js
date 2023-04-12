import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  margin: 10px;
  background-color: white;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);

  font-size: 15px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px);
  overflow: auto;
`;

function Home() {
  return (
    <Container>
      <Wrapper>
        <Link href="../restaurants">
          <StyledLink>
            <Button>Latin Restaurants</Button>
          </StyledLink>
        </Link>
        <Link href="../night-life">
          <StyledLink>
            <Button>Latin Music</Button>
          </StyledLink>
        </Link>
        <Link href="/latin-music">
          <StyledLink>
            <Button>Tandem</Button>
          </StyledLink>
        </Link>
      </Wrapper>
    </Container>
  );
}

export default Home;
