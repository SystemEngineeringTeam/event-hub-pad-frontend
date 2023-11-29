import Link from 'next/link';
import { ReactNode } from 'react';

import styles from './style.module.scss';

type Props = {
  name: string;
  icon: ReactNode;
};

export function MenuItem({ name, icon }: Props) {
  return (
    <Link href="/">
      <div className={styles.container}>
        <div>{icon}</div>
        <div>{name}</div>
      </div>
    </Link>
  );
}
