import { Button } from '@mui/material';
import styles from '../dropzone.module.css';

export const Upload = (props: { img: string; id: string | undefined }) => {
  const UploadClick = async () => {
    await fetch("https://script.google.com/macros/s/AKfycbxOp_XR5QFehkuSJ2uL8LY91eecDYYLEhMBxWpGtMBzWtTeWRUnwfAncnjBOTf-Y9U/exec", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify({
        'img': props.img,
        'id': props.id
      })
    })
    .then(response => {
       return response.json();
    })
    .then(data => {
      alert(data.message);
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });
  };

  return (
    <Button onClick={UploadClick} className={styles.upload}>
      Upload
    </Button>
  );
};
