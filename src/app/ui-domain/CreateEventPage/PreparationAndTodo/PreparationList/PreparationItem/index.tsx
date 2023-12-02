import styles from './style.module.scss';

type Props = {
  name: string;
  amount: string;
};

export function PreparationItem({ name, amount }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.text}>{name}</div>
      <div className={styles.text}>{amount}</div>
    </div>
  );
}
