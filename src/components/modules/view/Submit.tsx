import { Button } from '@mui/material';

export const Submit = (props: { submit: () => Promise<void> }) => {
  return (
    <Button onClick={props.submit} onTouchEnd={props.submit}>
      確定
    </Button>
  );
};
