import { EventTagList } from './EventTagList';
import { PeopleAndSpentTime } from './PeopleAndSpentTime';
import { StarCard } from './StarCard';
import styles from './style.module.scss';

export function EventCard() {
  return (
    <div className={styles.container}>
      <div className={styles.starContainer}>
        <StarCard number="19k" />
      </div>
      <div className={styles.cardContainer}>
        <div>
          <h3>こんにちは</h3>
        </div>
        <p>
          BBQのやり方をまとめてみました。今季は河原でうぇ！〜い〜！したとても楽しくワイワイできた...
        </p>
        <div className={styles.peopleAndSpentTimeAndTagContainer}>
          <div>
            <EventTagList />
          </div>
          <div>
            <PeopleAndSpentTime />
          </div>
        </div>
      </div>
    </div>
  );
}
