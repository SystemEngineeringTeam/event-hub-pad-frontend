import { VStack } from '@chakra-ui/react';

import styles from './style.module.scss';
import { TodoListCard } from './TodoListCard';
import { TODO_LIST } from '../../../const/todos';

export function TodoList() {
  return (
    <VStack spacing="12px" align="stretch">
      <div className={styles.titleContainer}>
        <p className={styles.title}>Todo一覧</p>
      </div>
      <div className={styles.scrollContainer}>
        <div className={styles.todoListContainer}>
          {TODO_LIST.map((todoList) => (
            <TodoListCard
              key={todoList.id}
              title={todoList.title}
              todos={todoList.todos}
            />
          ))}
        </div>
      </div>
    </VStack>
  );
}
