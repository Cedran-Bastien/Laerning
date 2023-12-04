import React,  { useState, useEffect } from "react";
import useApp from "@/hooks/useApp";
import CardGrid from "@/components/CardGrid";


export default function Test() {
  const { words } = useApp();
  const [randomWord, setRandomWord] = useState("");

  useEffect(() => {
    setRandomWord(words[Math.floor(Math.random() * words.length)]);
  }, [words]); 


  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = "en-US"; // la langue du texte
    utterance.volume = 1; // volume (entre 0 et 1) - défaut : 1
    utterance.rate = 0.7; // vitesse d'élocution (entre 0 et 10) - défaut : 1

    window.speechSynthesis.speak(utterance);
  }

  const handleOnImageClick = (text) => {
    let reponse = "Essaye encore";
    if (text === randomWord) {
      reponse = "Bravo";
      console.log("Bravo");
    }
    speak(reponse);
  };

  return (
    <>
      <h1 className="text-4xl text-center">Welcome to my farm !</h1>
      <p className="text-center">{randomWord}</p>
      <button 
        onClick={() => speak(randomWord)} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        aria-label="Speak the word"
      >
        Parler
      </button>
      <CardGrid handleOnImageClick={handleOnImageClick} />
    </>
  );
}
