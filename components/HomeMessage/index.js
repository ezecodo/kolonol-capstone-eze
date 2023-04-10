// HomeMessage.js
import styled from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-width: 320px;
  margin: 0 auto;
  gap: 0.5rem;
`;

const Button = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background-color: #15aabf;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
`;

const HomeMessage = () => {
  const [showInput, setShowInput] = useState(false);
  const [name, setName] = useState("");
  const router = useRouter();

  const handleButtonClick = () => {
    setShowInput(true);
  };

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleArrowClick = () => {
    localStorage.setItem("userName", name); // save name to localStorage
    router.push({
      pathname: "/",
      query: { name },
    });
  };

  return (
    <Container>
      {showInput ? (
        <>
          <label>
            Please enter your name:
            <input type="text" value={name} onChange={handleInputChange} />
          </label>
          <Button onClick={handleArrowClick}>➡</Button>
        </>
      ) : (
        <>
          <Button onClick={handleButtonClick}>ES</Button>
          <Button onClick={handleButtonClick}>DE</Button>
        </>
      )}
    </Container>
  );
};

export default HomeMessage;
