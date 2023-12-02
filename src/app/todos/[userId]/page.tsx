import { TodoList } from '@/app/ui-domain/TodoList';

import styles from './style.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.todoContainer}>
        <TodoList />
      </div>
    </div>
  );
}
