import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import React, { useState } from 'react';
import useApp from "@/hooks/useApp";
import { useRouter } from 'next/navigation';

function LanguageChoose() {
  const { selectedLanguage, languages, setCurrentLanguage } = useApp();
  const [autocompleteValue, setValue] = useState(selectedLanguage)
  const router = useRouter()

  const handleOnLanguageChange = (event, language) => {
    setValue(language);
  };

  const handelOnListenButtonClick = () => {
    setCurrentLanguage(autocompleteValue)
    router.push("/dashboard/learn");
  };

  return (
    <>
      <h1 className="mt-4 mb-10 text-4xl text-center">
        Choose your learning language
      </h1>
      <div className="flex justify-center m-4">
        <Autocomplete
          disablePortal
          id="combo-box-langues"
          options={languages}
          sx={{ width: 300 }}
          value={autocompleteValue}
          onChange={handleOnLanguageChange}
          renderInput={(params) => <TextField {...params} label="Langues" />}
        />
      </div>
      <div className="flex justify-center">
        <button
          aria-label="Choose"
          type="button"
          onClick={handelOnListenButtonClick}
          className="bg-blue-500 m-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Choose
        </button>
      </div>
    </>
  );
}

export default LanguageChoose;
