import { CardItemList } from './CardItemList';
import { EventTagList } from './EventTagList';
import styles from './style.module.scss';

export function OtherEventCard() {
  return (
    <div className={styles.container}>
      <div>
        <EventTagList />
      </div>
      <div>
        <h3>2023年度模擬店</h3>
      </div>
      <div className={styles.underContainer}>
        <div className={styles.cardItemListContainer}>
          <CardItemList />
        </div>
        <div className={styles.evenDateContainer}>2023 年 10 月 10 日</div>
      </div>
    </div>
  );
}
