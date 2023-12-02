import { VStack } from '@chakra-ui/react';

import { PREPARATION } from '@/const/preparation';

import { InputContainer } from './InputContainer';
import { PreparationItem } from './PreparationItem';
import styles from './style.module.scss';

export function PreparationList() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>準備する物</p>
      <InputContainer />
      <div className={styles.itemContainer}>
        <VStack spacing="32px" align="stretch">
          {PREPARATION.map((item) => (
            <PreparationItem
              key={item.name}
              name={item.name}
              amount={item.amount}
            />
          ))}
        </VStack>
      </div>
    </div>
  );
}
