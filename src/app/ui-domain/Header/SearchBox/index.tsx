import styles from './style.module.scss';

export function SearchBox() {
  return (
    <input
      type="text"
      className={styles.textBox}
      placeholder="イベントジャンルを入力"
    />
  );
}
