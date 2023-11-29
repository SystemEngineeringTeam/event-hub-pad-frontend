import { VStack } from '@chakra-ui/react';

import styles from './style.module.scss';

type Props = {
  event: string;
  title: string;
};

export function TodoItem({ event, title }: Props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.circleContainer}>
          <div className={styles.circle} />
        </div>
        <div className={styles.todoContainer}>
          <VStack spacing="4px" align="stretch">
            <p className={styles.eventText}>{event}</p>
            <p className={styles.todoText}>{title}</p>
          </VStack>
        </div>
      </div>
    </>
  );
}
