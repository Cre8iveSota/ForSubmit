export type Todo = {
  id: number;
  title: string;
  content: string;
  isCompleted: boolean;
};

export type addTodo = (title: string, content: string) => void;

export type removeTodo = (id: number) => void;

export type toggleComplete = (id: number) => void;
