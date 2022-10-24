import { Checkbox } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React from "react";
import OnChange from "./hooks/OnChange";
import ValueGet from "./hooks/ValueGet";
import TaskIcon from "@mui/icons-material/Task";
import IconButton from "@mui/material/IconButton";
import { pink } from "@mui/material/colors";

const TodoItem = ({ id, name, completed, deleting, update }) => {
  const [comp, changeMe] = OnChange(completed);
  const [changer, changerMe] = OnChange(false);
  const [setter, handleVal, reset] = ValueGet(name);
  return (
    <div>
      {changer ? (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              update(id, setter);
              reset();
              changerMe();
            }}
          >
            <input className="input" type="text" value={setter} onChange={handleVal}/>
          </form>
        </div>
      ) : (
        <div className="todos" 
        style={{display: 'flex', justifyContent: 'space-around'}}>
          <Checkbox
            onClick={changeMe}
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
          <li key={id} className={comp ? "completed" : {}}>
            {name}
          </li>
          <IconButton onClick={() => deleting(id)}>
            <DeleteOutlineIcon style={{ color: "darkred" }} />
          </IconButton>
          <IconButton>
            <TaskIcon style={{ color: "darkgreen" }} onClick={changerMe} />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
