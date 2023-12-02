import styles from './style.module.scss';
import { AllEventList } from '../ui-domain/AllEventList';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.eventPageContainer}>
        <AllEventList />
      </div>
    </div>
  );
}
