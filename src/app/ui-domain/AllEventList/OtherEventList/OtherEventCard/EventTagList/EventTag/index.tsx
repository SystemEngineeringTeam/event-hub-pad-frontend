import styles from './style.module.scss';

type Props = {
  name: string;
  color: string;
};

export function EventTag({ name }: Props) {
  return (
    <div className={styles.container}>
      <p>{name}</p>
    </div>
  );
}
