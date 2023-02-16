//TodoContainer.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNinniNoNamae,
  remove,
  updateComplete,
} from "../../../store/todos/todoSlice";
import { RootState } from "../../../store/rootState.type";
import { addTodo, Todo } from "../../../store/todos/types";
import { TodoPresenter } from "./TodoPresenter";

export const TodoContainer = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const maxID = todos.length ? todos.slice(-1)[0].id : 0;
  const dispatch = useDispatch();

  const addTodo: addTodo = (title: string, content: string) => {
    const newTodo: Todo = {
      id: maxID + 1,
      title: title,
      content: content,
      isCompleted: false,
    };
    dispatch(addNinniNoNamae(newTodo));
  };
  const removeTodo = (id: number) => {
    dispatch(remove(id));
  };
  const toggleComplete = (id: number) => {
    dispatch(updateComplete(id));
  };
  const args = {
    todos,
    addTodo,
    removeTodo,
    toggleComplete,
  };
  return <TodoPresenter {...args} />;
};
