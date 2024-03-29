import { Box } from "@mui/material";
import styles from "./view.module.css";
import { useState } from "react";
import { InputMenu } from "./InputMenu";

export const ViewBox = () => {
  const [img, setImg] = useState<string>("");

  return (
    <Box className={styles.viewbox}>
      <InputMenu setImg={setImg} />
    </Box>
  )
}