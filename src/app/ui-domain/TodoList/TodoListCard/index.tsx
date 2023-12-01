import { VStack } from '@chakra-ui/react';

import { ListTodo } from '@/types/todo';

import styles from './style.module.scss';
import { TodoCard } from './TodoCard';

type Props = {
  title: string;
  todos: ListTodo[];
};

export function TodoListCard({ title, todos }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.colorContainer}></div>
      <VStack className={styles.wrapper} spacing="24px" align="stretch">
        <div className={styles.titleContainer}>
          <p className={styles.title}>{title}</p>
        </div>
        <VStack className={styles.cardContainer} spacing="20px" align="stretch">
          {todos.map((todo) => (
            <TodoCard key={todo.id} id={todo.id} title={todo.title} />
          ))}
        </VStack>
      </VStack>
    </div>
  );
}
