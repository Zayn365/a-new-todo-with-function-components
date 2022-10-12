import { Checkbox } from "@mui/material";
import { useState } from "react";
import React from "react";
const TodoList = ({ id, name, completed }) => {
  const [comp, setComp] = useState(completed);
  function changeMe() {
    setComp(!comp);
  }
  return (
    <div>
      <ul>
        <li key={id} style={!comp ? { color: "lightgrey" } : {}}>
          Task:{name}
        </li>
        <Checkbox onClick={changeMe} />
      </ul>
    </div>
  );
};

export default TodoList;
