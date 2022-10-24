import {useState} from 'react'


function ValueGet (oldVal)  {
    const [newVal , setNewVal] = useState(oldVal);
    
    function handleVal (e) {
        setNewVal(e.target.value);
    } 
    function reset() {
        setNewVal('')
    }

    return [newVal , handleVal, reset];
    
}

export default ValueGet