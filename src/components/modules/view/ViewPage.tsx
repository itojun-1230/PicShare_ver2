import { Box } from '@mui/material';
import styles from './view.module.css';
import { ViewBox } from './ViewBox';

export const ViewPage = () => {
  return (
    <Box className={styles.viewpage}>
      <ViewBox />
    </Box>
  );
};
