import Link from 'next/link';
import { ReactNode } from 'react';

import styles from './style.module.scss';

type Props = {
  name: string;
  path: string;
  icon: ReactNode;
};

export function MenuItem({ name, path, icon }: Props) {
  return (
    <Link href={path}>
      <div className={styles.container}>
        <div>{icon}</div>
        <div>{name}</div>
      </div>
    </Link>
  );
}
