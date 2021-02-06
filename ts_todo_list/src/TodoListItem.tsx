import React from "react";
import "./TodoListItem.css";
interface TodoListProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListProps> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label className={todo.complate ? "complate" : undefined}>
        <input
          type="checkbox"
          checked={todo.complate}
          onChange={() => toggleTodo(todo)}
        />
        {todo.text}
      </label>
    </li>
  );
};
