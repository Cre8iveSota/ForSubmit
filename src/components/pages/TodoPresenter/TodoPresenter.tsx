import React, { useState } from "react";
import {
  addTodo,
  removeTodo,
  Todo,
  toggleComplete,
} from "../../../store/todos/types";
import { Button } from "react-bootstrap";

type TodoPresenterProps = {
  todos: Todo[];
  addTodo: addTodo;
  removeTodo: removeTodo;
  toggleComplete: toggleComplete;
};

export const TodoPresenter: React.FC<TodoPresenterProps> = ({
  todos,
  addTodo,
  removeTodo,
  toggleComplete,
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const sendTodo = (title: string, content: string) => {
    addTodo(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <a href={`/`}>Root</a>
          </li>
          <li>
            <a href={`/demo1`}>Demo1</a>
          </li>
          <li>
            <a href={`/demo2`}>Demo2</a>
          </li>
        </ul>
      </nav>
      <form>
        <label>
          タイトル：
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          内容：
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <Button type="button" onClick={() => sendTodo(title, content)}>
          送信
        </Button>
      </form>
      <div>-------------------------</div>
      <h1>Todoリスト</h1>
      {todos.map((todo: Todo) => {
        return (
          <React.Fragment key={todo.id}>
            <div>
              {todo.title} : {todo.isCompleted ? "完了" : "未完了"}
            </div>
            <div>内容：{todo.content}</div>
            <Button type="button" onClick={() => toggleComplete(todo.id)}>
              {todo.isCompleted ? "戻す" : "完了"}
            </Button>
            <Button type="button" onClick={() => removeTodo(todo.id)}>
              削除
            </Button>
          </React.Fragment>
        );
      })}
    </>
  );
};
