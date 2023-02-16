import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "./types";
import { state } from "./state";

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState: state,
  reducers: {
    addNinniNoNamae: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateComplete: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    },
  },
});

export const { addNinniNoNamae, remove, updateComplete } = todoSlice.actions;
