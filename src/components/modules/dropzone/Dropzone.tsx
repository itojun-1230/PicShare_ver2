import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from './dropzone.module.css';
import { Box } from '@mui/material';
import { ViewImage } from './Image';
import { Guide } from './Guide';

export const Dropzone = (props: {
  img: string | undefined;
  setImg: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {

    const reader = new FileReader();
    reader.readAsDataURL(acceptedFiles[0]);
    reader.onload = () => {
      if (typeof reader.result != "string") return;
      props.setImg(reader.result);
    };
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/png': ['.png', '.jpg', '.jpeg'],
    }, onDrop
  });

  return (
    <Box className={styles.dropzone}>
      <Box  {...getRootProps()} className={styles.dropzone_main}>
        <input {...getInputProps()} />
        {props.img === undefined && <Guide />}
        {props.img != undefined && <ViewImage img={props.img} />}
      </Box>
    </Box>
  );
}