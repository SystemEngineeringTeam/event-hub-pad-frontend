export type Todo = {
  id: string;
  event: string;
  title: string;
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
