import styles from './style.module.scss';

export function OtherContentInput() {
  return (
    <div className={styles.container}>
      <div>
        <p>その他</p>
      </div>
      <div>
        <textarea placeholder="懸念点、感想などを入力" />
      </div>
    </div>
  );
}
