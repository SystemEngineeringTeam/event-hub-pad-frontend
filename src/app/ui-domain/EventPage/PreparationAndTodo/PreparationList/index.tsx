import { VStack } from '@chakra-ui/react';

import { PREPARATION } from '@/const/preparation';

import { PreparationItem } from './PreparationItem';
import styles from './style.module.scss';

export function PreparationList() {
  return (
    <>
      <p className={styles.title}>準備する物</p>
      <div className={styles.itemContainer}>
        <VStack spacing="30px" align="stretch">
          {PREPARATION.map((item) => (
            <PreparationItem
              key={item.name}
              name={item.name}
              amount={item.amount}
            />
          ))}
        </VStack>
      </div>
    </>
  );
}
