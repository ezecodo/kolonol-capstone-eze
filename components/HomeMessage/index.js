import styled from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";
import PacificoTitle from "../Logo";

const Container = styled.div`
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-width: 320px;
  margin: 0 auto;
  gap: 0.5rem;
  text-align: center;
  padding-bottom: 0.25rem;
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

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.8rem;
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
  color: ${(props) => (props.count > 0 ? "black" : "gray")};
`;

const LangButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Subtitle = styled.p`
  font-family: monospace;
  font-size: 1.2rem;
  margin-top: 0.1rem;

  margin-bottom: 1rem;
`;

function HomeMessage() {
  const [showInput, setShowInput] = useState(false);
  const [name, setName] = useState("");
  const router = useRouter();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleButtonClick = () => {
    setShowInput(true);
  };

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleArrowClick = () => {
    if (!name) {
      return setFormSubmitted(true);
    }
    localStorage.setItem("userName", name);
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
            <div>Ingresa tu nombre:</div>
            <Input
              type="text"
              value={name}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
            />
            {formSubmitted && !name && (
              <ErrorMessage>Por favor ingresa tu nombre</ErrorMessage>
            )}
            <Counter count={name.length}>{name.length}/15</Counter>
          </InputContainer>
          <Button onClick={handleArrowClick}>➡</Button>
        </>
      ) : (
        <>
          <PacificoTitle />
          <Subtitle>Köln en español</Subtitle>
          <LangButtonContainer>
            <Button onClick={handleButtonClick}>ES</Button>
            <Button onClick={handleButtonClick}>DE</Button>
          </LangButtonContainer>
        </>
      )}
    </Container>
  );
}

export default HomeMessage;
