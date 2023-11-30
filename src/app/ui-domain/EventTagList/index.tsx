import { EVENT_TAG } from '@/const/eventTag';

import { EventTag } from './EventTag';
import styles from './style.module.scss';

export function EventTagList() {
  return (
    <div className={styles.container}>
      {EVENT_TAG.map((tag) => (
        <EventTag key={tag.name} name={tag.name} color={tag.color} />
      ))}
    </div>
  );
}
