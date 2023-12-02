import { VStack } from '@chakra-ui/react';

import { SideMenuItems } from '@/const/sideMenu';

import { MenuItem } from './MenuItem';
import styles from './style.module.scss';

export function MenuList() {
  return (
    <>
      <p>メニュー</p>
      <div className={styles.itemContainer}>
        <VStack spacing="30px" align="stretch">
          {SideMenuItems.map((item) => (
            <MenuItem
              key={item.name}
              name={item.name}
              path={item.path}
              icon={item.icon}
            />
          ))}
        </VStack>
      </div>
    </>
  );
}
