import UseStateValue from "./hooks/UseSetValue";
import TodoList from "./TodoList";

// const Val = [
//   {id: 1, name: 'zain', complete: false},
//   {id: 2, name: 'zain1', complete: false},
//   {id: 3, name: 'zain2', complete: false}];
const TodoForm = () => {
const [task, list, handleSubmit, handleVal, remover ] = UseStateValue([]);

  console.log(() => remover)
  return (
    <div
      style={{
        display: "inline-block",
        textAlign: "center",
        width: "100vw",
      }}
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={handleVal}
          placeholder="Give Task!"
        />
        <br />
        <button type="submit" >
          Submit
        </button>
      </form>
      <br />
      {list.map((item,key) => {
        return( <TodoList 
         id={item.id} 
         name={item.name}
         key={key} 
         remover={remover} />) 
      })}
      
    </div>
  );
};

export default TodoForm;
