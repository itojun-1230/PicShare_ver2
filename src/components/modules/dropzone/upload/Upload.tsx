import { Button } from "@mui/material"
import styles from "../dropzone.module.css";

export const Upload = (props: {
  img: string
  id: string | undefined
}) => {

  const UploadClick = () => {
    alert("Upload")
  }

  return (
    <Button 
      onClick={UploadClick}
      className={styles.upload}
      >
      Upload
    </Button>
  )
}