import { createContext, useContext, useState } from "react";

const HighlightContext = createContext();

export const useHighlight = () => {
  return useContext(HighlightContext);
};

export const HighlightProvider = ({ children }) => {
  const [highlight, setHighlight] = useState(false);

  const toggleHighlight = () => {
    setHighlight(!highlight);
  };

  return (
    <HighlightContext.Provider value={{ highlight, toggleHighlight }}>
      {children}
    </HighlightContext.Provider>
  );
};
