import { VStack } from '@chakra-ui/react';

import { EventInformationList } from './EventInformationList';
import { ReferenceButton } from './ReferenceButton';
import styles from './style.module.scss';
import { EventTagList } from '../EventTagList';

export function EventSideBar() {
  return (
    <div className={styles.container}>
      <VStack spacing="36px" className={styles.itemContainer}>
        <div className={styles.eventTagContainer}>
          <EventTagList />
        </div>
        <div className={styles.menuContainer}>
          <EventInformationList />
        </div>
        <div className={styles.buttonContainer}>
          <ReferenceButton />
        </div>
      </VStack>
    </div>
  );
}
