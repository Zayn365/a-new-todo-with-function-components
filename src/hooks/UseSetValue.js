import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


function UseStateValue (intialVal) {
  const [task, setTask] = useState();
  const [list , setList] = useState(intialVal);
  function handleVal(e) {
    setTask(e.target.value);
  }
  function handleSubmit(e){
    if(task){
      setList(list.concat({
        id: uuidv4(),
        name: task,
      }));
    }
    setTask('');
    e.preventDefault();
  };
  const remover = todoId =>  {
      
    const updateList = list.filter(list => list.id !== todoId);
     setList(updateList);
  };

  const uploader = (todoId , todoName) => {

    const updateList = list.map(list => { 
    return  list.id === todoId ? {...list , name: todoName} : list
  })
     setList(updateList);
  }
  
      return [task, list, handleSubmit, handleVal, remover, uploader ];

}


export default UseStateValue;