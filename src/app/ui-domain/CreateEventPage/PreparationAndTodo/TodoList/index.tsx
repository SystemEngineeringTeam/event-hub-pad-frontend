import { VStack } from '@chakra-ui/react';

import { Todos } from '@/const/todos';

import styles from './style.module.scss';
import { TodoItem } from './TodoItem';
import { InputContainer } from '../PreparationList/InputContainer';

export function TodoList() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>やること</p>
      <InputContainer />
      <div className={styles.itemContainer}>
        <VStack spacing="30px" align="stretch">
          {Todos.map((todo) => (
            <TodoItem key={todo.title} name={todo.title} />
          ))}
        </VStack>
      </div>
    </div>
  );
}
