import { Tag } from './tag';
import { Todo } from './todo';

export type PopularEvent = {
  id: number;
  description: string;
  star: number;
  tags: Tag[];
  people: number;
  price: number;
  spent_time: string;
};

export type OtherEvent = {
  id: number;
  description: string;
  star: number;
  tags: Tag[];
  people: number;
  price: number;
  spent_time: string;
};

export type PopularEventsAndOtherEvent = {
  popular_events: PopularEvent[];
  other_events: OtherEvent[];
};

export type DetailEvent = {
  title: string;
  description: string;
  others: string;
  people: number;
  price: number;
  spent_time: string;
  date: string;
  todos: Todo[];
  prepares: Todo[];
};

export type PostEvent = {
  title: string;
  description: string;
  others: string;
  people: number;
  price: number;
  spentTime: string;
  date: string;
  todos: Todo[];
  prepares: Todo[];
  implementationDate: '2021/10/08';
  tags: Tag[];
};
