import { VStack } from '@chakra-ui/react';

import { EventTitleInput } from './EventTitleInput';
import { OtherContentInput } from './OtherContentInput';
import { OverviewInput } from './OverviewInput';
import { PreparationAndTodo } from './PreparationAndTodo';
import { Divider } from '../Divider';

export function CreateEventPage() {
  return (
    <>
      <VStack spacing="32px" align="stretch">
        <EventTitleInput />
        <OverviewInput />
        <VStack spacing="8px" align="stretch">
          <Divider />
          <PreparationAndTodo />
          <Divider />
        </VStack>
        <OtherContentInput />
      </VStack>
    </>
  );
}
