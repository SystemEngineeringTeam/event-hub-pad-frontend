import { OtherEventCard } from './OtherEventCard';
import styles from './style.module.scss';

export function OtherTodoList() {
  return (
    <div className={styles.container}>
      <div className={styles.populationTodoListContainer}>
        <OtherEventCard />
        <OtherEventCard />
        <OtherEventCard />
        <OtherEventCard />
        <OtherEventCard />
        {/* <OtherEventCard />
        <OtherEventCard />
        <OtherEventCard /> */}
      </div>
    </div>
  );
}
