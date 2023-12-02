import { Todo, TodoList } from '@/types/todo';

export const Todos: Todo[] = [
  {
    id: '1',
    event: '2023年度BBQ',
    title: '大きな声でこんにちは',
  },
  {
    id: '2',
    event: '2023年度OB会',
    title:
      '準備する物をコストコ森山店をアホみたいに周回して揃えるついでに井上くんをシス研から追放する',
  },
  {
    id: '3',
    event: '第1919回ゲーム大会',
    title: '先生に土下座する',
  },
];

export const TODO_LIST: TodoList[] = [
  {
    id: '1',
    title: '2023年度BBQ',
    todos: [
      {
        id: '1',
        title: '会場の予約',
      },
      {
        id: '2',
        title: '食材の手配',
      },
      {
        id: '3',
        title: '参加者の確認',
      },
    ],
  },
  {
    id: '2',
    title: '大富豪時ジジ抜きダウト',
    todos: [
      {
        id: '1',
        title: 'トランプの準備',
      },
      {
        id: '2',
        title: '人集め',
      },
      {
        id: '3',
        title: '参加者の確認',
      },
    ],
  },
  {
    id: '1',
    title: '2023年度BBQ',
    todos: [
      {
        id: '1',
        title: '会場の予約',
      },
      {
        id: '2',
        title: '食材の手配',
      },
      {
        id: '3',
        title: '参加者の確認',
      },
    ],
  },
  {
    id: '2',
    title: '大富豪時ジジ抜きダウト',
    todos: [
      {
        id: '1',
        title: 'トランプの準備',
      },
      {
        id: '2',
        title: '人集め',
      },
      {
        id: '3',
        title: '参加者の確認',
      },
    ],
  },
  {
    id: '2',
    title: '大富豪時ジジ抜きダウト',
    todos: [
      {
        id: '1',
        title: 'トランプの準備',
      },
      {
        id: '2',
        title: '人集め',
      },
      {
        id: '3',
        title: '参加者の確認',
      },
    ],
  },
];
