import styled from "styled-components";

const StyledPacificoTitle = styled.h1`
  font-family: "Pacifico", cursive;
  margin-bottom: ${(props) => props.marginBottom || "5px"};
  background-size: auto;
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "75px"};
  text-shadow: ${(props) => props.textShadow || "none"};
`;

const PacificoTitle = ({ color, fontSize, textShadow }) => {
  return (
    <StyledPacificoTitle
      color={color}
      fontSize={fontSize}
      textShadow={textShadow}
    >
      Köloñol
    </StyledPacificoTitle>
  );
};

export default PacificoTitle;
