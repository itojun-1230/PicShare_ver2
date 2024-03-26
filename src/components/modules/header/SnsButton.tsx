import styles from "./header.module.css";

export const SnsButton = (props: {
  href: string;
  icon: JSX.Element;
}) => {
  return (
    <a href={props.href} target="_blank" className={styles.snsButton}>
      {props.icon}
    </a>
  );
}