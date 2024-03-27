import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from './dropzone.module.css';
import { Box } from '@mui/material';
import { ViewImage } from './Image';
import { Guide } from './Guide';
import { UploadMenu } from './upload/UploadMenu';
import { Cancel } from './Cancel';

export const Dropzone = () => {
  const [img, setImg] = useState<string | undefined>(undefined);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const reader = new FileReader();
    reader.readAsDataURL(acceptedFiles[0]);
    reader.onload = () => {
      if (typeof reader.result != 'string') return;
      setImg(reader.result);
    };
  }, []);

  const { getRootProps } = useDropzone({
    accept: {
      'image/png': ['.png', '.jpg', '.jpeg'], // eslint-disable-line
    },
    onDrop,
  });

  return (
    <Box className={styles.dropzone}>
      <Box
        className={styles.dropzone_main}
        sx={{ pointerEvents: img === undefined ? 'auto' : 'none' }}
        {...getRootProps()}
      >
        {img === undefined && <Guide />}
        {img != undefined && (
          <>
            <Cancel setImg={setImg} />
            <ViewImage img={img} />
          </>
        )}
      </Box>
      {img != undefined && (
        <>
          <UploadMenu img={img} />
        </>
      )}
    </Box>
  );
};
