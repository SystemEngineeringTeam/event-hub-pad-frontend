import { VStack } from '@chakra-ui/react';

import { SideMenuEventInputs } from '@/const/eventSideMenu';

import { EventInformationInput } from './EventInformationInput';
import styles from './style.module.scss';

export function EventInformationList() {
  return (
    <>
      <div className={styles.itemContainer}>
        <VStack spacing="30px" align="stretch">
          {SideMenuEventInputs.map((item) => (
            <EventInformationInput
              key={item.name}
              name={item.name}
              unit={item.unit}
              icon={item.icon}
            />
          ))}
        </VStack>
      </div>
    </>
  );
}
