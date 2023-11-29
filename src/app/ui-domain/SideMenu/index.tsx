import { MenuList } from './MenuList';
import styles from './style.module.scss';
import { TodoList } from './TodoList';
import { Divider } from '../Divider';

export function SideMenu() {
  return (
    <div className={styles.container}>
      <div className={styles.menuContainer}>
        <MenuList />
      </div>
      <div className={styles.dividerContainer}>
        <Divider />
      </div>
      <div className={styles.menuContainer}>
        <TodoList />
      </div>
    </div>
  );
}
