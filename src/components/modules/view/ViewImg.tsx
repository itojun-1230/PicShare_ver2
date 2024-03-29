import { Button, Link } from "@mui/material";
import styles from "./view.module.css";

export const ViewImg = (props: {
  img: string;
  id: string;
}) => {
  return (
    <Button className={styles.viewImg}>
      <Link href={props.img} download={`${props.id}.png`}>
        <img src={props.img} alt="画像" />
      </Link>
    </Button>
  );
}