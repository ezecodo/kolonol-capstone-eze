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
  text-align: center; /* Agrega este estilo para centrar el contenido */
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

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
`;

const Counter = styled.div`
  font-size: 0.8rem;
  color: ${(props) =>
    props.count > 0
      ? "black"
      : "gray"}; /* Agrega este estilo para el color gris */
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

  const handleInputKeyDown = (event) => {
    if (name.length >= 15 && event.key !== "Backspace") {
      event.preventDefault();
    }
  };

  return (
    <Container>
      {showInput ? (
        <>
          <InputContainer>
            <div>Please enter your name:</div>
            <Input
              type="text"
              value={name}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
            />
            <Counter count={name.length}>0/15</Counter>
          </InputContainer>
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
