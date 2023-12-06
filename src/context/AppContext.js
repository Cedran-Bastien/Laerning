import { createContext, useEffect, useState } from "react";
import * as set1 from "@/data/set1.json";

export const AppContext = createContext({
  words: [],
  languages: [],
  selectedLanguage: "en",
  setCurrentLanguage: () => {},
});

export function AppContextProvider({ children }) {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [languages] = useState(
    Object.keys(set1).filter((item) => item !== "default"),
  );
  const [words, setListWords] = useState(set1[selectedLanguage]);

  useEffect(() => {
    setListWords(set1[selectedLanguage]);
    console.log(selectedLanguage);
    console.log(words);
  }, [selectedLanguage, setListWords]);
  const setCurrentLanguage = (newlanguage) => {
    console.log(newlanguage);
    setSelectedLanguage(newlanguage);
  };

  return (
    <AppContext.Provider
      value={{
        words,
        languages,
        selectedLanguage,
        setCurrentLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
