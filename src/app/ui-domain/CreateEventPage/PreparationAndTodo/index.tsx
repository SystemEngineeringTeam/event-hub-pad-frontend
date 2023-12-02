import { PreparationList } from './PreparationList';
import styles from './style.module.scss';
import { TodoList } from './TodoList';
import { Divider } from '../../Divider';

export function PreparationAndTodo() {
  return (
    <div className={styles.container}>
      <div className={styles.menuContainer}>
        <TodoList />
      </div>
      <div className={styles.dividerContainer}>
        <Divider />
      </div>
      <div className={styles.menuContainer}>
        <PreparationList />
      </div>
    </div>
  );
}
