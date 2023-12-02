import { VStack } from '@chakra-ui/react';

import { Todos } from '@/const/todos';

import styles from './style.module.scss';
import { TodoItem } from './TodoItem';

export function TodoList() {
  return (
    <>
      <p className={styles.title}>やること</p>
      <div className={styles.itemContainer}>
        <VStack spacing="30px" align="stretch">
          {Todos.map((todo) => (
            <TodoItem key={todo.title} name={todo.title} />
          ))}
        </VStack>
      </div>
    </>
  );
}
