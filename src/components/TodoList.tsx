import React from "react";
import { useRecoilValue } from "recoil";

import { todoStore } from "../recoil/todo";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todo = useRecoilValue(todoStore);

  return (
    <section>
      {todo.map((v) => (
        <TodoItem data={v} key={`todoData_${v.id}`} />
      ))}
    </section>
  );
};

export default TodoList;
