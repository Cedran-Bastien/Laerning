import { Alert, Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';
import useApp from '@/hooks/useApp';
import CardGrid from '@/components/CardGrid';

export default function Test() {
  const [openSuccess, setSuccess] = useState(false);
  const [openError, setError] = useState(false);
  const { words } = useApp();
  const [randomWord, setRandomWord] = useState('horse');
  const [wordChoose, setWordChoose] = useState(false);

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = 'en-US'; // la langue du texte
    utterance.volume = 1; // volume (entre 0 et 1) - défaut : 1
    utterance.rate = 0.7; // vitesse d'élocution (entre 0 et 10) - défaut : 1

    window.speechSynthesis.speak(utterance);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSuccess(false);
    setError(false);
  };

  const handelOnImageClick = (name) => {
    if (!wordChoose) {
      speak('you have to click on the next button');
      return;
    }

    let reponse = 'Try again !';
    if (name === randomWord) {
      setError(false);
      setSuccess(true);
      setWordChoose(false);
      reponse = 'Good work !';
    } else {
      setSuccess(false);
      setError(true);
    }
    speak(reponse);
  };

  useEffect(() => {
    if (!wordChoose) {
      return;
    }
    speak(randomWord);
  }, [randomWord, wordChoose]);

  const handelOnNextButtonClick = () => {
    setRandomWord(words[Math.floor(Math.random() * words.length)]);
    setWordChoose(true);
  };

  const handelOnListenButtonClick = () => {
    speak(randomWord);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={openSuccess}
        autoHideDuration={1500}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Good Answer !
          let`&apos;`s next
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={openError}
        autoHideDuration={1500}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Wrong Answer: try again !
        </Alert>
      </Snackbar>
      <h1 className="text-4xl text-center">Welcome to my farm !</h1>
      <CardGrid handleOnImageClick={handelOnImageClick} />
      <div className="inline-block gap-2">
        <button
          type="button"
          disabled={wordChoose}
          onClick={handelOnNextButtonClick}
          className="disabled:bg-blue-100 bg-blue-500 m-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Next
        </button>
        <button
          type="button"
          onClick={handelOnListenButtonClick}
          className="bg-blue-500 m-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Listen
        </button>
      </div>

    </>
  );
}
