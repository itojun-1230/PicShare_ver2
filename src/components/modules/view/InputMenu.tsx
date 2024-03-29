import { Box } from "@mui/material";
import { Submit } from "./Submit";
import { IdInput } from "./Id";
import styles from "./view.module.css";
import { useState } from "react";

export const InputMenu = (props: {
  setImg: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [id, setId] = useState<string>("");

  const submit = async () => {
    const url = `https://script.google.com/macros/s/AKfycbxOp_XR5QFehkuSJ2uL8LY91eecDYYLEhMBxWpGtMBzWtTeWRUnwfAncnjBOTf-Y9U/exec?id=${id}`;
    await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'text/plain',
      },
    })
    .then(response => {
       return response.json();
    })
    .then(data => {
      if(data.status === 200) props.setImg(data.img);
      alert(data.message);
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });
  }

  return (
    <Box className={styles.inputMenu}>
      <IdInput id={id} setId={setId} />
      <Submit submit={submit} />
    </Box>
  )
}