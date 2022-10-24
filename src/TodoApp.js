import React from 'react';
import { Paper, AppBar, Typography, Toolbar, Grid } from '@mui/material';
import TodoForm from './TodoForm';
import './styles.css';
const TodoApp = () => {
  return (
    <div>
        <Paper style={{
            padding: "0",
            backgroundColor: "white",
            height: "100vh",
            margin: "0"
        }}>
          <AppBar position = "static" color='primary' style={{ height: "64px"}}>
            <Toolbar>
                <Typography>TodoApp</Typography> 
            </Toolbar>
          </AppBar>
          <Grid><TodoForm /></Grid>
        </Paper>
    </div>
  )
}

export default TodoApp



//-TodoApp
//  -TodoForm
//  -TodoList
//    -TodoItem