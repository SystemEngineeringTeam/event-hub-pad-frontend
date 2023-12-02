import styles from './style.module.scss';
import { TodoList } from '../ui-domain/TodoList';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.todoContainer}>
        <TodoList />
      </div>
    </div>
  );
}
