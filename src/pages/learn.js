import React, { useState } from 'react';
import CardGrid from "@/components/CardGrid";
//on recupere les langues des animaux dans un tableau depuis le dossier data
// on importe tous de set1
import * as set1 from "@/data/set1";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Learning() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const langues = Object.keys(set1);
  const handleLanguageChange = (event, value) => {
    setSelectedLanguage(value);
  };

  return (
    <div>
      <h1 className="text-4xl text-center">Welcome to my farm!</h1>
      <p className="text-center">{}</p>
      <div className="flex justify-center m-4">
        <Autocomplete
          disablePortal
          id="combo-box-langues"
          className=""
          options={langues}
          sx={{ width: 300 }}
          value={selectedLanguage}
          onChange={handleLanguageChange}
          renderInput={(params) => <TextField {...params} label="Langues" />}
        />
      </div>
      <h1 className="text-2xl text-center">Learn the names of the animals in {selectedLanguage}</h1>
      <CardGrid imgNames={set1.en} names={set1[selectedLanguage]} />
    </div>
  );
}
