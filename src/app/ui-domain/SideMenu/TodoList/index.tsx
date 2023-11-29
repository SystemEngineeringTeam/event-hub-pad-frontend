import { VStack } from '@chakra-ui/react';

import { Todos } from '@/const/todos';

import styles from './style.module.scss';
import { TodoItem } from './TodoItem';

export function TodoList() {
  return (
    <>
      <p>進行中のTodo</p>
      <div className={styles.itemContainer}>
        <VStack spacing="30px" align="stretch">
          {Todos.map((item) => (
            <TodoItem key={item.title} event={item.event} title={item.title} />
          ))}
        </VStack>
      </div>
    </>
  );
}
