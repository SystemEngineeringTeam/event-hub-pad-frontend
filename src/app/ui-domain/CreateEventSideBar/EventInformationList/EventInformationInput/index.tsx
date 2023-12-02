import { ReactNode } from 'react';

import styles from './style.module.scss';

type Props = {
  name: string;
  unit: string;
  icon: ReactNode;
};

export function EventInformationInput({ name, unit, icon }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.iconNameWrapper}>
        <div>{icon}</div>
        <div>{name}</div>
      </div>
      <div className={styles.inputContainer}>
        <input type="text" placeholder="入力してください" />
        <div>{unit}</div>
      </div>
    </div>
  );
}
