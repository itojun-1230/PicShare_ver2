import styles from "./dropzone.module.css";

export const Guide = () => {
  return (
    <>
      <label className={styles.guide}>
        <p>
          ここに画像をドラッグ＆ドロップするか、
          <br />
          クリックして選択してください！
        </p>
        <input type="file" />
      </label>
    </>
  );
};
