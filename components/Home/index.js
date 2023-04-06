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

function Home() {
  return (
    <Wrapper>
      <Link href="../LatinRestaurants/">
        <Button>
          <ButtonImage src="/latin_restaurants.jpg" />
          Latin Restaurants
        </Button>
      </Link>
      <Link href="/latin-music">
        <Button>
          <ButtonImage src="/latin_music.jpg" alt="Latin Music" />
          Latin Music
        </Button>
      </Link>
    </Wrapper>
  );
}

export default Home;