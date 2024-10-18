import { Button } from '@mui/material';
import styles from '../dropzone.module.css';
import { Loading } from '@/components/atoms/loading/Loading';
import { useState } from 'react';

export const Upload = (props: { img: string; id: string | undefined }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isScuccess, setIsSuccess] = useState<boolean | undefined>(undefined);

  const UploadClick = async () => {
    setIsLoading(true);
    setIsDisabled(true);

    await fetch(
      'https://script.google.com/macros/s/AKfycbxOp_XR5QFehkuSJ2uL8LY91eecDYYLEhMBxWpGtMBzWtTeWRUnwfAncnjBOTf-Y9U/exec',
      {
        method: 'POST',
        body: JSON.stringify({
          img: props.img,
          id: props.id,
        }),
      },
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setIsSuccess(data.status === 200);
        alert(data.message);
      })
      .catch((error) => {
        console.error('There was a problem with your fetch operation:', error);
      });
  };

  const getBackgroundColor = () => {
    if (!isDisabled) {
      return 'rgb(238, 130, 238)';
    }

    if (isScuccess) {
      return 'rgb(138, 199, 90)';
    } else {
      return 'rgb(255, 87, 82)';
    }
  };

  return (
    <Button
      onClick={UploadClick}
      className={`${styles.upload} ${isLoading ? styles.loading : ''}`}
      sx={{
        backgroundColor: getBackgroundColor(),
      }}
      disabled={isDisabled}
    >
      <Loading text="Upload" isLoading={isLoading} isScuccess={isScuccess} />
    </Button>
  );
};
