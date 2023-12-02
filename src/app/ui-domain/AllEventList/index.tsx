import { OtherTodoList } from './OtherEventList';
import { PopularTodoList } from './PopularEventList';
import styles from './style.module.scss';

export function AllEventList() {
  return (
    <div className={styles.container}>
      <div>
        <h2>人気のイベント</h2>
      </div>
      <div className={styles.populationTodoListContainer}>
        <PopularTodoList />
      </div>
      <div>
        <h2>その他のイベント</h2>
      </div>
      <div className={styles.otherTodoListContainer}>
        <OtherTodoList />
      </div>
    </div>
  );
}
