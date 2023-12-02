import { EventPage } from '@/app/ui-domain/EventPage';
import { EventSideBar } from '@/app/ui-domain/EventSideBar';

import styles from './style.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.eventPageContainer}>
        <EventPage />
      </div>
      <div>
        <EventSideBar />
      </div>
    </div>
  );
}
