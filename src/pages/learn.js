import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CardGrid from "@/components/CardGrid";
// on recupere les langues des animaux dans un tableau depuis le dossier data
// on importe tous de set1
import useApp from "@/hooks/useApp";

export default function Learning() {
  const { selectedLanguage, languages, setCurrentLanguage } = useApp();

  // const [selectedLanguage, setSelectedLanguage] = useState("en");
  const handleOnLanguageChange = (event, value) => {
    setCurrentLanguage(value);
  };

  const handleOnImageClick = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = "en-US"; // la langue du texte
    utterance.volume = 1; // volume (entre 0 et 1) - défaut : 1
    utterance.rate = 0.7; // vitesse d'élocution (entre 0 et 10) - défaut : 1

    window.speechSynthesis.speak(utterance);
  };

  return (
    <>
      <h1 className="text-4xl text-center">Welcome to my farm!</h1>
      <p className="text-center">{}</p>
      <div className="flex justify-center m-4">
        <Autocomplete
          disablePortal
          id="combo-box-langues"
          options={languages}
          sx={{ width: 300 }}
          value={selectedLanguage}
          onChange={handleOnLanguageChange}
          renderInput={(params) => <TextField {...params} label="Langues" />}
        />
      </div>
      <h1 className="text-2xl text-center">
        Learn the names of the animals in {selectedLanguage}
      </h1>
      <CardGrid handleOnImageClick={handleOnImageClick} />
    </>
  );
}
