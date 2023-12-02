import { ReactNode } from 'react';

export type SideMenuItem = {
  name: string;
  path: string;
  icon: ReactNode;
};

export type EventMenu = {
  name: string;
  unit: string;
  icon: ReactNode;
};
