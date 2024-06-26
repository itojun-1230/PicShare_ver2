import { IconButton } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import styles from './dropzone.module.css';

export const Cancel = (props: { setImg: React.Dispatch<React.SetStateAction<string | undefined>> }) => {
  const CancelClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.TouchEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    props.setImg(undefined);
  };

  return (
    <IconButton className={styles.cancel} onClick={CancelClick} onTouchEnd={CancelClick}>
      <CancelIcon />
    </IconButton>
  );
};
