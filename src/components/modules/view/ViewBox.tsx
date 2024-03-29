import { Box } from "@mui/material";
import styles from "./view.module.css";
import { useState } from "react";
import { InputMenu } from "./InputMenu";
import { Cancel } from "./Cancel";
import { ViewImg } from "./ViewImg";

export const ViewBox = () => {
  const [img, setImg] = useState<string>("");
  const [id, setId] = useState<string>("");

  return (
    <Box className={styles.viewbox}>
      {img && (
        <>
          <ViewImg img={img} id={id} />
          <Cancel setImg={setImg} setId={setId} />
        </>
      )}
      {!img && (
        <InputMenu id={id} setId={setId} setImg={setImg} />
      )}
    </Box>
  )
}