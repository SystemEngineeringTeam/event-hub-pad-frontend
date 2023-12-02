import { VStack } from '@chakra-ui/react';

import { EventSideMenuItem } from '@/const/eventSideMenu';

import { EventInformationItem } from './EventInformationItem';
import styles from './style.module.scss';

export function EventInformationList() {
  return (
    <>
      <div className={styles.itemContainer}>
        <VStack spacing="30px" align="stretch">
          {EventSideMenuItem.map((item) => (
            <EventInformationItem
              key={item.name}
              name={item.name}
              icon={item.icon}
            />
          ))}
        </VStack>
      </div>
    </>
  );
}
