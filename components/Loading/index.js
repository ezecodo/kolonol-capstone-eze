import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
`;

const LoadingSpinner = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-top: 8px solid #15aabf;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 2s linear infinite;
`;

const Loading = () => (
  <LoadingWrapper>
    <LoadingSpinner />
  </LoadingWrapper>
);

export default Loading;
