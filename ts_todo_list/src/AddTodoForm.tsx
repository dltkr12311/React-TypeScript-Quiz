import React, { ChangeEvent, FormEvent, useState } from "react";

interface addTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<addTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChage = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
  };

  return (
    <form>
      <input type="text" value={newTodo} onChange={handleChage} />
      <button type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};
