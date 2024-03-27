import { Box } from '@mui/material';
import { Id } from './Id';
import { useEffect, useState } from 'react';

import styles from '../dropzone.module.css';
import { Upload } from './Upload';

export const UploadMenu = (props: { img: string }) => {
  const [id, setId] = useState<string | undefined>(undefined);

  useEffect(() => {
    const time = new Date().getTime();
    const random = Math.floor(Math.random() * 100);
    const origin = Number(`${time}${random}`).toString(36);

    let result: string | undefined = undefined;
    for (let i = origin.length - 1; i >= 0; i--) {
      if (origin[i] == '0') {
        continue;
      }
      result = origin.slice(0, i + 1);
      break;
    }
    setId(result);
  }, [props.img]);

  return (
    <Box className={styles.uploadMenu}>
      {id && <Id id={id} />}
      <Upload img={props.img} id={id} />
    </Box>
  );
};
