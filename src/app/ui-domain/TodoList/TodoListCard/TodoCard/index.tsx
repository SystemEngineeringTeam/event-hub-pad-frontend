import { VStack } from '@chakra-ui/react';

import styles from './style.module.scss';

type Props = {
  id: string;
  title: string;
};

export function TodoCard({ title }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <VStack spacing="16px" align="stretch">
          <div className={styles.titleContainer}>
            <p className={styles.title}>{title}</p>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>完了する</button>
          </div>
        </VStack>
      </div>
    </div>
  );
}
