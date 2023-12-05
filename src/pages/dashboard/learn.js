import React from 'react';
import CardGrid from '@/components/CardGrid';
// on recupere les langues des animaux dans un tableau depuis le dossier data
// on importe tous de set1
import useApp from '@/hooks/useApp';

export default function Learning() {
  const { selectedLanguage } = useApp();

  const handleOnImageClick = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = `${selectedLanguage}-${selectedLanguage.toUpperCase()}`; // la langue du texte
    utterance.volume = 1; // volume (entre 0 et 1) - défaut : 1
    utterance.rate = 0.7; // vitesse d'élocution (entre 0 et 10) - défaut : 1

    window.speechSynthesis.speak(utterance);
  };

  return (
    <>
      <h1 className="mt-4 mb-4 text-2xl text-center">
        Learn the names of the animals in
        {' '}
        {selectedLanguage}
      </h1>
      <CardGrid handleOnImageClick={handleOnImageClick} />
    </>
  );
}
