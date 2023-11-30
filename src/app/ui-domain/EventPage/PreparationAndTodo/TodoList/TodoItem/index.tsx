import styles from './style.module.scss';

type Props = {
  name: string;
};

export function TodoItem({ name }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.square}></div>
      <div className={styles.text}>{name}</div>
    </div>
  );
}
