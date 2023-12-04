import { useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import CardGrid from "@/components/CardGrid";

export default function Test() {
  const [currentWord] = useState();
  const [openSuccess, setSuccess] = useState(false);
  const [openError, setError] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSuccess(false);
    setError(false);
  };

  const handelOnImageClick = (name) => {
    if (currentWord === name) {
      setSuccess(true);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={openSuccess}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Good Answer !
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={openError}
        autoHideDuration={6000}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Wrong Answer: try an other time
        </Alert>
      </Snackbar>
      <CardGrid handleOnImageClick={handelOnImageClick()} />
    </>
  );
}
