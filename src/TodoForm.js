import { useEffect } from "react";
import UseStateValue from "./hooks/UseSetValue";
import TodoList from "./TodoList";


const Val = JSON.parse(window.localStorage.getItem("list") || [])
// const Val = [
//   {id: 1, name: 'zain', complete: false},
//   {id: 2, name: 'zain1', complete: false},
//   {id: 3, name: 'zain2', complete: false}];
const TodoForm = () => {
const [task, list, handleSubmit, handleVal, remover , uploader ] = UseStateValue(Val);
useEffect(() => {
  window.localStorage.setItem("list" , JSON.stringify(list))
}, [list] )
  return (
    <div
      // style={{
      //   display: "inline-block",
      //   textAlign: "center",
      //   width: "100vw",
      // }}
    >
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={task}
          onChange={handleVal}
          placeholder="Give Task!"
        />
        <br />
      </form> 
      <br />
      {list.map((item,key) => {
        return( <TodoList 
         id={item.id} 
         name={item.name}
         key={key} 
         remover={remover}
         update = {uploader} />) 
      })}
      
    </div>
  );
};

export default TodoForm;
