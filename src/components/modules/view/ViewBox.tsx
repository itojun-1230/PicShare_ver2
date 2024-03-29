import { Box } from "@mui/material";
import styles from "./view.module.css";
import { useState } from "react";
import { InputMenu } from "./InputMenu";
import { Cancel } from "./Cancel";

export const ViewBox = () => {
  const [img, setImg] = useState<string>("");

  return (
    <Box className={styles.viewbox}>
      {img && (
        <>
          <img src={img} alt="画像" />
          <Cancel setImg={setImg} />
        </>
      )}
      {!img && (
        <InputMenu setImg={setImg} />
      )}
    </Box>
  )
}