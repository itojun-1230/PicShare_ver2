import { IconButton, InputAdornment, TextField } from "@mui/material"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import styles from "../dropzone.module.css";

export const Id = (props: {
  id: string | undefined,
}) => {
  console.log(props.id);

  return (
    <TextField
      disabled
      label="ID"
      className={styles.id_menu}
      defaultValue={props.id}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => {
                alert("Copied!");
                navigator.clipboard.writeText(props.id!);
              }}
              onInput={() => {}}
              inputMode="none"
            >
              <ContentCopyIcon />
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  )
}