import { TextField } from "@mui/material"

export const IdInput = (props: {
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <TextField 
      value={props.id} 
      onChange={(e) => props.setId(e.target.value)}
    />
  )
}
