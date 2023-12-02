import styles from './style.module.scss';

type Props = {
  name: string;
  color: string;
};

export function EventTag({ name }: Props) {
  return <button className={styles.button}>{name}</button>;
}
