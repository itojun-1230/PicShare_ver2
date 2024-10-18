import { Loading } from '@/components/atoms/loading/Loading';
import { Button } from '@mui/material';
import { useState } from 'react';
import styles from './view.module.css';

export const Submit = (props: { setImg: React.Dispatch<React.SetStateAction<string>>; id: string }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isScuccess, setIsSuccess] = useState<boolean | undefined>(undefined);

  const submit = async () => {
    setIsLoading(true);
    setIsDisabled(true);
    const url = `https://script.google.com/macros/s/AKfycbxOp_XR5QFehkuSJ2uL8LY91eecDYYLEhMBxWpGtMBzWtTeWRUnwfAncnjBOTf-Y9U/exec?id=${props.id}`;
    await fetch(url, {
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data); // デバッグ用にレスポンスを確認
        if (data.status === 200) {
          props.setImg(data.img);
        }
        setIsSuccess(data.status === 200);
        setIsLoading(false);
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
      onClick={submit}
      onTouchEnd={submit}
      className={`${styles.submit} ${isLoading ? styles.loading : ''}`}
      sx={{
        backgroundColor: getBackgroundColor(),
      }}
      disabled={isDisabled}
    >
      <Loading text="submit" isLoading={isLoading} isScuccess={isScuccess} />
    </Button>
  );
};
