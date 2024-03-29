import { IconButton } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import styles from './view.module.css';

export const Cancel = (props: { setImg: React.Dispatch<React.SetStateAction<string>> }) => {
  const CancelClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.TouchEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    props.setImg("");
  };

  return (
    <IconButton className={styles.cancel} onClick={CancelClick} onTouchEnd={CancelClick}>
      <CancelIcon />
    </IconButton>
  );
};
