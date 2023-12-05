import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import React from 'react';
import useApp from '@/hooks/useApp';

function LanguageChoose() {
  const { selectedLanguage, languages, setCurrentLanguage } = useApp();
  const handleOnLanguageChange = (event, value) => {
    setCurrentLanguage(value);
  };

  return (
    <>
      <h1 className="mt-4 mb-10 text-4xl text-center">Choose your learning language</h1>
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
    </>
  );
}

export default LanguageChoose;
