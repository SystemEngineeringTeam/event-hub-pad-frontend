import { VStack } from '@chakra-ui/react';

import { CARD_ITEMS } from '@/const/cardItems';

import { CardItem } from './CardItem';

export function PeopleAndSpentTime() {
  return (
    <VStack spacing="8px" align="stretch">
      {CARD_ITEMS.map((item) => (
        <CardItem key={item.name} name={item.name} icon={item.icon} />
      ))}
    </VStack>
  );
}
