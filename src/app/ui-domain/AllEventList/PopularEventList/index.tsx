import { EventCard } from './EventCard';
import styles from './style.module.scss';

export function PopularTodoList() {
  return (
    <div className={styles.container}>
      <div className={styles.populationTodoList}>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}
