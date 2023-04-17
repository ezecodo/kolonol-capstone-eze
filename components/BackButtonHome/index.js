import React from "react";
import styled from "styled-components";

import { useRouter } from "next/router";

const BackButton = styled.button`
  position: fixed;
  top: 48%;
  left: 8px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #15aabf;
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  z-index: 1;
`;

const Arrow = styled.i`
  display: inline-block;
  margin-top: 2px;
  margin-left: 4px;
  border: solid white;
  border-width: 0 3px 3px 0;
  padding: 3px;
  transform: rotate(135deg);
`;

function BackButtonArrow({ to }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(to);
  };

  return (
    <BackButton role="button" onClick={handleClick}>
      <Arrow />
    </BackButton>
  );
}

export default BackButtonArrow;
