import { createContext, useContext, useState } from "react";

const HighlightContext = createContext();

export const HighlightProvider = ({ children }) => {
  const [highlightStar, setHighlightStar] = useState(false);

  return (
    <HighlightContext.Provider value={{ highlightStar, setHighlightStar }}>
      {children}
    </HighlightContext.Provider>
  );
};

export const useHighlight = () => useContext(HighlightContext);
