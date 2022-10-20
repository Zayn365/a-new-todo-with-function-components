import { Checkbox } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from "react";
import React from 'react';
import TaskIcon from '@mui/icons-material/Task';
import IconButton from '@mui/material/IconButton';
import { pink } from '@mui/material/colors';

const TodoItem = ({id , name, completed,  deleting}) => {
    const [comp, setComp] = useState(completed);
  function changeMe() {
    setComp(!comp);
  }
  return (
    <div>
        <ul>
        <Checkbox 
        onClick={changeMe} 
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }} />
        <li key={id} style={comp ? { color: "lightgrey" } : {}}>
         {id} : {name}
        </li>
        <IconButton onClick={() => deleting(id)}>
        <DeleteOutlineIcon style={{color: 'darkred'}} />
        </IconButton>
        <IconButton>
        <TaskIcon style={{color: 'darkgreen'}} />
        </IconButton>
      </ul>
    </div>
  )
}

export default TodoItem