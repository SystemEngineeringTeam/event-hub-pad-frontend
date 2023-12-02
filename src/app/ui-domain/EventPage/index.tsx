import { VStack } from '@chakra-ui/react';

import { OtherContent } from './OtherContent';
import { PreparationAndTodo } from './PreparationAndTodo';
import styles from './style.module.scss';
import { Divider } from '../Divider';

export function EventPage() {
  return (
    <div>
      <VStack spacing="12px" align="stretch">
        <div className={styles.container}>
          <div className={styles.circleContainer}>
            <div className={styles.circle} />
          </div>
          <div className={styles.todoContainer}>
            <p className={styles.title}>ダイナミックなしりとり</p>
          </div>
        </div>
        <div>
          <Divider />
        </div>
        <div className={styles.preparationAndTodo}>
          <PreparationAndTodo />
        </div>
        <div>
          <Divider />
        </div>
        <div className={styles.otherContainer}>
          <OtherContent />
        </div>
      </VStack>
    </div>
  );
}
