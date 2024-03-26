import styles from "./dropzone.module.css"

export const ViewImage= (props: {
  img: string
}) => {
  return (
    <img src={props.img} className={styles.dropzone_img} alt="preview" />
  );
}