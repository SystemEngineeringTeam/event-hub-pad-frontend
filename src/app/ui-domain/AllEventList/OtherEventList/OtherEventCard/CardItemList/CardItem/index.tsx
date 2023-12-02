import { ReactNode } from 'react';

import styles from './style.module.scss';

type Props = {
  name: string;
  icon: ReactNode;
};

export function CardItem({ name, icon }: Props) {
  return (
    <div className={styles.container}>
      <div>{icon}</div>
      <div>{name}</div>
    </div>
  );
}
