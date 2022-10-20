import React from "react";
import TodoItem from "./TodoItem";
const TodoList = ({ id, name, remover }) => {
  
  return (
    <div>
      <TodoItem id={id}
       name={name} 
       completed={false} 
       deleting={remover} />
    </div>
  );
};

export default TodoList;
