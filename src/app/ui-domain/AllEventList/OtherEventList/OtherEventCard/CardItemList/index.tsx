import { Divider } from '@/app/ui-domain/Divider';
import { OTHER_CARD_ITEMS } from '@/const/cardItems';

import { CardItem } from './CardItem';
import styles from './style.module.scss';

export function CardItemList() {
  return (
    <div className={styles.container}>
      {OTHER_CARD_ITEMS.map((item) => (
        <>
          <CardItem key={item.name} name={item.name} icon={item.icon} />
          <div className={styles.dividerContainer}>
            <Divider />
          </div>
        </>
      ))}
    </div>
  );
}
