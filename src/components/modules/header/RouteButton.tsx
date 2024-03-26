import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

export const RouteButton = (props: { path: string; text: string }) => {
  return (
    <Button component={Link} to={props.path} className={styles.routeButton}>
      {props.text}
    </Button>
  );
};
