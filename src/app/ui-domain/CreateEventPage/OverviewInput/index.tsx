import styles from './style.module.scss';

export function OverviewInput() {
  return (
    <div className={styles.container}>
      <div>
        <p>概要</p>
      </div>
      <div>
        <textarea placeholder="イベントを入力" />
      </div>
    </div>
  );
}
