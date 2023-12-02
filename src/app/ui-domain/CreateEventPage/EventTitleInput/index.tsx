import styles from './style.module.scss';

export function EventTitleInput() {
  return (
    <div className={styles.container}>
      <div>
        <p>イベント名</p>
      </div>
      <div>
        <input type="text" placeholder="イベントを入力" />
      </div>
    </div>
  );
}
