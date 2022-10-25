import React from 'react';
import { Grid } from '@mui/material';
import TodoForm from './TodoForm';
import './styles.css';
const TodoApp = () => {
  return (
    <div>
      
   
           <h1>TodoApp</h1>
          <Grid><TodoForm /></Grid>
    </div>
  )
}

export default TodoApp



//-TodoApp
//  -TodoForm
//  -TodoList
//    -TodoItem