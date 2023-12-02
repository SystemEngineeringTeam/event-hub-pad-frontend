import { CreateEventPage } from '@/app/ui-domain/CreateEventPage';
import { CreateEventSideBar } from '@/app/ui-domain/CreateEventSideBar';

import styles from './style.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.eventPageContainer}>
        <CreateEventPage />
      </div>
      <div>
        <CreateEventSideBar />
      </div>
    </div>
  );
}
