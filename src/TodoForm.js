import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoList from "./TodoList";

const arr = [{
    id: '',
    name: '',
    completed: false
}];
const TodoForm = () => {
  const [task, setTask] = useState("");
  function handleVal(e) {
    setTask(e.target.value);
  }
  function Clicker(){
    arr.push({
        id: uuidv4(),
        name: task
    })
  }
 console.log(arr)
  return (
    <div
      style={{
        display: "inline-block",
        textAlign: 'center',
        width: '100vw',
      }}
    >
      <form>
        <input
          type="text"
          value={task}
          onChange={handleVal}
          placeholder="Give Task!"
        />
        <br />
        <button type="submit" onClick={Clicker}>Submit</button>
      </form>
      <br />
      <TodoList id={arr.id} name={arr.name} completed={true} />
    </div>
  );
};

export default TodoForm;
