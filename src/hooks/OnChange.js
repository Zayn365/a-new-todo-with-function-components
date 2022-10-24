import { useState } from "react"

function OnChange(completed){
    const [comp, setComp] = useState(completed);
  function changeMe() {
    setComp(!comp);
  }
return [comp , changeMe]
}


export default OnChange;