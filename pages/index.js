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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  margin: 20px;
  background-color: white;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const ButtonImage = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
`;

const Container = styled.div`
  height: calc(100vh - 80px);
  overflow: auto;
`;

function Home() {
  return (
    <Container>
      <Wrapper>
        <Link href="../restaurants">Latin Restaurants</Link>
        <Link href="../night-life">Latin Music</Link>
        <Link href="/latin-music">Tandem</Link>
      </Wrapper>
    </Container>
  );
}

export default Home;
