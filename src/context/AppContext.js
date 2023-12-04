import { createContext, useState } from "react";
import * as set1 from "@/data/set1.json";

export const AppContext = createContext({
  words: [],
  languages: [],
  selectedLanguage: "en",
  setWords: () => {},
  setCurrentLanguage: () => {},
});

export function AppContextProvider({ children }) {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [languages] = useState(
    Object.keys(set1).filter((item) => item !== "default"),
  );
  const [words, setListWords] = useState(set1[selectedLanguage]);

  const setWords = () => {
    setListWords(set1[selectedLanguage]);
  };
  const setCurrentLanguage = (newlanguage) => {
    setSelectedLanguage(newlanguage);
    setWords();
  };

  return (
    <AppContext.Provider
      value={{
        words,
        languages,
        selectedLanguage,
        setWords,
        setCurrentLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
