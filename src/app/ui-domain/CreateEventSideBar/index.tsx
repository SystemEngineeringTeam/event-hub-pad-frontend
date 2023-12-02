import { VStack } from '@chakra-ui/react';

import { CreateButton } from './CreateButton';
import { EventInformationList } from './EventInformationList';
import styles from './style.module.scss';
import { TagInputContainer } from './TagInputContainer';
import { EventTagList } from '../EventTagList';

export function CreateEventSideBar() {
  return (
    <div className={styles.container}>
      <VStack spacing="36px" className={styles.itemContainer}>
        <div className={styles.menuContainer}>
          <EventInformationList />
        </div>
        <div className={styles.eventTagContainer}>
          <TagInputContainer />
          <EventTagList />
        </div>
        <div className={styles.buttonContainer}>
          <CreateButton />
        </div>
      </VStack>
    </div>
  );
}
