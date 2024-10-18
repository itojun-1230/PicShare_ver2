import { Box } from '@mui/material';
import { Id } from './Id';
import { useEffect, useState } from 'react';

import styles from '../dropzone.module.css';
import { Upload } from './Upload';

export const UploadMenu = (props: { img: string }) => {
  const [id, setId] = useState<string | undefined>(undefined);

  useEffect(() => {
    const time = new Date().getTime();
    const random = Math.floor(Math.random() * 10);
    const origin = Number(time).toString(36);

    let result = '';
    // originをランダムに4文字にする
    for (let i = 0; i < 4; i++) {
      result += origin[Math.floor(Math.random() * origin.length)];
    }
    result += random;

    setId(result);
  }, [props.img]);

  return (
    <Box className={styles.uploadMenu}>
      {id && <Id id={id} />}
      <Upload img={props.img} id={id} />
    </Box>
  );
};
