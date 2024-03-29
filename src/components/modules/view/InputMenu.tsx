import { Box } from '@mui/material';
import { Submit } from './Submit';
import { IdInput } from './Id';
import styles from './view.module.css';

export const InputMenu = (props: {
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  setImg: React.Dispatch<React.SetStateAction<string>>;
}) => {

  return (
    <Box className={styles.inputMenu}>
      <IdInput id={props.id} setId={props.setId} />
      <Submit setImg={props.setImg} id={props.id} />
    </Box>
  );
};
