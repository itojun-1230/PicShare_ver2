import { Box, CircularProgress } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import ErrorIcon from '@mui/icons-material/Error';

import styles from "./loading.module.css";
import { useState } from "react";

export const Loading = (props: {
  text: string;
  isLoading: boolean;
  isScuccess?: boolean;
}) => {
  const [isActivate, setIsActivate] = useState(false);

  if (props.isLoading) {
    if(!isActivate) setIsActivate(true);

    return (
      <Box className={styles.loading}>
        <CircularProgress
          size={24}
          sx={{
            color: "rgb(138, 199, 90)",
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: '-12px',
            marginLeft: '-12px',
          }}
        />
      </Box>
    )
  }

  if (!isActivate) {
    return (
      <Box className={styles.loading}>
        {props.text}
      </Box>
    )
  }


  return (
    <Box className={styles.loading}>
      {props.isScuccess ? (
        <CheckIcon
          sx={{
            color: "aliceblue",
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: '-12px',
            marginLeft: '-12px',
          }}

        />
      ) : (
        <ErrorIcon
          sx={{
            color: "aliceblue",
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: '-12px',
            marginLeft: '-12px',
          }}
        />
      )}
    </Box>
  )
}