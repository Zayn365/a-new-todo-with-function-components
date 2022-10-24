import React from "react";
import TodoItem from "./TodoItem";
const TodoList = ({ id, name, remover, update }) => {
  
  return (
    <div>
      <TodoItem id={id}
       name={name} 
       completed={false} 
       deleting={remover}
       update = {update} />
    </div>
  );
};

export default TodoList;
