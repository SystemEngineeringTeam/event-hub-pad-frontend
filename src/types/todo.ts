export type Todo = {
  id: number;
  title: string;
};

export type TodoAll = {
  todoall: [
    {
      id: number;
      title: string;
      todos: Todo[];
    },
  ];
};

export type ListTodo = {
  id: string;
  title: string;
};

export type TodoList = {
  id: string;
  title: string;
  todos: ListTodo[];
};
